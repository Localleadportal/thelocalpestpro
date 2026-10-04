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
//
// "No contractor" and "LeadPortal didn't answer" are deliberately NOT the same
// thing here. See lastConfirmed below.

const NodeCache = require('node-cache');
const { SITE } = require('../data/site');

const LEAD_PORTAL = 'https://localleadportal-production.up.railway.app';
// Overridable by env so the cache behaviour can be exercised in a test without
// waiting out a real hour.
const num = (name, fallback) => Number(process.env[name]) || fallback;
const FETCH_TIMEOUT_MS = num('CONTRACTOR_TIMEOUT_MS', 5000);  // Railway cold starts can exceed 2s
const SUCCESS_TTL_SEC  = num('CONTRACTOR_SUCCESS_TTL_SEC', 60 * 60);   // 1 hour
const ERROR_TTL_SEC    = num('CONTRACTOR_ERROR_TTL_SEC', 5 * 60);      // 5 minutes
const STALE_MAX_SEC    = num('CONTRACTOR_STALE_MAX_SEC', 48 * 60 * 60); // outage cover

const cache = new NodeCache({
  stdTTL: SUCCESS_TTL_SEC,
  checkperiod: 120,
  useClones: false  // contractor objects are read-only downstream; skip the deep-clone overhead
});

// The last contractor LeadPortal actually confirmed for a county, kept apart
// from the main cache and used ONLY when LeadPortal gives no answer at all
// (timeout, non-200, bad JSON). Without this, a single cold start blanks the
// local business — and its LocalBusiness schema — off every page for five
// minutes and shows the 844 number instead; pages that look like generic
// directory filler are the ones Google declines to index.
//
// A successful "assigned: false" is a real answer, not an outage: it means the
// contractor has given up the territory. That clears this memory immediately,
// so a released county falls back to the 844 number on the very next render.
const lastConfirmed = new NodeCache({ stdTTL: STALE_MAX_SEC, checkperiod: 600, useClones: false });

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

// Three distinct outcomes, because the caller has to treat them differently:
// an assigned contractor, a confirmed-open county, and no answer at all.
const UNASSIGNED = { state: 'unassigned' };
const UNAVAILABLE = { state: 'unavailable' };

// Single LeadPortal lookup for one exact (state, county, serviceType).
// Never throws.
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
      return UNAVAILABLE;
    }
    const data = await res.json();
    // Defensive validation — require both name and telephone to claim assignment.
    if (data && data.assigned === true && data.name && data.telephone) return { state: 'assigned', contractor: data };
    // A well-formed assigned:false is LeadPortal telling us the county is open.
    if (data && data.assigned === false) return UNASSIGNED;
    // Anything else (missing fields, unexpected shape) is not a usable answer.
    console.error('[contractor] LeadPortal unusable response', JSON.stringify(data).slice(0, 200));
    return UNAVAILABLE;
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    console.error('[contractor] LeadPortal fetch failed', msg);
    return UNAVAILABLE;
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

  let assigned = null;
  let sawAnswer = false;   // at least one variant got a real answer from LeadPortal
  for (const variant of countyVariants(county)) {
    const outcome = await fetchContractor(state, variant, serviceType);
    if (outcome.state === 'assigned') { assigned = outcome.contractor; break; }
    if (outcome.state === 'unassigned') sawAnswer = true;
  }

  if (assigned) {
    cache.set(key, assigned, SUCCESS_TTL_SEC);
    lastConfirmed.set(key, assigned);
    return assigned;
  }

  if (sawAnswer) {
    // LeadPortal confirmed the county is open: forget the old contractor so the
    // page shows the 844 number from here on.
    lastConfirmed.del(key);
    cache.set(key, null, ERROR_TTL_SEC);
    return null;
  }

  // No answer at all. Hold the last confirmed contractor rather than quietly
  // turning the page into generic directory filler mid-outage.
  const remembered = lastConfirmed.get(key);
  if (remembered) {
    console.warn('[contractor] LeadPortal unreachable; serving last confirmed contractor for', key);
    cache.set(key, remembered, ERROR_TTL_SEC);
    return remembered;
  }

  cache.set(key, null, ERROR_TTL_SEC);
  return null;
}

module.exports = { getContractor };
