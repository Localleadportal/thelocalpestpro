'use strict';

// ── Sandy Springs, GA — city hub ─────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its SIBLING
// FULTON cities Roswell and Alpharetta — the three Fulton hubs must each read
// clearly differently). The siblings already own their angles:
//   • Roswell    → the Chattahoochee corridor, wooded lots, established OLDER
//                  single-family neighborhoods.
//   • Alpharetta → the GA 400 tech corridor, Avalon, NEW-construction suburb +
//                  commercial growth.
// Sandy Springs leads on ITS OWN verified distinctive: a DENSE, close-in city
// straddling the I-285 / GA 400 interchange just north of Atlanta, with a heavy
// concentration of APARTMENTS, CONDOS, HIGH-RISES and a major office/commercial
// district — vertical, multifamily, shared-wall living that spreads pests
// unit-to-unit. Targets local intent ("pest control sandy springs", "sandy
// springs exterminator", "sandy springs ga pest control"). Rendered by
// views/city.ejs (hub) at /georgia/sandy-springs/.
//
// `county` drives the LeadPortal contractor lookup — Sandy Springs is in Fulton
// County, so an assigned Fulton County 'Pest Control' contractor shows on this
// page (name + phone + PestControlService schema); until one is assigned the
// page falls back to the shared (844) directory line and a Service schema node.
// The contractor is pulled server-side in server.js via getContractor(state.name,
// city.county, SITE.SERVICE_TYPE) — nothing is hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for Sandy Springs yet, so
// `pestPages` is intentionally empty. The six canonical hub cards below point at
// the future spoke URLs and render as NON-clickable <div>s until those pages
// exist (see the city.ejs pestCardsHtml comment) — no soft 404s. All pest
// CATEGORIES (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections / prose.
//
// APPROVED LOCAL FACTS ONLY (verified; no street names, subdivisions, schools,
// specific company HQs, ordinances, or invented stats): city in FULTON County,
// inside-the-perimeter-adjacent suburb directly north of Atlanta, roughly 15 mi
// from downtown; straddles the I-285 / GA 400 interchange; ~108,000 residents
// (one of Georgia's largest cities); large concentration of apartments, condos,
// high-rise residential and a dense office/commercial district; the Chattahoochee
// River forms its northwestern/western boundary; ZIPs 30327/30328/30342/30350;
// area codes 404/770/678/470; neighbors Dunwoody & Brookhaven (DeKalb), Roswell
// (Fulton), Buckhead/Atlanta (Fulton), Vinings (Cobb, across the river); humid
// subtropical climate; eastern subterranean termites dominant statewide; red
// imported fire ants present statewide; metro Atlanta is a top-five U.S. mosquito
// metro (Orkin 2025); GA Dept. of Agriculture Structural Pest Control Commission
// regulates and licenses. Trust signals are CONTRACTOR-AGNOSTIC (licensed/insured,
// local GA service, fast response) — no specific company, rating, or review.

module.exports = {
  name: 'Sandy Springs',
  slug: 'sandy-springs',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30327', '30328', '30342', '30350'],
  // Nearby communities we also serve — NOT Sandy Springs subdivisions. Several
  // sit in neighboring counties (Dunwoody/Brookhaven in DeKalb, Vinings in Cobb),
  // so the section is framed as nearby metro-Atlanta areas, not "Fulton County
  // communities." Dunwoody, Brookhaven, and Roswell have built hubs and auto-link.
  neighborhoods: ['Dunwoody', 'Brookhaven', 'Roswell', 'Buckhead', 'Vinings'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Sandy Springs its own 1200×630 card later, drop /images/sandy-springs-og.jpg
  // in public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Sandy Springs, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Sandy Springs, GA pest control for homes, condos & offices — termite, mosquito, rodent & bed bug control. Call a licensed local exterminator for a free quote.",
  h1: 'Pest Control in Sandy Springs, GA',
  heroSub: "Sandy Springs packs single-family homes, apartment towers, condos, and a busy office district into the corner where I-285 meets GA 400 just north of Atlanta — close quarters that let roaches, rodents, mosquitoes, and bed bugs travel from unit to unit and yard to yard. Connect with a licensed Sandy Springs exterminator who works these neighborhoods every day — fast, with a free, no-obligation quote.",

  overviewHeading: 'Pest Control for Sandy Springs Homes, Condos & Offices',
  overview: [
    "With roughly 108,000 residents, Sandy Springs is one of Georgia's largest cities, and it wears its density differently from the spread-out suburbs to its north. The city wraps around the point where I-285 and GA 400 meet just above Atlanta, mixing detached houses with a wall of apartment buildings, mid-rise condos, high-rise residential, and one of the metro's bigger office and retail districts. That vertical, packed-in layout is the local pest story: when units share walls, plumbing chases, and trash rooms, a problem in one space rarely stays in one space.",
    "The natural setting layers on top of the built one. The Chattahoochee River traces Sandy Springs' northwestern edge, and the creeks and shaded, irrigated grounds threaded through the city hold the moisture that mosquitoes, roaches, and rodents work with. Tie it together with the region's humid subtropical climate — long, sticky summers and mild winters — and most pests here barely slow down all year, which is why a recurring, building-aware plan tends to beat one-off spraying. The licensed, insured pros in our directory quote your specific Sandy Springs address — house, unit, or commercial space — for free before any work starts.",
  ],

  sections: [
    {
      heading: 'What Makes Sandy Springs Such a Pest Magnet Year-Round?',
      paras: [
        "Georgia ranks among the most termite-pressured states in the country, and Sandy Springs sits right inside that zone. Eastern subterranean termites are the species that matters here — they tunnel up from the soil and push mud tubes into sill plates, joists, and framing, and they don't care whether they're working a slab-on-grade condo building or a decades-old house. Because winters this close to Atlanta stay mild, the colonies rarely go dormant and keep feeding straight through the calendar, and since termite damage almost never falls under a homeowners or HOA policy, ongoing protection costs a fraction of the repair bill.",
        "Density is what sets the rest of the picture apart. In a city this stacked, German roaches and bed bugs are the standouts — both spread along shared walls, utility runs, and stairwells, riding from one apartment or condo to the next, and bed bugs hitch in with the heavy travel that comes with a corporate hub. Add the red imported fire ants that mound up across lawns and common areas, the mosquitoes that breed along the Chattahoochee and in the city's many creeks and landscaped courtyards, and the roof rats and mice that slip into homes, garbage rooms, and office buildings as nights cool, and most Sandy Springs properties do better with a steady professional barrier than with reacting one outbreak at a time.",
      ],
    },
    {
      heading: 'When Is Each Pest Most Active in Sandy Springs?',
      paras: [
        "Pest pressure rises and falls through the year in Sandy Springs. Here's the rough rhythm local residents and property managers see, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid afternoons — winged swarmers or little drifts of shed wings on a windowsill or in a lobby are the tell that a colony is active nearby. Ants find their way indoors, carpenter bees drill into deck rails and trim, and early rains start mosquitoes breeding along the river and in landscaped courtyards. The smartest stretch to get protection set before pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "The busy season. Mosquitoes turn relentless across the close-in metro, fire ant mounds spread through lawns and shared grounds, and wasps, hornets, and yellowjackets hang nests under balconies, eaves, and stairwells. Roaches push deeper indoors — into kitchens, trash rooms, and shared utility spaces — to escape the heat, while fleas and ticks peak on pets and in shaded plantings." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt a warm place to overwinter, and in a dense city that means attics, wall voids, garbage rooms, and the lower floors of stacked buildings. Yellowjacket colonies turn aggressive as they break apart, and bed bugs ride home with fall and holiday travel. A good moment to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Sandy Springs' mild winters never fully switch pests off. German roaches and mice stay active indoors, moving between heated units, and subterranean termites keep feeding underground regardless of the date. Recurring service holds the barrier through the cool months so spring doesn't open with a fresh surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Sandy Springs',
      paras: [
        "The local pros in our directory cover Sandy Springs across its ZIP codes and the neighboring metro-Atlanta communities just over its borders. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Sandy Springs Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "One call reaches a licensed, insured exterminator covering Sandy Springs and the wider Fulton County area — houses, condos, apartments, and commercial spaces alike, with nothing owed for the quote and no pressure." },
        { name: '2. Get a local inspection', text: "A technician walks the property, pins down the pest and how far it has carried, and lays out the right plan for your Sandy Springs home, unit, or building — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs treat, seal, and prevent with EPA-registered products applied at label rates, including pet- and family-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Sandy Springs',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Sandy Springs property owners, renters, and managers with licensed, insured local exterminators across Fulton County. Call and you reach the pest control pro assigned to the Sandy Springs area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific address. Every pro we connect you with holds a license under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What are the most common pests in Sandy Springs, GA?', a: "The frequent offenders are subterranean termites (Georgia carries heavy termite pressure), German roaches and bed bugs that travel between units in the city's apartments and condos, red imported fire ants in lawns and common grounds, mosquitoes bred along the Chattahoochee and in landscaped courtyards, and roof rats and mice that work their way into homes, garbage rooms, and office buildings as the weather turns. The local pros in our directory handle every one of them." },
    { q: 'Why do mosquitoes thrive in Sandy Springs?', a: "Sandy Springs hugs the Chattahoochee River along its northwestern edge, and the creeks, storm drainage, and irrigated, shaded grounds woven through such a built-up city give mosquitoes plenty of quiet standing water to breed in and cool cover to rest in by day. Metro Atlanta also lands among the worst U.S. metros for them — top five on Orkin's 2025 list. A licensed pro hits the breeding water and the resting spots together, which holds up far better than fogging yourself before you step out." },
    { q: 'Do you treat apartments, condos, and high-rise buildings in Sandy Springs?', a: "Yes — and in a city this vertical it's a big part of the work. Because roaches and bed bugs move along shared walls, plumbing chases, and stairwells, treating a single unit in isolation often just pushes the problem next door. The pros in our directory coordinate with residents and property managers on whole-building and multi-unit approaches, from targeted unit treatments to common-area and exterior service. Call and we'll connect you with an exterminator experienced in multifamily and high-rise work." },
    { q: 'Do you serve the areas around Sandy Springs too?', a: "Yes. Beyond Sandy Springs' 30327, 30328, 30342, and 30350 ZIP codes, the pros in our directory cover the bordering communities just outside the city, including Dunwoody, Brookhaven, Roswell, Buckhead, and Vinings. Call and we'll route you to a licensed exterminator working your part of the metro." },
    { q: 'Are Sandy Springs pest control companies licensed?', a: "They should be. Structural pest control in Georgia falls under the Department of Agriculture and its Structural Pest Control Commission, which licenses the companies and certifies the applicators who treat your property. Every pro we list is a licensed, insured Georgia exterminator." },
    { q: 'Is same-day or emergency pest control available in Sandy Springs?', a: "Frequently, yes — many of the local pros serving Sandy Springs keep room for same-day and emergency calls when something can't wait, whether it's a wasp nest over a doorway, a sudden roach problem in a kitchen, or rodents loose in a building. Call and we'll get you to a Fulton County exterminator who can respond quickly." },
    { q: 'Are pest treatments safe around children and pets?', a: "Yes. Sandy Springs pros apply EPA-registered products at label rates and carry family- and pet-safe or low-toxicity options, placing most material around the exterior, entry points, and cracks and crevices rather than across living or work areas. Your technician will flag any short re-entry window — usually only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Sandy Springs Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Sandy Springs per-pest spoke
  // URL; because no spoke pages are built yet (pestPages is empty below), these
  // cards render as non-clickable <div>s until each page is authored — the same
  // staged build pattern the Roswell and Alpharetta hubs used. Blurbs are written
  // fresh for Sandy Springs (distinct from BOTH sibling Fulton hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/sandy-springs/termite-control/',
      blurb: "Georgia is one of the country's heaviest termite zones, and subterranean termites work Sandy Springs slabs, crawlspaces, and stacked buildings the same way. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/sandy-springs/bed-bug-treatment/',
      blurb: "Bed bugs ride in on travel and secondhand furniture, then creep along shared walls between Sandy Springs apartments and condos. Whole-room heat or a targeted residual program kills every life stage, with follow-up checks." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/sandy-springs/cockroach-control/',
      blurb: "German roaches spreading through multifamily kitchens, trash rooms, and utility chases, plus the big outdoor roaches that drift in from mulch and landscaping. Cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/sandy-springs/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and the Chattahoochee, neighborhood creeks, and shaded courtyards give them standing water to breed in. Yard and grounds barrier sprays plus larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/sandy-springs/rodent-control/',
      blurb: "As Sandy Springs nights cool, roof rats, Norway rats, and house mice push into attics, wall voids, garbage rooms, and office buildings. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/sandy-springs/pest-control/',
      blurb: "Red imported fire ants are a fact of life on Sandy Springs lawns and common grounds, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all — homes, condos, and offices." },
  ],

  // No Sandy Springs per-pest spoke pages have been authored yet — keep this empty
  // so the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
