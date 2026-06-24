'use strict';

// ── Buford, GA — city HUB (no per-pest spoke pages yet) ─────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hubs
// (Duluth, Lawrenceville, Snellville, Norcross, Suwanee, Lilburn). Duluth owns
// fast suburban growth + multifamily + commercial corridors; Lawrenceville owns
// the county-seat / historic-square / old-plus-new-build duality; Snellville owns
// the settled, established-residential / mature-subdivisions angle; Norcross owns
// the historic downtown + Buford Highway international-commercial/industrial
// district; Suwanee owns the affluent master-planned / Town-Center angle; Lilburn
// owns the small Old Town + US-29 corridor / diverse-residential angle. Buford
// leads with ITS OWN distinctive: a NORTHEAST-Gwinnett city sitting at the edge of
// LAKE LANIER, anchored by the MALL OF GEORGIA regional retail hub, that blends a
// historic MILL-TOWN downtown core with major newer suburban and commercial
// growth — with lake proximity itself a driver of local mosquito pressure. (Note:
// the road called "Buford Highway" that runs through Norcross is a different thing
// from the CITY of Buford — do not conflate the two.) Targets local intent ("pest
// control buford", "buford exterminator", "buford ga pest control"). Rendered by
// views/city.ejs at /georgia/buford/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/buford/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built spoke
// URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup. Buford STRADDLES two counties
// — most of the city sits in GWINNETT County, with a smaller portion crossing into
// HALL County — and this page keys on GWINNETT as the primary county. So an
// assigned Gwinnett County 'Pest Control' contractor renders here (name + phone +
// LocalBusiness/PestControlService schema, dynamically pulled server-side by
// views/city.ejs); until one is assigned the page falls back to the shared (844)
// directory line and a plain Service schema node. The contractor lookup tries both
// "Gwinnett County" and "Gwinnett" automatically. Address/license render only from
// the real contractor record — never synthesized. Trust signals here stay
// contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names, no named subdivisions, no specific
// coves/parks, no ordinances, no invented stats): a city in northeastern Gwinnett
// County that straddles into Hall County, primarily Gwinnett; around 17,000
// residents; sits at the southern edge of Lake Lanier; anchored by the Mall of
// Georgia regional retail hub; blends a historic mill-and-tannery downtown core
// with substantial newer suburban housing and major commercial/retail development;
// ZIPs 30518/30519; area codes 770/678/470; humid subtropical climate; EASTERN
// SUBTERRANEAN termites are the dominant wood-destroyer here (the more destructive
// Formosan termite stays rare in Georgia away from the coast — stated as a
// statewide aside only, NOT a local presence claim); red imported fire ants present
// in all 159 GA counties; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); structural pest control is regulated/licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. Nearby communities served:
// Sugar Hill, Suwanee, Lawrenceville, Flowery Branch, Braselton.

module.exports = {
  name: 'Buford',
  slug: 'buford',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30518', '30519'],
  // Nearby communities we also serve — NOT Buford subdivisions. Service-area names
  // only. Sugar Hill, Suwanee, and Lawrenceville are Gwinnett; Flowery Branch and
  // Braselton sit just north and east near the lake (Hall/multi-county), reflecting
  // Buford's lake-edge, county-line position. Suwanee and Lawrenceville have built
  // city hubs and auto-link; the rest render as plain (non-clickable) badges.
  neighborhoods: ['Sugar Hill', 'Suwanee', 'Lawrenceville', 'Flowery Branch', 'Braselton'],

  // Shared branded 1200×630 OG card (no Buford-specific asset exists yet); this
  // explicit value mirrors the sibling hubs. Drop a per-page path here later to
  // give Buford its own card.
  ogImage: '/images/og-default.jpg',

  // ~58 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Buford GA | Your Licensed Local Exterminators',
  // ~152 chars; CTA + exact + long-tail terms, paired with GA + Buford's own angle.
  metaDesc: "Licensed pest control in Buford, GA — termite, mosquito, rodent & bed bug treatment near Lake Lanier and the Mall of Georgia. Call now for a free quote.",
  h1: 'Pest Control in Buford, GA',
  heroSub: "Buford anchors the northeast corner of Gwinnett County at the foot of Lake Lanier, where a historic mill-town downtown shares the map with the Mall of Georgia and wave after wave of newer suburban growth. The lakeside humidity and Georgia's long warm season keep termites, mosquitoes, roaches, and rodents working close to year-round. Get matched with a licensed Buford, GA exterminator who knows the lake-area neighborhoods — fast, with a free quote.",

  overviewHeading: 'Pest Control Built for Buford, GA & Gwinnett County',
  overview: [
    "Buford holds a corner of metro Atlanta all its own. Most of the city sits in northeastern Gwinnett County, with a smaller slice crossing the line into Hall County, and it spreads out from the southern shore of Lake Lanier — a setting that mixes a historic mill-and-tannery downtown, the sprawling Mall of Georgia retail district, and one newer subdivision after another. For pest control, that range hands local pros an unusually wide set of footholds: the lake and its damp, wooded shoreline keep humidity and standing water close at hand, the retail and restaurant district draws rodents and roaches with steady food and shelter, and the city's blend of decades-old homes and fresh construction each opens its own doors to termites and ants.",
    "What stays the same beneath all of it is the climate. Buford gets metro Atlanta's long, humid summers and short, mild winters, so local pests rarely take a real off-season — and that's exactly why a recurring, locally-tuned Buford Georgia pest control plan tends to do more than a single visit ever could. Across 30518 and 30519, and out toward the lake, the licensed, insured pros in our directory size up your specific Buford property and quote it for free before any work begins. (Because the city spans the county line, this page keys to Gwinnett County, the primary one — the same local pros serve the lake-area neighborhoods either way.)",
  ],

  sections: [
    {
      heading: 'What Makes Buford a Year-Round Pest Hotspot?',
      paras: [
        "Georgia ranks among the most termite-pressured states in the country, and Gwinnett County is squarely inside that zone. Eastern subterranean termites are the dominant wood-destroying insect here, traveling through the soil and into any structure where wood meets the ground — and because Buford's winters stay mild, those colonies never go dormant the way they would up north; they keep feeding underground all twelve months. Since homeowners insurance almost never pays out for termite damage, holding a protective barrier in place costs far less than repairing a gnawed-through structure down the road.",
        "Termites are only the opening line. Red imported fire ants occupy every one of Georgia's 159 counties, raising mounds across Buford yards and the green space around the retail district. Orkin's 2025 ranking put metro Atlanta among the five worst U.S. metros for mosquitoes, and a city wrapped around the edge of Lake Lanier has no shortage of the humidity and quiet water they breed in. Add the German roaches that establish wherever there's food and warmth, the smokybrown 'palmetto bugs' that drift in from the wooded shoreline lots, and the rats and mice drawn to a busy commercial corridor, and a steady professional barrier simply beats reacting to one pest at a time.",
      ],
    },
    {
      heading: '<span id="termite"></span>What Termite Threat Do Buford Homes Face?',
      paras: [
        "A steady one, and it reaches both the old and the new. Eastern subterranean termites rise out of the soil inside mud tubes and work their way into sills, joists, and framing through openings most owners would never notice. Buford's older mill-town homes have had decades of settling, moisture, and wood-to-ground contact to widen those routes, while the city's many newer subdivisions sit on freshly graded, disturbed soil under fresh lumber — and that's exactly the kind of ground a foraging colony moves toward. Mild Gwinnett winters keep the termites eating year-round, and the first warning most households get is a spring swarm: a flush of winged termites at a window, or a small scatter of discarded translucent wings on a sill. (Eastern subterranean termites are the species that matters in Buford; the far more destructive Formosan termite stays rare in Georgia away from the coast.)",
        "A Georgia-licensed inspector fits termite treatment in Buford, GA to the specific building — a non-repellent liquid termiticide trenched into the soil to build one continuous treated zone, in-ground bait stations that foraging workers carry back to collapse the colony, or both together for the city's mix of slab and crawlspace construction. Buying or selling? Georgia closings nearly always require the Official Georgia Wood Infestation Inspection Report — the 'termite letter' — and only a Georgia-licensed operator can issue one, usually within 30 days of the closing date. The pros in our directory inspect, treat, and issue that report.",
      ],
    },
    {
      heading: '<span id="mosquito"></span>Does Living Near Lake Lanier Mean More Mosquitoes in Buford?',
      paras: [
        "It certainly doesn't help — a big lake puts a lot of water and humid, wooded shoreline within reach, and mosquitoes ask for little more. Orkin's 2025 list ranked metro Atlanta among the five worst U.S. metros for mosquitoes, and barely a capful of standing water is enough to launch a fresh brood. Around Buford that water lingers in the lake's coves and inlets, in the boats, covers, and containers that come with lake living, and in the ordinary clogged gutters and plant saucers of any neighborhood, while the shaded, tree-lined lots near the shore give the adults cool places to wait out the day right next to where people are trying to enjoy the water.",
        "Professional mosquito control in Buford, GA goes after every stage instead of just calming the bites: a residual barrier treatment on the shrubs, fence lines, and tree edges where adults shelter, refreshed every three to four weeks through the warm season; larviciding for standing water that can't be drained; and source reduction to wipe out the hidden breeding sites feeding the population. The stakes run past comfort — the Georgia Department of Public Health tracks West Nile virus each year, the daytime-biting Asian tiger mosquito is common across the area, and mosquitoes pass heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>What Causes Roach Problems in Buford Homes?',
      paras: [
        "Usually one of two very different roaches, and each is handled its own way. German cockroaches are small, breed indoors at a furious pace, and gather wherever there's food, warmth, and moisture — kitchens, bathrooms, break rooms, and the area's many restaurants — so a single sighting normally means a colony is already established rather than a lone wanderer. The big roaches Georgians call 'palmetto bugs' — smokybrown and American cockroaches — are outdoor insects that live in mulch, leaf litter, and the damp wooded ground common around Buford's lakeside lots, and they simply stray inside, which is how even a spotless home turns up a large roach now and then.",
        "A licensed pro identifies the species before treating anything — gel baiting and insect growth regulators aimed at the indoor German roaches, plus a perimeter barrier and a harborage cleanup for the outdoor 'palmetto bugs,' usually backed by a re-treat guarantee. It's a health matter as much as a nuisance one, because German cockroach droppings and shed skins are a recognized asthma and allergy trigger, especially in children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>Where Do Bed Bugs Come From in Buford, GA?',
      paras: [
        "They travel in — bed bugs are hitchhikers, not a verdict on housekeeping. They ride home on luggage after a trip, on secondhand furniture, and in moving boxes, and a city built around regional shopping, hotels, and lake visitors sees a lot of that movement in and out. Once they're inside they multiply fast, since a single female lays hundreds of eggs over her life. Watch for itchy bites lined up in rows or clusters, rust- or blood-colored smears and dark pepper-like flecks along mattress seams and box-spring edges, pale cast-off skins, and the live bugs themselves — flat, reddish-brown, about the size of an apple seed — near where you sleep.",
        "A bed bug exterminator in Buford, GA clears every life stage with whole-room heat — lifting a room to a lethal temperature that kills adults, nymphs, and eggs in a single day, even those tucked inside walls and furniture — or with a targeted residual program and follow-up inspections, often paired with steam and mattress encasements. Store-bought foggers tend to scatter bed bugs into adjoining rooms and drag the job out, so calling a pro at the first sign keeps it smaller and quicker to put behind you.",
      ],
    },
    {
      heading: '<span id="rodent"></span>What Lets Rats and Mice Into Buford Homes?',
      paras: [
        "Food nearby, a warm space inside, and a gap to slip through — and a lake-edge city with a big retail district offers all three. Roof rats are nimble climbers that come in high along the roofline and nest in attics and soffits; Norway rats are heavier ground-dwellers that burrow in low near the foundation; and house mice need only a dime-sized opening and breed quickly once they're in. Buford's wooded shoreline lots put roof rats right at the eaves by way of overhanging limbs, while the restaurants and stores around the commercial corridor keep rodents fed and sheltered. Calls climb in fall as the first cool nights drive them indoors, and Gwinnett's mild winters keep them active once they've settled. Listen for scratching overhead after dark, and look for droppings, gnaw marks, and greasy rub trails.",
        "Real rodent control in Buford, GA goes well past scattering bait — it's trapping to bring the population down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't get back in, finished with monitoring and cleanup. That seal-out is what turns a brief lull into a lasting fix, and it matters because rodents gnaw wiring — a known fire risk — and contaminate food and surfaces wherever they travel.",
      ],
    },
    {
      heading: "<span id=\"general\"></span>Fire Ants, Wasps & What Else Bugs Buford Yards",
      paras: [
        "Any patch of lawn in Buford is fair game for fire ants — red imported fire ants are established across all 159 Georgia counties, throwing up dome-shaped mounds in yards and common areas and delivering stings that are genuinely dangerous to anyone allergic, along with pets and small children. A hardware-store mound killer rarely ends the matter; the approach that holds pairs a broadcast bait that workers carry underground to the queen with direct mound treatment and a perimeter barrier, all kept current on a recurring plan.",
        "A general pest control plan handles everything else a Buford household runs into through the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build all summer and turn aggressive by fall, so pros take down reachable nests and treat eaves, soffits, and entry points to keep them from rebuilding. The same recurring quarterly visit also covers nuisance ants, spiders — including black and brown widows in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that push indoors as the weather shifts: one plan, timed to each pest's season, instead of a string of one-off calls.",
      ],
    },
    {
      heading: "How Buford's Pest Year Unfolds",
      paras: [
        "Pest pressure moves with the seasons in Buford. Here's the general rhythm local homeowners can plan around:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites take to the air on the first warm, humid afternoons — a burst of winged swarmers, or shed translucent wings collecting at a window, is the classic early warning of a colony below. Ants get moving, carpenter bees bore into deck and trim wood, and the season's first rains kick off mosquito breeding along the shoreline. The ideal stretch to lock in protection before the season ramps up." },
        { name: 'Summer (Jun–Aug)', text: "The thick of it. Mosquito pressure peaks across the lake-area neighborhoods, fire ant mounds multiply in Buford yards, wasp and yellowjacket nests swell under eaves, and roaches and 'palmetto bugs' slip indoors away from the heat. Fleas and ticks hit their most active stretch." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice go looking for somewhere warm to ride out winter — that's when you'll hear scratching overhead in Buford attics and walls. Yellowjackets turn short-tempered as their colonies wind down. A good moment to close up entry points before the cold settles in." },
        { name: 'Winter (Dec–Feb)', text: "Buford's mild winters keep pests on the move. German roaches and mice stay active indoors, and subterranean termites feed underground without a pause. Recurring service keeps the protective barrier intact through the cool months, so the season doesn't reopen with a spring surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Buford',
      paras: [
        "The pros in our directory cover Buford across both ZIP codes plus the nearby Gwinnett and lake-area communities. Live in one of these areas? We can line you up with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Buford',
      cards: [
        { name: '1. Call for a free quote', text: "One call puts you in touch with a licensed, insured exterminator who covers Buford and the surrounding Gwinnett County area — homes, lake-area properties, and businesses alike, with no pressure and no obligation." },
        { name: '2. Get a local inspection', text: "Your pro inspects the property, confirms which pest you're dealing with and how far it's gone, and lays out the right plan for your Buford home or building — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat the problem, seal out the entry points, and set up prevention with EPA-registered products applied at label rates and family- and pet-safe options — most backed by a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Buford homeowners and businesses with licensed, insured local exterminators serving Gwinnett County. Call and you'll reach the pest control pro assigned to the Buford area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Buford, GA?', a: "There's no one-size price — it depends on the pest, how far the problem has spread, and the size of the property. A recurring general pest plan is the most economical route, while specialty jobs like termite or bed bug work cost more for the equipment and follow-up they take. Every pro in our directory gives you a free, property-specific quote before any work starts, so you'll know your exact price up front." },
    { q: 'Do homes near Lake Lanier get more pests in Buford?', a: "Lake-area homes do face some extra pressure, mostly from mosquitoes — the lake's coves, humid shoreline, and the still water that collects in boats, covers, and containers all give them places to breed, and the shaded, wooded lots near the water give the adults somewhere to rest. Those same wooded lots can also put roof rats at the eaves by way of overhanging limbs. The licensed pros in our directory tailor the plan to a lakeside property, treating the shoreline-facing harborage and sealing the entry points a wooded lot tends to create." },
    { q: 'What pests are most common in Buford and Gwinnett County?', a: "The big ones are eastern subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in shoreline and standing water, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that head indoors as nights cool. The pros in our directory handle all of them." },
    { q: 'Do you serve the areas around Buford too?', a: "Yes. Beyond Buford's 30518 and 30519 ZIP codes, the pros in our directory cover the nearby Gwinnett and lake-area communities, including Sugar Hill, Suwanee, Lawrenceville, Flowery Branch, and Braselton. Because Buford spans the county line, this page keys to Gwinnett County, but the same local pros reach the lake-area neighborhoods either way — reach out and we'll match you with a licensed exterminator for your spot." },
    { q: 'Are Buford, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Buford?', a: "Often, yes — many of the local pros serving Buford offer same-day and emergency visits for urgent trouble like a wasp nest, a sudden roach problem, or rodents in the building. Call and we'll connect you with a Gwinnett County pro who can respond fast." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Buford pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your tech will flag any brief re-entry window — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Buford, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Eastern subterranean termites feed straight through Gwinnett's mild winters, and Buford's older mill-town homes and freshly graded new-build lots are both targets. Liquid soil termiticide barriers, in-ground bait stations, and the Georgia termite letter when you close." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Bed bugs ride in on luggage and used furniture, a steady risk in a regional shopping, hotel, and lake destination. Whole-room heat clears every life stage in a day, or a targeted residual program with follow-up checks does the job." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches settle in wherever there's food and warmth — homes, apartments, and Buford's many restaurants — while 'palmetto bugs' wander up from mulch and damp shoreline lots. Treatment built around the species, backed by a re-treat guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Orkin ranks metro Atlanta among the top five U.S. mosquito metros, and Lake Lanier's coves and humid shoreline keep them breeding around Buford. Residual barrier treatments and larviciding across the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "Roof rats bridge in along the limbs of wooded shoreline lots while mice chase the food and warmth around Buford's commercial corridor come fall. Trapping to bring the numbers down, exclusion that seals every gap, plus follow-up monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Fire ants take over Buford lawns, with wasps, spiders, and nuisance ants close behind. One recurring quarterly plan keeps the whole lineup in check, year-round." },
  ],

  // No `pestPages` — Buford is a hub-only build for now (see header note). Add
  // per-pest spoke pages later by introducing a `pestPages` object keyed by service
  // slug; the routing, sitemap, and city-service view already support it.
};
