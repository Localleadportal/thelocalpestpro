'use strict';

// ── Atlanta, GA — FLAGSHIP city hub ──────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or any sibling city hub). This is the CITY OF
// ATLANTA itself — the dense urban core the rest of the metro orbits — and it is
// the flagship hub: the most COMPREHENSIVE page on the site. It uses the SAME
// component vocabulary as the six Fulton sibling hubs (Roswell, Alpharetta, Sandy
// Springs, Johns Creek, Milton, East Point) — heading + paras + cards + bullets +
// areas — but goes deeper: a richer multi-pest detail section, a housing-diversity
// / "city in a forest" section, a termite warning-signs block, and a longer FAQ
// set, for topical authority in the metro's highest-competition market. This is a
// long-term authority anchor, not expected to rank quickly.
//
// DISTINCT FROM ITS SIX FULTON SIBLINGS (sentence-level, zero reuse): the siblings
// are all SUBURBS with single-axis angles — Roswell (Chattahoochee/wooded/older),
// Alpharetta (GA 400 tech corridor / new construction), Sandy Springs (I-285
// multifamily/high-rise density), Johns Creek (master-planned/golf communities),
// Milton (semi-rural/equestrian/acreage), East Point (older South-Fulton intown-
// adjacent). Atlanta is framed as the CORE CITY they all orbit: extreme housing
// diversity (historic bungalow districts, high-rise condos, dense intown rentals,
// new infill, mixed commercial), one of the country's heaviest urban tree
// canopies ("city in a forest"), and aging infrastructure/housing alongside new
// construction — driving year-round pressure across EVERY pest type.
//
// `county` drives the LeadPortal contractor lookup. Atlanta spans TWO counties —
// it sits primarily in FULTON (the county seat) with its eastern edge reaching
// into DeKalb — and this page keys on FULTON, the primary. The page never claims a
// contractor the lookup didn't return: when an assigned Fulton 'Pest Control'
// contractor exists it is server-rendered (name + phone + PestControlService
// schema, with license + address taken ONLY from the real contractor record —
// address never synthesized from the page city); otherwise the page falls back to
// the shared (844) line and a Service schema node. Pulled server-side in server.js
// via getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing hardcoded.
//
// HUB ONLY: no per-pest spoke pages are built for Atlanta yet, so `pestPages` is
// intentionally empty. The six canonical hub cards below point at the future spoke
// URLs and render as NON-clickable <div>s until those pages exist (see the
// city.ejs pestCardsHtml comment) — no soft 404s. All pest CATEGORIES (termite,
// mosquito, rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page
// sections / prose.
//
// APPROVED LOCAL FACTS ONLY (verified; no fabricated streets, no specific named
// neighborhoods presented as service-exclusive, no invented stats or ordinances —
// verified GENERAL Atlanta characteristics only): the City of Atlanta is the
// capital of Georgia and the seat of FULTON County, with its eastern edge
// extending into DeKalb County; the dense urban center of the metro, spanning a
// downtown and Midtown high-rise core, historic early-20th-century bungalow
// districts, dense intown rental and multifamily housing, new infill, and mixed
// commercial; known as a "city in a forest" for one of the most extensive urban
// tree canopies of any major U.S. city; a major national travel and convention hub
// (driving bed bug pressure); a wide range of housing ages with older
// infrastructure alongside new construction; humid subtropical climate with long
// summers and mild winters; eastern subterranean termites are the dominant species
// statewide (NO Formosan local-presence claim is made for Atlanta); red imported
// fire ants present statewide; ATLANTA is the metro that ranks among the top five
// worst U.S. metros for mosquitoes on Orkin's 2025 list (here the stat IS the
// city); structural pest control is regulated and licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. Trust signals are
// CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast response) — no
// specific company, rating, or review is referenced.

module.exports = {
  name: 'Atlanta',
  slug: 'atlanta',
  county: 'Fulton County',
  region: 'GA',
  // Representative central-Atlanta ZIPs (downtown, Midtown, intown, west) — the
  // city has many; these stand in for the urban core. The ZIP line in city.ejs
  // joins them and adds "and all of Fulton County."
  zips: ['30303', '30308', '30309', '30312', '30318'],
  // Nearby metro-Atlanta communities we also serve — NOT Atlanta neighborhoods.
  // (Service-area names only. These span Fulton AND DeKalb — Atlanta borders both —
  // so the section is framed as nearby metro-Atlanta areas, not "Fulton County
  // communities." All five have their own built hubs, so city.ejs auto-renders them
  // as real links.)
  neighborhoods: ['Sandy Springs', 'Brookhaven', 'Decatur', 'East Point', 'Chamblee'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Atlanta its own 1200×630 card later, drop /images/atlanta-og.jpg in public/ and
  // change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Atlanta, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Pest control in Atlanta, GA for intown homes, high-rises & historic districts — termite, mosquito, rodent & bed bug control. Book your free quote today.",
  h1: 'Pest Control in Atlanta, GA',
  heroSub: "Atlanta is the dense urban core the rest of the metro orbits — a city in a forest where downtown and Midtown towers, historic bungalow districts, and packed intown rentals all sit under one of the country's heaviest tree canopies. That blend of aging housing, older infrastructure, new construction, and year-round Southern humidity keeps every kind of pest — termites, roaches, rodents, mosquitoes, bed bugs — working across the city all twelve months. Get matched with a licensed Atlanta exterminator who knows the urban core, fast, with a free, no-obligation quote.",

  overviewHeading: 'Pest Control for Atlanta — From Intown Bungalows to Midtown Towers',
  overview: [
    "Atlanta is the center of gravity for the whole region — the capital of Georgia, the seat of Fulton County, and the dense city that the suburbs spread out around. It also holds a wider range of housing than anywhere else in the metro: within a few miles you'll find century-old bungalow and cottage districts, brick walk-ups and dense intown rentals, brand-new infill, and the high-rise condos and apartment towers of Downtown and Midtown. For pest control, that diversity is the whole challenge, because each kind of building hands pests a different way in — and in a city this size, several of those problems are usually unfolding within a block of each other.",
    "Two things press on all of it. The first is Atlanta's tree canopy — one of the most extensive of any major U.S. city, and the reason it's nicknamed a \"city in a forest\" — which keeps yards cool and damp, drops limbs that double as rodent highways, and holds the moisture mosquitoes and roaches need close to the house. The second is age: much of the city's housing and underlying infrastructure has been in the ground for decades, giving pests established routes that newer suburbs don't offer, even as fresh construction keeps rising. The metro's humid subtropical climate — long, sticky summers and mild winters — ties it together and rarely grants pests a true off-season, so a recurring plan built around the specific building tends to beat one-off spraying. Atlanta sits mainly in Fulton County, with its eastern edge reaching into DeKalb, and the licensed, insured pros in our directory quote your exact address — house, unit, or commercial space — for free before any work begins.",
  ],

  sections: [
    {
      heading: "What Drives Atlanta's Pest Pressure All Year?",
      paras: [
        "Start underground, because in a city of wood-framed homes the costliest pest is the one you can't see. Eastern subterranean termites are Georgia's dominant wood-destroying species, and Atlanta hands them ideal conditions: warm, moist soil shaded by a heavy canopy, decades-old wood across the city's older housing, and winters mild enough that the colonies never go dormant. They reach a building through the soil, run pencil-thin mud tubes up into the foundation and framing, and often go unnoticed until the damage is well along — and since homeowners and HOA policies almost never cover termite repairs, an ongoing barrier costs far less than the alternative.",
        "Aboveground, the pressure comes from every direction at once. Mosquitoes are the signature problem — Atlanta ranks among the five worst U.S. metros for them on Orkin's 2025 list — with the canopy, creeks, storm drains, and the countless containers of a dense city giving them endless places to breed and rest. Red imported fire ants mound up across lawns, parks, and medians; German roaches and big outdoor 'palmetto bugs' thrive in the heat and the city's older kitchens, sewers, and crawlspaces; roof rats, Norway rats, and house mice work a dense, tree-lined environment that keeps re-supplying them; and bed bugs arrive non-stop through one of the nation's busiest travel hubs. For most Atlanta properties, a steady professional barrier beats reacting to one outbreak at a time.",
      ],
    },
    {
      heading: 'The Pests Atlanta Homes and Buildings Deal With Most',
      paras: [
        "Atlanta's size and density mean nearly every common Southern pest turns up here, often year-round. These are the ones the licensed pros in our directory are called for most across the city:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant wood-destroying pest, and Atlanta's warm, moist canopy-shaded soil, aging wood, and mild winters let colonies feed underground without a dormant season. They climb pencil-thin mud tubes from the soil into the foundation, sill plates, and framing, usually unseen until damage is advanced. Pros protect the structure with a liquid soil barrier or in-ground bait system and supply the Georgia termite letter required at many closings." },
        { name: 'Mosquitoes', text: "Few metros fight mosquitoes harder than Atlanta — Orkin's 2025 list ranks it among the five worst in the country. The tree canopy, creeks and storm drains, shaded intown yards, and the clogged gutters and containers of a dense city give them still water to breed in and cool foliage to rest in from spring deep into fall. Durable control pairs barrier treatments on the resting areas with larviciding of the standing water on and around the property." },
        { name: 'Cockroaches', text: "Two roach fights run side by side here. German roaches breed indoors in kitchens and baths and travel between the units of apartments, condos, and older multi-family homes, while the large 'palmetto bugs' (smokybrown and American roaches) live outdoors in mulch, sewers, tree holes, and crawlspaces and push inside in heat or rain. Control combines indoor gel baiting and crack-and-crevice work with an exterior perimeter — and in shared buildings, a coordinated multi-unit approach." },
        { name: 'Rodents', text: "Roof rats, Norway rats, and house mice all work Atlanta, and the dense, tree-lined core suits them: roof rats travel canopy limbs and utility lines to upper floors and attics, Norway rats move through sewers and burrow along foundations, and mice slip through the smallest gaps in old and new buildings alike. As nights cool they press indoors for warmth and food. Lasting control pairs trapping with exclusion that seals the entry points, plus monitoring." },
        { name: 'Bed Bugs', text: "As one of the nation's busiest travel and convention hubs, Atlanta sees a steady stream of bed bugs riding in on luggage, used furniture, and shared transit, and its dense hotels, apartments, condos, and rentals let them spread between units before anyone notices. They hide in mattress seams, furniture joints, and wall voids and shrug off store-bought sprays. A licensed exterminator clears them with whole-room heat or a targeted residual program and verifies the space with follow-up visits." },
        { name: 'Fire Ants', text: "Red imported fire ants are established across Georgia and claim Atlanta's sunny lawns, parks, medians, and commercial landscaping, where a disturbed mound sends stinging workers boiling out — a real concern around children and pets. Because the colony's strength is its protected queen, the lasting fix is a broadcast bait the workers carry underground, backed by direct mound treatment and a maintained yard perimeter." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, bald-faced hornets, and ground-nesting yellowjackets all build around Atlanta homes and buildings through the summer — under eaves and soffits, on porches and balconies, behind signage, and in the ground — and turn more defensive as colonies peak into late summer and fall. Pros remove the reachable nests and treat the sheltered voids and recesses where these insects keep rebuilding." },
      ],
    },
    {
      heading: "From Bungalow Districts to High-Rises: How Atlanta's Housing Shapes Pest Control",
      paras: [
        "Few American cities pack as wide a housing range into one place as Atlanta, and that range is the heart of pest control here. Within a short drive you'll move from early-20th-century bungalow and cottage districts to mid-century homes, brick walk-ups, dense intown rental blocks, brand-new infill, and the high-rise condos and apartment towers of Midtown and Downtown. Each type fails differently: a century-old bungalow over a vented crawlspace invites termites, moisture pests, and rodents through settled gaps and aging wood; a shared-wall or high-rise building lets German roaches and bed bugs travel unit to unit along plumbing chases and corridors; and new construction on graded soil gives subterranean termites fresh ground to colonize.",
        "Two forces tie all of it together. The first is the canopy — Atlanta's defining green cover keeps the ground cool and damp, suits mosquitoes and roaches, and turns overhanging limbs into direct routes onto the roofline for rats. The second is age: much of the city's housing and the sewers and foundations beneath it have been in place for decades, giving pests established travel routes that a brand-new subdivision simply doesn't have. A plan that actually holds in Atlanta is built around the specific building — its age, its construction, the units next to it, and the canopy and grounds around it — rather than a single template applied citywide.",
      ],
    },
    {
      heading: 'How to Spot a Termite Problem in an Atlanta Home',
      paras: [
        "Termites work from the inside out, so across Atlanta's older housing stock a colony is usually well established before anything looks wrong. Catching these early signs is what keeps a small problem from becoming a structural one:",
      ],
      bullets: [
        "Pencil-width mud tubes climbing foundation walls, brick piers, crawlspace supports, or basement framing",
        "Clouds of winged swarmers indoors on a warm, humid spring day, or small piles of shed, translucent wings on sills and near doors",
        "Wood that sounds hollow or papery when tapped — baseboards, door casings, window frames, or subfloor",
        "Doors and windows that begin to stick as damaged or moisture-swollen wood shifts out of square",
        "Bubbled or blistered paint, or faint mud-filled lines tracking across drywall, trim, and ceilings",
      ],
    },
    {
      heading: "Atlanta's Pest Year, Season by Season",
      paras: [
        "Pest pressure moves through the year in Atlanta. Here's the rough rhythm residents and property managers can expect across the city, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Spring wakes everything up. The first warm, humid afternoons bring termite swarms — winged swarmers indoors, or a scatter of shed wings on a sill, usually mean a colony is already at work nearby. Ants trail into kitchens, carpenter bees target wood trim and eaves, and the season's first rains fill gutters, drains, and shaded low spots with mosquito habitat across the canopy. The best stretch to get protection set before the summer peak." },
        { name: 'Summer (Jun–Aug)', text: "Summer is when Atlanta earns its mosquito reputation, with the swarms turning relentless across shaded intown yards and the urban canopy. Fire ant mounds spread through lawns and medians, wasps and yellowjackets fill out nests under eaves and balconies, and roaches crowd indoors and between units to escape the heat and humidity. Fleas and ticks peak on pets and in shaded plantings, and the spring rodent litters come of age." },
        { name: 'Fall (Sep–Nov)', text: "Fall pushes pests indoors. As nights cool, roof rats, Norway rats, and house mice hunt winter shelter and probe older homes and new construction for a way in — the season the attic and wall scratching usually starts. Yellowjacket colonies grow defensive as they peak and break down, and bed bugs ride home with fall and holiday travel through the city's busy airport and hotels. The right time to seal entry points." },
        { name: 'Winter (Dec–Feb)', text: "Winter slows Atlanta's pests but never stops them. The mild urban climate keeps German roaches and mice active indoors and subterranean termites feeding underground through the cold, while warm buildings give everything a refuge. Staying on a recurring plan keeps the barrier intact through the quiet months so the warm season doesn't open with a surge." },
      ],
    },
    {
      heading: 'Metro-Atlanta Areas We Cover Around the City',
      paras: [
        "The pros in our directory work the city of Atlanta and the communities that ring it across the metro. If you're in one of the nearby areas below, we can match you with a licensed local exterminator there as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Atlanta Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "Reach the directory and we'll connect you with a licensed, insured exterminator working Atlanta and the surrounding metro — house, condo, rental, or commercial space — with no obligation and nothing owed for the quote." },
        { name: '2. Get a local inspection', text: "A technician inspects the property — crawlspace, foundation, interior, and the building's specific weak points — identifies the pest and how far it has spread, and lays out the right plan for your Atlanta home or building, one-time or recurring." },
        { name: '3. Problem solved', text: "Your tech treats the active problem, seals the openings pests travel through, and sets up prevention with EPA-registered products at label rates — low-toxicity, pet- and family-safe options included, and most of the work backed by a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Atlanta',
      paras: [
        "The Local Pest Pro isn't a single company — it's a directory that connects Atlanta residents, renters, and property managers with licensed, insured local exterminators across the metro. The city sits mainly in Fulton County, with its eastern edge reaching into DeKalb, and when you call you'll reach the pest control pro assigned to the Atlanta area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific address. Everyone we refer holds a license from the Georgia Department of Agriculture's Structural Pest Control Commission and treats with EPA-registered products at label rates, including low-toxicity options for homes with children and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Atlanta, GA?', a: "Across Atlanta's huge range of homes and buildings, the steady callers are subterranean termites (Georgia carries some of the heaviest termite pressure in the country), mosquitoes — the city ranks among the five worst U.S. metros for them — German roaches and outdoor 'palmetto bugs,' roof rats, Norway rats, and house mice that thrive in a dense, tree-lined city, red imported fire ants in lawns and medians, and bed bugs that arrive with constant travel. The directory's pros treat all of them, in houses, condos, rentals, and commercial spaces." },
    { q: 'Why does Atlanta have such a bad mosquito problem?', a: "It comes down to water, shade, and heat, and Atlanta has all three in quantity. The celebrated tree canopy keeps yards cool and damp, while creeks, storm drains, clogged gutters, and the countless containers of a dense urban area hold the still water mosquitoes breed in — and the long, humid Southern summer stretches their season from spring deep into fall. Orkin's 2025 ranking placed Atlanta among the five worst U.S. metros for mosquitoes. Knocking them back means treating the shaded resting areas and the breeding water together, not fogging the yard once." },
    { q: "How does Atlanta's tree canopy affect pest control?", a: "Atlanta's nickname, the 'city in a forest,' points to one of the most extensive urban tree canopies in the country — and that canopy cuts two ways for pests. The shade and leaf litter keep the ground moist and cool, which suits mosquitoes, roaches, and the subterranean termites foraging near foundations, and overhanging limbs give roof rats a direct route to the roofline and attic. A local pro factors the canopy into the plan, treating the shaded harborage and cutting off the exterior routes pests use, rather than working the house in isolation." },
    { q: 'Do older intown Atlanta homes need a different approach?', a: "Usually, yes. A lot of Atlanta's intown housing — bungalows, cottages, and brick homes from the early and mid-20th century — sits over vented crawlspaces and has settled over the decades, leaving the foundation cracks, worn seals, and wood-to-ground contact that termites, roaches, and rodents move through. On those homes, inspection, crawlspace work, and sealing the entry points carry as much weight as anything sprayed on. A pro checks the foundation and crawlspace, then builds the plan around the home's age and construction instead of a one-size template." },
    { q: 'Do you treat high-rise condos and apartments in Atlanta?', a: "Yes — and in a city with this much vertical, shared-wall living it's a large part of the work. German roaches and bed bugs spread along plumbing chases, corridors, and shared walls, so treating one unit alone often just moves the problem next door. The directory's pros coordinate with residents and property managers on multi-unit and whole-building approaches, from targeted unit treatment to common-area and exterior service. Call and we'll connect you with an exterminator experienced in condo, apartment, and high-rise work." },
    { q: 'Are bed bugs common in Atlanta?', a: "They're a persistent issue here. Atlanta is one of the country's busiest travel and convention hubs, and bed bugs ride in continually on luggage, used furniture, and shared transit, then spread through the city's dense hotels, apartments, condos, and rentals. They're notoriously hard to clear with store-bought sprays because the eggs and hidden bugs survive. A licensed exterminator uses whole-room heat or a targeted residual program to reach every life stage, with follow-up checks to confirm the unit is clear." },
    { q: 'Which areas around Atlanta do you serve?', a: "Along with the city itself, the directory's pros cover the communities that surround Atlanta across the metro — among them Sandy Springs, Brookhaven, Decatur, East Point, and Chamblee. Atlanta sits mostly in Fulton County, with its eastern edge in DeKalb, and we can match you with a licensed exterminator working your part of the city or the suburbs just beyond it. Reach out and we'll point you to the right local pro." },
    { q: 'Are Atlanta pest control companies licensed?', a: "Reputable ones are. In Georgia, structural pest control is regulated by the state Department of Agriculture, whose Structural Pest Control Commission issues company licenses and certifies the applicators cleared to treat a property. Every Atlanta exterminator we connect you with is licensed and insured in Georgia — always worth confirming before anyone treats your home or building." },
    { q: 'Can I get same-day or emergency pest control in Atlanta?', a: "Often, yes. Plenty of the pros covering Atlanta hold open slots for same-day and emergency calls when a problem can't wait — a wasp nest at an entrance, a sudden roach outbreak in a kitchen, or rodents loose in a home or building. Get in touch and we'll line up a local exterminator who can respond quickly." },
    { q: 'Will pest treatments be safe around my children and pets?', a: "Yes. Atlanta pros use EPA-registered products at label rates and offer low-toxicity, family- and pet-friendly options, concentrating most of the treatment around the exterior, entry points, and cracks and crevices rather than across the rooms you use. If a treated spot needs a short wait before anyone walks on it, your technician will tell you — generally only until it dries." },
  ],

  finalCtaHeading: 'Get Your Free Atlanta Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Atlanta per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // render as NON-clickable <div>s until each page is authored — the same staged
  // build pattern every sibling Fulton hub used. Blurbs are written fresh for
  // Atlanta. (No Formosan termite claim — eastern subterranean only.)
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/atlanta/termite-control/',
      blurb: "Eastern subterranean termites are Georgia's dominant wood-destroyers, and Atlanta's warm soil, heavy canopy, older wood, and mild winters keep them feeding year-round under homes old and new. Liquid soil barrier treatments or in-ground bait stations, plus the Georgia termite letter many closings require." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/atlanta/bed-bug-treatment/',
      blurb: "A major travel and convention hub, Atlanta sees bed bugs ride in constantly and spread through dense hotels, apartments, and condos. Whole-room heat or a targeted residual program reaches every life stage, with follow-up checks to confirm the space is clear." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/atlanta/cockroach-control/',
      blurb: "German roaches traveling between units in apartments and older multi-family homes, plus the big 'palmetto bugs' that work in from mulch, sewers, and crawlspaces — driven out and kept from returning, typically under a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/atlanta/mosquito-control/',
      blurb: "Orkin's 2025 list ranks Atlanta among the five worst U.S. metros for mosquitoes, and the canopy, creeks, drains, and intown low spots keep them breeding. Barrier treatments on resting areas plus larviciding of standing water, right through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/atlanta/rodent-control/',
      blurb: "Roof rats travel canopy limbs to the roofline, Norway rats move through sewers and foundations, and mice slip through the smallest gaps as nights cool. Trapping paired with exclusion that seals the openings, plus ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/atlanta/pest-control/',
      blurb: "Red imported fire ants in lawns and medians, plus spiders, wasps, hornets, and the nuisance ants that wander indoors — all handled under a single recurring quarterly plan, across homes and buildings, year-round." },
  ],

  // No Atlanta per-pest spoke pages have been authored yet — keep this empty so the
  // hub renders as a HUB only. Add entries here one at a time (same shape as the
  // Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
