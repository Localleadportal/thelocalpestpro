'use strict';

// ── Single source of truth for site-wide branding ───────────────────────────
// Every brand-dependent value lives here. Change it in this one file and the
// whole site — titles, canonical tags, schema, logo, footer — re-renders
// correctly. No other file hardcodes the brand.
//
// PHONE is the shared LeadPortal directory number — the same (844) number the
// wildlife directory uses. It is the fallback shown anywhere a county-level
// contractor has NOT been assigned in LeadPortal.

const SITE = {
  // Display name.
  NAME: 'The Local Pest Pro',
  // Two-tone logo: first part bold, second part accent-colored.
  NAME_PARTS: ['The Local Pest', 'Pro'],
  // Canonical host.
  DOMAIN: 'https://www.thelocalpestpro.com',
  // Shared LeadPortal directory number (same 844 line as the wildlife site).
  PHONE_DISPLAY: '(844) 544-3498',
  PHONE_TEL: '+18445443498',
  // LeadPortal canonical service-type/category for contractor assignment.
  SERVICE_TYPE: 'Pest Control',
};

module.exports = { SITE };
