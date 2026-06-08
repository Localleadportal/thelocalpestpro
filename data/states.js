'use strict';

// ── State landing pages ──────────────────────────────────────────────────────
// Each state hub is a single, consumer-focused, SEO page that covers every pest
// in that state. We deliberately DO NOT build individual pest pages per state —
// the dedicated /<service>/ pages (data/services.js) are the "national" pages
// that every state hub links into. A state page therefore needs no county grid
// and no per-pest sub-pages; it ranks for "<pest> control <state>" intent on its
// own and routes the click either to the matching national service page or to
// the shared (844) directory line.
//
// Contractor assignment in LeadPortal is county-level, so a STATE page has no
// single assigned contractor — it always shows the shared (844) directory
// number (SITE.PHONE). County/city contractor routing happens on deeper pages.
//
// Cities: the `cities` array is the "Cities We Service" section. It starts small
// and grows ONE AT A TIME as coverage expands — add an entry here and the page
// re-renders. An entry is { name } (rendered as a plain badge) or
// { name, href } once a dedicated city page exists. When the array is empty the
// section renders a statewide fallback message instead of an empty grid.

const GEORGIA = {
  name: 'Georgia',
  slug: 'georgia',
  abbr: 'GA',

  // ── SEO ──
  metaTitle: 'Pest Control in Georgia | Local Exterminators Near You',
  metaDesc:
    "Licensed pest control across Georgia — termites, fire ants, roaches, mosquitoes, bed bugs, rodents & more. Georgia's warm, humid climate means year-round pressure. Call for a free local quote.",

  heroSub:
    "Georgia's warm, humid climate keeps pests active nearly year-round — from termite swarms in spring to mosquitoes all summer and rodents seeking shelter each fall. Connect with a licensed local exterminator who knows Georgia pests and treats them fast.",

  // Multi-paragraph overview (consumer + SEO). Each string is one <p>.
  overview: [
    "Few states give pests a better home than Georgia. The humid subtropical climate — long, hot summers, mild winters, and abundant rainfall from the mountains to the coast — means most pests here never get a true off-season. Where colder states get a winter reprieve, Georgia homeowners face termites, ants, roaches, and rodents close to year-round, which is why a recurring pest-control plan usually beats one-off treatments in this state.",
    "Georgia also sits in one of the highest termite-pressure zones in the country. Eastern subterranean termites are active statewide, and aggressive Formosan termites have established along the coast and in parts of metro Atlanta. Combine that with red imported fire ants in nearly every county, German and smokybrown cockroaches, and some of the worst urban mosquito pressure in the nation — Atlanta routinely lands on national 'worst for mosquitoes' lists — and most Georgia homes benefit from professional protection.",
    "Every pro in our directory is a licensed, insured Georgia exterminator who provides a free, property-specific quote before any work begins. One call connects you with someone who knows your area's pest pressure and the fastest, safest way to deal with it.",
  ],

  // Regulatory trust signal (authority + accuracy).
  regulationNote:
    "Pest control in Georgia is licensed and regulated by the <strong>Georgia Department of Agriculture</strong> through the Structural Pest Control Commission. Every contractor in this directory is licensed to operate in the state and applies EPA-registered products at label rates.",

  // The pests covered on this page. `href` points at the national service page
  // (data/services.js) for that category; pests without a dedicated page route
  // to general pest control. Order = rough search-volume / importance for GA.
  pests: [
    {
      emoji: '🐛',
      name: 'Termite Treatment',
      href: '/termite-control/',
      blurb:
        "Georgia is a top-tier termite state. Liquid soil barriers, in-ground bait stations, and annual inspections stop subterranean and Formosan termites before they damage your home's structure.",
    },
    {
      emoji: '🐜',
      name: 'Ant & Fire Ant Control',
      href: '/pest-control/',
      blurb:
        "Red imported fire ants, Argentine ants, odorous house ants, and carpenter ants are all common in Georgia. Recurring exterior treatment knocks down mounds and keeps trails out of the house.",
    },
    {
      emoji: '🦟',
      name: 'Mosquito Control',
      href: '/mosquito-control/',
      blurb:
        "Metro Atlanta consistently ranks among the worst US cities for mosquitoes. Yard barrier treatments and standing-water larvicide make your outdoor space usable through Georgia's long season.",
    },
    {
      emoji: '🪳',
      name: 'Cockroach Control',
      href: '/cockroach-control/',
      blurb:
        "German roaches indoors and smokybrown/American 'palmetto bugs' outdoors thrive in Georgia's humidity. Gel baiting and crack-and-crevice treatment clear them and keep them from returning.",
    },
    {
      emoji: '🛏️',
      name: 'Bed Bug Treatment',
      href: '/bed-bug-treatment/',
      blurb:
        "Atlanta appears on national bed bug lists every year. Whole-room heat treatment and targeted residual programs eliminate bed bugs at every life stage, with follow-up verification.",
    },
    {
      emoji: '🐀',
      name: 'Rodent Control',
      href: '/rodent-control/',
      blurb:
        "Roof rats, Norway rats, and house mice push indoors as Georgia nights cool. Ongoing baiting, monitoring, and sealing entry points keeps them out as part of a recurring program.",
    },
    {
      emoji: '🕷️',
      name: 'Spider Control',
      href: '/pest-control/',
      blurb:
        "Most Georgia spiders are harmless, but brown recluse and black & brown widow spiders warrant attention. Treatment targets harborage areas and the insects spiders feed on.",
    },
    {
      emoji: '🐝',
      name: 'Wasps, Hornets & Yellowjackets',
      href: '/pest-control/',
      blurb:
        "Paper wasps, hornets, and ground-nesting yellowjackets peak in Georgia's late summer and fall. Pros remove active nests safely and treat to prevent rebuilding.",
    },
    {
      emoji: '🐛',
      name: 'Flea & Tick Control',
      href: '/pest-control/',
      blurb:
        "Georgia's mild winters let fleas and ticks stay active for much of the year. Yard and interior treatment protects pets and family and breaks the breeding cycle.",
    },
  ],

  // Seasonal pest calendar — strong consumer value + long-tail SEO.
  seasons: [
    {
      season: 'Spring (Mar–May)',
      text: "Termites swarm — the #1 sign of an active colony. Ants emerge in force, carpenter bees bore into wood trim, and mosquito breeding begins with the first warm rains. The best window to start a recurring plan before pressure peaks.",
    },
    {
      season: 'Summer (Jun–Aug)',
      text: "Peak season statewide. Mosquitoes are relentless (especially in metro Atlanta), fire ant mounds multiply, roaches move indoors out of the heat, and wasp and yellowjacket nests grow large. Fleas and ticks are at their most active.",
    },
    {
      season: 'Fall (Sep–Nov)',
      text: "Rodents and overwintering pests look for a warm place to spend winter — this is when mice and roof rats get into attics and walls. Yellowjackets turn aggressive as colonies break down. A great time to seal entry points.",
    },
    {
      season: 'Winter (Dec–Feb)',
      text: "Georgia's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Quarterly service maintains the protective barrier through the cooler months.",
    },
  ],

  // ── Cities We Service ──
  // Grow this ONE AT A TIME as coverage expands. Plain badge: { name: 'Macon' }.
  // Linked once a city page exists: { name: 'Macon', href: '/georgia/macon/' }.
  cities: [],

  // ── FAQ (GA-specific, SEO + FAQPage schema) ──
  faqs: [
    {
      q: 'How much does pest control cost in Georgia?',
      a: "It depends on the pest, the severity of the problem, and your property size. General recurring pest control is the most affordable option, while specialty work like termite treatment or bed bug remediation costs more because of the equipment and follow-up involved. Every contractor in our directory gives a free, property-specific quote before any work starts, so you'll know your exact price up front.",
    },
    {
      q: 'Do I really need termite protection in Georgia?',
      a: "For most homes, yes. Georgia sits in one of the highest termite-pressure regions in the country — subterranean termites are active in every county and Formosan termites have spread along the coast and into metro Atlanta. Termite damage isn't typically covered by homeowners insurance, so an active liquid barrier or bait system plus annual inspections is one of the cheapest forms of protection for your home's structure.",
    },
    {
      q: 'When do termites swarm in Georgia?',
      a: "Subterranean termites usually swarm on warm, humid days in spring, roughly March through May, often after rain. A swarm of winged insects indoors or piles of discarded wings near windows is a strong sign of an active colony nearby — and a reason to schedule an inspection right away.",
    },
    {
      q: 'Why are mosquitoes so bad in Georgia?',
      a: "Georgia's heat, humidity, and frequent rain create ideal breeding conditions, and the long warm season means mosquitoes are active for much of the year. Metro Atlanta regularly ranks among the worst US cities for mosquitoes. Professional yard barrier treatments plus eliminating standing-water breeding sites are the most effective way to take your outdoor space back.",
    },
    {
      q: 'Are pest control treatments safe for kids and pets?',
      a: "Yes. The contractors in this directory use EPA-registered products applied at label rates, and most offer family- and pet-safe or low-toxicity options. Your technician will let you know about any short re-entry interval after an application — usually just until the product dries.",
    },
    {
      q: 'Are Georgia pest control companies licensed?',
      a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator.",
    },
    {
      q: "What's the best time of year for pest control in Georgia?",
      a: "Because of Georgia's mild winters, pests are active nearly year-round, so the best approach is a recurring quarterly plan rather than waiting for a specific season. That said, early spring is an ideal time to start — it gets protection in place before termites swarm and mosquito and ant pressure peaks in summer.",
    },
  ],
};

const STATES = {
  [GEORGIA.slug]: GEORGIA,
};

function getStatePage(slug) {
  return Object.prototype.hasOwnProperty.call(STATES, slug) ? STATES[slug] : null;
}

module.exports = { STATES, getStatePage };
