'use strict';

// ── Snellville, GA — city HUB (no per-pest spoke pages yet) ───────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hubs
// (Duluth, Lawrenceville). Duluth owns the fast suburban growth + multifamily +
// commercial-corridor angle; Lawrenceville owns the county-seat / historic-square
// / old-stock-plus-new-build duality. Snellville leads with ITS OWN distinctive:
// an ESTABLISHED, settled residential suburb in southeast Gwinnett — incorporated
// in the 1920s and grown steadily through the late 20th century into mature
// single-family subdivisions with grown-in landscaping. Quieter and more
// residential than either sibling. Targets local intent ("pest control
// snellville", "snellville exterminator", "snellville ga pest control").
// Rendered by views/city.ejs at /georgia/snellville/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/snellville/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built
// spoke URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Snellville is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on
// this page (name + phone + LocalBusiness/PestControlService schema, dynamically
// pulled server-side by views/city.ejs); until one is assigned the page falls
// back to the shared (844) directory line and a plain Service schema node. The
// contractor lookup tries both "Gwinnett County" and "Gwinnett" automatically.
// Trust signals here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names, no subdivisions, no parks, no
// ordinances, no invented stats): a city in southeastern Gwinnett County;
// incorporated in the 1920s; grew steadily through the latter half of the 20th
// century into an established residential suburb of roughly 20,000 residents;
// known for its longtime town motto "Everybody's Somebody in Snellville";
// character is settled and residential — mature single-family subdivisions with
// grown-in landscaping rather than the high-growth/commercial profile of its
// siblings; ZIPs 30039/30078; area codes 770/678/470; humid subtropical climate;
// eastern subterranean termites dominant in GA (Formosan in parts of metro
// Atlanta); red imported fire ants present in all 159 GA counties; metro Atlanta
// is a top-five U.S. mosquito metro (Orkin 2025); structural pest control is
// regulated/licensed by the Georgia Dept. of Agriculture's Structural Pest
// Control Commission. Nearby Gwinnett communities served: Grayson, Lilburn,
// Centerville, Loganville, Lawrenceville.

module.exports = {
  name: 'Snellville',
  slug: 'snellville',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30039', '30078'],
  // Nearby Gwinnett-area communities we also serve — NOT Snellville
  // subdivisions. Service-area names only; all sit in the same Gwinnett County
  // coverage area, so the assigned county contractor covers them too. None has a
  // built city hub yet, so each renders as a plain (non-clickable) badge.
  neighborhoods: ['Grayson', 'Lilburn', 'Centerville', 'Loganville', 'Lawrenceville'],

  // Shared branded 1200×630 OG card (no Snellville-specific asset exists yet);
  // this explicit value mirrors the sibling hubs. Drop a per-page path here later
  // to give Snellville its own card.
  ogImage: '/images/og-default.jpg',

  // ~56 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Snellville GA | Trusted Local Exterminators',
  // ~159 chars; CTA + exact + long-tail terms, paired with GA/Gwinnett.
  metaDesc: "Licensed pest control in Snellville, GA — termite, mosquito, rodent & bed bug treatment for southeast Gwinnett County's settled suburbs. Call for a free quote.",
  h1: 'Pest Control in Snellville, GA',
  heroSub: "Snellville is an established residential community in southeastern Gwinnett County — a settled suburb whose mature subdivisions and grown-in yards have had decades to take root. That maturity, plus Georgia's humid climate, gives termites, mosquitoes, roaches, and rodents plenty to work with nearly year-round. Connect with a licensed local Snellville, GA exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Snellville, GA & Gwinnett County',
  overview: [
    "Snellville came together as a quiet southeast-Gwinnett crossroads, was incorporated back in the 1920s, and filled in steadily through the second half of the 20th century into the established residential suburb of roughly 20,000 people it is today — the kind of place that adopted the friendly motto \"Everybody's Somebody in Snellville.\" Unlike the high-growth and commercial sides of the county, Snellville's story is one of settling in: streets lined with mature single-family homes, full-grown trees, and landscaping that has had years to thicken. For pest control, that maturity cuts two ways — decades-old houses have had time to develop the small gaps and worn seals that ants, roaches, and rodents exploit, while all that shade, mulch, and grown-in greenery gives outdoor pests cover right up against the foundation.",
    "Underpinning all of it is Gwinnett County's weather. Snellville sees the same drawn-out humid summers and brief, temperate winters as the rest of metro Atlanta, so pests here seldom get a real break — which is exactly why a recurring, locally-tuned Snellville Georgia pest control plan generally outperforms a single visit. Wherever you are across 30039 or 30078, the licensed, insured pros in our directory size up your specific Snellville property and quote it for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Pest Pressure Should Snellville, GA Homeowners Plan For?',
      paras: [
        "Georgia is one of the toughest termite states in the nation, and Gwinnett County feels every bit of it. Eastern subterranean termites move through the soil all over the area, and aggressive Formosan termites have gained a foothold in parts of metro Atlanta — and because Snellville's winters stay mild, those colonies never shut down for the season; they keep feeding underground right through January. Homeowners insurance almost never covers termite damage, so staying protected is far cheaper than rebuilding what they eat.",
        "And termites are only the headline. Red imported fire ants occupy all 159 of Georgia's counties, pushing mounds up across Snellville's established lawns. Metro Atlanta ranks among the country's worst regions for mosquitoes — fifth on Orkin's 2025 list — and the deep shade and settled landscaping that make older Snellville yards so pleasant also give mosquitoes somewhere to rest and breed. Layer on the German roaches that set up indoors, the smokybrown 'palmetto bugs' that drift in from the mulch, and the rats and mice that test every aging seal, and a steady professional barrier simply makes more sense than swatting at one problem at a time.",
      ],
    },
    {
      heading: "<span id=\"termite\"></span>Are Snellville's Mature Subdivisions at Risk for Termites?",
      paras: [
        "Very much so — and in some ways an established home is exactly what subterranean termites are looking for. Eastern subterranean termites rise out of the soil through mud tubes and work their way into sills, joists, and framing, and they only need the smallest point of contact. Snellville's older subdivisions have had decades of settling, ground moisture, and mulch beds and mature trees pressed up near the foundation to create that contact, and mild Gwinnett winters keep the colonies eating all twelve months. Aggressive Formosan termites in parts of metro Atlanta raise the danger further. The tip-off most owners notice is a springtime swarm — winged swarmers, or tiny heaps of shed translucent wings collecting on a windowsill.",
        "A Georgia-licensed inspector fits termite treatment in Snellville, GA to the specific house — a non-repellent liquid termiticide trenched into the soil to build one continuous treated zone, in-ground bait stations that foraging termites haul back to wipe out the colony, or the two combined for the mix of slab and crawlspace homes around the city. Closing on a property? Georgia transactions nearly always require the Official Georgia Wood Infestation Inspection Report — the 'termite letter' — which only a Georgia-licensed operator can issue, generally within 30 days of the closing date. The pros in our directory inspect, treat, and write that letter.",
      ],
    },
    {
      heading: "<span id=\"mosquito\"></span>Why Do Mosquitoes Thrive in Snellville's Shaded Yards?",
      paras: [
        "Because mature shade and a little trapped water are all they ask for, and Snellville's grown-in yards offer both. Metro Atlanta sits among the nation's worst metros for mosquitoes — fifth on Orkin's 2025 ranking — and a single bottle-cap of standing water is enough to launch a new brood. The full canopies and dense plantings that have matured around Snellville homes give adult mosquitoes cool, sheltered places to wait out the day, while a forgotten plant saucer, a sagging gutter, a wheelbarrow, or a shady low spot that never fully dries between Georgia storms quietly hatches the next wave.",
        "Professional mosquito control in Snellville, GA targets the whole life cycle instead of just easing the bites: a residual barrier laid down on the shrubs, fence lines, and tree edges where adults shelter, renewed roughly every three to four weeks across the warm season; larviciding for standing water that can't be drained; and source reduction to knock out the hidden breeding pockets driving the count. The stakes go past comfort — the Georgia Department of Public Health watches for West Nile virus each year, the daytime-biting Asian tiger mosquito is widespread, and mosquitoes carry heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>Which Roaches Show Up in Snellville Homes?',
      paras: [
        "Typically two of them, and they couldn't be more different to deal with. German cockroaches are small, multiply indoors at a startling pace, and dig into kitchens, bathrooms, and laundry rooms — catch sight of one and there is almost always a colony behind it, not a lone wanderer. The hefty roaches Georgians call 'palmetto bugs' — smokybrown and American cockroaches — are the opposite: they live outdoors in mulch, leaf litter, woodpiles, and crawlspaces, the kind of cover Snellville's mature landscaping supplies in abundance, and they simply blunder inside, which is why even a meticulously kept home turns up a big roach now and then.",
        "A licensed technician pins down the species first, then shapes the treatment to it — gel baiting and insect growth regulators for the indoor German roaches, paired with a perimeter barrier and a harborage cleanup for the outdoor 'palmetto bugs,' usually under a re-treat guarantee. It's a health concern alongside a nuisance one, because German cockroach droppings and shed skins are a documented asthma and allergy trigger, especially for children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>What Are the First Signs of Bed Bugs in Snellville, GA?',
      paras: [
        "Small clues that are easy to miss until the problem grows. Look for itchy bites arranged in lines or little clusters, rust- or blood-colored smudges and dark pepper-like flecks along mattress seams and box-spring edges, pale cast-off skins, and the live bugs themselves — flat, reddish-brown, about the size of an apple seed — tucked in near where you sleep. Bed bugs are hitchhikers, riding home on luggage, secondhand furniture, and moving boxes rather than reflecting anything about a household, and a single female lays hundreds of eggs over her life, so a few quickly become many.",
        "A bed bug exterminator in Snellville, GA wipes out every life stage with whole-room heat — bringing a room to a lethal temperature that kills adults, nymphs, and eggs in one day, reaching even the ones hidden inside walls and furniture — or with a targeted residual program backed by follow-up inspections, often combined with steam and mattress encasements. Drugstore foggers tend to scatter bed bugs into adjoining rooms and set the whole job back, so calling a pro at the first sign keeps treatment smaller, quicker, and less disruptive.",
      ],
    },
    {
      heading: '<span id="rodent"></span>Where Do Rats and Mice Nest in Snellville Homes?',
      paras: [
        "Up in the attic, down in the crawlspace, and anywhere an aging seal has loosened. Roof rats are agile climbers that come in high along the roofline and settle into attics and soffits; Norway rats are heavier ground-dwellers that burrow in low near the foundation; and house mice slip through an opening no wider than a dime and breed in a hurry once they're in. Snellville's settled homes tend to have accumulated entry points over the years — gaps around eaves, vents, pipes, and worn weatherstripping — and the mature trees overhanging many roofs give roof rats an easy bridge to the eaves. Rodent calls spike in fall as the first cool nights push them indoors, and Gwinnett's mild winters keep them busy once they've moved in. Listen for scratching overhead after dark, and watch for droppings, gnaw marks, and greasy rub trails.",
        "Genuine rodent control in Snellville, GA is more than tossing out bait — it's trapping to bring the numbers down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't return, capped off with monitoring and cleanup. That seal-out is the difference between a brief quiet spell and a permanent fix, and it matters because rodents gnaw wiring — a recognized fire hazard — and foul food and surfaces wherever they roam.",
      ],
    },
    {
      heading: "<span id=\"general\"></span>Fire Ants, Wasps & the Rest of Snellville's Pest Lineup",
      paras: [
        "Have a lawn in Snellville and you almost certainly share it with fire ants — red imported fire ants are established across all 159 Georgia counties, throwing up dome-shaped mounds in yards and delivering stings that are genuinely dangerous to anyone allergic, plus pets and small children. A hardware-store mound treatment rarely settles the matter; the approach that holds pairs a broadcast bait that workers carry below ground to the queen with direct mound treatment and a perimeter barrier, all maintained on a recurring schedule.",
        "A general pest control plan mops up everything else a Snellville household runs into over the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build steadily all summer and grow short-tempered by fall, so pros take down reachable nests and treat eaves, soffits, and entry points to keep them from rebuilding. That same recurring quarterly visit also handles nuisance ants, spiders — black and brown widows among them in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that wander in as the weather shifts: a single plan timed to each pest's season instead of a scramble of one-off calls.",
      ],
    },
    {
      heading: "Snellville's Pest Year, Season by Season",
      paras: [
        "Pest activity rolls through the calendar in Snellville. Here's the pattern local homeowners can count on:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid afternoons — winged swarmers or discarded wings near a window are the classic first sign of an active colony. Ants stir, carpenter bees bore into deck and trim wood, and the first warm rains start mosquitoes breeding. The prime stretch to get protection set before pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "The peak. Mosquitoes run hard across metro Atlanta, fire ant mounds multiply in Snellville lawns, wasp and yellowjacket nests swell under eaves, and roaches and 'palmetto bugs' edge indoors out of the heat. Fleas and ticks reach their busiest." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice begin scouting for a warm spot to overwinter — this is when scratching turns up in Snellville attics and walls. Yellowjackets get aggressive as their colonies collapse. A smart moment to seal entry points before the cold arrives." },
        { name: 'Winter (Dec–Feb)', text: "Snellville's mild winters keep pests in motion. German roaches and mice stay active indoors, and subterranean termites feed underground without letting up. Recurring service holds the protective barrier through the cool months so spring doesn't begin with a surge." },
      ],
    },
    {
      heading: 'Gwinnett County Communities We Serve Around Snellville',
      paras: [
        "The local pros in our directory cover Snellville across both of its ZIP codes and the Gwinnett County communities nearby. If you live in one of these areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Snellville',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Snellville and the wider Gwinnett County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, identifies the pest and how far it has spread, and recommends the right treatment for your Snellville home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products at label rates, including family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Snellville homeowners with licensed, insured local exterminators across Gwinnett County — not a single company. Call and you'll reach the pest control pro assigned to the Snellville area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Snellville, GA?', a: "There's no flat rate — it hinges on the pest, how far the problem has spread, and the size of your home and lot. A recurring general pest plan is the easiest on the budget, while specialty work like termite or bed bug treatment runs higher because of the equipment and follow-up it requires. Every pro in our directory provides a free, property-specific quote before any work starts, so you'll know your exact price up front." },
    { q: 'Do older, established Snellville homes get more pests?', a: "They can be more exposed in certain ways. Decades of settling tend to open up small gaps around eaves, vents, and worn seals that ants, roaches, and rodents take advantage of, and mature landscaping pressed near the foundation gives outdoor pests cover and termites a path to the wood. The licensed pros in our directory tailor the treatment to your home's age and condition, sealing accumulated entry points and addressing moisture along the way." },
    { q: 'What pests are most common in Snellville and Gwinnett County?', a: "The big ones are subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that love the humidity, and roof rats and mice that head for attics as nights cool. The local pros in our directory treat every one of them." },
    { q: 'Do you serve the areas around Snellville too?', a: "Yes. Beyond Snellville's 30039 and 30078 ZIP codes, the pros in our directory cover the surrounding Gwinnett County communities, including Grayson, Lilburn, Centerville, Loganville, and Lawrenceville. Call and we'll connect you with a licensed exterminator for your part of the county." },
    { q: 'Are Snellville, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Snellville?', a: "Often, yes — many of the local pros serving Snellville offer same-day and emergency visits for urgent trouble like a wasp nest, a sudden roach problem, or rodents in the house. Call and we'll route you to a Gwinnett County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Snellville pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Snellville, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Subterranean termites feed straight through Gwinnett's mild winters, and Snellville's decades-old homes — with mulch beds and mature trees crowding the foundation — hand them an easy path to the wood. Trenched soil termiticide, in-ground bait stations, and the Georgia termite letter at closing." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Bed bugs hitch in on luggage and secondhand furniture, then multiply quietly inside Snellville homes and rentals. Whole-room heat reaches every life stage in a single day, or a targeted residual program with follow-up checks clears them out." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "Fast-breeding German roaches dig in indoors while smokybrown 'palmetto bugs' wander up from the mulch and woodpiles of grown-in yards. Treatment is built around the species — gel baiting inside, a perimeter barrier outside — and usually backed by a re-treat guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Snellville's deep shade and full canopies give mosquitoes somewhere to wait out the day while trapped water hatches the next brood — and metro Atlanta sits fifth on Orkin's 2025 list. Residual barrier treatments plus larviciding, refreshed across the warm months." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "Roof rats bridge in along overhanging trees while mice slip through the worn seals of an older home, all hunting warmth as fall arrives. Trapping to clear them, exclusion that physically closes the gaps, and follow-up monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Fire ants stake out Snellville lawns, with wasps, spiders, and nuisance ants rounding out the list. A single recurring quarterly plan stays ahead of all of them, timed to each pest's season." },
  ],

  // No `pestPages` — Snellville is a hub-only build for now (see header note).
  // Add per-pest spoke pages later by introducing a `pestPages` object keyed by
  // service slug; the routing, sitemap, and city-service view already support it.
};
