'use strict';

// ── Lilburn, GA — city HUB (no per-pest spoke pages yet) ─────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hubs
// (Duluth, Lawrenceville, Snellville, Norcross, Suwanee). Duluth owns fast
// suburban growth + multifamily + commercial corridors; Lawrenceville owns the
// county-seat / historic-square / old-plus-new-build duality; Snellville owns the
// settled, established-residential / mature-subdivisions angle; Norcross owns the
// historic downtown + Buford Highway international-COMMERCIAL/industrial district;
// Suwanee owns the affluent master-planned / Town-Center angle. Lilburn leads with
// ITS OWN distinctive: a small, established SOUTHWEST-Gwinnett city that pairs a
// compact historic OLD TOWN core with wooded, settled RESIDENTIAL neighborhoods
// and a notably DIVERSE, INTERNATIONAL residential community strung along the
// US-29 / Lawrenceville Highway corridor — framed as residential and small-town,
// explicitly NOT Norcross's commercial/industrial Buford Highway story and NOT
// Snellville's generic mature-subdivision story. Targets local intent ("pest
// control lilburn", "lilburn exterminator", "lilburn ga pest control"). Rendered
// by views/city.ejs at /georgia/lilburn/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/lilburn/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built spoke
// URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Lilburn is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on this
// page (name + phone + LocalBusiness/PestControlService schema, dynamically pulled
// server-side by views/city.ejs); until one is assigned the page falls back to the
// shared (844) directory line and a plain Service schema node. The contractor
// lookup tries both "Gwinnett County" and "Gwinnett" automatically. Address/license
// render only from the real contractor record — never synthesized. Trust signals
// here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names beyond the well-known US-29 /
// Lawrenceville Highway, no named subdivisions, no specific parks, no ordinances,
// no invented stats): a small, established city in southwestern Gwinnett County;
// around 13,000 residents; built around a compact historic Old Town district, with
// wooded, settled residential neighborhoods and a notably diverse, international
// community spread along the US-29 / Lawrenceville Highway corridor; ZIP 30047;
// area codes 770/678/470; humid subtropical climate; EASTERN SUBTERRANEAN termites
// are the dominant wood-destroyer here (the more destructive Formosan termite stays
// rare in Georgia away from the coast — stated as a statewide aside only, NOT a
// local presence claim); red imported fire ants present in all 159 GA counties;
// metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025); structural pest
// control is regulated/licensed by the Georgia Dept. of Agriculture's Structural
// Pest Control Commission. Nearby Gwinnett communities served: Norcross, Snellville,
// Lawrenceville, Grayson, Centerville.

module.exports = {
  name: 'Lilburn',
  slug: 'lilburn',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30047'],
  // Nearby Gwinnett-area communities we also serve — NOT Lilburn subdivisions.
  // Service-area names only; all sit in the same Gwinnett County coverage area, so
  // the assigned county contractor covers them too. Norcross, Snellville, and
  // Lawrenceville have built city hubs and auto-link; the rest render as plain
  // (non-clickable) badges.
  neighborhoods: ['Norcross', 'Snellville', 'Lawrenceville', 'Grayson', 'Centerville'],

  // Shared branded 1200×630 OG card (no Lilburn-specific asset exists yet); this
  // explicit value mirrors the sibling hubs. Drop a per-page path here later to
  // give Lilburn its own card.
  ogImage: '/images/og-default.jpg',

  // ~55 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Lilburn GA | Local Exterminators You Trust',
  // ~153 chars; CTA + exact + long-tail terms, paired with GA + Lilburn's own angle.
  metaDesc: "Licensed pest control in Lilburn, GA — termite, mosquito, rodent & bed bug treatment from its Old Town core to the US-29 corridor. Call for a free quote.",
  h1: 'Pest Control in Lilburn, GA',
  heroSub: "Lilburn is a small, long-settled corner of southwest Gwinnett County — a compact historic Old Town wrapped in wooded residential streets and a diverse, international community spread along the US-29 / Lawrenceville Highway corridor. Older homes, tree-shaded lots, and Georgia's humid weather keep termites, mosquitoes, roaches, and rodents working close to year-round. Reach a licensed Lilburn, GA exterminator who knows these neighborhoods — fast.",

  overviewHeading: 'Pest Control Built for Lilburn, GA & Gwinnett County',
  overview: [
    "Lilburn sits in the southwest corner of Gwinnett County, a smaller city of roughly 13,000 that grew up around a compact Old Town rather than sprawling out all at once. What gives the place its character — tree-shaded residential streets, decades-settled homes, and a genuinely international mix of households spread along the US-29 / Lawrenceville Highway corridor — also shapes what local exterminators see. Older houses tucked under mature trees have had years to develop the small gaps and worn seals that let ants, roaches, and rodents in, and the heavy tree cover that makes Lilburn lots feel private also keeps yards damp and shaded right up to the foundation.",
    "Beneath the local texture is the same Gwinnett County climate every community here shares: long, sticky summers and brief, mild winters that rarely give pests a real off-season. That's the practical case for a recurring, locally-tuned Lilburn Georgia pest control plan over a single visit — the pressure doesn't pause, so the protection shouldn't either. Anywhere across 30047 and the streets running off Lawrenceville Highway, the licensed, insured pros in our directory size up your specific Lilburn property and quote it for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Keeps Pests Active Year-Round in Lilburn, GA?',
      paras: [
        "Georgia is one of the hardest-hit termite states in the nation, and southwest Gwinnett feels every bit of that pressure. Eastern subterranean termites are the dominant wood-destroying insect here, moving up through the soil into any structure where wood sits near grade — and because Lilburn's winters stay mild, those colonies skip the dormant season entirely and keep feeding underground all twelve months. Since homeowners insurance almost never pays out for termite damage, holding a protective barrier in place costs far less than repairing a chewed-through structure later.",
        "Termites are only where the list begins. Red imported fire ants live in every one of Georgia's 159 counties, raising mounds across Lilburn yards and the green space along the corridor. Orkin's 2025 ranking placed metro Atlanta among the five worst U.S. metros for mosquitoes, and the creeks, low wet ground, and deep tree shade common to Lilburn's older neighborhoods give them somewhere to breed and rest. Layer on the German roaches that establish indoors, the smokybrown 'palmetto bugs' that drift in from leaf litter and woodpiles, and the rats and mice that test the seams of an aging house, and a steady professional barrier simply makes more sense than reacting to one pest at a time.",
      ],
    },
    {
      heading: '<span id="termite"></span>How Serious Is the Termite Risk for Lilburn Homes?',
      paras: [
        "Serious enough that an established home is right in a subterranean termite's wheelhouse. Eastern subterranean termites rise out of the soil inside mud tubes and work into sills, floor joists, and framing through openings most owners would never notice. Lilburn's older housing stock has had decades of settling, ground moisture, and tree roots and mulch crowding the foundation to widen those routes, and the mild Gwinnett winters keep the colony eating all year long. For most households the first real signal is a spring swarm — a flush of winged termites at a window, or a little scatter of discarded translucent wings collecting on a sill. (Eastern subterranean termites are the species that matters in Lilburn; the far more destructive Formosan termite remains rare in Georgia away from the coast.)",
        "A Georgia-licensed inspector fits termite treatment in Lilburn, GA to the individual house — a non-repellent liquid termiticide trenched into the soil to build one continuous treated zone, in-ground bait stations that foraging workers carry back to wipe out the colony, or the two paired for the mix of slab and crawlspace homes around the city. Closing on a property? Georgia transactions almost always call for the Official Georgia Wood Infestation Inspection Report — the 'termite letter' — which only a Georgia-licensed operator can issue, generally within 30 days of the closing date. The pros in our directory inspect, treat, and write that letter.",
      ],
    },
    {
      heading: '<span id="mosquito"></span>What Fuels Mosquito Season in Lilburn, GA?',
      paras: [
        "Damp, shaded ground and a few overlooked containers — and Lilburn's wooded older lots supply both. Metro Atlanta sat among the nation's five worst metros for mosquitoes on Orkin's 2025 list, and it takes no more than a capful of standing water to launch a fresh brood. The creeks and low, slow-draining spots that thread through Lilburn's neighborhoods hold water between Georgia storms, while a forgotten plant saucer, a sagging gutter, or a tarp behind the garage quietly raises the next generation — and the dense tree canopy overhead hands the adults cool, sheltered places to wait out the daylight hours right beside the porch.",
        "Professional mosquito control in Lilburn, GA works the whole life cycle instead of just easing the bites: a residual barrier laid on the shrubs, fence lines, and tree edges where adults shelter, renewed about every three to four weeks across the warm season; larviciding for standing water that can't be drained; and source reduction to clear the hidden breeding pockets driving the count. The reasons run past comfort, too — the Georgia Department of Public Health watches for West Nile virus every year, the daytime-biting Asian tiger mosquito is widespread here, and mosquitoes carry heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>What Roach Problems Do Lilburn Homes Face?',
      paras: [
        "Generally two of them, and they ask for opposite responses. German cockroaches are small, multiply indoors at a blistering rate, and dig into kitchens, bathrooms, and laundry areas — spot a single one and there's almost certainly a colony behind it rather than a lone stray. The hefty roaches Georgians call 'palmetto bugs' — smokybrown and American cockroaches — are outdoor insects that live in leaf litter, woodpiles, mulch, and crawlspaces, exactly the cover Lilburn's wooded yards provide in quantity, and they simply blunder indoors, which is how even a carefully kept home turns up a big roach now and again.",
        "A licensed technician identifies which roach is in play before doing anything else, then shapes the treatment to it — gel baiting and insect growth regulators for the indoor German roaches, plus a perimeter barrier and a harborage cleanup for the outdoor 'palmetto bugs,' usually under a re-treat guarantee. It's a health concern on top of an unpleasant one, because German cockroach droppings and shed skins are a documented asthma and allergy trigger, particularly for children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>What Should You Do About Bed Bugs in Lilburn, GA?',
      paras: [
        "Act early — bed bugs only grow harder and pricier to clear the longer they go unnoticed. They turn up as hitchhikers, riding in on luggage after a trip, on secondhand furniture, and in moving boxes, never a verdict on how clean a home is, and a single female lays hundreds of eggs over her life, so a few become many in short order. Keep an eye out for itchy bites lined up in rows or clusters, rust- or blood-colored smudges and dark pepper-like flecks along mattress seams and box-spring edges, pale cast-off skins, and the live bugs themselves — flat, reddish-brown, roughly the size of an apple seed — near where you sleep.",
        "A bed bug exterminator in Lilburn, GA wipes out every life stage with whole-room heat — lifting a room to a lethal temperature that kills adults, nymphs, and eggs in a single day, reaching even the ones hidden inside walls and furniture — or with a targeted residual program backed by follow-up inspections, frequently combined with steam and mattress encasements. Drugstore foggers tend to scatter bed bugs into adjoining rooms and set the whole effort back, so bringing in a pro at the first sign keeps the job smaller, faster, and less disruptive.",
      ],
    },
    {
      heading: '<span id="rodent"></span>What Draws Rats and Mice Into Lilburn Homes?',
      paras: [
        "An aging seal, an overhanging branch, and a warm attic on a cool night. Roof rats are agile climbers that come in high along the roofline and settle into attics and soffits; Norway rats are heavier ground-dwellers that burrow in low near the foundation and crawlspace; and house mice slip through an opening no bigger than a dime and breed quickly once they're inside. Lilburn's older homes tend to have collected entry points over the years — gaps around eaves, vents, pipes, and tired weatherstripping — and the mature trees shading so many roofs give roof rats a ready bridge straight to the eaves. Rodent calls jump in fall as the first cool nights drive them in, and Gwinnett's mild winters keep them busy once they've moved in. Listen for scratching overhead after dark, and watch for droppings, gnaw marks, and greasy rub trails.",
        "Genuine rodent control in Lilburn, GA goes well past scattering bait — it's trapping to bring the numbers down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't return, finished with monitoring and cleanup. That seal-out is what separates a short-lived quiet spell from a permanent fix, and it matters because rodents gnaw wiring — a recognized fire hazard — and foul food and surfaces everywhere they travel.",
      ],
    },
    {
      heading: "<span id=\"general\"></span>Fire Ants, Wasps & the Pests Lilburn Households Tackle",
      paras: [
        "Keep a lawn in Lilburn and you almost certainly share it with fire ants — red imported fire ants are established across all 159 Georgia counties, throwing up dome-shaped mounds in yards and along the corridor's green space and delivering stings that are genuinely dangerous to anyone allergic, plus pets and small children. A hardware-store mound treatment seldom settles it; the approach that lasts pairs a broadcast bait that workers haul below ground to the queen with direct mound treatment and a perimeter barrier, all kept current on a recurring schedule.",
        "A general pest control plan sweeps up everything else a Lilburn household meets over the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build steadily through summer and grow short-tempered by fall, so pros take down reachable nests and treat eaves, soffits, and entry points to keep them from rebuilding. That same recurring quarterly visit also handles nuisance ants, spiders — black and brown widows among them in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that wander indoors as the weather turns: a single plan timed to each pest's season, not a scramble of one-off calls.",
      ],
    },
    {
      heading: "Lilburn's Pest Activity, Month to Month",
      paras: [
        "Pest pressure rolls through the calendar in Lilburn. Here's the pattern local homeowners can count on:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites take flight on the first warm, humid afternoons — a burst of winged swarmers, or shed translucent wings gathering at a window, is the classic early sign of a colony below. Ants stir, carpenter bees bore into deck rails and trim, and the season's first rains start mosquitoes breeding. The prime window to get protection set before the pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "The peak. Mosquitoes run hard across metro Atlanta, fire ant mounds multiply in Lilburn yards, wasp and yellowjacket nests swell under eaves, and roaches and 'palmetto bugs' push indoors out of the heat and humidity. Fleas and ticks reach their busiest stretch." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start scouting for a warm place to ride out winter — this is when scratching turns up in Lilburn attics and walls. Yellowjackets grow aggressive as their colonies collapse. A smart moment to seal entry points before the cold arrives." },
        { name: 'Winter (Dec–Feb)', text: "Lilburn's mild winters keep pests in motion. German roaches and mice stay active indoors, and subterranean termites feed underground without letting up. Recurring service holds the protective barrier through the cool months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Where We Serve Around Lilburn in Gwinnett County',
      paras: [
        "The local pros in our directory cover Lilburn across 30047 and the Gwinnett County communities nearby. If you live in one of these areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Lilburn',
      cards: [
        { name: '1. Call for a free quote', text: "A single call reaches a licensed, insured exterminator covering Lilburn and the rest of Gwinnett County — no obligation, no pressure, and nothing owed for the quote." },
        { name: '2. Get a local inspection', text: "Your pro walks the home and yard, identifies the pest and how far it has spread, and recommends the right treatment for your Lilburn property — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products at label rates, including family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Lilburn homeowners with licensed, insured local exterminators across Gwinnett County. Call and you'll reach the pest control pro assigned to the Lilburn area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Lilburn, GA?', a: "There's no flat rate — it turns on the pest, how far the problem has spread, and the size of your home and lot. A recurring general pest plan is the gentlest on the budget, while specialty work like termite or bed bug treatment runs higher for the equipment and follow-up it takes. Every pro in our directory hands you a free, property-specific quote before any work starts, so your exact price is clear up front." },
    { q: 'Do you cover both Old Town Lilburn and the neighborhoods along the US-29 corridor?', a: "Yes — the licensed pros in our directory work the full spread of Lilburn, from the older homes around the historic Old Town to the residential streets running off the US-29 / Lawrenceville Highway corridor. Older, tree-shaded houses often need attention to accumulated entry points and foundation moisture, and your pro tailors the treatment and the schedule to whichever part of the city you're in." },
    { q: 'What pests are most common in Lilburn and Gwinnett County?', a: "The big ones are eastern subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that head for attics as nights cool. The local pros in our directory treat every one of them." },
    { q: 'Do you serve the areas around Lilburn too?', a: "Yes. Beyond Lilburn's 30047 ZIP code, the pros in our directory cover the surrounding Gwinnett County communities, including Norcross, Snellville, Lawrenceville, Grayson, and Centerville. Call and we'll connect you with a licensed exterminator for your part of the county." },
    { q: 'Are Lilburn, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Lilburn?', a: "Often, yes — many of the local pros serving Lilburn offer same-day and emergency visits for urgent trouble like a wasp nest, a sudden roach problem, or rodents in the house. Call and we'll route you to a Gwinnett County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Lilburn pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Lilburn, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Eastern subterranean termites feed straight through Gwinnett's mild winters, and Lilburn's older, tree-shaded homes — with mulch and roots crowding settled foundations — hand them an easy path to the wood. Trenched soil termiticide, in-ground bait stations, and the Georgia termite letter at closing." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Bed bugs hitch in on luggage and secondhand furniture, then breed quietly inside Lilburn homes and rentals before anyone spots them. Whole-room heat reaches every life stage in a day, or a targeted residual program with follow-up checks clears them out." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "Fast-breeding German roaches dig in indoors while smokybrown 'palmetto bugs' wander up from the leaf litter and woodpiles of wooded yards. Treatment is built around the species — gel baiting inside, a perimeter barrier outside — and usually backed by a re-treat guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Lilburn's tree canopy gives mosquitoes shade to wait out the day while creeks and trapped water hatch the next brood — and metro Atlanta sits among Orkin's five worst metros for 2025. Residual barrier treatments plus larviciding, refreshed across the warm months." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "Roof rats bridge in along overhanging trees while mice slip through the worn seals of an older home, all chasing warmth as fall arrives. Trapping to clear them, exclusion that physically closes the gaps, and follow-up monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Fire ants stake out Lilburn lawns, with wasps, spiders, and nuisance ants rounding out the list. One recurring quarterly plan stays ahead of all of them, timed to each pest's season." },
  ],

  // No `pestPages` — Lilburn is a hub-only build for now (see header note). Add
  // per-pest spoke pages later by introducing a `pestPages` object keyed by service
  // slug; the routing, sitemap, and city-service view already support it.
};
