'use strict';

const woodstockGa = require('./cities/woodstock-ga');

// ── State landing pages ──────────────────────────────────────────────────────
// Each state hub is a single, consumer-focused, SEO page that covers every pest
// in that state. We deliberately DO NOT build individual pest pages per state —
// the dedicated /<service>/ pages (data/services.js) are the "national" pages
// that every state hub links into. A state page therefore needs no county grid
// and no per-pest sub-pages; it ranks for "<pest> control <state>" intent on its
// own and routes the click either to the matching national service page or to
// the shared (844) directory line.
//
// Contractor assignment in LeadPortal is county-level, so a STATE page has no
// single assigned contractor — it always shows the shared (844) directory
// number (SITE.PHONE). County/city contractor routing happens on deeper pages.
//
// Cities: the `cities` array is the "Cities We Service" section. It starts small
// and grows ONE AT A TIME as coverage expands — add an entry here and the page
// re-renders. An entry is { name } (rendered as a plain badge) or
// { name, href } once a dedicated city page exists. When the array is empty the
// section renders a statewide fallback message instead of an empty grid.

// ── Canonical pest set ───────────────────────────────────────────────────────
// EVERY state page renders these same six pests, in this order — identical to
// the six service categories on the homepage (views/index.ejs), each with a
// dedicated national /<service>/ page (data/services.js). General Pest Control
// is the catch-all that covers ants, spiders, wasps, fleas/ticks, etc. — so we
// do NOT add separate cards for those. A state may override `pests` to localize
// the blurb copy, but it must keep the same six categories, emojis, hrefs, and
// order so the page stays consistent with the homepage. A state that omits
// `pests` falls back to this set (see views/state.ejs).
const DEFAULT_PESTS = [
  {
    emoji: '🐛',
    name: 'Termite Treatment',
    href: '/termite-control/',
    blurb: "Liquid soil barriers, in-ground bait stations, and annual inspections stop subterranean and Formosan termites before they damage your home's structure.",
  },
  {
    emoji: '🛏️',
    name: 'Bed Bug Treatment',
    href: '/bed-bug-treatment/',
    blurb: "Whole-room heat treatment and targeted residual programs eliminate bed bugs at every life stage, with follow-up verification.",
  },
  {
    emoji: '🪳',
    name: 'Cockroach Control',
    href: '/cockroach-control/',
    blurb: "Gel baiting and crack-and-crevice treatment clear German roaches indoors and smokybrown/American 'palmetto bugs' outdoors — and keep them from returning.",
  },
  {
    emoji: '🦟',
    name: 'Mosquito Control',
    href: '/mosquito-control/',
    blurb: "Yard barrier treatments and standing-water larvicide knock down mosquitoes and make your outdoor space usable through the warm season.",
  },
  {
    emoji: '🐀',
    name: 'Rodent Control',
    href: '/rodent-control/',
    blurb: "Ongoing baiting, monitoring, and sealing entry points keeps roof rats, Norway rats, and house mice out as part of a recurring program.",
  },
  {
    emoji: '🐌',
    name: 'General Pest Control',
    href: '/pest-control/',
    blurb: "One recurring plan covers ants, spiders, wasps, fleas, silverfish, and the other common household pests — treating today's problem and preventing the next.",
  },
];

const GEORGIA = {
  name: 'Georgia',
  slug: 'georgia',
  abbr: 'GA',

  // ── SEO ──
  metaTitle: 'Pest Control in Georgia | Local Exterminators Near You',
  metaDesc:
    "Licensed pest control across Georgia — termites, fire ants, roaches, mosquitoes, bed bugs, rodents & more. Georgia's warm, humid climate means year-round pressure. Call for a free local quote.",

  heroSub:
    "Georgia's warm, humid climate keeps pests active nearly year-round — from termite swarms in spring to mosquitoes all summer and rodents seeking shelter each fall. Connect with a licensed local exterminator who knows Georgia pests and treats them fast.",

  // Multi-paragraph overview (consumer + SEO). Each string is one <p>.
  overview: [
    "Few states give pests a better home than Georgia. The humid subtropical climate — long, hot summers, mild winters, and abundant rainfall from the mountains to the coast — means most pests here never get a true off-season. Where colder states get a winter reprieve, Georgia homeowners face termites, ants, roaches, and rodents close to year-round, which is why a recurring pest-control plan usually beats one-off treatments in this state.",
    "Georgia also sits in one of the highest termite-pressure zones in the country. Eastern subterranean termites are active statewide, and aggressive Formosan termites have established along the coast and in parts of metro Atlanta. Combine that with red imported fire ants in nearly every county, German and smokybrown cockroaches, and some of the worst urban mosquito pressure in the nation — Atlanta routinely lands on national 'worst for mosquitoes' lists — and most Georgia homes benefit from professional protection.",
    "Every pro in our directory is a licensed, insured Georgia exterminator who provides a free, property-specific quote before any work begins. One call connects you with someone who knows your area's pest pressure and the fastest, safest way to deal with it.",
  ],

  // Regulatory trust signal (authority + accuracy).
  regulationNote:
    "Pest control in Georgia is licensed and regulated by the <strong>Georgia Department of Agriculture</strong> through the Structural Pest Control Commission. Every contractor in this directory is licensed to operate in the state and applies EPA-registered products at label rates.",

  // The canonical six pests (see DEFAULT_PESTS), with Georgia-localized blurbs.
  // Keep the same six categories / order as DEFAULT_PESTS (and the homepage) —
  // only the copy is localized here.
  pests: [
    {
      emoji: '🐛',
      name: 'Termite Treatment',
      href: '/termite-control/',
      blurb:
        "Georgia is a top-tier termite state. Liquid soil barriers, in-ground bait stations, and annual inspections stop subterranean and Formosan termites before they damage your home's structure.",
    },
    {
      emoji: '🛏️',
      name: 'Bed Bug Treatment',
      href: '/bed-bug-treatment/',
      blurb:
        "Atlanta appears on national bed bug lists every year. Whole-room heat treatment and targeted residual programs eliminate bed bugs at every life stage, with follow-up verification.",
    },
    {
      emoji: '🪳',
      name: 'Cockroach Control',
      href: '/cockroach-control/',
      blurb:
        "German roaches indoors and smokybrown/American 'palmetto bugs' outdoors thrive in Georgia's humidity. Gel baiting and crack-and-crevice treatment clear them and keep them from returning.",
    },
    {
      emoji: '🦟',
      name: 'Mosquito Control',
      href: '/mosquito-control/',
      blurb:
        "Metro Atlanta consistently ranks among the worst US cities for mosquitoes. Yard barrier treatments and standing-water larvicide make your outdoor space usable through Georgia's long season.",
    },
    {
      emoji: '🐀',
      name: 'Rodent Control',
      href: '/rodent-control/',
      blurb:
        "Roof rats, Norway rats, and house mice push indoors as Georgia nights cool. Ongoing baiting, monitoring, and sealing entry points keeps them out as part of a recurring program.",
    },
    {
      emoji: '🐌',
      name: 'General Pest Control',
      href: '/pest-control/',
      blurb:
        "One quarterly plan covers fire ants, spiders, wasps, fleas, silverfish, and the other common Georgia household pests — knocking down today's problem and preventing the next.",
    },
  ],

  // ── State-specific pest pages ────────────────────────────────────────────
  // Fully localized, UNIQUE content per pest — no copy reused across these
  // pages or from the national /<service>/ pages. Keyed by service slug and
  // rendered by views/state-service.ejs at /georgia/<slug>/. The hub cards
  // (st.pests) link here automatically when an entry exists. Facts grounded in
  // GA Dept. of Agriculture, UGA Extension, GA DPH, Orkin/Terminix rankings.
  pestPages: {
    'termite-control': {
      metaTitle: 'Georgia Termite Treatment | Free Inspection & Termite Letter',
      metaDesc: "Georgia sits in the nation's heaviest termite zone. Get a free local inspection, liquid or bait treatment, and your Official Georgia termite letter. Call now.",
      h1: 'Termite Treatment in Georgia',
      breadcrumbName: 'Termite Treatment',
      heroSub: "Georgia is prime termite country — humid, mild, and home to both Eastern subterranean and aggressive Formosan termites. Get a licensed local exterminator to inspect, treat, and protect your home — plus the Official Georgia Wood Infestation Report when you're buying or selling.",
      sections: [
        {
          heading: 'Why Georgia Is One of the Worst States for Termites',
          paras: [
            "Georgia falls squarely inside the U.S. 'Termite Belt,' the warm, humid band of the Southeast where termite pressure is rated heavy to very heavy. Mild winters mean termite colonies in Georgia never fully shut down — they keep feeding underground 12 months a year, while homeowners in colder states get a seasonal break.",
            "Two destructive termites do the most damage here. Eastern subterranean termites are found throughout Georgia, nesting in the soil and tunneling up through mud tubes into floor joists, sills, and framing. Aggressive Formosan subterranean termites — nicknamed 'super termites' for the size of their colonies — have established in coastal Georgia (Savannah and the coast) and pockets of metro Atlanta, and they hollow out structural wood far faster than native species.",
          ],
        },
        {
          heading: 'Termite Swarm Season in Georgia',
          paras: [
            "The first sign most Georgians see is a swarm. On warm spring days — typically February through May, often right after rain — subterranean termites release winged 'swarmers' to start new colonies. Formosan termites swarm a little later, on humid evenings in late spring and early summer, and are strongly drawn to lights.",
            "Finding swarmers indoors, or little piles of discarded wings on windowsills and around door frames, almost always means an active colony is nearby — not a passing nuisance. It's the cue to get an inspection right away, before another season of hidden feeding.",
          ],
        },
        {
          heading: 'The Georgia Termite Letter (Official Wood Infestation Inspection Report)',
          paras: [
            "If you're buying or selling a home in Georgia, you'll run into the 'termite letter.' Its official name is the Official Georgia Wood Infestation Inspection Report (WIIR), and most lenders and closing attorneys require it. It documents evidence of active or previous infestation by five wood-destroying organisms: subterranean termites, drywood termites, powderpost beetles, other wood-boring beetles, and wood-decay fungi.",
            "Only a pest control operator licensed by the Georgia Department of Agriculture's Structural Pest Control program can issue the official report. The inspection generally must be performed within 30 days of closing, and the report carries a 90-day guarantee — if a covered infestation that was certified clear turns up within 90 days, the issuing company provides a minimum adequate treatment at no charge. Every pro in our directory is licensed to perform Georgia termite inspections and issue the WIIR.",
          ],
        },
        {
          heading: 'Termite Treatment Options for Georgia Homes',
          paras: [
            "Georgia's mix of slab homes, crawlspaces, and heavy clay soils means the right treatment depends on your home. A licensed inspector will recommend one or a combination of the following:",
          ],
          cards: [
            { name: 'Liquid termiticide barrier', text: "A non-repellent termiticide is trenched into the soil around your foundation, creating a continuous treated zone that eliminates subterranean termites as they tunnel through it. The standard for both prevention and active infestations." },
            { name: 'In-ground bait stations', text: "Stations placed around the perimeter use a slow-acting bait that foragers carry back to wipe out the entire colony, then are monitored on a recurring schedule — a low-disruption option that suits Georgia crawlspaces and landscaping." },
            { name: 'Formosan-specific treatment', text: "Because Formosan colonies are so large, coastal and metro Atlanta infestations often need an intensive combination of liquid barrier and baiting, plus direct treatment of any aerial nests." },
            { name: 'Wood & borate treatments', text: "Borates applied to exposed framing — common during repairs or new construction — protect bare wood from termites and decay fungi for the life of the wood." },
            { name: 'Annual renewal & warranty', text: "Most Georgia companies back treatment with a renewable termite bond and yearly re-inspections, so any new activity is caught and re-treated before it becomes costly damage." },
          ],
        },
        {
          heading: 'What Termite Treatment Costs in Georgia',
          paras: [
            "There's no flat price — cost depends on your home's size and foundation type, the termite species, the method (liquid barrier vs. bait system), and whether there's existing damage to address. Liquid treatments are usually priced by the linear foot of foundation, while bait systems combine an installation fee with annual monitoring. A standalone termite letter for a real estate closing is priced separately and is relatively inexpensive.",
            "Every contractor in our directory starts with a free inspection and gives you a written, property-specific quote before any work begins — so you'll know your exact cost up front, with no surprises.",
          ],
        },
      ],
      faqs: [
        { q: 'When do termites swarm in Georgia?', a: "Subterranean termites typically swarm on warm, humid days from February through May, often just after rain. Formosan termites swarm later — on humid evenings in late spring and early summer — and are attracted to lights. Seeing swarmers or discarded wings indoors is a strong sign of an active colony and a reason to schedule an inspection right away." },
        { q: 'Is a termite letter required to buy or sell a home in Georgia?', a: "It isn't a state law, but most mortgage lenders and closing attorneys require the Official Georgia Wood Infestation Inspection Report (the 'termite letter') before closing. The inspection usually must be done within 30 days of closing and is issued by a pest operator licensed by the Georgia Department of Agriculture." },
        { q: 'How much does termite treatment cost in Georgia?', a: "It varies with your home's size and foundation, the termite species, and the treatment method. Liquid barriers are priced by linear footage; bait systems combine installation with annual monitoring. You'll get a free inspection and an exact written quote before any work starts. A termite letter for a closing is a separate, lower-cost service." },
        { q: "What's the difference between a liquid treatment and bait stations?", a: "A liquid termiticide creates a treated barrier in the soil around your home that kills termites passing through it. Bait stations use a slow-acting bait that foraging termites carry back to eliminate the whole colony, with ongoing monitoring. In Georgia many homes use one or the other; heavy or Formosan infestations sometimes use both. Your inspector will recommend the best fit." },
        { q: 'Are termite treatments safe for my family and pets?', a: "Yes. Georgia-licensed technicians use EPA-registered termiticides and baits applied at label rates, with most product placed in the soil or in sealed stations around the exterior. Your technician will explain any brief precautions for the application." },
        { q: 'Does homeowners insurance cover termite damage in Georgia?', a: "Almost never. Insurers consider termite damage preventable through maintenance, so standard policies exclude it. That's why an active treatment plus an annual renewable bond is worthwhile — it's far cheaper than the structural repairs Georgia's termites can cause." },
      ],
      finalCtaHeading: 'Protect Your Georgia Home From Termites',
    },

    'mosquito-control': {
      metaTitle: 'Georgia Mosquito Control | Reclaim Your Backyard',
      metaDesc: "Atlanta led the nation's mosquito list six years straight. Reclaim your yard with licensed Georgia mosquito control — barrier sprays & larvicide. Free quote, call now.",
      h1: 'Mosquito Control in Georgia',
      breadcrumbName: 'Mosquito Control',
      heroSub: "Hot, humid, and rainy for half the year, Georgia is one of the most mosquito-plagued states in the country — metro Atlanta led Orkin's national mosquito-cities list six years in a row. Licensed local mosquito control can give your yard back from spring through fall.",
      sections: [
        {
          heading: "Why Georgia's Mosquitoes Are So Bad",
          paras: [
            "Mosquitoes need just three things to thrive — warmth, moisture, and standing water — and Georgia delivers all three from March well into October. Long, hot summers, frequent rain, and humidity make the state a year-after-year hotspot. Metro Atlanta ranked #1 on Orkin's national Top Mosquito Cities list for six consecutive years (2015–2020) and still sits among the top five.",
            "It takes only a bottle cap of water for mosquitoes to breed, so even tidy Georgia yards produce them — clogged gutters, plant saucers, tarps, toys, and bird baths are all it takes. That's why knocking down adults and treating breeding sites together works far better than a can of repellent.",
          ],
        },
        {
          heading: 'Mosquito-Borne Disease in Georgia',
          paras: [
            "Georgia mosquitoes aren't just an itchy nuisance. The Georgia Department of Public Health tracks West Nile virus across the state every year, with risk usually peaking from late August into September. Mosquitoes here can also transmit Eastern equine encephalitis and La Crosse encephalitis, and the Asian tiger mosquito — an aggressive daytime biter common throughout Georgia — is a capable disease vector.",
            "Reducing the mosquito population around your home isn't only about comfort; it lowers the chance of a bite that matters, especially for kids, older adults, and pets — mosquitoes also transmit heartworm to dogs.",
          ],
        },
        {
          heading: "The Mosquitoes You'll Meet in Georgia",
          cards: [
            { name: 'Asian tiger mosquito', text: "Black-and-white striped, aggressive, and active during the day — not just dawn and dusk. It breeds in small containers around the yard, which makes source reduction essential." },
            { name: 'Southern house mosquito', text: "A dusk-to-dawn biter that breeds in stagnant, polluted water like storm drains and ditches, and a primary carrier of West Nile virus in the Southeast." },
            { name: 'Yellow fever mosquito', text: "A container-breeding daytime biter present in parts of Georgia, closely associated with human dwellings and capable of transmitting several viruses." },
          ],
        },
        {
          heading: 'How Professional Mosquito Control Works',
          paras: [
            "A licensed Georgia mosquito program attacks the problem at every stage rather than just masking bites:",
          ],
          bullets: [
            "Barrier sprays — a residual treatment applied to shrubs, tree lines, and shaded resting spots where adult mosquitoes hide, reapplied roughly every three to four weeks through the season",
            "Larviciding — treating standing water you can't drain (drains, low spots, water features) to kill larvae before they become biting adults",
            "Source reduction — finding and eliminating the hidden breeding sites around your property",
            "Automated misting systems — for properties that want hands-off, scheduled protection",
            "Special-event sprays — a one-time knockdown before a wedding, party, or cookout",
          ],
        },
        {
          heading: 'Cut Mosquitoes Around Your Georgia Home',
          bullets: [
            "Empty or refresh anything that holds water weekly — saucers, buckets, toys, tarps, bird baths",
            "Keep gutters clean and flowing so they don't pond",
            "Change pet water and bird-bath water every few days",
            "Stock ornamental ponds with mosquito fish or use larvicide dunks",
            "Trim dense vegetation where adults rest during the heat of the day",
          ],
        },
        {
          heading: 'What Mosquito Control Costs in Georgia',
          paras: [
            "Most Georgia homeowners use a seasonal plan — recurring barrier treatments from spring through fall — priced by yard size and how much shaded, vegetated habitat you have. One-time event sprays and misting-system installs are priced separately. Every pro in our directory will quote your property for free, so you know the cost before you commit.",
          ],
        },
      ],
      faqs: [
        { q: 'When does mosquito season start in Georgia?', a: "In most of Georgia mosquitoes become active in March as temperatures warm and stay active into October or later, with the worst pressure in the hot, rainy months of June through September. A seasonal plan that starts in early spring keeps the population down before it peaks." },
        { q: 'How often do you need mosquito treatments?', a: "Barrier treatments are typically reapplied every three to four weeks during the active season, because the residual wears off and new mosquitoes move in. Automated misting systems treat on a set schedule. Your pro will recommend a cadence based on your yard." },
        { q: 'Are mosquito treatments safe for kids, pets, and pollinators?', a: "Yes, when applied by a licensed professional. Technicians use EPA-registered products at label rates, target mosquito resting areas rather than blooming plants, and avoid treating when bees are active. Let treated areas dry before kids and pets return — usually about 30 minutes." },
        { q: 'Will treatment get rid of every mosquito?', a: "No outdoor service eliminates 100% of mosquitoes, but professional barrier treatment plus breeding-site control typically reduces the population dramatically — enough to make your yard comfortable again. Pairing it with source reduction (emptying standing water) gives the best results." },
        { q: 'Do I really need professional mosquito control in Georgia?', a: "Given how long and intense Georgia's mosquito season is — plus the presence of West Nile virus and aggressive daytime-biting Asian tiger mosquitoes — many homeowners find store-bought sprays and candles aren't enough. Professional barrier treatment and larviciding address the source, not just the bites." },
      ],
      finalCtaHeading: 'Take Back Your Georgia Yard',
    },

    'cockroach-control': {
      metaTitle: 'Cockroach & Palmetto Bug Control in Georgia | Guaranteed',
      metaDesc: "German roaches inside, palmetto bugs out — Georgia's humidity feeds roaches year-round. Get licensed, guaranteed cockroach control. Pet-safe. Free quote — call now.",
      h1: 'Cockroach Control in Georgia',
      breadcrumbName: 'Cockroach Control',
      heroSub: "Georgia's heat and humidity make it roach paradise — from German cockroaches breeding in kitchens to the big 'palmetto bugs' that wander in from outside. A licensed local pro can clear an infestation and keep it from coming back, usually with a guarantee.",
      sections: [
        {
          heading: "The 5 Cockroaches You'll Find in Georgia",
          paras: [
            "According to University of Georgia entomologists, five cockroach species are common across the state. Knowing which one you have matters, because indoor breeders and outdoor invaders are treated very differently.",
          ],
          cards: [
            { name: 'German cockroach', text: "Small (about ½ inch), tan with two dark stripes behind the head. The most serious indoor pest — it breeds rapidly in kitchens and bathrooms and signals a true infestation. Almost never originates outdoors." },
            { name: 'American cockroach (palmetto bug)', text: "Georgia's largest common roach at up to ~2 inches, reddish-brown. Lives in sewers, drains, crawlspaces, and mulch and wanders indoors — one of the roaches Georgians call a 'palmetto bug.'" },
            { name: 'Smokybrown cockroach', text: "A large, glossy dark roach and the other classic Georgia 'palmetto bug.' It loves moist, shaded spots — mulch beds, tree holes, gutters, and attics — and is a strong flier drawn to lights." },
            { name: 'Oriental cockroach', text: "Dark, almost black, and tied to damp areas — crawlspaces, drains, and basements. Often called a 'water bug,' it gives off a notably musty odor." },
            { name: 'Asian cockroach', text: "Looks like a German roach but lives outdoors in leaf litter and lawns, flies well, and is attracted to light at dusk — so it tends to fly toward lit doors and windows on Georgia evenings." },
          ],
        },
        {
          heading: "'Palmetto Bug' vs. Roach: What Georgians Are Really Seeing",
          paras: [
            "'Palmetto bug' isn't a species — UGA's urban entomologists note it's a catch-all Southerners use for the big roaches, mainly the smokybrown and American cockroach (and sometimes the Oriental). These are 'peridomestic' roaches that live outdoors and wander in, which is why you can see large roaches even in a spotless home.",
            "The German cockroach is the one that should worry you most. It lives and breeds indoors, multiplies fast, and rarely comes from outside — so seeing them usually means an established infestation that needs professional treatment, not just a perimeter spray.",
          ],
        },
        {
          heading: 'Why Roaches Thrive in Georgia',
          paras: [
            "Roaches want warmth, moisture, and food, and Georgia hands them all three. Long humid summers, frequent rain, pine-straw and mulch landscaping, crawlspaces, and aging sewer and storm-drain systems give peridomestic roaches endless harborage right against the house. Indoors, kitchen grease, pet food, cardboard, and plumbing leaks keep German roaches fed and breeding year-round.",
          ],
        },
        {
          heading: 'How the Pros Get Rid of Roaches',
          paras: [
            "Effective cockroach control depends entirely on the species:",
          ],
          cards: [
            { name: 'German roach (indoor)', text: "Targeted gel baiting in cracks and crevices, insect growth regulators to stop reproduction, monitoring, and sanitation guidance. Foggers and over-the-counter sprays usually scatter them and make it worse." },
            { name: 'Palmetto bugs (outdoor)', text: "A perimeter barrier treatment, treatment and exclusion of harborage (mulch, woodpiles, gutters, crawlspaces), and sealing entry points so the big roaches can't wander in." },
            { name: 'Ongoing protection', text: "Because Georgia's outdoor roach pressure never really stops, most homeowners pair an initial cleanout with recurring quarterly service — typically backed by a re-treat guarantee between visits." },
          ],
        },
        {
          heading: "Roaches and Your Family's Health",
          paras: [
            "Cockroaches aren't just unpleasant. German cockroach droppings and shed skins are a well-documented trigger for asthma and allergies, especially in children, and roaches can spread bacteria like Salmonella across kitchen surfaces as they travel from drains and garbage to your counters. Clearing an infestation is a health upgrade, not just a comfort one.",
          ],
        },
        {
          heading: 'What Cockroach Control Costs in Georgia',
          paras: [
            "Cost depends on the species, the size of the infestation, and your home. A German cockroach cleanout may take an initial treatment plus a follow-up or two; outdoor palmetto-bug control is often folded into a recurring perimeter plan. Every pro in our directory inspects and quotes for free, and most guarantee the work — so you'll know the price and the plan up front.",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I see big roaches even though my house is clean?', a: "Those large roaches are usually 'palmetto bugs' — smokybrown or American cockroaches — that live outdoors in mulch, gutters, sewers, and crawlspaces and wander inside. They're not a sign of poor housekeeping; in Georgia's climate they're right up against every home. A perimeter barrier plus sealing entry points keeps them out." },
        { q: "What's the difference between a palmetto bug and a cockroach?", a: "'Palmetto bug' is just a regional nickname for large roaches, mainly the smokybrown and American cockroach — they are cockroaches. The important distinction is indoor vs. outdoor: German cockroaches breed indoors and signal an infestation, while palmetto bugs are outdoor roaches that come in from the yard." },
        { q: 'Are palmetto bugs dangerous?', a: "They don't bite or sting, but like all cockroaches they can carry bacteria from drains and garbage onto surfaces and can trigger allergies. They're more of a sanitation and nuisance concern than a direct threat — but a large, recurring presence indoors is worth treating." },
        { q: 'Do I need recurring service or is one treatment enough?', a: "A German cockroach infestation can often be cleaned out with an initial treatment and a follow-up. Outdoor palmetto bugs are different — because Georgia's outdoor roach pressure is constant, ongoing quarterly perimeter service is the reliable way to keep them out, usually with a guarantee between visits." },
        { q: 'Is cockroach treatment safe for kids and pets?', a: "Yes. Licensed Georgia technicians use targeted gel baits and EPA-registered products placed in cracks, crevices, and exterior areas rather than broadcast across living space, and they'll advise on any short precautions. It's both safer and more effective than store-bought foggers." },
      ],
      finalCtaHeading: 'Clear the Roaches From Your Georgia Home',
    },

    'bed-bug-treatment': {
      metaTitle: 'Bed Bug Treatment in Georgia | Heat & Guaranteed',
      metaDesc: "Atlanta ranks among the worst U.S. cities for bed bugs. Get discreet, guaranteed Georgia bed bug treatment — heat or conventional. Free inspection, call now.",
      h1: 'Bed Bug Treatment in Georgia',
      breadcrumbName: 'Bed Bug Treatment',
      heroSub: "Bed bugs are a stubborn, fast-spreading problem in Georgia — and metro Atlanta consistently lands on the nation's worst-cities lists. A licensed local pro can wipe them out at every life stage with heat or conventional treatment, discreetly and with a guarantee.",
      sections: [
        {
          heading: 'Bed Bugs Are a Real Problem in Georgia',
          paras: [
            "Atlanta ranks among the most bed-bug-infested metros in the country — Terminix placed it 6th nationally in its 2025 survey, and it appears every year on Orkin's Top 50 list. Bed bugs don't care how clean or new a home is; they spread on people and belongings, which makes a busy, mobile state like Georgia a perfect place for them.",
            "With Hartsfield-Jackson Atlanta International — the world's busiest airport — major universities like UGA, Georgia Tech, and Georgia State, and dense apartment communities across metro Atlanta, bed bugs hitchhike constantly between hotels, dorms, rentals, and homes. Catching them early makes treatment faster and cheaper.",
          ],
        },
        {
          heading: 'How to Tell If You Have Bed Bugs',
          paras: [
            "Bed bugs are small (about apple-seed size), flat, and reddish-brown, and they hide near where you sleep. Look for:",
          ],
          bullets: [
            "Rows or clusters of small, itchy bites, often on skin exposed during sleep",
            "Tiny rust- or blood-colored spots on sheets, mattress seams, and pillowcases",
            "Dark, pepper-like fecal spots along mattress seams, box springs, and headboards",
            "Pale shed skins, and in heavy cases a sweet, musty odor",
            "Live bugs in mattress seams, behind the headboard, in nightstands, and along baseboards",
          ],
        },
        {
          heading: 'How Bed Bugs Get Into Georgia Homes',
          paras: [
            "Bed bugs are hitchhikers, not a hygiene problem. They most often arrive on luggage after a hotel stay, on secondhand furniture and mattresses, in moving boxes, or by spreading between units in apartments and condos. Once inside, a few bugs can become an infestation in weeks because each female can lay hundreds of eggs.",
          ],
        },
        {
          heading: 'Professional Bed Bug Treatment Options',
          cards: [
            { name: 'Whole-room heat treatment', text: "Specialized equipment raises the room to a temperature lethal to bed bugs and their eggs, killing every life stage in a single day — including bugs hidden deep in walls and furniture. Often the fastest, most thorough option." },
            { name: 'Conventional (residual) treatment', text: "A targeted program of EPA-registered residual products and follow-up visits that eliminates bed bugs over a few weeks, frequently combined with steam and mattress encasements." },
            { name: 'Inspection & monitoring', text: "Trained technicians — sometimes with K-9 detection — confirm the infestation, find every harborage, and verify success with follow-up checks so nothing is missed." },
            { name: 'Prep & encasements', text: "Your pro provides a prep checklist and may install mattress and box-spring encasements that trap remaining bugs and make future monitoring easy." },
          ],
        },
        {
          heading: 'Why DIY Bed Bug Treatment Usually Fails',
          paras: [
            "Store-bought sprays and foggers are one of the main reasons bed bugs spread. Many populations are resistant to the common pyrethroid insecticides in over-the-counter products, foggers don't reach the cracks where bugs hide, and disturbing them often just scatters the infestation into neighboring rooms — or neighboring apartments. Professional heat and residual programs reach the eggs and hiding spots DIY can't.",
          ],
        },
        {
          heading: 'What Bed Bug Treatment Costs in Georgia',
          paras: [
            "Cost depends on the size of the home, how many rooms are affected, and whether you choose heat or a conventional program. Treating one room early costs far less than a whole-home infestation that's had months to spread — another reason to act fast. Every pro in our directory offers a discreet inspection and a clear written quote, and most guarantee their bed bug work.",
          ],
        },
      ],
      faqs: [
        { q: 'How do I know if I have bed bugs?', a: "Common signs are itchy bites in rows or clusters, small blood or rust-colored spots on bedding, dark fecal specks along mattress seams and the headboard, pale shed skins, and live apple-seed-sized bugs near where you sleep. A professional (sometimes with K-9 detection) can confirm an infestation and locate every hiding spot." },
        { q: 'Does heat treatment really kill bed bugs?', a: "Yes. Raising a room to a temperature bed bugs can't survive kills every life stage — adults, nymphs, and eggs — including bugs hidden in walls and furniture, usually in a single day. It's one of the most thorough options and leaves little residue." },
        { q: 'How many treatments does it take?', a: "Whole-room heat treatment can often resolve an infestation in one visit, sometimes with a follow-up inspection. Conventional residual programs usually involve two or more visits over a few weeks to catch newly hatched bugs. Your pro confirms success with follow-up monitoring." },
        { q: 'Do I have to throw out my mattress and furniture?', a: "Usually not. Professional heat and residual treatments can save most furniture and mattresses, and encasements let you keep a treated mattress safely. Throwing items out can actually spread bed bugs through the home — ask your technician before discarding anything." },
        { q: 'Can I stay in my home during treatment?', a: "In most cases yes. You'll get a prep checklist and instructions on when to leave the treated area and when it's safe to return (heat treatments require you to be out of the treated rooms during the process). Your provider will walk you through the specifics." },
        { q: 'Are bed bugs dangerous?', a: "Bed bugs aren't known to transmit disease, but their bites can itch, cause allergic reactions or secondary skin infections from scratching, and take a real toll on sleep and stress. Because they multiply quickly, prompt professional treatment is the best response." },
      ],
      finalCtaHeading: 'Get Rid of Bed Bugs for Good in Georgia',
    },

    'rodent-control': {
      metaTitle: 'Rodent Control in Georgia | Rats & Mice in the Attic',
      metaDesc: "Roof rats and mice invade Georgia homes every fall. Get licensed local rodent control — trapping, exclusion, and recurring protection. Free inspection — call now.",
      h1: 'Rodent Control in Georgia',
      breadcrumbName: 'Rodent Control',
      heroSub: "When Georgia nights cool, roof rats, Norway rats, and house mice push into attics, walls, and crawlspaces. A licensed local pro doesn't just trap them — they seal the entry points so the rodents can't come back, and keep watch year-round.",
      sections: [
        {
          heading: 'The Rodents That Invade Georgia Homes',
          cards: [
            { name: 'Roof rats', text: "Georgia's most common home-invading rat, especially in Atlanta and along the coast near Savannah. Excellent climbers, they enter through the roofline and nest in attics, soffits, and trees — you'll often hear them scurrying overhead at night." },
            { name: 'Norway rats', text: "Larger, ground-dwelling rats that burrow and favor crawlspaces, basements, sewers, and woodpiles. They gnaw their way in low on the structure and around utility lines." },
            { name: 'House mice', text: "The most common indoor rodent. A mouse can slip through a gap the size of a dime, breeds quickly, and contaminates far more food than it eats. Often the first sign is droppings in pantries and drawers." },
          ],
        },
        {
          heading: 'When and Why Rodents Get In',
          paras: [
            "Rodent calls in Georgia spike in fall, as cooling nights send rats and mice looking for warmth, food, and shelter — but the state's mild winters mean activity continues year-round. Homes near wooded lots, water, agriculture, or older sewer systems see the most pressure. Watch for these signs of a rodent problem:",
          ],
          bullets: [
            "Droppings in the pantry, under sinks, in drawers, or along walls",
            "Scratching, gnawing, or scurrying sounds in the attic or walls, especially at night",
            "Gnaw marks on food packaging, wood, or wiring",
            "Greasy rub marks along baseboards, beams, and entry points",
            "Shredded insulation, paper, or fabric used for nesting",
            "A persistent musky odor, or pets fixating on a wall or appliance",
          ],
        },
        {
          heading: 'Why Rodents Are More Than a Nuisance',
          paras: [
            "Rodents are a genuine hazard. They gnaw constantly — including on electrical wiring, a recognized cause of house fires — and they contaminate food and surfaces with droppings and urine that can spread Salmonella and other pathogens. They also bring in fleas, ticks, and mites, and their nesting tears up insulation and ductwork. A small problem becomes an expensive one fast.",
          ],
        },
        {
          heading: 'How the Pros Solve a Rodent Problem',
          paras: [
            "Poison alone doesn't fix a rodent problem — it can leave rodents to die in walls and does nothing to stop the next ones from entering. A licensed Georgia rodent program is built around a permanent fix:",
          ],
          cards: [
            { name: 'Inspection', text: "A top-to-bottom check of the roofline, foundation, crawlspace, attic, and utility penetrations to identify the species and every way they're getting in." },
            { name: 'Trapping & removal', text: "Strategic trapping knocks down the active population quickly and cleanly, without relying on poisons inside your living space." },
            { name: 'Exclusion (the permanent fix)', text: "Sealing gaps, vents, roofline openings, and utility penetrations with rodent-proof materials so rats and mice physically can't get back in. This is what separates a real solution from a temporary one." },
            { name: 'Exterior control & monitoring', text: "Tamper-resistant bait stations around the exterior and recurring monitoring catch new pressure before it becomes another invasion." },
            { name: 'Cleanup & sanitizing', text: "Removing contaminated nesting material and droppings and sanitizing affected areas to clear health hazards and the scent trails that attract more rodents." },
          ],
        },
        {
          heading: 'Keep Rodents Out of Your Georgia Home',
          bullets: [
            "Trim tree limbs and shrubs back from the roofline — roof rats use them as bridges",
            "Seal gaps around pipes, vents, and the foundation; screen crawlspace and attic vents",
            "Store food and pet food in sealed containers and clean up spills",
            "Keep firewood, debris, and clutter away from the house",
            "Secure trash cans and pick up fallen fruit and birdseed",
          ],
        },
        {
          heading: 'What Rodent Control Costs in Georgia',
          paras: [
            "Cost depends on the rodent, the severity, and how much exclusion work your home needs — sealing a few roofline gaps is very different from rodent-proofing an older home. Many homeowners use an initial knockdown plus recurring exterior monitoring. Every pro in our directory inspects and quotes for free, so you'll know the plan and price before any work begins.",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I hear scratching in my attic at night in Georgia?', a: "That's most often roof rats — Georgia's most common home-invading rat and an agile climber that nests in attics and soffits and is active after dark. Squirrels are also possible, but they're usually active in daytime. A licensed inspector can confirm the species and find the roofline openings they're using." },
        { q: "What's the difference between roof rats and Norway rats?", a: "Roof rats are sleek climbers that enter high — through the roofline — and nest in attics and trees; they're the most common rat in Atlanta and coastal Georgia. Norway rats are larger, burrowing ground-dwellers that favor crawlspaces, basements, and sewers and enter low on the structure. The two need different trapping and exclusion strategies." },
        { q: 'Is trapping better than poison for rodents?', a: "For indoor rodents, yes — trapping removes them cleanly and avoids rodents dying inside walls. Just as important is exclusion (sealing entry points), which poison can't do. Exterior tamper-resistant bait stations have a role around the perimeter, but the lasting fix is keeping rodents out in the first place." },
        { q: 'How do mice and rats get into a home?', a: "Mice can squeeze through a gap the size of a dime and rats through a quarter-sized hole. Common entry points are roofline and soffit gaps (roof rats), foundation and utility-line penetrations (Norway rats), garage doors, and crawlspace or attic vents. A professional exclusion seals these so rodents can't return." },
        { q: 'Do I need recurring rodent service?', a: "If your home is near woods, water, or older infrastructure, ongoing exterior monitoring is the best insurance against re-infestation — Georgia's mild climate keeps rodents active all year. After the initial cleanout and exclusion, recurring service catches new pressure before it gets back inside." },
      ],
      finalCtaHeading: 'Get Rodents Out — and Keep Them Out',
    },

    'pest-control': {
      metaTitle: 'General Pest Control in Georgia | Quarterly Plans',
      metaDesc: "One recurring plan for Georgia's everyday pests — fire ants, spiders, wasps, ants, fleas & ticks. Licensed, pet-safe, guaranteed. Free quote — call now.",
      h1: 'General Pest Control in Georgia',
      breadcrumbName: 'General Pest Control',
      heroSub: "Ants, spiders, wasps, fire ants, silverfish, fleas, ticks — Georgia's warm, humid climate keeps household pests active nearly year-round. One recurring quarterly plan from a licensed local pro treats what's bugging you now and keeps the rest from getting in.",
      sections: [
        {
          heading: "Georgia's Year-Round Pest Pressure",
          paras: [
            "Most of Georgia sits in a humid subtropical climate — long hot summers, mild winters, and plenty of rain. For pests, that means there's no real off-season. While homeowners up north get a winter die-off, Georgia's bugs keep going, which is why a recurring quarterly plan almost always outperforms one-off sprays here: it keeps a protective barrier in place as each pest's season comes around.",
            "A general pest plan covers the broad range of everyday household pests. A few specialties — termites, mosquitoes, roaches, bed bugs, and rodents — are worth a dedicated program, and we cover each on its own Georgia page, linked below.",
          ],
        },
        {
          heading: 'Fire Ants: A Georgia Reality',
          paras: [
            "If you live in Georgia, you live with fire ants. University of Georgia entomologists report that all 159 Georgia counties are infested with imported fire ants — and the state now has two kinds: the red imported fire ant and a red-black hybrid that pushed in from Alabama. Before 1980, Interstate 20 was considered the northern edge of their range in Georgia; today they're statewide, from the coast to the mountains.",
            "Fire ants build dome-shaped mounds in lawns and deliver painful, burning stings that can be dangerous to people who are allergic, as well as to pets and small children. Knocking them down takes the right approach — typically a broadcast bait to wipe out colonies across the yard, combined with mound treatments and a perimeter barrier — which is exactly what a recurring plan handles.",
          ],
        },
        {
          heading: 'Other Common Georgia Household Pests',
          paras: [
            "Beyond fire ants, a Georgia general pest plan keeps these in check:",
          ],
          cards: [
            { name: 'Ants', text: "Argentine ants, odorous house ants, and carpenter ants (which tunnel into damp wood) are all common. Recurring exterior treatment knocks down trails before they reach the kitchen." },
            { name: 'Spiders', text: "Most Georgia spiders are harmless, but black widows and brown widows hide in garages, woodpiles, and meter boxes, and brown recluse turn up in undisturbed spaces. Treatment targets webs, harborage, and the insects spiders feed on." },
            { name: 'Wasps, hornets & yellowjackets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets peak in Georgia's late summer and fall. Pros remove active nests and treat eaves and soffits to prevent rebuilding." },
            { name: 'Fleas & ticks', text: "Georgia's mild winters let fleas and ticks stay active much of the year. Ticks here can carry Rocky Mountain spotted fever and ehrlichiosis, so yard and perimeter treatment protects pets and family." },
            { name: 'Silverfish & occasional invaders', text: "Silverfish, millipedes, centipedes, earwigs, and seasonal invaders like lady beetles and stink bugs all push indoors in Georgia's humidity. A barrier treatment and exclusion keep them out." },
          ],
        },
        {
          heading: 'What a Recurring Pest Plan Covers',
          paras: [
            "A typical Georgia quarterly plan includes:",
          ],
          bullets: [
            "A thorough inspection and interior treatment on the first visit, then exterior-focused service that keeps pests out without disrupting your home",
            "A treated barrier around the foundation, windows, doors, and entry points",
            "De-webbing of eaves and removal of accessible wasp nests",
            "Fire ant and nuisance-ant control across the yard and perimeter",
            "Free re-service between scheduled visits if pests come back — the guarantee most Georgia companies stand behind",
          ],
        },
        {
          heading: 'Why Quarterly Service Works in Georgia',
          paras: [
            "Different pests peak in different seasons — ants and wasps in spring and summer, spiders and rodents in fall, overwintering invaders in cooler months. Quarterly service times treatments to interrupt each of those cycles, so the barrier is fresh when each pest is most active. It's the most cost-effective way to stay ahead of Georgia's nearly year-round pressure rather than reacting to one infestation at a time.",
          ],
        },
        {
          heading: 'What General Pest Control Costs in Georgia',
          paras: [
            "Recurring plans are usually billed per quarterly visit and priced by your home's size and pest pressure, often with a one-time initial service to knock things down before regular maintenance begins. It typically costs far less per visit than one-off emergency calls. Every pro in our directory quotes your home for free and backs the plan with a re-service guarantee — so you know the cost and the coverage up front.",
          ],
        },
      ],
      faqs: [
        { q: 'What does a general pest control plan cover in Georgia?', a: "It covers the broad range of everyday household pests — ants and fire ants, spiders, wasps and yellowjackets, silverfish, millipedes, fleas and ticks, and seasonal invaders. Specialty pests like termites, mosquitoes, roaches, bed bugs, and rodents are handled by dedicated programs, which we cover on their own Georgia pages." },
        { q: 'How often should pest control be done in Georgia?', a: "Because Georgia's mild climate keeps pests active nearly year-round, quarterly (every three months) service is the standard. Each visit refreshes the protective barrier ahead of the next pest season. Heavier pressure or a specific problem may call for an extra visit, which your pro will recommend." },
        { q: 'How do I get rid of fire ants in my yard?', a: "Effective fire ant control usually combines a broadcast bait that colonies carry underground to eliminate the queen, direct mound treatments for fast knockdown, and a perimeter barrier. Because all 159 Georgia counties have fire ants, ongoing treatment as part of a recurring plan is the realistic way to keep a yard clear." },
        { q: 'Is recurring pest control safe for kids and pets?', a: "Yes. Licensed Georgia technicians use EPA-registered products applied at label rates, focused on entry points, the exterior perimeter, and cracks and crevices rather than broadcast across living areas. They'll note any short re-entry time — usually just until the product dries." },
        { q: 'Is there a contract, and what if pests come back?', a: "Most Georgia plans are quarterly and back the service with a guarantee — if covered pests return between visits, the company re-treats at no extra charge. Terms vary by provider; the pro who quotes your home will spell out the plan, the guarantee, and any commitment before you sign on." },
      ],
      finalCtaHeading: 'Get Year-Round Pest Protection in Georgia',
    },
  },

  // Seasonal pest calendar — strong consumer value + long-tail SEO.
  seasons: [
    {
      season: 'Spring (Mar–May)',
      text: "Termites swarm — the #1 sign of an active colony. Ants emerge in force, carpenter bees bore into wood trim, and mosquito breeding begins with the first warm rains. The best window to start a recurring plan before pressure peaks.",
    },
    {
      season: 'Summer (Jun–Aug)',
      text: "Peak season statewide. Mosquitoes are relentless (especially in metro Atlanta), fire ant mounds multiply, roaches move indoors out of the heat, and wasp and yellowjacket nests grow large. Fleas and ticks are at their most active.",
    },
    {
      season: 'Fall (Sep–Nov)',
      text: "Rodents and overwintering pests look for a warm place to spend winter — this is when mice and roof rats get into attics and walls. Yellowjackets turn aggressive as colonies break down. A great time to seal entry points.",
    },
    {
      season: 'Winter (Dec–Feb)',
      text: "Georgia's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Quarterly service maintains the protective barrier through the cooler months.",
    },
  ],

  // ── Cities We Service ──
  // Grow this ONE AT A TIME as coverage expands. Each entry needs `slug` so the
  // GA pest pages can deep-link to the matching city pest page when one exists.
  // Plain badge: { name, slug }. Linked: { name, slug, href: '/georgia/<slug>/' }.
  cities: [
    { name: 'Woodstock', slug: 'woodstock', href: '/georgia/woodstock/' },
  ],

  // City pages (hub + per-pest), keyed by city slug. Rendered by views/city.ejs
  // and views/city-service.ejs; content lives in data/cities/<city>.js.
  cityPages: {
    [woodstockGa.slug]: woodstockGa,
  },

  // ── FAQ (GA-specific, SEO + FAQPage schema) ──
  faqs: [
    {
      q: 'How much does pest control cost in Georgia?',
      a: "It depends on the pest, the severity of the problem, and your property size. General recurring pest control is the most affordable option, while specialty work like termite treatment or bed bug remediation costs more because of the equipment and follow-up involved. Every contractor in our directory gives a free, property-specific quote before any work starts, so you'll know your exact price up front.",
    },
    {
      q: 'Do I really need termite protection in Georgia?',
      a: "For most homes, yes. Georgia sits in one of the highest termite-pressure regions in the country — subterranean termites are active in every county and Formosan termites have spread along the coast and into metro Atlanta. Termite damage isn't typically covered by homeowners insurance, so an active liquid barrier or bait system plus annual inspections is one of the cheapest forms of protection for your home's structure.",
    },
    {
      q: 'When do termites swarm in Georgia?',
      a: "Subterranean termites usually swarm on warm, humid days in spring, roughly March through May, often after rain. A swarm of winged insects indoors or piles of discarded wings near windows is a strong sign of an active colony nearby — and a reason to schedule an inspection right away.",
    },
    {
      q: 'Why are mosquitoes so bad in Georgia?',
      a: "Georgia's heat, humidity, and frequent rain create ideal breeding conditions, and the long warm season means mosquitoes are active for much of the year. Metro Atlanta regularly ranks among the worst US cities for mosquitoes. Professional yard barrier treatments plus eliminating standing-water breeding sites are the most effective way to take your outdoor space back.",
    },
    {
      q: 'Are pest control treatments safe for kids and pets?',
      a: "Yes. The contractors in this directory use EPA-registered products applied at label rates, and most offer family- and pet-safe or low-toxicity options. Your technician will let you know about any short re-entry interval after an application — usually just until the product dries.",
    },
    {
      q: 'Are Georgia pest control companies licensed?',
      a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator.",
    },
    {
      q: "What's the best time of year for pest control in Georgia?",
      a: "Because of Georgia's mild winters, pests are active nearly year-round, so the best approach is a recurring quarterly plan rather than waiting for a specific season. That said, early spring is an ideal time to start — it gets protection in place before termites swarm and mosquito and ant pressure peaks in summer.",
    },
  ],
};

const STATES = {
  [GEORGIA.slug]: GEORGIA,
};

function getStatePage(slug) {
  return Object.prototype.hasOwnProperty.call(STATES, slug) ? STATES[slug] : null;
}

module.exports = { STATES, getStatePage, DEFAULT_PESTS };
