'use strict';

// ── Suwanee, GA — city HUB (no per-pest spoke pages yet) ─────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Gwinnett County city hubs
// (Duluth, Lawrenceville, Snellville, Norcross). Duluth owns fast suburban
// growth + multifamily + commercial corridors; Lawrenceville owns the
// county-seat / historic-square / old-plus-new-build duality; Snellville owns
// the settled, established-residential / mature-subdivisions angle; Norcross
// owns the historic downtown + Buford Highway international-commercial angle.
// Suwanee leads with ITS OWN distinctive: an affluent NORTHEAST-Gwinnett suburb
// shaped by deliberate MASTER-PLANNED residential development and the walkable,
// mixed-use SUWANEE TOWN CENTER — newer housing stock, professionally
// landscaped/HOA communities, and family-oriented planned growth (framed
// specifically around the planned-community / Town-Center identity, NOT the
// generic "fast growth" Duluth owns). Targets local intent ("pest control
// suwanee", "suwanee exterminator", "suwanee ga pest control"). Rendered by
// views/city.ejs at /georgia/suwanee/.
//
// HUB-ONLY FOR NOW: there is intentionally no `pestPages` object, so no
// /georgia/suwanee/<pest>/ spoke pages are built yet. The GA-relevant pest
// categories (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections, and the hub pest cards jump to those sections
// via in-page anchors (#termite, #mosquito, …) rather than to not-yet-built
// spoke URLs — so nothing 404s.
//
// `county` drives the LeadPortal contractor lookup — Suwanee is in GWINNETT
// County, so an assigned Gwinnett County 'Pest Control' contractor renders on
// this page (name + phone + LocalBusiness/PestControlService schema, dynamically
// pulled server-side by views/city.ejs); until one is assigned the page falls
// back to the shared (844) directory line and a plain Service schema node. The
// contractor lookup tries both "Gwinnett County" and "Gwinnett" automatically.
// Address/license render only from the real contractor record — never synthesized.
// Trust signals here stay contractor-agnostic so they survive a reassignment.
//
// APPROVED LOCAL FACTS ONLY (no street names, no named subdivisions, no specific
// ponds/parks, no ordinances, no invented stats): an affluent city in
// northeastern Gwinnett County; grew largely through deliberate master-planned
// residential development rather than around an old town core; anchored by the
// walkable, mixed-use Suwanee Town Center (shops, restaurants, residences, a
// central green); mostly newer housing stock on graded/recently-built land, with
// professionally landscaped and HOA communities and a family-oriented character;
// ZIP 30024; area codes 770/678/470; humid subtropical climate; EASTERN
// SUBTERRANEAN termites are the dominant wood-destroyer here (the more
// destructive Formosan termite stays rare in Georgia — stated as a statewide
// aside only, NOT a local presence claim); red imported fire ants present in all
// 159 GA counties; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated/licensed by the Georgia Dept. of
// Agriculture's Structural Pest Control Commission. Nearby Gwinnett communities
// served: Sugar Hill, Buford, Duluth, Berkeley Lake, Lawrenceville.

module.exports = {
  name: 'Suwanee',
  slug: 'suwanee',
  county: 'Gwinnett County',
  region: 'GA',
  zips: ['30024'],
  // Nearby Gwinnett-area communities we also serve — NOT Suwanee subdivisions.
  // Service-area names only; all sit in the same Gwinnett County coverage area,
  // so the assigned county contractor covers them too. None has a built city hub
  // yet, so each renders as a plain (non-clickable) badge.
  neighborhoods: ['Sugar Hill', 'Buford', 'Duluth', 'Berkeley Lake', 'Lawrenceville'],

  // Shared branded 1200×630 OG card (no Suwanee-specific asset exists yet); this
  // explicit value mirrors the sibling hubs. Drop a per-page path here later to
  // give Suwanee its own card.
  ogImage: '/images/og-default.jpg',

  // ~56 chars; leads with the exact-match phrase and keeps "GA".
  metaTitle: 'Pest Control Suwanee GA | Trusted Exterminators Near You',
  // ~151 chars; CTA + exact + long-tail terms, paired with GA + Suwanee's own angle.
  metaDesc: "Licensed pest control in Suwanee, GA — termite, mosquito, rodent & bed bug treatment for its master-planned northeast Gwinnett neighborhoods. Call now.",
  h1: 'Pest Control in Suwanee, GA',
  heroSub: "Suwanee is one of northeast Gwinnett County's most sought-after suburbs — a city built largely around master-planned residential communities and the walkable Suwanee Town Center, where newer homes, professionally landscaped neighborhoods, and a mixed-use district sit close together. All that fresh construction and irrigated greenery, paired with Georgia's humid climate, still gives termites, mosquitoes, roaches, and rodents plenty of openings nearly year-round. Connect with a licensed local Suwanee, GA exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Suwanee, GA & Gwinnett County',
  overview: [
    "Suwanee grew up differently from much of Gwinnett County. Rather than an old town center filling in over a century, much of the city took shape through deliberate, master-planned development — subdivisions designed all at once, professionally landscaped common areas, and the mixed-use Suwanee Town Center with its shops, restaurants, residences, and central green. The result is a city of mostly newer homes on land that was graded and built fairly recently, wrapped in irrigated lawns and planted beds. For pest control, that newer-and-planned character shapes the risks: freshly disturbed soil and newer framing are a magnet for subterranean termites, irrigation and landscaped plantings hold the moisture mosquitoes need, and tidy, manicured turf is exactly where fire ants set up.",
    "What doesn't change is the Gwinnett County climate. Suwanee gets the same lengthy, humid summers and short, mild winters as the rest of metro Atlanta, so the local pest population rarely powers down for a true off-season — which is why a recurring, locally-tuned Suwanee Georgia pest control plan tends to beat a one-time treatment. Throughout 30024 and the neighborhoods around the Town Center, the licensed, insured pros in our directory inspect your specific Suwanee property and quote it for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Which Pests Put Suwanee, GA Homes at Risk?',
      paras: [
        "Georgia is one of the most termite-prone states in the country, and Gwinnett County sits firmly inside that zone. Eastern subterranean termites are the dominant wood-destroying insect across the area, foraging through the soil and into any structure where wood meets the ground — and the graded lots under Suwanee's newer subdivisions give them freshly disturbed soil to colonize. Mild local winters mean the colonies never go dormant, feeding underground twelve months a year, and because homeowners insurance almost never covers termite damage, ongoing protection costs far less than the repairs.",
        "Termites are only the start of the list. Red imported fire ants live in all 159 Georgia counties, raising mounds across Suwanee's manicured lawns and common areas. Mosquitoes are a metro-wide problem — Orkin's 2025 list put metro Atlanta among the five worst U.S. metros for them — and the irrigation, landscaped beds, and amenity ponds woven through master-planned neighborhoods give them steady water to breed in. Add the German roaches that move in wherever there's food, the smokybrown 'palmetto bugs' that wander out of fresh mulch, and the roof rats and mice that test a new home's roofline and garage, and a steady professional barrier makes more sense than chasing each pest as it appears.",
      ],
    },
    {
      heading: '<span id="termite"></span>Do Newer Suwanee Homes Still Get Termites?',
      paras: [
        "Absolutely — and in some ways new construction is the bigger draw. Eastern subterranean termites travel up from the soil through mud tubes, slipping into a home through slab cracks, expansion joints, plumbing penetrations, and any wood near grade. Suwanee's master-planned subdivisions sit on graded, disturbed soil with fresh framing overhead, which is exactly the environment a foraging colony moves toward — and builder pretreatments don't last forever, so even a fairly young home can lose its protective barrier over time. Mild Gwinnett winters keep the colonies active all year, and the first hint of trouble is usually a spring swarm: winged termites at a window, or a small pile of shed translucent wings on a sill. (Eastern subterranean termites are the species that matters here; the far more destructive Formosan termite stays rare in Georgia.)",
        "A Georgia-licensed inspector matches termite treatment in Suwanee, GA to the home — a non-repellent liquid termiticide trenched into the soil to create one continuous treated zone, in-ground bait stations that workers carry back to collapse the colony, or both together for the area's mix of slab and crawlspace construction. Buying or selling? Georgia closings nearly always require the official Wood Infestation Inspection Report — the 'termite letter' — and only a Georgia-licensed operator can issue one, typically within 30 days of closing. Our directory's licensed pros handle the inspection, the treatment, and that report.",
      ],
    },
    {
      heading: "<span id=\"mosquito\"></span>Why Do Suwanee's Landscaped Yards Attract Mosquitoes?",
      paras: [
        "Because they're built around exactly what mosquitoes need: water and shade. On Orkin's 2025 list, metro Atlanta again counted among the five worst U.S. metros for mosquitoes, and it takes only a small amount of standing water to start a brood. In Suwanee's landscaped communities, that water collects in irrigation overspray, plant saucers, drainage swales, and the amenity and retention ponds common to planned neighborhoods, while the planted beds and young trees give adults shaded spots to rest between feedings. A yard that looks immaculate can still be quietly producing mosquitoes all season.",
        "Professional mosquito control in Suwanee, GA works every stage rather than just masking the bites: a residual barrier treatment on the shrubs, fence lines, and tree edges where adults shelter, refreshed every three to four weeks through the warm months; larviciding of standing water that can't be drained; and source reduction to remove the hidden breeding sites driving the population. It matters for health, not just comfort — the Georgia Department of Public Health monitors West Nile virus each year, the daytime-biting Asian tiger mosquito is widespread, and mosquitoes spread heartworm to dogs.",
      ],
    },
    {
      heading: '<span id="cockroach"></span>Why Do Roaches Appear Even in Newer Suwanee Homes?',
      paras: [
        "Because roaches don't care how new a house is — they follow food, warmth, and moisture. German cockroaches are small and breed indoors at speed, settling into kitchens, pantries, and bathrooms, and they often arrive hidden in grocery bags, deliveries, or used appliances, so a single sighting usually points to an established colony rather than a stray. The large roaches Georgians call 'palmetto bugs' — smokybrown and American cockroaches — live outdoors in mulch, pine straw, and storm drains, the kind of landscaping that surrounds Suwanee homes, and they wander inside through gaps, which is why even a spotless new home can produce the occasional big roach.",
        "A licensed pro identifies the species before treating — gel baiting and insect growth regulators for indoor German roaches, plus a perimeter barrier and harborage cleanup outdoors for the 'palmetto bugs,' usually with a re-treat guarantee. It's a health issue as well as an unsettling one, since German cockroach droppings and shed skins are a documented asthma and allergy trigger, particularly in children.",
      ],
    },
    {
      heading: '<span id="bed-bug"></span>How Do Bed Bugs End Up in Suwanee Homes?',
      paras: [
        "They arrive as hitchhikers. Bed bugs ride home on luggage after travel, on secondhand furniture, and in moving boxes — never a reflection of how clean a home is — and a family-oriented, travel-heavy suburb like Suwanee sees plenty of that movement. Once inside they spread quickly, since a single female can lay hundreds of eggs over her life. Watch for itchy bites in lines or clusters, rust- or blood-colored smears and dark, pepper-like specks along mattress seams, pale shed skins, and live, apple-seed-sized bugs hiding near where you sleep.",
        "A bed bug exterminator in Suwanee, GA clears every life stage with whole-room heat — bringing a room to a lethal temperature that kills adults, nymphs, and eggs in a single day, even those tucked inside walls and furniture — or with a targeted residual program and follow-up checks, often alongside steam and mattress encasements. Over-the-counter foggers tend to scatter bed bugs into other rooms and stretch the job out, so calling a pro at the first sign keeps it contained and quicker to resolve.",
      ],
    },
    {
      heading: '<span id="rodent"></span>Can Newer Suwanee Homes Keep Rats and Mice Out?',
      paras: [
        "Not automatically — even a well-built home leaves a rodent its openings. Roof rats are nimble climbers that enter high along the roofline and nest in attics and soffits; Norway rats burrow in low near the foundation; and house mice need only a dime-sized gap and breed fast once inside. Newer Suwanee homes often back up to the preserved greenspace and wooded buffers planned communities keep, which puts roof rats right at the eaves, and construction gaps around garage doors, vents, and utility lines give them a way in. Rodent activity climbs in fall as the first cool nights drive them indoors, and Gwinnett's mild winters keep them going once they've settled. At night you may hear them moving overhead; by day the giveaways are droppings, gnaw marks, and greasy rub trails.",
        "Effective rodent control in Suwanee, GA is more than putting out bait — it's trapping to bring the population down cleanly, then exclusion: sealing roofline gaps, vents, and utility penetrations with rodent-proof materials so rats and mice physically can't get back in, finished with monitoring and cleanup. That seal-out is what makes the fix last, and it matters because rodents gnaw wiring — a known fire risk — and contaminate food and surfaces as they move.",
      ],
    },
    {
      heading: "<span id=\"general\"></span>Fire Ants, Wasps & the Common Pests of Suwanee Lawns and Homes",
      paras: [
        "A manicured Suwanee lawn is prime fire ant territory — red imported fire ants are established in all 159 Georgia counties, pushing dome-shaped mounds up through turf and common areas and delivering stings that are a real danger to anyone allergic, as well as to pets and children. A store-bought mound killer rarely finishes the colony; the dependable method pairs a broadcast bait that workers carry underground to the queen with direct mound treatment and a perimeter barrier, all kept up on a recurring plan.",
        "A general pest control plan handles everything else a Suwanee household meets across the year. Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build through the summer and turn aggressive by fall, so pros knock down reachable nests and treat eaves, soffits, and entry points to discourage rebuilding. The same recurring quarterly visit also covers nuisance ants, spiders — including black and brown widows in garages and woodpiles — fleas and ticks, silverfish, and the seasonal invaders that drift indoors as the weather turns: one plan, timed to each pest's season, instead of a series of one-off calls.",
      ],
    },
    {
      heading: "Suwanee's Seasonal Pest Rhythm",
      paras: [
        "Pest pressure shifts through the year in Suwanee. Here's the general pattern local homeowners can plan around:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites take to the air on the first warm, humid afternoons — winged swarmers, or shed wings gathered at a window, signal an active colony below. Ants get active again, carpenter bees bore into exposed deck and trim wood, and the first warm rains kick off mosquito breeding. The smartest window to get coverage set before peak season hits." },
        { name: 'Summer (Jun–Aug)', text: "Peak pressure. Mosquitoes surge across metro Atlanta, fire ant mounds spread through Suwanee lawns, wasp and yellowjacket nests grow under eaves, and roaches and 'palmetto bugs' work their way indoors out of the heat. Fleas and ticks reach peak activity." },
        { name: 'Fall (Sep–Nov)', text: "As the first cool nights arrive, roof rats, Norway rats, and house mice start working their way indoors for winter — that's when scratching shows up in Suwanee attics and walls. Yellowjackets get aggressive as their colonies break down. A good time to close up entry points ahead of winter." },
        { name: 'Winter (Dec–Feb)', text: "Suwanee's mild winters keep pests active. German roaches and mice carry on indoors, and subterranean termites feed underground without stopping. Recurring service maintains the protective barrier through the cool months so spring doesn't start with a spike." },
      ],
    },
    {
      heading: 'Nearby Suwanee Communities We Cover in Gwinnett County',
      paras: [
        "The pros in our directory cover Suwanee throughout 30024 and the surrounding Gwinnett County communities. If one of these is home, we can set you up with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Suwanee',
      cards: [
        { name: '1. Call for a free quote', text: "A single call reaches a licensed, insured exterminator serving Suwanee and the rest of Gwinnett County — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro inspects the home and yard, pinpoints the pest and how far it has spread, and recommends the right plan for your Suwanee property — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs handle the treatment, seal out the entry points, and put prevention in place with EPA-registered products at label rates and family- and pet-safe options — most with a guarantee behind the work." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory, not a single company — we connect Suwanee homeowners with licensed, insured local exterminators across Gwinnett County. Call and you'll reach the pest control pro assigned to the Suwanee area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Suwanee, GA?', a: "There's no single price — it comes down to the pest, how far it has spread, and the size of your home and lot. A recurring general pest plan is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more for the equipment and follow-up involved. You'll get a free, property-specific quote from any pro in our directory up front, so the exact cost is clear before work starts." },
    { q: 'Do newer, master-planned Suwanee homes really need pest control?', a: "Yes. Newer construction has its own exposures: graded, disturbed soil and fresh framing draw subterranean termites, builder pretreatments fade over a few years, and irrigation and landscaped beds hold the moisture mosquitoes and roaches need. The licensed pros in our directory tailor a plan to a newer home — protecting the slab and perimeter, sealing construction gaps, and timing service to the pests most active in planned communities." },
    { q: 'What pests are most common in Suwanee and Gwinnett County?', a: "The main ones are eastern subterranean termites (Georgia is a heavy termite state), red imported fire ants in the lawn, mosquitoes bred in irrigation and standing water, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that move indoors as nights cool. Our local pros handle them all." },
    { q: 'Do you serve the areas around Suwanee too?', a: "Yes. Beyond Suwanee's 30024 ZIP code, the pros in our directory cover the surrounding Gwinnett County communities, including Sugar Hill, Buford, Duluth, Berkeley Lake, and Lawrenceville. Get in touch and we'll point you to a licensed exterminator for your part of the county." },
    { q: 'Are Suwanee, GA pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Suwanee?', a: "Often, yes — many of the local pros serving Suwanee offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll get a Gwinnett County pro who can move quickly out to you." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Suwanee pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will point out any short re-entry window — generally just until everything has dried." },
  ],

  finalCtaHeading: 'Get Your Free Suwanee, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: each card jumps to its on-page section anchor (not a spoke URL), so
  // nothing 404s while per-pest pages are deferred. The canonical six cards mirror
  // the sibling hubs; fire ants and wasps/hornets are covered under General Pest
  // Control (the #general section).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Eastern subterranean termites feed all year in Gwinnett's mild winters, and the graded soil and fresh framing under Suwanee's newer subdivisions are exactly what a foraging colony moves toward. Soil-applied liquid termiticide, in-ground bait stations, and the Georgia termite letter when you buy or sell." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Bed bugs hitch home from travel on luggage and used furniture, then breed fast inside Suwanee homes. Whole-room heat kills every life stage in a day, or a targeted residual program with follow-up checks clears them out." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches move in wherever there's food and moisture, even in newer homes, while 'palmetto bugs' wander up from mulch and pine straw outside. The fix depends on which roach it is, and comes with a re-treat guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "Orkin ranks metro Atlanta a top-five U.S. mosquito metro, and irrigation, landscaped beds, and amenity ponds in Suwanee's planned communities keep them breeding. Residual barrier sprays and larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "Roof rats slip in from wooded buffers and overhanging trees while mice find construction gaps around garages and vents, all chasing warmth come fall. Trapping to knock the numbers down, exclusion that seals the gaps for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#general',
      blurb: "Fire ants claim Suwanee's manicured lawns, with wasps, spiders, and nuisance ants not far behind. A single recurring quarterly plan keeps the entire lineup in check all year." },
  ],

  // No `pestPages` — Suwanee is a hub-only build for now (see header note). Add
  // per-pest spoke pages later by introducing a `pestPages` object keyed by
  // service slug; the routing, sitemap, and city-service view already support it.
};
