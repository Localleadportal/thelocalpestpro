'use strict';

// ── Kennesaw, GA — city hub ──────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the two sibling Cobb County city hubs
// (Marietta, Smyrna) — and not from the Cherokee exurb hubs (Woodstock, Canton,
// Holly Springs). The two siblings each own a different Cobb angle: Marietta is
// the OLDER, established city under a mature tree canopy; Smyrna is the dense,
// REDEVELOPED inner-ring suburb of attached townhomes/condos. Kennesaw leads on
// its OWN distinctives — a northwest Cobb suburb anchored by Kennesaw State
// University (one of Georgia's largest universities, so a big student-rental
// population and the move-in/move-out turnover that travels bed bugs and roaches
// with secondhand furniture), and a wooded suburban edge against Kennesaw
// Mountain National Battlefield Park, with a mix of established subdivisions and
// continued growth. Structure, hooks, and FAQs are written fresh so all three
// Cobb pages read as clearly different pages. Targets local intent ("pest
// control Kennesaw", "Kennesaw exterminator", "Kennesaw GA pest control").
// Rendered by views/city.ejs (hub) at /georgia/kennesaw/.
//
// `county` drives the LeadPortal contractor lookup — Kennesaw is in COBB County,
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
// northwest Cobb County, in metro Atlanta, northwest of downtown Atlanta along
// the I-75 / U.S. 41 (Cobb Parkway) corridor; home to Kennesaw State University,
// one of Georgia's largest public universities, which drives a large
// student-rental population and high tenant turnover; bordered by the wooded
// Kennesaw Mountain National Battlefield Park and other tree-lined suburban
// edges; a mix of established subdivisions and continued newer growth; ZIPs
// 30144 / 30152 (never mapped to specific streets); nearby Cobb communities
// Acworth, Marietta, Smyrna, Powder Springs, Mableton, Austell (service-area
// names only). REGIONAL truths: humid subtropical climate with a long warm
// season; eastern subterranean termite is the dominant Georgia termite (the
// Formosan termite is RARE in Georgia — only a few isolated pockets statewide,
// NOT established in metro Atlanta); red imported fire ants established
// statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025); the
// Georgia Dept. of Agriculture's Structural Pest Control Commission
// regulates/licenses. Do NOT name parks (beyond the battlefield reference
// above), schools, subdivisions, streets, ordinances, population figures, or any
// unverified hyper-local detail.

module.exports = {
  name: 'Kennesaw',
  slug: 'kennesaw',
  county: 'Cobb County',
  region: 'GA',
  zips: ['30144', '30152'],
  // Nearby Cobb County communities we also serve — NOT Kennesaw subdivisions.
  // Service-area names only; the template links only the ones that already have
  // a built city hub (Marietta, Smyrna), the rest render as plain badges.
  neighborhoods: ['Acworth', 'Marietta', 'Smyrna', 'Powder Springs', 'Mableton', 'Austell'],

  // OG card — shared branded 1200×630 default; set a Kennesaw-specific path here
  // to give the page its own card later. Never the favicon stopgap.
  ogImage: '/images/og-default.jpg',

  // SEO — exact-match "Pest Control Kennesaw" + GA in the title; the contiguous
  // long-tail phrases live in the meta description, headings, and body below.
  metaTitle: 'Pest Control Kennesaw, GA | Exterminator | The Local Pest Pro',
  metaDesc: "Pest control Kennesaw, GA for homes and student rentals — termite treatment, mosquito control, rodent control and bed bug exterminator. Free quote today.",
  h1: 'Pest Control in Kennesaw, GA',
  heroSub: "Kennesaw is a northwest Cobb County suburb shaped by two things at once — Kennesaw State University, which fills the area with student rentals and constant move-in, move-out turnover, and the wooded edges around Kennesaw Mountain that push wildlife and insects toward nearby homes. Add Georgia's humid, long warm season and you get steady pressure from bed bugs, roaches, termites, mosquitoes, and rodents. Reach a licensed Kennesaw exterminator who knows the area, fast.",

  overviewHeading: 'Kennesaw Pest Control GA: Built for a College Town on Cobb’s Wooded Edge',
  overview: [
    "Kennesaw has a pest profile you won't find in the rest of Cobb County. As the home of Kennesaw State University, the area carries a large renter and student population, and that means a calendar built around move-in and move-out weekends — semester after semester, mattresses, couches, and box springs change hands and change addresses. That churn is exactly how bed bugs and German roaches spread fastest: they hide in secondhand furniture and ride from one unit to the next, so a problem that starts in a rental near campus can surface across a whole street of homes.",
    "Then there's the land itself. Kennesaw sits against the wooded slopes of Kennesaw Mountain and other tree-lined edges where neighborhoods meet undeveloped ground, and that border is a steady source of pressure — rodents, mosquitoes, ticks, and the occasional wandering insect all move out of the woods and into yards and crawlspaces. Pair that with a mix of established subdivisions and the newer construction still going up along the I-75 corridor, and Georgia's humid subtropical climate that barely lets pests pause all year, and you have a city where a recurring, locally-tuned plan beats one-off treatments. Wherever you are in Kennesaw, the licensed, insured pros in our directory inspect your exact property and quote it free before any work begins — straightforward, local pest control Kennesaw homeowners and renters can rely on.",
  ],

  sections: [
    {
      heading: 'What Drives Pest Pressure in Kennesaw’s College-Town Neighborhoods',
      paras: [
        "Georgia carries some of the heaviest termite pressure in the country, and northwest Cobb is no exception. The eastern subterranean termite — the dominant species across the state — tunnels up through the soil into sill plates, joists, and framing. Because the region's winters stay mild, those colonies never go dormant; they keep feeding underground twelve months a year, which is why the quiet, hidden damage to a Kennesaw home rarely pauses. Since homeowners insurance typically excludes termite damage, an ongoing barrier is simply the smarter spend.",
        "What sets Kennesaw apart is the human turnover layered on top of that regional baseline. With so many student rentals around Kennesaw State, bed bugs and German roaches get reintroduced again and again on secondhand furniture and shared belongings, so a single treated unit can be re-infested by the next tenant who moves in. Outside, red imported fire ants — established statewide — throw up mounds in lawns and common areas, metro Atlanta ranks among the top five U.S. metros for mosquitoes (Orkin's 2025 list), and the wooded edge against Kennesaw Mountain feeds a steady trickle of rodents and biting insects toward the houses nearest the trees. Against all of that, a steady professional program from a licensed Kennesaw exterminator holds far better than chasing each flare-up after it starts.",
      ],
    },
    {
      heading: '<span id="pests-detail"></span>The Pests Kennesaw Homes and Rentals See Most',
      paras: [
        "A university town with a wooded northwest-Cobb edge has its own signature mix of pests. These are the ones the licensed pros in our directory get called for most around Kennesaw:",
      ],
      cards: [
        { name: 'Termites', text: "Eastern subterranean termites are Georgia's dominant species and a year-round threat to Kennesaw's wood-framed homes. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings — termite treatment Kennesaw GA homeowners can count on, backed by a renewable bond." },
        { name: 'Bed Bugs', text: "Few places see bed bugs move the way a college town does: secondhand furniture and end-of-semester turnover carry them from rental to rental near Kennesaw State, and from there into family homes. A licensed bed bug exterminator Kennesaw residents can call uses whole-room heat or a targeted residual program to kill every life stage, then verifies the unit is clear with follow-up checks." },
        { name: 'Cockroaches', text: "German roaches breed indoors in kitchens and baths and spread quickly through shared and rented housing, while the big outdoor 'palmetto bugs' (smokybrown and American roaches) live in the mulch, leaf litter, and crawlspaces along Kennesaw's wooded lots and wander in. Gel baiting, crack-and-crevice work, and an exterior barrier shut down both." },
        { name: 'Fire Ants', text: "Red imported fire ants are established across Georgia, and their dome-shaped mounds erupt in Kennesaw lawns, parks, and apartment common areas. A broadcast bait that workers carry underground to the queen, plus spot mound treatment and a perimeter barrier, keeps a yard usable for kids and pets." },
        { name: 'Mosquitoes', text: "Metro Atlanta ranks among the top five U.S. mosquito metros, and the shaded, damp ground along Kennesaw's tree-lined edges gives adults cool daytime harborage right next to the patio. Yard barrier treatments and larviciding of standing water — mosquito control Kennesaw GA families use to take the backyard back from spring through fall." },
        { name: 'Rodents', text: "The wooded border around Kennesaw Mountain keeps mice and rats pressing toward the nearest houses, slipping in through gaps, garage doors, and crawlspace vents as nights cool. Rodent control Kennesaw GA homeowners trust pairs trapping with exclusion — sealing the entry points so they can't find their way back in." },
        { name: 'Wasps & Hornets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets build through the summer under eaves, soffits, and deck rails, then turn defensive once the fall crowds the colony. Technicians remove the reachable nests and treat the sheltered voids these insects return to season after season." },
      ],
    },
    {
      heading: 'How to Spot Termites in a Kennesaw Home',
      paras: [
        "Termites feed from the inside out, so the damage is usually well along before a homeowner notices — true even in newer Kennesaw construction. Catching these early signs makes all the difference:",
      ],
      bullets: [
        "Pencil-width mud tubes climbing foundation walls, brick piers, garage stem walls, or crawlspace supports",
        "Winged swarmers indoors on warm, humid spring days, or little piles of shed, see-through wings on sills and near doors",
        "Baseboards, door casings, or subfloor that sound hollow or papery when you tap them",
        "Interior doors or windows that begin sticking as damaged or swelling wood shifts",
        "Blistered or bubbling paint, or faint mud-filled lines tracking across drywall and trim",
      ],
    },
    {
      heading: 'When Pests Peak in Kennesaw Through the Year',
      paras: [
        "Pest pressure shifts season to season in Kennesaw. Here's roughly what local homes and rentals run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid afternoons set off termite swarms — a burst of winged swarmers, or shed wings on a sill, is the classic flag of an active colony. Ants wake and trail indoors, carpenter bees drill into deck and trim wood, and the first warm rains begin filling mosquito breeding sites along shaded, wooded edges. Getting on a plan now is the cheapest insurance against the summer peak." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes surge across the metro, fire ant mounds spread through lawns and common areas, wasps and yellowjackets nest under eaves and decks, and roaches push indoors out of the heat. With summer subletting and turnover near campus, this is also a busy stretch for bed bugs moving on secondhand furniture." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, mice and rats come down off Kennesaw's wooded edges hunting for a warm place to overwinter, slipping in through gaps and garage doors — this is when scratching starts in attics and walls. Yellowjacket nests hit full size and the colonies get defensive fast. The fall move-in wave also reshuffles bed bugs through area rentals. A smart time to seal entry points before the cold sets in." },
        { name: 'Winter (Dec–Feb)', text: "Kennesaw's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding below the frost line no matter the month. Staying on a recurring plan holds the barrier through the cold so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Northwest Cobb Areas We Also Serve',
      paras: [
        "The local pros in our directory cover Kennesaw across its ZIP codes and the surrounding Cobb County communities. If your home sits in one of the communities listed here, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Kennesaw',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Kennesaw and the wider Cobb County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Kennesaw home or rental — one-time or recurring." },
        { name: '3. Problem solved', text: "Your tech clears the active infestation, closes off the gaps pests travel through, and puts prevention in place using EPA-registered products at label rates — with pet- and family-safe options, and a guarantee standing behind most work." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Kennesaw',
      paras: [
        "The Local Pest Pro is a directory that connects Kennesaw homeowners and renters with licensed, insured local exterminators across Cobb County — we're not a single company. When you call, you reach the pest control pro assigned to the Kennesaw area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Each pro we hand you off to holds a license from the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with low-toxicity choices for homes with kids and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'What are the most common pests in Kennesaw, GA?', a: "The frequent calls are subterranean termites (metro Atlanta is a heavy termite-pressure area and the eastern subterranean is Georgia's dominant species), bed bugs and German roaches that move with student-rental turnover near Kennesaw State, red imported fire ants in lawns and common areas, mosquitoes bred along shaded wooded edges, and mice and rats that come down off Kennesaw Mountain's tree line as nights cool. The pros in our directory handle every one of them." },
    { q: 'Do student rentals near Kennesaw State need different pest control?', a: "Often, yes. Rental housing turns over constantly, and each move-in brings new furniture and belongings that can carry bed bugs and roaches in with them — so treating a unit once isn't always enough if the next tenant reintroduces the problem. A pro inspects the unit, treats every life stage, and can advise on prepping between tenants and coordinating with neighboring units or a property manager so the fix actually holds." },
    { q: 'Does living near Kennesaw Mountain mean more pests?', a: "It can add pressure. Homes that back up to the wooded slopes and tree-lined edges around Kennesaw Mountain sit right at the line where undeveloped ground meets the neighborhood, and that border feeds a steady trickle of rodents, mosquitoes, and ticks toward the nearest yards and crawlspaces. A perimeter barrier plus exclusion — sealing the gaps pests use to get inside — is the practical way to keep that wooded edge from becoming an open door." },
    { q: 'Are Kennesaw pest control companies licensed?', a: "They should be. In Georgia, the Department of Agriculture oversees structural pest control through its Structural Pest Control Commission, which issues company licenses and certifies the applicators who treat your home. Every Kennesaw exterminator we connect you with is a licensed, insured Georgia pro." },
    { q: 'Can I get same-day or emergency pest control in Kennesaw?', a: "Often, yes — many of the local pros serving Kennesaw offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue in a rental, or rodents in the house. Call and we'll route you to a Cobb County exterminator who can come out quickly." },
    { q: 'Which areas around Kennesaw do you serve?', a: "Beyond Kennesaw's ZIP codes, the pros in our directory serve the surrounding Cobb County communities, including Acworth, Marietta, Smyrna, Powder Springs, Mableton, and Austell. Reach out and we'll line you up with a licensed exterminator who works your side of the county." },
    { q: 'Are pest treatments safe with children and pets in the home?', a: "Yes. Kennesaw pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will flag any brief stay-off window — usually just until everything dries." },
  ],

  finalCtaHeading: 'Get Your Free Kennesaw Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY: no per-pest spoke pages are built for Kennesaw yet, so these cards
  // are in-page navigation — each points at the on-page detail section
  // (#pests-detail) rather than an unbuilt /georgia/kennesaw/<pest>/ route, and
  // the template renders them as non-clickable <div>s while pestPages is empty.
  // Blurbs are written fresh for Kennesaw (no reuse from Marietta or Smyrna).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#pests-detail',
      blurb: "Eastern subterranean termites — Georgia's dominant species — feed year-round on Kennesaw's wood-framed homes. Soil treatments, in-ground bait stations, and the Georgia termite letter at closing." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#pests-detail',
      blurb: "Student-rental turnover near Kennesaw State moves bed bugs on secondhand furniture from unit to unit and into family homes. Whole-room heat or a focused residual program kills every life stage, then confirms it with follow-ups." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#pests-detail',
      blurb: "German roaches spreading through rented and shared housing, plus big 'palmetto bugs' from the mulch and crawlspaces of Kennesaw's wooded lots — gel baiting, crack-and-crevice work, and a perimeter barrier that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#pests-detail',
      blurb: "Kennesaw shares metro Atlanta's top-five U.S. mosquito ranking, and the shaded, tree-lined edges give adults damp daytime cover. Perimeter barrier sprays plus larviciding of any standing water, kept up through Georgia's long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#pests-detail',
      blurb: "Mice and rats come down off Kennesaw Mountain's wooded edge toward the nearest homes as nights cool. Trapping, exclusion that seals the entry points, and ongoing monitoring keep them out." },
    { emoji: '🐌', name: 'General Pest Control', href: '#pests-detail',
      blurb: "Fire ants in the lawn, wasps under the eaves, spiders and ants indoors — one recurring quarterly plan covers the everyday pests a Kennesaw home faces, year-round." },
  ],

  // HUB-ONLY: per-pest spoke pages are intentionally NOT built yet. Pest coverage
  // lives in the on-page sections above. Leaving this empty keeps the routes from
  // resolving until each page is authored fresh later.
  pestPages: {},
};
