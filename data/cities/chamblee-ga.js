'use strict';

// ── Chamblee, GA — city hub ──────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or the sibling DeKalb / metro-Atlanta city pages).
// This is the city of Chamblee in northeast DeKalb County, metro Atlanta.
// Targets local intent ("pest control Chamblee", "Chamblee exterminator",
// "Chamblee GA pest control"). Rendered by views/city.ejs (hub) at
// /georgia/chamblee/.
//
// DISTINCT FROM ITS DeKalb SIBLINGS (sentence-level, zero reuse):
//   • Dunwoody owns the Perimeter Center commercial + incorporated-2008 angle.
//   • Brookhaven owns the intown-adjacent / north-of-Buckhead / Peachtree-corridor
//     older-homes-plus-newer-infill angle.
//   • Decatur owns the historic-1823 / walkable-downtown-square / craftsman-
//     bungalow angle.
//   • Tucker owns the mid-century post-war suburban + traditional Main Street
//     corridor angle.
//   • Stone Mountain owns the park-boundary / granite-outcrop / wildland-edge angle.
//   • Chamblee leads on its OWN verified distinctive: a NE-DeKalb city built around
//     a revitalized historic downtown (long known for its antique district), a
//     MARTA rail station that has drawn a wave of new mixed-use / apartment
//     construction (transit-oriented redevelopment), and the dense international
//     restaurants and markets of the BUFORD HIGHWAY corridor. The local angle is
//     revitalized-downtown + transit-oriented-redevelopment + Buford-Highway
//     international-commercial mix (older homes/buildings AND new dense
//     construction AND heavy food-service pressure) — NOT the single-axis framings
//     the siblings already use.
//
// `county` drives the LeadPortal contractor lookup — Chamblee is in DeKalb County
// (the SAME lookup key as Dunwoody, Brookhaven, Decatur, Tucker, and Stone
// Mountain), so an assigned DeKalb County 'Pest Control' contractor shows on this
// page (name + phone + PestControlService schema, with license + address taken
// ONLY from the real contractor record — never synthesized from the page's city);
// until one is assigned the page falls back to the shared (844) line and a Service
// schema node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is hardcoded
// here. The lookup tries both "DeKalb County" and "DeKalb" (see lib/contractor.js).
//
// HUB ONLY: no per-pest spoke pages are built for Chamblee yet, so `pestPages` is
// intentionally empty. The six canonical hub cards below link to the future spoke
// URLs and, because no spoke exists, render as NON-clickable <div>s that 404
// cleanly until each page is authored (the established staged-build pattern — see
// the city.ejs pestCardsHtml comment). All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no invented streets, subdivisions, parks,
// schools, ordinances, population counts, or stats): the city of Chamblee sits in
// northeast DeKalb County, metro Atlanta; it has a revitalized historic downtown
// long known for its antique district; a MARTA rail station has drawn a wave of
// new mixed-use and apartment (transit-oriented) construction; the international
// restaurant-and-market Buford Highway corridor runs through the city; the housing
// mixes older established homes with newer dense redevelopment; ZIPs 30341 and
// 30360; nearby DeKalb communities Brookhaven, Doraville, Dunwoody, Tucker; humid
// subtropical climate with long summers and mild winters; eastern subterranean
// termites are the dominant species statewide (NO Formosan local-presence claim is
// made for Chamblee/DeKalb); red imported fire ants present statewide; metro
// Atlanta is a top-five U.S. mosquito metro (Orkin 2025); structural pest control
// is regulated and licensed by the Georgia Dept. of Agriculture's Structural Pest
// Control Commission. Trust signals are CONTRACTOR-AGNOSTIC (licensed/insured,
// local GA service, fast response) — no specific company, rating, or review is
// referenced.

module.exports = {
  name: 'Chamblee',
  slug: 'chamblee',
  county: 'DeKalb County',
  region: 'GA',
  zips: ['30341', '30360'],
  // Nearby DeKalb County communities we also serve — NOT Chamblee subdivisions.
  // (Service-area names only; all are real DeKalb County neighbors of Chamblee.
  // Brookhaven, Dunwoody, and Tucker have their own built hubs, so city.ejs
  // auto-renders them as real links; Doraville renders as a plain badge.)
  neighborhoods: ['Brookhaven', 'Doraville', 'Dunwoody', 'Tucker'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Chamblee its own 1200×630 card later, drop /images/chamblee-og.jpg in public/
  // and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Chamblee, GA — The Local Pest Pro Exterminators',
  metaDesc: "Pest control in Chamblee, GA & DeKalb County — termite, mosquito, rodent & roach treatment for homes and Buford Highway businesses. Book a free quote today.",
  h1: 'Pest Control in Chamblee, GA',
  heroSub: "In northeast DeKalb County, Chamblee blends a revitalized antique-district downtown and a MARTA-served wave of new mixed-use construction with the international restaurants and markets of the Buford Highway corridor — a mix that gives pests both older buildings to exploit and busy kitchens to raid. With metro Atlanta's long, humid warm season behind them, termites, roaches, rodents, and mosquitoes stay active most of the year. Reach a licensed local Chamblee exterminator who knows the area, fast — with a free quote up front.",

  overviewHeading: 'Local Pest Control for Chamblee, GA — Old Downtown to Buford Highway',
  overview: [
    "Chamblee packs several different Chamblees into one northeast DeKalb city. There's the revitalized historic downtown, long known for its antique district; the wave of new apartments and mixed-use construction that has risen around the city's MARTA rail station; and the international restaurants and markets strung along the Buford Highway corridor. For pest control, that variety is the whole point — older homes and commercial buildings offer the settled cracks and gaps pests exploit, while new, densely built construction and busy food-service kitchens create fresh pressure of their own, often just blocks apart.",
    "The common thread is metro Atlanta's climate. Long, humid summers and short, mild winters give pests in Chamblee no real off-season, so termites, mosquitoes, roaches, and rodents stay in play through most of the calendar and a recurring, locally-tuned plan generally outperforms a single treatment. Whether you own an older home near downtown, rent in a new building by the station, or run a kitchen on Buford Highway, the licensed, insured pros in our directory will inspect your specific property and quote it for free before any work begins.",
  ],

  sections: [
    {
      heading: 'What Keeps Pests Active Around Chamblee Nearly Year-Round?',
      paras: [
        "The costliest pest threat in Chamblee runs underground. Eastern subterranean termites are the dominant wood-destroying species in Georgia, foraging up out of the soil into sills, joists, and framing wherever they find moisture and an opening — and they don't discriminate between a decades-old Chamblee house and the slab of a brand-new mixed-use building. Mild winters keep the colonies feeding straight through the cold rather than going dormant, so the damage advances all year, and because standard homeowners insurance won't cover termite repairs, a maintained barrier is far cheaper than the alternative.",
        "Aboveground, the pressure is just as varied. Red imported fire ants are established across Georgia and stake out the sunny lawns and landscaped strips around homes and commercial lots. Mosquitoes are a metro-wide problem — the Atlanta area lands among the nation's five worst on Orkin's 2025 ranking — and Chamblee's shaded yards, plus the disturbed ground and temporary standing water that come with active redevelopment, hand them plenty of places to breed. Add the roaches and 'palmetto bugs' that thrive in the humidity and the roof rats and mice that slip indoors as nights cool, and most Chamblee properties do better under a steady professional barrier than scrambling pest by pest.",
      ],
    },
    {
      heading: "Pest Control for Chamblee's Buford Highway Restaurants and Markets",
      paras: [
        "Few corridors in metro Atlanta are as densely commercial — or as food-focused — as Buford Highway, the international restaurant and market strip that runs through Chamblee. For the restaurants, groceries, bakeries, and markets packed along it, pests are a direct business risk: a roach in a dining room, a rodent in a dry-storage room, or flies around a prep line can trigger a failed health inspection and drive away the regulars a food business depends on. Older buildings, shared walls, busy kitchens, and constant deliveries give pests steady opportunities, which is why dependable control on the corridor runs on scheduled, preventive service instead of last-minute call-outs.",
        "It isn't only Buford Highway. Chamblee's revitalized downtown and its MARTA-area redevelopment have layered new restaurants, retail, and mixed-use space onto an older commercial core, and the directory's pros service all of it — food service, groceries and markets, retail, salons, offices, and multi-tenant buildings — with recurring, after-hours-friendly visits, the records health inspectors expect, and Integrated Pest Management aimed at the kitchens, dumpster areas, and utility chases where commercial pests take hold. One call connects you with a licensed exterminator who can shape a program around the way your business runs.",
      ],
    },
    {
      heading: 'Chamblee’s Pest Calendar, Season by Season',
      paras: [
        "Pest pressure moves through the year in Chamblee. Here's the rough rhythm local homeowners and business owners can expect, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Spring is swarm season. The first warm, humid afternoons send subterranean termites out in winged swarms, and finding them — or a scatter of discarded wings on a sill — usually means a colony is already established nearby. Ants start foraging indoors, carpenter bees target wood trim and decks, and warming rainwater begins growing the year's first mosquitoes. The smart time to get ahead of the season." },
        { name: 'Summer (Jun–Aug)', text: "Summer is the peak. Mosquitoes hit full force across the metro and linger in shaded Chamblee yards, fire ants throw up mounds across sunny turf, wasps and yellowjackets fill out nests under eaves and signage, and roaches crowd into kitchens — homes and Buford Highway restaurants alike — to escape the heat. Fleas and ticks ride pets and shaded landscaping." },
        { name: 'Fall (Sep–Nov)', text: "Fall sends rodents indoors. As temperatures drop, roof rats, Norway rats, and house mice look for winter shelter and test older foundations and new construction for openings — the season attic and wall scratching tends to begin. Yellowjackets get touchy as colonies wind down, and bed bugs catch a ride home on fall travel. Time to close up entry points." },
        { name: 'Winter (Dec–Feb)', text: "Winter never fully stops here. Chamblee's mild cold season keeps German roaches and mice active indoors while subterranean termites feed underground without pause. Staying on a recurring plan keeps the barrier in place through the quiet months so warm weather doesn't arrive with a backlog." },
      ],
    },
    {
      heading: 'DeKalb Communities We Cover Near Chamblee',
      paras: [
        "The local pros in our directory cover Chamblee across its ZIP codes and the neighboring DeKalb County communities. Live or run a business in one of the areas below? We can pair you with a licensed local exterminator there as well:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'Getting Started with Chamblee Pest Control',
      cards: [
        { name: '1. Call for a free quote', text: "Phone the directory and we'll put you with a licensed, insured exterminator working Chamblee and the surrounding DeKalb County area — for a home or a business, with no pressure and no obligation." },
        { name: '2. Get a local inspection', text: "Your pro inspects the property, identifies the pest and how far it has spread, and recommends the right treatment for your Chamblee home or storefront — a single visit or recurring service." },
        { name: '3. Problem solved', text: "Licensed techs treat the problem, seal the openings pests use, and set up prevention with EPA-registered products at label rates — low-toxicity, pet- and family-safe options included, and most of the work backed by a guarantee." },
      ],
    },
    {
      heading: 'The Local Pest Pro Directory, Explained',
      paras: [
        "The Local Pest Pro isn't a single company — it's a directory that links Chamblee homeowners and businesses with licensed, insured local exterminators across DeKalb County. Call, and you'll reach the pest control pro assigned to the Chamblee area, or our shared directory line at (844) 544-3498, for a free quote tailored to your property. Everyone we refer holds a license from the Georgia Department of Agriculture's Structural Pest Control Commission and treats with EPA-registered products at label rates, including low-toxicity options for households with children and pets.",
      ],
    },
  ],

  faqs: [
    { q: 'Which pests give Chamblee homeowners the most trouble?', a: "Top of the list are subterranean termites (Georgia carries heavy termite pressure, and Chamblee's older homes and new slab construction both give them a way in), red imported fire ants in sunny lawns, mosquitoes bred in shaded yards and the standing water around redevelopment sites, German roaches and outdoor 'palmetto bugs' that flourish in the humidity, and roof rats and mice that move indoors as the nights cool. The directory's pros treat all of them, at homes and businesses alike." },
    { q: 'Do you handle pest control for Buford Highway restaurants and markets?', a: "Yes. The Buford Highway corridor through Chamblee is one of the metro's densest stretches of restaurants, groceries, and markets, and the pros in our directory cover those accounts with discreet, recurring, after-hours-friendly service documented for health inspectors. One call connects you with a licensed exterminator who can build an Integrated Pest Management plan around your kitchen, storage, deliveries, and the shared walls many older commercial buildings have." },
    { q: "How does Chamblee's mix of old homes and new construction affect pests?", a: "Each end of the spectrum brings its own issue. Older Chamblee homes and commercial buildings have settled over the years, opening the foundation cracks, worn seals, and utility gaps that ants, roaches, and rodents use to get inside, so exclusion work matters. The newer apartments and mixed-use buildings going up around the MARTA station sit on freshly graded soil that subterranean termites colonize easily and share walls that let pests move between units. A local pro sizes up which situation you're in before recommending a plan." },
    { q: 'Which areas around Chamblee do you serve?', a: "Along with Chamblee's own ZIP codes, the directory's pros cover the neighboring DeKalb County communities — Brookhaven, Doraville, Dunwoody, and Tucker among them. Reach out and we'll match you with a licensed exterminator who works your area." },
    { q: 'Are Chamblee pest control companies licensed?', a: "Reputable ones are. Georgia places structural pest control under the state Department of Agriculture, whose Structural Pest Control Commission issues the company licenses and applicator certifications required to treat a property here. Every Chamblee exterminator in our directory is licensed and insured in Georgia." },
    { q: 'Can I get same-day or emergency pest control in Chamblee?', a: "Usually — a good number of the pros covering Chamblee keep open slots for same-day and emergency calls when something can't wait, whether it's a wasp nest at an entrance, a roach flare-up in a kitchen, or rats finding their way inside. Get in touch and we'll line up a DeKalb County exterminator who can respond quickly." },
    { q: 'Will the treatments be safe for my kids and pets?', a: "Yes. The Chamblee pros work with EPA-registered products at label rates and can choose low-toxicity, family- and pet-friendly formulations, concentrating most of the treatment along the exterior, entry points, and cracks and crevices instead of across the rooms you live in. If a treated area needs a brief wait before anyone walks on it, your tech will say so — generally only until it dries." },
  ],

  finalCtaHeading: 'Get Your Free Chamblee Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Chamblee per-pest spoke URL;
  // because no spoke pages are built yet (pestPages is empty below), these cards
  // render as NON-clickable <div>s and 404 cleanly until each page is authored —
  // the same staged build pattern the Dunwoody, Brookhaven, Decatur, Tucker, and
  // Stone Mountain hubs used. Blurbs are written fresh for Chamblee. (No Formosan
  // termite claim — eastern subterranean only.)
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/chamblee/termite-control/',
      blurb: "Eastern subterranean termites are Georgia's dominant wood-destroyers, feeding underground all year beneath Chamblee's older homes and new slab construction alike. Liquid soil barriers, in-ground bait stations, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/chamblee/bed-bug-treatment/',
      blurb: "Bed bugs travel into Chamblee on luggage, rentals, and used furniture and move fast through apartments and the shared walls of redeveloped mixed-use buildings. Whole-room heat or a targeted residual program clears every life stage, with follow-up checks." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/chamblee/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the metro humidity — driven out of Chamblee homes and Buford Highway kitchens and kept from coming back, typically under a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/chamblee/mosquito-control/',
      blurb: "Chamblee sits in a metro that ranks among the nation's five worst for mosquitoes, and shaded yards and standing water around redevelopment sites keep them breeding. Yard barrier treatments and larviciding right through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/chamblee/rodent-control/',
      blurb: "Roof rats, Norway rats, and house mice push indoors as Chamblee nights cool, working in through gaps in older homes and around new construction. Trapping paired with exclusion that closes off their entry points, plus ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/chamblee/pest-control/',
      blurb: "Red imported fire ants work DeKalb County lawns, along with spiders, wasps, hornets, and the ants that wander indoors — all handled under a single recurring quarterly plan, year-round." },
  ],

  // No Chamblee per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
