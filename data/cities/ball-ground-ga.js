'use strict';

// ── Ball Ground, GA — city hub ───────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city pages
// (Canton, Woodstock, Holly Springs) — same county means shared FACTS, but the
// wording, structure, H2s, FAQ phrasing, and local hooks here are written fresh
// and lead with Ball Ground's OWN anchor: the small, rural, historic town at the
// far northern edge of Cherokee County, more wooded/small-town in character than
// its larger, more-developed siblings. Targets local intent ("pest control ball
// ground", "ball ground exterminator", "ball ground ga pest control"). Rendered
// by views/city.ejs at /georgia/ball-ground/.
//
// HUB ONLY — no per-pest spoke pages are built, so there is no `pestPages` map;
// every hub pest card therefore renders as a non-clickable <div> (city.ejs gates
// the link on city.pestPages[slug] existing). Add a pestPages entry later to
// auto-upgrade a card to a link without any template change.
//
// `county` drives the LeadPortal contractor lookup — Ball Ground is in Cherokee
// County, so the assigned Cherokee County 'Pest Control' contractor (McCardle's
// Pest Management) renders on the page (name + phone + PestControlService schema,
// license + real address from the contractor record only). The lib/contractor
// helper strips "Cherokee County" → "Cherokee" to match the assignment. If the
// assignment is ever cleared the page falls back to the shared (844) line and an
// Organization provider — nothing here hardcodes a contractor.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics — no invented streets,
// subdivisions, landmarks, stats, or ordinances): small city in northern Cherokee
// County, metro Atlanta's far northern growth edge; rural/wooded surroundings —
// woods, pasture, large lots, outbuildings — transitioning to newer residential
// subdivisions as the metro pushes north; a compact historic small-town core;
// more rural/small-town in character than Canton, Woodstock, or Holly Springs;
// ZIP 30107; area codes 770/678/470; nearby northern-county communities Canton
// (S), Waleska (W), Nelson (N); humid subtropical climate; Cherokee County is a
// high termite-pressure zone (eastern subterranean termites dominant); red
// imported fire ants present; metro Atlanta ranks among the worst U.S. mosquito
// metros (Orkin 2025) as REGIONAL context only — Ball Ground sits well outside
// the urban core; GA Dept. of Agriculture Structural Pest Control Commission
// regulates/licenses.

module.exports = {
  name: 'Ball Ground',
  slug: 'ball-ground',
  county: 'Cherokee County',
  region: 'GA',
  zips: ['30107'],
  // Nearby northern-Cherokee communities we also serve — service-area names only,
  // NOT Ball Ground subdivisions. Canton has its own hub so it links; the rest
  // render as plain badges.
  neighborhoods: ['Canton', 'Waleska', 'Nelson'],

  // Shared branded OG card (root-relative); set a Ball Ground–specific path here
  // later to give the page its own 1200×630 card.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Ball Ground, GA | The Local Pest Pro',
  metaDesc: "Pest control in Ball Ground, GA — the rural northern edge of Cherokee County. Local pros for termites, mosquitoes, roaches, rodents & fire ants. Free quote.",
  h1: 'Pest Control in Ball Ground, GA',
  heroSub: "Ball Ground is one of Cherokee County's smallest, most rural towns — a compact historic core ringed by woods, pasture, large lots, and a growing number of new subdivisions at the far northern edge of metro Atlanta's growth. That mix of older homes, outbuildings, and fresh construction keeps termites, mosquitoes, rodents, and roaches active close to year-round. Get a licensed local exterminator who knows Ball Ground, fast.",

  overviewHeading: "Pest Control for Ball Ground's Rural, Wooded Setting",
  overview: [
    "Ball Ground sits at the northern tip of Cherokee County, where metro Atlanta's suburban sprawl thins out into woods, pasture, and rolling rural land. It's one of the county's smallest towns, built around a compact historic core and surrounded by large wooded lots, working land, and a growing number of newer subdivisions carved from former farm and forest. Each of those settings hands pests a different opening — wooded acreage, sheds, and woodpiles keep homes in constant contact with the soil and leaf litter pests shelter in, while freshly graded new-construction lots disturb exactly the ground subterranean termites move into.",
    "What ties it together is the climate. Ball Ground shares the same humid subtropical weather as the rest of north Georgia — warm, sticky summers, mild winters, and steady rainfall — so most pests here never get a true off-season. A property backing to woods or pasture sees steady pressure from termites, rodents, and mosquitoes, while the area's clay soil and humidity keep ants and roaches moving most of the year. That's why a recurring, locally-tuned plan tends to beat one-off treatments. Wherever you are around Ball Ground, the licensed, insured pros in our directory quote your specific property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Ball Ground Homes Need Pest Control Year-Round?',
      paras: [
        "Cherokee County sits inside one of the heaviest termite-pressure regions in the country, and Ball Ground's rural lots stack the everyday conditions in the termites' favor. Eastern subterranean termites — the dominant wood-destroying species across north Georgia — forage through the soil all year, and the woodpiles, fence posts, deck footings, sheds, and wood-to-ground contact common on wooded and acreage properties give them ready bridges into a home. Mild winters mean those colonies keep feeding underground in every season instead of going dormant, and since termite damage typically isn't covered by homeowners insurance, steady protection costs far less than the repairs.",
        "Termites are only part of the story. Red imported fire ants push their mounds up across Ball Ground lawns, pasture, and open ground; mosquitoes breed in the creeks, farm ponds, ditches, and shaded low spots that come with rural property — and while the town sits well north of the urban core, it's still part of a metro Atlanta region that ranks among the worst in the country for mosquitoes (top five on Orkin's 2025 list). Add the German roaches, outdoor 'palmetto bugs,' and rodents that flourish in north Georgia's humidity and move toward a warm house, and on lots with outbuildings and woodland edges close to the home a steady professional barrier makes far more sense than reacting to one infestation at a time.",
      ],
    },
    {
      heading: 'What Pests Are Most Active in Ball Ground, and When?',
      paras: [
        "Pest pressure rises and falls through the year in Ball Ground. Here's what local homeowners typically run into, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid days set off termite swarms — a burst of winged swarmers, or shed translucent wings on a windowsill, is the clearest early sign of an active colony. Ants come back to life, carpenter bees bore into decks, eaves, and shed and barn wood, and the first warm rains begin filling the ponds, ditches, and low spots where mosquitoes breed. The prime window to get ahead of the pressure before summer sets in." },
        { name: 'Summer (Jun–Aug)', text: "The peak stretch. Mosquitoes hit their stride along Ball Ground's creeks, ponds, and shaded yards, fire ant mounds spread across lawns and pasture, wasps and yellowjackets build under eaves and on outbuildings, and roaches push indoors to escape the heat. Fleas and ticks run high on pets, wildlife, and in tall grass and woodland edges." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice start hunting for a warm place to overwinter — and a rural home near woods, barns, or woodpiles is an easy target. This is the season homeowners first hear scratching in the attic or walls. Breaking-up yellowjacket colonies turn aggressive. A smart time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Ball Ground's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding below ground all year. Recurring service holds the protective barrier through the cold months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Northern Cherokee County Areas We Serve',
      paras: [
        "The local pros in our directory cover Ball Ground and the surrounding communities at the northern end of Cherokee County. If your place sits near one of these communities, we can line you up with a licensed exterminator as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Does Getting Started Work?',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator who serves Ball Ground and the surrounding northern Cherokee County area — no obligation, no pressure." },
        { name: '2. Get an on-site inspection', text: "Your pro walks the property — house, yard, and any outbuildings — confirms the pest and how far it has spread, and recommends the right treatment for your Ball Ground home and lot, one-time or recurring." },
        { name: '3. Pests handled for good', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products applied at label rates, including family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'How Does The Local Pest Pro Directory Work in Ball Ground?',
      paras: [
        "The Local Pest Pro is a directory, not a single company — our job is to connect Ball Ground homeowners with licensed, insured local exterminators across Cherokee County. When you call, you'll reach the pest control pro assigned to the Ball Ground area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and treats with EPA-registered products at label rates, including family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Ball Ground?', a: "There's no flat rate — your price depends on the pest, how established the problem is, and the size of your home and lot, since acreage and outbuildings can factor in. A recurring general plan is the most economical option, while specialty jobs like termite or bed bug work cost more for the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote up front, so there are no surprises." },
    { q: 'What pests are most common in Ball Ground?', a: "Subterranean termites lead the list, since Cherokee County is a high-pressure termite area and rural lots offer plenty of wood-to-soil contact. Right behind them are red imported fire ants in lawns and pasture, mosquitoes bred in creeks, ponds, and shaded low spots, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that move toward warm homes as nights cool. Each one is routine work for the local pros in our directory." },
    { q: 'Do homes on wooded or acreage lots need different pest control?', a: "Often, yes. Properties backing to woods or pasture — and those with sheds, barns, or woodpiles — give pests more harborage and more bridges to the house, from termites in wood-to-ground contact to rodents nesting in outbuildings and ticks in tall grass. A local pro factors your lot, its structures, and the woodland edge into the plan rather than treating the house alone." },
    { q: 'Which areas around Ball Ground do you serve?', a: "Beyond Ball Ground itself (ZIP 30107), the pros in our directory serve the surrounding northern Cherokee County communities — including Canton to the south, Waleska to the west, and Nelson to the north. Get in touch and we'll pair you with a licensed exterminator who works your area." },
    { q: 'Can I get same-day or emergency pest control in Ball Ground?', a: "Often, yes. Many of the local pros serving Ball Ground offer same-day and emergency visits for urgent problems — a wasp nest by the door, a sudden roach sighting, or rodents in the house. Call and we'll line you up with a Cherokee County exterminator who can get out to you quickly." },
    { q: 'Are Ball Ground pest control companies licensed?', a: "They should be. Georgia regulates structural pest control through the Department of Agriculture's Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your home. Everyone we connect you with for Ball Ground is a licensed, insured Georgia exterminator." },
  ],

  finalCtaHeading: 'Get Your Free Ball Ground Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six. No `pestPages` map exists for Ball Ground, so every card
  // renders as a non-clickable <div> (no spokes built). Blurbs written fresh for
  // Ball Ground — no reuse from Canton, Woodstock, or Holly Springs. Fire ants,
  // wasps, spiders, etc. live under General Pest Control (no seventh card).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/ball-ground/termite-control/',
      blurb: "Cherokee County is one of the country's heaviest termite zones, and rural lots add wood-to-ground contact from decks, woodpiles, and outbuildings. Eastern subterranean termites do the damage, so control runs on a trenched liquid barrier or monitored bait stations, with the Georgia termite letter handled when you buy or sell." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/ball-ground/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture, then spread fast once inside. Whole-room heat or a planned residual treatment knocks out adults, nymphs, and eggs in turn, and a return visit confirms they're gone." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/ball-ground/cockroach-control/',
      blurb: "German roaches breeding indoors and big 'palmetto bugs' wandering in from mulch, woodpiles, and crawlspaces in the humidity — gel baiting, crack-and-crevice work, and sanitation that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/ball-ground/mosquito-control/',
      blurb: "Atlanta's metro area is one of the most mosquito-ridden in the country — top five on Orkin's 2025 list — and Ball Ground's creeks, farm ponds, and shaded rural yards breed them well north of the city core. Barrier treatments on the resting vegetation and larvicide in the breeding water carry through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/ball-ground/rodent-control/',
      blurb: "As nights cool, roof rats, Norway rats, and house mice move from woods, barns, and woodpiles toward warm homes. Trapping clears what's inside, exclusion shuts the gaps for good, and monitoring keeps new ones from moving in." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/ball-ground/pest-control/',
      blurb: "Fire ants in the lawn and pasture, spiders in the garage, wasps on the eaves and outbuildings — one recurring quarterly plan covers the everyday pests a rural Ball Ground property faces, year-round." },
  ],
};
