'use strict';

// ── Dallas, GA — city hub ────────────────────────────────────────────────────
// DISAMBIGUATION: this is Dallas, GEORGIA — the Paulding County seat on metro
// Atlanta's northwest edge — NOT Dallas, Texas. Every title, heading, meta tag,
// and schema node pairs "Dallas" with GA / Georgia / Paulding County so search
// engines and readers never confuse it with the far larger Dallas, TX.
//
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the Cherokee County city pages — Canton, Holly
// Springs, Woodstock). This is the FIRST Paulding County page, so there is no
// sibling to differentiate against yet; it leads with Dallas's own anchors.
// Targets local intent ("pest control dallas ga", "dallas ga exterminator").
// Rendered by views/city.ejs (hub) at /georgia/dallas/.
//
// `county` drives the LeadPortal contractor lookup — Dallas is the seat of
// Paulding County, so an assigned Paulding County 'Pest Control' contractor shows
// on this page (name + phone + LocalBusiness schema); until one is assigned the
// page falls back to the shared (844) directory line and a Service schema node.
//
// HUB ONLY — no per-pest spoke pages are built. The six hub cards render as
// non-clickable <div>s (no `pestPages` entries), so nothing links to a 404; each
// card auto-upgrades to a link if/when its spoke is authored later.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): county seat
// of Paulding County; on metro Atlanta's fast-growing northwest exurban edge;
// among the fastest-growing counties in metro Atlanta, with heavy newer
// residential construction; more rural/transitional in character than the inner
// suburbs (wooded lots, larger parcels); neighbor city Hiram just southeast, plus
// the Paulding communities New Hope, Yorkville, and Braswell; US-278 is the main
// corridor through Dallas and Hiram (the ONLY road nameable); ZIPs 30132/30157;
// area codes 770/678/470; humid subtropical climate; Georgia is a heavy
// termite-pressure state (eastern subterranean active, Formosan in parts of metro
// Atlanta); red imported fire ants present; metro Atlanta is a top-five U.S.
// mosquito metro (Orkin 2025); structural pest control is regulated by the
// Georgia Dept. of Agriculture's Structural Pest Control Commission. Do NOT name
// subdivisions, schools, parks, streets (other than US-278), or invent stats.

module.exports = {
  name: 'Dallas',
  slug: 'dallas',
  county: 'Paulding County',
  region: 'GA',
  zips: ['30132', '30157'],
  // Nearby Paulding County communities we also serve — NOT Dallas subdivisions.
  // Service-area names only (approved facts: Hiram borders to the SE; New Hope,
  // Yorkville, and Braswell are Paulding communities). No invented specifics.
  neighborhoods: ['Hiram', 'New Hope', 'Yorkville', 'Braswell'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default; this
  // explicit value just makes that intent obvious. Set a different path here to
  // give Dallas its own card later.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Dallas, GA | Paulding County Pest Pro',
  metaDesc: "Licensed pest control in Dallas, GA — the Paulding County seat on metro Atlanta's fast-growing NW edge. Termites, mosquitoes, roaches & rodents. Free quote.",
  h1: 'Pest Control in Dallas, GA',
  heroSub: "As the Paulding County seat on metro Atlanta's fast-growing northwest edge, Dallas, GA pairs brand-new subdivisions with a more rural, transitional landscape — and humid summers with mild winters keep termites, mosquitoes, roaches, and rodents active here nearly year-round. Get a licensed local exterminator who knows Dallas, fast. (Dallas, Georgia — not Dallas, Texas.)",

  overviewHeading: 'Pest Control Built for Dallas & Paulding County',
  overview: [
    "Dallas anchors one of metro Atlanta's fastest-growing counties. As the Paulding County seat out on the region's northwest exurban edge, it has seen wave after wave of new residential construction reshape what was recently rural land — and that mix of freshly built subdivisions, established homes near the historic county-seat core, and wooded acreage on larger transitional lots gives pests plenty of ways in. New construction sits on freshly graded soil that subterranean termites readily colonize, while older homes and tree-lined properties have had time for ants, roaches, and rodents to find the gaps.",
    "The common thread is climate. Dallas shares metro Atlanta's humid subtropical weather — long, sticky summers, mild winters, and steady rainfall — so most pests here never get a true off-season, which is why a recurring, locally-tuned plan tends to beat one-off treatments. Whether you're in 30132 toward the Dallas side or out in 30157 toward Hiram and the US-278 corridor, the licensed, insured pros in our directory quote your specific Paulding County property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Dallas Homes Need Year-Round Protection',
      paras: [
        "Georgia sits in one of the heaviest termite-pressure regions in the United States, and Paulding County is no exception. Eastern subterranean termites are active across the area, and aggressive Formosan termites have established in parts of metro Atlanta — both feed underground 12 months a year thanks to Dallas's mild winters, so the threat to your home's structure never really pauses. Termite damage typically isn't covered by homeowners insurance, which makes ongoing protection the cost-effective choice — especially across Paulding's many newer slabs and crawlspaces.",
        "It isn't only termites. Red imported fire ants are present throughout the Dallas area, building painful mounds across lawns and the open turf of new subdivisions. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — it landed in the top five on Orkin's 2025 list — and the shaded, wooded lots and standing water common across this transitional landscape keep them breeding from spring into fall. Add the German roaches, 'palmetto bugs,' and roof rats that thrive in the region's humidity, and most Dallas homes benefit from a steady, professional barrier rather than reacting one infestation at a time.",
      ],
    },
    {
      heading: 'Dallas Pest Season — What to Expect',
      paras: [
        "Pest pressure shifts through the year in Dallas. Here's roughly what local homeowners run into and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or discarded wings near windows are the classic first sign of an active colony, and a real concern around Paulding's newer construction. Ants get moving, carpenter bees drill into deck and trim wood, and the first warm rains kick off mosquito breeding in the county's wooded low spots. The ideal time to get protection in place before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across metro Atlanta, fire ant mounds multiply in Dallas lawns, wasp and yellowjacket nests grow large under eaves and decks, and roaches and 'palmetto bugs' push indoors out of the heat and humidity. Fleas and ticks are at their most active on pets and in shaded, brushy yards." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start looking for a warm place to overwinter — and Dallas's wooded, semi-rural lots send plenty toward the house. This is when you'll hear scratching in attics and walls. Yellowjackets turn aggressive as their colonies break down. A smart window to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Dallas's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service maintains the protective barrier through the cooler months so spring doesn't start with a surge." },
      ],
    },
    {
      heading: 'In & Around Dallas — Paulding County Areas We Serve',
      paras: [
        "The local pros in our directory cover Dallas across both ZIP codes and the surrounding Paulding County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Dallas',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Dallas and the wider Paulding County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Dallas home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Dallas homeowners with licensed, insured local exterminators across Paulding County — we're not a single company. When you call, you reach the pest control pro assigned to the Dallas area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Dallas, GA?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home and lot, which can run larger on Paulding County's more rural, wooded parcels. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'What pests are most common in Dallas and Paulding County?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state, and Paulding's new construction is prime habitat), red imported fire ants in lawns, mosquitoes bred in shaded yards and wooded low spots, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push in from the surrounding woods as nights cool. The local pros in our directory treat all of them." },
    { q: 'Which areas around Dallas, GA do you serve?', a: "Beyond Dallas's 30132 and 30157 ZIP codes, the pros in our directory serve the surrounding Paulding County communities, including Hiram to the southeast along US-278, plus New Hope, Yorkville, and Braswell. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Do newly built Dallas homes really need pest control?', a: "Often, yes. Paulding County is one of metro Atlanta's fastest-growing areas, and its new subdivisions sit on freshly graded, disturbed soil with new framing — exactly what foraging subterranean termites colonize — which is why a builder pre-treatment or a termite bond is common on new homes here. Fresh landscaping and irrigation also add the moisture that draws ants, mosquitoes, and roaches. If your newer Dallas home didn't come with documented termite protection, it's worth an inspection." },
    { q: 'Are Dallas, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Dallas?', a: "Often, yes — many of the local pros serving Dallas offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Paulding County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Dallas pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Dallas, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six categories. No per-pest spoke pages are built for Dallas,
  // so every card renders as a NON-CLICKABLE <div> (city.ejs makes a card a link
  // only when a matching city.pestPages entry exists — there are none here). The
  // hrefs are kept so each card auto-upgrades to a link if a spoke is authored
  // later. Blurbs are written fresh for Dallas (no reuse from sibling cities).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/dallas/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, and Paulding's wave of new construction is prime habitat for eastern subterranean termites. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/dallas/bed-bug-treatment/',
      blurb: "Travel-driven bed bugs hitchhike home and spread fast through Dallas houses, apartments, and rentals. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/dallas/cockroach-control/',
      blurb: "German roaches breeding indoors and big 'palmetto bugs' wandering in from the mulch, woodpiles, and crawlspaces of Paulding's humid, wooded lots — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/dallas/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Dallas's shaded yards and wooded low spots give them standing water to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/dallas/rodent-control/',
      blurb: "As Dallas nights cool, roof rats, Norway rats, and house mice push in from the surrounding woods into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/dallas/pest-control/',
      blurb: "Red imported fire ants are everywhere in Paulding County lawns, alongside spiders, wasps, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No pestPages — HUB ONLY. (Adding an entry here later upgrades its card to a
  // link to the matching /georgia/dallas/<pest>/ spoke.)
};
