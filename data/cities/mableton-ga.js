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
  metaDesc: "Pest control Mableton, GA near the Chattahoochee River — termite treatment, mosquito control, rodent control & bed bug exterminator. Call for a quote today.",
  h1: 'Pest Control in Mableton, GA',
  heroSub: "Mableton sits on South Cobb's close-in edge, where the county runs down to the Chattahoochee River and the wooded Silver Comet Trail greenway threads through long-settled neighborhoods. That river-corridor setting — damp bottomland, a shaded linear greenway, and a mix of older homes and newer builds — keeps mosquitoes, termites, rodents, and roaches working across Georgia's long warm season. Reach a Mableton exterminator who knows the area, fast.",

  overviewHeading: 'Mableton Pest Control GA: Built for a Close-In South Cobb River Community',
  overview: [
    "Mableton reads differently from the rest of Cobb County. It sits on the county's close-in southern edge, where neighborhoods run down toward the Chattahoochee River and the Silver Comet Trail greenway cuts a long, wooded corridor straight through town. One of South Cobb's older established communities — and, since 2022, one of its newest cities — Mableton pairs decades-old homes with steady new construction, all of it a short hop from the I-285 Perimeter and the river bottom. For pests, that combination of a river corridor, a continuous greenway, and a wide span of housing ages hands them both the moisture and the cover a typical inland subdivision simply doesn't offer.",
    "The river is the through-line. Low-lying ground near the Chattahoochee holds the damp soil and standing water that subterranean termites and mosquitoes both exploit, and the shaded greenway running through the community works as a ready-made travel lane for rodents and biting insects moving between the woods and the nearest yards. Layer on Georgia's humid subtropical climate — a long, sticky warm season and a mild winter that barely slows anything down — and most Mableton pests never get a true off-season, so a recurring, locally-tuned plan beats one-off treatments. Wherever your home sits relative to the river and the trail, the pros in our directory inspect your exact property and quote it — ask about pricing before any work begins — honest, local pest control Mableton homeowners can rely on.",
  ],

  sections: [
    {
      heading: "Why South Cobb's River Corridor Keeps Mableton Under Steady Pest Pressure",
      paras: [
        "Metro Atlanta sits inside one of the heaviest termite-pressure regions in the country, and South Cobb is no exception. The eastern subterranean termite — the dominant species across Georgia — forages up through the soil into sill plates, joists, and framing, and the moist, low-lying ground common along the Chattahoochee corridor is exactly the kind of damp soil its colonies favor. Because winters here stay mild, those colonies never go dormant; they keep feeding underground twelve months a year, so the slow, hidden damage to a Mableton home rarely pauses. Termite damage usually isn't covered by homeowners insurance, which makes a steady barrier the cost-effective call.",
        "The setting feeds the rest of the lineup, too. Red imported fire ants are established statewide and mound up across Mableton's sunny lawns and common areas. Metro Atlanta ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and the river-bottom low spots and the shaded, damp ground along the Silver Comet greenway give larvae far more standing water than a drier inland lot. That same wooded greenway doubles as a corridor for roof rats, Norway rats, and house mice, carrying them between undeveloped ground and the houses backing onto it, while German roaches and outdoor 'palmetto bugs' thrive in the corridor's humidity. Against all of it, a steady professional program from a Mableton exterminator holds far better than chasing one flare-up at a time.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Behind Most Mableton Pest Control Calls',
      paras: [
        "A close-in South Cobb community on the river corridor sees its own signature lineup of pests. These are the ones the pros in our directory get called for most around Mableton:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant species, and the damp, low-lying soil near the Chattahoochee gives their colonies an easy path up into a home's framing. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for a sale or refinance — termite treatment Mableton GA homeowners can count on, renewable year to year." },
        { name: 'Mosquitoes', text: "Metro Atlanta sits among the top five U.S. mosquito metros, and Mableton's river-bottom low spots and shaded greenway hold the standing water larvae need. Yard barrier treatments and larviciding of the standing water around the property — mosquito control Mableton GA families use to take the backyard back from spring through fall." },
        { name: 'Rodents', text: "The wooded Silver Comet corridor and the river's tree line give mice and rats a covered route right up to the houses along them, and they push in through gaps, garage doors, and crawlspace vents as nights cool. Rodent control Mableton GA homeowners trust pairs trapping with exclusion — sealing the entry points so they can't slip back in." },
        { name: 'Cockroaches', text: "The corridor's humidity feeds both kinds of roach trouble: German roaches that breed indoors in kitchens and baths, and the big outdoor 'palmetto bugs' (smokybrown and American roaches) that shelter in mulch, leaf litter, and crawlspaces and wander inside. Interior gel baiting, crack-and-crevice treatment, and an exterior perimeter shut down both." },
        { name: 'Fire Ants', text: "Red imported fire ants are established across Georgia, and their dome-shaped mounds erupt in Mableton's open, sunny lawns and shared green space. A broadcast bait the colony carries underground to the queen, plus direct treatment of the mounds and a yard perimeter, makes the lawn safe for kids and pets again." },
        { name: 'Bed Bugs', text: "Bed bugs ride home from travel, hotels, and secondhand furniture and take hold in any house, apartment, or rental, however tidy. A bed bug exterminator Mableton residents can call uses whole-room heat or a targeted residual program to reach every life stage, then returns to confirm the home is clear." },
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
        "The local pros in our directory cover Mableton across its ZIP code and the surrounding South Cobb and nearby communities. If your home sits in one of the areas listed here, we can connect you with a local exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Mableton',
      cards: [
        { name: '1. Call for a quote', text: "A single call connects you with a exterminator who covers Mableton and the rest of Cobb County — ask about licensing and insurance when you call — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the home and yard — including the damp, river-facing side and the entry points pests use — identifies the problem and how far it has spread, and lays out the right plan for your Mableton property, one-time or recurring." },
        { name: '3. Problem solved', text: "Your technician clears the active infestation, seals the routes pests travel, and puts prevention in place with EPA-registered products at label rates — family- and treatment options — ask about any guarantee when you call." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Mableton',
      paras: [
        "The Local Pest Pro is a directory that connects Mableton homeowners with local exterminators across Cobb County — ask about licensing and insurance when you call — we're not a single company. When you call, you reach the pest control pro assigned to the Mableton area, or our shared directory line at (844) 544-3498, for a property-specific quote — ask about pricing when you call. Every pro we route you to is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and works with EPA-registered products at label rates, including low-toxicity options for households with kids and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What are the most common pests in Mableton, GA?', a: "The frequent calls are subterranean termites in the damp river-corridor soil (the eastern subterranean is Georgia's dominant species), mosquitoes bred in river-bottom low spots and along the shaded Silver Comet greenway, red imported fire ants in open lawns, German roaches and outdoor 'palmetto bugs' that like the corridor humidity, and mice and rats that travel the greenway and tree line toward nearby homes as nights cool. Every one of them is something the pros in our directory treat." },
    { q: 'Does living near the Chattahoochee or the Silver Comet Trail mean more pests?', a: "It can add pressure. Homes near the river bottom or backing onto the greenway sit close to damp, low-lying ground and a continuous strip of woods — and that pairing feeds extra mosquitoes, moisture-loving roaches, and a steady trickle of rodents moving along the corridor toward the nearest yards. A perimeter barrier plus exclusion, sealing the gaps pests use to get inside, is the practical way to keep that wooded, watery edge from becoming an open door." },
    { q: 'Why does Mableton see so many mosquitoes?', a: "Mosquitoes breed in standing water, and Mableton's setting offers plenty of it — river-bottom low spots, the damp ground along the Silver Comet greenway, and the saucers, gutters, and shaded corners around a home. Beyond that, metro Atlanta is a perennial top-five U.S. metro for mosquitoes. Bringing the population down means treating the shady resting areas and larviciding the standing water on your property, not just spraying once." },
    { q: 'Are Mableton pest control companies licensed?', a: "They ought to be, and the ones we list are. Structural pest control in Georgia is regulated at the state level by the Department of Agriculture, whose Structural Pest Control Commission issues company licenses and certifies the technicians who carry out treatments. Ask the assigned Mableton exterminator about licensing and insurance in Georgia when you call." },
    { q: 'Can I get same-day or emergency pest control in Mableton?', a: "Availability varies by contractor. Ask the assigned contractor whether they hold same-day or emergency slots when a problem can't sit — a wasp nest over the door, a roach issue that blew up overnight, or rodents in the house." },
    { q: 'Which areas around Mableton do you serve?', a: "Beyond Mableton's own ZIP code, our directory's pros also serve the neighboring South Cobb communities — Austell, Smyrna, Vinings, Powder Springs, Marietta, and Lithia Springs among them. Give us a call and we'll match you with a exterminator covering your stretch of the area." },
    { q: 'Are pest treatments safe around kids and pets?', a: "Yes. The pros serving Mableton apply EPA-registered products at label rates and can use low-toxicity, family- and pet-friendly formulations, concentrating the material along the foundation, entry points, and cracks and crevices instead of out across living space. If any treated spot needs a short wait before you or your pets are back on it, your technician will say so — generally only until it dries." },
  ],

  finalCtaHeading: 'Get Your Get Mableton Pest Control',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Mableton yet, so these cards
  // are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/mableton/<pest>/ route, and
  // the template renders them as non-clickable <div>s while pestPages is empty.
  // Blurbs are written fresh for Mableton (no reuse from the sibling Cobb hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/mableton/termite-control/',
      blurb: "Eastern subterranean termites — Georgia's dominant species — favor the damp, low-lying soil along Mableton's river corridor as they work up into a home's framing. Liquid soil barriers, in-ground bait stations, and the Georgia termite letter when you sell or refinance." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/mableton/bed-bug-treatment/',
      blurb: "Travel, hotels, and secondhand furniture carry bed bugs into Mableton homes and rentals, where they spread fast. Whole-room heat or a focused residual program clears every life stage, and a return visit confirms the home is bug-free." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/mableton/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' out in the mulch, leaf litter, and crawlspaces of the humid river corridor — gel baiting indoors, crack-and-crevice treatment, and an exterior perimeter that keeps them from coming back." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/mableton/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Mableton's river-bottom low spots and shaded greenway hand larvae standing water. Perimeter barrier sprays plus larviciding of the standing water they breed in, held steady across the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/mableton/rodent-control/',
      blurb: "Mice and rats travel the Silver Comet greenway and the river tree line right up to the houses along them as nights cool. Trapping, exclusion work that seals the gaps they slip through, and steady monitoring so they stay out." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/mableton/pest-control/',
      blurb: "Fire ants in the yard, wasps under the eaves, plus the ants and spiders that wander indoors — a single recurring quarterly plan keeps the everyday Mableton pests in check all year." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  photo: '/images/mableton.webp',
  pestPages: {
    'termite-control': {
      cardBlurb: 'Mableton homes have history, and termites love history: crawlspaces that have stayed damp for decades, porch piers and form boards left in the soil, settlement cracks that open new',
      metaTitle: 'Termite Control in Mableton, GA | The Local Pest Pro',
      metaDesc: 'Termite control in Mableton, GA — older-home inspections, crawlspace moisture, and WIIR letters for Cobb resales.',
      h1: 'Termite Control in Mableton, GA',
      breadcrumbName: 'Termite Control',
      heroSub: 'Mableton homes have history, and termites love history: crawlspaces that have stayed damp for decades, porch piers and form boards left in the soil, settlement cracks that open new routes in, and subfloors nobody has looked at in years. A Mableton termite job usually starts below the house, not at the front door.',
      sections: [
        {
          heading: 'Below the House: Where Mableton Colonies Actually Live',
          paras: [
            'The first stop on a Mableton inspection is the crawlspace. Damp river-bottom soil, poor ventilation, and old plumbing leaks keep the ground under older homes moist enough for eastern subterranean termites to build shelter tubes up piers, joists, and the inside of foundation walls — places a walk around the outside never sees. Settlement cracks in older slabs and brick, form boards buried during construction, and wood scraps left under porches all give a colony a protected runway into the structure.',
            'That is why a Mableton inspection reads differently from a new-build check: the inspector is looking for old damage as well as active insects — blistered paint, sagging subfloor, wood that sounds hollow when tapped, and the faint mud lines inside a crawlspace. Tell the dispatcher the home\'s age, whether it has a crawlspace, and any moisture or drainage trouble you already know about.'
          ],
        },{
          heading: 'Barrier, Bait, or Both — and the Resale Question',
          paras: [
            'Older homes often need a combined approach: a soil treatment around the foundation where it can be applied cleanly, plus bait stations where concrete, porches, or river-bottom grading make a full barrier impractical. Ask the assigned contractor which combination fits your lot, what follow-up inspections are scheduled, and how re-treatment is handled if activity returns. Ask about licensing, pricing, and any guarantee in plain terms before work starts.',
            'If you are selling, raise the WIIR early. A Georgia wood-infestation report can be a lender requirement, and an older home sometimes needs a clearance treatment before the report comes back clean — which takes time a closing schedule may not have. Mention the closing date on the first call.'
          ],
        },
      ],
      faqs: [
      { q: 'Why do older Mableton homes have more termite trouble?', a: 'Time and moisture. Decades of damp crawlspaces, buried form boards, and settlement cracks give colonies protected routes in that a new slab does not have yet.' },
      { q: 'What is a WIIR and when do I need one?', a: 'A Georgia wood-infestation report, often required by a lender on a sale. Ask the assigned contractor about inspection licensing and the WIIR, and mention your closing date when you call.' },
      { q: 'Can a barrier be applied around an older home with porches and concrete?', a: 'Sometimes only partly. Where a full barrier is impractical, bait stations fill the gaps. Ask the contractor which combination fits your lot.' }
      ],
      finalCtaHeading: 'Get Termite Control in Mableton',
    },
    'mosquito-control': {
      cardBlurb: 'In Mableton, mosquitoes are an evening problem shaped by shade and drainage: the greenway corridor keeps yards cool and damp, drainage ditches and low spots hold water after every ',
      metaTitle: 'Mosquito Control in Mableton, GA | The Local Pest Pro',
      metaDesc: 'Mosquito control in Mableton, GA — trail-adjacent shade, drainage ditches, and evening-yard plans for river-bottom homes.',
      h1: 'Mosquito Control in Mableton, GA',
      breadcrumbName: 'Mosquito Control',
      heroSub: 'In Mableton, mosquitoes are an evening problem shaped by shade and drainage: the greenway corridor keeps yards cool and damp, drainage ditches and low spots hold water after every storm, and the oak canopy gives adults a resting place all day. The plan that works here is built around when and where you actually use the yard.',
      sections: [
        {
          heading: 'Shade, Ditches, and the Evening Yard',
          paras: [
            'Adult mosquitoes rest in shade during the day — under oak limbs, in dense shrubs, and along the greenway edge — then move into open yards at dusk, exactly when people want to be outside. That timing changes the treatment: barrier coverage has to reach the shaded resting areas and the trail-facing side, not just the open lawn, and it has to be timed to the season rather than sprayed once and forgotten.',
            'Breeding sites here are less obvious than a birdbath. Drainage ditches, low spots that stay wet for days, corrugated drain extensions, and the damp ground where the greenway meets a backyard all hold enough water for larvae. Walk the yard after rain and note where water sits — that list is the most useful thing you can give a dispatcher.'
          ],
        },{
          heading: 'A Plan Built Around Use, Not Just Spraying',
          paras: [
            'Ask the assigned contractor for a recurring schedule through the warm season, with larvicide for the water that cannot be drained and barrier treatment for the shade where adults rest. Ask how rain affects the schedule, what happens if mosquitoes rebound between visits, and about products, pets, and re-entry. Pricing and availability are worth asking about on the same call.',
            'Between visits, keep ditches clear so water moves instead of pooling, drain extensions pointed away from resting areas, and gutters clean. If the yard backs onto the trail, say so — the trail-facing side usually needs the heaviest coverage.'
          ],
        },
      ],
      faqs: [
      { q: 'Why are evenings worst in a shaded yard?', a: 'Adults rest in shade all day and move into open yards at dusk. A shaded, greenway-adjacent yard holds more resting adults than a sunny lot.' },
      { q: 'Where do Mableton mosquitoes breed?', a: 'Drainage ditches, low spots that stay wet after rain, drain extensions, and damp ground where the greenway meets a backyard — not just obvious containers.' },
      { q: 'What should I tell the dispatcher?', a: 'Where water sits after rain, whether the yard backs onto the trail, and when you use the yard — evening use changes the plan.' }
      ],
      finalCtaHeading: 'Get Mosquito Control in Mableton',
    },
    'rodent-control': {
      cardBlurb: 'In Mableton, a rodent job is usually an attic job first. Older homes have vent screens that have rusted or loosened, gable gaps that have opened as the house settled, and insulatio',
      metaTitle: 'Rodent Control in Mableton, GA | The Local Pest Pro',
      metaDesc: 'Rodent control in Mableton, GA — attic damage, vent screens, and exclusion for older homes near the greenway.',
      h1: 'Rodent Control in Mableton, GA',
      breadcrumbName: 'Rodent Control',
      heroSub: 'In Mableton, a rodent job is usually an attic job first. Older homes have vent screens that have rusted or loosened, gable gaps that have opened as the house settled, and insulation that has been tunnelled for years before anyone notices. The greenway brings the rodents; the aging house lets them stay.',
      sections: [
        {
          heading: 'The Attic Tells the Story',
          paras: [
            'Start with what the attic shows: droppings, tunnelled or compressed insulation, gnawed wiring, and nesting material in corners. Those signs say how long rodents have been there and whether the problem is seasonal visitors or a resident population. Vent screens, gable vents, and the gaps where rooflines meet brick are the usual entries on an older home, and each one needs a different seal — screen, flashing, or foam-and-mesh that rodents cannot chew through.',
            'Damage matters as much as removal. Gnawed wiring is a fire risk, soiled insulation loses its insulating value, and contaminated ductwork spreads odour. Mention any of these when you call, and mention whether you have heard scratching at night or found droppings in the pantry — the dispatcher uses that to decide whether the first visit is trapping, exclusion, or both.'
          ],
        },{
          heading: 'Exclusion First, Then Cleanup',
          paras: [
            'A durable Mableton rodent job sequences the work: trap or bait to clear the current population, seal every entry found on a full exterior and attic inspection, then deal with cleanup — damaged insulation, droppings, and odour — as a separate step. Ask the assigned contractor what the exclusion warranty covers, whether follow-up inspections are included, and what cleanup costs on top of removal.',
            'Between visits, keep the attic and garage uncluttered so new droppings are visible, trim limbs off the roof, and keep food in sealed containers. Ask about products and pets when you call.'
          ],
        },
      ],
      faqs: [
      { q: 'Why is the attic the main problem in older homes?', a: 'Vent screens rust and loosen, gable gaps open as the house settles, and insulation offers nesting material — so rodents move in and stay, often unnoticed for years.' },
      { q: 'Is gnawed wiring dangerous?', a: 'Yes — it is a fire risk. Mention any gnawed wiring to the dispatcher so the visit can be prioritised and an electrician can be advised if needed.' },
      { q: 'What does exclusion cover?', a: 'Sealing every entry found on inspection with rodent-proof materials. Ask the contractor what the exclusion warranty covers and whether follow-ups are included.' }
      ],
      finalCtaHeading: 'Get Rodent Control in Mableton',
    },
    'bed-bug-treatment': {
      cardBlurb: 'Mableton\'s bed bug pattern is an older-housing pattern: deep joints in older furniture, baseboard voids and plaster cracks that give bed bugs harbourage a new build does not have, ',
      metaTitle: 'Bed Bug Treatment in Mableton, GA | The Local Pest Pro',
      metaDesc: 'Bed bug treatment in Mableton, GA — older homes with deep joints, baseboard voids, and shared rental walls.',
      h1: 'Bed Bug Treatment in Mableton, GA',
      breadcrumbName: 'Bed Bug Treatment',
      heroSub: 'Mableton\'s bed bug pattern is an older-housing pattern: deep joints in older furniture, baseboard voids and plaster cracks that give bed bugs harbourage a new build does not have, and shared walls in rental stock where an infestation in one unit reaches the next. Bed bugs travel in luggage and used furniture — not in dirt — so any home can get them.',
      sections: [
        {
          heading: 'How Bed Bugs Hide in Older Homes',
          paras: [
            'The usual routes are travel and moving: a hotel stay, a new rental, or a secondhand piece brought home. Once inside, bed bugs settle into the places older homes offer in abundance — deep furniture joints, baseboard voids, plaster cracks, and the gaps behind older trim — and they feed at night, so the first sign is often bites in a line or cluster, or small rust-coloured spots on bedding.',
            'When you call, mention any recent travel, move, or secondhand furniture, where bites or spots have appeared, and whether the home shares walls with another unit. That tells the dispatcher whether the job is one room or the whole home, and whether neighbouring units need checking too.'
          ],
        },{
          heading: 'Multi-Unit Protocol, Encasements, and Follow-Up Timing',
          paras: [
            'For a rental or duplex, the protocol widens: the unit next door gets inspected, shared-wall voids get treated, and the landlord or property manager is looped in so a cleared unit is not re-infested from next door the following week. Mattress and box-spring encasements go on after treatment, sealing any survivors inside and giving future inspections a clean surface to check.',
            'Follow-up timing is set by the bed bug life cycle, not by convenience: visits are spaced so newly hatched nymphs are caught before they can reproduce. Ask the assigned contractor for the visit schedule in writing, what encasements cost, and whether the neighbouring unit is included in the price. Between visits, keep beds pulled slightly from walls, keep clutter off the floor, and report any new bites immediately — that report is what moves a follow-up earlier.'
          ],
        },
      ],
      faqs: [
      { q: 'Can an older home be harder to clear?', a: 'Sometimes, yes — deep joints, baseboard voids, and plaster cracks give bed bugs more harbourage than a new build. That is why follow-up visits matter, not why treatment fails.' },
      { q: 'Should I throw out the mattress?', a: 'Not before the visit. Throwing furniture out can spread bed bugs to other rooms, and most mattresses can be treated. Ask the contractor first.' },
      { q: 'Do shared walls mean neighbours need treatment too?', a: 'Often they need checking. Bed bugs move through shared walls, so a rental or duplex job may need the neighbouring unit inspected as well.' }
      ],
      finalCtaHeading: 'Get Bed Bug Treatment in Mableton',
    },
    'cockroach-control': {
      cardBlurb: 'Mableton cockroaches often start somewhere you do not control: a neighbouring rental unit behind a shared wall, a drain system that connects homes, or a damp crawlspace under an ol',
      metaTitle: 'Cockroach Control in Mableton, GA | The Local Pest Pro',
      metaDesc: 'Cockroach control in Mableton, GA — shared-wall rentals, drain treatments, and crawlspace moisture in older homes.',
      h1: 'Cockroach Control in Mableton, GA',
      breadcrumbName: 'Cockroach Control',
      heroSub: 'Mableton cockroaches often start somewhere you do not control: a neighbouring rental unit behind a shared wall, a drain system that connects homes, or a damp crawlspace under an older house. That is why a Mableton cockroach job is as much a building problem as a kitchen problem — treating one unit while the source next door goes untouched is how the problem comes back.',
      sections: [
        {
          heading: 'Shared Walls, Drains, and Damp Crawlspaces',
          paras: [
            'German cockroaches move through shared walls, pipe chases, and electrical runs, so a rental or duplex infestation is rarely confined to one unit. American cockroaches — the large palmetto bugs — arrive from drains, sewer connections, and damp crawlspaces, especially after rain pushes them up. The first question on a Mableton call is therefore about the building: shared walls, rental neighbours, drain odour, and crawlspace dampness all change the plan.',
            'When you call, say whether the home shares walls, whether neighbours have the same problem, and whether the large ones appear near drains or after rain. That tells the dispatcher whether the job needs a multi-unit approach, drain treatment, or crawlspace work alongside kitchen baiting.'
          ],
        },{
          heading: 'Coordinated Treatment, Not Just Kitchen Baiting',
          paras: [
            'A coordinated job means baiting and crack-and-crevice treatment in the kitchen, treatment of drains and entry points, and — where a crawlspace is damp — addressing the moisture that draws the outdoor species in. Ask the assigned contractor whether neighbouring units need inspection, how many visits are planned, what preparation they need, and about pricing and products when you call.',
            'Between visits, keep food sealed, take trash out nightly, fix dripping taps, and keep cardboard out of the kitchen. If neighbours share the problem, raising it together gets a coordinated visit scheduled faster than separate calls.'
          ],
        },
      ],
      faqs: [
      { q: 'Why do cockroaches keep coming back in a rental?', a: 'Because they move through shared walls and pipe chases. Treating one unit while the source next door goes untouched is how the problem returns.' },
      { q: 'What about the large ones near drains?', a: 'Those are usually American cockroaches coming up from drains, sewers, or damp crawlspaces. Drain treatment and crawlspace moisture work belong in the plan alongside kitchen baiting.' },
      { q: 'Should neighbours be inspected too?', a: 'Often yes, for shared-wall homes. Ask the contractor whether neighbouring units need inspection when you call.' }
      ],
      finalCtaHeading: 'Get Cockroach Control in Mableton',
    },
    'pest-control': {
      cardBlurb: 'Mableton\'s general-pest pattern is set by its canopy: mature oaks, deep leaf litter, and the greenway corridor that shades yards and drops debris all season. Fire ants use the sunn',
      metaTitle: 'General Pest Control in Mableton, GA | The Local Pest Pro',
      metaDesc: 'General pest control in Mableton, GA — oak canopy, leaf litter, and greenway-adjacent yards, one recurring plan.',
      h1: 'General Pest Control in Mableton, GA',
      breadcrumbName: 'General Pest Control',
      heroSub: 'Mableton\'s general-pest pattern is set by its canopy: mature oaks, deep leaf litter, and the greenway corridor that shades yards and drops debris all season. Fire ants use the sunny patches, spiders and wasps use the eaves and oak limbs, and nuisance ants use the gaps older homes leave. One recurring plan — baiting, a perimeter barrier, and nest treatment — covers that older, wooded landscape together.',
      sections: [
        {
          heading: 'Canopy, Leaf Litter, and the Greenway Edge',
          paras: [
            'An older, wooded yard behaves differently from a new subdivision lot. Oak limbs overhanging the roof give spiders and wasps routes onto eaves and into attics; leaf litter piled against the foundation shelters roaches, spiders, and the palmetto bugs that wander in; and the greenway corridor moves insects and rodents along a continuous shaded highway to the houses beside it.',
            'Fire ants still take the sunny patches — open lawns and shared green space where children and pets play — but the rest of the plan has to account for the canopy: eaves and oak limbs, litter against the foundation, and the greenway-facing side of the yard. Mention whether the home backs onto the greenway or sits under heavy oak cover when you call.'
          ],
        },{
          heading: 'What the Plan Does Differently in a Wooded, Older Yard',
          paras: [
            'A recurring plan for a Mableton yard typically means a scheduled perimeter treatment that pays special attention to the foundation line where leaf litter collects, fire ant baiting across sunny turf, and nest treatment for wasps and hornets under eaves and deck rails as they appear. Ask the assigned contractor what a plan covers, how often visits repeat, and whether the greenway-facing side gets extra attention.',
            'Between visits, keep leaf litter pulled back from the foundation, trim oak limbs that touch the roof, keep fire ant mounds marked and avoided, and seal obvious ant entry points where older doors and windows have left gaps. Ask about products, pets, and re-entry when you call.'
          ],
        },
      ],
      faqs: [
      { q: 'Why do spiders keep coming back in a wooded yard?', a: 'Because oak limbs and leaf litter give them routes and harbourage right against the house. A perimeter plan has to account for the canopy, not just the lawn.' },
      { q: 'Does backing onto the greenway change the plan?', a: 'Yes — the corridor moves insects and rodents to the houses beside it, so the greenway-facing side usually needs the closest attention. Mention it when you call.' },
      { q: 'What should I mention when I call?', a: 'Whether the home backs onto the greenway, whether it sits under heavy oak cover, and where mounds, nests, and ant trails are.' }
      ],
      finalCtaHeading: 'Get General Pest Control in Mableton',
    },
  },
};
