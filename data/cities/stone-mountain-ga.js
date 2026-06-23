'use strict';

// ── Stone Mountain, GA — city hub ────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb / metro-Atlanta city pages).
// This is the CITY / community of Stone Mountain in eastern DeKalb County, metro
// Atlanta — the residential area beside Stone Mountain Park, NOT the park itself
// as a tourist destination. The page keeps its focus on homes and businesses in
// the area, with the wooded, granite-outcrop park boundary as honest context.
// Targets local intent ("pest control Stone Mountain", "Stone Mountain
// exterminator", "Stone Mountain GA pest control"). Rendered by views/city.ejs
// (hub) at /georgia/stone-mountain/.
//
// DISTINCT FROM ITS DeKalb SIBLINGS (sentence-level, zero reuse):
//   • Dunwoody owns the Perimeter Center commercial + incorporated-2008 angle.
//   • Brookhaven owns the intown-adjacent / north-of-Buckhead / Peachtree-corridor
//     older-homes-plus-newer-infill angle.
//   • Decatur owns the historic-1823 / walkable-downtown-square / craftsman-
//     bungalow angle.
//   • Tucker owns the mid-century post-war suburban + traditional Main Street
//     corridor angle (also wooded — so Stone Mountain must NOT lead on generic
//     "wooded suburbs").
//   • Stone Mountain leads on its OWN verified distinctive: an established eastern
//     DeKalb community that borders Stone Mountain Park — hundreds of acres of
//     undeveloped, protected woodland, lake, and an exposed granite outcrop right
//     at the property line. The local angle is the park-adjacent / wildland-edge
//     character (undeveloped natural land → rodents off the tree line, mosquitoes
//     off shaded standing water, termites in the damp wooded soil), NOT the
//     "mid-century suburb" or "older homes" framings the siblings already use.
//
// `county` drives the LeadPortal contractor lookup — Stone Mountain is in DeKalb
// County (the SAME lookup key as Dunwoody, Brookhaven, Decatur, and Tucker), so
// an assigned DeKalb County 'Pest Control' contractor shows on this page (name +
// phone + PestControlService schema, with license + address taken ONLY from the
// real contractor record — never synthesized from the page's city); until one is
// assigned the page falls back to the shared (844) line and a Service schema
// node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here. The lookup tries both "DeKalb County" and "DeKalb"
// (see lib/contractor.js).
//
// HUB ONLY: no per-pest spoke pages are built for Stone Mountain yet, so
// `pestPages` is intentionally empty. The six canonical hub cards below link to
// the future spoke URLs and, because no spoke exists, render as NON-clickable
// <div>s that 404 cleanly until each page is authored (the established staged-
// build pattern — see the city.ejs pestCardsHtml comment). All pest CATEGORIES
// (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet) are covered
// as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no invented streets, subdivisions,
// schools, ordinances, population counts, or stats): the city/community of Stone
// Mountain sits in eastern DeKalb County, metro Atlanta; it borders Stone
// Mountain Park, which surrounds a large exposed granite outcrop (a granite
// dome/monadnock) set in hundreds of acres of protected, undeveloped woodland
// and lake; the area mixes older established neighborhoods with newer wooded
// subdivisions on rocky, tree-covered terrain; ZIPs 30083 and 30087; nearby
// DeKalb communities Clarkston, Pine Lake, Avondale Estates, Tucker; humid
// subtropical climate with long summers and mild winters; eastern subterranean
// termites are the dominant species statewide (NO Formosan local-presence claim
// is made for Stone Mountain/DeKalb); red imported fire ants present statewide;
// metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025); structural pest
// control is regulated and licensed by the Georgia Dept. of Agriculture's
// Structural Pest Control Commission. Trust signals are CONTRACTOR-AGNOSTIC
// (licensed/insured, local GA service, fast response) — no specific company,
// rating, or review is referenced.

module.exports = {
  name: 'Stone Mountain',
  slug: 'stone-mountain',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30083', '30087'],
  // Nearby DeKalb County communities we also serve — NOT Stone Mountain
  // subdivisions. (Service-area names only; all are real DeKalb County neighbors.
  // Tucker has its own built hub, so city.ejs auto-renders it as a real link; the
  // rest render as plain badges.)
  neighborhoods: ['Clarkston', 'Pine Lake', 'Avondale Estates', 'Tucker'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Stone Mountain its own 1200×630 card later, drop /images/stone-mountain-og.jpg
  // in public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Stone Mountain, GA — The Local Pest Pro',
  metaDesc: "Pest control in Stone Mountain, GA & DeKalb County — termite, mosquito, rodent & roach treatment for homes along the wooded park edge. Call for a free quote.",
  h1: 'Pest Control in Stone Mountain, GA',
  heroSub: "On the wooded eastern edge of DeKalb County, Stone Mountain's neighborhoods back up to the granite outcrop and protected woodland of Stone Mountain Park — and that undeveloped natural border keeps mosquitoes, rodents, termites, and roaches pressing toward homes most of the year. Reach a licensed local Stone Mountain exterminator who knows the park-edge terrain, with a free quote before any work begins.",

  overviewHeading: "Local Pest Control for Stone Mountain, GA — Homes Along the Park's Edge",
  overview: [
    "Stone Mountain sits on the wooded eastern side of DeKalb County, and its defining feature is hard to miss: the community wraps around Stone Mountain Park, where a massive exposed granite outcrop rises out of hundreds of acres of protected, undeveloped woodland and lake. For the homeowners next to it, that natural border is a mixed blessing. The same tree-shaded, park-adjacent setting that makes the area beautiful also keeps a permanent reservoir of pests — mosquitoes off the shaded standing water, rodents and nuisance pests off the undeveloped tree line, termites in the damp wooded soil — right at the property line, where they steadily work their way toward the house.",
    "The housing runs from older, long-established neighborhoods to newer wooded subdivisions tucked into the rocky terrain, but the pest equation here is set less by the homes than by what surrounds them. Metro Atlanta's humid subtropical climate — long, muggy summers and mild winters — gives those park-edge pests no real off-season, so a recurring, locally-tuned plan almost always beats a one-time spray on a lot that backs up to woods. Whether your place sits deep in a Stone Mountain subdivision or right against the park boundary, the licensed, insured pros in our directory inspect the property and quote your specific situation for free before any treatment starts.",
  ],

  sections: [
    {
      heading: 'Why Does Bordering Stone Mountain Park Keep Pests Coming Year-Round?',
      paras: [
        "Georgia sits inside one of the heaviest termite-pressure regions in the country, and Stone Mountain is firmly in it. Eastern subterranean termites are the dominant wood-destroying species across the state, foraging underground and pushing mud tubes up into sills, joists, and framing — and on lots ringed by damp, shaded woodland, the moist soil along a foundation hands them exactly the buried moisture they forage in. Because the area's mild winters never drive the colonies dormant, they feed all twelve months, and since termite damage rarely falls under a homeowners policy, steady protection costs a fraction of the repairs.",
        "The park edge does more than feed termites. Hundreds of acres of undeveloped woodland, granite outcrop, and natural water hold a standing population of pests that ordinary developed neighborhoods simply don't — and that population doesn't respect a property line. Mosquitoes drift in from shaded, still water, roof rats and mice travel the tree line hunting shelter, and roaches and nuisance ants move out of the leaf litter toward warm, lit houses. For a home that borders that kind of undeveloped land, a maintained barrier around the structure tends to work far better than reacting to each pest after it turns up indoors.",
      ],
    },
    {
      heading: "Why Do Stone Mountain's Wooded Lots See More Rodents and Mosquitoes?",
      paras: [
        "Two pests punish a wooded, park-adjacent lot harder than anywhere else: rodents and mosquitoes. The undeveloped tree line bordering so many Stone Mountain properties is a natural runway for roof rats, Norway rats, and house mice, which shelter in the woods and then test every nearby structure for a way in — a gap at a roofline, a worn crawlspace vent, an opening around a utility penetration. Once the nights cool, that pressure becomes the scratching homeowners hear overhead, so sealing the entry points along a wooded foundation matters every bit as much as the traps that get set.",
        "Mosquitoes are the other constant. Metro Atlanta ranks among the worst U.S. metros for them — it landed in the top five on Orkin's 2025 list — and the shaded, well-watered ground bordering Stone Mountain Park gives them an unusually deep supply of the still water they breed in and the cool vegetation they rest in, from spring well into fall. Spraying yourself before you step outside barely dents a yard fed by that kind of reservoir; a licensed pro treats the resting cover and the breeding water together, which is what actually pulls the population down. Add the German roaches, 'palmetto bugs,' and red imported fire ants that thrive across DeKalb County, and most Stone Mountain homes come out ahead with a steady professional barrier rather than one-off treatments.",
      ],
    },
    {
      heading: "What Does the Pest Year Look Like Along Stone Mountain's Park Edge?",
      paras: [
        "Pest pressure rises and falls with the seasons in Stone Mountain, and a park-edge lot tends to feel each shift early. Here's the rough rhythm of the year for local homeowners and businesses:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid days — a burst of winged swarmers or a scatter of shed translucent wings near a window is the classic sign a colony is already working a foundation. Ants stir, carpenter bees bore into deck and trim wood, and the first warm rains start mosquitoes breeding in the still, shaded water along the park edge. The best window to get protection up before pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes turn relentless across metro Atlanta and hang thick in Stone Mountain's wooded, shaded yards, fire ant mounds spread through sunny lawn patches, paper wasps and yellowjackets build sizable nests under eaves and decks, and roaches push indoors out of the heat. Fleas and ticks reach their peak on pets and in the leaf litter the tree line drops." },
        { name: 'Fall (Sep–Nov)', text: "As the nights cool, roof rats, Norway rats, and house mice move off the tree line looking for a warm place to overwinter — and a wooded lot's gaps make for easy entry, so this is when scratching starts up in Stone Mountain attics and walls. Yellowjackets grow more aggressive as their colonies break down, and bed bugs ride home with fall travel. The right moment to close up the gaps along a wooded foundation before winter." },
        { name: 'Winter (Dec–Feb)', text: "Stone Mountain's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round in the moist soil along wooded foundations. Recurring service keeps the barrier intact through the cold so the spring warm-up doesn't start with a backlog of pests." },
      ],
    },
    {
      heading: 'Which DeKalb Communities Near Stone Mountain Do You Cover?',
      paras: [
        "The local pros in our directory cover Stone Mountain across its ZIP codes and the neighboring DeKalb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'What Happens After You Call for Stone Mountain Pest Control?',
      cards: [
        { name: '1. Call for a free quote', text: "One call puts you in touch with a licensed, insured exterminator serving Stone Mountain and the broader DeKalb County area — house or business, with no obligation and no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property — including the crawlspace, foundation line, and the wooded edges where the lot meets undeveloped land — pins down the pest and how far it's spread, and recommends the right treatment, one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Stone Mountain',
      paras: [
        "The Local Pest Pro is a directory that connects Stone Mountain homeowners and businesses with licensed, insured local exterminators across DeKalb County — we're not a single company. When you call, you reach the pest control pro assigned to the Stone Mountain area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Stone Mountain, GA?', a: "The headliners are subterranean termites (Georgia is a heavy termite-pressure state, and the damp wooded soil along park-edge lots suits them), roof rats and mice that move in off the tree line, mosquitoes bred in the shaded standing water near Stone Mountain Park, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and red imported fire ants in sunny lawn patches. The pros in our directory handle all of them, for both homes and businesses." },
    { q: 'Does living next to Stone Mountain Park mean more pest problems?', a: "Often, yes. A border of hundreds of acres of undeveloped woodland, granite outcrop, and natural water keeps a standing population of mosquitoes, rodents, and nuisance pests right at the property line, and they work steadily toward nearby homes. It doesn't make an infestation inevitable, but a lot that backs up to the park or the tree line benefits from a maintained barrier and solid exclusion more than an interior lot a few streets away. A local pro factors your lot's exposure into the plan after walking it." },
    { q: 'Why are rodents such a problem on wooded Stone Mountain lots?', a: "The undeveloped tree line bordering many Stone Mountain properties shelters roof rats, Norway rats, and house mice, and as the nights cool they test every nearby structure for a way in — a roofline gap, a worn crawlspace vent, an opening around a utility line. That's why exclusion — sealing the entry points along a wooded foundation — carries as much weight as trapping. A licensed pro inspects the structure, seals the routes, and sets up monitoring so the woods stay outside." },
    { q: 'Do you serve the areas around Stone Mountain too?', a: "Yes. Beyond Stone Mountain's own ZIP codes, the pros in our directory cover the neighboring DeKalb County communities, including Clarkston, Pine Lake, Avondale Estates, and Tucker. Call and we'll connect you with a licensed exterminator working your corner of the county." },
    { q: 'How much does pest control cost in Stone Mountain?', a: "Cost isn't fixed — it depends on the pest, how far the problem has spread, and the size and setting of your home and lot, since a wooded park-edge property can take more exterior work than an interior one. Recurring general pest control is the most budget-friendly route, while specialty jobs like termite or bed bug treatment run higher for the equipment and follow-up they take. Each pro in our directory quotes your specific property for free before they start, so the exact figure is settled up front." },
    { q: 'Are Stone Mountain pest control companies licensed?', a: "They ought to be, and every one we list is. Structural pest control in Georgia is overseen by the state Department of Agriculture, which licenses pest control companies and certifies their applicators through its Structural Pest Control Commission. Every Stone Mountain pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Stone Mountain?', a: "Frequently, yes. Many of the pros covering Stone Mountain keep room for same-day and emergency calls when something can't wait — a wasp nest over a doorway, a roach problem that flared overnight, or rodents that have moved in off the tree line. Call and we'll connect you with a DeKalb County exterminator who can respond fast." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Stone Mountain pros apply EPA-registered products at label rates and offer low-toxicity, family- and pet-safe options, placing most of the material around the exterior, entry points, and cracks and crevices rather than out in the open of living areas. Any spot that needs a brief wait before you or your pets walk on it, your technician will flag — typically only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Stone Mountain Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Stone Mountain per-pest
  // spoke URL; because no spoke pages are built yet (pestPages is empty below),
  // these cards render as NON-clickable <div>s and 404 cleanly until each page is
  // authored — the same staged build pattern the Dunwoody, Brookhaven, Decatur,
  // and Tucker hubs used. Blurbs are written fresh for Stone Mountain. (No Formosan
  // termite claim — eastern subterranean only.)
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/stone-mountain/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, and eastern subterranean termites forage year-round in the damp, wooded soil along Stone Mountain's park-edge lots. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/stone-mountain/bed-bug-treatment/',
      blurb: "Bed bugs ride home from travel, rentals, and secondhand furniture and spread through Stone Mountain's homes and apartments. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/stone-mountain/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' out of the mulch, leaf litter, and crawlspaces in the wooded humidity — cleared out of Stone Mountain homes and kitchens and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/stone-mountain/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and the shaded, well-watered ground bordering Stone Mountain Park gives them endless cover to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/stone-mountain/rodent-control/',
      blurb: "Roof rats, Norway rats, and house mice push in off the wooded park edge and tree line as Stone Mountain nights cool. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/stone-mountain/pest-control/',
      blurb: "Red imported fire ants claim the sunny patches of DeKalb County lawns, alongside spiders, wasps, hornets, and the nuisance ants that wander in from the tree line. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Stone Mountain per-pest spoke pages have been authored yet — keep this empty
  // so the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
