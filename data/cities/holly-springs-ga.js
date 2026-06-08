'use strict';

// ── Holly Springs, GA — city hub + per-pest city pages ───────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city pages
// (Canton, Woodstock) — same county means shared FACTS, but the wording,
// structure, and local hooks here are written fresh and lead with Holly Springs'
// own anchors. Targets local intent ("pest control holly springs ga",
// "holly springs pest control"). Rendered by views/city.ejs (hub) at
// /georgia/holly-springs/ and views/city-service.ejs (per-pest) at
// /georgia/holly-springs/<pest>/.
//
// `county` drives the LeadPortal contractor lookup — Holly Springs is in Cherokee
// County, so an assigned Cherokee County 'Pest Control' contractor shows on every
// Holly Springs page (name + phone + LocalBusiness schema); until one is assigned
// the pages fall back to the shared (844) directory line and a Service schema node.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): city in
// Cherokee County, metro Atlanta, ~35 mi N of downtown Atlanta; bordered by
// Canton (N) and Woodstock (S), Hickory Flat to the E; pop. ~19,000–20,000
// (16,213 in 2020, ~9,200 in 2010), one of the county's fastest-growing cities;
// affluent, family-oriented, mostly owner-occupied, several city parks; I-575
// runs through it (exits 11 and 14); incorporated 1906, named for holly trees
// around a natural spring; historic Holly Springs Train Depot landmark; Town
// Center development near Holly Springs Parkway and Hickory Road (the ONLY roads
// nameable); ZIPs 30115/30142/30188 (never mapped to specific streets); area
// codes 770/678/470; humid subtropical climate; Cherokee County is a high
// termite-pressure zone (eastern subterranean active, Formosan in parts of metro
// Atlanta); red imported fire ants present; metro Atlanta is a top-five U.S.
// mosquito metro (Orkin 2025); GA Dept. of Agriculture Structural Pest Control
// Commission regulates/licenses. Do NOT name parks, schools, or subdivisions.

module.exports = {
  name: 'Holly Springs',
  slug: 'holly-springs',
  county: 'Cherokee County',
  region: 'GA',
  zips: ['30115', '30142', '30188'],
  // Nearby Cherokee County communities we also serve — NOT Holly Springs
  // subdivisions. Service-area names only (approved facts: borders Canton &
  // Woodstock, Hickory Flat to the east).
  neighborhoods: ['Canton', 'Woodstock', 'Hickory Flat'],

  // OG card override — point at the real branded card, never the favicon stopgap.
  // TODO: the 1200×630 asset /images/og-default.jpg does not exist yet; create it.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Holly Springs, GA | The Local Pest Pro',
  metaDesc: "Licensed pest control in Holly Springs, GA — on the I-575 corridor between Canton & Woodstock. Termites, mosquitoes, roaches, rodents & fire ants. Free quote.",
  h1: 'Pest Control in Holly Springs, GA',
  heroSub: "Holly Springs sits right on the I-575 corridor between Canton and Woodstock — one of Cherokee County's fastest-growing suburbs. Humid summers and mild winters keep termites, mosquitoes, roaches, and rodents active close to year-round. Get a licensed local exterminator who knows Holly Springs, fast.",

  overviewHeading: 'Pest Control Built for Holly Springs Homes',
  overview: [
    "Holly Springs has roughly doubled and then some since 2010 — from about 9,200 residents to nearly 20,000 today — making it one of Cherokee County's fastest-growing cities. That growth shows up in the housing stock: brand-new subdivisions rising along the I-575 corridor and around the emerging Town Center near Holly Springs Parkway and Hickory Road, sitting beside established, owner-occupied neighborhoods that go back generations. Each comes with its own pest pressure — freshly graded lots invite subterranean termites, while older homes have had years for ants, roaches, and rodents to find the gaps.",
    "The constant is the climate. Holly Springs has the same humid subtropical weather as the rest of metro Atlanta's northern suburbs — hot, sticky summers, mild winters, and abundant rain — so most pests here barely get an off-season. That's why a recurring, locally-tuned plan usually outperforms waiting for the next problem. Wherever you are in Holly Springs, the licensed, insured pros in our directory quote your specific property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Holly Springs Homes Need Year-Round Protection',
      paras: [
        "Cherokee County falls inside one of the highest termite-pressure zones in the United States, and Holly Springs is squarely in it. Eastern subterranean termites are active throughout the area, and aggressive Formosan termites have established in parts of metro Atlanta — and because winters here are mild, those colonies keep feeding underground all year instead of going dormant. Since termite damage typically isn't covered by homeowners insurance, steady protection costs far less than the repairs.",
        "Termites are only the beginning. Red imported fire ants are present throughout Holly Springs, throwing up painful mounds across subdivision lawns and the city's parks. Metro Atlanta ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and the shaded yards and standing water that come with rapid suburban growth keep them breeding from spring into fall. Add the German roaches, outdoor 'palmetto bugs,' and roof rats that flourish in the humidity, and a steady professional barrier makes more sense than chasing one infestation at a time.",
      ],
    },
    {
      heading: 'Holly Springs Pest Season — Month by Month',
      paras: [
        "Pest pressure rises and falls through the year in Holly Springs. Here's what local homeowners typically run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid days set off termite swarms — a cloud of winged swarmers, or shed translucent wings on a windowsill, is the classic warning of an active colony. Ants wake up, carpenter bees bore into deck and trim wood, and the season's first rains start filling mosquito breeding sites. The best window to lock in protection before summer." },
        { name: 'Summer (Jun–Aug)', text: "The busiest stretch by far. Mosquitoes hit their stride across the metro Atlanta area, fire ant mounds spread through Holly Springs lawns, wasps and yellowjackets build under eaves and decks, and roaches push indoors to escape the heat. Fleas and ticks peak on pets and in shaded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for a warm place to overwinter — this is the season you start hearing scratching in the attic. Breaking-up yellowjacket colonies turn aggressive. A smart time to seal entry points before the cold sets in." },
        { name: 'Winter (Dec–Feb)', text: "Holly Springs' mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding below ground year-round. Recurring service holds the barrier through the cold so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Nearby Areas We Serve Around Holly Springs',
      paras: [
        "The local pros in our directory cover Holly Springs across its ZIP codes and the neighboring Cherokee County communities. If you're just up or down the I-575 corridor, we can connect you with a licensed exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works',
      cards: [
        { name: '1. Call for your free quote', text: "One call connects you with a licensed, insured exterminator who serves Holly Springs and the surrounding Cherokee County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro inspects the property, identifies the pest and how far it has spread, and recommends the right treatment for your Holly Springs home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products applied at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'How Our Holly Springs Directory Works',
      paras: [
        "The Local Pest Pro is a directory rather than a single company — our job is to connect Holly Springs homeowners with licensed, insured local exterminators serving Cherokee County. When you call, you'll reach the pest control pro assigned to the Holly Springs area, or our shared directory line at (844) 544-3498, and you'll get a free, property-specific quote. Each pro we connect you with is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and treats with EPA-registered products at label rates, including family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Holly Springs?', a: "There's no flat rate — it depends on the pest, how bad the infestation is, and the size of your home and lot. A recurring general plan is the most affordable option, while specialty jobs like termite or bed bug treatment cost more because of the equipment and follow-up. Every pro in our directory gives you a free, property-specific quote before any work starts, so there are no surprises." },
    { q: 'What are the most common pests in Holly Springs?', a: "Subterranean termites top the list, since Cherokee County is a heavy termite-pressure area. Close behind are red imported fire ants in lawns, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that love the humidity, and roof rats and mice that slip into attics as nights cool. The pros in our directory handle every one of them." },
    { q: 'Which areas around Holly Springs do you serve?', a: "Beyond Holly Springs' 30115, 30142, and 30188 ZIP codes, the pros in our directory serve the neighboring Cherokee County communities up and down the I-575 corridor — including Canton to the north, Woodstock to the south, and Hickory Flat to the east. Call and we'll connect you with a licensed exterminator covering your area." },
    { q: 'Are Holly Springs pest control companies licensed?', a: "They should be. Georgia regulates structural pest control through the Department of Agriculture's Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your home. Everyone we connect you with for Holly Springs is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Holly Springs?', a: "Often, yes. Many of the local pros serving Holly Springs offer same-day and emergency visits for urgent problems — a wasp nest by the front door, a sudden roach sighting, or rodents in the house. Call and we'll line you up with a Cherokee County exterminator who can get out fast." },
    { q: 'Do new-construction homes in Holly Springs need pest control?', a: "Yes — sometimes more than older ones at first. Holly Springs' many new subdivisions sit on freshly graded soil that subterranean termites readily colonize, and new landscaping and irrigation add the moisture that draws ants, mosquitoes, and roaches. A recurring plan, plus documented termite protection, is smart insurance for a newly built home here." },
    { q: 'Will the treatments be safe around my kids and pets?', a: "Yes. Holly Springs pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will mention any short re-entry time — usually just until things dry." },
  ],

  finalCtaHeading: 'Get Your Free Holly Springs Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // Self-contained so the hub renders all six cards while the per-pest pages are
  // authored one at a time. Each href points at the Holly Springs service page;
  // a card links to a clean 404 until that page's pestPages entry exists below.
  // Blurbs are written fresh for Holly Springs (no reuse from Canton/Woodstock).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/holly-springs/termite-control/',
      blurb: "Cherokee County is one of the nation's heaviest termite zones — eastern subterranean plus Formosan in parts of metro Atlanta. Soil barriers, in-ground bait systems, and the Georgia termite letter when you sell." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/holly-springs/bed-bug-treatment/',
      blurb: "Bed bugs ride home from travel along the I-575 commute to Atlanta and spread fast. Whole-room heat or a targeted residual program clears every stage, with follow-up checks to confirm." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/holly-springs/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the humidity — gel baiting, crack-and-crevice work, and sanitation that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/holly-springs/mosquito-control/',
      blurb: "Mosquitoes are brutal across the metro — a top-five U.S. mosquito metro on Orkin's 2025 list — and shaded Holly Springs yards plus new-subdivision drainage give them places to breed. Yard barrier sprays and larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/holly-springs/rodent-control/',
      blurb: "When the nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion to seal the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/holly-springs/pest-control/',
      blurb: "Fire ants in the lawn, spiders in the garage, ants in the kitchen — one recurring quarterly plan covers the everyday pests a busy Holly Springs household faces, year-round." },
  ],

  // Per-pest pages are added ONE AT A TIME (build order: termite, mosquito,
  // general pest, cockroach, rodent, bed bug). Until an entry exists here, its hub
  // card links to a clean 404 rather than a half-built page. Each entry must be
  // written fresh for Holly Springs — no copy reused from the Georgia, national,
  // Canton, or Woodstock pages.
  pestPages: {
    'termite-control': {
      cardBlurb: "Cherokee County ranks among the worst U.S. termite zones. Soil barriers, in-ground baiting, new-construction wood treatment, and the Georgia termite letter for closings.",
      metaTitle: 'Termite Control in Holly Springs, GA | The Local Pest Pro',
      metaDesc: "Termite control in Holly Springs, GA — Cherokee County is a top U.S. termite zone. Soil barriers, bait systems & the Georgia termite letter. Free inspection.",
      h1: 'Termite Control in Holly Springs, GA',
      breadcrumbName: 'Termite Control',
      heroSub: "Holly Springs has put up thousands of new homes along the I-575 corridor over the past decade — and in one of the country's heaviest termite-pressure counties, every slab and crawlspace is a target for eastern subterranean termites. A licensed local pro can inspect, treat, and protect your home, and issue the Georgia termite letter when you buy or sell.",
      sections: [
        {
          heading: 'Holly Springs Sits in a High-Risk Termite Zone',
          paras: [
            "Cherokee County belongs to one of the most termite-prone regions in the United States, and Holly Springs feels the full brunt of it. Eastern subterranean termites work the soil throughout the area, foraging up through mud tubes into a home's sill plates, joists, and studs, while the aggressive Formosan termite has taken hold in parts of metro Atlanta. Mild winters are the catch: rather than going dormant, colonies here keep eating underground all twelve months, so the damage piles up quietly season after season.",
            "The city's building boom changes the math, too. Holly Springs has added thousands of homes along the I-575 corridor and around the Town Center area near Holly Springs Parkway and Hickory Road, and those newer slabs and crawlspaces sit on graded, moisture-holding soil that foraging colonies settle into easily — right next to older homes that have had decades for termites to find a way in. Since standard homeowners insurance almost never pays for termite damage, getting in front of it is the affordable move.",
          ],
        },
        {
          heading: 'The Warning Signs of Termites in a Holly Springs Home',
          paras: [
            "Termites are easy to overlook because they eat from the inside out. By the time most Holly Springs homeowners spot a problem, the colony has been busy for a while. Knowing the tells helps you catch it early:",
          ],
          bullets: [
            "Pencil-thin mud tubes climbing foundation walls, piers, or crawlspace supports",
            "Winged swarmers indoors in spring, or small heaps of shed, translucent wings on windowsills",
            "Trim, baseboards, or subfloor that sound hollow or papery when tapped",
            "Doors and windows that begin to stick as damaged wood warps",
            "Bubbling or uneven paint, or faint blistered lines tracking across drywall and trim",
          ],
        },
        {
          heading: 'How Local Pros Treat Termites Here',
          paras: [
            "A licensed inspector matches the method to your foundation, your soil, and how far the colony has spread — there's no single fix that fits every Holly Springs home:",
          ],
          cards: [
            { name: 'Soil-applied liquid barrier', text: "A non-repellent liquid termiticide is worked into the soil around and beneath the foundation, forming an unbroken treated zone that kills subterranean termites as they tunnel through it. A strong fit for the slab and crawlspace construction common across Holly Springs." },
            { name: 'In-ground baiting system', text: "Monitored stations ringed around the home use a slow-acting bait that foragers carry back to collapse the colony at its source. A clean choice for landscaped or wooded lots where digging a trench isn't practical." },
            { name: 'New-construction & wood treatments', text: "Borate treatments on exposed framing during a build or repair — routine in Holly Springs' growing subdivisions — guard bare lumber against termites and decay fungi for the life of the wood." },
            { name: 'Annual renewal & warranty', text: "A renewable termite bond with yearly re-inspections keeps protection live in a county where outside pressure never eases, so any fresh activity is caught and re-treated early." },
          ],
        },
        {
          heading: 'When Termites Swarm in Holly Springs',
          paras: [
            "The most visible moment in a termite's year is the swarm. On warm, humid spring days — frequently right after rain — mature subterranean colonies launch winged reproductives to pair off and start new nests. Indoors, they tend to gather at windows and sliding doors, pulled toward the light before they drop their wings.",
            "A swarm inside the house isn't a fluke; it points to an established colony close by. If you see swarmers or come across their discarded wings, book an inspection promptly instead of waiting — another season of feeding only deepens the damage.",
          ],
        },
        {
          heading: 'The Georgia Termite Letter for Holly Springs Closings',
          paras: [
            "With homes changing hands constantly along the I-575 corridor, the termite letter comes up in nearly every Holly Springs sale. Formally the Georgia Wood Infestation Inspection Report, it's generally required by the buyer's lender and closing attorney and records any evidence of termites or other wood-destroying organisms. Only an operator licensed by the Georgia Department of Agriculture may issue it, and it's usually completed close to the closing date.",
            "The pros in our directory handle Holly Springs termite inspections and produce the report, so a clean letter doesn't turn into the thing that stalls your closing.",
          ],
        },
        {
          heading: 'What Termite Treatment Costs Here',
          paras: [
            "Every home prices out a little differently. The number turns on your home's size and foundation type, whether the plan is a liquid barrier or a baiting system, and whether there's active termite work to reverse versus straightforward prevention. A termite letter for a closing is a separate, lighter-touch service. The pros in our directory open with a free inspection and put a written, property-specific quote in your hands before any treatment begins — and because termite damage usually isn't insured, treating early beats paying for repairs down the road.",
          ],
        },
      ],
      faqs: [
        { q: 'Are termites really that common in Holly Springs?', a: "Yes. Holly Springs is in Cherokee County, which sits inside one of the heaviest termite-pressure zones in the country. Eastern subterranean termites stay active across the area year-round thanks to the mild winters, and Formosan termites have established in parts of metro Atlanta. Most homes here benefit from either active treatment or a maintained termite bond." },
        { q: 'My Holly Springs home is brand new — could it already have termites?', a: "It can. New subdivisions are built on freshly graded soil that subterranean termites colonize with ease, and new framing is bare, untreated wood. Many builders apply a pre-treatment, but coverage varies and doesn't last forever. If you can't confirm documented, current termite protection on your newer home, an inspection is worth it." },
        { q: 'When should I watch for termite swarms in Holly Springs?', a: "Spring is prime swarm season — warm, humid days from roughly March through May, often right after rain. Swarmers indoors or shed wings on a windowsill almost always mean an active colony is nearby. That's the cue to schedule an inspection rather than wait it out." },
        { q: 'Do I need a termite letter to sell my Holly Springs home?', a: "It isn't required by state law, but lenders and closing attorneys nearly always ask for the Georgia Wood Infestation Inspection Report before a Cherokee County closing. A licensed local pro can run the inspection and issue the letter, usually near your closing date, so the sale keeps moving." },
        { q: 'Does insurance cover termite damage?', a: "Almost never. Insurers treat termite damage as preventable through maintenance, so standard homeowners policies leave it out. That's precisely why ongoing protection — a liquid barrier or bait system backed by an annual bond — is the cost-effective route in a high-pressure area like Holly Springs." },
      ],
      finalCtaHeading: 'Protect Your Holly Springs Home From Termites',
    },

    'mosquito-control': {
      cardBlurb: "Mosquitoes swarm across metro Atlanta — a top-five U.S. mosquito area — and shaded Holly Springs yards, parks, and subdivision drainage breed them all season. Barrier sprays and larviciding.",
      metaTitle: 'Mosquito Control in Holly Springs, GA | The Local Pest Pro',
      metaDesc: "Mosquito control in Holly Springs, GA — metro Atlanta is a top-five U.S. mosquito metro. Yard barrier sprays & larviciding through the long warm season. Free quote.",
      h1: 'Mosquito Control in Holly Springs, GA',
      breadcrumbName: 'Mosquito Control',
      heroSub: "Metro Atlanta ranks among the worst U.S. metros for mosquitoes, and Holly Springs' shaded suburban yards, city parks, and new-subdivision drainage give them plenty of places to breed. A licensed local pro can knock the biting population down and make your yard usable from spring through fall.",
      sections: [
        {
          heading: 'Why Mosquitoes Hit Holly Springs So Hard',
          paras: [
            "Mosquitoes need warmth, moisture, and a bit of standing water, and Holly Springs supplies all three for most of the year. The metro Atlanta area lands among the worst in the nation for mosquitoes — top five on Orkin's 2025 list — and the humid subtropical climate stretches the biting season from spring well into fall. Shaded, tree-lined yards hold exactly the cool, damp resting spots adult mosquitoes tuck into during the heat of the day.",
            "The city's rapid growth has added breeding sites that didn't exist a decade ago. New subdivisions bring retention ponds, drainage swales, and graded low spots that hold water after a Georgia downpour, and the area's several city parks and wooded edges supply still more. Since it takes only a capful of water to raise a brood, even a tidy Holly Springs yard can churn out mosquitoes — which is why treating resting areas and breeding sites together works far better than spraying yourself before you step outside.",
          ],
        },
        {
          heading: 'What Mosquito Season Looks Like in Holly Springs',
          paras: [
            "Mosquitoes generally appear in spring and don't quit until the first dependable cold snap, with the heaviest pressure through the hot, stormy stretch of summer. A few species drive most of the misery: the aggressive Asian tiger mosquito bites in broad daylight, not just at dawn and dusk, and breeds in small containers around the yard, while dusk-active house mosquitoes favor the stagnant water in drains and ditches.",
            "These bites aren't only an annoyance. Mosquitoes in the area can carry West Nile virus, which Georgia's public health agencies monitor every year, and they transmit heartworm to dogs — so trimming the population around your home is about protection as much as comfort, especially for kids, older adults, and pets.",
          ],
        },
        {
          heading: 'How the Pros Control Mosquitoes Here',
          paras: [
            "A licensed Holly Springs mosquito program targets the insects at every stage instead of masking the bites:",
          ],
          cards: [
            { name: 'Barrier treatments', text: "A residual application coats the shrubs, tree lines, fences, and shaded resting spots where adults wait out the day, then is refreshed roughly every three to four weeks to keep the biting population low." },
            { name: 'Larviciding', text: "The standing water you can't drain — retention ponds, drainage swales, low spots, and water features common in newer Holly Springs subdivisions — is treated to kill larvae before they ever take wing." },
            { name: 'Source reduction', text: "Your pro walks the property to find and clear the hidden water breeding mosquitoes, from a clogged gutter to a forgotten flowerpot saucer." },
            { name: 'Misting systems & event sprays', text: "Automated misting systems give larger lots hands-off, scheduled protection, and a one-time knockdown spray clears the yard before a graduation party or backyard cookout." },
          ],
        },
        {
          heading: 'Standing Water to Watch For Around Your Yard',
          paras: [
            "Between professional visits, getting rid of breeding water makes a real dent. The usual offenders around Holly Springs homes:",
          ],
          bullets: [
            "Gutters and downspouts that clog and pond after a thunderstorm",
            "Saucers under potted plants, buckets, watering cans, and kids' toys",
            "Tarps, trash-can lids, and wheelbarrows that collect rain",
            "Subdivision retention ponds, drainage swales, and graded low spots that stay wet",
            "Bird baths, fountains, and pet bowls left unrefreshed for several days",
          ],
        },
        {
          heading: 'Why a Seasonal Plan Beats DIY in Holly Springs',
          paras: [
            "Store-bought sprays, citronella candles, and clip-on repellents only cover the person wearing them, and a single DIY fogging wears off within a day. Because Holly Springs' long, humid season constantly resupplies mosquitoes from surrounding woods, parks, and neighboring yards, the dependable approach is a recurring barrier treatment paired with larviciding of the water on your own property — a combination that steadily pushes the population down across the season instead of chasing one swarm at a time.",
          ],
        },
        {
          heading: 'What Mosquito Control Costs Here',
          paras: [
            "Most Holly Springs homeowners choose a seasonal plan — recurring barrier treatments from spring through fall — priced by the size of the yard and how much shaded, vegetated habitat it holds. One-time event sprays and misting-system installations are priced on their own. Every pro in our directory looks at your specific property and gives you a free quote before any treatment begins, with no obligation.",
          ],
        },
      ],
      faqs: [
        { q: 'When does mosquito season start in Holly Springs?', a: "Mosquitoes usually turn active in spring as temperatures climb and stay out until the first dependable cold snap, often into October or later. The worst pressure runs through the hot, rainy heart of summer. Starting a seasonal plan early in spring keeps the population from building before it peaks." },
        { q: 'How often will the mosquito treatments need redoing?', a: "Barrier treatments are typically reapplied every three to four weeks during the active season, because the residual breaks down and fresh mosquitoes drift in from nearby woods, parks, and yards. Automated misting systems instead treat on a fixed schedule. Your pro will recommend a cadence for your property." },
        { q: 'Will a treatment get rid of every mosquito in my yard?', a: "No outdoor service wipes out 100% of them, but a professional barrier treatment combined with larviciding of your standing water usually cuts the population dramatically — enough to make the yard comfortable again. Removing breeding water between visits gives you the strongest result." },
        { q: 'Will mosquito treatments be safe for my kids, pets, and pollinators?', a: "Yes, when a licensed pro applies them. Technicians use EPA-registered products at label rates, focus on mosquito resting areas rather than blooming plants, and avoid treating when pollinators are active. Let treated surfaces dry — usually around 30 minutes — before kids and pets head back out." },
        { q: 'Do new Holly Springs subdivisions have worse mosquito problems?', a: "They can. New construction brings retention ponds, drainage swales, and graded low spots that hold water, and fresh landscaping and irrigation add moisture — all of it prime breeding habitat. Larviciding those water sources, paired with a yard barrier treatment, is the most effective response." },
      ],
      finalCtaHeading: 'Take Back Your Holly Springs Yard',
    },

    'pest-control': {
      cardBlurb: "One recurring quarterly plan covers fire ants, spiders, wasps, nuisance ants, and seasonal invaders across a busy Holly Springs home — year-round and guaranteed.",
      metaTitle: 'Holly Springs General Pest Control | The Local Pest Pro',
      metaDesc: "Recurring general pest control in Holly Springs, GA — fire ants, spiders, wasps, ants & occasional invaders on one year-round quarterly plan. Free local quote.",
      h1: 'General Pest Control in Holly Springs, GA',
      breadcrumbName: 'General Pest Control',
      heroSub: "Fire ants in the lawn, spiders in the garage, wasps under the eaves, ants marching across the kitchen counter — a busy Holly Springs household shouldn't have to chase each one separately. One recurring quarterly plan from a licensed local pro keeps the everyday pests out year-round.",
      sections: [
        {
          heading: 'One Plan for a Year-Round Pest Problem',
          paras: [
            "Holly Springs' humid subtropical climate — hot summers, mild winters, steady rain — means the everyday household pests never really clock out. As one of Cherokee County's fastest-growing suburbs, the city is full of busy families who'd rather not spend weekends fighting ants and wasps one can of spray at a time. A recurring general pest plan swaps that reactive scramble for a standing barrier that's refreshed before each pest's season arrives.",
            "Think of general pest control as the broad coverage layer for your home. It takes care of the wide range of nuisance pests that turn up around a Holly Springs property, while a handful of specialties — termites, mosquitoes, roaches, bed bugs, and rodents — are better served by their own dedicated programs, each covered on its own Holly Springs page linked below.",
          ],
        },
        {
          heading: 'Fire Ants: A Holly Springs Lawn Reality',
          paras: [
            "If you have a yard in Holly Springs, you almost certainly have fire ants. Red imported fire ants are present throughout the area, and their dome-shaped mounds erupt across subdivision lawns, common areas, and the edges of the city's parks — often fastest in the sunny, open turf of newer neighborhoods. Their stings burn and swell, and they're a real hazard for small kids, pets, and anyone with an allergy.",
            "Knocking fire ants back takes more than stomping a mound. A pro generally pairs a broadcast bait that worker ants carry underground to kill the queen with targeted mound treatments for fast relief and a perimeter barrier to slow re-invasion — the layered, repeated approach a recurring plan is designed to deliver.",
          ],
        },
        {
          heading: 'The Everyday Pests a Holly Springs Plan Covers',
          paras: [
            "Beyond fire ants, a general plan keeps the common Holly Springs invaders in check:",
          ],
          cards: [
            { name: 'Nuisance ants', text: "Odorous house ants, Argentine ants, and wood-damaging carpenter ants trail indoors toward food and moisture. Exterior treatment and entry-point work stop the parade before it reaches the kitchen." },
            { name: 'Spiders', text: "Most are harmless, but black widows and brown widows tuck into garages, woodpiles, meter boxes, and patio furniture. Treatment clears webs and harborage along with the insects spiders hunt." },
            { name: 'Stinging wasps & yellowjackets', text: "Paper wasps and yellowjackets nest under eaves, on decks, and in the ground, peaking dangerously in late summer. Pros remove active nests and treat the spots they keep rebuilding." },
            { name: 'Occasional invaders', text: "Silverfish, millipedes, centipedes, earwigs, crickets, and seasonal stink bugs and ladybugs push inside as the weather turns. A maintained exterior barrier keeps most of them outdoors." },
          ],
        },
        {
          heading: 'How a Quarterly Plan Works',
          paras: [
            "A typical Holly Springs general pest program runs on a simple rhythm:",
          ],
          bullets: [
            "A detailed first visit that treats the interior trouble spots and establishes a protective barrier outside",
            "Quarterly exterior service after that, timed to refresh the barrier before each season's pests get moving",
            "De-webbing of eaves and entryways and removal of reachable wasp nests on every visit",
            "Fire ant and nuisance-ant control across the lawn and along the foundation line",
            "Free re-service between scheduled visits if pests return — the guarantee most local pros stand behind",
          ],
        },
        {
          heading: 'Why Quarterly Beats One-Off Spraying Here',
          paras: [
            "Different pests crest at different times in Holly Springs — ants and wasps through spring and summer, spiders and the first invaders in fall, the odd indoor pest all winter. A single treatment can't stay ahead of that rolling schedule. Quarterly service times each visit to interrupt the next wave, so the barrier is freshest exactly when it's needed — which, across a full year, is both more effective and far less hassle than reacting one infestation at a time.",
          ],
        },
        {
          heading: 'What a Recurring Plan Costs Here',
          paras: [
            "General pest plans are usually billed per quarterly visit and priced by your home's size and how much pest pressure your lot sees, often starting with a more thorough initial service before regular maintenance begins. Per visit, it typically runs well below a one-off emergency call. The pros in our directory quote your specific Holly Springs property for free and back the plan with a re-service guarantee, so you know the coverage and the price before you commit.",
          ],
        },
      ],
      faqs: [
        { q: 'What does a general pest control plan cover in Holly Springs?', a: "It covers the everyday household pests — fire ants and other ants, spiders, wasps and yellowjackets, silverfish, millipedes, crickets, and seasonal invaders like stink bugs and ladybugs. The specialty pests — termites, mosquitoes, roaches, bed bugs, and rodents — are handled by dedicated programs, each on its own Holly Springs page." },
        { q: 'How often should general pest control be done here?', a: "Quarterly — every three months — is the standard in Holly Springs, because the mild climate keeps pests active nearly year-round. Each visit refreshes the protective barrier ahead of the next season's pressure. A specific problem may warrant an extra visit, which your pro will flag." },
        { q: 'How do I get rid of the fire ants in my Holly Springs yard?', a: "The reliable method pairs a broadcast bait that workers carry down to kill the queen with direct mound treatments for fast knockdown and a perimeter barrier to slow new arrivals. Because fire ants are present throughout the area, keeping a yard clear is an ongoing job — which is exactly why it's folded into a recurring plan." },
        { q: 'Is there a contract, and what happens if pests come back?', a: "Most Holly Springs plans are quarterly and carry a guarantee: if covered pests return between visits, the pro re-treats at no extra charge. Specific terms vary by provider, and the pro who quotes your home will spell out the plan, the guarantee, and any commitment before you start." },
        { q: 'Is a recurring plan safe to use around kids and pets?', a: "Yes. Holly Springs pros apply EPA-registered products at label rates and offer family- and pet-safe options, concentrating treatment on the exterior, entry points, and cracks and crevices rather than across your living space. Your technician notes any brief re-entry time, usually just until things dry." },
      ],
      finalCtaHeading: 'Get Year-Round Pest Protection in Holly Springs',
    },
  },
};
