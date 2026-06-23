'use strict';

// ── Roswell, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the Cherokee County city pages — Roswell is in
// FULTON County, north metro Atlanta, so it must read distinctly from any sibling
// city). Targets local intent ("pest control roswell ga", "roswell exterminator",
// "roswell pest control"). Rendered by views/city.ejs (hub) at /georgia/roswell/.
//
// `county` drives the LeadPortal contractor lookup — Roswell is in Fulton County,
// so an assigned Fulton County 'Pest Control' contractor shows on this page (name
// + phone + LocalBusiness schema); until one is assigned the page falls back to
// the shared (844) directory line and a Service schema node. The contractor is
// pulled server-side in server.js via getContractor(state.name, city.county,
// SITE.SERVICE_TYPE) — nothing is hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for Roswell yet, so `pestPages` is
// intentionally empty. The six hub cards below link to the future spoke URLs and
// 404 cleanly until those pages are authored (the established build pattern — see
// the city.ejs pestCardsHtml comment). All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no other local specifics, no street names,
// subdivisions, parks, schools, ordinances, or invented stats): city in FULTON
// County, north metro Atlanta, ~22 mi N of downtown Atlanta; one of Georgia's
// largest cities (~92,000 residents); the Chattahoochee River runs along its
// southern edge; a mix of established older neighborhoods and newer growth; ZIPs
// 30075/30076; area codes 770/678/470; neighbors Alpharetta, Milton, Sandy
// Springs, Johns Creek, Mountain Park (all Fulton County); humid subtropical
// climate; eastern subterranean termites dominant statewide; red imported fire
// ants present statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); GA Dept. of Agriculture Structural Pest Control Commission regulates and
// licenses. Trust signals are CONTRACTOR-AGNOSTIC (licensed/insured, local GA
// service, fast response) — no specific company, rating, or review is referenced.

module.exports = {
  name: 'Roswell',
  slug: 'roswell',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30075', '30076'],
  // Nearby Fulton County communities we also serve — NOT Roswell subdivisions.
  // (Service-area names only; all are real Fulton County neighbors of Roswell.)
  neighborhoods: ['Alpharetta', 'Milton', 'Sandy Springs', 'Johns Creek', 'Mountain Park'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Roswell its own 1200×630 card later, drop /images/roswell-og.jpg in public/
  // and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Roswell, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Pest control in Roswell, GA & Fulton County — termite, mosquito & rodent control, roaches & fire ants. Call a licensed local exterminator for a free quote.",
  h1: 'Pest Control in Roswell, GA',
  heroSub: "Roswell sits along the Chattahoochee River in north metro Atlanta, where wooded lots and established older neighborhoods keep mosquitoes, termites, roaches, and rodents active close to year-round. Get a licensed local Roswell exterminator who knows the area — fast, with a free quote.",

  overviewHeading: 'Pest Control Built for Roswell & North Fulton',
  overview: [
    "One of Georgia's largest cities with roughly 92,000 residents, Roswell spreads across north Fulton County about 22 miles above downtown Atlanta — and its setting is a big part of why pests thrive here. The Chattahoochee River runs along the city's southern edge, and the heavily wooded, shaded lots that give Roswell its character also hold the moisture and cover that mosquitoes, roaches, and rodents depend on. Add the river-corridor humidity and you have pest pressure that barely lets up.",
    "Roswell's housing tells the rest of the story. Established older neighborhoods have had decades for ants, roaches, and rodents to find every gap, while newer construction sits on graded soil that subterranean termites readily move into. Whichever describes your home, the climate is the constant: north metro Atlanta's humid subtropical weather — long, sticky summers and mild winters — keeps most pests going nearly all year, which is why a recurring, locally-tuned plan tends to beat one-off treatments. The licensed, insured pros in our directory quote your specific Roswell property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Roswell Homes Stay Under Pest Pressure Year-Round?',
      paras: [
        "Georgia sits inside one of the heaviest termite-pressure regions in the country, and Roswell is no exception. Eastern subterranean termites are the dominant species across the state, foraging underground and building mud tubes up into sills, joists, and framing — and because north metro Atlanta winters are mild, those colonies keep feeding 12 months a year instead of going dormant. Since termite damage typically isn't covered by homeowners insurance, steady protection costs far less than the repairs.",
        "Termites are only the start. Red imported fire ants are present statewide and throw up painful mounds across Roswell lawns. The bigger local story is mosquitoes: metro Atlanta consistently ranks among the worst U.S. metros for them — top five on Orkin's 2025 list — and the Chattahoochee River corridor plus Roswell's shaded, wooded yards give them standing water to breed in and cool vegetation to rest in from spring into fall. Round it out with the German roaches and 'palmetto bugs' that flourish in the humidity, the roof rats and mice that push indoors as nights cool, and the bed bugs that hitchhike home from travel, and most Roswell homes do better with a steady professional barrier than with reacting one infestation at a time.",
      ],
    },
    {
      heading: 'Roswell Pest Season — What to Expect Month by Month',
      paras: [
        "Pest pressure shifts through the year in Roswell. Here's roughly what local homeowners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or shed translucent wings near windows are the classic first sign of an active colony. Ants get moving, carpenter bees bore into deck and trim wood, and the first warm rains kick off mosquito breeding along the Chattahoochee and in shaded yards. The ideal window to lock in protection before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across north metro Atlanta, fire ant mounds multiply in Roswell lawns, paper wasps, hornets, and yellowjackets build large nests under eaves and decks, and roaches push indoors to escape the heat and humidity. Fleas and ticks hit their most active stretch on pets and in wooded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for a warm place to overwinter — this is when you start hearing scratching in Roswell attics and walls. Breaking-up yellowjacket colonies turn aggressive, and bed bugs travel home with holiday and fall trips. A smart time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Roswell's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Roswell',
      paras: [
        "The local pros in our directory cover Roswell across its ZIP codes and the neighboring Fulton County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Roswell Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Roswell and the wider north Fulton County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Roswell home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Roswell',
      paras: [
        "The Local Pest Pro is a directory that connects Roswell homeowners with licensed, insured local exterminators across north Fulton County — we're not a single company. When you call, you reach the pest control pro assigned to the Roswell area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Roswell, GA?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state), red imported fire ants in lawns, mosquitoes bred along the Chattahoochee River corridor and in shaded wooded yards, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, roof rats and mice that push into attics as nights cool, and bed bugs that hitchhike home from travel. The local pros in our directory treat all of them." },
    { q: 'Why are mosquitoes so bad in Roswell?', a: "Roswell sits along the Chattahoochee River, and that corridor — combined with the city's heavily wooded, shaded lots — gives mosquitoes both the standing water they need to breed and the cool vegetation they rest in during the day. Metro Atlanta also ranks among the worst U.S. metros for mosquitoes (top five on Orkin's 2025 list). A licensed pro treats the resting areas and the breeding water together, which works far better than spraying yourself before you step outside." },
    { q: 'Do older Roswell homes need different pest control?', a: "Often, yes. Roswell's established older neighborhoods have had decades to develop the small gaps, settled cracks, and worn seals that ants, roaches, and rodents exploit, so exclusion and entry-point work matter more. Newer Roswell homes face their own issue — graded soil and fresh framing that subterranean termites colonize easily. A local pro tailors the plan to your home's age and construction after an inspection." },
    { q: 'Do you serve the areas around Roswell too?', a: "Yes. Beyond Roswell's 30075 and 30076 ZIP codes, the pros in our directory serve the surrounding north Fulton County communities, including Alpharetta, Milton, Sandy Springs, Johns Creek, and Mountain Park. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Roswell pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your home. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Roswell?', a: "Often, yes — many of the local pros serving Roswell offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue, or rodents in the house. Call and we'll route you to a north Fulton County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Roswell pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Roswell Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Roswell per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // 404 cleanly until each page is authored — the same staged build pattern the
  // Canton and Holly Springs hubs used. Blurbs are written fresh for Roswell.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/roswell/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones — eastern subterranean termites feed underground all year in Roswell's mild winters. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/roswell/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel and secondhand furniture and spread fast through Roswell homes. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/roswell/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch, woodpiles, and crawlspaces in the river-corridor humidity — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/roswell/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and the Chattahoochee corridor plus Roswell's wooded lots give them water to breed and shade to rest in. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/roswell/rodent-control/',
      blurb: "As Roswell nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/roswell/pest-control/',
      blurb: "Red imported fire ants are a fact of life in Roswell lawns, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Roswell per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
