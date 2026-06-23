'use strict';

// ── Powder Springs, GA — city hub ────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the four sibling Cobb County city hubs
// (Marietta, Smyrna, Kennesaw, Acworth). Each sibling owns a different Cobb
// angle: Marietta = older, established city under a mature tree canopy; Smyrna =
// dense, redeveloped inner-ring suburb of attached townhomes/condos; Kennesaw =
// KSU student-rental college town on the Kennesaw Mountain wooded edge; Acworth =
// lakeside town on Lake Acworth / Lake Allatoona. Powder Springs leads on its OWN
// verified distinctive — a quieter, predominantly RESIDENTIAL southwest-Cobb
// suburb of single-family homes and wooded lot lines, with a mix of established
// neighborhoods and ongoing suburban growth and none of the commercial density,
// campus, or lakefront of its siblings. Because verified city-specific color is
// limited (THIN-SPECIFICS rule), the page deliberately leans on the southwest-
// Cobb / metro-Atlanta regional framing and the everyday single-family-home pest
// profile rather than inventing local landmarks. Written fresh so all five Cobb
// pages read as clearly different. Targets local intent ("pest control Powder
// Springs", "Powder Springs exterminator", "Powder Springs GA pest control").
// Rendered by views/city.ejs (hub) at /georgia/powder-springs/.
//
// `county` drives the LeadPortal contractor lookup — Powder Springs is in COBB
// County, so an assigned Cobb 'Pest Control' contractor is server-rendered on the
// page (name + phone + PestControlService schema + license badge). Until/unless
// one is assigned, the page falls back to the shared (844) directory line and a
// plain Service schema node. Both paths are fully dynamic and contractor-
// AGNOSTIC — no name, phone, rating, or review is ever hardcoded, so the page
// survives a county reassignment with zero edits.
//
// This is a HUB ONLY — pest categories are covered as on-page sections (the
// detail block + season + signs blocks). No per-pest spoke pages are built yet,
// so pestPages is intentionally empty and the hub's pest cards link to the
// on-page detail section (#pests-detail) rather than to unbuilt routes (the
// template renders them as non-clickable <div>s while pestPages is empty).
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): a city in
// southwest Cobb County, in metro Atlanta, west of downtown Atlanta; a
// predominantly residential suburban community of single-family homes, with a mix
// of established neighborhoods and ongoing suburban growth and a more residential,
// wooded-suburban character than its commercial or lakeside Cobb siblings; ZIP
// 30127 (never mapped to specific streets); nearby communities Austell, Mableton,
// Marietta, Kennesaw, Hiram, Dallas (service-area names only). REGIONAL truths:
// humid subtropical climate with a long warm season; eastern subterranean termite
// is THE dominant Georgia termite (state that and stop — do NOT claim Formosan is
// present/established locally; it is rare statewide); red imported fire ants
// established statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); the Georgia Dept. of Agriculture's Structural Pest Control Commission
// regulates/licenses. Do NOT name parks, schools, subdivisions, streets,
// landmarks, ordinances, population figures, or any unverified hyper-local detail.

module.exports = {
  name: 'Powder Springs',
  slug: 'powder-springs',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30127'],
  // Nearby communities we also serve — NOT Powder Springs subdivisions.
  // Service-area names only; the template links only the ones that already have
  // a built city hub (Marietta, Kennesaw), the rest render as plain badges.
  neighborhoods: ['Austell', 'Mableton', 'Marietta', 'Kennesaw', 'Hiram', 'Dallas'],

  // OG card — shared branded 1200×630 default; set a Powder Springs-specific path
  // here to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Powder Springs" + GA in the title; the
  // contiguous long-tail phrases live in the meta description, headings, and body.
  metaTitle: 'Pest Control Powder Springs, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Powder Springs, GA homeowners count on — termite treatment, mosquito control, rodent control and bed bug exterminator. Free quote, book today.",
  h1: 'Pest Control in Powder Springs, GA',
  heroSub: "Powder Springs is a quieter, mostly residential corner of southwest Cobb County — block after block of single-family homes, family yards, and wooded lot lines rather than high-rises or commercial strips. That adds up to a classic whole-home suburban pest profile: wood-framed houses on Georgia's termite-heavy soil, yards that draw fire ants and mosquitoes, and garages and crawlspaces that let rodents in. Georgia's long, humid warm season keeps it all going most of the year. Reach a licensed Powder Springs exterminator who knows the area, fast.",

  overviewHeading: 'Powder Springs Pest Control GA: Built for a Southwest Cobb Home Community',
  overview: [
    "Powder Springs wears its suburbs quietly. Out on the southwest side of Cobb County, it's a community of houses first — settled neighborhoods and newer subdivisions spread across yards and wooded lots, without the downtown bustle, attached density, or waterfront that shapes other parts of the county. For pest control, that residential character is the whole story: the work here is about protecting the single-family home as a complete system, from the soil under the slab to the roofline, the garage, and the tree line at the back of the yard.",
    "That whole-home focus matters because southwest Cobb sits inside one of the most pest-friendly stretches of the country. Georgia's humid subtropical climate hands pests a long, warm, active season and a barely-there winter, so termites, ants, roaches, mosquitoes, and rodents press on a Powder Springs house from several directions at once — through the foundation, across the lawn, and in from the wood line. A single spray rarely settles that for long, which is why a recurring, locally-tuned plan tends to win out. Whatever you're up against, the licensed, insured pros in our directory will assess your home and yard and give you a free, no-obligation quote up front — honest, local pest control Powder Springs homeowners can count on.",
  ],

  sections: [
    {
      heading: 'What Pest Pressure Looks Like in Powder Springs’ Residential Neighborhoods',
      paras: [
        "Start with the structural threat, because in a community of wood-framed homes it's the costliest one: termites. The eastern subterranean termite is the dominant species in Georgia, foraging up out of the soil into sill plates, joists, and framing wherever it finds moisture and a way in. Powder Springs' mild winters mean those colonies don't go dormant — they keep feeding underground through the cold, so the slow, hidden damage to a house never really stops. Since homeowners insurance generally won't pay for termite repairs, keeping a protective barrier in place is far cheaper than fixing what a colony eats.",
        "Outside the walls, the pressure is just as steady. Red imported fire ants are established across the state and stake out the sunny, open lawns common to suburban lots, raising mounds that make a yard miserable for families and pets. Mosquitoes are a regional headache — the Atlanta metro lands in the nation's top five for them on Orkin's 2025 list — and any Powder Springs yard with shade, low spots, or standing water gives them somewhere to breed. And where neighborhoods back onto woods and undeveloped ground, mice and rats use that cover to reach garages, crawlspaces, and attics as the weather turns. Treating a home against that whole spread at once, on a schedule, is what a licensed Powder Springs exterminator is built to do.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Powder Springs Households Call About Most',
      paras: [
        "A residential southwest-Cobb suburb sees a familiar, whole-home cast of pests. Here's what the licensed pros in our directory are called out for most often around Powder Springs:",
      ],
      cards: [
        { name: 'Termites', text: "The eastern subterranean termite is Georgia's dominant species and the quiet, expensive risk to every wood-framed Powder Springs home. Pros protect the structure with liquid soil treatments or in-ground bait stations and supply the Georgia termite letter for a sale or refinance — termite treatment Powder Springs GA homeowners can rely on, renewable year to year." },
        { name: 'Cockroaches', text: "Two roach problems show up in suburban homes: German roaches that establish indoors in kitchens and bathrooms, and the larger outdoor 'palmetto bugs' (smokybrown and American roaches) that live in mulch, woodpiles, and crawlspaces and slip inside. A combination of interior gel baiting, crack-and-crevice treatment, and an exterior perimeter puts an end to both." },
        { name: 'Rodents', text: "House mice, Norway rats, and roof rats work their way into Powder Springs garages, crawlspaces, and attics through small gaps as the nights turn cold, often from the wood line behind the yard. Rodent control Powder Springs GA homeowners trust combines trapping with exclusion — closing off the openings they use so the problem doesn't simply come back." },
        { name: 'Mosquitoes', text: "The Atlanta metro ranks in the nation's top five for mosquitoes, and a shaded suburban yard with a low spot or a forgotten bucket is all it takes to raise a batch. Pros knock the population down with treatments to the shady resting spots adults favor, plus larviciding of the standing water around the property — mosquito control Powder Springs GA families use to reclaim the yard spring through fall." },
        { name: 'Fire Ants', text: "Red imported fire ants are established statewide and love the open, sunny turf of a residential lawn, where one bumped mound can send dozens of stinging workers boiling out. A broadcast bait the colony carries down to the queen, backed by direct mound treatment and a yard perimeter, brings a lawn back for the kids and pets." },
        { name: 'Bed Bugs', text: "Bed bugs travel home from trips, hotels, and used furniture and settle into any house, no matter how tidy. A licensed bed bug exterminator Powder Springs residents can call treats with whole-room heat or a targeted residual program that reaches every life stage, then returns to confirm the home is clear." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets set up under eaves, soffits, decks, and in the lawn through the summer, growing bolder as fall closes in. Pros take down the nests they can reach and treat the hidden spots these insects keep coming back to." },
      ],
    },
    {
      heading: 'Spotting a Termite Problem in Your Powder Springs Home',
      paras: [
        "Termites do their damage out of sight, so by the time it's obvious a colony has usually been at work a while. Knowing what to look for around a Powder Springs house lets you act before it gets expensive:",
      ],
      bullets: [
        "Thin, pencil-width mud tubes running up foundation walls, brick piers, slab edges, or crawlspace supports",
        "Clouds of winged swarmers indoors on a warm, humid spring day, or small piles of shed, translucent wings near windows and doors",
        "Wood that sounds hollow or papery when you tap baseboards, door frames, or subfloor",
        "Doors or windows that suddenly stick or jam as damaged wood swells out of square",
        "Blistered or rippling paint, or thin lines of dried mud tracing across drywall and trim",
      ],
    },
    {
      heading: 'Powder Springs Pests Through the Seasons',
      paras: [
        "Pest activity rises and falls across the Powder Springs calendar. Here's the rough rhythm a local homeowner can expect:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "The wake-up. Warm, humid afternoons trigger termite swarms — winged swarmers indoors, or shed wings on a sill, are the telltale sign of an active colony nearby. Ants begin trailing in, carpenter bees drill into deck and trim wood, and the first warm rains start the year's mosquito breeding. The prime window to get protection in place before the heat arrives." },
        { name: 'Summer (Jun–Aug)', text: "Full throttle. Mosquitoes peak in the heat and humidity, fire ant mounds spread across lawns, wasps and yellowjackets build under eaves and decks, and roaches push indoors looking for cool and moisture. Fleas and ticks ride pets and the shaded, brushy edges of the yard. The season homeowners feel the pressure most." },
        { name: 'Fall (Sep–Nov)', text: "The move indoors. As nights cool, mice and rats hunt for a warm place to overwinter and slip in through gaps, garage doors, and crawlspace vents — the start of scratching overhead at night. Yellowjacket colonies hit their largest and crankiest. A smart time to seal a home up tight before winter." },
        { name: 'Winter (Dec–Feb)', text: "Never fully off. Powder Springs winters are mild enough that German roaches and mice stay busy indoors, and subterranean termites keep feeding underground below the frost line. Holding a recurring plan through the cold keeps the barrier in place so spring doesn't start with a fresh wave." },
      ],
    },
    {
      heading: 'Other Southwest Cobb Areas We Serve',
      paras: [
        "The local pros in our directory cover Powder Springs across its ZIP code and the surrounding southwest-Cobb and nearby communities. If your home is in one of the areas listed here, we can connect you with a licensed local exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Powder Springs',
      cards: [
        { name: '1. Call for a free quote', text: "A single call puts you in touch with a licensed, insured exterminator who covers Powder Springs and the rest of Cobb County — no pressure, no obligation." },
        { name: '2. Get a local inspection', text: "Your technician inspects the home and yard, identifies the pest and how far it has spread, and lays out the right plan for your Powder Springs property — a single visit or ongoing service." },
        { name: '3. Problem solved', text: "Your pro knocks out the active infestation, blocks the routes pests are using, and sets up prevention with EPA-registered products applied at label rates — with low-toxicity options for kids and pets, and a guarantee behind most of the work." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Powder Springs',
      paras: [
        "The Local Pest Pro is a directory that connects Powder Springs homeowners with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Powder Springs area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Everyone we hand you off to carries a license from the Georgia Department of Agriculture's Structural Pest Control Commission and treats with EPA-registered products at label rates, including low-toxicity choices for homes with children and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests should Powder Springs homeowners watch for?', a: "In a residential southwest-Cobb suburb, the headliners are subterranean termites threatening wood-framed homes (the eastern subterranean is Georgia's dominant species), red imported fire ants in open lawns, mosquitoes bred in shaded yards and standing water (the Atlanta metro ranks in the nation's top five for them), German roaches and outdoor 'palmetto bugs,' and mice and rats that move in from the wood line as it cools. The pros in our directory treat every one of them." },
    { q: 'Do Powder Springs homes need pest control year-round?', a: "For most homes, a year-round or recurring plan is the practical choice. Georgia's mild winters mean pests here barely pause — German roaches and mice stay active indoors and subterranean termites keep feeding underground through the cold — so a one-time spring spray tends to wear off well before the next wave. Ongoing service keeps a protective barrier on the house and lets a pro catch new activity early rather than after it spreads." },
    { q: 'What attracts pests to a Powder Springs yard and home?', a: "Usually moisture, food, and an easy way in. Standing water and shade breed mosquitoes; mulch, woodpiles, and yard debris shelter roaches and ants against the foundation; a wood line behind the lot gives rodents cover up to the house; and gaps around pipes, vents, doors, and the crawlspace let them inside. A pro's inspection focuses on exactly these conditions, then pairs treatment with the sealing and yard fixes that make a home less inviting in the first place." },
    { q: 'Are Powder Springs pest control companies licensed?', a: "They should be. Georgia regulates structural pest control at the state level: the Department of Agriculture's Structural Pest Control Commission licenses the companies and certifies the applicators allowed to treat homes in the state. Every Powder Springs exterminator we connect you with is licensed and insured in Georgia." },
    { q: 'Can I get same-day or emergency pest control in Powder Springs?', a: "Often, yes — plenty of the local pros serving Powder Springs keep room for same-day and emergency calls when something can't wait, like a wasp nest by the front door, a sudden roach flare-up, or rats in the attic. Reach out and we'll get a Cobb County exterminator headed your way." },
    { q: 'Which areas around Powder Springs do you serve?', a: "Along with Powder Springs itself, the pros in our directory cover the surrounding southwest-Cobb and nearby communities, including Austell, Mableton, Marietta, Kennesaw, Hiram, and Dallas. Get in touch and we'll pair you with a licensed exterminator who works your neighborhood." },
    { q: 'Will the treatments be safe for my kids and pets?', a: "Yes. The Powder Springs pros use EPA-registered products at label rates and offer family- and pet-safe or low-toxicity options, concentrating most of the product around the exterior, entry points, and cracks and crevices instead of across living space. Your tech will let you know about any short keep-off period — generally only while the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Powder Springs Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Powder Springs yet, so these
  // cards are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/powder-springs/<pest>/ route,
  // and the template renders them as non-clickable <div>s while pestPages is
  // empty. Blurbs are written fresh for Powder Springs (no reuse from siblings).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "The eastern subterranean termite — Georgia's dominant species — is the quiet, costly risk to every wood-framed Powder Springs home. Liquid soil treatments or in-ground bait stations, plus the Georgia termite letter for a sale or refinance." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Bed bugs ride home from travel and used furniture into even the tidiest Powder Springs house. Whole-room heat or a targeted residual program reaches every life stage, with a return visit to confirm the home is clear." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "German roaches indoors and big 'palmetto bugs' out in the mulch, woodpiles, and crawlspaces of a suburban lot — interior gel baiting, crack-and-crevice treatment, and an exterior perimeter that keeps them out." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "The Atlanta metro sits in the country's top five for mosquitoes, and a shaded Powder Springs yard with any standing water can raise a batch. Treatments to the resting spots plus larviciding of standing water, all warm season long." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "Mice and rats slip into garages, crawlspaces, and attics from the wood line as nights cool. Trapping backed by exclusion that closes off their openings, plus monitoring so they don't come back." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in the lawn, wasps under the eaves, spiders and ants indoors — one recurring quarterly plan covers the everyday pests a Powder Springs home faces, year-round." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};
