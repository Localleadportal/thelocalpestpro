'use strict';

// ── Alpharetta, GA — city hub ────────────────────────────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its SIBLING
// FULTON city Roswell — the two Fulton hubs must read clearly differently). Where
// Roswell leans on the Chattahoochee corridor, wooded lots, and established older
// neighborhoods, Alpharetta leans on ITS OWN verified distinctives: an affluent,
// fast-growing North Fulton tech-corridor suburb (GA 400 / Avalon / the
// "Technology City of the South") where heavy newer construction and a dense
// commercial district drive BOTH residential and commercial pest demand. Targets
// local intent ("pest control alpharetta", "alpharetta exterminator", "alpharetta
// ga pest control"). Rendered by views/city.ejs (hub) at /georgia/alpharetta/.
//
// `county` drives the LeadPortal contractor lookup — Alpharetta is in Fulton
// County, so an assigned Fulton County 'Pest Control' contractor shows on this
// page (name + phone + LocalBusiness/PestControlService schema); until one is
// assigned the page falls back to the shared (844) directory line and a Service
// schema node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here.
//
// HUB ONLY: no per-pest spoke pages are built for Alpharetta yet, so `pestPages`
// is intentionally empty. The six hub cards below point at the future spoke URLs
// and render as NON-clickable <div>s until those pages exist (see the city.ejs
// pestCardsHtml comment) — no soft 404s. All pest CATEGORIES (termite, mosquito,
// rodent, bed bug, fire ant, roach, wasp/hornet) are covered as on-page sections.
//
// APPROVED LOCAL FACTS ONLY (verified; no street names, subdivisions, schools,
// ordinances, or invented stats): city in FULTON County, North metro Atlanta,
// ~26 mi N of downtown Atlanta along GA 400; ~65,000 residents; nicknamed the
// "Technology City of the South" with a GA 400 technology/office corridor and the
// Avalon mixed-use development; rapid recent growth and heavy newer construction
// plus a large commercial base (offices, retail, restaurants); ZIPs
// 30004/30005/30009/30022; area codes 770/678/470; neighbors Roswell, Milton,
// Johns Creek, Sandy Springs, Mountain Park (all Fulton County); humid subtropical
// climate; eastern subterranean termites dominant statewide; red imported fire
// ants present statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin
// 2025); GA Dept. of Agriculture Structural Pest Control Commission regulates and
// licenses. Trust signals are CONTRACTOR-AGNOSTIC (licensed/insured, local GA
// service, fast response) — no specific company, rating, or review is referenced.

module.exports = {
  name: 'Alpharetta',
  slug: 'alpharetta',
  county: 'Fulton County',
  region: 'GA',
  zips: ['30004', '30005', '30009', '30022'],
  // Nearby Fulton County communities we also serve — NOT Alpharetta subdivisions.
  // (Service-area names only; all are real Fulton County neighbors of Alpharetta.)
  neighborhoods: ['Roswell', 'Milton', 'Johns Creek', 'Sandy Springs', 'Mountain Park'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Alpharetta its own 1200×630 card later, drop /images/alpharetta-og.jpg in
  // public/ and change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control Alpharetta, GA — Exterminator | The Local Pest Pro',
  metaDesc: "Need an Alpharetta exterminator? Get local pest control in Alpharetta, GA & North Fulton — termite, mosquito, rodent & bed bug control. Call now for a free quote.",
  h1: 'Pest Control in Alpharetta, GA',
  heroSub: "Alpharetta is one of metro Atlanta's fastest-growing suburbs — a North Fulton tech hub along GA 400 where new homes, busy retail, and corporate campuses give pests plenty of room to settle in. Get a licensed local Alpharetta exterminator who knows the area — fast, with a free quote.",

  overviewHeading: 'Pest Control for Alpharetta Homes & Businesses',
  overview: [
    "Home to roughly 65,000 residents, Alpharetta anchors North Fulton County about 26 miles up GA 400 from downtown Atlanta — and the same growth that earned it the nickname the \"Technology City of the South\" is part of what keeps exterminators busy here. Years of rapid development have layered new subdivisions, mixed-use centers like Avalon, and a dense technology-and-office corridor onto what was once quieter countryside, and all of that fresh construction sits on freshly graded soil that subterranean termites move into with ease.",
    "That blend of housing and business is the local wrinkle. A new Alpharetta home on a landscaped lot draws ants, mosquitoes, and termites, while the offices, restaurants, and retail along the GA 400 corridor pull in roaches and rodents hunting for food and shelter — which is why pest demand here runs across both the residential and the commercial side. Tying it together is the climate: North Fulton's humid subtropical weather brings long, muggy summers and mild winters that keep most pests active close to year-round, so a recurring, locally-tuned plan usually outperforms one-off spraying. The licensed, insured pros in our directory quote your specific Alpharetta property — house or business — for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Alpharetta Homes & Businesses Stay Under Pest Pressure Year-Round?',
      paras: [
        "Georgia ranks among the most termite-prone states in the country, and Alpharetta sits squarely in that zone. Eastern subterranean termites are the species to watch — they forage underground and build mud tubes up into sill plates, joists, and framing, and the area's building boom hands them exactly what they want: new slabs and crawlspaces set on disturbed soil. Mild North Fulton winters mean the colonies rarely go dormant, so they keep feeding all twelve months, and because homeowners insurance almost never covers termite damage, steady protection costs far less than the repairs.",
        "Termites are just the opening act. Red imported fire ants are present statewide and erupt as mounds across Alpharetta lawns and ballfields. Mosquitoes are the loudest complaint, though — metro Atlanta lands in the top five worst U.S. metros on Orkin's 2025 ranking, and every retention pond, irrigated landscape, and shaded patio in Alpharetta's newer neighborhoods offers standing water to breed in from spring through fall. Add the German roaches that thrive in the restaurant and office kitchens along GA 400, the roof rats and mice that slip into homes and businesses as nights cool, and the bed bugs that ride in with frequent business travel, and most Alpharetta properties are better off with a steady professional barrier than with chasing one infestation at a time.",
      ],
    },
    {
      heading: 'Alpharetta Pest Season — What to Expect Month by Month',
      paras: [
        "Pest pressure shifts through the year in Alpharetta. Here's roughly what local homeowners and business owners run into, and when:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid afternoons — winged swarmers or small piles of shed wings near windowsills are the first clue a colony is active. Ants march indoors, carpenter bees drill into deck rails and trim, and the season's first warm rains start mosquitoes breeding in retention ponds and irrigated yards. The best window to get protection in place before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes are brutal across North Fulton, fire ant mounds spread through lawns, and wasps, hornets, and yellowjackets hang large nests under eaves, decks, and commercial signage. Roaches push indoors — into homes and the busy kitchens along the GA 400 corridor — to escape the heat, while fleas and ticks peak on pets and in shaded landscaping." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice look for a warm place to overwinter, and that's when scratching starts in Alpharetta attics, walls, and stockrooms. Yellowjacket colonies turn aggressive as they break up, and bed bugs hitch home from fall travel. A smart time to seal entry points ahead of the cold." },
        { name: 'Winter (Dec–Feb)', text: "Alpharetta's mild winters never fully switch pests off. German roaches and mice stay active indoors, and subterranean termites keep feeding underground no matter the date on the calendar. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Areas We Serve In & Around Alpharetta',
      paras: [
        "The local pros in our directory cover Alpharetta across its ZIP codes and the neighboring North Fulton County communities. If you're in one of these nearby areas, we can connect you with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Alpharetta Pest Control Works',
      cards: [
        { name: '1. Call for a free quote', text: "One call connects you with a licensed, insured exterminator serving Alpharetta and the wider North Fulton County area — homes and businesses alike, with no obligation and no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Alpharetta home or business — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and pet-safe options — and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory in Alpharetta',
      paras: [
        "The Local Pest Pro is a directory that connects Alpharetta property owners with licensed, insured local exterminators across North Fulton County — we're not a single company. When you call, you reach the pest control pro assigned to the Alpharetta area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'What pests are most common in Alpharetta, GA?', a: "The big ones are subterranean termites (Georgia is a heavy termite-pressure state, and Alpharetta's new construction gives them fresh ground), red imported fire ants in lawns, mosquitoes breeding in retention ponds and irrigated landscapes, German roaches in homes and the kitchens along the GA 400 corridor, roof rats and mice that move indoors as nights cool, and bed bugs that arrive with frequent business travel. The local pros in our directory treat all of them, for homes and businesses alike." },
    { q: 'Why are mosquitoes so bad in Alpharetta?', a: "Mosquitoes thrive in Alpharetta because the area's newer neighborhoods and commercial developments are dotted with retention ponds, irrigated landscaping, and shaded patios — all of which hold the standing water mosquitoes need to breed. Metro Atlanta also ranks among the worst U.S. metros for them (top five on Orkin's 2025 list). A licensed pro treats the resting areas and the breeding water together for mosquito control that actually lasts, which works far better than a can of spray before you head outside." },
    { q: 'Do you handle commercial pest control in Alpharetta?', a: "Yes. Alpharetta's GA 400 technology corridor is packed with offices, restaurants, retail, and tech campuses, and the pros in our directory handle commercial accounts as well as homes — roach and rodent programs for kitchens and stockrooms, mosquito and ant control for landscaped grounds, and discreet, scheduled service that fits a business's hours. Call and we'll connect you with a licensed exterminator who covers commercial work in your area." },
    { q: 'Do you serve the areas around Alpharetta too?', a: "Yes. Beyond Alpharetta's 30004, 30005, 30009, and 30022 ZIP codes, the pros in our directory serve the surrounding North Fulton County communities, including Roswell, Milton, Johns Creek, Sandy Springs, and Mountain Park. Call and we'll connect you with a licensed exterminator covering your part of the county." },
    { q: 'Are Alpharetta pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies the applicators who treat your property. Every pro listed in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Alpharetta?', a: "Often, yes — many of the local pros serving Alpharetta offer same-day and emergency visits for urgent problems like a wasp nest by the door, a sudden roach issue in a kitchen, or rodents in the building. Call and we'll route you to a North Fulton County exterminator who can get out quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Alpharetta pros use EPA-registered products applied at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living or work areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Alpharetta Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // All six canonical cards render on the hub so the page covers every pest
  // category visually. Each href points at the future Alpharetta per-pest spoke
  // URL; because no spoke pages are built yet (pestPages is empty below), these
  // cards render as non-clickable <div>s until each page is authored — the same
  // staged build pattern the Canton, Holly Springs, and Roswell hubs used. Blurbs
  // are written fresh for Alpharetta (distinct from the sibling Roswell hub).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/alpharetta/termite-control/',
      blurb: "Georgia is one of the country's heaviest termite zones, and Alpharetta's wave of new construction gives subterranean termites fresh, graded soil to colonize. Liquid soil barriers, in-ground bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/alpharetta/bed-bug-treatment/',
      blurb: "Bed bugs ride home from business trips, hotels, and secondhand furniture and spread quickly through Alpharetta homes and rentals. Whole-room heat or a targeted residual program kills every life stage, with follow-up checks." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/alpharetta/cockroach-control/',
      blurb: "German roaches in kitchens — at home and in the restaurants and offices along GA 400 — plus the big outdoor roaches that come from mulch and landscaping. Cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/alpharetta/mosquito-control/',
      blurb: "Metro Atlanta is a top-five U.S. mosquito metro, and Alpharetta's retention ponds and irrigated landscapes give them all the standing water they need. Yard barrier sprays and larviciding through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/alpharetta/rodent-control/',
      blurb: "As Alpharetta nights cool, roof rats, Norway rats, and house mice push into attics, walls, and commercial stockrooms. Trapping, exclusion that seals the entry points for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/alpharetta/pest-control/',
      blurb: "Red imported fire ants are a fact of life in Alpharetta lawns, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round — for homes and businesses." },
  ],

  // No Alpharetta per-pest spoke pages have been authored yet — keep this empty so
  // the hub renders as a HUB only. Add entries here one at a time (same shape as
  // the Canton/Holly Springs pestPages) to build out the spokes later.
  pestPages: {},
};
