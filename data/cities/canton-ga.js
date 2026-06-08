'use strict';

// ── Canton, GA — city hub + per-pest city pages ──────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling Woodstock city pages — even though
// both are in Cherokee County). Targets local intent ("canton pest control",
// "pest control canton ga"). Rendered by views/city.ejs (hub) at /georgia/canton/
// and views/city-service.ejs (per-pest) at /georgia/canton/<pest>/.
//
// `county` drives the LeadPortal contractor lookup — Canton is in Cherokee
// County, so an assigned Cherokee County 'Pest Control' contractor shows on every
// Canton page (name + phone + LocalBusiness schema); until one is assigned the
// pages fall back to the shared (844) directory line and a Service schema node.
//
// LOCAL FACTS ARE RESTRICTED to the approved Canton list: county seat of Cherokee
// County in metro Atlanta's northern exurbs; pop. ~35,700 (2024) and growing
// fast; the Etowah River runs through town; Northside Hospital Cherokee; a
// revitalized historic downtown; ZIPs 30114/30115; area codes 770/470; nearby
// areas Sixes, Hickory Flat, Holly Springs, Ball Ground, Waleska, Woodstock;
// humid subtropical climate; Cherokee County is a heavy termite-pressure zone
// (eastern subterranean active, Formosan in parts of metro Atlanta); red imported
// fire ants present; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated by the Georgia Dept. of Agriculture's
// Structural Pest Control Commission. No other local specifics may be added.

module.exports = {
  name: 'Canton',
  slug: 'canton',
  county: 'Cherokee County',
  region: 'GA',
  zips: ['30114', '30115'],
  // Nearby Cherokee County communities we also serve — NOT Canton subdivisions.
  // (Listed as service-area names only; no invented neighborhood specifics.)
  neighborhoods: ['Sixes', 'Hickory Flat', 'Holly Springs', 'Ball Ground', 'Waleska', 'Woodstock'],

  // OG card override — point at the real branded card, never the favicon stopgap.
  // TODO: the 1200×630 asset /images/og-default.jpg does not exist yet; create it.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Canton, GA | The Local Pest Pro',
  metaDesc: "Licensed pest control in Canton, GA & Cherokee County — termites, mosquitoes, roaches, rodents & fire ants. Free quote from a pro who knows the area.",
  h1: 'Pest Control in Canton, GA',
  heroSub: "As the Cherokee County seat in metro Atlanta's fast-growing northern exurbs, Canton pairs humid Etowah River–valley summers with mild winters — so termites, mosquitoes, roaches, and rodents stay active here nearly year-round. Get a licensed local exterminator who knows Canton, fast.",

  overviewHeading: 'Pest Control Built for Canton & Cherokee County',
  overview: [
    "Canton has grown from a small county seat into one of metro Atlanta's fast-expanding northern exurbs, now home to roughly 35,700 residents — and that mix of brand-new subdivisions, established homes near the revitalized historic downtown, and wooded acreage along the Etowah River gives pests plenty of ways in. New construction sits on freshly graded soil that subterranean termites readily colonize, while older neighborhoods have had decades for ants, roaches, and rodents to find the gaps.",
    "The common thread is climate. Canton's humid subtropical weather — long, sticky summers, mild winters, and steady rainfall feeding the Etowah River valley — means most pests here never get a true off-season, which is why a recurring, locally-tuned plan tends to beat one-off treatments. Whether you're in 30114 toward downtown and Northside Hospital Cherokee or out in 30115, the licensed, insured pros in our directory quote your specific Canton property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Canton Homes Need Year-Round Protection',
      paras: [
        "Cherokee County sits inside one of the heaviest termite-pressure zones in the United States. Eastern subterranean termites are active across the area, and aggressive Formosan termites have established in parts of metro Atlanta — both feed underground 12 months a year thanks to Canton's mild winters, so the threat to your home's structure never really pauses. Termite damage typically isn't covered by homeowners insurance, which makes ongoing protection the cost-effective choice.",
        "It isn't only termites. Red imported fire ants are present throughout the Canton area, building painful mounds across lawns and common areas. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — it landed in the top five on Orkin's 2025 list — and the standing water and shaded vegetation along the Etowah River valley keep them breeding from spring into fall. Add the German roaches, 'palmetto bugs,' and roof rats that thrive in the region's humidity, and most Canton homes benefit from a steady, professional barrier rather than reacting one infestation at a time.",
      ],
    },
    {
      heading: 'Canton Pest Season — What to Expect',
      paras: [
        "Pest pressure shifts through the year in Canton. Here's roughly what local homeowners run into and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or discarded wings near windows are the classic first sign of an active colony. Ants get moving, carpenter bees drill into wood trim, and the first warm rains kick off mosquito breeding in the Etowah valley. The ideal time to get protection in place before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across metro Atlanta, fire ant mounds multiply in Canton lawns, wasp and yellowjacket nests grow large under eaves, and roaches and 'palmetto bugs' push indoors out of the heat and humidity. Fleas and ticks are at their most active." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start looking for a warm place to overwinter — this is when you'll hear scratching in Canton attics and walls. Yellowjackets turn aggressive as their colonies break down. A smart window to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Canton's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service maintains the protective barrier through the cooler months so spring doesn't start with a surge." },
      ],
    },
    {
      heading: 'In & Around Canton — Cherokee County Areas We Serve',
      paras: [
        "The local pros in our directory cover Canton across both ZIP codes and the surrounding Cherokee County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Canton',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Canton and the wider Cherokee County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Canton home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Canton homeowners with licensed, insured local exterminators across Cherokee County — we're not a single company. When you call, you reach the pest control pro assigned to the Canton area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Canton?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home and lot. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'What pests are most common in Canton and Cherokee County?', a: "The big ones are subterranean termites (Cherokee County is a heavy termite-pressure area), red imported fire ants in lawns, mosquitoes bred along the Etowah River valley and shaded yards, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push into attics as nights cool. The local pros in our directory treat all of them." },
    { q: 'Do you serve the areas around Canton too?', a: "Yes. Beyond Canton's 30114 and 30115 ZIP codes, the pros in our directory serve the surrounding Cherokee County communities, including Sixes, Hickory Flat, Holly Springs, Ball Ground, Waleska, and Woodstock. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Canton pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Canton?', a: "Often, yes — many of the local pros serving Canton offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Cherokee County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Canton pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Canton Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // Self-contained so the hub renders all six cards while the per-pest pages are
  // authored one at a time. Each href points at the Canton service page (which is
  // added next); links resolve once that page's pestPages entry exists below.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/canton/termite-control/',
      blurb: "Cherokee County sits in one of the nation's heaviest termite zones — eastern subterranean termites plus Formosan in parts of metro Atlanta. Liquid barriers, bait stations, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/canton/bed-bug-treatment/',
      blurb: "Travel-driven bed bugs spread fast through Canton homes, apartments, and rentals. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/canton/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the Etowah valley humidity — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/canton/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and the Etowah River valley gives them standing water to breed. Yard barrier sprays and larviciding through Canton's long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/canton/rodent-control/',
      blurb: "As Canton nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/canton/pest-control/',
      blurb: "Red imported fire ants are everywhere in Cherokee County, alongside spiders, wasps, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // Per-pest pages are added one at a time. Until an entry exists here, its hub
  // card links to a clean 404 rather than a half-built page. Each entry is written
  // fresh for Canton — no copy reused from the Georgia, national, or Woodstock pages.
  pestPages: {
    'termite-control': {
      cardBlurb: "Cherokee County is a heavy termite zone — eastern subterranean termites plus Formosan in parts of metro Atlanta. Liquid barriers, bait stations, and the Georgia termite letter for closings.",
      metaTitle: 'Termite Control in Canton, GA | The Local Pest Pro',
      metaDesc: "Termite control in Canton, GA — Cherokee County is a heavy termite zone. Liquid barriers, bait systems & the Georgia termite letter. Free inspection.",
      h1: 'Termite Control in Canton, GA',
      breadcrumbName: 'Termite Control',
      heroSub: "Cherokee County sits in one of the country's heaviest termite-pressure zones, and Canton's Etowah River–valley humidity paired with mild winters lets subterranean termites feed underground all year. Get a licensed local pro to inspect, treat, and protect your home — plus the Georgia termite letter when you buy or sell.",
      sections: [
        {
          heading: 'Why Termites Never Take a Season Off in Canton',
          paras: [
            "Termites need warmth, moisture, and wood, and Canton supplies all three nearly year-round. Cherokee County falls inside one of the heaviest termite-pressure regions in the United States: eastern subterranean termites are active across the area, foraging through the soil and building mud tubes up into sills, floor joists, and framing. Because winters here are mild, those colonies keep feeding 12 months a year instead of going dormant — so the slow, hidden damage never really pauses.",
            "Canton's setting makes it worse. Humidity rolling off the Etowah River valley and moisture held against foundations create exactly the damp soil line termites forage along, and the area's rapid growth means fresh, graded lots and new framing — prime targets for a foraging colony — sit alongside decades-old homes near the historic downtown that have had plenty of time for termites to find a way in. Aggressive Formosan termites have also established in parts of metro Atlanta, raising the stakes region-wide.",
          ],
        },
        {
          heading: 'Termite Swarm Season — The First Sign Canton Homeowners See',
          paras: [
            "For most people the first clue is a swarm. On warm, humid spring days — often right after rain — subterranean termites release winged 'swarmers' to start new colonies. If you find them inside, or notice little piles of discarded, translucent wings on windowsills and near door frames, it almost always means an active colony is already nearby, not a one-off visitor.",
            "A swarm is the cue to get an inspection right away, before another season of quiet feeding. Because termites work out of sight inside walls and crawlspaces, a licensed inspection is the only reliable way to confirm activity and gauge how far it has spread.",
          ],
        },
        {
          heading: 'Termite Treatment Options for Canton Homes',
          paras: [
            "There's no one-size-fits-all fix — a licensed inspector matches the approach to your home's foundation, soil, and the extent of any activity:",
          ],
          cards: [
            { name: 'Liquid termiticide barrier', text: "A non-repellent termiticide is trenched into the soil around the foundation, creating a continuous treated zone that wipes out subterranean termites as they tunnel through it. A proven choice for Canton's slab and crawlspace homes, for both active infestations and prevention." },
            { name: 'In-ground bait stations', text: "Discreet stations placed around the perimeter use a slow-acting bait that foragers carry back to collapse the whole colony, then are monitored on a recurring schedule — a low-disruption option that suits landscaped or wooded Canton lots where trenching is impractical." },
            { name: 'Wood & borate treatments', text: "Borates applied to exposed framing — common during a repair or on new construction in Canton's growing subdivisions — protect bare wood from termites and decay fungi for the life of the wood." },
            { name: 'Annual bond & re-inspection', text: "A renewable termite bond with yearly inspections keeps protection active, which matters in a high-pressure county where outside foraging never stops. New activity gets caught and re-treated before it becomes structural damage." },
          ],
        },
        {
          heading: "Buying or Selling in Canton? You'll Need a Termite Letter",
          paras: [
            "As the Cherokee County seat in one of metro Atlanta's fastest-growing areas, Canton sees a steady stream of home sales — and nearly every one involves a termite letter. Its official name is the Georgia Wood Infestation Inspection Report, and lenders and closing attorneys typically require it before closing. The inspection is usually performed within 30 days of the closing date, and only an operator licensed by the Georgia Department of Agriculture can issue the official report.",
            "The pros in our directory perform Canton termite inspections and issue the report, documenting evidence of active or previous infestation by termites and other wood-destroying organisms so your closing stays on schedule.",
          ],
        },
        {
          heading: 'What Termite Treatment Costs in Canton',
          paras: [
            "There's no flat price. Cost depends on your home's size and foundation type, the treatment method (a liquid barrier versus a bait system), and whether there's existing activity to address. A standalone termite letter for a closing is a separate, lower-effort service. Every pro in our directory starts with a free inspection and gives you a written, property-specific quote before any work begins — and because termite damage typically isn't covered by homeowners insurance, getting ahead of it is the cost-effective move.",
          ],
        },
      ],
      faqs: [
        { q: 'How can I tell if my Canton home has termites?', a: "Watch for mud tubes running up foundation walls or crawlspace piers, winged swarmers (or shed wings on windowsills) on warm spring days, wood that sounds hollow or papery when tapped, and doors or windows that suddenly stick. Since termites stay hidden, the surest way to know is a free professional inspection — most pros in our directory offer one." },
        { q: 'Do newly built Canton homes really need termite protection?', a: "Yes. Canton's new subdivisions sit on freshly graded, disturbed soil with new framing — exactly what foraging subterranean termites colonize — which is why a builder pre-treatment or a termite bond is common on new homes here. If your newer Canton home didn't come with documented termite protection, it's worth an inspection." },
        { q: 'Is a termite letter required to sell a house in Canton?', a: "It isn't a state law, but mortgage lenders and closing attorneys almost always require the Georgia Wood Infestation Inspection Report before a Cherokee County closing. A licensed local pro can inspect and issue it, typically within 30 days of your closing date, so the sale isn't held up." },
        { q: "What's the difference between a liquid barrier and bait stations?", a: "A liquid termiticide creates a treated zone in the soil around your home that kills termites as they pass through it — fast and long-lasting. Bait stations use a slow-acting bait that foragers carry back to eliminate the entire colony, with ongoing monitoring. Some Canton homes use one, some use both; your inspector recommends the right fit after looking at your foundation and lot." },
        { q: 'Are termite treatments safe for my family and pets?', a: "Yes. Georgia-licensed technicians apply EPA-registered termiticides and baits at label rates, with most product placed in the soil or in sealed stations around the exterior rather than inside living space. Your technician will explain any brief precautions for the application." },
      ],
      finalCtaHeading: 'Protect Your Canton Home From Termites',
    },

    'mosquito-control': {
      cardBlurb: "Metro Atlanta is a top-five U.S. mosquito metro, and the Etowah River valley gives them standing water to breed. Yard barrier sprays and larviciding through Canton's long warm season.",
      metaTitle: 'Mosquito Control in Canton, GA | The Local Pest Pro',
      metaDesc: "Mosquito control in Canton, GA — metro Atlanta is a top-five U.S. mosquito metro. Yard barrier sprays & larviciding for the Etowah valley. Free quote.",
      h1: 'Mosquito Control in Canton, GA',
      breadcrumbName: 'Mosquito Control',
      heroSub: "Metro Atlanta is one of the most mosquito-plagued metros in the country — it landed in the top five on Orkin's 2025 list — and the standing water and shaded yards of the Etowah River valley keep Canton mosquitoes breeding from spring into fall. Licensed local mosquito control can make your yard usable again.",
      sections: [
        {
          heading: 'Why Canton Yards Get So Many Mosquitoes',
          paras: [
            "Mosquitoes need only warmth, moisture, and a little standing water — and Canton hands them all three for much of the year. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes, placing in the top five on Orkin's 2025 list, and Canton sits squarely in that pressure. The Etowah River winds through town, feeding creeks, low spots, and humid, shaded yards that give larvae endless places to develop and give adult mosquitoes cool vegetation to rest in right beside your patio.",
            "It takes only a capful of water to raise a batch, so even a tidy Canton yard produces them — a clogged gutter, a plant saucer, a tarp, or a forgotten bucket is enough. Combine that with the area's long, humid warm season and a can of bug spray simply can't keep up. Treating the resting areas and the breeding water together is what actually brings the population down.",
          ],
        },
        {
          heading: 'How Professional Mosquito Control Works in Canton',
          paras: [
            "A licensed local program goes after mosquitoes at every stage instead of just masking the bites:",
          ],
          cards: [
            { name: 'Barrier treatments', text: "A residual treatment is applied to the shrubs, tree lines, and shaded spots where adult mosquitoes rest during the day, then reapplied roughly every three to four weeks through the season to keep knocking down new biters." },
            { name: 'Larviciding', text: "Standing water you can't drain — drainage swales, low spots, ditches, and water features common along the Etowah valley — is treated to kill larvae before they ever take flight." },
            { name: 'Source reduction', text: "Your technician finds and helps eliminate the hidden breeding sites around the property, the single biggest factor in long-term control." },
            { name: 'Misting & event sprays', text: "Automated misting systems offer hands-off, scheduled protection for larger Canton lots, and a one-time knockdown spray can clear your yard before a wedding, party, or cookout." },
          ],
        },
        {
          heading: 'Mosquito-Borne Illness Is a Real Reason to Act',
          paras: [
            "Canton mosquitoes are more than an itchy nuisance. The Georgia Department of Public Health tracks West Nile virus across the state every year, with risk usually climbing in late summer, and the aggressive Asian tiger mosquito common throughout the area bites during the day rather than only at dusk. Mosquitoes also transmit heartworm to dogs — a genuine concern for Canton's many pet owners. Cutting the population around your home is about protecting your family, not just staying comfortable.",
          ],
        },
        {
          heading: 'Cut Mosquito Breeding Around Your Canton Home',
          paras: [
            "Between professional visits, eliminating standing water makes a real difference. The usual culprits around Canton yards:",
          ],
          bullets: [
            "Clogged gutters and downspouts that pond after Georgia thunderstorms",
            "Plant saucers, buckets, kids' toys, and tarps that catch rainwater",
            "Bird baths and pet bowls that aren't refreshed every few days",
            "Drainage swales, ditches, and low spots that stay wet between rains",
            "The shallow, vegetated edges of creeks and backyard water features",
          ],
        },
        {
          heading: 'What Mosquito Control Costs in Canton',
          paras: [
            "Most Canton homeowners use a seasonal plan — recurring barrier treatments from spring through fall — with the price set by your yard's size and how much shaded, vegetated habitat it has. One-time event sprays and misting-system installs are quoted separately. Every pro in our directory will assess your property and quote it for free, so you know the cost before you commit.",
          ],
        },
      ],
      faqs: [
        { q: 'When does mosquito season start in Canton?', a: "Mosquitoes usually become active around March as temperatures warm and stay out into October or later, with the heaviest pressure in the hot, rainy stretch from June through September. Starting a seasonal plan in early spring keeps the population in check before it peaks in the summer heat." },
        { q: 'How often do mosquito treatments need to be repeated?', a: "Barrier treatments are typically reapplied every three to four weeks during the active season, because the residual gradually wears off and new mosquitoes move in from surrounding water and woods. Automated misting systems run on a set schedule instead. Your pro will recommend a cadence based on your Canton yard." },
        { q: 'Will treatment get rid of every mosquito in my yard?', a: "No outdoor program eliminates 100% of mosquitoes, but professional barrier treatment combined with larviciding and source reduction usually cuts the population dramatically — enough to make your yard comfortable again. Pairing it with emptying standing water on your own gives the best results." },
        { q: 'Are mosquito treatments safe for kids, pets, and pollinators?', a: "Yes, when applied by a licensed pro. Technicians use EPA-registered products at label rates, target mosquito resting areas rather than blooming plants, and avoid treating when bees are active. Let treated areas dry — usually about 30 minutes — before kids and pets head back outside." },
      ],
      finalCtaHeading: 'Take Back Your Canton Backyard',
    },

    'pest-control': {
      cardBlurb: "Red imported fire ants are everywhere in Cherokee County, alongside spiders, wasps, and nuisance ants. One recurring quarterly plan covers them all, year-round.",
      metaTitle: 'General Pest Control in Canton, GA | Quarterly Plans',
      metaDesc: "Recurring pest control in Canton, GA — fire ants, spiders, wasps, ants & occasional invaders. Quarterly plans, licensed & pet-safe. Free quote, year-round.",
      h1: 'General Pest Control in Canton, GA',
      breadcrumbName: 'General Pest Control',
      heroSub: "Fire ants in the lawn, wasps under the eaves, spiders in the garage, ants marching across the kitchen — Canton's humid, mild climate keeps everyday household pests busy nearly all year. One recurring quarterly plan from a licensed local pro handles them together, instead of one infestation at a time.",
      sections: [
        {
          heading: "Canton's Pests Barely Get an Off-Season",
          paras: [
            "Sitting in the humid Etowah River valley with long, sticky summers and mild winters, Canton gives common household pests very little reason to slow down. Where homeowners up north get a hard winter die-off, ants, spiders, and wasps here keep going into the cooler months — which is exactly why a recurring quarterly plan tends to outperform one-off sprays. It keeps a fresh protective barrier in place as each pest's season rolls around, rather than leaving you to react after something has already moved in.",
            "A general plan is the catch-all for everyday pests. A handful of specialty problems — termites, mosquitoes, roaches, bed bugs, and rodents — are worth their own dedicated program, and each has its own Canton page linked from this site. Everything else, from fire ants to silverfish, falls under the recurring plan below.",
          ],
        },
        {
          heading: 'Fire Ants Are a Fact of Life in Canton',
          paras: [
            "If you have a lawn in Canton, you almost certainly have fire ants. Red imported fire ants are present throughout the area, throwing up their dome-shaped mounds across yards, common areas, and the edges of driveways and play spaces. Their stings burn, come in numbers, and can be genuinely dangerous to anyone allergic, as well as to pets and small children who stumble onto a mound.",
            "Knocking them down takes more than a hardware-store mound killer, which usually just scatters the colony. The reliable approach pairs a broadcast bait that foragers carry underground to kill the queen with direct mound treatments for fast knockdown and a perimeter barrier around the home — all of which a recurring plan keeps on top of, since fire ants in this area never really leave.",
          ],
        },
        {
          heading: 'Other Common Canton Household Pests',
          paras: [
            "Beyond fire ants, a Canton general pest plan keeps the regulars in check:",
          ],
          cards: [
            { name: 'Ants', text: "Argentine ants, odorous house ants, and moisture-seeking carpenter ants that tunnel into damp wood all turn up in Canton homes. Recurring exterior treatment intercepts the trails before they reach the kitchen and pantry." },
            { name: 'Spiders', text: "Most local spiders are harmless, but black and brown widows like to tuck into garages, woodpiles, meter boxes, and the undersides of patio furniture. Treatment targets webs, harborage, and the insects spiders feed on so they have less reason to stay." },
            { name: 'Wasps, hornets & yellowjackets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build up through Canton's summer and turn aggressive in fall. Pros knock down accessible nests and treat eaves, soffits, and entry points so they don't simply rebuild." },
            { name: 'Fleas & ticks', text: "The mild climate keeps fleas and ticks active much of the year, and they hitch indoors on pets and wildlife. Yard and perimeter treatment knocks down the outdoor hot spots where pets pick them up, protecting your family too." },
            { name: 'Occasional invaders', text: "Silverfish, millipedes, centipedes, earwigs, and seasonal invaders like stink bugs and lady beetles push indoors as the humidity and temperatures shift. A treated barrier plus sealing entry points keeps them outside where they belong." },
          ],
        },
        {
          heading: 'What a Recurring Canton Plan Includes',
          paras: [
            "A typical quarterly plan for a Canton home covers:",
          ],
          bullets: [
            "A thorough inspection and a full interior treatment on the first visit, then exterior-focused service that protects the home without disrupting it",
            "A treated barrier around the foundation, windows, doors, and other entry points",
            "De-webbing of eaves and removal of accessible wasp and hornet nests",
            "Fire ant and nuisance-ant control across the yard and perimeter",
            "Free re-service between scheduled visits if covered pests come back — the guarantee most local companies stand behind",
          ],
        },
        {
          heading: 'Why Quarterly Timing Works in Canton',
          paras: [
            "Different pests peak at different times of year here — ants and wasps build through spring and summer, spiders and overwintering invaders press in during fall, and plenty stays active through the mild winter. Quarterly service times each treatment to interrupt those cycles, so the barrier is freshest right when each pest is most active. It's a steadier, more cost-effective way to stay ahead of Canton's nearly year-round pressure than calling for a one-off spray after a problem has already taken hold. Every pro in our directory quotes your specific property for free and backs the plan with a re-service guarantee.",
          ],
        },
      ],
      faqs: [
        { q: 'What pests does a Canton general pest control plan cover?', a: "It handles the everyday household pests — fire ants and other ants, spiders, wasps, hornets and yellowjackets, silverfish, millipedes and centipedes, earwigs, fleas and ticks, and seasonal invaders like stink bugs. Specialty pests — termites, mosquitoes, roaches, bed bugs, and rodents — are covered by dedicated programs, each with its own Canton page on this site." },
        { q: 'How often should I have pest control done in Canton?', a: "Because Canton's mild, humid climate keeps pests active nearly year-round, a quarterly plan — service every three months — is the standard and works best. Each visit refreshes the protective barrier ahead of the next pest season. A heavier problem can call for an added visit, which your pro will flag during the inspection." },
        { q: "What's the best way to get rid of fire ants in my Canton yard?", a: "Effective fire ant control combines a broadcast bait that foragers carry underground to kill the queen, direct treatment of individual mounds for quick knockdown, and a perimeter barrier around the house. Since fire ants are established throughout the Canton area, keeping them down is an ongoing job best handled as part of a recurring plan rather than a single application." },
        { q: 'Is recurring pest control safe around kids and pets?', a: "Yes. Local technicians apply EPA-registered products at label rates and offer family- and pet-safe options, concentrating treatment on the exterior perimeter, entry points, and cracks and crevices rather than across living areas. They'll let you know about any brief re-entry window — usually just until a treated spot dries." },
        { q: 'Am I locked into a contract, and what if pests come back?', a: "Most Canton plans are quarterly and come with a guarantee — if covered pests return between scheduled visits, the company comes back and re-treats at no extra charge. Specific terms vary by provider, so the pro who quotes your home will spell out the plan, the guarantee, and any commitment before you decide." },
      ],
      finalCtaHeading: 'Get Year-Round Pest Protection in Canton',
    },

    'cockroach-control': {
      cardBlurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the Etowah valley humidity — cleared out and kept out, usually with a guarantee.",
      metaTitle: 'Cockroach Control in Canton, GA | The Local Pest Pro',
      metaDesc: "Cockroach control in Canton, GA — German roaches indoors, palmetto bugs from the yard. Licensed Cherokee County pros, gel baiting & guaranteed. Free quote.",
      h1: 'Cockroach Control in Canton, GA',
      breadcrumbName: 'Cockroach Control',
      heroSub: "From German roaches breeding in the kitchen to the big 'palmetto bugs' that wander in from Canton's mulch beds and crawlspaces, the Etowah valley's humidity keeps roaches active. A licensed local pro can clear an infestation and keep it from coming back — usually with a guarantee.",
      sections: [
        {
          heading: 'Two Very Different Roach Problems in Canton',
          paras: [
            "Almost every Canton roach call comes down to one of two situations, and they're handled in completely different ways. German cockroaches are small, fast-breeding insects that live and reproduce indoors — in kitchens, bathrooms, apartments, and rentals — and seeing them usually signals an established infestation, not a stray. The big roaches people around here call 'palmetto bugs' are something else: smokybrown and American cockroaches that live outdoors in mulch, leaf litter, gutters, and crawlspaces and simply wander inside.",
            "Telling them apart matters, because treating a German roach problem like an outdoor one (or vice versa) wastes time and money. A licensed pro starts by identifying exactly which roach you have and where it's harboring, then builds the treatment around that.",
          ],
        },
        {
          heading: "Why the Etowah Valley Keeps Roaches Active",
          paras: [
            "Roaches want warmth, moisture, and food, and Canton's humid, low-lying Etowah River valley supplies the first two in abundance. Mulch and pine-straw landscaping, mature trees, crawlspaces, and damp foundations give outdoor 'palmetto bugs' endless harborage right up against the house, then humidity, lights, and small gaps draw them indoors — which is why you can spot a big roach even in a spotless Canton home. Indoors, kitchen grease, pet food, cardboard, and any plumbing leak keep German roaches fed and breeding straight through the mild winter.",
          ],
        },
        {
          heading: 'How Local Pros Clear Each Kind of Roach',
          paras: [
            "Effective control depends entirely on the species, so the approach splits two ways:",
          ],
          cards: [
            { name: 'German roaches (indoor)', text: "Targeted gel baiting placed in cracks and crevices, insect growth regulators that stop reproduction, monitoring, and sanitation guidance to remove the food and moisture they rely on. Store-bought foggers tend to scatter them and make the problem worse." },
            { name: 'Palmetto bugs (outdoor)', text: "A perimeter barrier treatment plus attention to the harborage that feeds the problem — mulch beds, gutters, woodpiles, and crawlspaces — and sealing the gaps where the big roaches slip inside in the first place." },
            { name: 'Ongoing protection', text: "Because Canton's outdoor roach pressure never truly stops, most homeowners pair an initial cleanout with recurring quarterly service, typically backed by a re-treat guarantee between visits." },
          ],
        },
        {
          heading: "Roaches and Your Family's Health",
          paras: [
            "Cockroaches are more than a nuisance. German cockroach droppings and shed skins are a well-documented trigger for asthma and allergies, especially in children, and roaches can carry bacteria from drains and garbage onto kitchen counters and food-prep surfaces as they travel. Clearing an infestation from your Canton home is as much a health improvement as a comfort one.",
          ],
        },
        {
          heading: 'What Cockroach Control Costs in Canton',
          paras: [
            "Cost depends on the species, how large the infestation is, and the size of your home. A German cockroach cleanout often takes an initial treatment plus a follow-up visit or two, while outdoor palmetto-bug control is usually folded into a recurring perimeter plan. Every pro in our directory inspects and quotes for free, and most guarantee the work — so you'll know the price and the plan before anything starts.",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I see big roaches in my clean Canton house?', a: "Those large roaches are almost always 'palmetto bugs' — smokybrown or American cockroaches — that live outdoors in mulch, gutters, crawlspaces, and leaf litter and wander inside. They aren't a sign of poor housekeeping; in Canton's humid climate they're right up against the foundation. A perimeter barrier plus sealing entry points is what keeps them out." },
        { q: "What's the difference between a palmetto bug and a roach?", a: "'Palmetto bug' is just a regional nickname for large roaches, mostly the smokybrown and American cockroach — they are cockroaches. The distinction that matters for treatment is indoor versus outdoor: German cockroaches breed indoors and mean an infestation, while palmetto bugs are outdoor roaches coming in from the yard." },
        { q: 'Do I need recurring service, or is one cockroach treatment enough?', a: "A German cockroach infestation can often be cleaned out with an initial treatment and a follow-up or two. Outdoor palmetto bugs are different — because Canton's mulch, crawlspaces, and humidity produce them all season, recurring quarterly perimeter service is the dependable way to keep them out, usually with a guarantee between visits." },
        { q: 'Is cockroach treatment safe for kids and pets?', a: "Yes. Local technicians use targeted gel baits and EPA-registered products placed in cracks, crevices, and exterior areas rather than sprayed across living space — both safer and far more effective than over-the-counter foggers. Your technician will note any short precautions for the application." },
      ],
      finalCtaHeading: 'Clear the Roaches From Your Canton Home',
    },

    'rodent-control': {
      cardBlurb: "As Canton nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring.",
      metaTitle: 'Rodent Control in Canton, GA | The Local Pest Pro',
      metaDesc: "Rodent control in Canton, GA — roof rats & mice in the attic each fall. Trapping, exclusion (sealing entry points) & monitoring. Free local inspection.",
      h1: 'Rodent Control in Canton, GA',
      breadcrumbName: 'Rodent Control',
      heroSub: "When Canton nights start to cool, roof rats, Norway rats, and house mice push into attics, walls, and crawlspaces looking for warmth. A licensed local pro doesn't just trap them — they seal the entry points so the rodents can't get back in, then keep watch.",
      sections: [
        {
          heading: 'The Rodents That Get Into Canton Homes',
          paras: [
            "Three rodents account for most Canton infestations, and each gets in a different way:",
          ],
          cards: [
            { name: 'Roof rats', text: "Agile climbers that enter high — up trees, gutters, and downspouts and in through the roofline — then nest in attics and soffits. If you hear something scurrying overhead after dark, roof rats are the usual suspect in this area." },
            { name: 'Norway rats', text: "Larger, ground-dwelling rats that burrow and favor crawlspaces, basements, and woodpiles. They push in low on the structure, around the foundation and utility-line penetrations." },
            { name: 'House mice', text: "The most common indoor rodent. A mouse can slip through a gap the size of a dime, breeds quickly, and contaminates far more food than it eats — often the first sign is droppings in a pantry or drawer." },
          ],
        },
        {
          heading: 'Why Fall Is Peak Rodent Season in Canton',
          paras: [
            "Rodent calls climb in fall, when the first cool nights send rats and mice hunting for somewhere warm to spend the winter — and your Canton attic, wall void, or crawlspace fits the bill. The area's mild winters mean it doesn't end there, though: rodents stay active year-round once they're inside. Homes backing to woods, creeks along the Etowah valley, or older outbuildings tend to see the most pressure. Watch for these signs:",
          ],
          bullets: [
            "Scratching, gnawing, or scurrying in the attic or walls, especially at night",
            "Droppings in the pantry, garage, under sinks, or along baseboards",
            "Gnaw marks on food packaging, wood trim, or wiring",
            "Greasy rub marks along beams, baseboards, and entry points",
            "Shredded insulation or paper used for nesting, or a musky odor",
          ],
        },
        {
          heading: 'Rodents Are More Than a Nuisance',
          paras: [
            "A rodent problem is a genuine hazard, not just an annoyance. Rats and mice gnaw constantly — including on electrical wiring, a recognized cause of house fires — and they contaminate food and surfaces with droppings and urine that can spread illness. They also carry fleas, ticks, and mites indoors, and their nesting tears up insulation and ductwork. A small problem turns into an expensive one quickly, which is why prompt, thorough control pays off.",
          ],
        },
        {
          heading: 'The Permanent Fix: Trapping Plus Exclusion',
          paras: [
            "Scattering poison around doesn't solve a rodent problem — it can leave rodents to die inside walls and does nothing to stop the next ones from coming in. A licensed Canton rodent program is built around keeping them out for good:",
          ],
          cards: [
            { name: 'Inspection', text: "A top-to-bottom check of the roofline, soffits, foundation, crawlspace, and utility penetrations to identify the species and pinpoint every way they're getting in." },
            { name: 'Trapping & removal', text: "Strategic trapping knocks down the active population quickly and cleanly, without relying on poisons inside your living space." },
            { name: 'Exclusion (the permanent part)', text: "Sealing roofline gaps, vents, and utility openings with rodent-proof materials so rats and mice physically can't return — the step that turns a temporary knockdown into a lasting fix." },
            { name: 'Monitoring & cleanup', text: "Tamper-resistant exterior stations catch new pressure, and contaminated nesting material and droppings are removed and sanitized to clear health hazards and scent trails." },
          ],
        },
        {
          heading: 'Keep Rodents Out of Your Canton Home',
          bullets: [
            "Trim tree limbs and shrubs back from the roofline — roof rats use branches as bridges",
            "Seal gaps around pipes, vents, and the foundation; screen crawlspace and attic vents",
            "Store food and pet food in sealed containers and clean up spills promptly",
            "Keep firewood, debris, and clutter away from the house",
            "Secure trash cans and pick up fallen fruit and birdseed",
          ],
        },
        {
          heading: 'What Rodent Control Costs in Canton',
          paras: [
            "Cost depends on the rodent, how severe the problem is, and how much exclusion work your home needs — sealing a couple of roofline gaps is very different from rodent-proofing an older house. Many Canton homeowners pair an initial knockdown with recurring exterior monitoring. Every pro in our directory inspects and quotes for free, so you'll know the plan and the price before any work begins.",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I hear scratching in my Canton attic at night?', a: "In this area that's most often roof rats — strong climbers that nest in attics and soffits and are active after dark. Squirrels are possible too, but they're usually noisy in the daytime. A licensed inspector can confirm the species and find the roofline openings the rodents are using to get in." },
        { q: "What's the difference between roof rats and Norway rats?", a: "Roof rats are sleek climbers that enter high, through the roofline, and nest in attics and trees. Norway rats are larger, burrowing ground-dwellers that favor crawlspaces, basements, and woodpiles and enter low on the structure. They call for different trapping and exclusion strategies, which is why identifying the species first matters." },
        { q: 'Is trapping better than poison for rodents?', a: "For rodents inside the home, yes — trapping removes them cleanly and avoids the problem of rodents dying and decomposing inside walls. Just as important is exclusion, which poison can't do at all. Exterior tamper-resistant bait stations have a role around the perimeter, but the lasting solution is physically sealing rodents out." },
        { q: 'Do you seal up the entry points, or just set traps?', a: "A proper Canton rodent job includes exclusion — sealing roofline gaps, soffits, vents, and utility penetrations with rodent-proof materials. That's the most important part: without it, traps only clear the current rodents and a new group simply moves in through the same openings." },
      ],
      finalCtaHeading: 'Get Rodents Out of Your Canton Home — for Good',
    },

    'bed-bug-treatment': {
      cardBlurb: "Travel-driven bed bugs spread fast through Canton homes, apartments, and rentals. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification.",
      metaTitle: 'Bed Bug Treatment in Canton, GA | Heat & Guaranteed',
      metaDesc: "Bed bug treatment in Canton, GA — discreet heat or residual programs that kill every life stage, with follow-up. Free inspection from a local pro.",
      h1: 'Bed Bug Treatment in Canton, GA',
      breadcrumbName: 'Bed Bug Treatment',
      heroSub: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture — and once inside a Canton home, apartment, or rental they spread fast. A licensed local pro can wipe them out at every life stage with whole-room heat or a targeted residual program, discreetly and with follow-up verification.",
      sections: [
        {
          heading: 'How Bed Bugs Get Into Canton Homes',
          paras: [
            "Bed bugs are hitchhikers, not a sign of an unclean home — they spread on people and belongings, so any Canton household can pick them up. The most common routes are luggage after a hotel or vacation stay, secondhand furniture and mattresses, moving boxes, and a returning college student's bags. In multi-unit housing — apartments, townhomes, and rentals around Canton — they can also travel between units through shared walls and voids.",
            "Once they're in, a small problem doesn't stay small. A single female can lay hundreds of eggs over her life, so a few bugs brought home from a trip can become an established infestation within weeks. Catching it early keeps treatment faster, simpler, and less disruptive — which is why it pays to act at the first sign rather than wait and see.",
          ],
        },
        {
          heading: 'How to Tell If You Have Bed Bugs',
          paras: [
            "Bed bugs are about the size of an apple seed, flat, and reddish-brown, and they hide close to where you sleep. Look for these signs:",
          ],
          bullets: [
            "Small, itchy bites in rows or clusters on skin exposed while you sleep",
            "Rust- or blood-colored spots on sheets, pillowcases, and mattress seams",
            "Dark, pepper-like fecal specks along seams, the box spring, and the headboard",
            "Pale shed skins, and in heavier cases a sweet, musty odor",
            "Live bugs tucked into mattress seams, behind the headboard, and in nightstands",
          ],
        },
        {
          heading: 'Heat vs. Residual Treatment',
          paras: [
            "Canton pros use two proven approaches, sometimes in combination, matched to your situation:",
          ],
          cards: [
            { name: 'Whole-room heat', text: "Specialized equipment raises the room to a temperature lethal to bed bugs and their eggs, killing every life stage in a single day — including bugs hidden deep in walls, furniture, and baseboards. Often the fastest, most thorough option, and it leaves little residue." },
            { name: 'Residual program', text: "A targeted program of EPA-registered residual products with follow-up visits clears the infestation over a few weeks, frequently paired with steam and mattress encasements to trap and kill bugs in place." },
            { name: 'Inspection & verification', text: "Trained technicians — sometimes with a K-9 detection dog — confirm the infestation, locate every harborage, and verify success with follow-up checks so nothing is missed and the problem doesn't quietly rebuild." },
          ],
        },
        {
          heading: 'Why Bed Bugs Are a Job for a Pro',
          paras: [
            "Bed bugs are one of the hardest pests to clear on your own, and DIY usually makes it worse. Many populations resist the common over-the-counter insecticides, foggers and bug bombs don't reach the cracks and crevices where bugs and eggs actually hide, and disturbing them tends to scatter the infestation into adjoining rooms — a serious risk in Canton's apartments and townhomes, where they can move into neighboring units. Professional heat and residual programs reach the eggs and hiding spots store-bought products can't, and a reputable pro verifies the result rather than hoping.",
          ],
        },
        {
          heading: 'What Bed Bug Treatment Costs in Canton',
          paras: [
            "Cost depends on the size of the home, how many rooms are affected, and whether you choose heat or a residual program. Treating a single room caught early costs far less than a whole-home infestation that's had months to spread — one more reason to act at the first sign. Every pro in our directory offers a discreet inspection and a clear written quote before any work begins, and most guarantee their bed bug work.",
          ],
        },
      ],
      faqs: [
        { q: 'How do I know if I have bed bugs?', a: "Look for itchy bites in rows or clusters, small blood or rust-colored spots on bedding, dark fecal specks along mattress seams and the headboard, pale shed skins, and live apple-seed-sized bugs near where you sleep. Because they hide so well, a professional — sometimes using a K-9 detection dog — is the surest way to confirm an infestation and find every harborage." },
        { q: 'Does heat treatment really kill bed bugs?', a: "Yes. Raising a room to a temperature bed bugs can't survive kills adults, nymphs, and eggs in a single day, including bugs hidden inside walls and furniture. It's one of the most thorough options and leaves little to no residue, which is why many Canton homeowners prefer it." },
        { q: 'Can I stay in my Canton home during treatment?', a: "In most cases, yes. You'll get a prep checklist and instructions on when to be out of the treated rooms — heat treatments require you to leave during the process — and when it's safe to return. Your provider walks you through the specifics before the appointment." },
        { q: 'Do I have to throw out my mattress and furniture?', a: "Usually not. Professional heat and residual treatments save most mattresses and furniture, and encasements let you keep a treated mattress safely. Throwing items out can actually spread bed bugs through the home or building, so check with your technician before discarding anything." },
        { q: 'How fast should I act if I think I have bed bugs?', a: "Right away. Bed bugs multiply quickly, and an infestation caught in one room is far faster and cheaper to treat than one that's spread across the home. A quick professional inspection confirms whether you have them and how far they've gone, so you can deal with it before it grows." },
      ],
      finalCtaHeading: 'Get Rid of Bed Bugs in Canton',
    },
  },
};
