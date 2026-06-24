'use strict';

// ── Hiram, GA — city hub ─────────────────────────────────────────────────────
// "Hiram" is a common place/personal name, so every title, heading, meta tag, and
// schema node pairs it with GA / Georgia / Paulding County for disambiguation.
//
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, the Cherokee County city pages, or its SIBLING
// PAULDING city Dallas — the two Paulding hubs must read clearly differently).
// Dallas owns the Paulding-county-seat / fast-growing-NW-exurban-edge /
// new-construction angle. Hiram leads on ITS OWN verified distinctive: the small
// Paulding city that serves as the area's RETAIL / COMMERCIAL HUB — the shopping
// and restaurant district along the US-278 corridor — surrounded by growing
// residential suburbs on metro Atlanta's northwest edge. THIN-SPECIFICS RULE:
// Hiram's verified local distinctives are limited, so this page leans on the
// Paulding / NW-metro regional framing and differentiates from Dallas via the
// retail-hub / US-278-corridor angle (homes AND the businesses along the highway)
// rather than inventing local color. Targets local intent ("pest control hiram",
// "hiram exterminator", "hiram ga pest control"). Rendered by views/city.ejs
// (hub) at /georgia/hiram/.
//
// `county` drives the LeadPortal contractor lookup — Hiram is in Paulding County,
// so an assigned Paulding County 'Pest Control' contractor shows on this page
// (name + phone + PestControlService schema, with license + address taken ONLY
// from the real contractor record — address never synthesized); until one is
// assigned the page falls back to the shared (844) directory line and a Service
// schema node. The contractor is pulled server-side in server.js via
// getContractor(state.name, city.county, SITE.SERVICE_TYPE) — nothing is
// hardcoded here.
//
// HUB ONLY — no per-pest spoke pages are built. The six hub cards render as
// non-clickable <div>s (no `pestPages` entries), so nothing links to a 404; each
// card auto-upgrades to a link if/when its spoke is authored later. All pest
// CATEGORIES (termite, mosquito, rodent, bed bug, fire ant, roach, wasp/hornet)
// are covered as on-page sections / prose.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): small city
// in Paulding County, just southeast of the county seat Dallas, on metro Atlanta's
// northwest exurban edge; serves as the area's retail/commercial hub, with a
// shopping and restaurant district along the US-278 corridor (US-278 is the ONLY
// road nameable); surrounded by growing residential suburban development; neighbor
// communities Dallas and New Hope (Paulding) and Powder Springs (Cobb, just over
// the line to the southeast); ZIP 30141; area codes 770/678/470; humid subtropical
// climate; Georgia is a heavy termite-pressure state (eastern subterranean termites
// dominant — NO Formosan local-presence claim); red imported fire ants present
// statewide; metro Atlanta is a top-five U.S. mosquito metro (Orkin 2025);
// structural pest control is regulated by the Georgia Dept. of Agriculture's
// Structural Pest Control Commission. Do NOT name subdivisions, schools, parks,
// streets (other than US-278), or invent stats.

module.exports = {
  name: 'Hiram',
  slug: 'hiram',
  county: 'Paulding County',
  region: 'GA',
  zips: ['30141'],
  // Nearby communities we also serve — NOT Hiram subdivisions. Dallas and New Hope
  // are Paulding neighbors; Powder Springs sits just over the line in Cobb to the
  // southeast, so the section is framed as nearby communities, not strictly
  // "Paulding County." Dallas has a built hub and auto-links; the rest render as
  // plain badges. (Service-area names only; no invented specifics.)
  neighborhoods: ['Dallas', 'New Hope', 'Powder Springs', 'Yorkville'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default. To give
  // Hiram its own 1200×630 card later, drop /images/hiram-og.jpg in public/ and
  // change this value — never point at a path until the asset exists.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Hiram, GA | Paulding County Pest Pro',
  metaDesc: "Licensed pest control in Hiram, GA — Paulding County's retail hub on the US-278 corridor. Termite, mosquito, rodent & bed bug control. Call for a free quote.",
  h1: 'Pest Control in Hiram, GA',
  heroSub: "Hiram is the retail and commercial hub of Paulding County, where the busy US-278 shopping corridor sits surrounded by growing residential suburbs on metro Atlanta's northwest edge. Between the stores and restaurants along the highway and the neighborhoods filling in around them, Georgia's humid climate keeps termites, mosquitoes, roaches, and rodents active close to year-round. Get a licensed local Hiram, GA exterminator who knows the area — fast, and with a free quote.",

  overviewHeading: 'Pest Control for Hiram Homes & Businesses',
  overview: [
    "Hiram may be a small city, but it punches well above its size: the US-278 corridor running through it has grown into Paulding County's main retail and commercial district, drawing shoppers and traffic from across the area. Around that busy highway core, subdivisions and residential neighborhoods have steadily filled in the surrounding land on metro Atlanta's northwest edge. That blend matters for pest control — the shopping centers, restaurants, and stores along the corridor pull in roaches and rodents hunting for food and shelter, while the homes nearby contend with the termites, ants, and mosquitoes that come with Georgia's climate.",
    "Tying it together is the weather. Hiram sees the same long, humid summers and short, mild winters as the rest of metro Atlanta, so pests here rarely get a true off-season — which is why a recurring, locally-tuned plan usually outperforms one-off treatments, for a home or a storefront alike. Throughout 30141 and the surrounding Paulding County area, the licensed, insured pros in our directory quote your specific Hiram property — house or business — for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Hiram, GA Homes & Businesses Face Year-Round Pests?',
      paras: [
        "Georgia ranks among the most termite-prone states in the country, and Paulding County sits squarely in that zone. Eastern subterranean termites are the species that matters here — they forage up through the soil and run mud tubes into sill plates, joists, and framing, and they'll work a home or a commercial slab the same way. Because winters on metro Atlanta's northwest edge stay mild, the colonies rarely go dormant and keep feeding all twelve months, and since termite damage almost never falls under a property insurance policy, ongoing protection costs far less than the repairs.",
        "Termites aren't the whole story, though. Red imported fire ants are present statewide and push mounds up across Hiram lawns and the open ground around the commercial corridor. Mosquitoes draw the loudest complaints — Orkin's 2025 list put metro Atlanta among the five worst U.S. metros for them — and the parking-lot drainage, retention areas, and shaded residential yards around Hiram all hold the standing water they breed in from spring into fall. Add the German roaches that thrive in restaurant and retail kitchens, the roof rats and mice that slip into stockrooms and homes as nights cool, and the bed bugs that travel in, and most Hiram properties are better off with a steady professional barrier than reacting one problem at a time.",
      ],
    },
    {
      heading: 'When Are Pests Most Active in Hiram, GA?',
      paras: [
        "Pest pressure rises and falls across the year in Hiram. Here's the rough rhythm local homeowners and business owners can expect, season by season:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on warm, humid afternoons — winged swarmers, or small piles of shed wings near a window or storefront, are the first clue a colony is active. Ants move indoors, carpenter bees drill into deck rails and trim, and the season's first warm rains start mosquitoes breeding in low, wet spots and lot drainage. The best window to get protection in place before pressure builds." },
        { name: 'Summer (Jun–Aug)', text: "Peak season. Mosquitoes turn relentless across metro Atlanta, fire ant mounds spread through lawns and commercial turf, and wasps, hornets, and yellowjackets hang nests under eaves, signage, and loading docks. Roaches push indoors — into homes and the kitchens along the corridor — to escape the heat, while fleas and ticks peak on pets and in shaded, brushy spots." },
        { name: 'Fall (Sep–Nov)', text: "As nights cool, roof rats, Norway rats, and house mice look for a warm place to overwinter, and that's when scratching starts in Hiram attics, walls, and stockrooms. Yellowjacket colonies turn aggressive as they break apart, and bed bugs hitch home from fall travel. A smart window to seal entry points before the cold sets in." },
        { name: 'Winter (Dec–Feb)', text: "Hiram's mild winters never fully switch pests off. German roaches and mice stay active indoors, and subterranean termites keep feeding underground regardless of the date. Recurring service holds the protective barrier through the cooler months so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Areas We Serve Around Hiram in Paulding County',
      paras: [
        "Our directory's pros cover Hiram and the communities right around it, across Paulding County and just over its borders. If one of these is your area, we can line you up with a licensed local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Hiram',
      cards: [
        { name: '1. Call for a free quote', text: "One call reaches a licensed, insured exterminator covering Hiram and the wider Paulding County area — homes and businesses alike, with no obligation and nothing owed for the quote." },
        { name: '2. Get a local inspection', text: "A technician walks the property, pins down the pest and how far it has spread, and lays out the right plan for your Hiram home or business — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed techs treat, seal, and prevent with EPA-registered products applied at label rates, including family- and pet-safe options — and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory — not a single company — that links Hiram homeowners and business owners with licensed, insured local exterminators across Paulding County. Call and you reach the pest control pro assigned to the Hiram area, or our shared directory line at (844) 544-3498, for a free quote tied to your specific property. Every pro in our network is licensed through the Georgia Department of Agriculture's Structural Pest Control Commission and uses EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Hiram, GA?', a: "There's no one-size price — it depends on the pest, how far the problem has spread, and the size of the property, whether that's a house or a storefront along the corridor. A recurring general pest plan is the most economical route, while specialty work like termite or bed bug treatment costs more for the equipment and follow-up it takes. Every pro in our directory gives you a free, property-specific quote up front, so you know the exact cost before any work starts." },
    { q: 'What pests are most common in Hiram and Paulding County?', a: "The frequent offenders are subterranean termites (Georgia carries heavy termite pressure), red imported fire ants in lawns and open ground, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, mosquitoes bred in shaded yards and lot drainage, and roof rats and mice that work into homes and businesses as nights cool. The pros in our directory handle every one." },
    { q: 'Do you handle commercial pest control along the Hiram US-278 corridor?', a: "Yes. Hiram's US-278 corridor is lined with shopping centers, restaurants, and retail, and the pros in our directory cover commercial accounts as well as homes — roach and rodent programs for kitchens and stockrooms, exterior and grounds treatment for parking-lot landscaping, and scheduled, discreet service that works around business hours. Call and we'll connect you with a licensed exterminator who handles commercial work in the area." },
    { q: 'Which areas around Hiram, GA do you serve?', a: "Beyond Hiram's 30141 ZIP code, the pros in our directory cover the surrounding communities, including the Paulding County seat of Dallas and New Hope, along with Powder Springs just over the line to the southeast. Call and we'll match you with a licensed exterminator for your part of the area." },
    { q: 'Are Hiram, GA pest control companies licensed?', a: "They should be. In Georgia, structural pest control is overseen by the Department of Agriculture's Structural Pest Control Commission, which issues company licenses and certifies the applicators who treat your property. Every pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency pest control in Hiram?', a: "Often, yes — many of the local pros serving Hiram keep room for same-day and emergency visits when something can't wait, like a wasp nest by a doorway, a sudden roach problem in a kitchen, or rodents in the building. Call and we'll get you to a Paulding County exterminator who can respond quickly." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Hiram pros apply EPA-registered products at label rates and carry family- and pet-safe or low-toxicity options, placing most material around the exterior, entry points, and cracks and crevices rather than across living or work areas. Your technician will point out any short re-entry window — usually only until the product has dried." },
  ],

  finalCtaHeading: 'Get Your Free Hiram, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six categories. No per-pest spoke pages are built for Hiram, so
  // every card renders as a NON-CLICKABLE <div> (city.ejs makes a card a link only
  // when a matching city.pestPages entry exists — there are none here). The hrefs
  // are kept so each card auto-upgrades to a link if a spoke is authored later.
  // Blurbs are written fresh for Hiram (no reuse from the sibling Dallas hub).
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/hiram/termite-control/',
      blurb: "Eastern subterranean termites work up through the soil into Hiram's homes and commercial slabs alike, and Georgia sits in one of the country's heaviest termite belts. Soil-applied liquid barriers, in-ground baiting, and the Georgia termite letter at closing." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/hiram/bed-bug-treatment/',
      blurb: "Bed bugs travel in on luggage and secondhand furniture, then spread through Hiram homes, apartments, and rentals. Whole-room heat, or a targeted residual program with follow-up checks, kills every life stage." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/hiram/cockroach-control/',
      blurb: "German roaches in home and restaurant kitchens, plus the big 'palmetto bugs' that wander in from mulch, woodpiles, and damp crawlspaces. Identified, cleared out, and kept from coming back, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/hiram/mosquito-control/',
      blurb: "Orkin ranks metro Atlanta among the five worst U.S. mosquito metros, and Hiram's shaded yards and parking-lot drainage give them standing water to breed. Barrier sprays on resting areas plus larviciding through the warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/hiram/rodent-control/',
      blurb: "When Hiram nights cool, roof rats, Norway rats, and house mice move into the attics, walls, and stockrooms of homes and businesses alike. Trapping to bring the numbers down, exclusion that seals the gaps for good, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/hiram/pest-control/',
      blurb: "Red imported fire ants turn up across Hiram lawns and commercial grounds, along with spiders, wasps, hornets, and nuisance ants. A single recurring quarterly plan keeps the whole lot in check all year." },
  ],

  // No pestPages — HUB ONLY. (Adding an entry here later upgrades its card to a
  // link to the matching /georgia/hiram/<pest>/ spoke.)
};
