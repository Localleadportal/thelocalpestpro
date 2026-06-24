'use strict';

// ── East Point, GA — city hub ────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its FIVE SIBLING
// FULTON cities Roswell, Alpharetta, Sandy Springs, Johns Creek, and Milton — the
// six Fulton hubs must each read clearly differently). The siblings already own
// their angles, and CRITICALLY they are ALL affluent NORTH-Fulton suburbs:
//   • Roswell       → the Chattahoochee corridor, wooded lots, older neighborhoods.
//   • Alpharetta    → the GA 400 tech corridor, Avalon, NEW-construction suburb.
//   • Sandy Springs → the I-285 interchange, vertical MULTIFAMILY / high-rise density.
//   • Johns Creek   → master-planned subdivisions and golf-course communities.
//   • Milton        → semi-rural / equestrian / large estate & pasture lots.
// East Point leads on a DIFFERENT IDENTITY ENTIRELY: a SOUTH-Fulton city just
// southwest of downtown Atlanta near the airport (Hartsfield-Jackson), with an
// OLDER, intown-adjacent, more urban/working-class character — early- and
// mid-20th-century streetcar-suburb housing (Craftsman bungalows, cottages,
// compact brick homes) on close-set lots. THIN-SPECIFICS RULE: where city
// distinctives are thin, lean on the South-Fulton / intown-adjacent / older-housing
// regional framing — no fabricated streets, subdivisions, stats, or ordinances.
// "East Point" is a common place name, so it is paired with GA throughout.
// Targets local intent ("pest control east point", "east point exterminator",
// "east point ga pest control"). Rendered by views/city.ejs (hub) at
// /georgia/east-point/.
//
// `county` drives the LeadPortal contractor lookup — East Point is in Fulton
// County, so an assigned Fulton County 'Pest Control' contractor shows on this
// page (name + phone + PestControlService schema, with license + address taken
// ONLY from the real contractor record — address never synthesized); until one is
// assigned the page falls back to the shared (844) directory line and a Service
// schema node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for East Point yet, so `pestPages`
// is intentionally empty. The six canonical hub cards below point at the future
// spoke URLs and render as NON-clickable <div>s until those pages exist (see the
// city.ejs pestCardsHtml comment) — no soft 404s. All pest CATEGORIES (termite,
// mosquito, rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page
// sections / prose.
//
// APPROVED LOCAL FACTS ONLY (verified; no street names, named subdivisions or
// historic districts, schools, ordinances, or invented stats): city in SOUTH
// FULTON County, just southwest of downtown Atlanta and near Hartsfield-Jackson
// Atlanta International Airport; ~38,000 residents; an older, intown-adjacent,
// more urban/working-class city that grew as a railroad/streetcar suburb, with
// early- and mid-20th-century housing (Craftsman bungalows, cottages, compact
// brick homes) on close-set lots; denser and more urban than the affluent North
// Fulton suburbs; ZIPs 30344/30349; area codes 404/470/678; neighbors College
// Park, Hapeville, Union City, the city of South Fulton, and Atlanta (all Fulton
// County); humid subtropical climate; eastern subterranean termites dominant
// statewide (NO Formosan local claim); red imported fire ants present statewide;
// metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025); GA Dept. of
// Agriculture Structural Pest Control Commission regulates and licenses. Trust
// signals are CONTRACTOR-AGNOSTIC (licensed/insured, local GA service, fast
// response) — no specific company, rating, or review is referenced.

module.exports = {
  name: 'East Point',
  slug: 'east-point',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30344', '30349'],
  // Nearby Fulton County communities we also serve — NOT East Point subdivisions.
  // (Service-area names only; all are real Fulton County neighbors of East Point
  // on the south/southwest side of Atlanta.)
  neighborhoods: ['College Park', 'Hapeville', 'Union City', 'South Fulton', 'Atlanta'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // East Point its own 1200×630 card later, drop /images/east-point-og.jpg in
  // public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control East Point, GA — Exterminator | The Local Pest Pro',
  metaDesc: "East Point, GA pest control for older, intown-adjacent homes — termite, mosquito, rodent & bed bug control. Call a local exterminator for a free quote.",
  h1: 'Pest Control in East Point, GA',
  heroSub: "East Point sits just southwest of downtown Atlanta in South Fulton, near the airport — an older, intown-adjacent city of early-20th-century bungalows and close-set neighborhoods that feel a world apart from the affluent suburbs up north. That aging housing stock and dense, urban setting keep termites, roaches, rodents, and mosquitoes working close to year-round. Get matched with a licensed East Point exterminator who knows these older neighborhoods — fast, and with a free, no-obligation quote.",

  overviewHeading: "Pest Control for East Point's Older, Intown-Adjacent Homes",
  overview: [
    "East Point grew up as a railroad and streetcar suburb on the southwest side of Atlanta, and that history still shows in its housing. Much of the city is made up of early- and mid-20th-century homes — Craftsman bungalows, cottages, and compact brick houses on close-set lots — packed into walkable, intown-adjacent neighborhoods just minutes from downtown and the airport. It's a denser, more urban, more working-class place than the polished North Fulton suburbs, and its pest pressure follows from that: decades-old wood, crawlspaces, and settled foundations give termites and rodents a way in, while close spacing lets roaches and bed bugs pass between neighboring homes and rentals.",
    "The climate seals the deal. Sitting in South Fulton just below Atlanta, East Point gets the same long, humid summers and mild winters as the rest of the metro, so the local pest population rarely powers down for a real off-season — which is why a recurring plan suited to an older home generally beats a one-time spray. Across 30344, 30349, and the surrounding South Fulton neighborhoods, the licensed, insured pros in our directory quote your specific East Point property for free before any work begins.",
  ],

  sections: [
    {
      heading: "Why Do East Point's Older Homes Face Steady Pest Pressure?",
      paras: [
        "Georgia sits inside one of the heaviest termite belts in the country, and East Point is right in it. Eastern subterranean termites are the species that matters here — they forage up from the soil and run mud tubes into sill plates, joists, and framing, and the city's older homes give them plenty to work with: aging wood, crawlspaces, and decades of settling and moisture along the foundation. Because winters this close to Atlanta stay mild, the colonies rarely go dormant and feed straight through the year, and since homeowners insurance almost never covers termite damage, ongoing protection costs far less than the repairs.",
        "But termites are just where it begins. Red imported fire ants are present statewide and mound up across East Point yards and parks. Mosquitoes are a metro-wide headache — Orkin's 2025 list put metro Atlanta among the five worst U.S. metros for them — and the mature shade trees, clogged gutters, and low, damp spots common to older intown lots give them standing water to breed in and cover to rest in. Add the German roaches and 'palmetto bugs' that thrive in older kitchens, crawlspaces, and close-set housing, the roof rats and Norway rats that move through dense, tree-lined neighborhoods, and the bed bugs that travel between rentals and homes, and most East Point properties do better with a steady professional barrier than with reacting one problem at a time.",
      ],
    },
    {
      heading: 'How Does Pest Activity Shift Through the Year in East Point?',
      paras: [
        "Pest pressure rises and falls across the year in East Point. Here's the rough pattern local homeowners and renters run into, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid days — winged swarmers, or little piles of shed wings on a windowsill, are the classic sign a colony is active under an older home. Ants find their way indoors, carpenter bees drill into porch posts and trim, and the first warm rains start mosquitoes breeding in gutters and shaded low spots. The right time to get protection set before pressure climbs." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes turn relentless across the close-in metro, fire ant mounds spread through yards and parks, and wasps, hornets, and yellowjackets build nests under eaves and porches. Roaches push indoors and between close-set homes to escape the heat, while fleas and ticks hit their stride on pets and in shaded yards." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice hunt for a warm place to overwinter, and in East Point's older homes that means attics, crawlspaces, and wall voids with long-settled gaps. Yellowjacket colonies turn aggressive as they break apart, and bed bugs ride home from fall and holiday travel. A good time to close up entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "East Point's mild winters never fully shut pests down. German roaches and mice stay active indoors, moving through older, close-set housing, and subterranean termites keep feeding underground no matter the date. Recurring service keeps that barrier up through the cool months so the warm season doesn't open with a surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around East Point',
      paras: [
        "Our directory's pros work East Point and the South Fulton communities right around it. If one of these is your area, we can line you up with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How East Point Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "One call puts you in touch with a licensed, insured exterminator serving East Point and nearby South Fulton — no obligation, and the quote costs nothing." },
        { name: '2. Get a local inspection', text: "A technician walks the home — older houses, crawlspaces, and all — pins down the pest and how far it has spread, and lays out the right plan for your East Point property, one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs treat, seal, and prevent with EPA-registered products used at label rates, including pet- and family-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in East Point',
      paras: [
        "The Local Pest Pro is a directory — not a single company — connecting East Point homeowners and renters with licensed, insured local exterminators across Fulton County. Call and you reach the pest control pro assigned to the East Point area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific address. Every pro in our network is licensed through the Georgia Department of Agriculture's Structural Pest Control Commission and uses EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in East Point, GA?', a: "On East Point's older, close-set lots the regulars are subterranean termites (Georgia carries heavy termite pressure), red imported fire ants in yards and parks, German roaches and outdoor 'palmetto bugs' that thrive in aging homes and crawlspaces, mosquitoes bred in gutters and shaded low spots, roof rats and Norway rats moving through dense, tree-lined blocks, and bed bugs that travel between homes and rentals. The pros in our directory treat every one." },
    { q: 'Why are mosquitoes so bad in East Point?', a: "East Point's older, intown-adjacent lots come with mature shade trees, aging gutters, and the low, damp pockets that collect water around early-20th-century homes — exactly what mosquitoes need to breed and rest. Metro Atlanta consistently ranks among the country's worst metros for mosquitoes, too — top five on Orkin's 2025 list. A licensed pro hits the breeding water and the shaded resting spots together, which works far better than fogging yourself on the way out the door." },
    { q: 'Do older East Point homes need different pest control?', a: "Usually, yes. The early- and mid-20th-century bungalows and cottages that fill much of East Point have had decades to develop the settled cracks, worn seals, crawlspace gaps, and wood-to-ground contact that termites, roaches, and rodents exploit, so exclusion and entry-point work carry real weight here. A local pro inspects an older home's foundation, crawlspace, and perimeter, then builds a plan around sealing it up and holding a barrier — which fits this housing better than a one-time spray." },
    { q: 'Do you serve the areas around East Point too?', a: "Yes. Beyond East Point's 30344 and 30349 ZIP codes, the pros in our directory cover the surrounding South Fulton communities, including College Park, Hapeville, Union City, the city of South Fulton, and the southwest side of Atlanta. Call and we'll line you up with a licensed exterminator covering your corner of South Fulton." },
    { q: 'Are East Point pest control companies licensed?', a: "They should be. In Georgia, structural pest control is overseen by the Department of Agriculture's Structural Pest Control Commission, which issues company licenses and certifies the applicators who treat your home. Every pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in East Point?', a: "Frequently, yes — many of the local pros serving East Point keep room for same-day and emergency calls when something can't wait, like a wasp nest by the door, a sudden roach problem, or rodents in the house. Call and we'll connect you with a Fulton County exterminator who can get out fast." },
    { q: 'Are pest treatments safe for kids and pets?', a: "Yes. East Point pros apply EPA-registered products at label rates and carry family- and pet-safe or low-toxicity options, placing most material around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will point out any short re-entry window — usually only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free East Point Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future East Point per-pest spoke
  // URL; because no spoke pages are built yet (pestPages is empty below), these
  // cards render as non-clickable <div>s until each page is authored — the same
  // staged build pattern the Roswell, Alpharetta, Sandy Springs, Johns Creek, and
  // Milton hubs used. Blurbs are written fresh for East Point (distinct from all
  // five sibling hubs).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/east-point/termite-control/',
      blurb: "Eastern subterranean termites work up from the soil into East Point's older homes, where aging wood, crawlspaces, and settled foundations give them easy access — and Georgia sits in one of the country's heaviest termite belts. Liquid soil treatments, in-ground bait systems, and the Georgia termite letter when you sell." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/east-point/bed-bug-treatment/',
      blurb: "Bed bugs ride in on travel and secondhand furniture, then move between East Point's close-set homes, apartments, and rentals. Whole-room heat, or a targeted residual program with follow-up checks, clears every life stage." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/east-point/cockroach-control/',
      blurb: "German roaches in older kitchens, baths, and crawlspaces, plus the big 'palmetto bugs' that work in from mulch and damp foundations around aging homes. Identified, cleared out, and kept from coming back, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/east-point/mosquito-control/',
      blurb: "Orkin ranks metro Atlanta among the five worst U.S. mosquito metros, and East Point's shade trees, aging gutters, and damp low spots keep them breeding. Barrier sprays on resting areas plus larviciding of standing water across the warm months." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/east-point/rodent-control/',
      blurb: "As East Point nights cool, roof rats, Norway rats, and house mice push into the attics, crawlspaces, and wall voids of older, close-set homes. Trapping to bring the numbers down, exclusion that seals the gaps for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/east-point/pest-control/',
      blurb: "Red imported fire ants turn up across East Point yards and parks, along with spiders, wasps, hornets, and nuisance ants. A single recurring quarterly plan keeps the whole lot in check all year." },
  ],

  // No East Point per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
