'use strict';

// ── Talking Rock, GA — city hub ──────────────────────────────────────────────
// Fully localized, UNIQUE content. This is the SECOND Pickens County page after
// Jasper (data/cities/jasper-ga.js). ANTI-DUPLICATION: no sentence, intro, FAQ,
// H2, or local-angle framing is reused from Jasper. Jasper owns the
// county-seat / "First Mountain City" / GA-515-corridor-town angle; Talking Rock
// leads on its OWN verified distinctive — a tiny, deeply rural creek-named town
// of wooded acreage and outbuildings. Content also shares NO copy with the
// Georgia state pages, the national service pages, or the Cherokee/Paulding city
// pages. Targets local intent ("pest control talking rock ga", "talking rock ga
// exterminator"). Rendered by views/city.ejs (hub) at /georgia/talking-rock/.
//
// `county` drives the LeadPortal contractor lookup — Talking Rock is in Pickens
// County, so an assigned Pickens 'Pest Control' contractor shows here (name +
// phone + PestControlService schema). NOTE: the assignment in LeadPortal is
// recorded under the bare "Pickens" key, not "Pickens County"; lib/contractor.js's
// countyVariants() tries both forms, so "Pickens County" here (kept for display
// consistency with sibling pages) still resolves. The currently-assigned pro is
// McCardle's Pest Management; until/unless that changes the page falls back to the
// shared (844) directory line and a Service schema node.
//
// HUB ONLY — no per-pest spoke pages are built. The six hub cards render as
// non-clickable <div>s (no `pestPages` entries), so nothing links to a 404; each
// card auto-upgrades to a link if/when its spoke is authored later.
//
// THIN-SPECIFICS NOTE: Talking Rock is one of the smallest towns on the site, so
// verified city distinctives are minimal. The page leans on Pickens-County /
// North-Georgia-mountains / rural-wooded regional framing rather than inventing
// streets, subdivisions, named landmarks, businesses, population numbers, or
// ordinances. A shorter, honest, regionally-framed page is correct here.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): a tiny
// incorporated town in Pickens County, in the North Georgia mountains/foothills;
// takes its name from the creek that runs through the area; very small, historic,
// deeply rural community; heavily wooded, low-density surroundings — homes on
// wooded or acreage lots near forest, pasture, and creek terrain rather than
// dense subdivisions; ZIP 30175; area codes 706/762; nearby Pickens communities
// Jasper (county seat, to the SE), Tate, Hinton, and Marble Hill; cooler mountain
// winters with warm, humid summers; Georgia is a heavy termite-pressure state
// (eastern subterranean is the DOMINANT wood-destroyer; Formosan termites are
// rare in GA and NOT established in the North Georgia mountains — do not claim
// them here); red imported fire ants present statewide (all 159 GA counties);
// metro Atlanta — to the SOUTH — is a top-five U.S. mosquito metro (Orkin 2025),
// framed ONLY as regional context, never as a Talking Rock stat; structural pest
// control is regulated by the Georgia Dept. of Agriculture's Structural Pest
// Control Commission. Do NOT name streets, subdivisions, schools, parks, specific
// businesses, or invent stats.

module.exports = {
  name: 'Talking Rock',
  slug: 'talking-rock',
  county: 'Pickens County',
  region: 'GA',
  zips: ['30175'],
  // Nearby Pickens County communities we also serve — NOT Talking Rock
  // subdivisions. Service-area names only (approved facts: Jasper is the county
  // seat to the SE; Tate, Hinton, and Marble Hill are Pickens County
  // communities). No invented specifics.
  neighborhoods: ['Jasper', 'Tate', 'Hinton', 'Marble Hill'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default; this
  // explicit value just makes that intent obvious. Set a different path here to
  // give Talking Rock its own card later.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Talking Rock, GA | Pickens County Pest Pro',
  metaDesc: "Licensed pest control in Talking Rock, GA — a wooded Pickens County town in the North Georgia mountains. Termites, rodents, mosquitoes & fire ants. Free quote.",
  h1: 'Pest Control in Talking Rock, GA',
  heroSub: "Talking Rock is a tiny, deeply wooded town in the North Georgia mountains of Pickens County, where homes sit on creek-fed, forested acreage rather than tight subdivisions. That rural mix of woods, water, and outbuildings brings rodents, moisture pests, termites, and mosquitoes right up to the door through the long warm season. Get a licensed local exterminator who knows rural Pickens County, GA, fast.",

  overviewHeading: 'Pest Control for Talking Rock & Rural Pickens County',
  overview: [
    "Talking Rock takes its name from the creek that threads through this corner of Pickens County, and the town is about as rural as Georgia gets — a tiny, historic community scattered across heavily wooded hills in the North Georgia mountains. Most properties here are low-density: houses on acreage, cabins, and older homesteads set against the tree line, near forest, pasture, and creek bottoms rather than curb-and-gutter streets. A setting like that hands pests an easy commute, with rodents, ants, and wildlife-adjacent insects working in from the surrounding woods, outbuildings, and damp ground.",
    "The mountain location keeps winters cooler than they are down in metro Atlanta, but the summers stay warm and humid, and the shaded, creek-fed soil holds the moisture pests depend on — so few of them ever clear out entirely. Subterranean termites keep working underground, mice and rats hunt for a warm wall each fall, and mosquitoes breed in the still water along the creeks and low spots. On a wooded rural lot, a recurring plan tuned to the property usually beats waiting for the next problem to show up. Whether you're in town along 30175 or out on acreage toward Hinton or Tate, the licensed, insured pros in our directory quote your specific Pickens County property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Do Rural, Wooded Lots Around Talking Rock Draw So Many Pests?',
      paras: [
        "Out here, the pests come from the land itself. Georgia sits in one of the country's heaviest termite-pressure regions, and eastern subterranean termites are the dominant wood-destroyer across the North Georgia mountains — they forage up through the soil into sills and framing and keep feeding through the warm months, barely pausing in the area's relatively mild winters. A wooded lot stacked with crawlspaces, decks, woodpiles, and damp soil close to the foundation gives them no shortage of the moisture and cellulose they hunt for.",
        "Plenty more works a rural property alongside the termites. Red imported fire ants are established across all of Georgia and claim any open, sunny patch of yard or pasture. Roof rats, Norway rats, and house mice have only a short trip from the surrounding forest, barns, and sheds into a warm attic or wall void. And although Talking Rock sits far from the urban core, mosquito pressure across metro Atlanta to the south ranks among the worst in the nation — the metro placed in the top five on Orkin's 2025 list — and the same humid Georgia summers fill the creeks, low spots, and standing water around these wooded lots, keeping mosquitoes breeding from spring into fall. A steady professional barrier takes them on together instead of one crisis at a time.",
      ],
    },
    {
      heading: 'What Does Pest Season Look Like in Talking Rock?',
      paras: [
        "Pressure rises and falls through the year on a rural North Georgia property. Here's the seasonal rhythm Talking Rock homeowners tend to see:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid days — winged swarmers around a window, or shed wings on a sill, signal a colony already active in nearby soil or a woodpile. Ants stir, carpenter bees bore into deck rails and eaves, and spring rain fills the creek bottoms and low spots where mosquitoes begin breeding." },
        { name: 'Summer (Jun–Aug)', text: "The busy stretch. Mosquitoes work the shaded, creek-fed yards and tree lines, fire ants raise mounds in sunny pasture and lawn, wasps and yellowjackets build under eaves and barn rafters, and ticks and fleas ride in on pets and wildlife from the brush. Roaches and other invaders edge toward cool, damp spaces indoors." },
        { name: 'Fall (Sep–Nov)', text: "As mountain nights cool, roof rats, Norway rats, and house mice leave the woods and outbuildings for a warm place to overwinter — the season rural homeowners start hearing scratching overhead. Yellowjackets turn aggressive as their colonies collapse. The right time to seal entry points before the cold." },
        { name: 'Winter (Dec–Feb)', text: "Talking Rock's mountain winters run colder than the suburbs to the south, yet they rarely end the problem — mice stay active indoors, roaches hold on in warm crawlspaces and utility rooms, and subterranean termites keep feeding below the frost line. Recurring service holds the barrier so spring doesn't open with a surge." },
      ],
    },
    {
      heading: 'Which Pickens County Areas Around Talking Rock Do You Serve?',
      paras: [
        "The local pros in our directory cover Talking Rock and the surrounding rural communities of Pickens County. If you're out on acreage in one of these nearby areas, we can connect you with a licensed exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How Does It Work?',
      cards: [
        { name: '1. Call for a free quote', text: "One call reaches a licensed, insured exterminator who works Talking Rock and rural Pickens County — no obligation and no pressure." },
        { name: '2. Get an on-site inspection', text: "Your pro walks the whole property — house, crawlspace, outbuildings, and tree line — pins down the pest and how far it has spread, and recommends one-time or recurring treatment for your lot." },
        { name: '3. Pests handled', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products at label rates, including family- and pet-safe options, and most back the work with a guarantee." },
      ],
    },
    {
      heading: 'Who Are the Local Pest Pro Exterminators?',
      paras: [
        "The Local Pest Pro is a directory, not a single company — we connect Talking Rock homeowners with licensed, insured local exterminators across Pickens County. Call and you'll reach the pro assigned to the area, or our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Talking Rock, GA?', a: "There's no single rate. Price turns on the pest, how far it has spread, and the size of your home and lot — and rural Pickens County parcels with acreage, outbuildings, and a long tree line can take more work to cover. A recurring general plan is the most economical option, while specialty jobs like termite or bed bug treatment cost more for the equipment and follow-up. Every pro in our directory gives a free, property-specific quote up front, so there are no surprises." },
    { q: 'What pests give Talking Rock homeowners the most trouble?', a: "On these wooded, creek-fed lots it tends to be rodents working in from the forest and outbuildings, subterranean termites (the dominant wood-destroyer in North Georgia), and the mosquitoes that breed in nearby standing water through summer. Fire ants take the open, sunny ground, and ticks, wasps, and the occasional roach or moisture pest round out the list. The pros in our directory treat all of them." },
    { q: 'Do you cover the rural areas and acreage around Talking Rock?', a: "Yes. Beyond the town's 30175 ZIP code, the pros in our directory serve the surrounding Pickens County communities — including Jasper, Tate, Hinton, and Marble Hill — and the homes on wooded acreage in between. Call and we'll match you with a licensed exterminator who covers your stretch of the county." },
    { q: 'Can a treatment cover outbuildings, barns, and crawlspaces too?', a: "It can. Detached garages, barns, sheds, and open crawlspaces are exactly where rural rodents nest and where moisture pests and wasps gather, so a thorough inspection looks well past the main house to the whole property. Your pro will recommend what to treat and where to seal entry points across the buildings on your lot." },
    { q: 'Are Talking Rock pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I still get same-day or emergency service this far out?', a: "Often, yes. Many of the local pros serving Talking Rock offer same-day and emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house. Call and we'll route you to a Pickens County exterminator who can get out to your area quickly." },
    { q: 'Will the treatments be safe around kids and pets?', a: "Yes. Talking Rock pros use EPA-registered products at label rates and offer family- and pet-safe or low-toxicity options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until things dry." },
  ],

  finalCtaHeading: 'Get Your Free Talking Rock, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six categories. No per-pest spoke pages are built for Talking
  // Rock, so every card renders as a NON-CLICKABLE <div> (city.ejs makes a card a
  // link only when a matching city.pestPages entry exists — there are none here).
  // The hrefs are kept so each card auto-upgrades to a link if a spoke is authored
  // later. Blurbs are written fresh for Talking Rock (no reuse from Jasper or
  // other sibling cities). Fire ant / wasp / ant / spider / flea fold UNDER
  // General Pest Control — no seventh card.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/talking-rock/termite-control/',
      blurb: "Eastern subterranean termites are the dominant wood-destroyer across the North Georgia mountains, and the woodpiles, decks, and damp crawlspaces of a wooded lot give them plenty to work with. Soil-applied liquid barriers, monitored bait stations, and the Georgia termite letter when a property changes hands." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/talking-rock/bed-bug-treatment/',
      blurb: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture, and they spread fast once inside any home — rural or not. Whole-room heat or a staged residual treatment wipes out every life stage, then follow-up checks confirm it." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/talking-rock/cockroach-control/',
      blurb: "German roaches breeding indoors plus the big 'palmetto bugs' that wander in from woodpiles, leaf litter, and crawlspaces around damp, wooded Talking Rock lots — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/talking-rock/mosquito-control/',
      blurb: "Mosquito pressure across metro Atlanta to the south is among the worst in the U.S., and the creeks, low spots, and shaded standing water around Talking Rock's wooded lots breed them locally. Barrier sprays for the resting areas and larviciding for the standing water, all through the long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/talking-rock/rodent-control/',
      blurb: "Roof rats, Norway rats, and house mice have only a short trip from the surrounding forest, barns, and sheds into a Talking Rock attic each fall. Trapping to clear the active rodents, sealing the openings they use, and follow-up monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/talking-rock/pest-control/',
      blurb: "Fire ants in the open ground, plus spiders, wasps, nuisance ants, ticks, and fleas around wooded, wildlife-adjacent rural property. A single recurring quarterly plan keeps the whole list in check, year-round." },
  ],

  // No pestPages — HUB ONLY. (Adding an entry here later upgrades its card to a
  // link to the matching /georgia/talking-rock/<pest>/ spoke.)
};
