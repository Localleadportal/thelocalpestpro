'use strict';

// ── Brookhaven, GA — city hub ────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb / metro-Atlanta city pages —
// Brookhaven shares DeKalb County with Dunwoody, so it must read CLEARLY
// differently: Dunwoody owns the Perimeter Center commercial + newly-incorporated
// angle, while Brookhaven leans on its own distinctives — a dense, established
// intown-adjacent residential city just north of Buckhead along the Peachtree
// corridor, with a mature tree canopy and a mix of older homes and newer infill.
// Targets local intent ("pest control brookhaven", "brookhaven exterminator",
// "brookhaven ga pest control"). Rendered by views/city.ejs (hub) at
// /georgia/brookhaven/.
//
// `county` drives the LeadPortal contractor lookup — Brookhaven is in DeKalb
// County (the SAME lookup key as Dunwoody), so an assigned DeKalb County 'Pest
// Control' contractor shows on this page (name + phone + LocalBusiness schema);
// until one is assigned the page falls back to the shared (844) directory line
// and a Service schema node. The contractor is pulled server-side in server.js
// via getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here. The lookup tries both "DeKalb County" and "DeKalb"
// (see lib/contractor.js).
//
// HUB ONLY: no per-pest spoke pages are built for Brookhaven yet, so `pestPages`
// is intentionally empty. The six hub cards below link to the future spoke URLs
// and 404 cleanly until those pages are authored, so each card renders as a
// NON-clickable <div> for now (the established staged build pattern — see the
// city.ejs pestCardsHtml comment). All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no other local specifics, no street names,
// subdivisions, parks, schools, ordinances, or invented stats): a city in DeKalb
// County, metro Atlanta, just northeast of downtown Atlanta and immediately north
// of the Buckhead district; roughly 55,000 residents; one of metro Atlanta's
// denser intown-adjacent residential cities, along the Peachtree Road corridor;
// a mature tree canopy over established older neighborhoods, with newer infill and
// townhome construction filling in among them; ZIPs 30319/30329; nearby DeKalb
// communities Chamblee, Doraville, Dunwoody, Tucker; humid subtropical climate
// with long summers and mild winters; eastern subterranean termites dominant
// statewide (Formosan termites rare in GA, not established in metro Atlanta);
// red imported fire ants present statewide; metro Atlanta is a top-five U.S.
// mosquito metro (Orkin 2025); structural pest control is regulated and licensed
// by the Georgia Dept. of Agriculture's Structural Pest Control Commission. Trust
// signals are CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast
// response) — no specific company, rating, or review is referenced.

module.exports = {
  name: 'Brookhaven',
  slug: 'brookhaven',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30319', '30329'],
  // Nearby DeKalb County communities we also serve — NOT Brookhaven subdivisions.
  // (Service-area names only; all are real DeKalb County neighbors of Brookhaven.
  // Dunwoody has its own built hub, so city.ejs auto-renders it as a real link.)
  neighborhoods: ['Chamblee', 'Doraville', 'Dunwoody', 'Tucker'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Brookhaven its own 1200×630 card later, drop /images/brookhaven-og.jpg in
  // public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Brookhaven, GA — The Local Pest Pro Exterminators',
  metaDesc: "Pest control in Brookhaven, GA & DeKalb County — termite, mosquito, rodent & bed bug treatment. Licensed local exterminator. Call now for your free quote.",
  h1: 'Pest Control in Brookhaven, GA',
  heroSub: "Brookhaven's dense, established neighborhoods sit just north of Buckhead along the Peachtree corridor, where a mature tree canopy and a mix of older intown homes and newer infill keep termites, mosquitoes, roaches, and rodents active close to year-round. Get a licensed local Brookhaven exterminator who knows the area — fast, with a free quote.",

  overviewHeading: 'Pest Control Built for Brookhaven Homes & Neighborhoods',
  overview: [
    "Home to roughly 55,000 residents, Brookhaven is one of metro Atlanta's denser intown-adjacent cities — a DeKalb County community that sits just northeast of downtown and immediately above the Buckhead district along the Peachtree Road corridor. That close-in setting is a big part of why pests do so well here: tightly spaced lots, a mature tree canopy shading much of the city, and the warmth and humidity of the urban core give termites, mosquitoes, roaches, and rodents both the cover and the moisture they need to stay active for most of the year.",
    "Brookhaven's housing carries the rest of the story. Established older neighborhoods have had decades for ants, roaches, and rodents to find every settled crack and worn seal, while the newer infill homes and townhomes squeezed in among them sit on freshly graded soil that subterranean termites move into readily. Whichever describes your place, the climate is the constant — north metro Atlanta's humid subtropical weather, with long, sticky summers and mild winters, keeps most pests going nearly all year, so a recurring, locally-tuned plan tends to beat one-off treatments. The licensed, insured pros in our directory quote your specific Brookhaven property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Brookhaven Homes Stay Under Pest Pressure Year-Round?',
      paras: [
        "Georgia sits inside one of the heaviest termite-pressure regions in the country, and Brookhaven is no exception. Eastern subterranean termites are the dominant species across the state, foraging underground and pushing mud tubes up into sills, joists, and framing — and because the city's mild winters never force the colonies dormant, they keep feeding 12 months a year. Since termite damage typically isn't covered by homeowners insurance, steady protection costs far less than the structural repairs.",
        "Termites are only the opening act. Red imported fire ants are present statewide and raise painful mounds across Brookhaven lawns and common areas. The bigger seasonal story is mosquitoes: metro Atlanta consistently ranks among the worst U.S. metros for them — top five on Orkin's 2025 list — and Brookhaven's shaded, well-watered yards under the tree canopy hold exactly the standing water they breed in and the cool vegetation they rest in from spring into fall. Add the German roaches and 'palmetto bugs' that flourish in the metro humidity, the roof rats and mice that slip into attics and basements as nights cool, and the bed bugs that hitchhike home from travel, and most Brookhaven homes do better with a steady professional barrier than with reacting one infestation at a time.",
      ],
    },
    {
      heading: 'Older Intown Homes, Newer Infill — and the Pests Each One Invites',
      paras: [
        "Brookhaven's tightly packed streets mix decades-old homes with newer infill construction and townhomes, and the two age groups face different pest problems. Older intown houses have settled over the years — small foundation gaps, gaps around aging utility penetrations, worn door sweeps, and cracked mortar — and those are exactly the openings ants, roaches, and rodents use to get inside, so exclusion and entry-point sealing matter as much as treatment.",
        "Newer infill homes and townhomes carry their own risk. Fresh framing and graded, disturbed soil around a new foundation are an easy target for subterranean termites, and shared walls in townhome and multifamily blocks let roaches and mice travel from one unit to the next. Brookhaven's density compounds both: when lots sit close together and the tree canopy keeps yards shaded and damp, a pest problem next door rarely stays next door. A licensed local pro tailors the plan to your home's age, construction, and surroundings after walking the property.",
      ],
    },
    {
      heading: 'Brookhaven Pest Season — What to Expect Month by Month',
      paras: [
        "Pest pressure shifts through the year in Brookhaven. Here's roughly what local homeowners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or shed translucent wings near a window or door are the classic first sign of an active colony. Ants get moving indoors and out, carpenter bees bore into deck and trim wood, and the first warm rains start mosquito breeding under Brookhaven's tree canopy. The ideal window to lock in protection before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across the metro, fire ant mounds multiply in Brookhaven lawns, paper wasps, hornets, and yellowjackets build large nests under eaves and decks, and roaches push indoors to escape the heat and humidity. Fleas and ticks reach their most active stretch on pets and in shaded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for a warm place to overwinter — this is when you start hearing scratching in Brookhaven attics, walls, and basements. Breaking-up yellowjacket colonies turn aggressive, and bed bugs ride home with holiday and fall travel. A smart time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Brookhaven's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Brookhaven',
      paras: [
        "The local pros in our directory cover Brookhaven across its ZIP codes and the neighboring DeKalb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Brookhaven Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Brookhaven and the wider DeKalb County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Brookhaven home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Brookhaven',
      paras: [
        "The Local Pest Pro is a directory that connects Brookhaven homeowners with licensed, insured local exterminators across DeKalb County — we're not a single company. When you call, you reach the pest control pro assigned to the Brookhaven area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Brookhaven, GA?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state), red imported fire ants in lawns and common areas, mosquitoes bred in shaded yards under Brookhaven's tree canopy, German roaches and outdoor 'palmetto bugs' that thrive in the metro humidity, roof rats and mice that push into attics and basements as nights cool, and bed bugs that hitchhike home from travel. The local pros in our directory treat all of them." },
    { q: 'Why are mosquitoes so persistent in Brookhaven?', a: "Brookhaven is a dense, intown-adjacent city with a heavy tree canopy, and that shade keeps yards cool and damp — exactly the resting cover and standing water mosquitoes need to breed close to home. Metro Atlanta also ranks among the worst U.S. metros for mosquitoes (top five on Orkin's 2025 list). A licensed pro treats the resting vegetation and the breeding water together, which works far better than spraying yourself before you head outside." },
    { q: 'Do older Brookhaven homes need a different approach than newer ones?', a: "Often, yes. Brookhaven's established older homes have had decades to develop the settled cracks, worn seals, and aging utility gaps that ants, roaches, and rodents exploit, so exclusion and entry-point work carry extra weight. The newer infill homes and townhomes face the opposite issue — graded soil and fresh framing that subterranean termites colonize easily, plus shared walls that let pests travel between units. A local pro tailors the plan to your home's age and construction after an inspection." },
    { q: 'Do you serve the areas around Brookhaven too?', a: "Yes. Beyond Brookhaven's 30319 and 30329 ZIP codes, the pros in our directory serve the surrounding DeKalb County communities, including Chamblee, Doraville, Dunwoody, and Tucker. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Brookhaven pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your home. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Brookhaven?', a: "Often, yes — many of the local pros serving Brookhaven offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue, or rodents in the house. Call and we'll route you to a DeKalb County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Brookhaven pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Brookhaven Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Brookhaven per-pest spoke
  // URL; because no spoke pages are built yet (pestPages is empty below), these
  // cards render as NON-clickable <div>s and 404 cleanly until each page is
  // authored — the same staged build pattern the Dunwoody and Roswell hubs used.
  // Blurbs are written fresh for Brookhaven.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/brookhaven/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones — eastern subterranean termites feed underground all year in Brookhaven's mild winters. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/brookhaven/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel and secondhand furniture and move quickly between Brookhaven's apartments, townhomes, and shared walls. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/brookhaven/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch beds and crawlspaces in the metro humidity — cleared out and kept out of Brookhaven homes and condos, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/brookhaven/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Brookhaven's shaded, well-watered yards under the tree canopy give them cover to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/brookhaven/rodent-control/',
      blurb: "As Brookhaven nights cool, roof rats, Norway rats, and house mice push into attics, walls, and basements. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/brookhaven/pest-control/',
      blurb: "Red imported fire ants are a fact of life in DeKalb County lawns, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Brookhaven per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
