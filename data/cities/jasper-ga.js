'use strict';

// ── Jasper, GA — city hub ────────────────────────────────────────────────────
// DISAMBIGUATION: this is Jasper, GEORGIA — the Pickens County seat in the North
// Georgia mountain foothills — NOT Jasper, Alabama / Jasper, Texas / Jasper,
// Indiana (all common place names). Every title, heading, meta tag, and schema
// node pairs "Jasper" with GA / Georgia / Pickens County so search engines and
// readers never confuse it with the other Jaspers.
//
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the Cherokee/Paulding county city pages —
// Canton, Holly Springs, Woodstock, Dallas, Hiram). This is the FIRST Pickens
// County page, so there is no sibling to differentiate against yet; it leads
// with Jasper's own anchors. Targets local intent ("pest control jasper ga",
// "jasper ga exterminator"). Rendered by views/city.ejs (hub) at /georgia/jasper/.
//
// `county` drives the LeadPortal contractor lookup — Jasper is the seat of
// Pickens County, so an assigned Pickens County 'Pest Control' contractor shows
// on this page (name + phone + PestControlService schema). NOTE: the assignment
// in LeadPortal is recorded under the bare "Pickens" key, not "Pickens County";
// lib/contractor.js's countyVariants() tries both forms, so "Pickens County"
// here (kept for display consistency with sibling pages) still resolves. The
// currently-assigned pro is McCardle's Pest Management; until/unless that changes
// the page falls back to the shared (844) directory line and a Service schema node.
//
// HUB ONLY — no per-pest spoke pages are built. The six hub cards render as
// non-clickable <div>s (no `pestPages` entries), so nothing links to a 404; each
// card auto-upgrades to a link if/when its spoke is authored later.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): county seat
// of Pickens County; in the North Georgia mountain foothills (Blue Ridge / Appalachian
// foothills), well north of metro Atlanta; nicknamed the "First Mountain City";
// small-town / rural in character, with wooded, elevated terrain and larger,
// forested lots — more rural and forested than the metro suburbs; GA-515 (the
// Appalachian Highway) is the main corridor through town (the ONLY road nameable);
// nearby Pickens communities Tate, Talking Rock, Marble Hill, and Nelson; ZIP
// 30143; area codes 706/762; humid summers with cooler foothill winters; Georgia
// is a heavy termite-pressure state (eastern subterranean is the DOMINANT
// wood-destroyer; Formosan termites are rare in GA and NOT established in the
// North Georgia mountains — do not claim them here); red imported fire ants are
// present statewide (all 159 GA counties); metro Atlanta — to the SOUTH — is a
// top-five U.S. mosquito metro (Orkin 2025), framed only as REGIONAL context, never
// as a Jasper-specific stat; structural pest control is regulated by the Georgia
// Dept. of Agriculture's Structural Pest Control Commission. Do NOT name
// subdivisions, schools, parks, streets (other than GA-515), or invent stats.

module.exports = {
  name: 'Jasper',
  slug: 'jasper',
  county: 'Pickens County',
  region: 'GA',
  zips: ['30143'],
  // Nearby Pickens County communities we also serve — NOT Jasper subdivisions.
  // Service-area names only (approved facts: Tate, Talking Rock, Marble Hill, and
  // Nelson are Pickens County communities). No invented specifics.
  neighborhoods: ['Tate', 'Talking Rock', 'Marble Hill', 'Nelson'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default; this
  // explicit value just makes that intent obvious. Set a different path here to
  // give Jasper its own card later.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Jasper, GA | Pickens County Pest Pro',
  metaDesc: "Licensed pest control in Jasper, GA — the Pickens County seat in the North Georgia foothills. Termites, mosquitoes, roaches, rodents & fire ants. Free quote.",
  h1: 'Pest Control in Jasper, GA',
  heroSub: "As the Pickens County seat in the North Georgia mountain foothills — Jasper proudly calls itself the \"First Mountain City\" — it pairs humid summers with cooler foothill winters across wooded, elevated, more rural terrain, and that keeps termites, mosquitoes, roaches, and rodents active through the long warm season. Get a licensed local exterminator who knows Jasper, fast. (Jasper, Georgia — not Jasper, Alabama or Texas.)",

  overviewHeading: 'Pest Control for Jasper & the Pickens County Foothills',
  overview: [
    "Jasper sits in the North Georgia mountain foothills as the seat of Pickens County — the self-described \"First Mountain City,\" well north of metro Atlanta and noticeably more rural, wooded, and elevated than the suburbs down the GA-515 corridor. That setting shapes the pest pressure here: homes on larger, forested lots back up to woods, creeks, and outbuildings, so rodents, moisture pests, and nuisance insects have a short trip from the tree line to the house. Newer construction sits on freshly graded soil that subterranean termites readily colonize, while older homes and tree-shaded properties have had time for ants, roaches, and rodents to find the gaps.",
    "Climate ties it together. Jasper's foothill winters run a bit cooler than Atlanta's, but the summers are long, warm, and humid, and the damp, wooded ground around many properties holds moisture that pests thrive on — so most never get a true off-season, which is why a recurring, locally-tuned plan tends to beat one-off treatments. Whether you're in town in 30143 or out toward Tate, Talking Rock, or Marble Hill, the licensed, insured pros in our directory quote your specific Pickens County property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Is Pest Pressure Year-Round in the Jasper Foothills?',
      paras: [
        "Georgia sits in one of the heaviest termite-pressure regions in the United States, and the North Georgia foothills are no exception. Eastern subterranean termites are the dominant wood-destroyer across the area, foraging underground and tunneling up through mud tubes into sills, joists, and framing. They keep feeding through the warm season and barely slow in Jasper's relatively mild winters, so the threat to your home's structure never really pauses. Standard homeowners insurance almost never pays for termite repairs, so staying protected is far cheaper than fixing the damage later.",
        "It isn't only termites. Red imported fire ants are present across Georgia — all 159 counties — and turn up in Jasper-area lawns and open turf, building painful mounds. Mosquito pressure across metro Atlanta to the south ranks among the worst in the country (the metro landed in the top five on Orkin's 2025 list), and while Jasper sits well north of the city, North Georgia's humid summers and the standing water in wooded, creek-fed low spots keep mosquitoes breeding here from spring into fall. Add the rodents that push in from the surrounding woods and outbuildings, the moisture-loving roaches and occasional invaders that wooded lots and crawlspaces produce, and most Jasper homes benefit from a steady, professional barrier rather than reacting one infestation at a time.",
      ],
    },
    {
      heading: 'What Does Pest Season Look Like in Jasper?',
      paras: [
        "Pest pressure shifts through the year in Jasper. Here's the seasonal rhythm Jasper homeowners can plan around:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Spring's first warm, humid days bring termite swarms — a flurry of winged swarmers at a window, or shed wings on the sill, points to a colony already working nearby. Ants reappear, carpenter bees drill into decks and eaves, and early rains pool in the wooded low spots and roadside ditches along the GA-515 corridor where mosquitoes start to breed. Getting protection set now beats waiting for the summer peak." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes work the shaded, humid yards and tree lines, fire ant mounds multiply in open lawns, wasp and yellowjacket nests grow large under eaves and decks, and roaches and other invaders push indoors out of the heat and humidity. Fleas and ticks are at their most active on pets and in brushy, wooded yards." },
        { name: 'Fall (Sep–Nov)', text: "When the foothill nights cool, roof rats, Norway rats, and house mice head indoors to overwinter, and Jasper's wooded edges and outbuildings push plenty toward the house — the season scratching starts in the attic. Yellowjacket nests turn cranky and defensive as they wind down. A good stretch to close up entry points ahead of winter." },
        { name: 'Winter (Dec–Feb)', text: "Jasper's foothill winters run colder than Atlanta's but seldom finish a pest problem off. Mice stay busy indoors, roaches hang on in heated, humid corners, and subterranean termites carry on underground. Year-round service keeps the barrier up so the warm season doesn't reopen with a rush." },
      ],
    },
    {
      heading: 'Pickens County Areas We Serve Around Jasper',
      paras: [
        "The local pros in our directory cover Jasper and the surrounding Pickens County communities. If you're out in one of these nearby Pickens County communities, we can set you up with a licensed exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Do You Get Started in Jasper?',
      cards: [
        { name: '1. Call for a free quote', text: "Phone the directory and we'll connect you with a licensed, insured exterminator who covers Jasper and the rest of Pickens County — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, reads the wooded foothill setting, confirms exactly what the pest is and how far it reaches, and recommends a one-time or recurring treatment." },
        { name: '3. Problem solved', text: "Licensed technicians treat the problem, seal the entry points, and set up prevention using EPA-registered products at label rates, with family- and pet-safe options — and most guarantee the work." },
      ],
    },
    {
      heading: 'How Our Jasper Pest Pro Directory Works',
      paras: [
        "The Local Pest Pro is a directory that connects Jasper homeowners with licensed, insured local exterminators across Pickens County — we're not a single company. When you call, you reach the pest control pro assigned to the Jasper area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Jasper, GA?', a: "It varies. The total depends on the pest, how far the infestation has gone, and the size of your home and lot — and Jasper's larger, wooded foothill parcels can take more ground to cover. A recurring general plan is the easiest on the budget, while specialty jobs like termite or bed bug work cost more for the equipment and repeat visits. You'll get a free, property-specific quote up front from any pro in our directory, with no surprises at the door." },
    { q: 'What pests are most common in Jasper and Pickens County?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state, with eastern subterranean termites the dominant wood-destroyer), red imported fire ants in lawns, mosquitoes bred in shaded yards and wooded, creek-fed low spots, roaches and other moisture-loving invaders that thrive around damp, wooded lots and crawlspaces, and roof rats and mice that push in from the surrounding woods and outbuildings as nights cool. Every one is standard work for the pros in our directory." },
    { q: 'Which areas around Jasper, GA do you serve?', a: "Beyond Jasper's 30143 ZIP code, the pros in our directory serve the surrounding Pickens County communities, including Tate, Talking Rock, Marble Hill, and Nelson, on up and down the GA-515 corridor. Call and we'll route you to a licensed exterminator who covers your corner of Pickens County." },
    { q: 'Do wooded, rural Jasper properties have different pest pressure?', a: "Often, yes. Jasper sits in the North Georgia foothills, and homes on larger, forested lots back up to woods, creeks, and outbuildings — a short trip for rodents heading toward a warm attic in fall, and steady habitat for moisture pests, wasps, and ticks. Mild winters and damp, shaded ground keep that pressure going much of the year, which is why a recurring plan tuned to a wooded lot tends to outperform one-off treatments." },
    { q: 'Are Jasper, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Jasper?', a: "Often, yes — many of the local pros serving Jasper offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Pickens County exterminator who can get out quickly." },
    { q: 'Is pest treatment safe for children and pets?', a: "Yes. Pros serving Jasper apply EPA-registered products at label rates and keep family- and pet-safe or low-toxicity options on hand, concentrating treatment on the exterior, entry points, and cracks and crevices instead of living space. If a treated spot needs a little time before re-entry, your technician will say so — usually only until it dries." },
  ],

  finalCtaHeading: 'Get Your Free Jasper, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six categories. No per-pest spoke pages are built for Jasper,
  // so every card renders as a NON-CLICKABLE <div> (city.ejs makes a card a link
  // only when a matching city.pestPages entry exists — there are none here). The
  // hrefs are kept so each card auto-upgrades to a link if a spoke is authored
  // later. Blurbs are written fresh for Jasper (no reuse from sibling cities).
  // Fire ants / wasps / ants / spiders / fleas fold UNDER General Pest Control —
  // no seventh card.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/jasper/termite-control/',
      blurb: "Georgia is one of the nation's heaviest termite zones, and eastern subterranean termites are the dominant wood-destroyer in the North Georgia foothills. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/jasper/bed-bug-treatment/',
      blurb: "Travel-driven bed bugs hitchhike home and spread fast through Jasper houses, apartments, and rentals. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/jasper/cockroach-control/',
      blurb: "German roaches breeding indoors and big 'palmetto bugs' wandering in from the mulch, woodpiles, and crawlspaces of Pickens County's humid, wooded lots — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/jasper/mosquito-control/',
      blurb: "Mosquito pressure across metro Atlanta to the south is among the worst in the U.S., and North Georgia's humid summers and wooded, creek-fed low spots give them standing water to breed around Jasper. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/jasper/rodent-control/',
      blurb: "As Jasper nights cool, roof rats, Norway rats, and house mice push in from the surrounding woods and outbuildings into attics and walls. A pro traps out the active rodents, seals the gaps they slip through, and keeps monitoring so they don't return." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/jasper/pest-control/',
      blurb: "Red imported fire ants in the lawn, plus spiders, wasps, nuisance ants, and fleas around wooded Pickens County properties. A single quarterly plan keeps the whole list in check the year round." },
  ],

  // No pestPages — HUB ONLY. (Adding an entry here later upgrades its card to a
  // link to the matching /georgia/jasper/<pest>/ spoke.)
};
