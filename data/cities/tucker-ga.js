'use strict';

// ── Tucker, GA — city hub ────────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb / metro-Atlanta city pages).
// This is the city of Tucker in northeast DeKalb County, metro Atlanta. Targets
// local intent ("pest control Tucker", "Tucker exterminator", "Tucker GA pest
// control"). Rendered by views/city.ejs (hub) at /georgia/tucker/.
//
// DISTINCT FROM ITS DeKalb SIBLINGS (sentence-level, zero reuse):
//   • Dunwoody owns the Perimeter Center commercial + incorporated-2008 angle.
//   • Brookhaven owns the intown-adjacent / north-of-Buckhead / Peachtree-corridor
//     older-homes-plus-newer-infill angle.
//   • Decatur owns the historic-1823 / walkable-downtown-square / craftsman-
//     bungalow angle.
//   • Tucker leads on its OWN verified distinctive: an established, wooded NE
//     DeKalb community of long-settled MID-CENTURY (post-war ranch/split-level)
//     suburban neighborhoods under heavy tree cover, anchored by a traditional
//     MAIN STREET commercial corridor — one of the area's older unincorporated
//     communities, only recently incorporated as a city (2016). The local angle
//     is mid-century-suburban + Main Street, NOT the generic "older homes"
//     framing Brookhaven and Decatur already use.
//
// `county` drives the LeadPortal contractor lookup — Tucker is in DeKalb County
// (the SAME lookup key as Dunwoody, Brookhaven, and Decatur), so an assigned
// DeKalb County 'Pest Control' contractor shows on this page (name + phone +
// PestControlService schema, with license + address taken ONLY from the real
// contractor record); until one is assigned the page falls back to the shared
// (844) line and a Service schema node. The contractor is pulled server-side in
// server.js via getContractor(state.name, city.county, SITE.SERVICE_TYPE) —
// nothing is hardcoded here. The lookup tries both "DeKalb County" and "DeKalb"
// (see lib/contractor.js).
//
// HUB ONLY: no per-pest spoke pages are built for Tucker yet, so `pestPages` is
// intentionally empty. The six canonical hub cards below link to the future spoke
// URLs and, because no spoke exists, render as NON-clickable <div>s that 404
// cleanly until each page is authored (the established staged-build pattern — see
// the city.ejs pestCardsHtml comment). All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no invented streets, subdivisions, parks,
// schools, ordinances, or stats): the city of Tucker sits in northeast DeKalb
// County, metro Atlanta; it is one of the area's older communities, long
// unincorporated and only incorporated as a city in 2016; roughly 37,000
// residents; long-settled mid-century post-war suburban neighborhoods under a
// heavy, mature tree canopy, with a traditional Main Street commercial corridor
// at its core; ZIPs 30084 and 30085; nearby DeKalb communities Stone Mountain,
// Clarkston, Chamblee, Doraville; humid subtropical climate with long summers and
// mild winters; eastern subterranean termites are the dominant species statewide
// (NO Formosan local-presence claim is made for Tucker/DeKalb); red imported fire
// ants present statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); structural pest control is regulated and licensed by the Georgia Dept.
// of Agriculture's Structural Pest Control Commission. Trust signals are
// CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast response) — no
// specific company, rating, or review is referenced.

module.exports = {
  name: 'Tucker',
  slug: 'tucker',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30084', '30085'],
  // Nearby DeKalb County communities we also serve — NOT Tucker subdivisions.
  // (Service-area names only; all are real DeKalb County neighbors of Tucker.
  // None has its own built hub, so city.ejs renders them as plain badges.)
  neighborhoods: ['Stone Mountain', 'Clarkston', 'Chamblee', 'Doraville'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Tucker its own 1200×630 card later, drop /images/tucker-og.jpg in public/ and
  // change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Tucker, GA — The Local Pest Pro Exterminators',
  metaDesc: "Pest control in Tucker, GA & DeKalb County — termite, mosquito, rodent & roach treatment for wooded suburbs & Main Street businesses. Call now for a free quote.",
  h1: 'Pest Control in Tucker, GA',
  heroSub: "Out in northeast DeKalb County, Tucker's shaded mid-century streets and traditional Main Street sit under one of the metro's heaviest tree canopies — and that wooded, humid setting keeps termites, mosquitoes, roaches, and rodents busy most of the year. Get a licensed local Tucker exterminator who knows these settled neighborhoods, with a free quote before any work starts.",

  overviewHeading: 'Local Pest Control for Tucker, GA — Wooded Suburbs to Main Street',
  overview: [
    "Tucker is one of northeast DeKalb County's older communities — it grew up as a settled suburb decades before it finally incorporated as a city in 2016, and roughly 37,000 people now live across its quiet, tree-shaded streets. Most of those neighborhoods date to the post-war mid-century era, which shapes the pest picture: established ranch and split-level homes that have settled into their lots over the years, surrounded by a heavy, mature tree canopy. That deep shade keeps yards cool and damp, and decades of settling leave foundations, eaves, and crawlspaces with the small gaps that termites, ants, roaches, and rodents work their way through.",
    "Tying the city together is its traditional Main Street corridor, a strip of long-running local shops, restaurants, and small businesses that gives Tucker a real downtown of its own. Whether you own one of those storefronts or a mid-century home tucked under the trees, the climate is the common thread — metro Atlanta's humid subtropical summers run long and its winters stay mild, so pests here rarely get a true off-season and a steady, locally-tuned plan usually beats chasing one problem at a time. The licensed, insured pros in our directory inspect and quote your specific Tucker property for free before any treatment begins.",
  ],

  sections: [
    {
      heading: "Why Are Pests So Persistent in Tucker's Wooded Suburbs?",
      paras: [
        "Tucker's defining feature for pest control is its tree cover. The mature canopy that shades the city's mid-century neighborhoods also keeps lawns, mulch beds, and the ground around foundations cool and moist long after a rain — exactly the conditions that let mosquitoes breed, carpenter ants and roaches nest, and moisture-loving pests thrive close to the house. Leaf litter and damp soil along a shaded foundation also give subterranean termites the buried moisture they need to forage right up against the structure, so heavily wooded lots tend to carry steady pressure year after year.",
        "Georgia also sits in one of the heaviest termite-pressure regions in the country, and Tucker is firmly inside it. Eastern subterranean termites are the dominant species across the state, working underground and pushing mud tubes up into sills and framing — and because the area's winters stay mild, the colonies never go dormant and keep feeding all twelve months. Termite damage is rarely covered by a homeowners policy, so ongoing protection costs far less than the repairs. Termites aren't the whole story, either: the settled gaps in mid-century ranch and split-level homes give German roaches, 'palmetto bugs,' and overwintering rodents easy ways in, while red imported fire ants claim the sunny patches of Tucker lawns. For most homes here, a maintained barrier beats reacting one infestation at a time.",
      ],
    },
    {
      heading: "Pest Control Along Tucker's Main Street Corridor",
      paras: [
        "Tucker's Main Street is the heart of the city — a corridor of locally owned restaurants, shops, and service businesses, many of them in older buildings that have anchored downtown Tucker for decades. For those operations, pests carry real consequences: a roach spotted in a dining room, droppings in a back-of-house stockroom, or ants in a service counter can trigger a failed health inspection and cost the kind of local reputation a Main Street business runs on. Older commercial buildings with shared walls and aging utility lines also let pests move between neighboring tenants, so reliable control comes from scheduled, preventive service rather than scrambling after a sighting.",
        "The local pros in our directory take on commercial accounts throughout Tucker — restaurants and food service, retail shops, salons, offices, and the small mixed-use and multi-tenant buildings along and around Main Street — with recurring, after-hours-friendly visits, service records health inspectors look for, and Integrated Pest Management targeted at the kitchens, dumpster pads, and utility chases where commercial pests get a foothold. One call connects you with a licensed exterminator who can shape a plan around the way your business actually runs.",
      ],
    },
    {
      heading: 'What Does the Pest Year Look Like in Tucker?',
      paras: [
        "Pest pressure climbs and eases through the seasons in Tucker. Here's roughly what local homeowners and business owners deal with, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid days — a scatter of winged swarmers or discarded translucent wings near a window is the classic sign a colony is already at work. Ants stir, carpenter bees drill into deck and trim wood, and the first warm rains start mosquitoes breeding in the damp shade under Tucker's tree canopy. The ideal stretch to get protection in place before pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "The busy season. Mosquitoes turn relentless across metro Atlanta and stay thick in Tucker's shaded yards, fire ant mounds spread through sunny lawn patches, paper wasps and yellowjackets build sizable nests under eaves and decks, and roaches push indoors and into Main Street kitchens to escape the heat. Fleas and ticks reach their peak on pets and in the leaf litter." },
        { name: 'Fall (Sep–Nov)', text: "As the nights cool, roof rats, Norway rats, and house mice look for a warm place to ride out winter — and the settled gaps in mid-century homes make for easy entry, so this is when scratching starts up in Tucker attics and walls. Yellowjackets get more aggressive as their colonies collapse, and bed bugs travel home with fall trips. A good window to seal entry points." },
        { name: 'Winter (Dec–Feb)', text: "Tucker's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round beneath settled foundations. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Where Else Do We Serve Around Tucker?',
      paras: [
        "The local pros in our directory cover the city of Tucker across its ZIP codes and the neighboring DeKalb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Do You Get a Licensed Tucker Pro to Your Property?',
      cards: [
        { name: '1. Call for a free quote', text: "One call puts you in touch with a licensed, insured exterminator serving the city of Tucker and the broader DeKalb County area — house or business, with no obligation and no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property — including the crawlspace and shaded foundation line on wooded lots — pins down the pest and how far it's spread, and recommends the right treatment for your Tucker home or storefront, one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'How The Local Pest Pro Directory Works in Tucker',
      paras: [
        "The Local Pest Pro is a directory that links Tucker homeowners and businesses with licensed, insured local exterminators across DeKalb County — we're not a single company. When you call, you reach the pest control pro assigned to the Tucker area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Tucker, GA?', a: "The usual suspects are subterranean termites (Georgia is a heavy termite-pressure state, and Tucker's shaded, damp foundations suit them well), red imported fire ants in sunny lawn patches, mosquitoes bred in the cool shade under the city's tree canopy, German roaches and outdoor 'palmetto bugs' that flourish in the humidity, roof rats and mice that exploit the settled gaps in mid-century homes as nights cool, and bed bugs that ride home from travel. The local pros in our directory treat every one of them, for homes and businesses." },
    { q: "Why do Tucker's wooded, mid-century homes stay under pest pressure?", a: "Two things stack up in Tucker. The heavy tree canopy keeps yards and foundations cool and damp, which is ideal for mosquitoes, moisture pests, and the termites foraging in the soil; and the post-war ranch and split-level homes have settled over the decades, opening the small foundation gaps, worn seals, and crawlspace entries that ants, roaches, and rodents slip through. Because both conditions are baked into the neighborhood, a local pro leans on inspection, exclusion, and a maintained barrier rather than a single spray." },
    { q: 'Do you handle commercial pest control for Tucker Main Street businesses?', a: "Yes. Tucker's Main Street is full of locally owned restaurants, shops, and offices, often in older buildings, and the pros in our directory service those accounts with discreet, recurring, after-hours-friendly visits documented for health inspectors. One call connects you with a licensed exterminator who can build an Integrated Pest Management plan around your kitchen, storage, and the shared walls older Main Street buildings tend to have." },
    { q: 'How much does pest control cost in Tucker?', a: "It isn't a fixed number — the price turns on the pest, how far the problem has gone, and the size and age of your home, lot, or commercial space. A recurring general plan is the most economical option, while specialty jobs like termite or bed bug work cost more for the equipment and follow-up they take. Each pro in our directory provides a free, property-specific quote before starting, so the exact figure is clear up front." },
    { q: 'Do you serve the areas around Tucker too?', a: "Yes. Past Tucker's own ZIP codes, the directory's pros also cover the neighboring DeKalb County communities — Stone Mountain, Clarkston, Chamblee, and Doraville among them. Give us a call and we'll match you with a licensed exterminator working your corner of the county." },
    { q: 'Are Tucker pest control companies licensed?', a: "They should be — and the ones we list are. In Georgia, structural pest control falls under the state Department of Agriculture, whose Structural Pest Control Commission licenses the companies and certifies the technicians who treat your property. Every Tucker pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Tucker?', a: "Frequently, yes. A lot of the pros covering Tucker keep room for same-day and emergency calls when something can't wait — a wasp nest over the porch, a roach problem that flared up overnight, or rodents moving into the house. Phone in and we'll connect you with a DeKalb County exterminator who can respond fast." },
    { q: 'Are the treatments safe for kids and pets?', a: "They're designed to be. The licensed pros serving Tucker work with EPA-registered products at label rates and can use low-toxicity, family- and pet-friendly formulations, concentrating treatment along the foundation, entry points, and cracks and crevices instead of broadcasting it through living space. If a treated spot needs a short wait before re-entry, your technician will tell you — usually just until it's dry." },
  ],

  finalCtaHeading: 'Get Your Free Tucker Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Tucker per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // render as NON-clickable <div>s and 404 cleanly until each page is authored —
  // the same staged build pattern the Dunwoody, Brookhaven, and Decatur hubs used.
  // Blurbs are written fresh for Tucker. (No Formosan termite claim — eastern
  // subterranean only.)
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/tucker/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, and eastern subterranean termites feed underground all year beneath Tucker's shaded, settled mid-century foundations. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/tucker/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel and secondhand furniture and spread fast through Tucker's homes, apartments, and rentals. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/tucker/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' out of the mulch beds and crawlspaces in the wooded humidity — cleared out of Tucker homes and Main Street kitchens and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/tucker/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Tucker's deep tree canopy keeps yards shaded and damp enough for them to breed close to the house. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/tucker/rodent-control/',
      blurb: "As Tucker nights cool, roof rats, Norway rats, and house mice slip through the settled gaps in mid-century homes into attics, walls, and crawlspaces. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/tucker/pest-control/',
      blurb: "Red imported fire ants stake out DeKalb County lawns, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Tucker per-pest spoke pages have been authored yet — keep this empty so the
  // hub renders as a HUB only. Add entries here one at a time (same shape as the
  // Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
