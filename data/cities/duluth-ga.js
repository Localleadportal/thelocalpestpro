'use strict';

// ── Duluth, GA — city HUB (no per-pest spoke pages yet) ──────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city hubs
// (Canton, Holly Springs, Woodstock) — those are a different county, so Duluth
// leads with its own Gwinnett County / metro-Atlanta hooks and fresh wording.
// Targets local intent ("pest control duluth ga", "duluth ga exterminator",
// "duluth georgia pest control"). Rendered by views/city.ejs at /georgia/duluth/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/duluth/<pest>/ spoke pages are built yet. Instead the GA-relevant
// pest categories (termite, mosquito, rodent, bed bug, fire ant, roach,
// wasp/hornet) are covered as on-page sections, and the hub pest cards jump to
// those sections via in-page anchors (#termite, #mosquito, …) rather than to
// not-yet-built spoke URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Duluth is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on
// this page (name + phone + LocalBusiness/PestControlService schema, dynamically
// pulled server-side by views/city.ejs); until one is assigned the page falls
// back to the shared (844) directory line and a plain Service schema node. The
// contractor lookup tries both "Gwinnett County" and "Gwinnett" automatically.
// Trust signals here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics — no street names, no
// subdivisions, no parks, no ordinances, no invented stats): city in Gwinnett
// County, a northeastern suburb in metro Atlanta; a fast-growing suburb, now
// home to more than 30,000 residents; a mix of established single-family
// neighborhoods, newer multifamily housing, and dense commercial corridors;
// nearby Gwinnett-area communities Suwanee, Berkeley Lake, Norcross, Peachtree
// Corners, Lawrenceville; ZIPs 30096/30097; area codes 770/678/470; humid
// subtropical climate; eastern subterranean termites dominant in GA (Formosan in
// parts of metro Atlanta); red imported fire ants are present in all 159 GA
// counties; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated/licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. (This is Duluth, GEORGIA —
// not Duluth, Minnesota.)

module.exports = {
  name: 'Duluth',
  slug: 'duluth',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30096', '30097'],
  // Nearby Gwinnett-area communities we also serve — NOT Duluth subdivisions.
  // Service-area names only; all sit in the same Gwinnett County coverage area,
  // so the assigned county contractor covers them too. None has a built city hub
  // yet, so each renders as a plain (non-clickable) badge.
  neighborhoods: ['Suwanee', 'Berkeley Lake', 'Norcross', 'Peachtree Corners', 'Lawrenceville'],

  // Shared branded 1200×630 OG card (no Duluth-specific asset exists yet); this
  // explicit value mirrors the sibling hubs. Drop a per-page path here later to
  // give Duluth its own card.
  ogImage: '/images/og-default.jpg',

  // ~56 chars; leads with the exact-match phrase and keeps "GA" to disambiguate
  // from Duluth, Minnesota.
  metaTitle: 'Pest Control Duluth GA | Licensed Exterminators Near You',
  // ~155 chars; CTA + exact + long-tail terms, paired with GA/Gwinnett.
  metaDesc: "Licensed pest control in Duluth, GA — termite, mosquito, rodent & bed bug treatment for this fast-growing Gwinnett County suburb. Call now for a free quote.",
  h1: 'Pest Control in Duluth, GA',
  heroSub: "Duluth is one of Gwinnett County's fastest-growing suburbs in northeast metro Atlanta — and its humid subtropical summers and mild winters keep termites, mosquitoes, roaches, and rodents active close to year-round. Get a licensed local Duluth, GA exterminator who knows the area, fast. (This is Duluth, Georgia — not Duluth, Minnesota.)",

  overviewHeading: 'Pest Control Built for Duluth, GA & Gwinnett County',
  overview: [
    "Duluth has grown from a small railroad town into one of Gwinnett County's larger and fastest-growing suburbs, now home to more than 30,000 residents in the northeastern corner of metro Atlanta. That growth shows up in the housing: established single-family neighborhoods sit alongside newer multifamily communities and the dense commercial corridors that have built up across the city — and each of those gives pests a different way in. Freshly graded lots and new framing draw subterranean termites, multifamily buildings let pests move between units, and older homes have had years for ants, roaches, and rodents to find the gaps.",
    "The common thread is the climate. Duluth shares metro Atlanta's humid subtropical weather — long, sticky summers, mild winters, and steady rainfall — so most pests here never get a true off-season, which is why recurring, locally-tuned Duluth Georgia pest control usually beats one-off treatments. Whether you're in 30096, 30097, or anywhere across Gwinnett County, the licensed, insured pros in our directory quote your specific Duluth property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Duluth, GA Homes Need Year-Round Pest Protection',
      paras: [
        "Georgia sits in one of the heaviest termite-pressure regions in the country, and Gwinnett County is squarely in it. Eastern subterranean termites are active throughout the area, and aggressive Formosan termites have established in parts of metro Atlanta — and because Duluth's winters are mild, those colonies keep feeding underground all year instead of going dormant. Since termite damage typically isn't covered by homeowners insurance, steady protection costs far less than the structural repairs.",
        "Termites are only the start. Red imported fire ants are present in all 159 Georgia counties, throwing up painful mounds across Duluth lawns and common areas. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — it landed in the top five on Orkin's 2025 list — and the shaded yards and standing water that come with rapid suburban growth keep them breeding from spring into fall. Add the German roaches, outdoor 'palmetto bugs,' and roof rats that thrive in the humidity, and most Duluth homes benefit from a steady professional barrier rather than reacting one infestation at a time.",
      ],
    },
    {
      heading: '<span id="termite"></span>Are Termites a Year-Round Threat in Duluth, GA?',
      paras: [
        "Yes — termites need warmth, moisture, and wood, and Duluth supplies all three nearly year-round. Eastern subterranean termites forage through the soil and build mud tubes up into sills, floor joists, and framing, and because Gwinnett County winters are mild, those colonies keep feeding 12 months a year. Aggressive Formosan termites have also established in parts of metro Atlanta, raising the stakes across the region. The first sign most homeowners see is a spring swarm — winged 'swarmers,' or little piles of discarded translucent wings on windowsills — which almost always means an active colony is already nearby.",
        "Termite treatment in Duluth, GA is matched to your home by a licensed inspector: a non-repellent liquid termiticide trenched into the soil to create a continuous treated zone, in-ground bait stations that foragers carry back to collapse the colony, or a combination of both for Duluth's mix of slab and crawlspace homes. Buying or selling? Georgia closings almost always require the Official Georgia Wood Infestation Inspection Report — the 'termite letter' — which only a Georgia-licensed operator can issue, usually within 30 days of closing. The pros in our directory inspect, treat, and issue that report.",
      ],
    },
    {
      heading: '<span id="mosquito"></span>How Bad Are Mosquitoes in Duluth, GA?',
      paras: [
        "Bad enough to take a yard back from you. Metro Atlanta consistently ranks among the worst U.S. metros for mosquitoes — top five on Orkin's 2025 list — and Duluth sits squarely in that pressure. It takes only a capful of standing water to raise a batch, so even a tidy Duluth yard produces them: a clogged gutter, a plant saucer, a tarp, or a low spot left wet between Georgia thunderstorms is enough, and the shaded, vegetated yards common across the city's neighborhoods give adults somewhere cool to rest right beside the patio.",
        "Professional mosquito control in Duluth, GA goes after every stage instead of just masking bites: a residual barrier treatment on the shrubs and tree lines where adults rest, reapplied roughly every three to four weeks through the warm season; larviciding of standing water that can't be drained; and source reduction to eliminate the hidden breeding sites that drive the population. It matters beyond comfort — the Georgia Department of Public Health tracks West Nile virus every year, the aggressive Asian tiger mosquito bites during the day, and mosquitoes transmit heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>Why Do Roaches Keep Coming Back in Duluth?',
      paras: [
        "Because Duluth almost always has two very different roach problems, and they're treated in completely different ways. German cockroaches are small, fast-breeding insects that live and reproduce indoors — in kitchens, bathrooms, apartments, and the city's many multifamily units — and seeing them usually signals an established infestation, not a stray. The big roaches people call 'palmetto bugs' are something else: smokybrown and American cockroaches that live outdoors in mulch, leaf litter, gutters, and crawlspaces and simply wander inside, which is why you can spot a large roach even in a spotless Duluth home.",
        "A licensed pro starts by identifying which roach you have, then builds the treatment around it — targeted gel baiting and insect growth regulators for indoor German roaches, plus a perimeter barrier and harborage cleanup for the outdoor 'palmetto bugs,' usually backed by a re-treat guarantee. It's a health issue as well as a comfort one: German cockroach droppings and shed skins are a well-documented asthma and allergy trigger, especially in children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>Do You Need a Bed Bug Exterminator in Duluth, GA?',
      paras: [
        "Bed bugs are hitchhikers, not a sign of an unclean home — they ride in on luggage after travel, on secondhand furniture, and in moving boxes, and in multifamily housing they can move between units through shared walls and voids. Once inside a Duluth home or apartment they spread fast, because a single female can lay hundreds of eggs over her life. Watch for itchy bites in rows or clusters, rust- or blood-colored spots and dark pepper-like specks along mattress seams, pale shed skins, and live apple-seed-sized bugs near where you sleep.",
        "A bed bug exterminator in Duluth, GA clears them at every life stage with whole-room heat — which raises a room to a lethal temperature and kills adults, nymphs, and eggs in a single day, even those hidden in walls and furniture — or a targeted residual program with follow-up verification, often paired with steam and mattress encasements. DIY foggers usually scatter the infestation and make it worse, so catching it early and calling a pro keeps treatment faster and less disruptive.",
      ],
    },
    {
      heading: '<span id="rodent"></span>What About Rats and Mice in Duluth, GA?',
      paras: [
        "Three rodents account for most Duluth infestations: roof rats, agile climbers that enter high through the roofline and nest in attics and soffits; Norway rats, larger ground-dwellers that burrow into crawlspaces and enter low around the foundation; and house mice, which slip through a gap the size of a dime and breed quickly. Rodent calls climb in fall, when the first cool nights send them hunting for somewhere warm — but Gwinnett County's mild winters mean they stay active year-round once inside. Listen for scratching in the attic at night, and look for droppings, gnaw marks, and greasy rub marks along entry points.",
        "Effective rodent control in Duluth, GA isn't just scattering poison — it's trapping to knock the population down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't return, finished with monitoring and cleanup. That permanent seal-out is the step that separates a lasting fix from a temporary one, and it matters because rodents gnaw on wiring (a recognized fire risk) and contaminate food and surfaces.",
      ],
    },
    {
      heading: '<span id="general"></span>Fire Ants, Wasps & Everyday Pests in Duluth',
      paras: [
        "If you have a lawn in Duluth, you almost certainly have fire ants — red imported fire ants are established in all 159 Georgia counties, building dome-shaped mounds across yards and common areas and delivering stings that can be dangerous to anyone allergic, as well as to pets and small children. Knocking them down takes more than a hardware-store mound killer: the reliable approach pairs a broadcast bait that foragers carry underground to kill the queen with direct mound treatment and a perimeter barrier, all of which a recurring plan keeps on top of.",
        "A general pest control plan is the catch-all for everything else Duluth homeowners run into. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build through the summer and turn aggressive in fall, so pros knock down accessible nests and treat eaves, soffits, and entry points so they don't simply rebuild. The same recurring quarterly service handles nuisance ants, spiders (including black and brown widows in garages and woodpiles), fleas and ticks, silverfish, and the seasonal invaders that push indoors as the humidity shifts — one plan, timed to each pest's season, instead of a string of one-off calls.",
      ],
    },
    {
      heading: 'Duluth Pest Season — What to Expect',
      paras: [
        "Pest pressure shifts through the year in Duluth. Here's roughly what local homeowners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or discarded wings near windows are the classic first sign of an active colony. Ants get moving, carpenter bees drill into deck and trim wood, and the first warm rains kick off mosquito breeding. The ideal window to get protection in place before pressure peaks." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across metro Atlanta, fire ant mounds multiply in Duluth lawns, wasp and yellowjacket nests grow large under eaves, and roaches and 'palmetto bugs' push indoors out of the heat and humidity. Fleas and ticks are at their most active." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start looking for a warm place to overwinter — this is when you'll hear scratching in Duluth attics and walls. Yellowjackets turn aggressive as their colonies break down. A smart time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Duluth's mild winters keep pests going. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service maintains the protective barrier through the cooler months so spring doesn't start with a surge." },
      ],
    },
    {
      heading: 'Nearby Gwinnett County Areas We Serve Around Duluth',
      paras: [
        "The local pros in our directory cover Duluth across both ZIP codes and the surrounding Gwinnett County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Duluth',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Duluth and the wider Gwinnett County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Duluth home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Duluth homeowners with licensed, insured local exterminators across Gwinnett County — we're not a single company. When you call, you reach the pest control pro assigned to the Duluth area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Duluth, GA?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home and lot. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'Is this Duluth, Georgia or Duluth, Minnesota?', a: "This page covers pest control in Duluth, Georgia — the Gwinnett County suburb in northeast metro Atlanta, not Duluth, Minnesota. The licensed pros in our directory serve the Georgia Duluth and the surrounding Gwinnett County communities." },
    { q: 'What pests are most common in Duluth and Gwinnett County?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state), red imported fire ants in lawns, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push into attics as nights cool. The local pros in our directory treat all of them." },
    { q: 'Do you serve the areas around Duluth too?', a: "Yes. Beyond Duluth's 30096 and 30097 ZIP codes, the pros in our directory serve the surrounding Gwinnett County communities, including Suwanee, Berkeley Lake, Norcross, Peachtree Corners, and Lawrenceville. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Duluth, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Duluth?', a: "Often, yes — many of the local pros serving Duluth offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Gwinnett County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Duluth pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Duluth, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL),
  // so nothing 404s while per-pest pages are deferred. The canonical six cards
  // mirror the sibling hubs; fire ants and wasps/hornets are covered under
  // General Pest Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Georgia is one of the nation's heaviest termite zones — eastern subterranean termites plus Formosan in parts of metro Atlanta. Liquid soil barriers, in-ground bait stations, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Travel- and multifamily-driven bed bugs spread fast through Duluth homes, apartments, and rentals. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in metro Atlanta's humidity — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and shaded Duluth yards plus suburban drainage give them standing water to breed. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "As Duluth nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Red imported fire ants are everywhere in Gwinnett County, alongside spiders, wasps, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No `pestPages` — Duluth is a hub-only build for now (see header note). Add
  // per-pest spoke pages later by introducing a `pestPages` object keyed by
  // service slug; the routing, sitemap, and city-service view already support it.
};
