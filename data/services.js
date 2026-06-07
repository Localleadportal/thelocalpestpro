'use strict';

// ── Dedicated service pages ──────────────────────────────────────────────────
// Only categories with distinct search intent get their own page. Every other
// homepage category links to the general /pest-control/ page (they're covered
// there). These pages are INDEXABLE by default — published with real content as
// they are added. To hold a single page back, set `noindex: true` on its entry
// below; otherwise it is indexed (see views/service.ejs).
//
// Rodent control is framed deliberately around the PEST-CONTROL angle (recurring
// baiting, monitoring, exterior stations, exclusion as part of an ongoing
// program) so it does not duplicate any wildlife-removal rodent content. This
// property stays independent — no cross-linking to other sites.

const SERVICES = {
  'pest-control': {
    slug: 'pest-control',
    name: 'General Pest Control',
    h1: 'General Pest Control',
    intro: "Recurring, whole-home protection against ants, spiders, roaches, wasps, flies, fleas, and the other common household pests — one quarterly plan that treats current problems and prevents the next ones.",
    metaDesc: 'Find a licensed local exterminator for recurring, whole-home pest control. Ants, spiders, roaches, wasps, flies, fleas, and more — one plan, year-round protection.',
  },
  'termite-control': {
    slug: 'termite-control',
    name: 'Termite Treatment',
    h1: 'Termite Treatment',
    intro: "Liquid soil barriers, in-ground bait stations, and annual inspections that stop subterranean and drywood termites before they compromise your home's structure.",
    metaDesc: 'Find a licensed termite control pro near you. Liquid barrier treatments, bait stations, and inspections to protect your home from termite damage.',
  },
  'bed-bug-treatment': {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    h1: 'Bed Bug Treatment',
    intro: "Whole-room heat treatment and targeted residual programs that eliminate bed bugs at every stage — eggs, nymphs, and adults — with follow-up verification.",
    metaDesc: 'Find a licensed bed bug treatment pro near you. Heat treatment and targeted programs that eliminate bed bugs at every life stage.',
  },
  'cockroach-control': {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    h1: 'Cockroach Control',
    intro: "Gel baiting, crack-and-crevice application, and sanitation guidance that clears German and American roaches and keeps them from coming back.",
    metaDesc: 'Find a licensed cockroach control pro near you. Gel baiting and crack-and-crevice treatment that clears roaches and prevents their return.',
  },
  'mosquito-control': {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    h1: 'Mosquito Control',
    intro: "Yard barrier treatments, larvicide for standing-water breeding sites, and recurring seasonal service that makes your outdoor space usable again.",
    metaDesc: 'Find a licensed mosquito control pro near you. Yard barrier sprays, breeding-site treatment, and seasonal programs to reclaim your yard.',
  },
  'rodent-control': {
    slug: 'rodent-control',
    name: 'Rodent Control',
    h1: 'Rodent Control',
    intro: "Ongoing mouse and rat control built on tamper-resistant exterior bait stations, scheduled monitoring, and sealing the gaps pests slip through — managed as part of a recurring pest program, not a one-time job.",
    metaDesc: 'Find a licensed rodent control pro near you. Recurring baiting, monitoring, and exclusion that keeps mice and rats out year-round as part of an ongoing pest program.',
  },
};

function getService(slug) {
  return Object.prototype.hasOwnProperty.call(SERVICES, slug) ? SERVICES[slug] : null;
}

module.exports = { SERVICES, getService };
