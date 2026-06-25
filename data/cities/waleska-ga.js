'use strict';

// ── Waleska, GA — city hub ───────────────────────────────────────────────────
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city pages
// (Canton, Woodstock, Holly Springs, Ball Ground) — same county means shared
// FACTS, but the wording, structure, H2s, FAQ phrasing, and local hooks here are
// written fresh. Waleska leads on its OWN verified distinctives so it doesn't
// re-tell Ball Ground's generic "small rural N-Cherokee town" story:
//   • Reinhardt University — a small private university in town; the student /
//     off-campus rental turnover (leases, secondhand furniture, returns from
//     travel) is a real, verifiable bed-bug/roach vector unique among the
//     Cherokee siblings.
//   • Lake Arrowhead — the gated lake-and-golf community nearby; lake homes,
//     second homes, docks, and wooded shoreline drive mosquito/rodent/termite
//     pressure. (Distinct from Woodstock's Lake Allatoona / Towne Lake lakefront
//     framing — here it's one gated resort community + part-time homes.)
// Targets local intent ("pest control waleska ga", "waleska exterminator",
// "waleska ga pest control"). Rendered by views/city.ejs at /georgia/waleska/.
//
// HUB ONLY — no per-pest spoke pages are built, so there is no `pestPages` map;
// every hub pest card therefore renders as a non-clickable <div> (city.ejs gates
// the link on city.pestPages[slug] existing). Add a pestPages entry later to
// auto-upgrade a card to a link without any template change.
//
// `county` drives the LeadPortal contractor lookup — Waleska is in Cherokee
// County, so the assigned Cherokee County 'Pest Control' contractor (McCardle's
// Pest Management) renders on the page (name + phone + PestControlService schema,
// license + real address from the contractor record only). The lib/contractor
// helper strips "Cherokee County" → "Cherokee" to match the assignment. If the
// assignment is ever cleared the page falls back to the shared (844) line and an
// Organization provider — nothing here hardcodes a contractor.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics — no invented streets,
// subdivisions, stats, or ordinances): small community in northwestern Cherokee
// County, metro Atlanta; home to Reinhardt University (small private university);
// near the gated Lake Arrowhead lake-and-golf community; rolling, wooded/forested
// terrain; ZIP 30183; area codes 770/678/470; nearby Cherokee communities Canton
// (SE), Ball Ground (NE), Holly Springs; humid subtropical climate; Cherokee
// County is a high termite-pressure zone (eastern subterranean termites dominant);
// red imported fire ants present; metro Atlanta ranks among the worst U.S.
// mosquito metros (Orkin 2025) as REGIONAL context only — Waleska sits well
// outside the urban core; GA Dept. of Agriculture Structural Pest Control
// Commission regulates/licenses.

module.exports = {
  name: 'Waleska',
  slug: 'waleska',
  county: 'Cherokee County',
  region: 'GA',
  zips: ['30183'],
  // Nearby Cherokee communities we also serve — service-area names only, NOT
  // Waleska subdivisions. Canton, Ball Ground, and Holly Springs each have a
  // built hub, so all three render as links.
  neighborhoods: ['Canton', 'Ball Ground', 'Holly Springs'],

  // Shared branded OG card (root-relative); set a Waleska-specific path here later
  // to give the page its own 1200×630 card.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Waleska, GA | The Local Pest Pro',
  metaDesc: "Pest control in Waleska, GA — home to Reinhardt University and the Lake Arrowhead community. Local pros for termites, mosquitoes, rodents & roaches. Free quote.",
  h1: 'Pest Control in Waleska, GA',
  heroSub: "Waleska is a small community in northwestern Cherokee County, best known as the home of Reinhardt University and a short drive from the gated Lake Arrowhead lake-and-golf community. Between the rentals and turnover of a college town, the docks and wooded shoreline ringing the lake, and the rolling forest in between, pests find plenty of footholds — and north Georgia's humid climate keeps termites, mosquitoes, rodents, and roaches working close to year-round. Get a licensed local exterminator who knows Waleska, fast.",

  overviewHeading: "Pest Control Tuned to Waleska's Campus, Lake & Woods",
  overview: [
    "Waleska may be small, but its pest pressure comes from more directions than most towns its size. As the home of Reinhardt University, the area carries a steady layer of student and faculty rentals, off-campus houses, and seasonal move-ins and move-outs — the kind of turnover that quietly carries bed bugs and roaches from one address to the next. A few minutes away, the gated Lake Arrowhead community wraps homes, second homes, and a golf course around the water, where docks, boats, and wooded shoreline lots sit right against pest habitat.",
    "Surrounding all of it is the rolling, forested terrain of northwestern Cherokee County, where lots back up to woods and creeks and the humid subtropical climate — hot summers, mild winters, steady rain — leaves most pests no real off-season. Older homes near the campus have had decades for ants, roaches, and rodents to find their way in, while newer lake-community construction sits on graded soil that subterranean termites readily colonize. Whichever describes your place, the licensed, insured pros in our directory quote your specific Waleska property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Makes Pest Pressure So Steady in Waleska?',
      paras: [
        "Cherokee County sits inside one of the country's heaviest termite-pressure regions, and Waleska hands eastern subterranean termites — the dominant wood-destroying species across north Georgia — exactly the conditions they want. Wooded and lakeside lots keep the soil damp and put wood in contact with the ground through decks, docks, fences, and landscaping timbers, and the area's mild winters let colonies feed underground every month of the year instead of going dormant. Since termite damage is rarely covered by homeowners insurance, ongoing protection costs a small fraction of the repairs it heads off.",
        "The rest of the lineup keeps local pros busy too. Red imported fire ants stud lawns, common areas, and open ground with their mounds; mosquitoes breed in the coves, ponds, drainage low spots, and shaded woods around Lake Arrowhead and beyond — and while Waleska sits well outside the city, it still falls within a metro Atlanta region that ranks among the worst in the nation for mosquitoes (top five on Orkin's 2025 list). Add the German roaches that spread through rentals, the outdoor 'palmetto bugs' that drift in from mulch and woodpiles, and the rodents that head for warm buildings as nights cool, and a steady professional barrier beats chasing each problem after it starts.",
      ],
    },
    {
      heading: 'Reinhardt University Rentals & Lake Arrowhead Homes',
      paras: [
        "Two features set Waleska apart from the rest of Cherokee County, and each shapes the kind of pest control a property needs:",
      ],
      cards: [
        { name: 'Student & off-campus rentals', text: "A college town means constant turnover — leases ending, furniture changing hands, and students coming back from travel and other housing. That churn is one of the most common ways bed bugs and cockroaches move between units, so rentals and shared houses near Reinhardt University benefit from inspection-led treatment and, for landlords, recurring service that catches a problem before it reaches the next tenant." },
        { name: 'Lake Arrowhead lake homes', text: "Homes in the gated Lake Arrowhead community — including second homes and weekend places — sit among water, docks, and wooded shoreline that draw mosquitoes, rodents, and wood-destroying insects. Properties that stand empty part of the year especially benefit from monitored, recurring protection, since a small issue can go unnoticed between stays." },
        { name: 'Homes changing hands', text: "Both the campus rental market and the lake community see properties turn over regularly, and nearly every Georgia sale involves a termite letter — the Wood Infestation Inspection Report. A licensed local pro can inspect, treat, and issue that report so a Waleska closing stays on schedule." },
      ],
    },
    {
      heading: "When Are Waleska's Pests Most Active?",
      paras: [
        "Pest activity shifts with the seasons in Waleska. Here's the rhythm local homeowners and renters can expect:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid days trigger termite swarms — winged swarmers indoors, or shed translucent wings on a sill, are the clearest early warning of a colony. Ants stir, carpenter bees bore into decks and dock framing, and the first warm rains begin filling the low spots and lake coves where mosquitoes breed. The best stretch to get protection in place before summer." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes surge around Lake Arrowhead's water and the shaded woods, fire ant mounds spread across lawns and open ground, wasps and yellowjackets build under eaves and decks, and roaches push indoors out of the heat — often through rentals and shared housing. Fleas and ticks climb on pets, wildlife, and in the tall grass and woodland edges." },
        { name: 'Fall (Sep–Nov)', text: "Cooling nights send roof rats, Norway rats, and house mice looking for somewhere warm, and a home near woods or water is an easy target — this is when scratching starts overhead. Student move-outs and end-of-season lake stays add their own shuffle of furniture and belongings. A good time to seal entry points before winter." },
        { name: 'Winter (Dec–Feb)', text: "Waleska's mild winters never fully stop pests. Indoors the German roaches and mice never quit, and subterranean termites go on feeding below the frost line all winter. Recurring service keeps the barrier intact through the cold so spring doesn't begin with a surge." },
      ],
    },
    {
      heading: 'Cherokee County Areas We Serve',
      paras: [
        "The local pros in our directory cover Waleska and the surrounding Cherokee County communities. If your home sits in one of these nearby spots, we can connect you with a licensed pro as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'What Happens When You Call?',
      cards: [
        { name: '1. Free quote, no pressure', text: "One call connects you with a licensed, insured exterminator serving Waleska and the wider Cherokee County area — no obligation and no hard sell." },
        { name: '2. On-site inspection', text: "Your pro looks over the property — home, yard, and any rental units or lakeside structures — pins down the pest and how far it has spread, and recommends a one-time or recurring plan that fits." },
        { name: '3. Treated & protected', text: "Licensed technicians clear the problem, seal out the next wave, and apply EPA-registered products at label rates — family- and pet-safe options included, most backed by a guarantee." },
      ],
    },
    {
      heading: 'About Our Waleska Pest Control Directory',
      paras: [
        "The Local Pest Pro is a directory rather than a single company — we connect Waleska homeowners, renters, and landlords with licensed, insured local exterminators across Cherokee County. Call and you'll reach the pest control pro assigned to the Waleska area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed by the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, including family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Waleska?', a: "There's no flat rate. The price depends on the pest, how far the problem has spread, and the size and type of property — a single rental unit, a family home, and a lakeside house all quote differently. A recurring general plan is the most economical, while specialty work like termite or bed bug treatment costs more for the equipment and follow-up. Every pro in our directory gives a free, property-specific quote first, so you'll know the number before any work starts." },
    { q: 'What are the most common pests in Waleska?', a: "Subterranean termites top the list, since Cherokee County is a high-pressure termite area and wooded, lakeside lots offer plenty of wood-to-soil contact. After them come red imported fire ants in lawns, mosquitoes from the lake coves and shaded low spots, German roaches and outdoor 'palmetto bugs,' and roof rats and mice that head for warm buildings as nights cool. The pros in our directory handle them all." },
    { q: 'Do you treat student rentals and off-campus housing near Reinhardt University?', a: "Yes. Rentals, shared houses, and apartments around Reinhardt University see frequent turnover, which is one of the easiest ways for bed bugs and roaches to travel between units. Tenants and landlords alike can get inspection-led treatment, and recurring service on a rental property helps catch an infestation before it reaches the next lease." },
    { q: 'Do homes in the Lake Arrowhead community need special attention?', a: "Often, yes. Lake Arrowhead homes sit among water, docks, and wooded shoreline that draw mosquitoes, rodents, and wood-destroying insects, and a second home or weekend place can develop a problem unnoticed between stays. Monitored, recurring protection is a good fit for lakeside and part-time properties, and a local pro will tailor it to your lot and structures." },
    { q: 'Which areas around Waleska do you serve?', a: "Beyond Waleska itself (ZIP 30183), the pros in our directory serve the surrounding Cherokee County communities — including Canton to the southeast, Ball Ground to the northeast, and Holly Springs. Give us a call and we'll set you up with a licensed pro serving your neighborhood." },
    { q: 'Can I get same-day or emergency pest control in Waleska?', a: "Often, yes. Many local pros serving Waleska offer same-day and emergency visits for urgent trouble — a wasp nest by the door, a sudden roach sighting in a rental, or rodents in the house. Call and we'll line you up with a Cherokee County exterminator who can get out quickly." },
  ],

  finalCtaHeading: 'Get Your Free Waleska Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six. No `pestPages` map exists for Waleska, so every card
  // renders as a non-clickable <div> (no spokes built). Blurbs written fresh for
  // Waleska — no reuse from Canton, Woodstock, Holly Springs, or Ball Ground.
  // Fire ants, wasps, spiders, etc. live under General Pest Control (no 7th card).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/waleska/termite-control/',
      blurb: "Cherokee County is one of the country's heaviest termite zones, and wooded, lakeside lots add wood-to-ground contact through decks, docks, and fences. Eastern subterranean termites are the species that matters, so a liquid soil barrier or monitored bait keeps them out, and the Georgia termite letter is ready when a home sells." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/waleska/bed-bug-treatment/',
      blurb: "Bed bugs ride in on travel and the steady move-in/move-out churn of student rentals near Reinhardt University, then spread fast. Whole-room heat or a staged residual plan kills them at every stage, confirmed by a follow-up inspection." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/waleska/cockroach-control/',
      blurb: "German roaches breeding indoors — a real concern in rentals and shared housing — plus 'palmetto bugs' wandering in from mulch and woodpiles. Gel baiting, crack-and-crevice work, and sanitation that keeps them gone." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/waleska/mosquito-control/',
      blurb: "The Atlanta metro routinely lands among the nation's worst for mosquitoes — Orkin ranked it top five in 2025 — and the coves, ponds, and shaded woods around Lake Arrowhead raise them well outside the urban core. A barrier spray across the shaded resting spots plus larvicide in the coves and low spots holds the bite count down all season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/waleska/rodent-control/',
      blurb: "As nights cool, roof rats, Norway rats, and house mice move from wooded and lakeside lots toward warm buildings. Trapping to remove them, full exclusion to lock them out, and routine monitoring afterward." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/waleska/pest-control/',
      blurb: "Fire ants in the lawn, spiders in the garage, wasps on the eaves — one recurring quarterly plan covers the everyday pests a Waleska home, rental, or lake house faces, year-round." },
  ],
};
