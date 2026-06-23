'use strict';

// ── Smyrna, GA — city hub ────────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cobb County city hub
// (Marietta) — and deliberately NOT from the Cherokee exurb hubs (Woodstock,
// Canton, Holly Springs). Where Marietta leans on an older, established city
// with a mature tree canopy, Smyrna's whole angle is the OPPOSITE end of Cobb:
// one of metro Atlanta's most heavily REDEVELOPED inner-ring suburbs — dense,
// newer townhome / condo / apartment / mixed-use construction packed close
// together just outside I-285. Structure, hooks, and FAQs are written fresh so
// the two Cobb pages read as clearly different pages. Targets local intent
// ("pest control Smyrna", "Smyrna exterminator", "Smyrna GA pest control").
// Rendered by views/city.ejs (hub) at /georgia/smyrna/.
//
// `county` drives the LeadPortal contractor lookup — Smyrna is in COBB County,
// so an assigned Cobb 'Pest Control' contractor is server-rendered on the page
// (name + phone + PestControlService schema + license badge). Until/unless one
// is assigned, the page falls back to the shared (844) directory line and a
// plain Service schema node. Both paths are fully dynamic and contractor-
// AGNOSTIC — no name, phone, rating, or review is ever hardcoded, so the page
// survives a county reassignment with zero edits.
//
// This is a HUB ONLY — pest categories are covered as on-page sections (the
// detail block + season + signs blocks). No per-pest spoke pages are built yet,
// so pestPages is intentionally empty and the hub's pest cards link to the
// on-page detail section (#pests-detail) rather than to unbuilt routes (the
// template renders them as non-clickable <div>s while pestPages is empty).
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): a city in
// Cobb County, in metro Atlanta, just outside (northwest of) I-285 between the
// Perimeter and the Chattahoochee River; one of the metro's most actively
// redeveloped inner-ring suburbs, with a high concentration of newer townhome,
// condo, apartment, and mixed-use construction packed at suburban density; the
// walkable Smyrna Market Village mixed-use district is a known local landmark;
// ZIPs 30080 / 30082 (never mapped to specific streets); nearby Cobb communities
// Vinings, Mableton, Marietta, Austell, Powder Springs, Cumberland (service-area
// names only). REGIONAL truths: humid subtropical climate with a long warm
// season; eastern subterranean termite is the dominant Georgia termite (Formosan
// established in parts of metro Atlanta); red imported fire ants established
// statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025); the
// Georgia Dept. of Agriculture's Structural Pest Control Commission
// regulates/licenses. Do NOT name parks, schools, subdivisions, streets,
// ordinances, population figures, or any unverified hyper-local detail.

module.exports = {
  name: 'Smyrna',
  slug: 'smyrna',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30080', '30082'],
  // Nearby Cobb County communities we also serve — NOT Smyrna subdivisions.
  // Service-area names only; the template links only the ones that already have
  // a built city hub (Marietta), the rest render as plain badges.
  neighborhoods: ['Vinings', 'Mableton', 'Marietta', 'Austell', 'Powder Springs', 'Cumberland'],

  // OG card — shared branded 1200×630 default; set a Smyrna-specific path here
  // to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Smyrna" + GA in the title; the contiguous
  // long-tail phrases live in the meta description, headings, and body below.
  metaTitle: 'Pest Control Smyrna, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Smyrna, GA for townhomes, condos & single-family homes — termite treatment, mosquito control, rodent control & bed bug exterminator. Free quote — call now.",
  h1: 'Pest Control in Smyrna, GA',
  heroSub: "Smyrna is one of metro Atlanta's fastest-redeveloping inner-ring suburbs — a dense Cobb County mix of new townhomes, condos, apartments, and mixed-use blocks built close together just outside I-285. That shared-wall density, paired with Georgia's humid, long warm season, lets termites, roaches, rodents, and bed bugs move easily from one unit to the next. Reach a licensed Smyrna exterminator who knows the area, fast.",

  overviewHeading: 'Smyrna Pest Control GA: Built for a Dense, Redeveloping Suburb',
  overview: [
    "Smyrna doesn't look like the rest of Cobb County. Sitting just northwest of I-285, between the Perimeter and the Chattahoochee, it has been reshaped by years of redevelopment into a tight grid of newer townhomes, condos, apartment communities, and mixed-use blocks — the walkable Smyrna Market Village district is the local symbol of that change. For pests, this kind of density rewrites the playbook. Where a sprawling lot gives one household its own pest problem, attached and clustered housing lets German roaches, bed bugs, and rodents travel wall-to-wall, so what starts in one unit can surface three doors down.",
    "New construction shifts the pressure in another direction too. When ground is graded and rebuilt, subterranean termites readily move into the fresh fill and the wood framing going up on top of it, and the disturbed soil scatters fire ant colonies looking for a new place to mound. Add the stormwater catch basins, retention areas, and shaded breezeways that come with dense suburban building — prime mosquito-breeding real estate — and Georgia's humid subtropical climate that barely lets pests pause all year, and you have a city where a recurring, locally-tuned plan beats one-off treatments. Wherever you live in Smyrna, the licensed, insured pros in our directory will look over your exact property and quote it free before anyone starts work — straightforward, local pest control Smyrna homeowners can rely on.",
  ],

  sections: [
    {
      heading: 'Why Smyrna Density and New Construction Drive Pest Pressure',
      paras: [
        "Metro Atlanta sits in one of the heaviest termite-pressure regions in the country, and Smyrna is right in the thick of it. Eastern subterranean termites — Georgia's dominant termite — forage up through the soil into sill plates, joists, and framing, and the aggressive Formosan termite has established in parts of metro Atlanta. Smyrna's wave of new and rebuilt construction is a particular draw: graded, disturbed soil and fresh framing give subterranean colonies an easy foothold, and because the region's winters are mild, those colonies keep feeding underground all year instead of going dormant. Termite damage usually isn't covered by homeowners insurance, so steady protection is the cost-effective call.",
        "Density does the rest. Red imported fire ants are established statewide and push up mounds wherever construction churns the ground. Metro Atlanta sits among the nation's worst metros for mosquitoes — top five on Orkin's 2025 ranking — and the catch basins, retention ponds, and shaded breezeways of closely-built communities give larvae endless places to develop. Most telling for Smyrna: in attached townhomes, condos, and apartments, German roaches, bed bugs, and rodents spread along shared walls, plumbing chases, and utility runs, so treating a single unit in isolation rarely holds. A steady professional program from a licensed Smyrna exterminator is far more reliable than chasing each flare-up alone.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Driving Most Smyrna Pest Control Calls',
      paras: [
        "A dense, fast-building inner-ring suburb has its own signature lineup of pests. These are the ones the licensed pros in our directory get called for most across Smyrna:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant species and a real risk to Smyrna's newer wood-framed townhomes and homes built on graded fill, with Formosan termites established in parts of metro Atlanta. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings — termite treatment Smyrna GA owners can count on, backed by a renewable bond." },
        { name: 'Fire Ants', text: "Red imported fire ants are established statewide, and freshly graded yards and common areas are exactly where their mounds appear. A broadcast bait carried underground to the queen, plus spot mound treatment and a perimeter barrier, keeps lawns and shared green space usable for kids and pets." },
        { name: 'Mosquitoes', text: "Metro Atlanta lands in the top five U.S. mosquito metros, and the catch basins, retention areas, and shaded breezeways of Smyrna's built-up communities hold the standing water larvae need. Yard barrier treatments and larviciding of standing water — mosquito control Smyrna GA residents use to take patios and balconies back from spring through fall." },
        { name: 'Cockroaches', text: "Two separate fights: German roaches that breed indoors in kitchens and baths and ride shared walls between attached units, and the big outdoor 'palmetto bugs' (smokybrown and American roaches) that live in mulch and drains near mixed-use blocks and wander in. Indoor gel baiting plus an exterior barrier and crack-and-crevice work shut down both." },
        { name: 'Rodents', text: "House mice and Norway rats exploit the gaps, utility penetrations, and shared chases common in townhomes, condos, and apartments, slipping between units to nest. Rodent control Smyrna GA owners trust pairs trapping with exclusion — sealing the entry points across attached construction so they can't return." },
        { name: 'Wasps & Hornets', text: "Paper wasps and ground-nesting yellowjackets build through summer under eaves, soffits, balconies, and deck rails on closely-spaced homes, turning aggressive by fall. Pros knock down accessible nests and treat the recesses they keep rebuilding in." },
        { name: 'Bed Bugs', text: "Bed bugs hitchhike home on luggage and secondhand furniture and spread fast — and in Smyrna's attached condos and apartment communities they can move between units through walls and outlets. A licensed bed bug exterminator Smyrna residents can call uses whole-room heat or a targeted residual program to kill every life stage, with follow-up verification." },
      ],
    },
    {
      heading: 'Signs of Termites in Smyrna Homes',
      paras: [
        "Termites work from the inside out, so even in newer Smyrna construction the damage can be advancing before anyone notices. These are the tells worth catching early:",
      ],
      bullets: [
        "Pencil-width mud tubes running up foundation walls, slab edges, garage stem walls, or crawlspace piers",
        "Winged swarmers indoors on warm, humid spring days, or little piles of shed, translucent wings on sills and near sliding doors",
        "Baseboards, door casings, or subfloor that sound hollow or papery when tapped",
        "Interior doors or windows that suddenly stick as damaged wood swells",
        "Faint blistered paint or thin mud-filled lines tracking across drywall and trim",
      ],
    },
    {
      heading: 'Smyrna Pest Season — What to Watch For',
      paras: [
        "Pest pressure rolls through the year in Smyrna. Here's roughly what local households run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid afternoons trigger termite swarms — a burst of winged swarmers, or shed wings on a windowsill, is the classic flag of an active colony. Ants wake up and trail indoors, carpenter bees drill into deck and trim wood, and the first warm rains start filling stormwater basins and saucers with mosquito habitat. The best window to lock in protection ahead of summer." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes surge across the metro, fire ant mounds spread through freshly built yards and common areas, wasps and yellowjackets nest under eaves and balconies, and roaches push indoors out of the heat — easily passing between attached units. Fleas and ticks hit their stride on pets and in shaded landscaping." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, mice and rats hunt for a warm place to overwinter and slip in through gaps, garage doors, and shared utility runs — this is when scratching starts in walls and ceilings. Maturing yellowjacket colonies turn aggressive. A smart time to seal entry points across closely-built homes." },
        { name: 'Winter (Dec–Feb)', text: "Smyrna's mild winters never fully shut pests down. Indoors, German roaches and mice carry on, while subterranean termites feed below the frost line no matter the month. Staying on a recurring plan keeps the barrier intact so the warm months don't open with a backlog." },
      ],
    },
    {
      heading: 'Cobb County Areas We Also Cover',
      paras: [
        "The local pros in our directory cover Smyrna across its ZIP codes and the surrounding Cobb County communities. If you live in one of the areas below, we can match you with a licensed local exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Smyrna',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Smyrna and the wider Cobb County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property — including shared walls and entry points in attached homes — confirms the pest and how far it has spread, and recommends the right treatment for your Smyrna home, one-time or recurring." },
        { name: '3. Problem solved', text: "Your technician treats the active problem, seals the routes pests use, and sets up prevention with EPA-registered products at label rates — family- and pet-safe options included, and most work comes with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Smyrna',
      paras: [
        "The Local Pest Pro is a directory that connects Smyrna homeowners and renters with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Smyrna area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Each pro we hand you off to holds a license from the Georgia Department of Agriculture's Structural Pest Control Commission and uses EPA-registered products at label rates, with low-toxicity choices for homes with kids and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Smyrna?', a: "The frequent calls are subterranean termites (metro Atlanta is a heavy termite-pressure area and the eastern subterranean is Georgia's dominant species), red imported fire ants in graded yards and common areas, mosquitoes bred in stormwater basins and shaded breezeways, German roaches and outdoor 'palmetto bugs,' and mice and rats that exploit the gaps and shared walls of attached homes. The pros in our network handle all of them." },
    { q: 'Do townhomes, condos, and apartments need different pest control in Smyrna?', a: "Often, yes. In attached and closely-built housing, pests like German roaches, bed bugs, and rodents travel along shared walls, plumbing chases, and utility runs, so treating one unit on its own frequently isn't enough. A pro inspects those connection points and pairs treatment with exclusion and sealing — and may recommend coordinating with neighboring units or an HOA — so the fix actually holds." },
    { q: 'Why does newer construction in Smyrna attract termites?', a: "When a site is graded and rebuilt, the disturbed soil and fresh wood framing give subterranean termites an easy place to settle, and Georgia's mild winters let them feed year-round. Newer doesn't mean termite-proof — it just means the colony is still establishing. A liquid soil barrier or in-ground bait system, plus annual inspection, is the practical protection for a recently built Smyrna home." },
    { q: 'Are Smyrna pest control companies licensed?', a: "They should be. In Georgia, the Department of Agriculture oversees structural pest control through its Structural Pest Control Commission, issuing company licenses and certifying the applicators who work on your home. Every Smyrna exterminator we connect you with is a licensed, insured Georgia pro." },
    { q: 'Can I get same-day or emergency pest control in Smyrna?', a: "Often, yes — many of the local pros serving Smyrna offer same-day and emergency visits for urgent problems like a wasp nest by a balcony, a sudden roach issue in a shared kitchen wall, or rodents in the house. Call and we'll point you to a Cobb County exterminator who can come out fast." },
    { q: 'Which areas around Smyrna do you serve?', a: "Beyond Smyrna's ZIP codes, the pros in our directory serve the surrounding Cobb County communities, including Vinings, Mableton, Marietta, Austell, Powder Springs, and the Cumberland area. Call and we'll match you with a licensed exterminator who covers your corner of the county." },
    { q: 'Is pest treatment safe around kids and pets?', a: "Yes. Smyrna pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your tech will flag any brief stay-off window — typically just until everything dries." },
  ],

  finalCtaHeading: 'Get Your Free Smyrna Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Smyrna yet, so these cards
  // are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/smyrna/<pest>/ route, and the
  // template renders them as non-clickable <div>s while pestPages is empty.
  // Blurbs are written fresh for Smyrna (no reuse from Marietta or the Cherokee
  // city hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "Eastern subterranean termites — Georgia's dominant species — settle into the graded fill and fresh framing of Smyrna's newer construction, with Formosan in parts of metro Atlanta. Liquid soil barriers, in-ground baiting, and the Georgia termite letter." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Travel-borne bed bugs spread fast — and in Smyrna's attached condos and apartments they can move between units. Whole-room heat or a focused residual program wipes out every life stage, then confirms it with follow-ups." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "German roaches riding shared walls indoors and big 'palmetto bugs' from mulch and drains near mixed-use blocks — gel baiting, crack-and-crevice work, and a perimeter barrier that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "Metro Atlanta ranks as a top-five U.S. mosquito metro, and Smyrna's catch basins and shaded breezeways give larvae standing water. Barrier sprays and standing-water larviciding across the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "Mice and rats exploit the gaps and shared utility runs of attached homes to nest and move between units. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in graded yards, wasps under balconies, spiders and ants indoors — one recurring quarterly plan covers the everyday pests a Smyrna home faces, year-round." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};

