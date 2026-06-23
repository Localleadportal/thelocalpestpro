'use strict';

// ── Milton, GA — city hub ────────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its FOUR SIBLING
// FULTON cities Roswell, Alpharetta, Sandy Springs, and Johns Creek — the five
// Fulton hubs must each read clearly differently). The siblings already own their
// angles:
//   • Roswell       → the Chattahoochee corridor, wooded lots, older neighborhoods.
//   • Alpharetta    → the GA 400 tech corridor, Avalon, NEW-construction suburb.
//   • Sandy Springs → the I-285 interchange, vertical MULTIFAMILY / high-rise density.
//   • Johns Creek   → master-planned subdivisions and golf-course communities.
// Milton leads on ITS OWN verified distinctive: an affluent NORTH-Fulton city that
// has deliberately kept a SEMI-RURAL, EQUESTRIAN character — horse farms, large
// estate and pasture lots, low-density estate residential, and a preserved
// agricultural feel — so its pest pressure drifts in from surrounding pasture,
// woods, and open land (rodents from barns and outbuildings, ticks off pasture and
// wildlife, mosquitoes from farm ponds and creeks). Targets local intent ("pest
// control milton", "milton exterminator", "milton ga pest control"). "Milton" is a
// common place name, so it is paired with GA throughout. Rendered by
// views/city.ejs (hub) at /georgia/milton/.
//
// `county` drives the LeadPortal contractor lookup — Milton is in Fulton County,
// so an assigned Fulton County 'Pest Control' contractor shows on this page (name
// + phone + PestControlService schema, with license + address taken ONLY from the
// real contractor record); until one is assigned the page falls back to the shared
// (844) directory line and a Service schema node. The contractor is pulled
// server-side in server.js via getContractor(state.name, city.county,
// SITE.SERVICE_TYPE) — nothing is hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for Milton yet, so `pestPages` is
// intentionally empty. The six canonical hub cards below point at the future spoke
// URLs and render as NON-clickable <div>s until those pages exist (see the
// city.ejs pestCardsHtml comment) — no soft 404s. All pest CATEGORIES (termite,
// mosquito, rodent, bed bug, fire ant, roach, wasp/hornet, tick) are covered as
// on-page sections / prose.
//
// APPROVED LOCAL FACTS ONLY (verified; no street names, named subdivisions or
// farms, schools, ordinances, or invented stats): city in NORTH Fulton County,
// affluent; ~41,000 residents; one of metro Atlanta's newer cities, known for a
// deliberately semi-rural, equestrian character — horse farms, large estate and
// pasture lots, low-density estate residential, and a preserved rural/agricultural
// feel that sets it apart from its denser Fulton neighbors; ZIPs 30004/30075;
// area codes 770/678/470; neighbors Alpharetta & Roswell (Fulton), with Cherokee
// County (Woodstock) to the west and Forsyth County (Cumming) to the east; humid
// subtropical climate; eastern subterranean termites dominant statewide (NO
// Formosan local claim); red imported fire ants present statewide; metro Atlanta
// is a top-five U.S. mosquito metro (Orkin 2025); GA Dept. of Agriculture
// Structural Pest Control Commission regulates and licenses. Trust signals are
// CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast response) — no
// specific company, rating, or review is referenced.

module.exports = {
  name: 'Milton',
  slug: 'milton',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30004', '30075'],
  // Nearby communities we also serve — NOT Milton subdivisions. Alpharetta and
  // Roswell are Fulton neighbors; Woodstock (Cherokee, to the west) and Cumming
  // (Forsyth, to the east) sit just over the county lines, so the section is
  // framed as nearby metro-Atlanta areas, not "Fulton County communities." All
  // four have built hubs and auto-link.
  neighborhoods: ['Alpharetta', 'Roswell', 'Cumming', 'Woodstock'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Milton its own 1200×630 card later, drop /images/milton-og.jpg in public/ and
  // change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Milton, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Milton, GA pest control for homes, large lots & horse farms — termite, mosquito, rodent & tick control. Call a licensed local exterminator for a free quote.",
  h1: 'Pest Control in Milton, GA',
  heroSub: "Milton keeps a semi-rural, equestrian feel that sets it apart from the rest of North Fulton — horse farms, wooded acreage, and large estate lots where pests drift in off the surrounding pasture and open land. Get paired with a licensed Milton exterminator who understands properties like these — fast, and with a free, no-obligation quote.",

  overviewHeading: "Pest Control for Milton's Estates, Acreage & Horse Country",
  overview: [
    "With roughly 41,000 residents spread across some of North Fulton's largest lots, Milton is one of metro Atlanta's newer cities — and one that has worked hard to hold onto its rural, equestrian roots. Horse farms, pastures, wooded estate properties, and low-density residential are the norm rather than the exception, and that open, agricultural setting shapes the pest picture in ways the denser Fulton suburbs never face. When a home sits on acreage bordered by fields and woods, pests don't just come from the yard — they move in from the surrounding land.",
    "That's the through-line for Milton. Rodents travel from barns, stables, and outbuildings; ticks ride in off tall grass, pasture edges, and the deer and wildlife that cross from neighboring woods; and mosquitoes breed in farm ponds, creeks, and the low, damp spots that dot large lots. Tie it to the region's humid subtropical climate — long, muggy summers and mild winters — and most pests here stay active close to year-round, which is why a recurring plan that treats the whole property, outbuildings and perimeter included, tends to beat reacting to one problem at a time. The licensed, insured pros in our directory quote your specific Milton property — house, grounds, and structures — for free before any work begins.",
  ],

  sections: [
    {
      heading: "How Does Milton's Rural Character Shape Its Pest Problems?",
      paras: [
        "Georgia ranks among the worst termite states in the nation, and Milton sits right in that zone. Eastern subterranean termites are the species to watch — they tunnel up from the soil and run mud tubes into sill plates, joists, and framing, and the woodpiles, split-rail fences, decks, sheds, and barns common on large Milton lots only add more wood-to-ground contact for them to exploit. Mild North Fulton winters mean the colonies rarely go dormant, so they keep feeding all year, and because a homeowners policy almost never covers termite damage, ongoing protection costs a fraction of the repair bill.",
        "What really sets Milton apart, though, is everything that arrives off the open land. Rodents are a bigger story here than in the tighter suburbs: mice and rats nest in barns, stables, tack and feed rooms, and detached garages, then push toward the house as the fields cool. Ticks are a genuine concern too, carried in on the tall grass, pasture edges, and wooded property lines where deer and other wildlife travel. Add the mosquitoes breeding in farm ponds and creeks, the red imported fire ants mounding across pastures and lawns, the roaches working in from woodpiles and damp crawlspaces, and the bed bugs that hitch home from travel, and most Milton properties are better served by a steady, whole-property barrier than by chasing one pest at a time.",
      ],
    },
    {
      heading: 'What Does the Pest Calendar Look Like in Milton?',
      paras: [
        "Pest pressure rises and falls through the year on Milton's larger lots. Here's the rough rhythm local property owners see, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid afternoons — winged swarmers or little drifts of shed wings near a window or outbuilding are the tell that a colony is active. Ants get moving, carpenter bees bore into deck rails, fences, and barn trim, and as the ground warms the first ticks climb the pasture grass while mosquitoes start breeding in farm ponds. The best stretch to get protection in place before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "The peak. Ticks are at their most active along Milton's wooded edges and tall grass, mosquitoes work the ponds and creeks across acreage, and fire ant mounds spread through pastures and lawns. Wasps, hornets, and yellowjackets build nests under eaves, decks, and barn rafters, while fleas and ticks ride in on pets and livestock. Roaches push indoors to escape the heat." },
        { name: 'Fall (Sep–Nov)', text: "As the fields cool, mice and roof and Norway rats leave the pasture and outbuildings for the warmth of the house — this is when scratching starts in Milton attics, garages, and crawlspaces. Yellowjacket colonies turn aggressive as they break apart, and bed bugs travel home with fall and holiday trips. A smart window to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Milton's mild winters never fully switch pests off. Mice and German roaches stay active indoors, often after moving in from the barn or shed, and subterranean termites keep feeding underground no matter the date. Recurring service holds the barrier through the cooler months so spring doesn't open with a fresh surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Milton',
      paras: [
        "The local pros in our directory cover Milton across its ZIP codes and the neighboring communities just over its borders. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Milton Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "A single call reaches a licensed, insured exterminator covering Milton and the surrounding Fulton County area — homes, acreage, and outbuildings alike, with no obligation and nothing owed for the quote." },
        { name: '2. Get a local inspection', text: "A technician walks the home, grounds, and structures, pins down the pest and how far it has spread, and lays out the right plan for your Milton property — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs treat, seal, and prevent with EPA-registered products applied at label rates, including pet- and family-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Milton',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Milton property owners with licensed, insured local exterminators across Fulton County. Call and you reach the pest control pro assigned to the Milton area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific property. Every pro we connect you with holds a license under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Milton, GA?', a: "On Milton's larger lots the frequent offenders are subterranean termites (Georgia carries heavy termite pressure), rodents that move in from barns, outbuildings, and surrounding fields, ticks carried off pasture and wooded property lines, mosquitoes bred in farm ponds and creeks, red imported fire ants across pastures and lawns, roaches from woodpiles and crawlspaces, and bed bugs that hitch home from travel. The local pros in our directory treat every one of them." },
    { q: 'Why are mosquitoes a problem in Milton?', a: "Milton's rural, large-lot setting gives mosquitoes plenty to work with — farm ponds, creeks, livestock water, and the low, damp pockets scattered across wooded acreage all hold the standing water they breed in, while the tree cover gives them shade to rest in by day. Metro Atlanta also ranks among the worst U.S. metros for them (top five on Orkin's 2025 list). A licensed pro targets the breeding water and the resting areas together, which holds up far better than spraying yourself before heading out to the barn or yard." },
    { q: 'Do larger lots, barns, and horse farms in Milton need different pest control?', a: "Usually, yes. Acreage changes the job: rodents nest in barns, stables, tack and feed rooms, and detached garages before they ever reach the house; ticks build up along pasture edges and wooded lines where deer and wildlife travel; and a bigger footprint means more perimeter and more outbuildings to protect. A local pro experienced with rural and equestrian properties treats the structures and the property lines, not just the house, and sets a recurring barrier sized to the land. Call and we'll connect you with an exterminator who works acreage like yours." },
    { q: 'Do you serve the areas around Milton too?', a: "Yes. Beyond Milton's 30004 and 30075 ZIP codes, the pros in our directory cover the bordering communities, including Alpharetta and Roswell in Fulton County, Woodstock in Cherokee County to the west, and Cumming in Forsyth County to the east. Call and we'll route you to a licensed exterminator working your part of the metro." },
    { q: 'Are Milton pest control companies licensed?', a: "They should be. Structural pest control in Georgia falls under the Department of Agriculture and its Structural Pest Control Commission, which licenses the companies and certifies the applicators who treat your property. Every pro we list is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Milton?', a: "Frequently, yes — many of the local pros serving Milton keep room for same-day and emergency visits when something can't wait, whether it's a wasp nest by the barn, a sudden rodent problem, or stinging insects near the house. Call and we'll get you to a Fulton County exterminator who can respond quickly." },
    { q: 'Are pest treatments safe for kids and pets?', a: "Yes. Milton pros apply EPA-registered products at label rates and carry family- and pet-safe or low-toxicity options — worth flagging on a property with horses, livestock, or barn cats, so let your technician know what's on the land. Most material goes around the exterior, entry points, and cracks and crevices rather than across living areas, with only a short re-entry window, usually until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Milton Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Milton per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // render as non-clickable <div>s until each page is authored — the same staged
  // build pattern the Roswell, Alpharetta, Sandy Springs, and Johns Creek hubs
  // used. Blurbs are written fresh for Milton (distinct from all four sibling hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/milton/termite-control/',
      blurb: "Eastern subterranean termites move up through the soil into Milton homes, and Georgia ranks among the worst termite states in the nation — the woodpiles, fences, decks, and outbuildings common on large lots only add more wood-to-ground contact. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/milton/bed-bug-treatment/',
      blurb: "Bed bugs travel home from hotels, trips, and secondhand furniture and settle into Milton bedrooms long before they're spotted. Whole-room heat or a targeted residual program kills every life stage, with follow-up checks." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/milton/cockroach-control/',
      blurb: "German roaches indoors and the large outdoor roaches that work in from woodpiles, mulch, and the damp crawlspaces and outbuildings on Milton properties. Cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/milton/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Milton's farm ponds, creeks, and low, wet spots across wooded acreage give them plenty of standing water. Yard and property-line barrier sprays plus larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/milton/rodent-control/',
      blurb: "Mice and roof and Norway rats work in from Milton's pastures, woods, barns, and outbuildings as the weather cools, heading for attics, garages, and crawlspaces. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/milton/pest-control/',
      blurb: "Red imported fire ants mound up across Milton lawns and pastures, alongside spiders, wasps, hornets, ticks, and nuisance ants pushing in from the surrounding open land. One recurring quarterly plan covers them all, year-round." },
  ],

  // No Milton per-pest spoke pages have been authored yet — keep this empty so the
  // hub renders as a HUB only. Add entries here one at a time (same shape as the
  // Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
