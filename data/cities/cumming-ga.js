'use strict';

// ── Cumming, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling Cherokee County city pages —
// Canton, Holly Springs, Woodstock). Targets local intent ("pest control
// Cumming GA", "Cumming exterminator", "Cumming GA pest control"). Rendered by
// views/city.ejs at /georgia/cumming/.
//
// `county` drives the LeadPortal contractor lookup — Cumming is the seat of
// FORSYTH County, so an assigned Forsyth County 'Pest Control' contractor shows
// on this page (name + phone + LocalBusiness schema) pulled server-side; until
// one is assigned the page falls back to the shared (844) directory line and a
// Service schema node. Trust signals are kept contractor-AGNOSTIC so they
// survive a county reassignment without edits — no star ratings, no review
// counts, no AggregateRating schema.
//
// HUB ONLY — no per-pest spoke pages for Cumming yet (pestPages is empty). The
// six hub cards therefore jump to on-page anchored sections (#termite, #mosquito,
// #rodent, #bed-bug, #cockroach, #fire-ant) instead of linking to unbuilt spoke
// pages, so there are no dead links. The "Pest by Pest" section below carries
// those anchors and covers all GA-relevant categories on-page.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): county seat
// of Forsyth County, metro Atlanta's northern suburbs ~40 mi N of downtown
// Atlanta; one of Georgia's — and the nation's — fastest-growing counties, with
// heavy new residential construction; the GA 400 corridor runs through it;
// Sawnee Mountain / Sawnee Mountain Preserve nearby; Lake Lanier (Lake Sidney
// Lanier) borders Forsyth County just east/north of the city; ZIPs
// 30040/30041/30028; area codes 770/678/470; nearby unincorporated Forsyth
// communities Coal Mountain, Chestatee, Silver City, Big Creek; humid subtropical
// climate; eastern subterranean termites dominant (Formosan termites are rare in
// Georgia and NOT established in metro Atlanta — identified in only a few pockets
// statewide); red imported fire ants present statewide; the Atlanta metro ranks
// top-five for mosquito activity on Orkin's 2025 list; structural pest control is regulated
// by the Georgia Dept. of Agriculture's Structural Pest Control Commission. Do
// NOT name streets, subdivisions, neighborhoods, schools, or ordinances.

module.exports = {
  name: 'Cumming',
  slug: 'cumming',
  county: 'Forsyth County',
  region: 'GA',
  zips: ['30040', '30041', '30028'],
  // Nearby unincorporated Forsyth County communities we also serve — NOT Cumming
  // subdivisions. Service-area names only (approved facts: Coal Mountain,
  // Chestatee, Silver City, Big Creek). None has its own built hub, so each
  // renders as a plain (non-clickable) badge.
  neighborhoods: ['Coal Mountain', 'Chestatee', 'Silver City', 'Big Creek'],

  // Shared branded OG card (/images/og-default.jpg). Set a Cumming-specific path
  // here later to give the page its own 1200×630 card.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Cumming GA — Exterminator & Termite Control',
  metaDesc: "Licensed pest control in Cumming, GA & Forsyth County — termites, new-construction pretreatment, mosquitoes near Lake Lanier, rodents & fire ants. Free quote.",
  h1: 'Pest Control in Cumming, GA',
  heroSub: "As the seat of Forsyth County — one of the fastest-growing areas in Georgia — Cumming pairs wave after wave of new construction with humid summers and mild winters, so termites, mosquitoes, roaches, and rodents stay active here close to year-round. Get a licensed local Cumming exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Cumming & Forsyth County',
  overview: [
    "Few places in Georgia have grown like Cumming and Forsyth County. As one of the state's — and the nation's — fastest-growing counties, the area has filled with new subdivisions rising along the GA 400 corridor, and that building boom shapes its pest pressure. Freshly graded lots and new framing sit directly on disturbed soil that subterranean termites colonize readily, which is exactly why new-construction termite pretreatment is such a relevant step for Cumming homeowners — while older homes near downtown and out toward Sawnee Mountain have had years for ants, roaches, and rodents to find the gaps.",
    "The constant underneath all that growth is the climate. Cumming's humid subtropical weather — long, sticky summers, mild winters, and steady rain — means most pests here barely get an off-season, so a recurring, locally-tuned plan usually beats one-off treatments. It doesn't help that Lake Lanier sits right on Forsyth County's edge, feeding the standing water and humidity that drive heavy mosquito pressure. Whether you're in 30040, 30041, or 30028, the licensed, insured pros in our directory quote your specific Cumming property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Cumming Homes Need Year-Round Protection',
      paras: [
        "Cumming sits inside one of the heaviest termite-pressure regions in the country. Eastern subterranean termites are the dominant threat across the area, foraging through the soil and building mud tubes up into sills, joists, and framing. The aggressive Formosan termite, by contrast, is rare in Georgia — identified in only a few pockets statewide and not established in the metro Atlanta area. Because winters here are mild, those colonies keep feeding underground all twelve months instead of going dormant — so the slow, hidden damage never really pauses. Termite damage typically isn't covered by homeowners insurance, which makes ongoing protection the cost-effective choice, and a Cumming termite inspection is the only reliable way to confirm activity before it reaches the structure.",
        "Termites are only the start. Red imported fire ants are present throughout the Cumming area, throwing up painful mounds across subdivision lawns and open turf. The Atlanta metro ranks among the top five U.S. cities for mosquito activity on Orkin's 2025 list — and with Lake Lanier and the creeks feeding it right on Forsyth County's edge, there's no shortage of standing water to breed them from spring into fall. Add the German roaches, outdoor 'palmetto bugs,' and roof rats that thrive in the humidity, and most Cumming homes do better with a steady professional barrier than with chasing one infestation at a time.",
      ],
    },
    {
      heading: 'Cumming Pest Season — What to Expect',
      paras: [
        "Pest pressure shifts through the year in Cumming. Here's roughly what local homeowners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid days — winged swarmers, or shed translucent wings on a windowsill, are the classic first sign of an active colony. Ants get moving, carpenter bees drill into deck and trim wood, and the season's first warm rains kick off mosquito breeding around Lake Lanier and Forsyth County's creeks. The ideal window to lock in protection before summer." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are relentless across the metro Atlanta area, fire ant mounds multiply in Cumming lawns, wasps and yellowjackets build large nests under eaves and decks, and roaches push indoors to escape the heat and humidity. Fleas and ticks hit their most active stretch on pets and in shaded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice start hunting for a warm place to overwinter — this is when you'll first hear scratching in Cumming attics and walls. Breaking-up yellowjacket colonies turn aggressive. A smart time to seal entry points before the cold sets in." },
        { name: 'Winter (Dec–Feb)', text: "Cumming's mild winters never fully shut pests down. German roaches and mice stay active indoors, and subterranean termites keep feeding underground year-round. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'The Pests We Treat in Cumming — Pest by Pest',
      paras: [
        "From new-build termite risk to Lake Lanier mosquitoes, here's how the licensed pros in our directory handle the pests Cumming and Forsyth County homeowners deal with most:",
      ],
      cards: [
        { name: '<span id="termite"></span>🐛 Termites', text: "Cumming sits in one of the nation's heaviest termite zones — eastern subterranean termites are dominant (Formosan termites are rare in Georgia and not established in metro Atlanta). With so much new construction here, builder pretreatment and soil-applied liquid barriers or in-ground bait systems matter, plus the Georgia termite letter (Wood Infestation Inspection Report) when you buy or sell. Ask about a Cumming termite inspection." },
        { name: '<span id="mosquito"></span>🦟 Mosquitoes', text: "The Atlanta metro ranks among the top five U.S. cities for mosquito activity on Orkin's 2025 list, and the standing water around Lake Lanier and Forsyth County's creeks keeps them breeding all season. Mosquito control in Cumming pairs yard barrier sprays on shaded resting areas with larviciding of the water they breed in, refreshed through the long warm season." },
        { name: '<span id="rodent"></span>🐀 Rodents', text: "As Cumming nights cool, roof rats, Norway rats, and house mice push into attics, walls, and crawlspaces. Rodent control in Cumming isn't just trapping — a pro seals the entry points (exclusion) so they can't return, then monitors. New builds and older homes alike give them gaps to exploit." },
        { name: '<span id="bed-bug"></span>🛏️ Bed Bugs', text: "Bed bugs hitchhike home from travel and secondhand furniture and spread fast through homes, apartments, and rentals. Whole-room heat or a targeted residual program kills every life stage — egg to adult — with follow-up verification to confirm they're gone." },
        { name: '<span id="fire-ant"></span>🐜 Fire Ants', text: "If you have a Cumming lawn, you almost certainly have fire ants — red imported fire ants are present statewide and their mounds spread fast across open subdivision turf. Effective control pairs a broadcast bait that workers carry back to the queen with direct mound treatment and a perimeter barrier, all kept up on a recurring plan." },
        { name: '<span id="cockroach"></span>🪳 Cockroaches', text: "Two very different problems: German roaches that breed indoors in kitchens and baths (an infestation, not a stray), and big outdoor 'palmetto bugs' from mulch beds and crawlspaces that wander in. Gel baiting, crack-and-crevice work, and sanitation clear each kind and keep it out, usually with a guarantee." },
        { name: '<span id="wasp-hornet"></span>🐝 Wasps & Hornets', text: "Paper wasps, hornets, and ground-nesting yellowjackets build through Cumming's summer and turn aggressive in fall. Pros knock down accessible nests and treat the eaves, soffits, and entry points where they keep rebuilding — folded into a recurring general pest plan alongside spiders and nuisance ants." },
      ],
    },
    {
      heading: 'In & Around Cumming — Forsyth County Areas We Serve',
      paras: [
        "The local pros in our directory cover Cumming across all three ZIP codes and the surrounding Forsyth County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Cumming',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Cumming and the wider Forsyth County area — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Cumming home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Cumming homeowners with licensed, insured local exterminators across Forsyth County — we're not a single company. When you call, you reach the pest control pro assigned to the Cumming area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Cumming?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home and lot. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'What pests are most common in Cumming and Forsyth County?', a: "The big ones are subterranean termites (Cumming sits in a heavy termite-pressure area), red imported fire ants in lawns, mosquitoes bred around Lake Lanier and Forsyth County's creeks, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push into attics as nights cool. The local pros in our directory treat all of them." },
    { q: 'Does my new-construction home in Cumming need termite pretreatment?', a: "It's worth confirming. Cumming's many new subdivisions sit on freshly graded, disturbed soil with new, untreated framing — exactly what foraging subterranean termites colonize — so new-construction termite pretreatment, or a termite bond, is common on new homes here. Many builders apply a pretreatment, but coverage varies and doesn't last forever; if you can't confirm documented, current protection, a termite inspection is the smart move." },
    { q: 'Why are mosquitoes so bad near Lake Lanier?', a: "Mosquitoes need only warmth and a little standing water, and the lake, coves, and creeks around Forsyth County supply plenty of it through the long warm season. The Atlanta metro ranks among the top five U.S. cities for mosquito activity on Orkin's 2025 list. Effective mosquito control in Cumming treats the shaded areas where adults rest and larvicides the standing water where they breed, refreshed every few weeks." },
    { q: 'Do you serve the areas around Cumming too?', a: "Yes. Beyond Cumming's 30040, 30041, and 30028 ZIP codes, the pros in our directory serve the surrounding Forsyth County communities, including Coal Mountain, Chestatee, Silver City, and Big Creek. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Cumming pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Cumming?', a: "Often, yes — many of the local pros serving Cumming offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Forsyth County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Cumming pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Cumming Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY build: no per-pest spoke pages for Cumming yet, so each card jumps to
  // its on-page anchored section in "The Pests We Treat in Cumming — Pest by Pest"
  // above (no dead links). Build the spoke pages later and repoint these hrefs to
  // /georgia/cumming/<pest>/. Blurbs are written fresh for Cumming.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '#termite',
      blurb: "Cumming sits in one of the nation's heaviest termite zones — eastern subterranean dominant (Formosan termites rare in Georgia). New-construction pretreatment, soil barriers, bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '#bed-bug',
      blurb: "Travel-driven bed bugs spread fast through Cumming homes, apartments, and rentals. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '#cockroach',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the humidity — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '#mosquito',
      blurb: "The Atlanta metro ranks among the top five U.S. cities for mosquito activity (Orkin 2025), and Lake Lanier and Forsyth County's creeks give them standing water to breed. Yard barrier sprays and larviciding through Cumming's long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '#rodent',
      blurb: "As Cumming nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '#fire-ant',
      blurb: "Red imported fire ants are everywhere in Forsyth County, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No per-pest spoke pages for Cumming yet. Empty so the hub renders cleanly and
  // the sitemap adds only /georgia/cumming/. Add entries here (and repoint the
  // hub-card hrefs above to /georgia/cumming/<pest>/) when the spokes are authored.
  pestPages: {},
};
