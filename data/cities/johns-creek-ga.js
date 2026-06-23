'use strict';

// ── Johns Creek, GA — city hub ───────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its THREE
// SIBLING FULTON cities Roswell, Alpharetta, and Sandy Springs — the four Fulton
// hubs must each read clearly differently). The siblings already own their angles:
//   • Roswell       → the Chattahoochee corridor, wooded lots, established OLDER
//                     single-family neighborhoods.
//   • Alpharetta    → the GA 400 tech corridor, Avalon, NEW-construction suburb +
//                     commercial growth.
//   • Sandy Springs → the I-285 / GA 400 interchange, vertical MULTIFAMILY /
//                     high-rise / office density.
// Johns Creek leads on ITS OWN verified distinctive: an affluent, heavily PLANNED
// northeast-Fulton suburb of master-planned subdivisions and golf-course
// communities, where manicured, irrigated, ornamental landscaping and HOA common
// grounds give pests — especially mosquitoes and ants — a constant foothold.
// Targets local intent ("pest control johns creek", "johns creek exterminator",
// "johns creek ga pest control"). Rendered by views/city.ejs (hub) at
// /georgia/johns-creek/.
//
// `county` drives the LeadPortal contractor lookup — Johns Creek is in Fulton
// County, so an assigned Fulton County 'Pest Control' contractor shows on this
// page (name + phone + PestControlService schema, with license + address taken
// ONLY from the real contractor record); until one is assigned the page falls
// back to the shared (844) directory line and a Service schema node. The
// contractor is pulled server-side in server.js via getContractor(state.name,
// city.county, SITE.SERVICE_TYPE) — nothing is hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for Johns Creek yet, so `pestPages`
// is intentionally empty. The six canonical hub cards below point at the future
// spoke URLs and render as NON-clickable <div>s until those pages exist (see the
// city.ejs pestCardsHtml comment) — no soft 404s. All pest CATEGORIES (termite,
// mosquito, rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page
// sections / prose.
//
// APPROVED LOCAL FACTS ONLY (verified; no street names, named subdivisions or
// clubs, schools, ordinances, or invented stats): city in northeast FULTON County,
// affluent suburb; ~80,000 residents; one of metro Atlanta's newer cities, built
// largely around master-planned subdivisions and golf-course communities with
// newer, upscale housing and manicured, irrigated landscaping; the Chattahoochee
// River runs along its western boundary; ZIPs 30097/30022/30005; area codes
// 770/678/470; neighbors Alpharetta & Roswell (Fulton), Duluth, Suwanee &
// Peachtree Corners (Gwinnett, across the river); humid subtropical climate;
// eastern subterranean termites dominant statewide (NO Formosan local claim);
// red imported fire ants present statewide; metro Atlanta is a top-five U.S.
// mosquito metro (Orkin 2025); GA Dept. of Agriculture Structural Pest Control
// Commission regulates and licenses. Trust signals are CONTRACTOR-AGNOSTIC
// (licensed/insured, local GA service, fast response) — no specific company,
// rating, or review is referenced.

module.exports = {
  name: 'Johns Creek',
  slug: 'johns-creek',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30097', '30022', '30005'],
  // Nearby communities we also serve — NOT Johns Creek subdivisions. Several sit
  // in neighboring Gwinnett County (Duluth, Suwanee, Peachtree Corners) just
  // across the Chattahoochee, so the section is framed as nearby metro-Atlanta
  // areas, not "Fulton County communities." Alpharetta, Roswell, and Duluth have
  // built hubs and auto-link; the rest render as plain badges.
  neighborhoods: ['Alpharetta', 'Roswell', 'Duluth', 'Suwanee', 'Peachtree Corners'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Johns Creek its own 1200×630 card later, drop /images/johns-creek-og.jpg in
  // public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Johns Creek, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Johns Creek, GA pest control — termite, mosquito, rodent & bed bug control for homes and planned communities. Call a local exterminator for a free quote.",
  h1: 'Pest Control in Johns Creek, GA',
  heroSub: "Johns Creek is one of northeast Fulton County's most polished suburbs, built around master-planned subdivisions and golf-course communities where manicured, irrigated landscaping hands mosquitoes, ants, and other pests a steady foothold. Get matched with a licensed Johns Creek exterminator who knows these planned communities inside out — fast, and with a free, no-obligation quote.",

  overviewHeading: "Pest Control for Johns Creek's Planned Communities",
  overview: [
    "Home to roughly 80,000 residents, Johns Creek is one of metro Atlanta's newer and more affluent cities, and the way it was built shapes its pest problems. Rather than growing up piecemeal, the city took shape around master-planned subdivisions and golf-course communities, so much of Johns Creek is wrapped in manicured lawns, ornamental landscape beds, and irrigation systems that run all season. That polished, water-fed greenery looks great — and it also gives mosquitoes, ants, and roaches the moisture, mulch, and cover they need to settle in close to the house.",
    "The setting fills in the rest. The Chattahoochee River traces the city's western boundary, and the ponds and water features woven through Johns Creek's golf-course communities and HOA common areas add still more standing water to the mix. Tie it to the region's humid subtropical climate — long, muggy summers and mild winters — and most pests here stay busy nearly year-round, which is why a recurring plan tuned to a landscaped, irrigated property usually beats reacting to one flare-up at a time. The licensed, insured pros in our directory quote your specific Johns Creek home — and its grounds — for free before any work begins.",
  ],

  sections: [
    {
      heading: "Why Do Johns Creek's Planned Communities See Steady Pest Pressure?",
      paras: [
        "Georgia sits in one of the country's worst termite belts, and Johns Creek is no exception. Eastern subterranean termites are the species that matters here — they forage up from the soil and run mud tubes into sill plates, joists, and framing, and the graded subdivision lots that so much of the city is built on give them easy ground to move through. Because winters in northeast Fulton stay mild, the colonies rarely shut down and keep feeding right through the year, and since a homeowners or HOA policy almost never covers termite damage, steady protection costs far less than the repairs.",
        "Termites are only the beginning. Red imported fire ants are present statewide and push their mounds up through Johns Creek's manicured lawns and common greens. Mosquitoes, though, are the complaint tied most tightly to how the city is built: the irrigation that keeps those lawns green, the ornamental beds and dense foundation plantings around upscale homes, and the ponds and water hazards on the area's golf courses all hold the standing water and shade mosquitoes breed and rest in from spring into fall. Layer on the roaches that work in from mulch and pine straw, the roof rats and house mice that slip into attics and garages as nights cool, and the bed bugs that ride home from travel, and most Johns Creek homes do better with a steady professional barrier than with chasing one problem at a time.",
      ],
    },
    {
      heading: 'Which Pests Show Up in Johns Creek, and When?',
      paras: [
        "Pest pressure rises and falls across the year in Johns Creek. Here's the rough pattern local homeowners run into, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid afternoons — winged swarmers or small piles of shed wings near a window are the classic sign a colony is active nearby. Ants move indoors, carpenter bees bore into deck rails and trim, and as the irrigation comes back on and the first warm rains land, mosquitoes start breeding in landscape beds and golf-course ponds. The best stretch to lock in protection before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "The peak. Mosquitoes turn relentless across the irrigated, planted yards that define Johns Creek, fire ant mounds spread through lawns and common greens, and wasps, hornets, and yellowjackets hang nests under eaves, decks, and pergolas. Roaches push indoors to escape the heat, while fleas and ticks hit their most active stretch on pets and in shaded ornamental plantings." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice look for a warm place to overwinter, and that's when scratching starts in Johns Creek attics, garages, and wall voids. Yellowjacket colonies turn aggressive as they break apart, and bed bugs travel home with fall and holiday trips. A smart window to seal entry points before the cold sets in." },
        { name: 'Winter (Dec–Feb)', text: "Johns Creek's mild winters never fully switch pests off. German roaches and mice stay active indoors, and subterranean termites keep feeding underground no matter the calendar. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a fresh surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Johns Creek',
      paras: [
        "The local pros in our directory cover Johns Creek across its ZIP codes and the neighboring communities just over its borders. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Johns Creek Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "A single call reaches a licensed, insured exterminator covering Johns Creek and the surrounding Fulton County area — no obligation, no pressure, and nothing owed for the quote." },
        { name: '2. Get a local inspection', text: "A technician walks the home and its grounds, pins down the pest and how far it has spread, and lays out the right plan for your Johns Creek property and its landscaping — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs treat, seal, and prevent with EPA-registered products applied at label rates, including pet- and family-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Johns Creek',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Johns Creek homeowners with licensed, insured local exterminators across Fulton County. Call and you reach the pest control pro assigned to the Johns Creek area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific property. Every pro we connect you with holds a license under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Johns Creek, GA?', a: "The usual culprits are subterranean termites (Georgia carries heavy termite pressure), red imported fire ants in lawns and common greens, mosquitoes bred in irrigation-fed landscaping and golf-course ponds, German roaches and outdoor roaches that work in from mulch and pine straw, roof rats and house mice that move into attics and garages as nights cool, and bed bugs that hitch home from travel. The local pros in our directory treat every one of them." },
    { q: 'Why are mosquitoes a problem in Johns Creek?', a: "Johns Creek is built around manicured, master-planned neighborhoods, and the very things that keep them looking sharp work against you here — constant irrigation, dense ornamental plantings, and the ponds and water hazards on the area's golf courses all give mosquitoes standing water to breed in and shaded greenery to rest in. Metro Atlanta also ranks among the worst U.S. metros for them (top five on Orkin's 2025 list). A licensed pro treats the breeding water and the resting spots together, which holds up far better than spraying yourself on the way out the door." },
    { q: 'Do master-planned and golf-course communities in Johns Creek need special pest control?', a: "Often, yes. The heavy irrigation, ornamental landscape beds, mulched foundation plantings, and shared ponds and greens that define so many Johns Creek communities create steady moisture and harborage right up against the house — ideal for mosquitoes, ants, and roaches. A local pro tailors the plan to a landscaped, irrigated property: treating foundation and bed lines, knocking down mosquito harborage in the plantings, and coordinating with HOA-maintained common areas where it helps. Recurring service usually fits this kind of property better than a one-time spray." },
    { q: 'Do you serve the areas around Johns Creek too?', a: "Yes. Beyond Johns Creek's 30097, 30022, and 30005 ZIP codes, the pros in our directory cover the bordering communities, including Alpharetta and Roswell in Fulton County and Duluth, Suwanee, and Peachtree Corners just across the Chattahoochee in Gwinnett. Call and we'll route you to a licensed exterminator working your part of the metro." },
    { q: 'Are Johns Creek pest control companies licensed?', a: "They should be. Structural pest control in Georgia falls under the Department of Agriculture and its Structural Pest Control Commission, which licenses the companies and certifies the applicators who treat your home. Every pro we list is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Johns Creek?', a: "Frequently, yes — many of the local pros serving Johns Creek keep room for same-day and emergency visits when something can't wait, whether it's a wasp nest over a doorway, a sudden roach problem, or rodents loose in the house. Call and we'll get you to a Fulton County exterminator who can respond quickly." },
    { q: 'Are pest treatments safe for kids and pets?', a: "Yes. Johns Creek pros apply EPA-registered products at label rates and carry family- and pet-safe or low-toxicity options, placing most material around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will flag any short re-entry window — usually only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Johns Creek Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Johns Creek per-pest spoke
  // URL; because no spoke pages are built yet (pestPages is empty below), these
  // cards render as non-clickable <div>s until each page is authored — the same
  // staged build pattern the Roswell, Alpharetta, and Sandy Springs hubs used.
  // Blurbs are written fresh for Johns Creek (distinct from all three sibling hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/johns-creek/termite-control/',
      blurb: "Eastern subterranean termites work up from the soil into Johns Creek's subdivision homes, and Georgia sits in one of the country's worst termite belts. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/johns-creek/bed-bug-treatment/',
      blurb: "Bed bugs ride home from travel, hotels, and secondhand furniture and spread quietly through Johns Creek bedrooms before anyone notices. Whole-room heat or a targeted residual program kills every life stage, with follow-up checks." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/johns-creek/cockroach-control/',
      blurb: "German roaches indoors plus the big outdoor roaches that drift in from mulch, pine straw, and the dense foundation plantings around landscaped homes. Cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/johns-creek/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Johns Creek's irrigation, ornamental beds, and golf-course ponds give them all the standing water they need. Yard and landscape barrier sprays plus larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/johns-creek/rodent-control/',
      blurb: "As Johns Creek nights cool, roof rats, Norway rats, and house mice push into attics, garages, and wall voids. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/johns-creek/pest-control/',
      blurb: "Red imported fire ants are a fact of life on Johns Creek's manicured lawns and common greens, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Johns Creek per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
