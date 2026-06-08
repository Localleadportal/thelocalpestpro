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
    metaTitle: 'General Pest Control Services | Licensed Local Exterminators',
    intro: "Recurring, whole-home protection against ants, spiders, roaches, wasps, flies, fleas, and the other common household pests — one plan that treats today's problem and keeps the next one from starting. Connect with a licensed, insured local exterminator for a free quote.",
    metaDesc: 'Find a licensed local exterminator for recurring, whole-home pest control. Ants, spiders, roaches, wasps, flies, fleas, rodents and more — one plan, year-round protection. Free quote, family & pet-safe options.',

    overviewHeading: 'What Is General Pest Control?',
    overview: [
      "General pest control is an ongoing, whole-home program that protects against the everyday household pests most families deal with — ants, spiders, cockroaches, wasps, silverfish, fleas, crickets, and the seasonal invaders that find their way indoors. Instead of reacting to one pest at a time, a single recurring plan treats the home as a whole: knocking down whatever is active now and maintaining a protective barrier so new pests can't take hold. It's the difference between chasing problems and preventing them.",
      "The reason professionals recommend recurring service over a one-time spray is simple — pests never stop. They breed continuously, the protective barrier from a treatment naturally wears down over a few months, and pest pressure shifts with the seasons: ants and wasps in spring and summer, spiders and rodents pushing indoors in fall, and roaches and other pests staying active in heated homes through winter. A quarterly plan keeps protection in place year-round, which is why it almost always costs less in the long run than repeated one-off call-outs.",
      "Reputable exterminators today work from an Integrated Pest Management (IPM) approach rather than blanket spraying. That means a real inspection to find where pests are entering and harboring, sealing and exclusion to keep them out, targeted application of products only where they're needed, and ongoing monitoring — using the least amount of low-impact product required to get the result. It's safer for your family and pets and more effective at actually solving the problem.",
      "Every professional in our directory is a licensed, insured local exterminator who applies EPA-registered products at label rates and provides a free, no-obligation, property-specific quote before any work begins. Many back their general pest plans with a guarantee — if covered pests come back between scheduled visits, they return and re-treat at no extra charge.",
    ],

    signsHeading: "Signs It's Time to Call a Pest Control Pro",
    signs: [
      'Seeing pests during the day — especially roaches or rodents, which usually means a larger hidden population',
      'Droppings, smear marks, or shed skins along baseboards, in cabinets, or under sinks',
      'Ant trails across counters, floors, or foundation lines, or new mounds in the yard',
      'Spider webs reappearing in corners, eaves, and garages no matter how often you clear them',
      'Wasp or hornet nests under eaves, in shrubs, or around the roofline',
      'Scratching or scurrying sounds in walls, ceilings, or the attic at night',
      'Gnaw marks on food packaging, wiring, or wood trim',
      'A recurring problem that keeps coming back despite store-bought sprays and traps',
    ],

    typesHeading: 'Common Household Pests We Treat',
    types: [
      { name: 'Ants', text: "From odorous house ants and pavement ants to carpenter and fire ants, a general plan treats the trails and nests and sets baits foragers carry back to wipe out the colony — not just the ants you can see." },
      { name: 'Cockroaches', text: "German roaches in kitchens and baths, plus American and smokybrown 'palmetto bugs' from outdoors. Gel baiting and crack-and-crevice treatment clear them and break the breeding cycle at the source." },
      { name: 'Spiders', text: "Most household spiders are harmless nuisances, but no one wants them indoors. De-webbing, perimeter treatment, and reducing the insects they feed on keep common spiders — and the occasional black widow or brown recluse — in check." },
      { name: 'Wasps, hornets & yellowjackets', text: "Stinging insects nest under eaves, in shrubs, and in wall voids. Pros remove accessible nests and treat the perimeter so new ones don't establish near doors, decks, and play areas." },
      { name: 'Fleas & ticks', text: "Brought in by pets and wildlife, fleas and ticks infest carpets, bedding, and yards fast. Treatment targets every life stage indoors and knocks down outdoor hot spots where pets pick them up." },
      { name: 'Silverfish & earwigs', text: "Moisture-loving pests that turn up in bathrooms, basements, closets, and around foundations. Control pairs targeted treatment with reducing the dampness and clutter that draw them in." },
      { name: 'Stink bugs & occasional invaders', text: "Boxelder bugs, stink bugs, beetles, and lady beetles cluster on warm walls and slip inside to overwinter. Exterior treatment and exclusion at entry points keep these seasonal invaders out." },
      { name: 'Crickets, millipedes & centipedes', text: "Common in basements, garages, and crawl spaces, these occasional pests are managed with perimeter barriers, moisture control, and sealing the gaps they use to get inside." },
      { name: 'Flies & gnats', text: "House flies, fruit flies, and drain gnats are both a nuisance and a sanitation concern. Pros identify the breeding source — drains, trash, overripe produce — and treat it, not just the adults in the air." },
    ],

    treatmentsHeading: "What's Included in a Professional Pest Control Plan",
    treatments: [
      { name: 'Thorough inspection', text: "Every plan starts with a technician inspecting inside and out to identify active pests, entry points, and harborage areas — so treatment is targeted to your home rather than a generic spray." },
      { name: 'Interior treatment', text: "Targeted application where pests actually live and travel: crack-and-crevice treatment, baiting in kitchens and baths, and attention to attics, garages, and other entry zones." },
      { name: 'Exterior barrier treatment', text: "A protective treatment around the foundation, eaves, windows, and doors stops most pests before they ever get inside — the backbone of keeping a home pest-free between visits." },
      { name: 'De-webbing & nest knockdown', text: "Technicians clear spider webs and wasp nests from eaves, corners, and entryways, and treat those areas so they don't simply rebuild after the visit." },
      { name: 'Recurring quarterly service', text: "Scheduled visits (typically quarterly) renew the protective barrier as it wears down and adjust for each season's pest pressure — the key to long-term, year-round control." },
      { name: 'Exclusion & IPM guidance', text: "Beyond spraying, pros recommend sealing entry points and reducing the moisture, food, and clutter pests rely on — an Integrated Pest Management approach that means less product and longer-lasting results." },
      { name: 'Free re-treatment guarantee', text: "Most recurring plans are backed by a guarantee: if covered pests return between scheduled visits, your pro comes back and re-treats at no additional cost." },
    ],

    costHeading: 'How Much Does General Pest Control Cost?',
    costNote: "General pest control is the most affordable type of pest service, but the price depends on your home's size, the pests involved, the severity of the problem, and your region. Most recurring plans involve a one-time initial service (priced higher because it tackles the existing problem) followed by smaller, regular quarterly or bi-monthly visits — often billed per visit or as a flat monthly rate. A one-time-only treatment is also available but usually costs more per visit and carries no ongoing protection. Every pro in our directory gives a free, no-obligation quote tailored to your property before any work begins, so you'll know your exact cost up front with no surprises.",

    preventionHeading: 'How to Help Keep Pests Out Between Visits',
    prevention: [
      'Seal cracks and gaps around the foundation, utility lines, doors, and windows',
      'Repair torn screens and add weatherstripping and door sweeps',
      'Fix leaks and reduce moisture in kitchens, baths, basements, and crawl spaces',
      'Store food (and pet food) in sealed containers and take out the trash regularly',
      'Declutter storage areas, garages, and closets where pests like to harbor',
      'Trim shrubs and tree limbs back from the house and keep mulch off the siding',
      'Keep gutters clear and direct water away from the foundation',
    ],

    faqs: [
      { q: 'What does general pest control cover?', a: "General pest control covers the common household pests most homes deal with — ants, cockroaches, spiders, wasps and hornets, silverfish, earwigs, crickets, fleas, flies, and seasonal invaders like stink bugs and boxelder bugs. Many plans also include common rodents. Specialty problems like termites and bed bugs are usually handled as separate, dedicated services because they require different equipment and methods. Your technician will confirm exactly what's included in your plan." },
      { q: 'How often should I have pest control done?', a: "For ongoing protection, most homes do best on a recurring quarterly plan — four visits a year that renew the protective barrier as it wears down and adjust for each season's pest pressure. Homes with heavier pressure (warm, humid climates or active infestations) may benefit from bi-monthly service. A one-time treatment can knock down a current problem, but it offers no protection against the next one." },
      { q: 'Is recurring service worth it, or can I just call when I see a pest?', a: "Recurring service is almost always more effective and more economical. Pests breed continuously and pressure shifts with the seasons, so a maintained barrier prevents infestations rather than reacting after they start — and because recurring visits are priced lower than one-off call-outs, you typically pay less over the year while staying protected. One-time treatments make sense for a specific, contained problem, but they leave the home open to the next pest." },
      { q: 'Is professional pest control safe for kids and pets?', a: "Yes, when handled by a licensed professional. Reputable exterminators use EPA-registered products applied at label rates and an Integrated Pest Management approach that places product only where it's needed — often baits and targeted treatments rather than blanket spraying. Your technician will tell you about any short re-entry interval, which is usually just until a treated area dries, and most companies offer family- and pet-conscious low-impact options." },
      { q: 'How much does general pest control cost?', a: "It depends on your home's size, the pests involved, the severity, and your region. General pest control is the most affordable pest service — most plans involve a higher one-time initial visit followed by smaller recurring quarterly or bi-monthly visits, often billed per visit or as a flat monthly rate. Every contractor in our directory provides a free, property-specific quote before any work begins, so you'll know your exact price up front." },
      { q: 'How soon will I see results after the first treatment?', a: "You'll often notice a sharp drop in activity within a few days, though it can take up to two weeks to fully resolve a heavier infestation as baits work through a colony and the population dies off. For some pests you may briefly see more activity right after treatment as they're flushed out of hiding — that's normal. If covered pests are still a problem after a couple of weeks, a reputable pro will return and re-treat." },
      { q: 'Do I need to leave my home during treatment?', a: "Usually not. Most general pest treatments are targeted and low-impact, so you can typically stay home — your technician will simply ask you to keep kids and pets out of an area until a treated spot dries. They'll give you any specific instructions before they begin. More intensive treatments for specialty pests are the exception and come with their own guidance." },
      { q: 'Does pest control still work in the winter?', a: "Yes — and winter is one of the most valuable times to keep it up. Many pests don't disappear in cold weather; they move indoors to overwinter in warm walls, attics, and basements, and rodents push inside as temperatures drop. Maintaining your plan through winter keeps the barrier intact, controls the pests that stay active indoors, and prevents a spring surge as overwintering insects re-emerge." },
      { q: 'Are the exterminators in your directory licensed and insured?', a: "Yes. Every pro in our directory is a licensed, insured local exterminator who applies EPA-registered products at label rates. Structural pest control is regulated at the state level, and the companies we connect you with are licensed to operate in their area — so you're working with a qualified professional, not an unlicensed operator." },
      { q: "What's the difference between general pest control and calling an exterminator for one specific pest?", a: "General pest control is a broad, recurring program that protects against many common household pests at once and prevents future problems. Calling an exterminator for a single pest is a targeted, often one-time service aimed at a specific issue — for example a termite treatment, a bed bug job, or a wasp nest removal. Many homeowners use a general plan for everyday protection and add a specialty service if a particular pest like termites or bed bugs shows up." },
    ],
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
    h1: 'Rodent Control — Mouse & Rat Extermination',
    metaTitle: 'Rodent Control Near You | Mouse & Rat Extermination',
    intro: "Tamper-resistant rodenticide bait stations, interior trapping, and monthly monitoring that wipe out mice and rats and keep them out for good. Find a licensed local rodent control pro for a free quote.",
    metaDesc: 'Find a licensed rodent control pro near you. Tamper-resistant rodenticide bait stations, interior trapping, and monthly monitoring that eliminate mice and rats and keep them gone. Free quote.',

    overviewHeading: 'Why Rodents Need a Professional Program',
    overview: [
      "Mice and rats are among the fastest-multiplying pests a home or business can face. A single female house mouse can produce dozens of offspring a year, and those young breed within weeks — so a couple of mice behind the stove become a wall-to-wall infestation in a season. By the time droppings or scratching in the walls show up, the population is almost always larger than what you can see.",
      "Rodents aren't just unsettling — they're a real hazard. They contaminate food and surfaces with droppings and urine, spread bacteria and disease, and chew constantly to keep their teeth filed down — including on electrical wiring, which is a documented cause of house fires. Their gnawing also damages insulation, drywall, and stored belongings. That's why getting ahead of a rodent problem is about protecting your property and your family's health, not just comfort.",
      "Store-bought snap traps and a few hardware-store bait blocks rarely solve a real infestation: they catch a handful of rodents while the rest keep breeding, and the population rebounds from outside within weeks. Professional rodent control works as an ongoing program — secured rodenticide bait stations around the exterior intercepting rodents before they get in, targeted trapping and baiting indoors, and scheduled monthly monitoring that keeps pressure on the population year-round. Every pro in our directory is licensed and insured, uses EPA-registered rodenticides in tamper-resistant stations, and gives you a free, no-obligation quote before any work begins.",
    ],

    signsHeading: 'Signs of a Rodent Infestation',
    signs: [
      'Droppings — small dark pellets along walls, in cabinets, drawers, or under sinks',
      'Gnaw marks on food packaging, baseboards, wiring, and stored items',
      'Scratching, scurrying, or gnawing sounds in walls, ceilings, or the attic, especially at night',
      'Greasy rub marks and dark smudges along baseboards and the routes rodents travel',
      'Nests of shredded paper, fabric, or insulation tucked behind appliances or in storage',
      'A musky, ammonia-like odor that grows stronger as the population builds',
      'Pets fixating on a wall, appliance, or cabinet they suddenly can\'t leave alone',
    ],

    typesHeading: 'Rodents We Treat',
    types: [
      { name: 'House mouse', text: "The most common indoor rodent in the country. Small, curious, and a relentless breeder — it nests in walls, cabinets, and appliances and contaminates far more food than it eats. Controlled with interior trapping plus exterior bait stations to stop reinvasion." },
      { name: 'Norway rat (brown/sewer rat)', text: "A large, burrowing rat that nests at ground level — in crawl spaces, basements, under slabs, and along foundations. Its powerful gnawing damages structures and wiring. Managed with tamper-resistant bait stations and burrow baiting around the perimeter." },
      { name: 'Roof rat (black rat)', text: "An agile climber that travels overhead lines and tree limbs and nests up high in attics and upper walls. Common in warmer and coastal regions. Controlled with elevated bait stations, attic trapping, and exterior baiting along its runways." },
      { name: 'Deer mouse & field mouse', text: "Rural and suburban invaders that push indoors as the weather cools, often into garages, sheds, and outbuildings. Treated with monitored bait stations and trapping — and taken seriously because they can carry hantavirus." },
    ],

    treatmentsHeading: 'How the Pros Eliminate Rodents',
    treatments: [
      { name: 'Inspection & activity mapping', text: "Your technician identifies the species, locates nests, runways, droppings, and entry points, and gauges how large the population is. That inspection drives where every bait station and trap goes." },
      { name: 'Tamper-resistant exterior bait stations', text: "The foundation of a rodent program. Locked, weatherproof stations loaded with EPA-registered rodenticide are placed around the building's perimeter, intercepting and reducing the outdoor population before it ever gets inside. Safe around kids and pets because the bait is secured inside the station." },
      { name: 'Interior trapping & targeted baiting', text: "Indoors, pros rely on snap and multi-catch traps plus tamper-resistant bait placements in voids and along runways — removing the active population quickly without leaving rodenticide out in living spaces." },
      { name: 'Monthly monitoring & service', text: "Rodent pressure never really stops, so the stations are checked, cleaned, and refreshed on a recurring monthly (or quarterly) schedule. Ongoing monitoring catches new activity early and keeps the population suppressed year-round." },
      { name: 'Sealing key entry points', text: "As part of the program, pros seal the obvious gaps rodents use — around utility lines, vents, and door sweeps — so baiting and trapping aren't fighting a constant flow of new rodents from outside." },
    ],

    costHeading: 'How Much Does Rodent Control Cost?',
    costNote: "Rodent control cost depends on the severity of the infestation, the size and layout of your property, and whether you want a one-time knockdown or ongoing protection. Most homeowners choose a recurring program — an initial service to clear the active population followed by monthly or quarterly monitoring and bait-station service — because rodents constantly re-pressure a building from outside and ongoing baiting is what keeps them gone. Every contractor in our directory gives a free, property-specific quote before any work starts, so you'll know your exact cost up front.",

    preventionHeading: 'How to Help Keep Rodents Out',
    prevention: [
      'Store food and pet food in sealed metal or hard-plastic containers, and never leave pet food out overnight',
      'Clean up crumbs and spills promptly and take out trash regularly in tight-lidded bins',
      'Seal gaps larger than a quarter-inch around pipes, vents, and utility lines, and add door sweeps',
      'Cut back tree limbs and shrubs touching the roof or walls that give roof rats a path in',
      'Clear yard clutter, woodpiles, and dense ground cover that give rodents harborage near the foundation',
      'Keep an exterior bait-station program in place year-round to intercept rodents before they get indoors',
    ],

    faqs: [
      { q: 'How much does rodent control cost?', a: "It depends on how severe the infestation is, your property's size, and whether you want a one-time treatment or an ongoing program. A single knockdown service for a small problem is the most affordable option, while most homeowners choose a recurring plan — an initial service plus monthly or quarterly bait-station monitoring — because that's what keeps rodents from coming back. Every contractor in our directory gives a free, property-specific quote before any work starts." },
      { q: 'Why do I still have mice after setting traps myself?', a: "Because a few traps only remove the rodents currently active in one area, while the rest of the population keeps breeding out of sight — and new rodents push in from outside within weeks. Mice breed fast enough to outpace DIY trapping. A professional program combines interior trapping with exterior rodenticide bait stations and monthly monitoring, which is what actually drives the population down and keeps it there." },
      { q: 'How does a rodent baiting program work?', a: "Licensed pros place EPA-registered rodenticide inside locked, tamper-resistant stations around the exterior of your building. Rodents feed on the bait as they forage, which reduces the outdoor population before it can get inside. Indoors, technicians typically use traps and secured placements instead of loose bait. The stations are serviced and refreshed on a recurring schedule so protection never lapses." },
      { q: 'Is rodenticide safe around kids and pets?', a: "Yes, when it's applied by a licensed professional. The bait is locked inside tamper-resistant stations that children and pets can't open, and indoors most pros rely on traps rather than exposed bait. This is a major advantage over loose store-bought bait blocks, which can be reached by pets and wildlife. Your technician will place every station where it's effective and out of reach." },
      { q: 'How long does it take to get rid of rats or mice?', a: "A typical infestation comes under control within a couple of weeks of starting professional service, with the active population dropping quickly once baiting and trapping are in place. Heavier infestations take longer and need follow-up visits. Because rodents continually re-pressure a property from outside, ongoing monthly monitoring is what keeps them from returning after the initial cleanup." },
      { q: 'How often should rodent service be done?', a: "Most rodent programs run on a monthly or quarterly schedule. Exterior bait stations need to be checked, cleaned, and refreshed regularly to stay effective, and routine monitoring catches new activity before it becomes another infestation. Your pro will recommend a frequency based on your property and how much rodent pressure your area has." },
      { q: 'Are rodents actually dangerous, or just a nuisance?', a: "They're a genuine hazard. Rodents contaminate food and surfaces with droppings and urine and can spread diseases such as salmonellosis and hantavirus. They also gnaw constantly — including on electrical wiring, which is a recognized cause of house fires — and damage insulation and structures. Controlling them protects both your health and your property." },
    ],
  },
};

function getService(slug) {
  return Object.prototype.hasOwnProperty.call(SERVICES, slug) ? SERVICES[slug] : null;
}

module.exports = { SERVICES, getService };
