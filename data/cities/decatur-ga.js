'use strict';

// ── Decatur, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb / metro-Atlanta city pages).
// This is the CITY of Decatur in DeKalb County, immediately EAST of Atlanta —
// NOT Decatur County in southwest Georgia (county seat Bainbridge). Every meta,
// heading, and FAQ pairs "Decatur" with "GA"/"DeKalb" and the page disambiguates
// from Decatur County explicitly, so it ranks for the DeKalb city and never the
// South Georgia county (or Decatur IL/AL). Targets local intent ("pest control
// Decatur GA", "Decatur GA exterminator", "Decatur Georgia pest control").
// Rendered by views/city.ejs (hub) at /georgia/decatur/.
//
// DISTINCT FROM ITS DeKalb SIBLINGS (sentence-level, zero reuse):
//   • Dunwoody owns the Perimeter Center commercial + incorporated-2008 angle.
//   • Brookhaven owns the intown-adjacent / north-of-Buckhead / Peachtree-corridor
//     older-homes-plus-newer-infill angle.
//   • Decatur leads on its OWN verified distinctives: one of metro Atlanta's
//     OLDEST cities (founded 1823, predating Atlanta), a historic, walkable
//     downtown square ringed with restaurants and mixed-use, and dense
//     early-20th-century craftsman-bungalow neighborhoods under a mature canopy.
//     The local angle is historic-walkable-downtown + early-1900s bungalow stock,
//     NOT the generic "older homes" framing Brookhaven already uses.
//
// `county` drives the LeadPortal contractor lookup — Decatur is in DeKalb County
// (the SAME lookup key as Dunwoody and Brookhaven), so an assigned DeKalb County
// 'Pest Control' contractor shows on this page (name + phone + PestControlService
// schema); until one is assigned the page falls back to the shared (844) line and
// a Service schema node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here. The lookup tries both "DeKalb County" and "DeKalb"
// (see lib/contractor.js).
//
// HUB ONLY: no per-pest spoke pages are built for Decatur yet, so `pestPages` is
// intentionally empty. The six canonical hub cards below link to the future spoke
// URLs and, because no spoke exists, render as NON-clickable <div>s that 404
// cleanly until each page is authored (the established staged-build pattern — see
// the city.ejs pestCardsHtml comment). All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no invented streets, subdivisions, parks,
// schools, ordinances, or stats): the city of Decatur sits in DeKalb County,
// metro Atlanta, just east of the City of Atlanta; it is one of metro Atlanta's
// oldest cities, founded in 1823 (it predates Atlanta); roughly 25,000 residents
// in the incorporated city; a compact, walkable city built around a historic
// downtown square lined with restaurants, shops, and mixed-use; dense
// neighborhoods of early-20th-century craftsman bungalows and other historic
// homes under a mature tree canopy; ZIP 30030 (with 30033 covering postal
// Decatur/North Decatur); nearby DeKalb communities Avondale Estates, Druid Hills,
// Scottdale, Clarkston; humid subtropical climate with long summers and mild
// winters; eastern subterranean termites dominant statewide (Formosan termites
// rare in GA, not established in metro Atlanta); red imported fire ants present
// statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated and licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. Trust signals are
// CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast response) — no
// specific company, rating, or review is referenced.

module.exports = {
  name: 'Decatur',
  slug: 'decatur',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30030', '30033'],
  // Nearby DeKalb County communities we also serve — NOT Decatur subdivisions.
  // (Service-area names only; all are real DeKalb County neighbors of the city of
  // Decatur. None has its own built hub, so city.ejs renders them as plain badges.)
  neighborhoods: ['Avondale Estates', 'Druid Hills', 'Scottdale', 'Clarkston'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Decatur its own 1200×630 card later, drop /images/decatur-og.jpg in public/
  // and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Decatur, GA — The Local Pest Pro Exterminators',
  metaDesc: "Pest control in Decatur, GA & DeKalb County — termite, mosquito, rodent & roach treatment for historic homes and downtown businesses. Call now for a free quote.",
  h1: 'Pest Control in Decatur, GA',
  heroSub: "Just east of Atlanta, the city of Decatur pairs early-1900s bungalow neighborhoods with a busy downtown square — and DeKalb County's warm, humid stretch keeps termites, mosquitoes, roaches, and rodents working both. Reach a licensed local Decatur exterminator who knows these older homes and the square, with a free quote up front.",

  overviewHeading: 'Local Pest Control for Decatur, GA — Historic Homes to the Square',
  overview: [
    "Founded in 1823, the city of Decatur is one of metro Atlanta's oldest — it actually predates Atlanta — and that long history is written into its housing. Roughly 25,000 people live in a compact, walkable DeKalb County city whose neighborhoods are dominated by craftsman bungalows and other early-20th-century homes shaded by a mature tree canopy. A century of settling leaves those houses with the kind of foundation cracks, gaps around old plumbing penetrations, and weathered crawlspaces that subterranean termites, roaches, and rodents treat as an open door, which is why pest work here leans as much on inspection and exclusion as on treatment.",
    "Worth clearing up first: this is Decatur in DeKalb County, immediately east of the City of Atlanta — not Decatur County down in southwest Georgia near Bainbridge. The local constant is the climate. Metro Atlanta's humid subtropical weather, with long, sticky summers and mild winters, gives most pests no real off-season, so a recurring, locally-tuned plan tends to outperform one-off treatments on a century-old Decatur home. Whether you own a bungalow off the square or run a storefront on it, the licensed, insured pros in our directory inspect and quote your specific property for free before any work begins.",
  ],

  sections: [
    {
      heading: "What Makes Decatur's Historic Homes a Magnet for Pests?",
      paras: [
        "Decatur's early-20th-century bungalows are part of the city's charm, but age changes the pest equation. Decades of settling open hairline gaps in old brick foundations, around aging utility penetrations, and along worn sills and door thresholds — the exact entry points ants, roaches, and rodents use to slip inside. Many of these homes sit over vented crawlspaces rather than slabs, and the cool, damp space underneath is prime habitat for moisture pests and a highway subterranean termites follow straight up into the floor joists. On a historic house, sealing those routes matters as much as anything sprayed on.",
        "Georgia also sits in one of the heaviest termite-pressure zones in the country, and Decatur is squarely in it. Eastern subterranean termites forage underground statewide, pushing mud tubes into framing, and because the city's mild winters never force the colonies dormant they keep feeding all twelve months. Since termite damage rarely falls under a homeowners policy, steady protection costs a fraction of repairing a century-old home's structure. Add the German roaches and outdoor 'palmetto bugs' that flourish in the humidity, the roof rats and mice that exploit a bungalow's gaps as nights cool, and the bed bugs that ride home from travel, and most older Decatur homes do better with a maintained barrier than with reacting one problem at a time.",
      ],
    },
    {
      heading: "Pest Control for Downtown Decatur's Restaurants & Square",
      paras: [
        "Decatur is built around its downtown square — a dense, walkable core of restaurants, cafés, retail, and mixed-use buildings that anchors the city and draws crowds for its festivals and dining. For the businesses packed around it, pests aren't just a nuisance; a single roach in a dining room, rodent droppings in a stockroom, or ants in a prep area can mean a failed health inspection and a hit to a hard-earned reputation. The tight footprint and shared walls of older commercial blocks let pests travel between tenants, so control on the square depends on discreet, scheduled service rather than emergency call-outs.",
        "The local pros in our directory handle commercial accounts throughout Decatur — restaurants and food service, retail, salons, professional offices, and the mixed-use and multi-tenant buildings around the square — with recurring, after-hours-friendly visits, documentation health inspectors expect, and Integrated Pest Management aimed at the kitchens, dumpster areas, and utility chases where commercial pests get in. Whether you run one café off the square or manage a whole building on it, a single call connects you with a licensed exterminator who can build a plan around how your business actually operates.",
      ],
    },
    {
      heading: 'When Are Pests Worst in Decatur? A Season-by-Season Guide',
      paras: [
        "Pest pressure rises and falls through the year in Decatur. Here's roughly what local homeowners and business owners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — clusters of winged swarmers or shed translucent wings near a window are the classic tip-off to a colony already working a bungalow's foundation. Ants get active, carpenter bees bore into old deck and trim wood, and the first warm rains start mosquitoes breeding under Decatur's tree canopy. The best window to get protection in place before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across metro Atlanta, fire ant mounds spread through Decatur yards and parkways, paper wasps and yellowjackets build large nests under eaves and porch roofs, and roaches push indoors and into the square's kitchens to escape the heat. Fleas and ticks hit their most active stretch on pets and in shaded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for somewhere warm to overwinter — and a century-old home's gaps make easy entry, so this is when you start hearing scratching in Decatur attics and walls. Yellowjacket colonies turn aggressive as they break down, and bed bugs ride home with fall and holiday travel. A smart time to seal entry points." },
        { name: 'Winter (Dec–Feb)', text: "Decatur's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round beneath older foundations. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Which Areas Around Decatur Do You Cover?',
      paras: [
        "The local pros in our directory cover the city of Decatur across its ZIP codes and the neighboring DeKalb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'What Happens When You Call for Decatur Pest Control?',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving the city of Decatur and the wider DeKalb County area — home or business, no obligation and no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property — including the crawlspace and foundation line on older homes — confirms the pest and how far it has spread, and recommends the right treatment for your Decatur home or storefront, one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'Who Is The Local Pest Pro?',
      paras: [
        "The Local Pest Pro is a directory that connects Decatur homeowners and businesses with licensed, insured local exterminators across DeKalb County — we're not a single company. When you call, you reach the pest control pro assigned to the Decatur area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'Is this the city of Decatur in DeKalb County, or Decatur County in South Georgia?', a: "This page covers the city of Decatur in DeKalb County — the historic city immediately east of Atlanta, inside metro Atlanta. It is a different place from Decatur County, which is in the southwest corner of Georgia with Bainbridge as its county seat. The local pros in our directory serve the metro-Atlanta city of Decatur and the surrounding DeKalb County communities." },
    { q: 'What are the most common pests in Decatur, GA?', a: "The headliners are subterranean termites (Georgia is a heavy termite-pressure state, and Decatur's older foundations give them easy access), red imported fire ants in lawns and parkways, mosquitoes bred in shaded yards under the city's tree canopy, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, roof rats and mice that exploit the gaps in century-old homes as nights cool, and bed bugs that hitchhike home from travel. The local pros in our directory treat all of them, for homes and businesses." },
    { q: "Do Decatur's older bungalows need a different approach than newer homes?", a: "Usually, yes. Decatur's early-20th-century bungalows have had a century to settle, so they tend to have foundation gaps, aging utility penetrations, and vented crawlspaces that ants, roaches, rodents, and moisture pests exploit — which makes exclusion, crawlspace work, and entry-point sealing carry extra weight alongside any treatment. A licensed local pro inspects the foundation and crawlspace, then tailors the plan to your specific home's age and construction rather than applying a one-size template." },
    { q: 'Can you handle pest control for restaurants and businesses on Decatur Square?', a: "Yes. Downtown Decatur's square is packed with restaurants, cafés, retail, and mixed-use buildings, and the pros in our directory handle commercial accounts there with discreet, recurring, after-hours-friendly service that's documented for health inspectors. One call connects you with a licensed exterminator who can build an Integrated Pest Management plan around your kitchen, storage, and the shared walls older commercial blocks are built on." },
    { q: 'How much does pest control cost in Decatur?', a: "There's no flat rate — it depends on the pest, how far the problem has spread, and the size and age of your home, lot, or commercial space. Recurring general pest control is the most budget-friendly route, while specialty work like termite or bed bug treatment runs higher because of the equipment and follow-up involved. Every pro in our directory gives a free, property-specific quote before any work starts, so you'll know your exact price up front." },
    { q: 'Do you serve the areas around Decatur too?', a: "Yes. Beyond the city of Decatur's 30030 and 30033 ZIP codes, the pros in our directory serve the surrounding DeKalb County communities, including Avondale Estates, Druid Hills, Scottdale, and Clarkston. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Can I get same-day or emergency pest control in Decatur?', a: "Often, yes — many of the local pros serving Decatur offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue in a kitchen, or rodents in the house or business. Call and we'll route you to a DeKalb County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Decatur pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Decatur Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Decatur per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // render as NON-clickable <div>s and 404 cleanly until each page is authored —
  // the same staged build pattern the Dunwoody and Brookhaven hubs used. Blurbs
  // are written fresh for Decatur.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/decatur/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, and Decatur's century-old foundations and crawlspaces give eastern subterranean termites easy access. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/decatur/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel and secondhand furniture and spread fast through Decatur's apartments, rentals, and the shared walls of older buildings. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/decatur/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' out of the mulch beds and crawlspaces in the metro humidity — cleared out of Decatur homes and the square's kitchens and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/decatur/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Decatur's shaded, well-watered yards under the mature canopy give them cover to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/decatur/rodent-control/',
      blurb: "As Decatur nights cool, roof rats, Norway rats, and house mice slip through the gaps in century-old homes into attics, walls, and crawlspaces. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/decatur/pest-control/',
      blurb: "Red imported fire ants are a fact of life in DeKalb County yards, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Decatur per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
