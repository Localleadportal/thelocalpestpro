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
  metaDesc: "Pest control in Cumming, GA & Forsyth County — termites, new-construction pretreatment, mosquitoes near Lake Lanier, rodents & fire ants. Call for a quote.",
  h1: 'Pest Control in Cumming, GA',
  heroSub: "As the seat of Forsyth County — one of the fastest-growing areas in Georgia — Cumming pairs wave after wave of new construction with humid summers and mild winters, so termites, mosquitoes, roaches, and rodents stay active here close to year-round. Get a local Cumming exterminator who knows the area, fast.",

  overviewHeading: 'Pest Control Built for Cumming & Forsyth County',
  overview: [
    "Few places in Georgia have grown like Cumming and Forsyth County. As one of the state's — and the nation's — fastest-growing counties, the area has filled with new subdivisions rising along the GA 400 corridor, and that building boom shapes its pest pressure. Freshly graded lots and new framing sit directly on disturbed soil that subterranean termites colonize readily, which is exactly why new-construction termite pretreatment is such a relevant step for Cumming homeowners — while older homes near downtown and out toward Sawnee Mountain have had years for ants, roaches, and rodents to find the gaps.",
    "The constant underneath all that growth is the climate. Cumming's humid subtropical weather — long, sticky summers, mild winters, and steady rain — means most pests here barely get an off-season, so a recurring, locally-tuned plan usually beats one-off treatments. It doesn't help that Lake Lanier sits right on Forsyth County's edge, feeding the standing water and humidity that drive heavy mosquito pressure. Whether you're in 30040, 30041, or 30028, the pros in our directory quote your specific Cumming property — ask about pricing before any work begins.",
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
        "From new-build termite risk to Lake Lanier mosquitoes, here's how the pros in our directory handle the pests Cumming and Forsyth County homeowners deal with most:",
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
        "The local pros in our directory cover Cumming across all three ZIP codes and the surrounding Forsyth County communities. If you're in one of these nearby areas, we can connect you with a local exterminator too:",
      ],
      areas: true, // renders the nearby-areas grid + the ZIP/county line
    },
    {
      heading: 'How It Works in Cumming',
      cards: [
        { name: '1. Call for a quote', text: "One call connects you with a exterminator serving Cumming and the wider Forsyth County area — ask about licensing and insurance when you call — no obligation, no pressure." },
        { name: '2. Get a local inspection', text: "Your pro walks the property, confirms the pest and how far it has spread, and recommends the right treatment for your Cumming home and lot — one-time or recurring." },
        { name: '3. Problem solved', text: "Licensed technicians treat, seal out, and prevent using EPA-registered products at label rates, with family- and treatment options — ask about any guarantee when you call." },
      ],
    },
    {
      heading: 'About The Local Pest Pro Directory',
      paras: [
        "The Local Pest Pro is a directory that connects Cumming homeowners with local exterminators across Forsyth County — ask about licensing and insurance when you call — we're not a single company. When you call, you reach the pest control pro assigned to the Cumming area, or our shared directory line at (844) 544-3498, for a property-specific quote — ask about pricing when you call. Every pro we connect you with is licensed under the Georgia Department of Agriculture's Structural Pest Control Commission and applies EPA-registered products at label rates, with family- and treatment options.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Cumming?', a: "There's no flat rate — it comes down to the pest, how severe the problem is, and the size of your home and lot. Recurring general pest control is the most budget-friendly option, while specialty work like termite or bed bug treatment costs more because of the equipment and follow-up involved. Every pro in our directory gives you a property-specific quote — ask about pricing when you call before any work begins, so you'll know your exact price up front." },
    { q: 'What pests are most common in Cumming and Forsyth County?', a: "The big ones are subterranean termites (Cumming sits in a heavy termite-pressure area), red imported fire ants in lawns, mosquitoes bred around Lake Lanier and Forsyth County's creeks, German roaches and outdoor 'palmetto bugs' that thrive in the humidity, and roof rats and mice that push into attics as nights cool. The local pros in our directory treat all of them." },
    { q: 'Does my new-construction home in Cumming need termite pretreatment?', a: "It's worth confirming. Cumming's many new subdivisions sit on freshly graded, disturbed soil with new, untreated framing — exactly what foraging subterranean termites colonize — so new-construction termite pretreatment, or a termite bond, is common on new homes here. Many builders apply a pretreatment, but coverage varies and doesn't last forever; if you can't confirm documented, current protection, a termite inspection is the smart move." },
    { q: 'Why are mosquitoes so bad near Lake Lanier?', a: "Mosquitoes need only warmth and a little standing water, and the lake, coves, and creeks around Forsyth County supply plenty of it through the long warm season. The Atlanta metro ranks among the top five U.S. cities for mosquito activity on Orkin's 2025 list. Effective mosquito control in Cumming treats the shaded areas where adults rest and larvicides the standing water where they breed, refreshed every few weeks." },
    { q: 'Do you serve the areas around Cumming too?', a: "Yes. Beyond Cumming's 30040, 30041, and 30028 ZIP codes, the pros in our directory serve the surrounding Forsyth County communities, including Coal Mountain, Chestatee, Silver City, and Big Creek. Call and we'll connect you with a exterminator covering your part of the county." },
    { q: 'Are Cumming pest control companies licensed?', a: "They should be. Structural pest control in Georgia is regulated by the Georgia Department of Agriculture through its Structural Pest Control Commission, which licenses companies and certifies applicators. Ask the assigned contractor about licensing and insurance in Georgia when you call." },
    { q: 'Can I get same-day or emergency pest control in Cumming?', a: "Availability varies by contractor. Ask the assigned contractor whether they offer same-day or emergency visits for urgent problems like a wasp nest, a sudden roach issue, or rodents in the house." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Cumming pros use EPA-registered products applied at label rates and offer family- and treatment options, with most product placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Get Cumming Pest Control',

  // ── Hub pest cards ───────────────────────────────────────────────────────────
  // HUB-ONLY build: no per-pest spoke pages for Cumming yet, so each card jumps to
  // its on-page anchored section in "The Pests We Treat in Cumming — Pest by Pest"
  // above (no dead links). Build the spoke pages later and repoint these hrefs to
  // /georgia/cumming/<pest>/. Blurbs are written fresh for Cumming.
  pests: [
    { emoji: '🐛', name: 'Termite Control', href: '/georgia/cumming/termite-control/',
      blurb: "Cumming sits in one of the nation's heaviest termite zones — eastern subterranean dominant (Formosan termites rare in Georgia). New-construction pretreatment, soil barriers, bait systems, and the Georgia termite letter for closings." },
    { emoji: '🛏️', name: 'Bed Bug Treatment', href: '/georgia/cumming/bed-bug-treatment/',
      blurb: "Travel-driven bed bugs spread fast through Cumming homes, apartments, and rentals. Whole-room heat or targeted residual treatment kills every life stage, with follow-up verification." },
    { emoji: '🪳', name: 'Cockroach Control', href: '/georgia/cumming/cockroach-control/',
      blurb: "German roaches indoors and big 'palmetto bugs' from the mulch and crawlspaces in the humidity — cleared out and kept out, usually with a guarantee." },
    { emoji: '🦟', name: 'Mosquito Control', href: '/georgia/cumming/mosquito-control/',
      blurb: "The Atlanta metro ranks among the top five U.S. cities for mosquito activity (Orkin 2025), and Lake Lanier and Forsyth County's creeks give them standing water to breed. Yard barrier sprays and larviciding through Cumming's long warm season." },
    { emoji: '🐀', name: 'Rodent Control', href: '/georgia/cumming/rodent-control/',
      blurb: "As Cumming nights cool, roof rats, Norway rats, and house mice push into attics and walls. Trapping, exclusion that seals the entry points, and ongoing monitoring." },
    { emoji: '🐌', name: 'General Pest Control', href: '/georgia/cumming/pest-control/',
      blurb: "Red imported fire ants are everywhere in Forsyth County, alongside spiders, wasps, hornets, and nuisance ants. One recurring quarterly plan covers them all, year-round." },
  ],

  // No per-pest spoke pages for Cumming yet. Empty so the hub renders cleanly and
  // the sitemap adds only /georgia/cumming/. Add entries here (and repoint the
  // hub-card hrefs above to /georgia/cumming/<pest>/) when the spokes are authored.
  photo: '/images/cumming.webp',
  pestPages: {
    'termite-control': {
      cardBlurb: 'Cumming\'s growth means termite work on two fronts: brand-new subdivisions where disturbed soil and fresh mulch hide early signs, and older homes near Lake Lanier where moisture and',
      metaTitle: 'Termite Control in Cumming, GA | The Local Pest Pro',
      metaDesc: 'Termite control in Cumming, GA — inspections, treatments, and WIIR letters for new and older homes along GA 400.',
      h1: 'Termite Control in Cumming, GA',
      breadcrumbName: 'Termite Control',
      heroSub: 'Cumming\'s growth means termite work on two fronts: brand-new subdivisions where disturbed soil and fresh mulch hide early signs, and older homes near Lake Lanier where moisture and wood-to-soil contact have had years to work. Either way, the fix starts with an inspection and a treatment plan built for that house — not a one-size quote.',
      sections: [
        {
          heading: 'What a Cumming Termite Inspection Covers',
          paras: [
            'A termite inspection in Cumming checks the foundation line, crawlspace, garage, and any wood touching soil — plus the moisture problems that invite termites in the first place. Eastern subterranean termites are Georgia\'s dominant species, and they travel in mud tubes you can spot if you know where to look: along the slab, behind stored boxes in the garage, and around plumbing penetrations.',
            'New-construction buyers should ask about a Georgia wood-infestation report (WIIR) early, because a lender may require one and the inspection has to be scheduled around closing. Existing homeowners should mention any soft or hollow-sounding wood, discarded wings near windowsills, or mud tubes they have seen.'
          ],
        },{
          heading: 'Treatment Options and What to Ask',
          paras: [
            'Treatment usually means a soil barrier, bait stations, or a combination, depending on the house and the infestation. Ask the assigned contractor which approach fits your home, how long it takes, whether follow-up inspections are included, and what the price covers. Ask about licensing and about any guarantee in plain terms before work starts.',
            'Between visits, keep mulch and soil away from siding, fix leaks and drainage that wet the foundation, and do not disturb mud tubes before an inspection — an inspector reads them to find the colony\'s entry point.'
          ],
        },
      ],
      faqs: [
      { q: 'How do I know if my Cumming home has termites?', a: 'Look for mud tubes on the foundation, discarded wings near windows, and soft or hollow-sounding wood. An inspection confirms it — and it is the only way to size the treatment.' },
      { q: 'Do I need a termite letter to buy or sell in Cumming?', a: 'Many lenders require a Georgia wood-infestation report (WIIR). Ask the assigned contractor about inspection licensing and the WIIR, and mention your closing date when you call.' },
      { q: 'Does new construction still need termite protection?', a: 'Yes. Disturbed soil and fresh mulch can hide early activity, and a new home can sit over an active colony. Ask about treatment options for new builds when you call.' }
      ],
      finalCtaHeading: 'Get Termite Control in Cumming',
    },
    'mosquito-control': {
      cardBlurb: 'Cumming sits close to Lake Lanier, and that shoreline plus the creeks and retention ponds of new subdivisions keeps mosquito pressure high all summer. A yard that backs onto water ',
      metaTitle: 'Mosquito Control in Cumming, GA | The Local Pest Pro',
      metaDesc: 'Mosquito control in Cumming, GA — barrier sprays and larvicide for lake-edge yards and new-subdivision drainage.',
      h1: 'Mosquito Control in Cumming, GA',
      breadcrumbName: 'Mosquito Control',
      heroSub: 'Cumming sits close to Lake Lanier, and that shoreline plus the creeks and retention ponds of new subdivisions keeps mosquito pressure high all summer. A yard that backs onto water or a pond needs a different plan than an inland lot: barrier treatment for the adult mosquitoes resting in shrubs, and larvicide where water stands.',
      sections: [
        {
          heading: 'Why Cumming Yards Stay Mosquito-Heavy',
          paras: [
            'Mosquitoes breed in standing water, and Cumming has a lot of it: lake shoreline, creek bottoms, retention ponds built for new developments, birdbaths, clogged gutters, and anything that holds rain for a few days. Metro Atlanta is one of the top mosquito metros in the country, so a single spray rarely holds without a recurring plan through the season.',
            'When you call, mention whether the yard backs onto the lake, a creek, or a retention pond, and where water stands after rain. That tells the dispatcher whether larvicide belongs in the plan and how much barrier coverage the shrubs and shaded areas need.'
          ],
        },{
          heading: 'What a Mosquito Plan Looks Like Here',
          paras: [
            'A typical plan means scheduled barrier sprays through the warm season, larvicide in standing water that cannot be drained, and advice on the water sources you can remove yourself. Ask the assigned contractor how often visits repeat, what happens after a heavy rain, and about products, pets, and re-entry when you call.',
            'Between visits, tip out anything holding water, keep gutters clear, and trim dense shrubs where mosquitoes rest during the day. Ask about pricing and availability when you call.'
          ],
        },
      ],
      faqs: [
      { q: 'Why are mosquitoes worse near the lake?', a: 'Standing water is the driver. Lake shoreline, creeks, and retention ponds give mosquitoes breeding sites a dry inland lot does not have.' },
      { q: 'Does one spray last all summer?', a: 'Usually not. Barrier treatments wear off, and rain refills breeding sites. A recurring plan through the warm season is what holds a yard down.' },
      { q: 'What should I mention when I call?', a: 'Whether the yard backs onto water, where water stands after rain, and how the yard is used — kids, pets, and evening outdoor time change the plan.' }
      ],
      finalCtaHeading: 'Get Mosquito Control in Cumming',
    },
    'rodent-control': {
      cardBlurb: 'Cumming\'s rodents split two ways: roof rats that follow tree limbs and power lines onto new-subdivision roofs, and house mice that slip through construction gaps in new homes and t',
      metaTitle: 'Rodent Control in Cumming, GA | The Local Pest Pro',
      metaDesc: 'Rodent control in Cumming, GA — roof rats, mice, and exclusion for new subdivisions and lake-area homes.',
      h1: 'Rodent Control in Cumming, GA',
      breadcrumbName: 'Rodent Control',
      heroSub: 'Cumming\'s rodents split two ways: roof rats that follow tree limbs and power lines onto new-subdivision roofs, and house mice that slip through construction gaps in new homes and the worn gaps of older ones. Either way the job is the same shape — remove what is inside, then seal the ways in, because trapping alone never holds.',
      sections: [
        {
          heading: 'How Rodents Get Into Cumming Homes',
          paras: [
            'Roof rats use overhanging limbs, vines, and utility lines to reach the roof, then enter through vents, gaps at the roofline, and attic openings. House mice need only a gap the width of a pencil: around pipes, under doors, and where new construction left a joint unsealed. Lake-area homes add another route, with rodents travelling along creek corridors and wooded lots.',
            'Signs to mention when you call: droppings in the attic or pantry, scratching at night, gnaw marks on wiring or food packaging, and any gap or hole you have spotted at the roofline or foundation.'
          ],
        },{
          heading: 'Removal, Then Exclusion',
          paras: [
            'A rodent job usually means trapping or baiting to clear what is inside, then exclusion — sealing entry points with materials rodents cannot chew through — and a check for damage to insulation and wiring. Ask the assigned contractor what exclusion covers, whether follow-up visits are included, and about pricing when you call.',
            'Between visits, keep food sealed, trim limbs that touch the roof, and clear clutter from the attic and garage so new activity is easy to spot. Ask about products and pets when you call.'
          ],
        },
      ],
      faqs: [
      { q: 'Are roof rats common in Cumming?', a: 'Yes. Roof rats follow tree limbs and lines onto roofs, and new subdivisions with young trees and fresh rooflines give them plenty of routes in.' },
      { q: 'Why does trapping alone not work?', a: 'Because the entry points stay open. New rodents move in as fast as trapped ones are removed, so exclusion — sealing the ways in — is the part that holds.' },
      { q: 'What should I mention when I call?', a: 'Droppings, night scratching, gnaw marks, and any gap at the roofline or foundation you have spotted.' }
      ],
      finalCtaHeading: 'Get Rodent Control in Cumming',
    },
    'bed-bug-treatment': {
      cardBlurb: 'Cumming\'s bed bug pattern follows its growth: families moving into new subdivisions, renters turning over in the apartment stock along GA 400, and secondhand furniture changing han',
      metaTitle: 'Bed Bug Treatment in Cumming, GA | The Local Pest Pro',
      metaDesc: 'Bed bug treatment in Cumming, GA — fast-growth moves, rental turnover, and secondhand furniture on the GA 400 corridor.',
      h1: 'Bed Bug Treatment in Cumming, GA',
      breadcrumbName: 'Bed Bug Treatment',
      heroSub: 'Cumming\'s bed bug pattern follows its growth: families moving into new subdivisions, renters turning over in the apartment stock along GA 400, and secondhand furniture changing hands fast. Bed bugs travel in luggage, moving boxes, and used furniture — not in dirt — so a new, clean home is just as exposed as an old one.',
      sections: [
        {
          heading: 'How Bed Bugs Arrive in a Fast-Growth Town',
          paras: [
            'The usual routes are travel and moving: a hotel stay, a college move, a new rental, or a secondhand couch or mattress brought home from a sale. Once inside, bed bugs hide in mattress seams, headboards, nightstands, and baseboard cracks, and they feed at night — so the first sign is often bites in a line or cluster, or small rust-coloured spots on bedding.',
            'When you call, mention any recent travel, move, or secondhand furniture, and where bites or spots have appeared. That tells the dispatcher whether the job is one room or the whole home, and whether neighbouring units need checking too.'
          ],
        },{
          heading: 'Treatment, and Why Preparation Matters',
          paras: [
            'Treatment usually means a combination of heat, targeted product, or both, plus follow-up visits — bed bugs hide well enough that one visit rarely clears them. Preparation matters: laundering bedding and clothes on high heat, clearing clutter around beds, and not throwing furniture out before the visit, since that can spread them. Ask the assigned contractor what preparation they require, how many visits are planned, and about pricing when you call.',
            'After treatment, keep monitoring with the traps or checks the contractor leaves, and tell them promptly if bites continue — that is how follow-up visits get timed.'
          ],
        },
      ],
      faqs: [
      { q: 'Can a new, clean home get bed bugs?', a: 'Yes. Bed bugs travel in luggage, moving boxes, and used furniture. Cleanliness does not protect a home; inspection and treatment do.' },
      { q: 'Should I throw out the mattress?', a: 'Not before the visit. Throwing furniture out can spread bed bugs to other rooms, and most mattresses can be treated. Ask the contractor first.' },
      { q: 'Why are follow-up visits needed?', a: 'Bed bugs hide in seams and cracks, and eggs survive many treatments. Follow-ups catch what the first visit missed.' }
      ],
      finalCtaHeading: 'Get Bed Bug Treatment in Cumming',
    },
    'cockroach-control': {
      cardBlurb: 'Cumming\'s cockroach pattern is a new-town pattern: brand-new kitchens with fresh cabinetry gaps, new mulch beds against the foundation, and new-subdivision sanitation that has not ',
      metaTitle: 'Cockroach Control in Cumming, GA | The Local Pest Pro',
      metaDesc: 'Cockroach control in Cumming, GA — new kitchens, new mulch, and new-subdivision sanitation gaps.',
      h1: 'Cockroach Control in Cumming, GA',
      breadcrumbName: 'Cockroach Control',
      heroSub: 'Cumming\'s cockroach pattern is a new-town pattern: brand-new kitchens with fresh cabinetry gaps, new mulch beds against the foundation, and new-subdivision sanitation that has not settled yet. German cockroaches ride in with groceries, boxes, and appliances; American cockroaches — the big palmetto bugs — come in from mulch, drains, and damp ground-level spaces.',
      sections: [
        {
          heading: 'Where Cumming Cockroaches Come From',
          paras: [
            'German cockroaches are the kitchen species: they hide in cabinet hinges, appliance motors, and cardboard, and they spread through shared walls and moving boxes. American cockroaches are the outdoor species that wanders in — from mulch beds, leaf litter, drains, and crawlspaces, especially after rain. New homes get both, because new kitchens have fresh gaps and new mulch beds sit right against the slab.',
            'When you call, say which kind you are seeing — small and in the kitchen, or large and near drains and doors — and where. That decides whether the plan is mostly indoor baiting and sanitation or mostly exterior and entry-point work.'
          ],
        },{
          heading: 'Baiting, Sanitation, and Sealing',
          paras: [
            'A cockroach job usually means baiting in the harbourage areas, treatment of entry points, and sanitation advice that actually sticks: sealed food, emptied trash, and cardboard out of the kitchen. Ask the assigned contractor how many visits are planned, what preparation they need, and about pricing and products when you call.',
            'Between visits, keep food sealed, wipe up crumbs and grease, pull mulch back from the foundation, and fix dripping taps — cockroaches need water as much as food. Ask about pets and re-entry when you call.'
          ],
        },
      ],
      faqs: [
      { q: 'Why do new homes get cockroaches?', a: 'Because new kitchens have fresh gaps, new mulch beds sit against the slab, and cockroaches ride in with boxes, groceries, and appliances. New does not mean sealed.' },
      { q: 'What is the difference between the small and large ones?', a: 'Small kitchen cockroaches are usually German cockroaches, treated mostly indoors. Large ones are usually American cockroaches coming in from outside, treated at entry points and exterior harbourage.' },
      { q: 'Do I need to empty all my cabinets?', a: 'The contractor will say what preparation they need. Usually it is the kitchen cabinets and appliance areas, not the whole house.' }
      ],
      finalCtaHeading: 'Get Cockroach Control in Cumming',
    },
    'pest-control': {
      cardBlurb: 'Cumming\'s newest neighbourhoods bring a general-pest pattern older towns do not: fresh sod, retention ponds, and HOA common areas that all need to be treated as one landscape. Fire',
      metaTitle: 'General Pest Control in Cumming, GA | The Local Pest Pro',
      metaDesc: 'General pest control in Cumming, GA — new-subdivision sod, retention ponds, and HOA common areas, one recurring plan.',
      h1: 'General Pest Control in Cumming, GA',
      breadcrumbName: 'General Pest Control',
      heroSub: 'Cumming\'s newest neighbourhoods bring a general-pest pattern older towns do not: fresh sod, retention ponds, and HOA common areas that all need to be treated as one landscape. Fire ants colonise the new turf, mosquitoes breed in pond edges and common-area drainage, and nuisance ants follow construction gaps into new kitchens. One recurring plan covers that whole new landscape together.',
      sections: [
        {
          heading: 'Sod, Ponds, and Common Areas: the New-Subdivision Pattern',
          paras: [
            'A new subdivision is not a collection of separate yards — it is one graded landscape. Sod laid in the same season, retention ponds built for the development, and common areas mowed on the same schedule mean fire ants, mosquitoes, and nuisance ants move freely across lot lines. Treating one yard while the pond edge and the common area next door go untreated is why a single visit rarely holds.',
            'That shared landscape changes what to mention when you call: whether the home backs onto a retention pond or a common area, whether the sod is new this season, and where mounds and ant trails actually are. A dispatcher who hears "pond lot, new sod, mounds along the back fence" plans a very different visit than one who hears only "ants in the kitchen".'
          ],
        },{
          heading: 'What the Plan Does Differently on a New Lot',
          paras: [
            'A recurring plan for a new Cumming lot typically means a scheduled perimeter and yard treatment through the warm season, fire ant baiting across the turf — not just the mounds you can see — and attention to the pond edge and common-area boundary where breeding and colonies sit. Ask the assigned contractor what a plan covers, how often visits repeat, and whether common-area edges are included or only the lot itself.',
            'Between visits, keep mounds marked and avoided rather than disturbed, tip out anything holding water after rain, and seal obvious ant entry points at doors and windows. Ask about products, pets, and re-entry when you call — especially for a yard with new sod, where treatment timing and watering schedules interact.'
          ],
        },
      ],
      faqs: [
      { q: 'Why do fire ants keep coming back on a new lot?', a: 'Because the colony network extends beyond one yard into common areas and pond edges. Baiting across the turf, kept up on a recurring plan, is what holds a new lawn.' },
      { q: 'Does the plan cover the retention pond edge?', a: 'That depends on the plan. Ask the assigned contractor whether pond edges and common-area boundaries are included or only the lot itself.' },
      { q: 'What should I mention when I call?', a: 'Whether the lot backs onto a pond or common area, whether the sod is new this season, and where mounds and ant trails are.' }
      ],
      finalCtaHeading: 'Get General Pest Control in Cumming',
    },
  },
};
