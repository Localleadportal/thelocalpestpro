'use strict';

// ── Dedicated service pages ──────────────────────────────────────────────────
// Only categories with distinct search intent get their own page. Every other
// homepage category links to the general /pest-control/ page (they're covered
// there). These pages are INDEXABLE by default — published with real content as
// they are added. To hold a single page back, set `noindex: true` on its entry
// below; otherwise it is indexed (see views/service.ejs).
//
// Rodent control is framed deliberately around the PEST-CONTROL angle (recurring
// baiting, monitoring, exterior stations, exclusion as part of an ongoing
// program) so it does not duplicate any wildlife-removal rodent content. This
// property stays independent — no cross-linking to other sites.

const SERVICES = {
  'pest-control': {
    slug: 'pest-control',
    name: 'General Pest Control',
    h1: 'General Pest Control',
    intro: "Recurring, whole-home protection against ants, spiders, roaches, wasps, flies, fleas, and the other common household pests — one quarterly plan that treats current problems and prevents the next ones.",
    metaDesc: 'Find a licensed local exterminator for recurring, whole-home pest control. Ants, spiders, roaches, wasps, flies, fleas, and more — one plan, year-round protection.',
  },
  'termite-control': {
    slug: 'termite-control',
    name: 'Termite Treatment',
    h1: 'Termite Treatment & Control',
    metaTitle: 'Termite Treatment & Control Near You | The Local Pest Pro',
    intro: "Liquid soil barriers, in-ground bait stations, and annual inspections that stop subterranean, Formosan, and drywood termites before they compromise your home's structure.",
    metaDesc: 'Find a licensed termite control pro near you. Liquid barrier treatments, bait stations, fumigation, and inspections that protect your home from costly termite damage. Free inspection & quote.',

    overviewHeading: 'Why Termites Are a Serious Threat',
    overview: [
      "Termites are among the most destructive pests a homeowner can face. They feed on the cellulose in wood 24 hours a day, and a mature colony can number in the hundreds of thousands — quietly eating structural framing, subfloors, and trim long before there's any visible sign. Across the U.S., termites cause billions of dollars in property damage every year, and that damage is almost never covered by homeowners insurance.",
      "Because termites work from the inside out, they're easy to miss until the damage is significant. That's why professional treatment and regular inspections are the most cost-effective protection — catching activity early, eliminating the colony, and putting a long-term barrier in place so termites can't come back.",
    ],

    signsHeading: 'Signs of a Termite Problem',
    signs: [
      'Mud tubes — pencil-width dirt tunnels running up foundation walls, piers, or crawlspace supports',
      'Swarmers — winged termites, or piles of discarded wings near windows and doors, usually in spring',
      'Wood that sounds hollow or papery when you tap it',
      'Doors and windows that suddenly stick from warped, weakened wood',
      'Bubbling, blistering, or peeling paint that looks like water damage',
      'Frass — small piles of wood-colored pellets, a telltale sign of drywood termites',
      'Sagging or soft floors and tiny pinholes in drywall',
    ],

    typesHeading: 'Types of Termites We Treat',
    types: [
      { name: 'Subterranean termites', text: "The most common and destructive type nationwide. They nest in the soil and build mud tubes to reach wood above ground. Controlled with liquid soil barriers and in-ground bait stations." },
      { name: 'Formosan termites', text: "An especially aggressive subterranean species across the Southeast and Gulf Coast. Their massive colonies cause damage faster than native species, so they need prompt professional treatment." },
      { name: 'Drywood termites', text: "Live entirely inside the wood they eat, with no soil contact — often found in attics, framing, and furniture in warmer regions. Treated with targeted wood treatments or whole-structure fumigation." },
    ],

    treatmentsHeading: 'Termite Treatment Options',
    treatments: [
      { name: 'Liquid termiticide barrier', text: "A non-repellent termiticide applied to the soil around your foundation creates a continuous treated zone. Termites passing through pick it up and transfer it back to the colony. Long-lasting and ideal for subterranean termites." },
      { name: 'In-ground bait stations', text: "Stations installed around the perimeter use a slow-acting bait that foraging termites carry back to the colony, wiping it out at the source — then monitored and refreshed on a recurring schedule for ongoing protection." },
      { name: 'Wood & borate treatments', text: "Borate products applied directly to exposed wood — often during construction or repairs — protect against termites and wood-decay fungi for the life of the wood." },
      { name: 'Fumigation', text: "For widespread drywood infestations, whole-structure fumigation (tenting) penetrates every part of the wood to eliminate termites the liquid and bait methods can't reach." },
      { name: 'Annual inspections & warranties', text: "Most pros back their work with a renewable termite bond or warranty plus yearly inspections, so any new activity is caught and re-treated before it becomes damage." },
    ],

    costHeading: 'How Much Does Termite Treatment Cost?',
    costNote: "Termite treatment cost depends on the type of termite, the size and construction of your home, the treatment method (liquid barrier, bait system, or fumigation), and the extent of any existing damage. A perimeter liquid treatment is priced by linear footage, while bait systems are typically an installation cost plus an annual monitoring fee. Every pro in our directory starts with a free inspection and gives you a written, property-specific quote before any work begins — so you'll know your exact cost up front.",

    preventionHeading: 'How to Help Prevent Termites',
    prevention: [
      'Keep soil, mulch, and firewood from contacting wood siding or framing',
      'Fix leaks and direct gutters and downspouts away from the foundation',
      'Reduce crawlspace and attic moisture with proper ventilation',
      'Maintain an 18-inch gap between soil and any wood on the structure',
      'Schedule a professional termite inspection at least once a year',
    ],

    faqs: [
      { q: 'How do I know if I have termites?', a: "The most common signs are mud tubes on foundation walls, swarming winged termites (or discarded wings) in spring, hollow-sounding wood, and small piles of pellet-like frass. Because termites work out of sight, the surest way to know is a professional inspection — most companies in our directory offer one free." },
      { q: 'How much does termite treatment cost?', a: "It depends on the termite type, your home's size and construction, the treatment method, and any existing damage. Liquid barrier treatments are priced by linear footage; bait systems usually involve an install cost plus annual monitoring. You'll get a free inspection and an exact written quote before any work starts." },
      { q: "What's the difference between liquid treatment and bait stations?", a: "A liquid termiticide creates a treated barrier in the soil around your home that eliminates termites as they pass through it. Bait stations use a slow-acting bait that foraging termites carry back to wipe out the whole colony. Some homes use one method, some use both — your pro will recommend the best fit after inspecting." },
      { q: 'Are termite treatments safe for my family and pets?', a: "Yes. Licensed technicians use EPA-registered termiticides and baits applied at label rates, with most of the product placed in the soil or in sealed stations around the exterior. Your technician will explain any short precautions for the application." },
      { q: 'How long does termite treatment last?', a: "A professional liquid barrier typically protects for several years — often five or more, depending on the product and soil conditions — and bait systems provide continuous protection as long as they're monitored. Most companies offer a renewable warranty or bond with annual inspections to keep coverage active." },
      { q: 'Does homeowners insurance cover termite damage?', a: "Almost never. Termite damage is considered preventable through maintenance, so standard homeowners policies exclude it. That's what makes proactive treatment and annual inspections so worthwhile — they're far cheaper than the structural repairs termites can cause." },
      { q: 'Do I need a termite inspection to buy or sell a home?', a: "In much of the country — especially the Southeast — a wood-destroying organism (WDO) inspection, often called a 'termite letter,' is commonly required during a real estate transaction. A licensed inspector checks for active termites and prior damage and documents the findings for the lender or buyer." },
    ],
  },
  'bed-bug-treatment': {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    h1: 'Bed Bug Treatment & Extermination',
    metaTitle: 'Bed Bug Treatment Near You | Heat & Chemical Extermination',
    intro: "Bed bugs don't go away on their own, and store-bought sprays usually make them spread. A licensed local exterminator eliminates them at every life stage — eggs, nymphs, and adults — with professional heat treatment or a targeted residual program, then verifies they're gone.",
    metaDesc: "Get rid of bed bugs for good. Find a licensed local bed bug exterminator for whole-home heat treatment and targeted programs that kill bed bugs at every life stage — eggs, nymphs, and adults. Free inspection & quote.",

    overviewHeading: 'Why Bed Bugs Are So Hard to Get Rid Of',
    overview: [
      "Bed bugs are small, reddish-brown insects, about the size of an apple seed, that feed on human blood while you sleep. They hide during the day in the tiniest cracks — mattress seams, box springs, headboards, baseboards, and behind outlet covers — and emerge at night to bite, leaving itchy welts that are often the only proof you have a problem. They don't spread disease, but a population grows fast and is notoriously stubborn to eliminate.",
      "The reason DIY almost always fails comes down to biology. A single female lays hundreds of eggs over her lifetime, and those eggs are cemented deep into cracks where sprays can't reach. On top of that, most bed bug populations are now resistant to the over-the-counter pyrethroid products sold for them. Miss a few eggs or a single hiding spot and the infestation simply rebuilds within weeks.",
      "Worse, the wrong approach makes things worse. Foggers and 'bug bombs' don't penetrate the seams and voids where bed bugs hide — they scatter the survivors into adjoining rooms and neighboring units. Throwing out the mattress rarely helps either, because the bugs are already in the frame and furniture. The two things that reliably work — sustained lethal heat and professionally-applied residual products with growth regulators — are exactly what a licensed exterminator brings.",
    ],

    signsHeading: 'Signs You Have Bed Bugs',
    signs: [
      'Itchy red welts, often in a line or cluster, on skin you expose while sleeping — arms, shoulders, neck, and legs',
      'Small rusty or reddish-brown blood spots on sheets, pillowcases, or the mattress',
      'Dark, pepper-like fecal dots along mattress seams, the box spring, headboard, or baseboards',
      'Pale, translucent shed skins and pinhead-sized white eggs in cracks and crevices',
      'A musty, sweet odor in the room, which can accompany a heavier infestation',
      'Live bugs — flat and apple-seed-sized — in mattress seams or behind the headboard',
    ],

    typesHeading: 'Where Bed Bugs Hide',
    types: [
      { name: 'In and around the bed', text: "Mattress seams and tags, the box spring, bed frame, headboard, and nightstands are ground zero — the bugs stay close to where you sleep so they can feed at night." },
      { name: 'Furniture & upholstery', text: "Couches, recliners, and chairs (especially in bedrooms and living rooms) are common harborage points, which is why infestations spread beyond the bedroom if left untreated." },
      { name: 'Cracks, baseboards & outlets', text: "Bed bugs squeeze into gaps in baseboards, wall trim, electrical outlets, and behind picture frames — hiding spots that sprays can't reach and DIY treatments routinely miss." },
      { name: 'Luggage & secondhand items', text: "They're hitchhikers. Bed bugs travel home in luggage after a hotel stay, or inside used furniture and mattresses — the most common way an infestation starts in the first place." },
    ],

    treatmentsHeading: 'Bed Bug Treatment Options',
    treatments: [
      { name: 'Whole-room heat treatment', text: "Specialized equipment raises the room to roughly 120–135°F and holds it there — lethal to bed bugs at every stage, including the eggs that survive most sprays. Chemical-free, reaches into furniture and wall voids, and often clears an infestation in a single visit." },
      { name: 'Targeted residual program', text: "EPA-registered insecticides and insect growth regulators applied precisely to harborage sites — seams, frames, baseboards, and voids. Usually two to three visits about two weeks apart to break the life cycle as new eggs hatch." },
      { name: 'Inspection & K9 detection', text: "A thorough inspection — sometimes with a trained bed-bug detection dog — pinpoints exactly where they're hiding and how far they've spread, so treatment targets the whole infestation, not just the bedroom." },
      { name: 'Follow-up & verification', text: "Bed bugs are hard to eliminate on the first try, so a reputable pro returns to confirm there's no remaining activity and re-treats any survivors — many back the work with a guarantee." },
    ],

    costHeading: 'How Much Does Bed Bug Treatment Cost?',
    costNote: "There's no single flat price for bed bug treatment — it depends on how many rooms are affected, how severe the infestation is, your home's size, and whether you choose heat treatment (often one visit, higher per-visit cost) or a residual chemical program (lower per-visit, multiple visits). Every contractor in our directory provides a free, in-person inspection and a property-specific quote before any work begins, so you'll know your exact price up front with no surprises.",

    preventionHeading: 'How to Prevent Bed Bugs (and Avoid Spreading Them)',
    prevention: [
      'Inspect hotel mattress seams and headboards before unpacking, and keep luggage off the bed and floor',
      'Run clothing through a hot dryer for 30+ minutes after traveling — heat kills any hitchhikers',
      'Examine secondhand furniture and mattresses closely before bringing them into your home',
      'Use a zippered, bed-bug-proof encasement on your mattress and box spring',
      "If you suspect bed bugs, do NOT start sleeping in another room — that's the most common way people spread them through the home",
      'Reduce clutter near the bed so there are fewer places for them to hide',
    ],

    faqs: [
      { q: 'How do I know if I have bed bugs?', a: "The most common signs are itchy bite welts in rows or clusters on skin you expose while sleeping, small rusty blood spots and dark pepper-like fecal dots along your mattress seams and box spring, pale shed skins, and pinhead-sized white eggs in cracks near the bed. A musty, sweet odor can accompany a heavier infestation. Because bed bugs are expert hiders, a professional inspection — sometimes with a detection dog — is the surest way to confirm them." },
      { q: 'Does heat treatment actually kill bed bugs?', a: "Yes. Bed bugs and their eggs die at sustained temperatures of roughly 118–120°F and up, and professional heat treatment raises a room to about 120–135°F and holds it there long enough to penetrate mattresses, furniture, and wall voids. Because heat reaches the eggs that survive most sprays, it can clear an infestation in a single visit and uses no chemicals — which is why many homeowners prefer it." },
      { q: "Why can't I just get rid of bed bugs myself?", a: "DIY almost always falls short for two reasons. First, bed bug eggs are cemented deep in cracks and crevices where over-the-counter sprays never reach, so survivors rebuild the population within weeks. Second, most bed bug populations are now resistant to the pyrethroid chemicals sold in stores. Worse, foggers and bug bombs scatter the survivors into other rooms. Sustained lethal heat or professionally-applied residual products with growth regulators are what reliably end an infestation." },
      { q: 'How much does bed bug treatment cost?', a: "It varies with the number of rooms affected, the severity of the infestation, your home's size, and the method. Heat treatment is usually a single, higher-priced visit, while a residual chemical program costs less per visit but takes two or three visits to finish. Every contractor in our directory provides a free, property-specific quote before any work begins, so you'll know your exact price before committing." },
      { q: 'How many treatments will I need?', a: "Professional heat treatment often eliminates an infestation in one visit because it kills every life stage at once, including eggs. A chemical residual program typically requires two to three visits spaced about two weeks apart, so each round catches newly-hatched nymphs before they can breed. Either way, a reputable exterminator includes a follow-up inspection to verify the bugs are gone." },
      { q: 'Should I throw out my mattress?', a: "Usually no. By the time you find bed bugs they're rarely only in the mattress — they're also in the box spring, frame, baseboards, and nearby furniture — so discarding the mattress doesn't solve the problem, and a bagged, infested mattress can spread bugs to others. Professional treatment lets you keep your furniture; a zippered encasement on a treated mattress is far cheaper and more effective than replacing it." },
      { q: 'How do I prepare for a bed bug treatment?', a: "Your exterminator will provide a specific prep checklist. In general, launder bedding and washable clothing on the hottest dryer setting and seal it in bags, reduce clutter so technicians can reach hiding spots, and — importantly — do not start sleeping in another room, since moving around the home is the most common way people accidentally spread bed bugs. Proper prep is critical to the treatment's success, so follow your pro's instructions exactly." },
      { q: 'Are bed bug treatments safe for kids and pets?', a: "Yes, when handled by a licensed professional. Heat treatment uses no chemicals at all. Chemical programs use EPA-registered products applied at label rates, and your technician will give you a short re-entry window — typically just until the application dries — before it's safe to return to the treated rooms. Always follow the specific re-entry and prep guidance your exterminator provides." },
    ],
  },
  'cockroach-control': {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    h1: 'Cockroach Control & Roach Extermination',
    metaTitle: 'Cockroach Control & Roach Extermination Near You | The Local Pest Pro',
    intro: "Professional gel baiting, crack-and-crevice treatment, and prevention that clears German, American, and other roaches at every life stage — and keeps them from coming back.",
    metaDesc: 'Find a licensed cockroach control pro near you. Gel baiting, crack-and-crevice treatment, and prevention that clear roaches at the source and keep them from returning. Free quote.',

    overviewHeading: 'Why Roaches Are So Hard to Get Rid Of',
    overview: [
      "Cockroaches are one of the most stubborn pests a home can have — and one of the worst to live with. They contaminate food and surfaces, and their droppings and shed skins are a well-documented trigger for asthma and allergies, especially in children. Worse, they breed fast: a single German cockroach egg case holds dozens of eggs, so what looks like a couple of bugs is usually a much larger population hiding inside walls, cabinets, and appliances.",
      "That's exactly why store-bought sprays and foggers rarely solve the problem. They kill the roaches you can see and scatter the ones you can't — often pushing the colony deeper into the structure. A fogger can even make a German roach problem worse. Professional control works differently: it targets where roaches actually live and feed, using gel baits that get carried back to the harborage to break the breeding cycle at the source instead of just treating symptoms on the surface.",
      "A licensed exterminator starts by inspecting and identifying the species — because a German roach problem in the kitchen is solved very differently from smokybrown roaches coming in from the yard. Every pro in our directory is licensed and insured, applies EPA-registered products at label rates, and gives you a free, no-obligation quote before any work begins. Many back their roach work with a return-if-they-return guarantee.",
    ],

    signsHeading: 'Signs of a Cockroach Infestation',
    signs: [
      'Live roaches scattering when you turn on a light, especially in the kitchen or bathroom at night',
      'Droppings that look like ground pepper, coffee grounds, or (for larger species) small dark cylinders',
      'A musty, oily odor that gets stronger as the population grows',
      'Egg cases (oothecae) — small brown capsules tucked into cracks, behind appliances, or under cabinets',
      'Smear marks along baseboards and walls in damp, heavily trafficked areas',
      'Shed skins near harborage points as nymphs grow into adults',
      'Seeing roaches during the day — usually a sign the population is already large',
    ],

    typesHeading: 'Types of Cockroaches We Treat',
    types: [
      { name: 'German cockroach', text: "The most common indoor roach and the hardest to clear. Small, fast-breeding, and drawn to warm, humid kitchens and bathrooms — a few quickly become hundreds. Gel baiting is the gold standard for wiping out the colony." },
      { name: 'American cockroach (“palmetto bug”)', text: "The big one — up to two inches, reddish-brown, and a strong flier. Lives in sewers, drains, basements, and crawl spaces, then wanders indoors. Treated with drain attention, exterior barriers, and crack-and-crevice work." },
      { name: 'Smokybrown cockroach', text: "A Southern outdoor species that loves mulch, woodpiles, gutters, and attics, then slips inside through gaps. Controlled with exterior perimeter treatment, exclusion, and reducing moisture and harborage around the home." },
      { name: 'Oriental cockroach (“water bug”)', text: "Dark, slow-moving, and tied to damp spots — basements, crawl spaces, drains, and under sinks. A reliable sign of excess moisture. Treated with residual application plus fixing the leaks and dampness that draw them in." },
      { name: 'Brown-banded cockroach', text: "Unlike most roaches, it favors warm, dry, higher spots — upper walls, ceilings, behind picture frames, and inside electronics. Easy to miss, which is why a pro's inspection and targeted baiting matter." },
    ],

    treatmentsHeading: 'How the Pros Eliminate Roaches',
    treatments: [
      { name: 'Inspection & species ID', text: "Your pro finds where roaches are nesting and feeding and identifies the species — German, American, smokybrown, Oriental, or brown-banded. The species determines the entire treatment plan." },
      { name: 'Gel baiting at the source', text: "Professional gel baits are placed exactly where roaches harbor. Roaches feed, return to the nest, and the bait spreads through the colony — killing the ones you never see and breaking the breeding cycle." },
      { name: 'Crack-and-crevice treatment', text: "Targeted residual products go into the gaps roaches travel and hide in — behind appliances, under sinks, along baseboards — plus drain and exterior perimeter work for the larger outdoor species." },
      { name: 'Insect growth regulators (IGRs)', text: "For heavy German roach infestations, IGRs keep nymphs from maturing and reproducing, helping collapse the population faster and prevent the rebound that surface sprays leave behind." },
      { name: 'Prevention & follow-up', text: "Sealing entry points, reducing moisture and food sources, and a follow-up visit confirm the colony is gone. Recurring service keeps a protective barrier in place so they don't come back." },
    ],

    costHeading: 'How Much Does Cockroach Control Cost?',
    costNote: "Cockroach control cost depends on the species, how widespread the infestation is, and your home's size. A single targeted treatment for a minor problem is the most affordable option, while a heavy German roach infestation usually needs an initial service plus one or two follow-ups to fully break the breeding cycle. Many homeowners put roach control on an affordable recurring plan to keep them gone for good. Every contractor in our directory gives a free, property-specific quote before any work starts — so you'll know your exact cost up front.",

    preventionHeading: 'How to Keep Roaches From Coming Back',
    prevention: [
      'Clean up food and grease promptly — wipe counters and clean behind and under appliances',
      'Store food and pet food in sealed containers and avoid leaving dishes out overnight',
      'Fix leaks and reduce moisture under sinks, in basements, and in crawl spaces',
      'Take out trash regularly and keep bins sealed',
      'Seal gaps around pipes, baseboards, and entry points where roaches slip in',
      'Stay on a recurring pest-control plan to catch new activity early',
    ],

    faqs: [
      { q: 'How much does cockroach control cost?', a: "It depends on the species, how widespread the infestation is, and your home's size. A single targeted treatment for a minor problem is the most affordable option, while a heavy German roach infestation usually needs an initial service plus one or two follow-ups to fully break the breeding cycle. Every contractor in our directory gives a free, property-specific quote before any work starts, so you'll know your exact price up front." },
      { q: 'Why do I still see roaches after spraying them myself?', a: "Because sprays and foggers only kill the roaches out in the open — the bulk of the colony is hidden inside walls, cabinets, and appliances, and they breed faster than over-the-counter products can keep up. Foggers can even scatter a German roach population and make it worse. Professionals use gel baits that roaches carry back to the nest, which is what actually collapses the colony at the source." },
      { q: 'How long does it take to get rid of roaches?', a: "A light infestation can clear within a week or two of professional treatment. A heavy German roach population usually takes a few weeks and one or two follow-up visits, because you have to outlast the egg cases — new roaches keep hatching until the whole cycle is broken. Your technician will give you a realistic timeline for your situation." },
      { q: 'Are cockroaches dangerous or just a nuisance?', a: "They're a genuine health concern, not just unpleasant. Roaches contaminate food and surfaces with bacteria, and their droppings and shed skins are a well-documented trigger for asthma and allergies — particularly in children. Getting an infestation under control is as much about your family's health as your peace of mind." },
      { q: 'What attracts cockroaches to a clean house?', a: "Even spotless homes offer the three things roaches need: food, water, and shelter. Crumbs under appliances, grease behind the stove, pet food, leaky pipes, damp basements, and warm gaps around plumbing are all it takes. Larger species like American and smokybrown roaches also wander in from sewers, drains, mulch, and woodpiles outside, which is why exterior treatment and sealing entry points matter." },
      { q: 'Are cockroach treatments safe for kids and pets?', a: "Yes. The contractors in this directory use EPA-registered products applied at label rates, and modern roach control relies heavily on targeted gel baits placed in cracks and voids out of reach rather than broad open spraying. Your technician will explain any short re-entry interval after an application — usually just until the product dries — and can use low-toxicity options on request." },
      { q: 'How do I keep roaches from coming back?', a: "Eliminate what draws them: clean up food and grease promptly, store food and pet food sealed, fix leaks and reduce moisture, take out trash regularly, and seal gaps around pipes, baseboards, and entry points. A recurring pest-control plan keeps a protective barrier in place and catches any new activity early — the most reliable way to stay roach-free long term." },
    ],
  },
  'mosquito-control': {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    h1: 'Mosquito Control & Yard Spraying',
    metaTitle: 'Mosquito Control Near You | Yard Spraying & Treatment',
    intro: "Barrier yard spraying, standing-water larvicide, and recurring seasonal service that knocks mosquitoes down and makes your outdoor space usable again. Find a licensed local mosquito control pro for a free quote.",
    metaDesc: 'Find a licensed mosquito control pro near you. Barrier yard spraying, standing-water larvicide, and seasonal programs that reclaim your yard from mosquitoes. Free, property-specific quote.',

    overviewHeading: 'Why Mosquito Control Is Worth It',
    overview: [
      "Mosquitoes are more than a backyard nuisance — they are the deadliest animals on earth, spreading diseases that affect both people and pets. Even where serious illness is rare, relentless biting can make a patio, garden, or play area unusable for months at a time. Professional mosquito control gives you back your outdoor space through the warm season.",
      "Mosquitoes need only warmth and standing water to breed, and many of the worst backyard species lay eggs in water as small as a bottle cap — flowerpot saucers, clogged gutters, tarps, toys, and corrugated drainpipe. Because they breed in such tiny, hidden spots and re-infest from neighboring yards, store-bought sprays and foggers rarely keep up for long.",
      "A professional program works on two fronts at once: it treats the shaded areas where adult mosquitoes rest during the day and the standing water where the next generation is developing. Repeated on a schedule through the season, that one-two approach is what actually keeps the population down — which is why recurring service, rather than a single spray, is the standard for lasting relief.",
    ],

    signsHeading: 'Diseases Mosquitoes Can Spread',
    signs: [
      'West Nile virus — the most common mosquito-borne illness in the continental US, carried by Culex mosquitoes',
      'Eastern equine encephalitis (EEE) — rare but among the most severe mosquito-borne diseases, affecting people and horses',
      'Zika, dengue & chikungunya — spread by Aedes mosquitoes; mostly travel-related but locally competent vectors are widespread',
      'La Crosse encephalitis — found in wooded areas and most often affecting children',
      'Dog heartworm — a serious, potentially fatal disease transmitted to dogs and cats by a single mosquito bite',
      'Severe bite reactions — large welts, swelling, and secondary skin infections from scratching, especially in children',
    ],

    typesHeading: 'Common Mosquitoes the Pros Treat',
    types: [
      { name: 'Asian tiger mosquito (Aedes albopictus)', text: "The most notorious backyard biter across the South and East — black with white stripes and active all day. It breeds in tiny containers rather than ponds, which is why removing standing water around the home is so important." },
      { name: 'Southern house mosquito (Culex)', text: "A dusk-and-night biter that breeds in stagnant, nutrient-rich water like ditches, catch basins, and neglected pools. Culex species are the primary carriers of West Nile virus." },
      { name: 'Yellow fever mosquito (Aedes aegypti)', text: "A daytime, container-breeding species that stays close to homes and is the main vector for Zika, dengue, and chikungunya in the warmer parts of the country." },
      { name: 'Floodwater & woodland mosquitoes (Psorophora, Aedes)', text: "Large, aggressive biters that hatch in big numbers after heavy rain fills ditches, low spots, and woodland pools — the cause of the sudden swarms that follow a wet stretch." },
    ],

    treatmentsHeading: 'How Professional Mosquito Control Works',
    treatments: [
      { name: 'Barrier yard spray', text: "The backbone of mosquito control. A residual treatment is applied to shaded foliage, shrubs, and the cool, damp spots where adult mosquitoes rest by day. It knocks down the current population and keeps killing mosquitoes that land for weeks — typically reapplied every two to three weeks in season." },
      { name: 'Standing-water larvicide', text: "Mosquitoes are far easier to stop before they fly. Technicians treat the standing water they can't drain — catch basins, ditches, low spots, and water features — with larvicide such as Bti, a naturally derived bacterium that kills larvae without harming people, pets, fish, or beneficial insects." },
      { name: 'Source reduction & yard inspection', text: "Your pro walks the property to find and eliminate the hidden breeding sites DIY misses — clogged gutters, plant saucers, tarps, toys, drainpipe, and neglected birdbaths. Removing standing water is the single most effective long-term step." },
      { name: 'In2Care & misting systems', text: "For tough yards, automated in-ground misting systems or In2Care stations — which turn mosquitoes into carriers of a larvae-killing agent — add a layer of season-long control beyond the barrier spray." },
      { name: 'Natural & botanical options', text: "Many companies offer essential-oil-based botanical treatments for homeowners who prefer a lower-toxicity option, applied on the same recurring schedule as a conventional barrier spray." },
      { name: 'One-time event sprays', text: "A single pre-event treatment a day or two before a wedding, party, or cookout dramatically cuts mosquito activity for the gathering, even without an ongoing plan." },
    ],

    costHeading: 'How Much Does Mosquito Control Cost?',
    costNote: "Mosquito control is usually priced per treatment or as a discounted seasonal package, and the cost depends mainly on the size of your yard and how much shaded vegetation and standing water it has. Recurring barrier service every two to three weeks through the season is the most popular option and the best value, while one-time treatments are available for a single event. Every pro in our directory starts with a free quote and gives you a written, property-specific price before any work begins.",

    preventionHeading: 'How to Reduce Mosquitoes Around Your Home',
    prevention: [
      'Empty or remove anything that holds water — flowerpot saucers, buckets, toys, tarps, and old tires — at least once a week',
      'Keep gutters clean and flowing so they don\'t pool water, a top breeding site in shaded yards',
      'Change birdbath and pet-bowl water every few days, and keep pools and hot tubs chlorinated and circulating',
      'Drop a Bti "mosquito dunk" into rain barrels, ponds, and water features you can\'t drain',
      'Trim dense shrubs and tall grass to reduce the cool, shady resting spots adult mosquitoes favor',
      'Fix dripping outdoor faucets and correct low spots in the yard where rainwater collects',
    ],

    faqs: [
      { q: 'How does professional mosquito spraying work?', a: "A technician applies a residual barrier treatment to the shaded foliage and resting areas where adult mosquitoes spend the day, and treats any standing water they can't drain with larvicide to stop the next generation. The barrier keeps killing mosquitoes for weeks and is reapplied every two to three weeks during mosquito season." },
      { q: 'How much does mosquito control cost?', a: "It's typically priced per treatment or as a seasonal package based on the size of your yard and how much shade and standing water it has. Recurring barrier service through the season is the most popular and best-value option, while one-time treatments are available for a specific event. Every contractor in our directory gives a free, property-specific quote before any work starts." },
      { q: 'How often do I need mosquito treatments?', a: "Most barrier treatments last about two to three weeks, so recurring service on that cycle through the warm season gives the most consistent relief. Your pro will recommend a schedule based on your yard and how heavy the mosquito pressure is in your area." },
      { q: 'Is mosquito control safe for kids and pets?', a: "Yes. Licensed technicians apply EPA-registered products at label rates, and the standing-water larvicides used (such as Bti) are naturally derived and target only mosquito larvae. It's best to keep kids and pets off the treated area until the application has dried — usually about 30 minutes — and many companies also offer botanical, lower-toxicity options." },
      { q: 'When does mosquito season start?', a: "It depends on your climate, but mosquitoes generally become active once temperatures stay above about 50°F — often early spring in the South and late spring farther north — and build to a peak in mid to late summer. Starting a treatment program before that peak gets ahead of breeding and means far fewer mosquitoes when the season is at its worst." },
      { q: 'Does mosquito spraying kill bees and other beneficial insects?', a: "Reputable companies apply barrier treatments to the shaded resting spots mosquitoes use — not to blooming flowers — and treat in the early morning or evening when pollinators are least active, which keeps the impact on bees and butterflies low. Bti larvicide used in standing water is specific to mosquito and fly larvae and does not harm bees." },
      { q: 'Can I just treat mosquitoes myself?', a: "DIY foggers and store-bought sprays can offer brief relief, but they don't reach the shaded resting sites or the small hidden breeding spots, and yards quickly get re-infested from neighboring properties. A professional program treats both the adults and the breeding sources and is repeated on a schedule, which is what actually keeps a yard usable through the season." },
    ],
  },
  'rodent-control': {
    slug: 'rodent-control',
    name: 'Rodent Control',
    h1: 'Rodent Control',
    intro: "Ongoing mouse and rat control built on tamper-resistant exterior bait stations, scheduled monitoring, and sealing the gaps pests slip through — managed as part of a recurring pest program, not a one-time job.",
    metaDesc: 'Find a licensed rodent control pro near you. Recurring baiting, monitoring, and exclusion that keeps mice and rats out year-round as part of an ongoing pest program.',
  },
};

function getService(slug) {
  return Object.prototype.hasOwnProperty.call(SERVICES, slug) ? SERVICES[slug] : null;
}

module.exports = { SERVICES, getService };
