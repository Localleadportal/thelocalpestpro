'use strict';

// Server-side contractor fetcher with in-memory caching.
//
// Pulls the assigned contractor for a (state, county, serviceType) from
// LeadPortal's /api/directory/contractor JSON endpoint, caches the result,
// and exposes a single async getContractor() that the Express routes call
// before rendering. Failure is non-fatal: this module never throws and
// always returns null on any error so the page falls back to the (844)
// directory number and still renders.
//
// Cache strategy: 1-hour TTL on successful lookups, 5-minute TTL on null
// results (no contractor assigned) or errors. Short error TTL prevents
// hammering LeadPortal during a transient outage while still picking up
// new assignments within an hour of the change in LeadPortal.

const NodeCache = require('node-cache');
const { SITE } = require('../data/site');

const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
const FETCH_TIMEOUT_MS = 2000;
const SUCCESS_TTL_SEC = 60 * 60;  // 1 hour
const ERROR_TTL_SEC   = 5 * 60;   // 5 minutes

const cache = new NodeCache({
  stdTTL: SUCCESS_TTL_SEC,
  checkperiod: 120,
  useClones: false  // contractor objects are read-only downstream; skip the deep-clone overhead
});

/**
 * Fetch the assigned contractor for a (state, county, serviceType).
 *
 * Returns the contractor object when assigned:
 *   { assigned: true, name, telephone,
 *     streetAddress?, addressLocality?, addressRegion?, postalCode?,
 *     image?, url?, licenseNumber? }
 *
 * Returns null when:
 *   - LeadPortal has no contractor assigned to this county
 *   - LeadPortal returns a non-200 response
 *   - The fetch times out (2 seconds)
 *   - The response isn't valid JSON or doesn't have name + telephone
 *   - Any other network / parse error
 *
 * Never throws — pages must always render.
 */
// County naming isn't consistent between this site and LeadPortal: our city
// data carries the full "Cherokee County" (good for display), but a contractor
// may have been assigned under the bare "Cherokee" (or vice-versa). Try both
// forms so the lookup matches regardless of which the contractor selected.
const COUNTY_SUFFIX = /\s+(County|Parish|Borough|Census Area|Municipality|City)$/i;
function countyVariants(county) {
  const c = String(county).trim();
  const m = COUNTY_SUFFIX.exec(c);
  const alt = m ? c.slice(0, m.index).trim() : `${c} County`;
  // De-dupe in case stripping/appending produced the same string.
  return alt && alt !== c ? [c, alt] : [c];
}

// Single LeadPortal lookup for one exact (state, county, serviceType). Returns
// the contractor object when assigned, or null on any miss / error. Never throws.
async function fetchContractor(state, county, serviceType) {
  const url = `${LEAD_PORTAL}/api/directory/contractor`
    + `?state=${encodeURIComponent(state)}`
    + `&serviceType=${encodeURIComponent(serviceType)}`
    + `&county=${encodeURIComponent(county)}`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(url, { signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) {
      console.error('[contractor] LeadPortal non-OK', res.status, url);
      return null;
    }
    const data = await res.json();
    // Defensive validation — require both name and telephone to claim assignment.
    if (data && data.assigned === true && data.name && data.telephone) return data;
    // data.assigned === false is a normal "no contractor" response.
    return null;
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    console.error('[contractor] LeadPortal fetch failed', msg);
    return null;
  }
}

async function getContractor(state, county, serviceType) {
  if (!state || !county || !serviceType) return null;

  // Hard guard: this is a Pest Control directory ONLY. The same county can have
  // contractors assigned under other service types in LeadPortal (e.g. a Wildlife
  // Removal company), so we refuse to look up — and therefore can never display —
  // anything but the site's canonical Pest Control service type. Compared
  // case-insensitively so a stray casing/whitespace difference can't slip through.
  if (String(serviceType).trim().toLowerCase() !== SITE.SERVICE_TYPE.toLowerCase()) {
    return null;
  }

  const key = `${state}:${county}:${serviceType}`;
  const cached = cache.get(key);
  if (cached !== undefined) return cached;

  let result = null;
  for (const variant of countyVariants(county)) {
    result = await fetchContractor(state, variant, serviceType);
    if (result) break;  // first assigned match wins
  }

  // Cache hits get the full hour; misses / errors get a short window so
  // we recover quickly when LeadPortal comes back or a contractor is assigned.
  cache.set(key, result, result ? SUCCESS_TTL_SEC : ERROR_TTL_SEC);
  return result;
}

module.exports = { getContractor };
