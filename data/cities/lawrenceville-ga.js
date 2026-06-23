'use strict';

// ── Lawrenceville, GA — city HUB (no per-pest spoke pages yet) ────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hub
// (Duluth). Duluth leans on fast suburban growth + multifamily + commercial
// corridors and its "small railroad town" history; Lawrenceville leads with ITS
// OWN distinctives — Gwinnett's county seat, one of the oldest cities in metro
// Atlanta with a historic downtown square, and the older-stock + new-build
// DUALITY that drives its pest pressure. Targets local intent ("pest control
// lawrenceville", "lawrenceville exterminator", "lawrenceville ga pest control").
// Rendered by views/city.ejs at /georgia/lawrenceville/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/lawrenceville/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built
// spoke URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Lawrenceville is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on
// this page (name + phone + LocalBusiness/PestControlService schema, dynamically
// pulled server-side by views/city.ejs); until one is assigned the page falls
// back to the shared (844) directory line and a plain Service schema node. The
// contractor lookup tries both "Gwinnett County" and "Gwinnett" automatically.
// Trust signals here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names, no subdivisions, no parks, no
// ordinances, no invented stats): county seat of Gwinnett County; one of the
// oldest cities in metro Atlanta, settled in the early 1800s, built up around a
// historic downtown square; an older-housing-stock core alongside large newer
// subdivisions on the city's edges; ZIPs 30043/30044/30045/30046; area codes
// 770/678/470; humid subtropical climate; eastern subterranean termites dominant
// in GA (Formosan termites rare in GA, not established in metro Atlanta); red
// imported fire ants present in all 159 GA counties; metro Atlanta is a top-five
// U.S. mosquito metro (Orkin
// 2025); structural pest control is regulated/licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. Nearby Gwinnett communities
// served: Snellville, Grayson, Dacula, Lilburn, Sugar Hill.

module.exports = {
  name: 'Lawrenceville',
  slug: 'lawrenceville',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30043', '30044', '30045', '30046'],
  // Nearby Gwinnett-area communities we also serve — NOT Lawrenceville
  // subdivisions. Service-area names only; all sit in the same Gwinnett County
  // coverage area, so the assigned county contractor covers them too. None has a
  // built city hub yet, so each renders as a plain (non-clickable) badge.
  neighborhoods: ['Snellville', 'Grayson', 'Dacula', 'Lilburn', 'Sugar Hill'],

  // Shared branded 1200×630 OG card (no Lawrenceville-specific asset exists yet);
  // this explicit value mirrors the sibling hubs. Drop a per-page path here later
  // to give Lawrenceville its own card.
  ogImage: '/images/og-default.jpg',

  // ~60 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Lawrenceville GA | Local Licensed Exterminators',
  // ~157 chars; CTA + exact + long-tail terms, paired with GA/Gwinnett.
  metaDesc: "Licensed pest control in Lawrenceville, GA — termite, mosquito, rodent & bed bug treatment for Gwinnett County's historic county seat. Call for a free quote.",
  h1: 'Pest Control in Lawrenceville, GA',
  heroSub: "Lawrenceville is the seat of Gwinnett County and one of the oldest cities in metro Atlanta — a place where homes around the historic downtown square have stood for generations while large new subdivisions keep going up on the city's edges. That older-and-newer mix, paired with Georgia's humid climate, keeps termites, mosquitoes, roaches, and rodents working close to year-round. Get a licensed local Lawrenceville, GA exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Lawrenceville, GA & Gwinnett County',
  overview: [
    "Lawrenceville has a longer history than most of metro Atlanta. Settled in the early 1800s and serving as the seat of Gwinnett County ever since, it grew up around a historic downtown square long before the suburbs reached it. Today that heritage sits right next to rapid modern growth: decades-old houses near the old town center share the map with sprawling newer subdivisions out toward the city's edges. For pest control, that split matters — aging homes have had generations for ants, roaches, and rodents to find their way in through settled gaps and worn seals, while freshly graded lots and new framing are exactly what subterranean termites move toward.",
    "What ties it all together is Gwinnett County's climate. Lawrenceville gets the same long, humid summers and short, mild winters as the rest of metro Atlanta, so the local pest population rarely slows down enough to call it an off-season — a big reason recurring, locally-tuned Lawrenceville Georgia pest control tends to outwork a single visit. Whether your home is near the historic square in 30046 or in a newer neighborhood across 30043, 30044, or 30045, the licensed, insured pros in our directory price your specific Lawrenceville property for free before any work starts.",
  ],

  sections: [
    {
      heading: 'Why Year-Round Pest Pressure Hits Lawrenceville Homes',
      paras: [
        "Georgia ranks among the highest-pressure termite states in the country, and Gwinnett County sits right in the thick of it. Eastern subterranean termites work the soil across the area — and with Lawrenceville's winters staying mild, those colonies don't go dormant the way they would up north; they keep feeding underground all year. Because homeowners insurance almost never pays for termite damage, keeping protection current costs far less than repairing the structure later.",
        "Termites are just one piece of it. Red imported fire ants infest every one of Georgia's 159 counties, pushing mounds up across Lawrenceville lawns and common areas. Metro Atlanta is also one of the country's worst regions for mosquitoes — it placed in the top five on Orkin's 2025 ranking — and the shaded older yards near the town center hold standing water just as readily as the new-construction drainage out at the edges. Add German roaches indoors, smokybrown 'palmetto bugs' from the mulch, and rats hunting for an attic, and a steady professional barrier makes more sense than chasing one pest at a time.",
      ],
    },
    {
      heading: "<span id=\"termite\"></span>Do Lawrenceville's Older and Newer Homes Both Get Termites?",
      paras: [
        "Both do, just by slightly different routes — and Lawrenceville has plenty of each. Eastern subterranean termites tunnel up from the soil through mud tubes into sills, joists, and framing, and they don't need much of an opening. Older homes near the historic core have had decades of settling, moisture, and wood-to-ground contact to give them that opening, while new subdivisions sit on freshly disturbed soil with fresh lumber overhead — both make an easy target. Mild Gwinnett winters mean the colonies feed twelve months a year. The first clue is usually a spring swarm: winged swarmers, or small piles of discarded translucent wings on windowsills.",
        "A licensed inspector matches termite treatment in Lawrenceville, GA to the house in front of them — a non-repellent liquid termiticide trenched into the soil to form a continuous treated zone, in-ground bait stations that foragers carry back to collapse the colony, or both together for the city's range of slab and crawlspace homes. If you're closing on a property, Georgia deals almost always call for the Official Georgia Wood Infestation Inspection Report — the 'termite letter' — which only a Georgia-licensed operator can issue, typically within 30 days of closing. The pros in our directory inspect, treat, and write that report.",
      ],
    },
    {
      heading: '<span id="mosquito"></span>What Makes Mosquitoes So Persistent in Lawrenceville, GA?',
      paras: [
        "Standing water and shade, and Lawrenceville has no shortage of either. Metro Atlanta lands among the nation's worst metros for mosquitoes — top five on Orkin's 2025 list — and it takes only a capful of water to start a new batch. The mature trees and settled landscaping around the older neighborhoods give adult mosquitoes cool places to rest by day, while clogged gutters, plant saucers, tarps, and low spots that stay wet between Georgia downpours quietly breed the next generation, new neighborhoods and old alike.",
        "Professional mosquito control in Lawrenceville, GA works every stage rather than just covering up bites: a residual barrier on the shrubs and tree lines where adults shelter, refreshed about every three to four weeks through the warm months; larviciding of standing water that can't be drained; and source reduction to clear the hidden breeding spots feeding the population. There's a health reason too — the Georgia Department of Public Health monitors West Nile virus every year, the aggressive Asian tiger mosquito bites in broad daylight, and mosquitoes pass heartworm to dogs.",
      ],
    },
    {
      heading: "<span id=\"cockroach\"></span>Why Won't Roaches Leave Lawrenceville Homes Alone?",
      paras: [
        "Usually because two completely different roaches are at work, and each needs its own approach. German cockroaches are small, breed indoors at speed, and settle into kitchens, bathrooms, and apartments — spotting one generally means a colony is already established, not a lone visitor. The big roaches locals call 'palmetto bugs' — smokybrown and American cockroaches — are a different story: they live outdoors in mulch, leaf litter, gutters, and crawlspaces and simply stray inside, which is why a spotless Lawrenceville home can still turn up a large roach now and then.",
        "A licensed pro identifies the species first, then builds the treatment around it — gel baiting and insect growth regulators aimed at indoor German roaches, plus a perimeter barrier and harborage cleanup for the outdoor 'palmetto bugs,' usually backed by a re-treat guarantee. It's a health matter as much as a comfort one, since German cockroach droppings and shed skins are a recognized asthma and allergy trigger, particularly in children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>When Should You Call a Bed Bug Exterminator in Lawrenceville, GA?',
      paras: [
        "The moment you spot the signs — bed bugs only get harder and costlier to clear the longer they breed. They travel in on luggage, secondhand furniture, and moving boxes rather than arriving because of anything you did, and in apartments and duplexes they slip between units through shared walls and voids. Watch for itchy bites in lines or clusters, rust- or blood-colored smears and dark pepper-like specks along mattress seams, pale shed skins, and live apple-seed-sized bugs tucked near where you sleep. A single female can lay hundreds of eggs, so a handful becomes an infestation quickly.",
        "A bed bug exterminator in Lawrenceville, GA clears every life stage with whole-room heat — raising a room to a lethal temperature that kills adults, nymphs, and eggs in a single day, even those buried in walls and furniture — or with a targeted residual program and follow-up checks, often alongside steam and mattress encasements. Store-bought foggers tend to scatter bed bugs into new rooms and set treatment back, so calling a pro early keeps the job smaller and faster.",
      ],
    },
    {
      heading: '<span id="rodent"></span>How Do Rats and Mice Get Into Lawrenceville Homes?',
      paras: [
        "Through the roofline, the foundation, and gaps you'd never think twice about. Roof rats are nimble climbers that come in high and nest in attics and soffits; Norway rats are bulkier ground-dwellers that burrow in low near the foundation and crawlspace; and house mice need only a dime-sized hole and breed fast once inside. Older Lawrenceville homes tend to have more accumulated entry points along eaves, vents, and utility lines, but newer builds aren't immune either. Rodent calls climb in fall, when the first cool nights drive them indoors, and Gwinnett's mild winters keep them active once they've settled in. Listen for scratching overhead at night, and look for droppings, gnaw marks, and greasy rub trails.",
        "Real rodent control in Lawrenceville, GA goes past scattering bait — it's trapping to bring the population down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't get back in, finished with monitoring and cleanup. That seal-out is what turns a temporary lull into a lasting fix, and it matters because rodents chew wiring — a known fire risk — and foul food and surfaces as they travel.",
      ],
    },
    {
      heading: '<span id="general"></span>Fire Ants, Wasps & the Everyday Pests Around Lawrenceville',
      paras: [
        "Any lawn in Lawrenceville is fair game for fire ants — red imported fire ants are established in all 159 Georgia counties, raising dome-shaped mounds across yards and common areas and delivering stings that are a real danger to anyone allergic, along with pets and small children. A hardware-store mound killer rarely finishes the job; the dependable route pairs a broadcast bait that workers carry underground to the queen with direct mound treatment and a perimeter barrier, all kept up on a recurring plan.",
        "A general pest control plan handles everything else Lawrenceville homeowners meet through the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build all summer and get touchy by fall, so pros knock down reachable nests and treat eaves, soffits, and entry points to discourage rebuilding. The same recurring quarterly visit covers nuisance ants, spiders — including black and brown widows in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that drift indoors as the weather turns: one plan, timed to each pest, instead of a string of one-off calls.",
      ],
    },
    {
      heading: 'The Pest Calendar in Lawrenceville, GA',
      paras: [
        "Pest pressure moves through the seasons in Lawrenceville. Here's the rhythm local homeowners can expect:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers or shed wings near windows are the classic first sign of an active colony. Ants wake up, carpenter bees drill into deck and trim wood, and the season's first rains start mosquitoes breeding. The best stretch to get protection in place before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "The busy season. Mosquitoes hit their stride across metro Atlanta, fire ant mounds spread through Lawrenceville lawns, wasp and yellowjacket nests swell under eaves, and roaches and 'palmetto bugs' slip indoors away from the heat. Fleas and ticks peak." },
        { name: 'Fall (Sep–Nov)', text: "Roof rats, Norway rats, and house mice start hunting for a warm place to overwinter — this is when scratching shows up in Lawrenceville attics and walls. Yellowjackets grow aggressive as their colonies wind down. A smart time to seal entry points ahead of the cold." },
        { name: 'Winter (Dec–Feb)', text: "Mild Gwinnett winters keep things moving. German roaches and mice stay busy indoors, and subterranean termites feed underground without a pause. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Gwinnett County Areas We Cover Near Lawrenceville',
      paras: [
        "The local pros in our directory serve Lawrenceville across all its ZIP codes and the Gwinnett County communities nearby. If you're in one of these areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Lawrenceville',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Lawrenceville and the wider Gwinnett County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, pinpoints the pest and how far it has spread, and recommends the right treatment for your Lawrenceville home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products at label rates, including family- and pet-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Lawrenceville homeowners with licensed, insured local exterminators across Gwinnett County — not a single company. Call and you'll reach the pest control pro assigned to the Lawrenceville area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Lawrenceville, GA?', a: "There's no single rate — it depends on the pest, how bad the problem is, and the size of your home and lot. A recurring general pest plan is the most affordable route, while specialty jobs like termite or bed bug work run higher because of the equipment and follow-up they take. Every pro in our directory gives you a free, property-specific quote before any work begins, so your exact price is clear up front." },
    { q: 'Do you treat both older homes near downtown and newer Lawrenceville subdivisions?', a: "Yes — the licensed pros in our directory work on the full range of Lawrenceville housing, from the decades-old homes around the historic square to the newest subdivisions on the city's edges. Older homes often need attention to accumulated entry points and moisture, while new construction is most exposed to subterranean termites in the freshly disturbed soil; your pro tailors the treatment to whichever you've got." },
    { q: 'What pests are most common in Lawrenceville and Gwinnett County?', a: "The usual suspects are subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in shaded yards and standing water, German roaches and outdoor 'palmetto bugs' that love the humidity, and roof rats and mice that head for attics as nights cool. The local pros in our directory treat every one of them." },
    { q: 'Do you serve the areas around Lawrenceville too?', a: "Yes. Beyond Lawrenceville's 30043, 30044, 30045, and 30046 ZIP codes, the pros in our directory cover the surrounding Gwinnett County communities, including Snellville, Grayson, Dacula, Lilburn, and Sugar Hill. Call and we'll connect you with a licensed exterminator for your part of the county." },
    { q: 'Are Lawrenceville, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Lawrenceville?', a: "Often, yes — many of the local pros serving Lawrenceville offer same-day and emergency visits for urgent trouble like a wasp nest, a sudden roach problem, or rodents in the house. Call and we'll route you to a Gwinnett County exterminator who can get out fast." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Lawrenceville pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices instead of across living areas. Your technician will mention any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Lawrenceville, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Georgia is one of the country's heaviest termite zones, with eastern subterranean termites the dominant wood-destroyer. Older Lawrenceville homes and new-build lots are both targets. Liquid soil barriers, bait stations, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Travel- and apartment-driven bed bugs spread fast through Lawrenceville homes, rentals, and condos. Whole-room heat or a targeted residual program kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches indoors and big 'palmetto bugs' wandering in from the mulch and crawlspaces — identified, cleared out, and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Lawrenceville's shaded older yards and new-build drainage both hold breeding water. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "As nights cool, roof rats, Norway rats, and house mice push into Lawrenceville attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Red imported fire ants blanket Gwinnett County, alongside spiders, wasps, and nuisance ants. One recurring quarterly plan keeps them all in check, year-round." },
  ],

  // No `pestPages` — Lawrenceville is a hub-only build for now (see header note).
  // Add per-pest spoke pages later by introducing a `pestPages` object keyed by
  // service slug; the routing, sitemap, and city-service view already support it.
};
