'use strict';

// ── Acworth, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the three sibling Cobb County city hubs
// (Marietta, Smyrna, Kennesaw). Each sibling owns a different Cobb angle:
// Marietta is the OLDER, established city under a mature tree canopy; Smyrna is
// the dense, REDEVELOPED inner-ring suburb of attached townhomes/condos;
// Kennesaw is the KSU student-rental college town on the Kennesaw Mountain
// wooded edge. Acworth leads on its OWN verified distinctive — a northwest Cobb
// LAKESIDE town wrapped around Lake Acworth and the much larger Lake Allatoona,
// with a small historic downtown and lake-area subdivisions. That waterfront,
// recreational-lake setting (standing water, boat-and-dock culture, damp shoreline
// woods) is the through-line for the whole page, written fresh so all four Cobb
// pages read as clearly different. Targets local intent ("pest control Acworth",
// "Acworth exterminator", "Acworth GA pest control"). Rendered by views/city.ejs
// (hub) at /georgia/acworth/.
//
// `county` drives the LeadPortal contractor lookup — Acworth is in COBB County,
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
// northwest Cobb County, in metro Atlanta, northwest of downtown Atlanta near the
// I-75 corridor; a lakeside town set on Lake Acworth and the much larger Lake
// Allatoona (a U.S. Army Corps of Engineers reservoir), known for waterfront and
// recreational-lake living; a small historic downtown; a mix of established and
// newer lake-area subdivisions; ZIPs 30101 / 30102 (never mapped to specific
// streets); nearby communities Kennesaw, Marietta, Powder Springs, Dallas,
// Cartersville, Woodstock (service-area names only). REGIONAL truths: humid
// subtropical climate with a long warm season; eastern subterranean termite is
// THE dominant Georgia termite (state that and stop — do NOT claim Formosan is
// present/established locally; it is rare statewide); red imported fire ants
// established statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); the Georgia Dept. of Agriculture's Structural Pest Control Commission
// regulates/licenses. Do NOT name beaches, parks, schools, subdivisions, streets,
// ordinances, population figures, or any unverified hyper-local detail.

module.exports = {
  name: 'Acworth',
  slug: 'acworth',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30101', '30102'],
  // Nearby communities we also serve — NOT Acworth subdivisions. Service-area
  // names only; the template links only the ones that already have a built city
  // hub (Kennesaw, Marietta), the rest render as plain badges.
  neighborhoods: ['Kennesaw', 'Marietta', 'Powder Springs', 'Dallas', 'Cartersville', 'Woodstock'],

  // OG card — shared branded 1200×630 default; set an Acworth-specific path here
  // to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Acworth" + GA in the title; the contiguous
  // long-tail phrases live in the meta description, headings, and body below.
  metaTitle: 'Pest Control Acworth, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Acworth, GA for lakeside homes — termite treatment, mosquito control, rodent control and bed bug exterminator near Lake Acworth. Free quote today.",
  h1: 'Pest Control in Acworth, GA',
  heroSub: "Acworth is northwest Cobb County's lake town, built around Lake Acworth and the sprawling shoreline of Lake Allatoona. All that water is the draw — and it's also what keeps the bugs coming: lakeside humidity, damp shoreline woods, and standing water along docks and coves feed heavy mosquito pressure, while termites, roaches, and rodents work the waterfront homes year-round in Georgia's long warm season. Reach a licensed Acworth exterminator who knows the lake, fast.",

  overviewHeading: 'Acworth Pest Control GA: Built for a Cobb County Lake Town',
  overview: [
    "Water defines Acworth, and water shapes its pests. Wrapped around Lake Acworth and the far larger Lake Allatoona, this northwest Cobb town lives close to the shoreline — and proximity to all that standing water is the single biggest difference between pest pressure here and in the rest of the county. Lakes, coves, and the damp ground around them are open-air mosquito nurseries, and the moist shoreline air keeps the humidity that roaches, silverfish, and other moisture pests need elevated right up against the house. For a home a short walk from the water, that means the pressure rarely lets up from spring well into fall.",
    "It isn't only the mosquitoes. The wooded, low-lying ground that rings a reservoir is exactly the habitat rodents, ants, and wildlife use as cover, and lake-area lots — a mix of older cottages near the historic downtown and newer subdivisions farther out — give subterranean termites the moist soil they thrive in. Add boat traffic, lake-house guests, and seasonal rentals that move belongings (and the occasional hitchhiking bed bug) in and out, plus Georgia's humid subtropical climate that barely lets anything go dormant, and a recurring, locally-tuned plan simply beats one-off treatments. Wherever your place sits relative to the water, the licensed, insured pros in our directory inspect your exact property and quote it free before any work begins — straightforward, local pest control Acworth homeowners can rely on.",
  ],

  sections: [
    {
      heading: 'How Lake Acworth and Lake Allatoona Shape Local Pest Pressure',
      paras: [
        "Living near a lake is the whole appeal of Acworth, but standing water is also the engine behind the area's pest load. Mosquitoes need only still water to breed, and a town ringed by a reservoir, its coves, and the saturated ground along the shoreline offers far more of it than a typical inland subdivision — which is why metro Atlanta's top-five U.S. mosquito ranking (Orkin's 2025 list) lands especially hard on a waterfront community like this one. The same lakeside humidity that makes summer evenings sticky also keeps moisture pests — cockroaches, silverfish, and the like — comfortable right against the foundation.",
        "Under the surface, the bigger structural threat is still termites. The eastern subterranean termite is the dominant species in Georgia, and the moist, organic-rich soil common to low-lying lake-area lots is precisely what its colonies favor as they forage up into sill plates, joists, and framing; mild winters let them feed underground all year rather than going dormant, and termite damage typically isn't covered by homeowners insurance, so an ongoing barrier is the cost-effective call. Around it all, red imported fire ants — established statewide — push up mounds in sunny lakeside lawns, and the wooded, water's-edge cover invites rodents toward the nearest crawlspaces as nights cool. Against that mix, a steady professional program from a licensed Acworth exterminator holds up far better than reacting to one problem at a time.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Acworth Lake-Area Homes See Most',
      paras: [
        "A lakeside Cobb County town has its own signature lineup of pests, weighted toward the water. These are the ones the licensed pros in our directory get called for most around Acworth:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant species, and the moist, low-lying soil of Acworth's lake-area lots is exactly the ground their colonies favor as they work up into the framing. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings — termite treatment Acworth GA homeowners can count on, backed by a renewable bond." },
        { name: 'Mosquitoes', text: "No pest is more tied to Acworth's setting. With Lake Acworth, Lake Allatoona, and their coves close at hand, breeding water is never far, and metro Atlanta ranks among the top five U.S. mosquito metros. Yard barrier treatments plus larviciding of the standing water around docks, drains, and low spots — mosquito control Acworth GA families lean on to take the backyard and lakefront back from spring through fall." },
        { name: 'Cockroaches', text: "Lakeside humidity suits roaches: German roaches breed indoors in kitchens and baths, while big outdoor 'palmetto bugs' (smokybrown and American roaches) thrive in the damp mulch, woodpiles, and shoreline leaf litter and wander in. Indoor gel baiting, crack-and-crevice treatment, and an exterior barrier clear both." },
        { name: 'Rodents', text: "The wooded, low ground around the lakeshore gives mice and rats cover right up to the house, and they press in through gaps, garage doors, and crawlspace vents as nights cool. Rodent control Acworth GA homeowners trust pairs trapping with exclusion — sealing the entry points so they can't get back in." },
        { name: 'Fire Ants', text: "Red imported fire ants are established across Georgia, and their dome-shaped mounds dot the sunny, open lawns of lake-area lots and common areas. Broadcast bait the workers haul down to the queen, paired with direct mound treatment and a perimeter barrier, keeps the yard safe for kids and pets." },
        { name: 'Bed Bugs', text: "Lake-house guests, vacation rentals, and travel move bed bugs into Acworth homes on luggage and secondhand furniture, where they spread fast. A licensed bed bug exterminator Acworth residents can call uses whole-room heat or a targeted residual program to kill every life stage, then verifies the home is clear with follow-up checks." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build through the summer under eaves, soffits, docks, and deck rails, then turn defensive by fall. Pros knock down the nests they can reach and treat the sheltered voids these insects keep returning to." },
      ],
    },
    {
      heading: 'Termite Warning Signs Acworth Homeowners Should Know',
      paras: [
        "Termites work quietly from the inside out, so the damage is usually advanced before anyone spots it — and moist lake-area soil only encourages them. Watch for these tells:",
      ],
      bullets: [
        "Pencil-width mud tubes running up foundation walls, brick piers, crawlspace supports, or pier-and-beam posts",
        "Winged swarmers indoors on warm, humid spring days, or small piles of shed, translucent wings on sills and near doors",
        "Baseboards, door casings, or subfloor that sound hollow or papery when tapped",
        "Interior doors or windows that start sticking as damaged or moisture-swollen wood shifts",
        "Blistered or bubbling paint, or faint mud-packed lines tracing across drywall and trim",
      ],
    },
    {
      heading: 'Acworth Pest Activity by Season Near the Lake',
      paras: [
        "Pest pressure climbs and falls across the year in Acworth, and the lake amplifies the warm-weather stretch. Here's roughly what to expect, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid afternoons trigger termite swarms — a burst of winged swarmers, or shed wings on a sill, is the classic sign of an active colony. Ants wake and trail indoors, carpenter bees bore into dock and deck wood, and the first warm rains start filling the lake's edges, coves, and yard low spots with mosquito habitat. The smart window to get protection in place before the lake season ramps up." },
        { name: 'Summer (Jun–Aug)', text: "Peak season, and the lake makes it intense. Mosquitoes surge off the shoreline and standing water, fire ant mounds spread through open lawns, wasps and yellowjackets nest under eaves and docks, and roaches push indoors out of the heat and humidity. Fleas and ticks ride pets and the damp shoreline undergrowth." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, mice and rats leave the wooded lakeshore looking for a warm place to overwinter, slipping in through gaps and garage doors — this is when scratching starts in attics and walls. Yellowjacket nests reach full size and the colonies grow short-tempered. A good time to seal entry points before winter and after the busy lake months." },
        { name: 'Winter (Dec–Feb)', text: "Acworth's mild winters never fully shut pests down. Indoors, German roaches and mice carry on, while subterranean termites keep working below the frost line whatever the month. A recurring plan keeps the protective barrier intact through the cold so the warm season doesn't open with a backlog." },
      ],
    },
    {
      heading: 'Communities Around Acworth We Also Cover',
      paras: [
        "The local pros in our directory cover Acworth across its ZIP codes and the surrounding lake-area and Cobb County communities. If your home sits in one of the areas below, we can connect you with a licensed local exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Acworth',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Acworth and the wider Cobb County lake area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property — including the damp, lake-facing exterior and entry points — confirms the pest and how far it has spread, and recommends the right treatment for your Acworth home, one-time or recurring." },
        { name: '3. Problem solved', text: "Your technician treats the active problem, seals the routes pests use, and sets up prevention with EPA-registered products applied at label rates — family- and pet-safe options included, and most work backed by a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro in Acworth',
      paras: [
        "The Local Pest Pro is a directory that connects Acworth homeowners with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Acworth area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and uses EPA-registered products at label rates, with low-toxicity options for households that have kids and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What are the most common pests in Acworth, GA?', a: "Near the lake, mosquitoes top the list — Lake Acworth, Lake Allatoona, and their coves give them endless breeding water, and metro Atlanta ranks among the worst U.S. metros for them. Close behind are subterranean termites in the moist lake-area soil (the eastern subterranean is Georgia's dominant species), German roaches and outdoor 'palmetto bugs' that like the shoreline humidity, red imported fire ants in open lawns, and mice and rats that come off the wooded lakeshore as nights cool. The pros in our directory handle all of them." },
    { q: 'Why are there so many mosquitoes near Lake Acworth?', a: "Mosquitoes breed in standing water, and a town built around a lake and a large reservoir simply has more of it — coves, shoreline shallows, damp low ground, and the saucers, gutters, and dock areas around waterfront homes. On top of that, metro Atlanta consistently ranks in the top five U.S. metros for mosquitoes. Knocking the population down means treating the resting areas and larviciding the standing water on and around your property, not just spraying once." },
    { q: 'Do lakefront and lake-area homes in Acworth need special pest attention?', a: "Often, yes. A home close to the water deals with steadier humidity, damp shoreline soil, and more standing water nearby, all of which favor mosquitoes, moisture-loving roaches and silverfish, and the subterranean termites that prefer moist ground. A pro will look at drainage, the crawlspace or foundation, and the lake-facing exterior, then pair treatment with moisture-aware exclusion so the fix actually holds in a waterfront setting." },
    { q: 'Are Acworth pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Department of Agriculture, whose Structural Pest Control Commission licenses companies and certifies the technicians who apply treatments at your home. Every Acworth exterminator we connect you with is a licensed, insured Georgia pro." },
    { q: 'Can I get same-day or emergency pest control in Acworth?', a: "Often, yes — many of the local pros serving Acworth offer same-day and emergency visits for urgent trouble like a wasp nest over the deck, a sudden roach problem, or rodents in the house. Call and we'll connect you with a Cobb County exterminator who can get out fast." },
    { q: 'Which areas around Acworth do you serve?', a: "Beyond Acworth's ZIP codes, the pros in our directory serve the surrounding lake-area and Cobb County communities, including Kennesaw, Marietta, Powder Springs, Dallas, Cartersville, and Woodstock. Call and we'll match you with a licensed exterminator who covers your part of the area." },
    { q: 'Is pest treatment safe for kids, pets, and near the water?', a: "Yes. Acworth pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, placing most product around the exterior, entry points, and cracks and crevices rather than across living areas. Near the lake, a licensed applicator also follows the label's requirements for use around water. Your tech will point out any short re-entry window — typically only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Acworth Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Acworth yet, so these cards
  // are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/acworth/<pest>/ route, and
  // the template renders them as non-clickable <div>s while pestPages is empty.
  // Blurbs are written fresh for Acworth (no reuse from the sibling Cobb hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "Eastern subterranean termites — Georgia's dominant species — favor the moist, low-lying soil of Acworth's lake-area lots as they work into the framing. Liquid soil treatments, in-ground baiting, and the Georgia termite letter for a closing." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Lake-house guests, vacation rentals, and travel carry bed bugs into Acworth homes on luggage and secondhand furniture. Whole-room heat or a targeted residual program wipes out every life stage, with follow-up checks to confirm the home is clear." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "Lakeside humidity suits German roaches indoors and big 'palmetto bugs' out in the damp mulch, woodpiles, and shoreline leaf litter — gel baiting, crack-and-crevice work, and a perimeter barrier that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "Lake Acworth, Lake Allatoona, and their coves give mosquitoes endless breeding water, and metro Atlanta is a top-five U.S. mosquito metro. Barrier sprays plus larviciding of standing water around docks and low spots, all warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "The wooded, low ground around the lakeshore gives mice and rats cover right up to the house as nights cool. Trapping paired with exclusion work that seals their entry points, plus ongoing monitoring, keeps them from returning." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in the lawn, wasps under the eaves and docks, spiders and ants indoors — one recurring quarterly plan covers the everyday pests an Acworth lake-area home faces, year-round." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};
