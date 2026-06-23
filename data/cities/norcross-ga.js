'use strict';

// ── Norcross, GA — city HUB (no per-pest spoke pages yet) ─────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hubs
// (Duluth, Lawrenceville, Snellville). Duluth owns fast suburban growth +
// multifamily + commercial corridors; Lawrenceville owns the county-seat /
// historic-square / old-plus-new-build duality; Snellville owns the settled,
// established-residential / mature-subdivisions angle. Norcross leads with ITS
// OWN distinctive: a southwest-Gwinnett city that pairs a compact, walkable
// HISTORIC DOWNTOWN — one of the county's oldest incorporated town centers —
// with a large surrounding commercial/industrial and multicultural BUSINESS
// DISTRICT along Buford Highway and the I-85 corridor, and a building mix that
// runs from century-old downtown homes to dense workforce/multifamily housing
// to restaurants and warehouses. Targets local intent ("pest control norcross",
// "norcross exterminator", "norcross ga pest control"). Rendered by
// views/city.ejs at /georgia/norcross/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/norcross/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built
// spoke URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Norcross is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on
// this page (name + phone + LocalBusiness/PestControlService schema, dynamically
// pulled server-side by views/city.ejs); until one is assigned the page falls
// back to the shared (844) directory line and a plain Service schema node. The
// contractor lookup tries both "Gwinnett County" and "Gwinnett" automatically.
// Address/license render only from the real contractor record — never synthesized.
// Trust signals here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names beyond the well-known Buford Highway
// / I-85, no subdivisions, no parks, no ordinances, no invented stats): a city in
// southwestern Gwinnett County; one of the county's oldest incorporated town
// centers, with a compact, walkable historic downtown; surrounded by a large
// commercial/industrial zone and a multicultural international business and
// restaurant district along the Buford Highway and I-85 corridor; building mix
// of older historic-core homes and dense workforce/multifamily housing plus
// restaurants, offices, and warehouses; ZIPs 30071/30092/30093; area codes
// 770/678/470; humid subtropical climate; EASTERN SUBTERRANEAN termites are the
// dominant wood-destroyer here (the more destructive Formosan termite stays rare
// in Georgia away from the coast — stated as a statewide aside only, NOT a local
// presence claim); red imported fire ants present in all 159 GA counties; metro
// Atlanta is a top-five U.S. mosquito metro (Orkin 2025); structural pest control
// is regulated/licensed by the Georgia Dept. of Agriculture's Structural Pest
// Control Commission. Nearby Gwinnett communities served: Peachtree Corners,
// Berkeley Lake, Duluth, Lilburn, Lawrenceville.

module.exports = {
  name: 'Norcross',
  slug: 'norcross',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30071', '30092', '30093'],
  // Nearby Gwinnett-area communities we also serve — NOT Norcross subdivisions.
  // Service-area names only; all sit in the same Gwinnett County coverage area,
  // so the assigned county contractor covers them too. None has a built city hub
  // yet, so each renders as a plain (non-clickable) badge.
  neighborhoods: ['Peachtree Corners', 'Berkeley Lake', 'Duluth', 'Lilburn', 'Lawrenceville'],

  // Shared branded 1200×630 OG card (no Norcross-specific asset exists yet); this
  // explicit value mirrors the sibling hubs. Drop a per-page path here later to
  // give Norcross its own card.
  ogImage: '/images/og-default.jpg',

  // ~55 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Norcross GA | Local Exterminators Near You',
  // ~153 chars; CTA + exact + long-tail terms, paired with GA + Norcross's own angle.
  metaDesc: "Licensed pest control in Norcross, GA — termite, mosquito, rodent & bed bug treatment across its historic downtown and Buford Highway corridor. Call now.",
  h1: 'Pest Control in Norcross, GA',
  heroSub: "Norcross is a study in contrasts for southwest Gwinnett County: a compact, walkable historic downtown — among the oldest incorporated town centers in the county — set against the busy commercial and international business district that runs along Buford Highway and the I-85 corridor. Between the century-old homes near the old town center, the dense workforce and multifamily housing by the highway, and the restaurants and warehouses in between, Georgia's humid weather keeps termites, mosquitoes, roaches, and rodents active close to year-round. Connect with a licensed local Norcross, GA exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Norcross, GA & Gwinnett County',
  overview: [
    "Norcross holds a distinctive spot in Gwinnett County. Its historic downtown — one of the county's oldest incorporated town centers — is a small, walkable grid of older storefronts and homes, while just beyond it the city opens into one of metro Atlanta's busier commercial and industrial zones, anchored by the international restaurants and businesses of the Buford Highway corridor and the offices and warehouses strung along I-85. That range of buildings, from century-old houses to dense workforce housing to busy food-service and storage space, hands local pests an unusually wide set of footholds: aging wood and settled foundations downtown, steady food and foot traffic in the commercial district, and shared walls in the multifamily housing near the highway.",
    "The constant underneath all of it is the weather. Norcross gets the same long, humid summers and short, mild winters as the rest of metro Atlanta, so pests here rarely shut down for a real off-season — which is why a recurring, locally-tuned Norcross Georgia pest control plan usually does more than a single visit ever could. Across 30071, 30092, and 30093, the licensed, insured pros in our directory inspect your specific Norcross property and quote it for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Drives Pest Problems in Norcross, GA?',
      paras: [
        "Georgia ranks among the hardest-hit termite states in the country, and Gwinnett County sits right in the middle of that pressure. Eastern subterranean termites are the dominant wood-destroying insect across the area, working through the soil and into structures wherever wood meets the ground. Because Norcross winters stay mild, those colonies never go dormant the way they would in colder states — they keep feeding underground all twelve months. Since homeowners insurance almost never pays for termite damage, keeping protection in place costs far less than repairing a structure later.",
        "Termites are just the opening act. Red imported fire ants occupy every one of Georgia's 159 counties, raising mounds across Norcross yards and green spaces. Orkin placed metro Atlanta among the top five U.S. metros for mosquitoes in 2025, and the city's mix of shaded older lots and standing water around its commercial and industrial sites keeps them breeding. Add the German roaches that thrive wherever there's food and warmth, the smokybrown 'palmetto bugs' that drift in from mulch and storm drains, and the rats and mice drawn to a district full of restaurants and storage, and a steady professional barrier beats reacting one pest at a time.",
      ],
    },
    {
      heading: '<span id="termite"></span>How Do Termites Get Into Norcross Homes and Buildings?',
      paras: [
        "More easily than most owners expect, and Norcross offers plenty of openings. Eastern subterranean termites live in the soil and move upward into a structure through cracks in a slab, expansion joints, plumbing penetrations, and any point where framing or siding meets the ground. The older homes around Norcross's historic core have had decades of settling and moisture to widen those routes, while the long slab perimeters under the city's commercial and warehouse space give termites a great deal of edge to probe. Mild Gwinnett winters let the colonies eat year-round, and most people first realize there's a problem when a swarm shows up in spring — winged termites at a window, or a scatter of shed translucent wings on a sill. (Eastern subterranean termites are the species that matters here; the far more destructive Formosan termite stays rare in Georgia away from the coast.)",
        "A Georgia-licensed inspector matches termite treatment in Norcross, GA to the building in front of them — a non-repellent liquid termiticide trenched into the soil to form one unbroken treated zone, in-ground bait stations that workers carry back to collapse the colony, or both together for the city's range of slab and crawlspace construction. If you're buying or selling, Georgia closings nearly always require the official Wood Infestation Inspection Report — the 'termite letter' — and only a Georgia-licensed operator can issue one, usually within 30 days of the closing date. The licensed pros in our directory can inspect, treat, and issue that report.",
      ],
    },
    {
      heading: '<span id="mosquito"></span>Why Are Mosquitoes Relentless in Norcross, GA?',
      paras: [
        "Because they need so little to get going. Orkin ranked metro Atlanta among the top five U.S. metros for mosquitoes in 2025, and barely a tablespoon of standing water is enough to raise a new batch. In Norcross that water hides everywhere — a clogged gutter or plant saucer in the older neighborhoods, a tarp or low spot behind a business, the puddles that pool around loading docks and parking lots in the commercial district between Georgia downpours. The mature trees and shaded yards near the historic center hand the adults somewhere cool to wait out the day, right next to where people are trying to enjoy a porch or patio.",
        "Professional mosquito control in Norcross, GA hits every stage instead of just calming the bites: a residual barrier treatment on the shrubs, fence lines, and tree edges where adults shelter, refreshed every three to four weeks through the warm season; larviciding for water that can't be drained; and source reduction to wipe out the hidden breeding spots feeding the population. It's a health matter as much as a comfort one — the Georgia Department of Public Health tracks West Nile virus each year, the daytime-biting Asian tiger mosquito is common, and mosquitoes pass heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>What Brings Roaches Into Norcross Homes?',
      paras: [
        "Usually one of two very different roaches, and each calls for its own fix. German cockroaches are small, breed indoors at high speed, and gather wherever there's food, warmth, and moisture — kitchens, bathrooms, apartments, and the area's many restaurants and break rooms — so a single sighting normally means a colony is already established. The big roaches people call 'palmetto bugs' are smokybrown and American cockroaches, outdoor insects that live in mulch, leaf litter, storm drains, and the voids around older buildings and simply stray inside, which is how even a spotless Norcross home turns up a large roach now and then.",
        "A licensed pro identifies the species before treating — gel baiting and insect growth regulators aimed at indoor German roaches, plus a perimeter barrier and harborage cleanup for the outdoor 'palmetto bugs,' usually backed by a re-treat guarantee. It matters beyond the cringe factor: German cockroach droppings and shed skins are a recognized asthma and allergy trigger, especially in children, and in a part of town packed with food service, an unchecked roach problem spreads quickly between neighboring spaces.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>How Do Bed Bugs Spread in Norcross, GA?',
      paras: [
        "They travel. Bed bugs hitch in on luggage, secondhand furniture, and moving boxes rather than turning up because of poor housekeeping, and in apartments, motels, and the multifamily housing common around the corridor they can slip between units through shared walls and outlet voids. Once inside they multiply fast, since a single female lays hundreds of eggs over her life. Watch for itchy bites in lines or clusters, rust- or blood-colored smears and dark pepper-like specks along mattress seams, pale shed skins, and live, apple-seed-sized bugs tucked near where you sleep.",
        "A bed bug exterminator in Norcross, GA clears every life stage with whole-room heat — raising a room to a lethal temperature that kills adults, nymphs, and eggs in one day, even those hidden in walls and furniture — or with a targeted residual program and follow-up inspections, often paired with steam and mattress encasements. Store-bought foggers tend to scatter bed bugs into new rooms and drag the job out, so calling a pro at the first sign keeps it smaller and quicker to resolve.",
      ],
    },
    {
      heading: '<span id="rodent"></span>Why Do Rats and Mice Move Into Norcross Buildings?',
      paras: [
        "Food, warmth, and an easy way in — and a city mixing old homes, restaurants, and warehouses supplies all three. Roof rats are agile climbers that enter high along the roofline and nest in attics and soffits; Norway rats are heavier burrowers that come in low near foundations and drains; and house mice need only a dime-sized gap and breed quickly once inside. The older buildings near downtown tend to have accumulated entry points along eaves, vents, and utility lines, while the commercial and storage spaces draw rodents with steady food and shelter. Calls climb in fall as the first cool nights push them indoors, and Gwinnett's mild winters keep them active once they've settled. Listen for scratching after dark, and look for droppings, gnaw marks, and greasy rub trails.",
        "Real rodent control in Norcross, GA goes past scattering bait — it's trapping to bring the population down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't get back in, finished with monitoring and cleanup. That seal-out is what turns a brief lull into a lasting fix, and it matters because rodents gnaw wiring — a known fire risk — and contaminate food and surfaces wherever they travel.",
      ],
    },
    {
      heading: "<span id=\"general\"></span>Fire Ants, Wasps & the Other Pests Norcross Deals With",
      paras: [
        "Any patch of grass in Norcross is fair game for fire ants — red imported fire ants are established across all 159 Georgia counties, throwing up dome-shaped mounds in yards and common areas and delivering stings that are genuinely dangerous to anyone allergic, along with pets and small children. A hardware-store mound killer rarely ends it; the approach that works pairs a broadcast bait that foragers carry underground to the queen with direct mound treatment and a perimeter barrier, all kept current on a recurring plan.",
        "A general pest control plan covers everything else a Norcross household or business runs into through the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build all summer and turn aggressive by fall, so pros take down reachable nests and treat eaves, soffits, and entry points to keep them from rebuilding. The same recurring quarterly visit also handles nuisance ants, spiders — including black and brown widows in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that push indoors as the weather shifts: one plan, timed to each pest's season, instead of a string of one-off calls.",
      ],
    },
    {
      heading: 'Norcross Pest Pressure Through the Year',
      paras: [
        "Pest activity changes with the seasons in Norcross. Here's the general rhythm local homeowners and businesses can expect:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid days — a burst of winged swarmers, or shed translucent wings collecting at a window, is the classic early warning of a colony underneath. Ants get moving, carpenter bees bore into deck and trim wood, and the season's first rains kick off mosquito breeding. The ideal stretch to lock in protection before the season ramps up." },
        { name: 'Summer (Jun–Aug)', text: "The thick of it. Mosquito pressure peaks across metro Atlanta, fire ant mounds multiply in Norcross yards, wasp and yellowjacket nests swell under eaves, and roaches and 'palmetto bugs' slip indoors away from the heat. Fleas and ticks hit their most active stretch." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice go looking for somewhere warm to ride out winter — that's when you'll hear scratching overhead in Norcross attics and walls. Yellowjackets turn short-tempered as their colonies wind down. A good moment to close up entry points before the cold settles in." },
        { name: 'Winter (Dec–Feb)', text: "Norcross's mild winters keep pests on the move. German roaches and mice stay active indoors, and subterranean termites feed underground without a pause. Recurring service keeps the protective barrier intact through the cool months, so the season doesn't reopen with a spring surge." },
      ],
    },
    {
      heading: 'Areas We Serve Around Norcross in Gwinnett County',
      paras: [
        "The pros in our directory cover Norcross across all three of its ZIP codes plus the nearby Gwinnett County communities. Live in one of these areas? We can line you up with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Norcross',
      cards: [
        { name: '1. Call for a free quote', text: "One call puts you in touch with a licensed, insured exterminator who covers Norcross and the surrounding Gwinnett County area — no pressure, no obligation." },
        { name: '2. Get a local inspection', text: "Your pro inspects the property, confirms which pest you're dealing with and how far it's gone, and lays out the right plan for your Norcross home or building — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat the problem, seal out the entry points, and set up prevention with EPA-registered products applied at label rates and family- and pet-safe options — most backed by a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Norcross homeowners and businesses with licensed, insured local exterminators across Gwinnett County. Call and you'll reach the pest control pro assigned to the Norcross area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Norcross, GA?', a: "There's no one-size price — it depends on the pest, how far the problem has spread, and the size of the property. A recurring general pest plan is the most economical route, while specialty jobs like termite or bed bug work cost more for the equipment and follow-up they take. Every pro in our directory gives you a free, property-specific quote before any work starts, so you'll know your exact price up front." },
    { q: 'Do you handle both downtown Norcross homes and commercial properties?', a: "Yes. The licensed pros in our directory work across Norcross's full range of property, from the older homes around the historic downtown to apartments near the corridor and the restaurants, offices, and warehouses along Buford Highway and I-85. Older buildings often need attention to accumulated entry points and moisture, while food-service and storage spaces call for ongoing commercial pest management — your pro tailors the program to whichever you have." },
    { q: 'What pests are most common in Norcross and Gwinnett County?', a: "The big ones are eastern subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that head indoors as nights cool. The pros in our directory handle all of them." },
    { q: 'Do you serve the areas around Norcross too?', a: "Yes. Beyond Norcross's 30071, 30092, and 30093 ZIP codes, the pros in our directory cover the surrounding Gwinnett County communities, including Peachtree Corners, Berkeley Lake, Duluth, Lilburn, and Lawrenceville. Reach out and we'll match you with a licensed exterminator covering your area." },
    { q: 'Are Norcross, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Norcross?', a: "Often, yes — many of the local pros serving Norcross offer same-day and emergency visits for urgent trouble like a wasp nest, a sudden roach problem, or rodents in the building. Call and we'll connect you with a Gwinnett County pro who can respond fast." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Norcross pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your tech will flag any brief re-entry window — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Norcross, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Eastern subterranean termites feed straight through Gwinnett's mild winters, and Norcross's older downtown homes and long commercial slab perimeters give them ample ways into the wood. Liquid soil termiticide barriers, in-ground bait stations, and the Georgia termite letter when you close." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Bed bugs ride in on luggage and used furniture, then move between units through the multifamily housing around the corridor. Whole-room heat clears every life stage in a day, or a targeted residual program with follow-up checks does the job." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches settle in wherever there's food and warmth — homes, apartments, and Norcross's many restaurants — while 'palmetto bugs' wander up from mulch and storm drains. Treatment built around the species, backed by a re-treat guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Orkin ranks metro Atlanta among the top five U.S. mosquito metros, and shaded Norcross lots plus puddles around the commercial district keep them breeding. Residual barrier treatments and larviciding across the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "Roof rats, Norway rats, and mice work their way into Norcross's older buildings, restaurants, and warehouses as nights cool. Trapping to bring the numbers down, then exclusion that seals every gap, plus follow-up monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Fire ants take over Norcross lawns, with wasps, spiders, and nuisance ants close behind. One recurring quarterly plan keeps the whole lineup in check, year-round." },
  ],

  // No `pestPages` — Norcross is a hub-only build for now (see header note). Add
  // per-pest spoke pages later by introducing a `pestPages` object keyed by
  // service slug; the routing, sitemap, and city-service view already support it.
};
