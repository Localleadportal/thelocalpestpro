'use strict';

// ── Pest Control Directory — SSR Express app ─────────────────────────────────
// Same infrastructure as the wildlife directory (removewildlifenow):
//   • Clicking a state on the homepage map drills into that state.
//   • Every location page pulls its assigned contractor from Local Lead Portal
//     by (state, county, serviceType='Pest Control'); when none is assigned the
//     shared (844) directory number is shown.
//   • Indexability and per-page content are added one page at a time.
//
// RIGHT NOW only the homepage (with the interactive US map) and its supporting
// endpoints are wired. State / city pages are added incrementally — the
// scaffolding (locations data, contractor lookup, format helpers) is already in
// place so those routes can be dropped in without re-plumbing.

const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const us = require('us');
const { SITE } = require('./data/site');
const { statesAndCounties, stateSlugToName, countySlugToName, toSlug } = require('./data/locations');
const { SERVICES, getService } = require('./data/services');
const { STATES, getStatePage, DEFAULT_PESTS } = require('./data/states');
const { GEORGIA_COUNTIES } = require('./data/counties');
if (STATES.georgia) STATES.georgia.counties = GEORGIA_COUNTIES;
const { getContractor } = require('./lib/contractor');
const { formatPhone, toTitleCase, normalizeStateRegion, normalizeUrl } = require('./lib/format');
const spam = require('./lib/spam');
const { createLeadHandler } = require('./lib/leadForm');

const app = express();
// Strict routing so "/path" and "/path/" are distinct: the canonical form is
// always trailing-slash, and no-slash variants 301-redirect to it. MUST be set
// before the first route, because Express locks the router's strict-routing
// flag the first time the router is initialized.
app.enable('strict routing');

// Branding + format helpers exposed to every EJS template.
app.locals.SITE = SITE;
app.locals.formatPhone = formatPhone;
app.locals.toTitleCase = toTitleCase;
app.locals.normalizeStateRegion = normalizeStateRegion;
app.locals.normalizeUrl = normalizeUrl;
// Canonical six-pest set every state page renders when it doesn't localize.
app.locals.DEFAULT_PESTS = DEFAULT_PESTS;
// Service + state catalogs for cross-linking (related services, browse-by-state).
app.locals.SERVICES = SERVICES;
app.locals.STATES = STATES;

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true);

// ── Canonical-host redirect ──────────────────────────────────────────────────
// Send every apex-domain request to its https://www equivalent (path + query
// preserved) with a 301, so deep links never split link equity across hosts.
// Derived from SITE.DOMAIN so it follows the brand config in one place.
const CANONICAL_HOST = SITE.DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '');
const APEX_HOST = CANONICAL_HOST.replace(/^www\./, '');
app.use((req, res, next) => {
  const host = (req.headers.host || '').toLowerCase();
  if (host && host !== CANONICAL_HOST && host.replace(/^www\./, '') === APEX_HOST) {
    return res.redirect(301, `https://${CANONICAL_HOST}${req.originalUrl}`);
  }
  next();
});

// ── Caching ──────────────────────────────────────────────────────────────────
// Static assets get a long immutable cache; CSS is cache-busted with a content
// hash (?v=) so "immutable" is safe. HTML is no-cache (revalidate every request)
// so a deploy is reflected immediately.
function assetHash(relPath) {
  try {
    const buf = fs.readFileSync(path.join(__dirname, 'public', relPath));
    return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);
  } catch (e) {
    return '1';
  }
}
app.locals.cssVersion = assetHash('css/style.css');

// HSTS — once a browser sees this over HTTPS it refuses plain-http requests to
// the domain for a year, so the apex's http hop never downgrades a repeat
// visitor (and stale "Not secure" tab state can't recur). Sent only on secure
// requests; `trust proxy` (set above) makes req.secure reflect Railway's
// X-Forwarded-Proto. `preload` is intentionally omitted — the apex is served by
// GoDaddy forwarding, which can't emit HSTS, so the domain isn't preload-eligible.
app.use((req, res, next) => {
  if (req.secure) res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1y', immutable: true }));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  // Fresh signed timestamp for the "text or call me back" form on this page.
  res.locals.formToken = spam.issueToken();
  next();
});
app.use(express.urlencoded({ extended: true }));

// ── "Text or call me back" form ──────────────────────────────────────────────
// Every city hub and city pest page carries the form (views/_lead-form.ejs).
// The lead is handed to LeadPortal, which routes it to this county's
// contractor. Needs WEB_LEAD_KEY (this site's key in LeadPortal's WEB_LEAD_KEYS).
const leadRateLimit = spam.createRateLimiter({ max: Number(process.env.FORM_RATE_MAX) || 5 });
app.post('/request-callback/', createLeadHandler({
  getStatePage,
  serviceType: SITE.SERVICE_TYPE,
  base: SITE.DOMAIN,
  spamGuard: (req, v) => {
    for (const check of [
      () => spam.checkOrigin(req, [CANONICAL_HOST, APEX_HOST, req.get('host')]),
      () => spam.checkToken(req.body.form_token),
      () => spam.checkContent(v),
      () => leadRateLimit(req.ip)
    ]) {
      const r = check();
      if (!r.ok) return r;
    }
    return { ok: true };
  }
}));

// ── Map data endpoint — TopoJSON + FIPS→slug mapping for the D3 homepage map ──
const topoJson = JSON.parse(fs.readFileSync(require.resolve('us-atlas/states-10m.json'), 'utf8'));
const fipsMap = {};
us.STATES.forEach(s => { fipsMap[s.fips] = { name: s.name, slug: toSlug(s.name) }; });
app.get('/api/states-map', (req, res) => {
  res.json({ topo: topoJson, fips: fipsMap });
});

// robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nDisallow: /request-callback/\nSitemap: ${SITE.DOMAIN}/sitemap.xml\n`);
});

// ── sitemap.xml ──────────────────────────────────────────────────────────────
// Generated dynamically from the live data on every request, so newly added
// pages appear automatically with zero manual upkeep. It walks exactly what the
// routes serve: the homepage, each national service page, each built state hub,
// its state pest pages, its county pages, its city hubs, and each city's per-pest pages. Anything
// flagged `noindex` is skipped, so the sitemap never contradicts a page's robots
// meta. `lastmod` is the modified date (W3C YYYY-MM-DD) of the data file backing
// each URL, giving Search Console an accurate, per-page freshness signal that
// updates whenever you edit that file and redeploy.
const INDEX_FILE = path.join(__dirname, 'views', 'index.ejs');
const SERVICES_FILE = path.join(__dirname, 'data', 'services.js');
const STATES_FILE = path.join(__dirname, 'data', 'states.js');
const cityFile = (citySlug, stateAbbr) =>
  path.join(__dirname, 'data', 'cities', `${citySlug}-${String(stateAbbr || '').toLowerCase()}.js`);
function fileLastmod(file) {
  try { return fs.statSync(file).mtime.toISOString().slice(0, 10); } catch (e) { return null; }
}
const xmlEscape = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

app.get('/sitemap.xml', (req, res) => {
  const entries = [];
  const add = (loc, src) => entries.push({ loc: SITE.DOMAIN + loc, mod: fileLastmod(src) });

  add('/', INDEX_FILE);
  Object.values(SERVICES).forEach(s => { if (!s.noindex) add(`/${s.slug}/`, SERVICES_FILE); });
  Object.values(STATES).forEach(st => {
    add(`/${st.slug}/`, STATES_FILE);
    Object.values(st.counties || {}).forEach(c => add(`/${st.slug}/${c.slug}/`, path.join(__dirname, 'data', 'counties.js')));
    Object.keys(st.pestPages || {}).forEach(ps => add(`/${st.slug}/${ps}/`, STATES_FILE));
    Object.values(st.cityPages || {}).forEach(city => {
      const cf = cityFile(city.slug, st.abbr);
      const src = fs.existsSync(cf) ? cf : STATES_FILE;
      add(`/${st.slug}/${city.slug}/`, src);
      Object.keys(city.pestPages || {}).forEach(ps => add(`/${st.slug}/${city.slug}/${ps}/`, src));
    });
  });

  const body = entries.map(e =>
    `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>${e.mod ? `\n    <lastmod>${e.mod}</lastmod>` : ''}\n  </url>`
  ).join('\n');
  res.type('application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  );
});

// Homepage
app.get('/', (req, res) => {
  res.render('index');
});

// ── Dedicated service pages ──────────────────────────────────────────────────
// /pest-control/, /termite-control/, /bed-bug-treatment/, /cockroach-control/,
// /mosquito-control/, /rodent-control/. These pages ARE indexable: no service
// entry sets noindex, service.ejs emits "index, follow", and the sitemap
// includes them. (An older comment here claimed they were held at noindex;
// that was wrong — no indexation was changed to correct it, only this comment.)
app.get('/:serviceSlug/', (req, res, next) => {
  const service = getService(req.params.serviceSlug);
  if (!service) return next();
  res.render('service', { service });
});
// Trailing-slash redirect — only for known services, so unknown slugs still 404.
app.get('/:serviceSlug', (req, res, next) => {
  if (!getService(req.params.serviceSlug)) return next();
  res.redirect(301, `/${req.params.serviceSlug}/`);
});

// ── State hub pages ──────────────────────────────────────────────────────────
// One consumer-focused, SEO page per built-out state (data/states.js) covering
// every pest in that state and linking out to the national /<service>/ pages.
// Reached from the homepage map (which links each state to /<slug>/). Only
// states with authored content render; the rest fall through to the 404 handler,
// so the map's other states stay "coming soon" until built. State pages always
// show the shared (844) directory number — county/city contractor routing lives
// on deeper pages. No state slug collides with a service slug, so this sits
// safely after the service routes above.
app.get('/:stateSlug/', (req, res, next) => {
  const state = getStatePage(req.params.stateSlug);
  if (state) return res.render('state', { state });
  // Valid US state that is not built yet: coming-soon page (noindex), not a 404.
  const unbuiltName = stateSlugToName(req.params.stateSlug);
  if (unbuiltName) return res.render('coming-soon', { stateName: unbuiltName, stateSlug: req.params.stateSlug });
  return next();
});
// Trailing-slash redirect — for built states and valid unbuilt states, so
// unknown slugs still 404.
app.get('/:stateSlug', (req, res, next) => {
  if (getStatePage(req.params.stateSlug) || stateSlugToName(req.params.stateSlug)) return res.redirect(301, `/${req.params.stateSlug}/`);
  return next();
});

// ── /:state/:slug/ — state pest page OR city hub ─────────────────────────────
// Two different pages share this shape: a state pest page (pestPages[slug], e.g.
// /georgia/termite-control/) and a city hub (cityPages[slug], e.g.
// /georgia/woodstock/). Pest pages are checked first. City hubs pull the
// assigned LeadPortal contractor for the city's county so the page shows a local
// pro (name, phone, LocalBusiness schema) — falling back to the (844) line when
// none is assigned. Unknown slugs fall through to 404.
app.get('/:stateSlug/:slug/', async (req, res, next) => {
  const state = getStatePage(req.params.stateSlug);
  if (!state) return next();
  const { slug } = req.params;
  if (state.counties && state.counties[slug]) {
    const county = state.counties[slug];
    const contractor = await getContractor(state.name, county.name, SITE.SERVICE_TYPE);
    return res.render('county', { state, county, contractor });
  }
  if (state.pestPages && state.pestPages[slug]) {
    return res.render('state-service', { state, page: state.pestPages[slug], serviceSlug: slug });
  }
  const city = state.cityPages && state.cityPages[slug];
  if (city) {
    const contractor = await getContractor(state.name, city.county, SITE.SERVICE_TYPE);
    return res.render('city', { state, city, contractor });
  }
  return next();
});
// Trailing-slash redirect — only for built state-pest or city pages.
app.get('/:stateSlug/:slug', (req, res, next) => {
  const state = getStatePage(req.params.stateSlug);
  if (!state) return next();
  const { slug } = req.params;
  const exists = (state.pestPages && state.pestPages[slug]) || (state.cityPages && state.cityPages[slug]) || (state.counties && state.counties[slug]);
  if (!exists) return next();
  res.redirect(301, `/${req.params.stateSlug}/${slug}/`);
});

// ── /:state/:city/:pest/ — city + pest pages ─────────────────────────────────
// Fully localized, unique-content city pest pages — e.g.
// /georgia/woodstock/termite-control/. Shows the assigned local contractor for
// the city's county (LocalBusiness schema) or the (844) fallback. Unknown
// combinations fall through to 404.
app.get('/:stateSlug/:citySlug/:serviceSlug/', async (req, res, next) => {
  const state = getStatePage(req.params.stateSlug);
  if (!state || !state.cityPages) return next();
  const city = state.cityPages[req.params.citySlug];
  if (!city || !city.pestPages) return next();
  const page = city.pestPages[req.params.serviceSlug];
  if (!page) return next();
  const contractor = await getContractor(state.name, city.county, SITE.SERVICE_TYPE);
  res.render('city-service', { state, city, page, serviceSlug: req.params.serviceSlug, contractor });
});
// Trailing-slash redirect — only for built city+pest pages, so others 404.
app.get('/:stateSlug/:citySlug/:serviceSlug', (req, res, next) => {
  const state = getStatePage(req.params.stateSlug);
  if (!state || !state.cityPages) return next();
  const city = state.cityPages[req.params.citySlug];
  if (!city || !city.pestPages || !city.pestPages[req.params.serviceSlug]) return next();
  res.redirect(301, `/${req.params.stateSlug}/${req.params.citySlug}/${req.params.serviceSlug}/`);
});

// 404 — anything not yet built.
app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`${SITE.NAME} running on port ${PORT}`));
