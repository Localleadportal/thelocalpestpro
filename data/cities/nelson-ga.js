'use strict';

// ── Nelson, GA — city hub ────────────────────────────────────────────────────
// Fully localized, UNIQUE content. This is the THIRD Pickens County page after
// Jasper (jasper-ga.js) and Talking Rock (talking-rock-ga.js). ANTI-DUPLICATION:
// no sentence, intro, FAQ, H2, or local-angle framing is reused from either
// sibling. Jasper owns the county-seat / "First Mountain City" / GA-515-corridor
// angle; Talking Rock owns the tiny-rural-creek-town / wooded-acreage angle;
// Nelson leads on its OWN verified distinctives — the Georgia MARBLE BELT heritage
// (Nelson–Tate–Marble Hill quarry country) and the PICKENS/CHEROKEE COUNTY
// STRADDLE, with older marble-era housing stock. Content shares NO copy with the
// Georgia state pages, the national service pages, or the Cherokee/Paulding city
// pages. Targets local intent ("pest control nelson ga", "nelson ga exterminator").
// Rendered by views/city.ejs (hub) at /georgia/nelson/.
//
// COUNTY STRADDLE: Nelson straddles the Pickens and Cherokee county line. The
// contractor lookup is keyed to PICKENS (primary) via `county: 'Pickens County'`;
// the Cherokee spillover is noted honestly in prose but the lookup is NOT keyed to
// Cherokee and the page does NOT claim two contractors. (Both counties happen to
// resolve to the same assigned pro, McCardle's Pest Management, but the data stays
// keyed to Pickens.)
//
// `county` drives the LeadPortal contractor lookup. NOTE: the assignment in
// LeadPortal is recorded under the bare "Pickens" key, not "Pickens County";
// lib/contractor.js's countyVariants() tries both forms, so "Pickens County" here
// (kept for display consistency with sibling pages) still resolves. The currently
// assigned pro is McCardle's Pest Management; until/unless that changes the page
// falls back to the shared (844) directory line and a Service schema node.
//
// HUB ONLY — no per-pest spoke pages are built. The six hub cards render as
// non-clickable <div>s (no `pestPages` entries), so nothing links to a 404; each
// card auto-upgrades to a link if/when its spoke is authored later.
//
// THIN-SPECIFICS NOTE: Nelson is a small town with limited verified distinctives,
// so the page leans on Pickens-County / North-Georgia-foothills / marble-belt
// regional framing rather than inventing streets, subdivisions, named landmarks,
// businesses, population numbers, or ordinances. Omit anything unverified.
//
// APPROVED LOCAL FACTS ONLY (no other local specifics may be added): a small city
// straddling the Pickens/Cherokee county line in the North Georgia foothills;
// grew up in Georgia's MARBLE BELT — the Pickens quarry country that also takes in
// Tate and Marble Hill — a small, historic marble-and-railroad-era town; older
// housing stock from the quarrying days mixed with newer low-density wooded/rural
// lots; ZIP 30151; area codes 706/762; nearby communities Tate and Marble Hill
// (Pickens, marble belt), Jasper (Pickens county seat), and Ball Ground (Cherokee
// County, just south across the line); cooler foothill winters with warm, humid
// summers; Georgia is a heavy termite-pressure state (eastern subterranean is the
// DOMINANT wood-destroyer; Formosan termites are rare in GA and NOT established in
// the North Georgia foothills — do not claim them here); red imported fire ants
// present statewide (all 159 GA counties); metro Atlanta — to the SOUTH — is a
// top-five U.S. mosquito metro (Orkin 2025), framed ONLY as regional context,
// never as a Nelson stat; structural pest control is regulated by the Georgia
// Dept. of Agriculture's Structural Pest Control Commission. Do NOT name streets,
// subdivisions, schools, parks, specific businesses, or invent stats.

module.exports = {
  name: 'Nelson',
  slug: 'nelson',
  county: 'Pickens County',
  region: 'GA',
  zips: ['30151'],
  // Nearby communities we also serve — NOT Nelson subdivisions. Service-area
  // names only (approved facts: Tate and Marble Hill are Pickens marble-belt
  // communities; Jasper is the Pickens county seat; Ball Ground is in Cherokee
  // County just south across the line, reflecting Nelson's straddle). No invented
  // specifics.
  neighborhoods: ['Tate', 'Marble Hill', 'Ball Ground', 'Jasper'],

  // Uses the shared branded OG card (/images/og-default.jpg) by default; this
  // explicit value just makes that intent obvious. Set a different path here to
  // give Nelson its own card later.
  ogImage: '/images/og-default.jpg',

  metaTitle: 'Pest Control in Nelson, GA | Pickens County Pest Pro',
  metaDesc: "Licensed pest control in Nelson, GA — a small town on the Pickens–Cherokee line in the North Georgia marble belt. Termites, rodents & fire ants. Free quote.",
  h1: 'Pest Control in Nelson, GA',
  heroSub: "Nelson is a small North Georgia foothills town built up around the area's marble belt, straddling the Pickens–Cherokee county line where older marble-and-railroad-era homes sit beside scattered rural lots. That mix of aging housing stock and wooded, low-density land keeps termites, rodents, roaches, and mosquitoes in play through the long warm season. Get a licensed local exterminator who knows Nelson and rural Pickens County, GA, fast.",

  overviewHeading: 'Pest Control for Nelson & the Pickens County Marble Belt',
  overview: [
    "Nelson grew up in Georgia's marble belt — the band of Pickens County quarry country that also takes in Tate and Marble Hill — and the town still carries that small, historic, marble-and-railroad character. It sits right on the Pickens–Cherokee county line, its southern edge reaching toward Cherokee County and Ball Ground, in the rolling North Georgia foothills. Homes here run from older houses dating to the town's quarrying days to newer places on wooded, low-density lots, and that range gives pests plenty of openings: decades-old structures have had time for termites and rodents to find the gaps, while rural parcels back up to woods and outbuildings.",
    "Climate keeps it going all year. The foothills run cooler in winter than metro Atlanta to the south, but Nelson's summers are warm and humid, and the shaded, damp ground around foothill lots holds the moisture pests need — so most barely take an off-season. Subterranean termites keep feeding underground, mice and rats look for a warm wall when the nights turn, and mosquitoes breed in the low spots and standing water across a property. A recurring, locally-tuned plan tends to outperform one-off treatments here. Whether you're in the 30151 ZIP or out toward Tate, Marble Hill, or the Cherokee County side near Ball Ground, the licensed, insured pros in our directory quote your specific Nelson property for free before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Does an Older Marble-Belt Town Like Nelson Stay Under Pest Pressure?',
      paras: [
        "The pressure here is part old houses, part open country. Georgia falls within one of the heaviest termite-pressure regions in the country, and eastern subterranean termites are the dominant wood-destroyer through the North Georgia foothills — they tunnel up from the soil into sills, joists, and framing and keep feeding through the warm months, easing off only a little in the area's mild winters. Older marble-era homes hand them seasoned wood and settled cracks to exploit, while the damp soil and crawlspaces common on foothill lots supply the moisture they rely on.",
        "Termites don't work alone. Red imported fire ants are established in every Georgia county and push up mounds across any sunny stretch of lawn or pasture. Roof rats, Norway rats, and house mice slip in from the surrounding woods, sheds, and barns toward a warm attic when temperatures drop. And while Nelson lies well north of the city, mosquito pressure across metro Atlanta to the south ranks among the nation's worst — a top-five finish on Orkin's 2025 list — and the same humid Georgia summers fill the low spots and standing water around foothill properties on both sides of the county line. One steady professional barrier handles the whole range instead of chasing each pest as it turns up.",
      ],
    },
    {
      heading: 'When Are Pests Most Active Around Nelson?',
      paras: [
        "Pest pressure follows the seasons on a North Georgia foothills property. Here's the pattern Nelson homeowners can plan around:",
      ],
      cards: [
        { name: 'Spring (Mar–May)', text: "Termites swarm on the first warm, humid afternoons — a scatter of winged swarmers at a window, or shed wings on the sill, points to a colony already at work nearby. Ants get moving, carpenter bees drill into eaves and trim, and spring rain pools in the low spots where mosquitoes start to breed." },
        { name: 'Summer (Jun–Aug)', text: "The peak. Mosquitoes haunt the shaded, damp corners of the yard, fire ant mounds spread through sunny lawns and pastures, wasps and yellowjackets build under eaves and barn roofs, and ticks and fleas come in on pets and wildlife. Roaches and other invaders look for cool, moist spots inside." },
        { name: 'Fall (Sep–Nov)', text: "As foothill nights cool, roof rats, Norway rats, and mice leave the woods and outbuildings to overwinter somewhere warm — the time of year homeowners start hearing movement overhead. Yellowjackets grow aggressive as their nests break down. A good window to seal up entry points before winter." },
        { name: 'Winter (Dec–Feb)', text: "Nelson's foothill winters are cooler than the metro to the south but rarely shut pests off — mice stay busy indoors, roaches persist in heated, humid spaces, and subterranean termites keep working below ground. Year-round service keeps the barrier intact so spring doesn't begin with a flare-up." },
      ],
    },
    {
      heading: 'Which Areas Around Nelson Do You Cover?',
      paras: [
        "The local pros in our directory cover Nelson and the nearby foothills communities on both the Pickens and Cherokee sides of the line. If you're in one of these areas, we can connect you with a licensed exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'What Happens When You Call?',
      cards: [
        { name: '1. Tell us about the problem', text: "One call connects you with a licensed, insured exterminator who serves Nelson and the surrounding Pickens County area — no obligation and no pressure." },
        { name: '2. Get an on-site inspection', text: "Your pro inspects the whole property — the house, crawlspace, any outbuildings, and the perimeter — identifies the pest and how far it has spread, and lays out a one-time or recurring plan for your lot." },
        { name: '3. Treated and protected', text: "Licensed technicians treat, seal out, and prevent with EPA-registered products at label rates, including family- and pet-safe options, and most stand behind the work with a guarantee." },
      ],
    },
    {
      heading: 'How Does The Local Pest Pro Directory Work?',
      paras: [
        "The Local Pest Pro is a directory rather than a single company — we connect Nelson homeowners with licensed, insured local exterminators serving Pickens County. Call and we'll route you to the pro assigned to the area, or to our shared directory line at (844) 544-3498, for a free, property-specific quote. Every pro we list is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and pet-safe options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Nelson, GA?', a: "There's no flat price. It depends on the pest, how far it has spread, and the size and age of your home and lot — and Nelson's mix of older marble-era houses and rural acreage can each call for their own kind of work. A recurring general plan is the most affordable route, while specialty jobs like termite or bed bug treatment cost more for the equipment and follow-up. Every pro in our directory gives a free, property-specific quote before any work begins, so you'll know the number up front." },
    { q: 'Which pests are the biggest problem for Nelson homes?', a: "In an older foothills town like Nelson it tends to be subterranean termites working seasoned wood (the dominant wood-destroyer in North Georgia), rodents moving in from the woods and outbuildings, and mosquitoes breeding in the low, damp spots through summer. Fire ants claim the open lawns and pastures, with ticks, wasps, and roaches filling out the list. The pros in our directory handle all of them." },
    { q: 'Nelson sits on the Pickens–Cherokee county line — can you still help?', a: "Yes. Nelson straddles the Pickens and Cherokee county line, and the pros in our directory cover homes on both sides. Beyond the town's 30151 ZIP code, that includes nearby Tate and Marble Hill in Pickens County and the Cherokee County side toward Ball Ground. Call and we'll connect you with a licensed exterminator covering your part of the area." },
    { q: 'Do older marble-era homes need different pest treatment?', a: "Often the inspection matters most. Older homes carry decades of settling, additions, and small gaps that termites and rodents exploit, and original crawlspaces can hold the moisture that draws pests — so a pro spends extra time finding entry points and conducive conditions before treating. The methods are the same proven, EPA-registered options; the difference is a closer look at where an aging house is vulnerable." },
    { q: 'Are Nelson pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Every pro in our directory is a licensed, insured Georgia exterminator." },
    { q: 'Can I get same-day or emergency service in Nelson?', a: "Often, yes. Many of the local pros serving Nelson offer same-day and emergency visits for urgent problems — a wasp nest by the door, a sudden roach sighting, or rodents in the house. Call and we'll route you to a Pickens County exterminator who can reach your area quickly." },
    { q: 'Will the treatments be safe for kids and pets?', a: "Yes. The pros serving Nelson apply EPA-registered products at label rates and offer family- and pet-safe or low-toxicity options, concentrating treatment on the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will flag any short re-entry window — usually just until things dry." },
  ],

  finalCtaHeading: 'Get Your Free Nelson, GA Pest Control Quote',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // The canonical six categories. No per-pest spoke pages are built for Nelson, so
  // every card renders as a NON-CLICKABLE <div> (city.ejs makes a card a link only
  // when a matching city.pestPages entry exists — there are none here). The hrefs
  // are kept so each card auto-upgrades to a link if a spoke is authored later.
  // Blurbs are written fresh for Nelson (no reuse from Jasper, Talking Rock, or
  // other sibling cities). Fire ant / wasp / ant / spider / flea fold UNDER
  // General Pest Control — no seventh card.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/nelson/termite-control/',
      blurb: "Eastern subterranean termites are the dominant wood-destroyer in the North Georgia foothills, and Nelson's older marble-era homes and damp crawlspaces give them seasoned wood to feed on. Trenched liquid termiticide barriers, perimeter bait systems, and the Georgia wood-infestation letter when you buy or sell." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/nelson/bed-bug-treatment/',
      blurb: "Bed bugs travel in on luggage, used furniture, and visitors, and they take hold in any home no matter how remote it is. Whole-room heat or a scheduled residual program clears every life stage, verified by follow-up inspection." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/nelson/cockroach-control/',
      blurb: "German roaches that breed indoors, plus the big 'palmetto bugs' that drift in from woodpiles, leaf litter, and the crawlspaces under older Nelson homes — knocked down and held back, typically with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/nelson/mosquito-control/',
      blurb: "Metro Atlanta to the south ranks among the country's worst for mosquitoes, and the damp low spots and standing water around Nelson's foothill lots raise their own. Resting-area barrier treatments plus larvicide on the standing water, all season long." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/nelson/rodent-control/',
      blurb: "When the foothills cool, roof rats, Norway rats, and mice work in from the woods, sheds, and barns toward a warm Nelson attic or wall. Trapping, sealing the entry points so they can't return, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/nelson/pest-control/',
      blurb: "Fire ants in the lawns and pastures, alongside spiders, wasps, ants, ticks, and fleas around foothill and wooded property. One recurring quarterly plan handles the everyday pests together, year-round." },
  ],

  // No pestPages — HUB ONLY. (Adding an entry here later upgrades its card to a
  // link to the matching /georgia/nelson/<pest>/ spoke.)
};
