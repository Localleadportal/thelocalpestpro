'use strict';

// ── Dunwoody, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb/metro-Atlanta city pages).
// Targets local intent ("pest control Dunwoody", "Dunwoody exterminator",
// "Dunwoody GA pest control"). Rendered by views/city.ejs at /georgia/dunwoody/.
//
// `county` drives the LeadPortal contractor lookup — Dunwoody is in DeKalb
// County, so an assigned DeKalb County 'Pest Control' contractor shows on the
// Dunwoody hub (name + phone + LocalBusiness schema); until one is assigned the
// page falls back to the shared (844) directory line and a Service schema node.
// The lookup tries both "DeKalb County" and "DeKalb" (see lib/contractor.js).
//
// HUB ONLY for now — no per-pest spoke pages are authored yet, so `pestPages` is
// empty and each hub pest card links to a spoke URL that 404s cleanly until that
// page is built (the documented one-at-a-time pattern in views/city.ejs).
//
// LOCAL FACTS ARE RESTRICTED to the approved Dunwoody list: a city in DeKalb
// County inside metro Atlanta's I-285 Perimeter; one of metro Atlanta's newer
// cities (incorporated 2008); home to roughly 50,000 residents; the Perimeter
// Center business district — one of metro Atlanta's largest office/commercial
// hubs — drives heavy commercial pest demand; established, tree-shaded
// residential neighborhoods with a mature canopy; ZIPs 30338/30346; nearby DeKalb
// communities Brookhaven, Chamblee, Doraville, Tucker; humid subtropical climate
// with mild winters; eastern subterranean termites dominant statewide (aggressive
// Formosan termites rare in GA, not established in metro Atlanta); red imported fire ants
// present; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated by the Georgia Dept. of Agriculture's
// Structural Pest Control Commission. No other local specifics may be added.

module.exports = {
  name: 'Dunwoody',
  slug: 'dunwoody',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30338', '30346'],
  // Nearby DeKalb County communities we also serve — NOT Dunwoody subdivisions.
  // (Listed as service-area names only; no invented neighborhood specifics.)
  neighborhoods: ['Brookhaven', 'Chamblee', 'Doraville', 'Tucker'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default; this
  // explicit value just makes that intent obvious. Set a different path here to
  // give Dunwoody its own card later.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Dunwoody, GA — The Local Pest Pro Exterminators',
  metaDesc: "Pest control in Dunwoody, GA & DeKalb County — termite, mosquito, rodent & commercial pest control. Local licensed exterminator. Call now for a free quote.",
  h1: 'Pest Control in Dunwoody, GA',
  heroSub: "From the offices and restaurants of the Perimeter business district to Dunwoody's established, tree-shaded neighborhoods, DeKalb County's humid summers and mild winters keep termites, mosquitoes, roaches, and rodents active nearly year-round. Get a licensed local Dunwoody exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Dunwoody Homes & Businesses',
  overview: [
    "Dunwoody is one of metro Atlanta's newer cities — incorporated in 2008 — but its neighborhoods are anything but new. Mature, tree-shaded residential streets with decades-old homes sit just minutes from the Perimeter Center business district, one of metro Atlanta's largest office and commercial hubs. That mix of established housing and a dense commercial core, all tucked inside the I-285 Perimeter in DeKalb County, gives pests an unusually wide range of ways in — from foundation gaps in older homes to the loading docks and break rooms of a busy office tower.",
    "The constant is the climate. Dunwoody's humid subtropical weather — long, sticky summers, mild winters, and steady rainfall — means most pests here never get a real off-season, so a recurring, locally-tuned plan tends to beat one-off treatments. Whether you're a homeowner in 30338 under the tree canopy or a property manager near Perimeter Center in 30346, the licensed, insured pros in our directory deliver reliable Dunwoody GA pest control and quote your specific property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Dunwoody Homes & Businesses Need Year-Round Protection?',
      paras: [
        "Georgia sits inside one of the heaviest termite-pressure zones in the country, and Dunwoody is no exception. Eastern subterranean termites are active across the metro and feed underground 12 months a year thanks to Dunwoody's mild winters, so the threat to a building's structure never really pauses. Termite damage typically isn't covered by property insurance, which makes ongoing termite treatment in Dunwoody, GA the cost-effective choice for homes and commercial buildings alike.",
        "It isn't only termites. Red imported fire ants are present throughout the Dunwoody area, raising painful mounds across lawns, common areas, and the landscaped grounds of office parks. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — it landed in the top five on Orkin's 2025 list — and Dunwoody's shaded, well-watered yards and mature tree canopy hold exactly the moisture and resting cover mosquitoes need from spring into fall. Add the German roaches, 'palmetto bugs,' and roof rats that thrive in the region's humidity, and most Dunwoody properties benefit from a steady, professional barrier rather than reacting one infestation at a time.",
      ],
    },
    {
      heading: 'Commercial Pest Control in the Perimeter Business District',
      paras: [
        "Dunwoody is built around the Perimeter Center business district — one of metro Atlanta's largest concentrations of offices, restaurants, retail, and hospitality. For those businesses, pests aren't just a nuisance; they're a health-code and reputation risk. A single roach in a dining room, a rodent in a stockroom, or ants in a break room can mean a failed inspection or a lost customer, which is why commercial pest control in Dunwoody, GA leans on discreet, scheduled service rather than emergency call-outs.",
        "The local pros in our directory handle commercial accounts across Dunwoody — restaurants and food service, office towers, medical and professional suites, retail, multi-tenant and property-managed buildings — with after-hours and recurring scheduling, documented service for health inspectors, and Integrated Pest Management that targets the loading docks, kitchens, and utility chases where commercial pests get in. Whether you manage a single storefront or an entire complex near Perimeter Center, one call connects you with a licensed exterminator who can build a plan around your operation.",
      ],
    },
    {
      heading: 'Dunwoody Pest Season — What to Expect',
      paras: [
        "Pest pressure shifts through the year in Dunwoody. Here's roughly what local homeowners and property managers run into and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or discarded wings near windows are the classic first sign of an active colony. Ants get moving, carpenter bees drill into deck and trim wood, and the first warm rains kick off mosquito breeding under Dunwoody's tree canopy. The ideal time to get protection in place before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across metro Atlanta, fire ant mounds multiply in Dunwoody lawns and office-park landscaping, wasp and yellowjacket nests grow large under eaves, and roaches and 'palmetto bugs' push indoors out of the heat and humidity. Fleas and ticks are at their most active." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start looking for a warm place to overwinter — this is when you'll hear scratching in Dunwoody attics and walls and find droppings in stockrooms. Yellowjackets turn aggressive as their colonies break down. A smart window to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Dunwoody's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service maintains the protective barrier through the cooler months so spring doesn't start with a surge." },
      ],
    },
    {
      heading: 'In & Around Dunwoody — DeKalb County Areas We Serve',
      paras: [
        "The local pros in our directory cover Dunwoody across its ZIP codes and the surrounding DeKalb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Does Dunwoody Pest Control Work?',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Dunwoody and the wider DeKalb County area — for a home or a commercial property, no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Dunwoody home or business — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Dunwoody homeowners and businesses with licensed, insured local exterminators across DeKalb County — we're not a single company. When you call, you reach the pest control pro assigned to the Dunwoody area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Dunwoody?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home, lot, or commercial space. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'What pests are most common in Dunwoody and DeKalb County?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state), red imported fire ants in lawns and landscaping, mosquitoes bred in shaded yards under Dunwoody's tree canopy, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push into attics and stockrooms as nights cool. The local pros in our directory treat all of them, for homes and businesses." },
    { q: 'Do you offer commercial pest control in Dunwoody?', a: "Yes. With the Perimeter Center business district at its core, Dunwoody has a large base of restaurants, offices, retail, and hospitality, and the pros in our directory handle commercial accounts with discreet, recurring, after-hours-friendly service, documented for health inspectors. One call connects you with a licensed exterminator who can build an Integrated Pest Management plan around your operation." },
    { q: 'Do you serve the areas around Dunwoody too?', a: "Yes. Beyond Dunwoody's 30338 and 30346 ZIP codes, the pros in our directory serve the surrounding DeKalb County communities, including Brookhaven, Chamblee, Doraville, and Tucker. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Dunwoody pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Dunwoody?', a: "Often, yes — many of the local pros serving Dunwoody offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house or business. Call and we'll route you to a DeKalb County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Dunwoody pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Dunwoody Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // Self-contained so the hub renders all six cards now. Each href points at a
  // Dunwoody per-pest spoke page that is NOT built yet — those links 404 cleanly
  // until the matching pestPages entry below is authored (one at a time).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/dunwoody/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, with eastern subterranean termites the dominant wood-destroyer. Liquid barriers, bait stations, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/dunwoody/bed-bug-treatment/',
      blurb: "Travel and the Perimeter's hotels and rentals spread bed bugs fast through Dunwoody homes and apartments. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/dunwoody/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the metro humidity — cleared out and kept out of homes and commercial kitchens, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/dunwoody/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Dunwoody's shaded, well-watered yards give them cover to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/dunwoody/rodent-control/',
      blurb: "As Dunwoody nights cool, roof rats, Norway rats, and house mice push into attics, walls, and stockrooms. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/dunwoody/pest-control/',
      blurb: "Red imported fire ants are everywhere in DeKalb County, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // Per-pest spoke pages are added one at a time. Until an entry exists here, its
  // hub card links to a clean 404 rather than a half-built page. (None built yet.)
  pestPages: {},
};
