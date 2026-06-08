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
const { getService } = require('./data/services');
const { getStatePage, DEFAULT_PESTS } = require('./data/states');
const { getContractor } = require('./lib/contractor');
const { formatPhone, toTitleCase, normalizeStateRegion, normalizeUrl } = require('./lib/format');

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
// Canonical five-pest set every state page renders when it doesn't localize.
app.locals.DEFAULT_PESTS = DEFAULT_PESTS;

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
app.use((req, res, next) => { res.set('Cache-Control', 'no-cache'); next(); });
app.use(express.urlencoded({ extended: true }));

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
  res.send(`User-agent: *\nAllow: /\nSitemap: ${SITE.DOMAIN}/sitemap.xml\n`);
});

// Homepage
app.get('/', (req, res) => {
  res.render('index');
});

// ── Dedicated service pages ──────────────────────────────────────────────────
// /pest-control/, /termite-control/, /bed-bug-treatment/, /cockroach-control/,
// /mosquito-control/, /rodent-control/. Held at noindex and kept out of any
// sitemap until full content is authored (see data/services.js). The routes
// exist only so the homepage category links resolve. Unknown single segments
// fall through to the 404 handler (state / city pages are added later, and no
// state slug collides with a service slug).
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
  if (!state) return next();
  res.render('state', { state });
});
// Trailing-slash redirect — only for built states, so unknown slugs still 404.
app.get('/:stateSlug', (req, res, next) => {
  if (!getStatePage(req.params.stateSlug)) return next();
  res.redirect(301, `/${req.params.stateSlug}/`);
});

// 404 — anything not yet built (city pages are added one at a time).
app.use((req, res) => res.status(404).render('404', { message: 'Page not found.' }));

app.listen(PORT, () => console.log(`${SITE.NAME} running on port ${PORT}`));
