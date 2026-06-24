'use strict';

// ── Mableton, GA — city hub ──────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the five sibling Cobb County city hubs
// (Marietta, Smyrna, Kennesaw, Acworth, Powder Springs). Each sibling owns a
// different Cobb angle: Marietta = older, established city under a mature tree
// canopy; Smyrna = dense, redeveloped inner-ring suburb of attached
// townhomes/condos; Kennesaw = KSU student-rental college town on the Kennesaw
// Mountain wooded edge; Acworth = recreational LAKE town on Lake Acworth / Lake
// Allatoona; Powder Springs = quiet, single-family residential SW-Cobb suburb.
// Mableton leads on its OWN verified distinctive — a close-in, largely
// residential SOUTH Cobb community on the metro's inner southwest edge where the
// county runs down to the CHATTAHOOCHEE RIVER, threaded by the wooded SILVER
// COMET TRAIL greenway, mixing long-established older neighborhoods with newer
// growth (and, since 2022, one of Cobb's newest cities). The through-line is the
// river-corridor + linear-greenway setting (damp river-bottom low ground for
// mosquitoes/termites, a continuous wooded corridor that moves rodents and biting
// insects toward homes) — NOT Acworth's recreational reservoir/dock culture and
// NOT Powder Springs' generic "wood line behind the yard." Written fresh so all
// six Cobb pages read as clearly different pages. Targets local intent ("pest
// control Mableton", "Mableton exterminator", "Mableton GA pest control").
// Rendered by views/city.ejs (hub) at /georgia/mableton/.
//
// `county` drives the LeadPortal contractor lookup — Mableton is in COBB County,
// so an assigned Cobb 'Pest Control' contractor is server-rendered on the page
// (name + phone + PestControlService schema + license badge, with address taken
// ONLY from the real contractor record — never synthesized from the page city).
// Until/unless one is assigned, the page falls back to the shared (844) directory
// line and a plain Service schema node. Both paths are fully dynamic and
// contractor-AGNOSTIC — no name, phone, rating, or review is ever hardcoded, so
// the page survives a county reassignment with zero edits.
//
// This is a HUB ONLY — pest categories are covered as on-page sections (the
// detail block + season + signs blocks). No per-pest spoke pages are built yet,
// so pestPages is intentionally empty and the hub's pest cards link to the
// on-page detail section (#pests-detail) rather than to unbuilt routes (the
// template renders them as non-clickable <div>s while pestPages is empty).
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): a city in
// south Cobb County, in metro Atlanta, on the county's close-in southwest edge
// where it meets the Chattahoochee River (the river forms the county line with
// Fulton/Douglas) and sits adjacent to the I-285 Perimeter; the Silver Comet
// Trail greenway runs through the community; one of south Cobb's older,
// established communities, with a mix of decades-old neighborhoods and newer
// growth, incorporated as a city in 2022; predominantly residential; ZIP 30126
// (never mapped to specific streets); nearby communities Austell, Smyrna,
// Vinings, Powder Springs, Marietta, Lithia Springs (service-area names only).
// REGIONAL truths: humid subtropical climate with a long warm season; eastern
// subterranean termite is THE dominant Georgia termite (state that and stop — do
// NOT claim Formosan is present/established locally; it is rare statewide); red
// imported fire ants established statewide; metro Atlanta is a top-five U.S.
// mosquito metro (Orkin 2025); the Georgia Dept. of Agriculture's Structural Pest
// Control Commission regulates/licenses. Do NOT name parks, schools,
// subdivisions, streets, landmarks (beyond the river and the Silver Comet Trail
// references above), ordinances, population figures, or any unverified
// hyper-local detail.

module.exports = {
  name: 'Mableton',
  slug: 'mableton',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30126'],
  // Nearby communities we also serve — NOT Mableton subdivisions. Service-area
  // names only; the template links only the ones that already have a built city
  // hub (Smyrna, Powder Springs, Marietta), the rest render as plain badges.
  neighborhoods: ['Austell', 'Smyrna', 'Vinings', 'Powder Springs', 'Marietta', 'Lithia Springs'],

  // OG card — shared branded 1200×630 default; set a Mableton-specific path here
  // to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Mableton" + GA in the title; the contiguous
  // long-tail phrases live in the meta description, headings, and body below.
  metaTitle: 'Pest Control Mableton, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Mableton, GA near the Chattahoochee River — termite treatment, mosquito control, rodent control & bed bug exterminator. Free quote, call today.",
  h1: 'Pest Control in Mableton, GA',
  heroSub: "Mableton sits on South Cobb's close-in edge, where the county runs down to the Chattahoochee River and the wooded Silver Comet Trail greenway threads through long-settled neighborhoods. That river-corridor setting — damp bottomland, a shaded linear greenway, and a mix of older homes and newer builds — keeps mosquitoes, termites, rodents, and roaches working across Georgia's long warm season. Reach a licensed Mableton exterminator who knows the area, fast.",

  overviewHeading: 'Mableton Pest Control GA: Built for a Close-In South Cobb River Community',
  overview: [
    "Mableton reads differently from the rest of Cobb County. It sits on the county's close-in southern edge, where neighborhoods run down toward the Chattahoochee River and the Silver Comet Trail greenway cuts a long, wooded corridor straight through town. One of South Cobb's older established communities — and, since 2022, one of its newest cities — Mableton pairs decades-old homes with steady new construction, all of it a short hop from the I-285 Perimeter and the river bottom. For pests, that combination of a river corridor, a continuous greenway, and a wide span of housing ages hands them both the moisture and the cover a typical inland subdivision simply doesn't offer.",
    "The river is the through-line. Low-lying ground near the Chattahoochee holds the damp soil and standing water that subterranean termites and mosquitoes both exploit, and the shaded greenway running through the community works as a ready-made travel lane for rodents and biting insects moving between the woods and the nearest yards. Layer on Georgia's humid subtropical climate — a long, sticky warm season and a mild winter that barely slows anything down — and most Mableton pests never get a true off-season, so a recurring, locally-tuned plan beats one-off treatments. Wherever your home sits relative to the river and the trail, the licensed, insured pros in our directory inspect your exact property and quote it free before any work begins — honest, local pest control Mableton homeowners can rely on.",
  ],

  sections: [
    {
      heading: "Why South Cobb's River Corridor Keeps Mableton Under Steady Pest Pressure",
      paras: [
        "Metro Atlanta sits inside one of the heaviest termite-pressure regions in the country, and South Cobb is no exception. The eastern subterranean termite — the dominant species across Georgia — forages up through the soil into sill plates, joists, and framing, and the moist, low-lying ground common along the Chattahoochee corridor is exactly the kind of damp soil its colonies favor. Because winters here stay mild, those colonies never go dormant; they keep feeding underground twelve months a year, so the slow, hidden damage to a Mableton home rarely pauses. Termite damage usually isn't covered by homeowners insurance, which makes a steady barrier the cost-effective call.",
        "The setting feeds the rest of the lineup, too. Red imported fire ants are established statewide and mound up across Mableton's sunny lawns and common areas. Metro Atlanta ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and the river-bottom low spots and the shaded, damp ground along the Silver Comet greenway give larvae far more standing water than a drier inland lot. That same wooded greenway doubles as a corridor for roof rats, Norway rats, and house mice, carrying them between undeveloped ground and the houses backing onto it, while German roaches and outdoor 'palmetto bugs' thrive in the corridor's humidity. Against all of it, a steady professional program from a licensed Mableton exterminator holds far better than chasing one flare-up at a time.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Behind Most Mableton Pest Control Calls',
      paras: [
        "A close-in South Cobb community on the river corridor sees its own signature lineup of pests. These are the ones the licensed pros in our directory get called for most around Mableton:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant species, and the damp, low-lying soil near the Chattahoochee gives their colonies an easy path up into a home's framing. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for a sale or refinance — termite treatment Mableton GA homeowners can count on, renewable year to year." },
        { name: 'Mosquitoes', text: "Metro Atlanta sits among the top five U.S. mosquito metros, and Mableton's river-bottom low spots and shaded greenway hold the standing water larvae need. Yard barrier treatments and larviciding of the standing water around the property — mosquito control Mableton GA families use to take the backyard back from spring through fall." },
        { name: 'Rodents', text: "The wooded Silver Comet corridor and the river's tree line give mice and rats a covered route right up to the houses along them, and they push in through gaps, garage doors, and crawlspace vents as nights cool. Rodent control Mableton GA homeowners trust pairs trapping with exclusion — sealing the entry points so they can't slip back in." },
        { name: 'Cockroaches', text: "The corridor's humidity feeds both kinds of roach trouble: German roaches that breed indoors in kitchens and baths, and the big outdoor 'palmetto bugs' (smokybrown and American roaches) that shelter in mulch, leaf litter, and crawlspaces and wander inside. Interior gel baiting, crack-and-crevice treatment, and an exterior perimeter shut down both." },
        { name: 'Fire Ants', text: "Red imported fire ants are established across Georgia, and their dome-shaped mounds erupt in Mableton's open, sunny lawns and shared green space. A broadcast bait the colony carries underground to the queen, plus direct treatment of the mounds and a yard perimeter, makes the lawn safe for kids and pets again." },
        { name: 'Bed Bugs', text: "Bed bugs ride home from travel, hotels, and secondhand furniture and take hold in any house, apartment, or rental, however tidy. A licensed bed bug exterminator Mableton residents can call uses whole-room heat or a targeted residual program to reach every life stage, then returns to confirm the home is clear." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets set up through the summer under eaves, soffits, and deck rails, growing bolder as fall crowds the colony. Technicians take down the nests they can reach and treat the sheltered voids these insects keep rebuilding in." },
      ],
    },
    {
      heading: 'Termite Warning Signs Mableton Homeowners Should Know',
      paras: [
        "Termites feed from the inside out, so in a community with plenty of older homes and damp river-corridor soil, the damage is often well along before anyone notices. The signs below are worth knowing so you can act early:",
      ],
      bullets: [
        "Pencil-width mud tubes snaking up foundation walls, pier posts, slab edges, and crawlspace supports",
        "Clouds of winged swarmers indoors on a warm, humid spring afternoon, or drifts of shed, translucent wings collecting on windowsills",
        "Baseboards, door frames, or subflooring that sounds hollow or papery under a tap",
        "Doors and windows that start to stick or bind as termite-damaged wood swells and shifts",
        "Rippling or blistered paint, or thin lines of dried mud threading across drywall and trim",
      ],
    },
    {
      heading: "How Mableton's Pest Year Unfolds Season by Season",
      paras: [
        "Pest pressure rises and falls across the Mableton calendar, and the river corridor stretches out the warm-weather peak. Here's the rough cadence a Mableton household can plan around:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid afternoons set off termite swarms — a cloud of winged swarmers, or shed wings on a sill, is the classic flag of an active colony. Ants wake and trail indoors, carpenter bees drill into deck and trim wood, and the first warm rains begin filling river-bottom low spots and yard saucers with mosquito habitat. The cheapest time to get protection in place before the summer peak." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes surge off the river bottom and the shaded greenway, fire ant mounds spread through open lawns, wasps and yellowjackets nest under eaves and decks, and roaches push indoors out of the heat and humidity. Fleas and ticks ride pets and the damp brush along the trail." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, mice and rats move off the greenway and river tree line hunting for a warm place to overwinter, slipping in through gaps and garage doors — this is when scratching starts overhead in attics and walls. Yellowjacket colonies hit full size and grow short-tempered. The right window to close off entry points before winter arrives." },
        { name: 'Winter (Dec–Feb)', text: "Mableton's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding below the frost line whatever the month. A recurring plan holds the protective barrier through the cold so the warm season doesn't open with a backlog." },
      ],
    },
    {
      heading: 'Other South Cobb Areas We Serve',
      paras: [
        "The local pros in our directory cover Mableton across its ZIP code and the surrounding South Cobb and nearby communities. If your home sits in one of the areas listed here, we can connect you with a licensed local exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Mableton',
      cards: [
        { name: '1. Call for a free quote', text: "A single call connects you with a licensed, insured exterminator who covers Mableton and the rest of Cobb County — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the home and yard — including the damp, river-facing side and the entry points pests use — identifies the problem and how far it has spread, and lays out the right plan for your Mableton property, one-time or recurring." },
        { name: '3. Problem solved', text: "Your technician clears the active infestation, seals the routes pests travel, and puts prevention in place with EPA-registered products at label rates — family- and pet-safe options included, and most work backed by a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Mableton',
      paras: [
        "The Local Pest Pro is a directory that connects Mableton homeowners with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Mableton area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we route you to is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and works with EPA-registered products at label rates, including low-toxicity options for households with kids and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What are the most common pests in Mableton, GA?', a: "The frequent calls are subterranean termites in the damp river-corridor soil (the eastern subterranean is Georgia's dominant species), mosquitoes bred in river-bottom low spots and along the shaded Silver Comet greenway, red imported fire ants in open lawns, German roaches and outdoor 'palmetto bugs' that like the corridor humidity, and mice and rats that travel the greenway and tree line toward nearby homes as nights cool. Every one of them is something the pros in our directory treat." },
    { q: 'Does living near the Chattahoochee or the Silver Comet Trail mean more pests?', a: "It can add pressure. Homes near the river bottom or backing onto the greenway sit close to damp, low-lying ground and a continuous strip of woods — and that pairing feeds extra mosquitoes, moisture-loving roaches, and a steady trickle of rodents moving along the corridor toward the nearest yards. A perimeter barrier plus exclusion, sealing the gaps pests use to get inside, is the practical way to keep that wooded, watery edge from becoming an open door." },
    { q: 'Why does Mableton see so many mosquitoes?', a: "Mosquitoes breed in standing water, and Mableton's setting offers plenty of it — river-bottom low spots, the damp ground along the Silver Comet greenway, and the saucers, gutters, and shaded corners around a home. Beyond that, metro Atlanta is a perennial top-five U.S. metro for mosquitoes. Bringing the population down means treating the shady resting areas and larviciding the standing water on your property, not just spraying once." },
    { q: 'Are Mableton pest control companies licensed?', a: "They ought to be, and the ones we list are. Structural pest control in Georgia is regulated at the state level by the Department of Agriculture, whose Structural Pest Control Commission issues company licenses and certifies the technicians who carry out treatments. Every Mableton exterminator in our directory is licensed and insured in Georgia." },
    { q: 'Can I get same-day or emergency pest control in Mableton?', a: "Frequently, yes. A lot of the pros covering Mableton hold slots open for same-day and emergency visits when a problem can't sit — a wasp nest over the door, a roach issue that blew up overnight, or rodents in the house. Call and we'll line up a Cobb County exterminator who can respond fast." },
    { q: 'Which areas around Mableton do you serve?', a: "Beyond Mableton's own ZIP code, our directory's pros also serve the neighboring South Cobb communities — Austell, Smyrna, Vinings, Powder Springs, Marietta, and Lithia Springs among them. Give us a call and we'll match you with a licensed exterminator covering your stretch of the area." },
    { q: 'Are pest treatments safe around kids and pets?', a: "Yes. The pros serving Mableton apply EPA-registered products at label rates and can use low-toxicity, family- and pet-friendly formulations, concentrating the material along the foundation, entry points, and cracks and crevices instead of out across living space. If any treated spot needs a short wait before you or your pets are back on it, your technician will say so — generally only until it dries." },
  ],

  finalCtaHeading: 'Get Your Free Mableton Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Mableton yet, so these cards
  // are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/mableton/<pest>/ route, and
  // the template renders them as non-clickable <div>s while pestPages is empty.
  // Blurbs are written fresh for Mableton (no reuse from the sibling Cobb hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "Eastern subterranean termites — Georgia's dominant species — favor the damp, low-lying soil along Mableton's river corridor as they work up into a home's framing. Liquid soil barriers, in-ground bait stations, and the Georgia termite letter when you sell or refinance." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Travel, hotels, and secondhand furniture carry bed bugs into Mableton homes and rentals, where they spread fast. Whole-room heat or a focused residual program clears every life stage, and a return visit confirms the home is bug-free." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "German roaches indoors and big 'palmetto bugs' out in the mulch, leaf litter, and crawlspaces of the humid river corridor — gel baiting indoors, crack-and-crevice treatment, and an exterior perimeter that keeps them from coming back." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Mableton's river-bottom low spots and shaded greenway hand larvae standing water. Perimeter barrier sprays plus larviciding of the standing water they breed in, held steady across the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "Mice and rats travel the Silver Comet greenway and the river tree line right up to the houses along them as nights cool. Trapping, exclusion work that seals the gaps they slip through, and steady monitoring so they stay out." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in the yard, wasps under the eaves, plus the ants and spiders that wander indoors — a single recurring quarterly plan keeps the everyday Mableton pests in check all year." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};
