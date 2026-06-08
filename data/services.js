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
    h1: 'Bed Bug Treatment',
    intro: "Whole-room heat treatment and targeted residual programs that eliminate bed bugs at every stage — eggs, nymphs, and adults — with follow-up verification.",
    metaDesc: 'Find a licensed bed bug treatment pro near you. Heat treatment and targeted programs that eliminate bed bugs at every life stage.',
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
    h1: 'Mosquito Control',
    intro: "Yard barrier treatments, larvicide for standing-water breeding sites, and recurring seasonal service that makes your outdoor space usable again.",
    metaDesc: 'Find a licensed mosquito control pro near you. Yard barrier sprays, breeding-site treatment, and seasonal programs to reclaim your yard.',
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
