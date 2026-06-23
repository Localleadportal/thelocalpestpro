'use strict';

// ── Marietta, GA — city hub ──────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city pages
// (Woodstock, Canton, Holly Springs). Those are fast-growing exurbs; Marietta is
// a different animal — an OLDER, established Cobb County city with a dense, mature
// tree canopy — so the angle, structure, and local hooks here are written fresh
// and lead with Marietta's own character. Targets local intent ("pest control
// Marietta", "Marietta exterminator", "Marietta pest control GA"). Rendered by
// views/city.ejs (hub) at /georgia/marietta/.
//
// `county` drives the LeadPortal contractor lookup — Marietta is in COBB County,
// so an assigned Cobb County 'Pest Control' contractor shows on the page (name +
// phone + PestControlService schema); until one is assigned the page falls back
// to the shared (844) directory line and a Service schema node. Either path is
// fully dynamic and contractor-AGNOSTIC — no name, phone, rating, or review is
// ever hardcoded, so the page survives a county reassignment with zero edits.
//
// This is a HUB ONLY — pest categories are covered as on-page sections (the
// detail section below + season + signs blocks). No per-pest spoke pages are
// built yet, so pestPages is intentionally empty and the hub's pest cards link
// to the on-page detail section (#pests-detail) rather than to unbuilt routes.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): county seat
// of Cobb County; in metro Atlanta, northwest of downtown Atlanta; one of the
// metro's older, established cities with a historic downtown square (Marietta
// Square) and the older neighborhoods around it; a mix of established/older
// housing stock and newer infill construction; a dense, mature tree canopy; ZIPs
// 30060/30062/30064/30066/30067/30068 (never mapped to specific streets); nearby
// Cobb communities Kennesaw, Smyrna, Acworth, Powder Springs, Mableton, East
// Cobb (service-area names only). REGIONAL truths: humid subtropical climate with
// a long warm season; eastern subterranean termite is the dominant Georgia
// termite (Formosan termites rare in GA, not established in metro Atlanta); red imported fire
// ants established statewide; metro Atlanta is a top-five U.S. mosquito metro
// (Orkin 2025); the Georgia Dept. of Agriculture's Structural Pest Control
// Commission regulates/licenses. Do NOT name parks, schools, subdivisions,
// streets, ordinances, population figures, or any unverified hyper-local detail.

module.exports = {
  name: 'Marietta',
  slug: 'marietta',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30060', '30062', '30064', '30066', '30067', '30068'],
  // Nearby Cobb County communities we also serve — NOT Marietta subdivisions.
  // Service-area names only; none have a built city hub yet, so they render as
  // plain badges (the template links only to siblings that exist).
  neighborhoods: ['Kennesaw', 'Smyrna', 'Acworth', 'Powder Springs', 'Mableton', 'East Cobb'],

  // OG card — shared branded 1200×630 default; set a Marietta-specific path here
  // to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Marietta" + GA in the title; the contiguous
  // long-tail phrases live in the meta description, headings, and body below.
  metaTitle: 'Pest Control Marietta, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Marietta, GA homeowners trust — termite treatment, mosquito control, rodent control, roaches & bed bug exterminator. Free quote, call today.",
  h1: 'Pest Control in Marietta, GA',
  heroSub: "Marietta is one of metro Atlanta's older, established cities — a Cobb County seat of decades-settled homes shaded by a dense, mature tree canopy. That mix of aging structures and heavy tree cover, paired with Georgia's humid, long warm season, keeps termites, mosquitoes, roaches, and rodents working close to year-round. Get a licensed Marietta exterminator who knows the area, fast.",

  overviewHeading: 'Marietta Pest Control GA: Built for an Older, Tree-Shaded City',
  overview: [
    "Unlike the brand-new exurbs farther up I-75 and I-575, Marietta is an established city — the Cobb County seat, anchored by the historic Marietta Square and the older neighborhoods that grew up around it, now woven together with newer infill construction. That age cuts both ways for pests. Decades-old homes have had years for foundations to settle, for crawlspaces to age, and for small gaps around aging trim, plumbing, and brick to open up — exactly the entry points ants, roaches, and rodents exploit — while newer builds sit on graded soil that subterranean termites readily colonize.",
    "Then there's the canopy. Marietta's mature, tree-shaded lots are part of its appeal, but heavy tree cover also hands pests an advantage: limbs become highways onto the roofline for rats, deep shade and leaf litter hold the moisture roaches and mosquitoes need, and older wood near established trees draws carpenter ants and termites. Add Georgia's humid subtropical climate — long, sticky summers and mild winters — and most pests here never get a real off-season, which is why a recurring, locally-tuned plan beats one-off treatments. Wherever you are in Marietta, the licensed, insured pros in our directory quote your specific property for free before any work begins — honest, local pest control Marietta homeowners can rely on.",
  ],

  sections: [
    {
      heading: 'Why Older Marietta Homes Need Year-Round Protection',
      paras: [
        "Metro Atlanta sits inside one of the heaviest termite-pressure regions in the United States, and Marietta is squarely in it. Eastern subterranean termites — the dominant termite across Georgia — are active throughout the area, foraging up through the soil into sill plates, joists, and framing. Because winters here are mild, those colonies keep feeding underground all year instead of going dormant, so the slow, hidden damage to an older home never really pauses. Termite damage typically isn't covered by homeowners insurance, which makes steady protection the cost-effective choice.",
        "Termites are only the start. Red imported fire ants are established statewide and throw up painful mounds across Marietta lawns. Metro Atlanta ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and the deep shade and standing water of Marietta's tree-canopied yards keep them breeding from spring into fall. Add the German roaches, outdoor 'palmetto bugs,' and roof rats that thrive in the humidity and use mature limbs to reach the roof, and a steady professional barrier from a licensed Marietta exterminator makes far more sense than chasing one infestation at a time.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Behind Most Marietta Pest Control Calls',
      paras: [
        "An older, tree-shaded Cobb County city sees a predictable cast of pests. Here's what the licensed pros in our directory treat most around Marietta:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are the dominant termite in Georgia and a constant threat to Marietta's older wood-framed homes. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings — termite treatment Marietta GA homeowners can count on, backed by a renewable bond." },
        { name: 'Fire Ants', text: "Red imported fire ants are established statewide, and their dome-shaped mounds erupt across Marietta lawns and common areas. A broadcast bait that workers carry underground to the queen, plus targeted mound treatment and a perimeter barrier, keeps a yard usable for kids and pets." },
        { name: 'Mosquitoes', text: "Metro Atlanta is a top-five U.S. mosquito metro, and Marietta's deep tree canopy gives adults the cool, shaded daytime harborage they crave. Yard barrier sprays and larviciding of standing water — mosquito control Marietta families use to take the backyard back from spring through fall." },
        { name: 'Cockroaches', text: "Two very different problems: German roaches that breed indoors in kitchens and baths, and the big outdoor 'palmetto bugs' (smokybrown and American roaches) that live in mulch, leaf litter, and crawlspaces and wander in. Gel baiting, crack-and-crevice work, and a perimeter barrier clear both." },
        { name: 'Rodents', text: "When nights cool, roof rats use Marietta's mature limbs as bridges to the roofline, while Norway rats and house mice push in low through gaps in older foundations. Effective rodent control Marietta GA homeowners trust pairs trapping with exclusion — sealing the entry points so they can't return." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build through summer under eaves, soffits, and deck rails on older homes, turning aggressive in fall. Pros knock down accessible nests and treat the spots they keep rebuilding." },
        { name: 'Bed Bugs', text: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture and spread fast through any home, apartment, or rental. A licensed bed bug exterminator Marietta residents can call uses whole-room heat or a targeted residual program to kill every life stage, with follow-up verification." },
      ],
    },
    {
      heading: 'Signs of Termites in Older Marietta Homes',
      paras: [
        "Termites eat from the inside out, so in Marietta's decades-old housing stock the damage is often well underway before anyone notices. Knowing the tells helps you catch it early:",
      ],
      bullets: [
        "Pencil-thin mud tubes climbing foundation walls, brick piers, or crawlspace supports",
        "Winged swarmers indoors on warm, humid spring days, or small heaps of shed translucent wings on windowsills",
        "Trim, baseboards, or subfloor that sound hollow or papery when tapped — common in aging wood",
        "Doors and windows that begin to stick as damaged or settling wood warps",
        "Bubbling or blistered paint, or faint lines tracking across drywall and trim",
      ],
    },
    {
      heading: 'Marietta Pest Season — What to Watch For',
      paras: [
        "Pest pressure rises and falls through the year in Marietta. Here's roughly what local homeowners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid days set off termite swarms — a cloud of winged swarmers, or shed wings on a windowsill, is the classic warning of an active colony. Ants wake up, carpenter bees bore into deck and trim wood, and the season's first rains start filling mosquito breeding sites in shaded yards. The best window to lock in protection before summer." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes hit their stride across the metro Atlanta area, fire ant mounds spread through Marietta lawns, wasps and yellowjackets build under eaves and decks, and roaches push indoors out of the heat and humidity. Fleas and ticks peak on pets and in the tree-shaded undergrowth." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for a warm place to overwinter — this is when you start hearing scratching in the attic, often after rats cross from mature trees. Breaking-up yellowjacket colonies turn aggressive. A smart time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Marietta's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding below ground year-round. Recurring service holds the protective barrier through the cold so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Nearby Cobb County Areas We Serve',
      paras: [
        "The local pros in our directory cover Marietta across its ZIP codes and the surrounding Cobb County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Marietta',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Marietta and the wider Cobb County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Marietta home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Marietta homeowners with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Marietta area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Marietta?', a: "The big ones are subterranean termites (metro Atlanta is a heavy termite-pressure area and the eastern subterranean is Georgia's dominant species), red imported fire ants in lawns, mosquitoes bred in shaded, tree-canopied yards, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that use mature limbs to reach the roofline as nights cool. The local pros in our directory treat every one of them." },
    { q: 'Do older Marietta homes need different pest control?', a: "Often, yes — they tend to need closer attention. Marietta's established housing stock has had decades for foundations to settle, crawlspaces to age, and small gaps to open around trim, plumbing, and brick, all of which give ants, roaches, and rodents easy entry. A pro inspects those weak points and pairs treatment with exclusion and sealing, rather than just spraying, so the fix actually holds in an older home." },
    { q: 'Why does Marietta have so many mosquitoes?', a: "Two reasons. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and Marietta's dense, mature tree canopy adds deep shade and damp leaf litter that give adults cool daytime harborage right beside the patio. Treating those resting areas together with any standing water on the property is what actually brings the population down." },
    { q: 'Are Marietta pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your home. Every Marietta exterminator we connect you with is a licensed, insured Georgia pro." },
    { q: 'Can I get same-day or emergency pest control in Marietta?', a: "Often, yes — many of the local pros serving Marietta offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue, or rodents in the house. Call and we'll route you to a Cobb County exterminator who can get out quickly." },
    { q: 'Which areas around Marietta do you serve?', a: "Beyond Marietta's ZIP codes, the pros in our directory serve the surrounding Cobb County communities, including Kennesaw, Smyrna, Acworth, Powder Springs, Mableton, and East Cobb. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Marietta pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Marietta Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Marietta yet, so these cards
  // are in-page navigation — each links to the on-page detail section
  // (#pests-detail) rather than to an unbuilt /georgia/marietta/<pest>/ route.
  // Blurbs are written fresh for Marietta (no reuse from the sibling cities).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "Eastern subterranean termites — Georgia's dominant species — threaten Marietta's older wood-framed homes. Soil barriers, bait systems, and the Georgia termite letter." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Travel-driven bed bugs spread fast through Marietta homes, apartments, and rentals. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch, leaf litter, and crawlspaces of shaded Marietta lots — gel baiting and a perimeter barrier that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Marietta's dense canopy gives them shade to rest in. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "As nights cool, roof rats cross mature limbs to the roofline while mice push in low through older foundations. Trapping, exclusion that seals the entry points, and monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in the lawn, wasps under the eaves, spiders and ants indoors — one recurring quarterly plan covers the everyday pests a Marietta home faces, year-round." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};
