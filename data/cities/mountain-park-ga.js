'use strict';

// ── Mountain Park, GA (CHEROKEE County) — city hub ───────────────────────────
// IMPORTANT: this is Mountain Park in CHEROKEE County (a very small city in NE
// Cherokee), NOT the separate Mountain Park in Fulton/DeKalb near Roswell. Every
// reference pairs the name with "Cherokee County" to disambiguate for readers and
// search engines.
//
// Fully localized, UNIQUE content. NO copy is reused from the Georgia state
// pages, the national service pages, or the sibling Cherokee County city pages
// (Canton, Woodstock, Holly Springs, Ball Ground, Waleska) — same county means
// shared FACTS, but the wording, structure, H2s, FAQ phrasing, and local hooks
// here are written fresh.
//
// THIN-SPECIFICS: Mountain Park is one of the smallest cities on the site, and
// the strong rural-acreage angle (Ball Ground) and lake-community angle (Waleska)
// are already taken. Verified city-specific distinctives are minimal, so this page
// leads HONESTLY on what is true and not claimed elsewhere — a tiny incorporated
// city of quiet, low-density, heavily wooded residential streets in northeastern
// Cherokee County — and otherwise leans on NE-Cherokee / regional framing. NO
// fabricated streets, subdivisions, named landmarks, population figures,
// businesses, or ordinances are added to pad it; a shorter, honest, regionally
// framed page is the correct outcome.
//
// HUB ONLY — no per-pest spoke pages are built, so there is no `pestPages` map;
// every hub pest card therefore renders as a non-clickable <div> (city.ejs gates
// the link on city.pestPages[slug] existing). Add a pestPages entry later to
// auto-upgrade a card to a link without any template change.
//
// `county` drives the LeadPortal contractor lookup — Mountain Park is in Cherokee
// County, so the assigned Cherokee County 'Pest Control' contractor (McCardle's
// Pest Management) renders on the page (name + phone + PestControlService schema,
// license + real address from the contractor record only). The lib/contractor
// helper strips "Cherokee County" → "Cherokee" to match the assignment. If the
// assignment is ever cleared the page falls back to the shared (844) line and an
// Organization provider — nothing here hardcodes a contractor.
//
// APPROVED LOCAL FACTS ONLY: very small incorporated city in northeastern
// Cherokee County, metro Atlanta; quiet, low-density, heavily wooded residential
// character; humid subtropical climate; Cherokee County is a high termite-pressure
// zone (eastern subterranean termites dominant); red imported fire ants present;
// metro Atlanta ranks among the worst U.S. mosquito metros (Orkin 2025) as
// REGIONAL context only — Mountain Park sits well outside the urban core; GA Dept.
// of Agriculture Structural Pest Control Commission regulates/licenses. Nearby
// Cherokee communities served: Canton, Holly Springs, Hickory Flat. NOTE: no ZIP
// is asserted (the Cherokee Mountain Park ZIP isn't verified here) — `zips` is left
// empty so the template omits the ZIP line rather than printing a guessed code.

module.exports = {
  name: 'Mountain Park',
  slug: 'mountain-park',
  county: 'Cherokee County',
  region: 'GA',
  // Intentionally empty — see header note. Empty array makes city.ejs omit the
  // "Serving ZIP codes …" line instead of rendering a fabricated ZIP.
  zips: [],
  // Nearby Cherokee communities we also serve — service-area names only, NOT
  // Mountain Park subdivisions. Canton and Holly Springs each have a built hub, so
  // they render as links; Hickory Flat renders as a plain badge.
  neighborhoods: ['Canton', 'Holly Springs', 'Hickory Flat'],

  // Shared branded OG card (root-relative); set a Mountain Park–specific path here
  // later to give the page its own 1200×630 card.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Mountain Park, GA | The Local Pest Pro',
  metaDesc: "Pest control in Mountain Park, GA — a wooded city in northeastern Cherokee County. Licensed pros treat termites, mosquitoes, rodents & roaches. Free quote.",
  h1: 'Pest Control in Mountain Park, GA',
  heroSub: "Mountain Park is one of the smallest incorporated cities in Cherokee County — a quiet, low-density pocket of wooded residential streets in the county's northeast. Tucked among mature trees and shaded yards, homes here sit right up against the leaf litter, moisture, and tree canopy that pests use for cover, and north Georgia's humid climate keeps termites, mosquitoes, rodents, and roaches active close to year-round. Get a licensed local exterminator who knows Mountain Park and Cherokee County, fast.",

  overviewHeading: "Pest Control for Mountain Park's Quiet, Wooded Streets",
  overview: [
    "Mountain Park is easy to overlook — a tiny incorporated city in northeastern Cherokee County made up mostly of quiet, tree-shaded residential streets rather than commercial strips or dense subdivisions. That low-density, heavily wooded setting is pleasant to live in, but it also puts most homes in close contact with the kind of habitat pests prefer: mature tree canopy overhanging roofs, leaf litter and mulch beds holding moisture against foundations, and shaded yards that stay damp long after a rain.",
    "The pest pressure itself is the same humid-climate mix the rest of Cherokee County deals with. Long, sticky summers, mild winters, and steady rainfall mean termites, mosquitoes, ants, roaches, and rodents rarely get a true off-season here, so a recurring, locally-tuned plan tends to beat waiting for the next problem to surface. Whether your Mountain Park home is an established place under old hardwoods or a newer build, the licensed, insured pros in our directory quote your specific property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Drives Pest Activity in Mountain Park?',
      paras: [
        "Cherokee County sits inside one of the heaviest termite-pressure regions in the country, and Mountain Park's wooded lots quietly tilt conditions in the termites' favor. Eastern subterranean termites — the dominant wood-destroying species across north Georgia — forage through the soil year-round, and mature trees, mulch beds, leaf litter, and wood-to-ground contact from decks and landscaping give them the moisture and the access route to a home's framing. Mild winters keep those colonies feeding underground in every season instead of going dormant, and since termite damage is seldom covered by homeowners insurance, steady protection costs far less than the structural repairs it prevents.",
        "Termites are just the start. Red imported fire ants raise their mounds in the sunnier patches of lawn; the shaded, damp yards and tree canopy typical of Mountain Park give mosquitoes cool daytime cover and standing water to breed in — and although the city sits well outside the urban core, it still falls within a metro Atlanta region that ranks among the worst in the country for mosquitoes (top five on Orkin's 2025 list). Add the German roaches that move indoors, the outdoor 'palmetto bugs' that shelter in leaf litter and woodpiles, and the rodents that slip from the tree line into attics as nights cool, and an ongoing professional barrier makes more sense than treating one pest at a time.",
      ],
    },
    {
      heading: 'What Does a Small, Wooded Community Mean for Pest Control?',
      paras: [
        "In a place like Mountain Park, pests are shaped less by traffic or commercial activity and more by the trees. Established streets sit under a dense hardwood canopy, where overhanging limbs act as bridges to the roofline, fallen leaves and pine straw trap dampness against the foundation, and shaded ground never fully dries out — exactly the harborage termites, roof rats, ants, and 'palmetto bugs' look for. The newer homes scattered among the older ones add freshly graded soil that subterranean termites readily move into.",
        "Because the city is small and almost entirely residential, the most dependable approach is usually a steady perimeter plan tuned to that wooded setting — keeping a treated barrier between the tree line and the house, cutting back the vegetation and harborage that crowd the foundation, and sealing the roofline and entry points rodents and wildlife exploit. A local pro who knows Cherokee County's wooded neighborhoods can match the plan to your lot instead of treating every home the same.",
      ],
    },
    {
      heading: 'Which Pests Show Up in Mountain Park, and When?',
      paras: [
        "Pest activity follows a fairly predictable arc through the year in Mountain Park. Here's what local homeowners tend to run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Warm, humid days set off termite swarms — winged swarmers indoors, or shed translucent wings near a window, are the clearest early sign of an active colony. Ants wake up, carpenter bees drill into eaves and deck wood, and the first warm rains begin filling the shaded low spots where mosquitoes breed. The best window to get a barrier in place before summer arrives." },
        { name: 'Summer (Jun–Aug)', text: "The busiest stretch. Mosquitoes thrive in the tree-shaded yards, fire ant mounds appear in the sunnier patches of lawn, wasps and yellowjackets build under eaves and up in the canopy, and roaches push indoors to escape the heat. Fleas and ticks ride in on pets and wildlife from the surrounding woods." },
        { name: 'Fall (Sep–Nov)', text: "As nights turn cool, roof rats, Norway rats, and house mice leave the tree line hunting for a warm place to overwinter — and a home under heavy canopy is an easy reach. This is when homeowners first hear scratching overhead. Yellowjacket colonies turn aggressive as they break down. A good time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Mountain Park's mild winters don't shut pests down. Indoors, German roaches and house mice carry on as usual, while subterranean termites keep working the soil out of sight. Recurring service holds the barrier through the cold months so the warm season doesn't open with a surge." },
      ],
    },
    {
      heading: 'Nearby Cherokee County Areas We Cover',
      paras: [
        "The local pros in our directory serve Mountain Park along with the neighboring communities of northeastern and central Cherokee County. If you're nearby, we can connect you with a licensed exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid (no ZIP line, since zips is empty)
    },
    {
      heading: 'How Do You Get Started?',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Mountain Park and the surrounding Cherokee County area — no obligation, no pressure." },
        { name: '2. Get a property inspection', text: "Your pro walks the home and lot, reads the wooded setting, identifies the pest and how far it has spread, and recommends a one-time or recurring plan that fits." },
        { name: '3. Treated & kept out', text: "Licensed technicians knock out the infestation, close off future entry, and treat with EPA-registered products at label rates, with family- and pet-safe options — and most stand behind it with a guarantee." },
      ],
    },
    {
      heading: 'How Our Mountain Park Directory Works',
      paras: [
        "The Local Pest Pro is a directory, not a single company — we connect Mountain Park homeowners with licensed, insured local exterminators across Cherokee County. When you call, you'll reach the pest control pro assigned to the Mountain Park area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Each exterminator we connect you with holds a Georgia Department of Agriculture Structural Pest Control license and applies EPA-registered products at label rates, with family- and pet-safe options on request.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Mountain Park, GA?', a: "There's no flat rate — it comes down to the pest, how far the problem has spread, and the size of your home and lot. A recurring general plan is the most economical choice, while specialty work such as termite or bed bug treatment runs higher because of the equipment and follow-up involved. Every pro in our directory gives you a free, property-specific quote before any work begins, so the price is clear up front." },
    { q: 'What pests are most common in Mountain Park, GA?', a: "The usual lineup for wooded Cherokee County: subterranean termites (the county is a high-pressure termite area), red imported fire ants in sunny lawns, mosquitoes bred in the shaded, damp yards, German roaches and outdoor 'palmetto bugs,' and roof rats and mice that move from the tree line into attics as nights cool. Any of the local pros in our directory can take care of them." },
    { q: 'Mountain Park is tiny — can I still get a local pest control pro?', a: "Absolutely. Mountain Park is one of Cherokee County's smallest cities, but our directory connects you with licensed exterminators who cover the whole county, including this northeastern corner of it. You get the same local, property-specific service and the same free quote a larger town would — just call and we'll route you to the pro serving the Mountain Park area." },
    { q: 'Do the wooded lots and tree cover in Mountain Park attract more pests?', a: "They can. A dense tree canopy, leaf litter, mulch, and shaded ground hold the moisture and harborage that termites, ants, roof rats, and 'palmetto bugs' rely on, and overhanging limbs give climbing pests a path to the roofline. Trimming vegetation back from the house and keeping a treated perimeter between the tree line and the foundation is a big part of controlling pests on a wooded Mountain Park lot." },
    { q: 'Which areas around Mountain Park do you serve?', a: "Beyond Mountain Park itself, the pros in our directory serve the neighboring Cherokee County communities — including Canton, Holly Springs, and Hickory Flat. Reach out and we'll match you with a licensed exterminator who covers your corner of the county." },
    { q: 'Can I get same-day or emergency pest control in Mountain Park?', a: "Frequently, yes. A number of the exterminators serving Mountain Park keep room for same-day and emergency calls when something can't wait — an active wasp nest, rodents loose in the house, or roaches that turned up overnight. Give us a call and we'll point you to a Cherokee County pro who can respond fast." },
  ],

  finalCtaHeading: 'Get Your Free Mountain Park Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six. No `pestPages` map exists for Mountain Park, so every card
  // renders as a non-clickable <div> (no spokes built). Blurbs written fresh for
  // Mountain Park — no reuse from Canton, Woodstock, Holly Springs, Ball Ground,
  // or Waleska. Fire ants, wasps, spiders, etc. live under General Pest Control
  // (no seventh card).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/mountain-park/termite-control/',
      blurb: "Cherokee County is one of the country's heaviest termite zones, and Mountain Park's wooded lots add moisture and wood-to-soil contact through mulch beds, leaf litter, and decks. Eastern subterranean termites do nearly all the damage here — control means a soil-applied barrier or in-ground bait, plus the Georgia termite letter at closing time." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/mountain-park/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture, then spread fast once they're inside. A whole-room heat treatment or a staged residual program wipes out eggs, nymphs, and adults alike, with return visits to verify the job held." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/mountain-park/cockroach-control/',
      blurb: "German roaches breeding indoors, plus the big 'palmetto bugs' that shelter in Mountain Park's leaf litter, mulch, and woodpiles before slipping inside. Targeted gel bait, crack-and-crevice treatment, and sanitation advice send them packing for good." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/mountain-park/mosquito-control/',
      blurb: "Greater Atlanta consistently rates among the worst U.S. metros for mosquitoes (Orkin's 2025 top five), and Mountain Park's shaded, tree-canopied yards give them cool cover and standing water to breed away from the urban core. A barrier spray on the resting vegetation plus larvicide in the standing water keeps the warm-season swarm down." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/mountain-park/rodent-control/',
      blurb: "As nights cool, roof rats, Norway rats, and house mice cross from the tree line into attics and walls. Strategic trapping, exclusion work that closes off every entry point, and follow-up monitoring keep them out." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/mountain-park/pest-control/',
      blurb: "Fire ants in the lawn, spiders in the garage, wasps under the eaves — one recurring quarterly plan covers the everyday pests a quiet, wooded Mountain Park home faces, year-round." },
  ],
};
