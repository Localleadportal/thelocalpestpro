'use strict';

// ── Woodstock, GA — city hub + per-pest city pages ───────────────────────────
// Fully localized, UNIQUE content (no copy reused from the Georgia state pages,
// the national service pages, or sibling Woodstock pages). Targets local intent
// ("woodstock pest control", "pest control woodstock"). Rendered by
// views/city.ejs (hub) and views/city-service.ejs (per-pest) via the
// /georgia/woodstock/ and /georgia/woodstock/<pest>/ routes.
//
// `county` drives the LeadPortal contractor lookup — Woodstock is in Cherokee
// County, so an assigned Cherokee County 'Pest Control' contractor shows on
// every Woodstock page (name + phone + LocalBusiness schema); until one is
// assigned the pages fall back to the shared (844) directory line.
//
// Each pestPages entry carries a `cardBlurb` (the short, unique blurb shown on
// the city hub's pest card) plus the full page content.

module.exports = {
  name: 'Woodstock',
  slug: 'woodstock',
  county: 'Cherokee County',
  region: 'GA',
  zips: ['30188', '30189'],
  neighborhoods: [
    'Towne Lake', 'Eagle Watch', 'Bradshaw Farm', 'The Woodlands', 'Wyngate',
    'Brookshire', 'Bradshaw Park', 'Kingsgate', 'Serenade', 'Downtown Woodstock',
  ],

  metaTitle: 'Woodstock Pest Control | Local Exterminator Near You',
  metaDesc: "Local pest control in Woodstock, GA & Cherokee County — termites, mosquitoes, roaches, rodents & fire ants. Licensed, guaranteed, free quote. Call your local pro.",
  h1: 'Pest Control in Woodstock, GA',
  heroSub: "Wooded lots, lake-front neighborhoods, and Georgia humidity make Woodstock a hotspot for termites, mosquitoes, roaches, and rodents. Get a licensed local exterminator who knows Cherokee County — fast service, fair pricing, and a satisfaction guarantee.",

  overview: [
    "From the shops of Downtown Woodstock to the wooded streets of Towne Lake, the city blends established neighborhoods, brand-new construction, and a lot of tree cover and water — and every one of those features brings its own pest pressure. Homes backing up to forested lots and creeks invite termites, rodents, and mosquitoes; the area's red clay and humidity keep ants and roaches active most of the year; and new builds aren't immune, since fresh framing and disturbed soil are exactly what subterranean termites look for.",
    "Whether you're in 30188 near downtown and I-575 or out in 30189 by Lake Allatoona and Eagle Watch, the pros in our directory provide licensed, insured pest control built for Woodstock homes — with free inspections and quotes before any work begins.",
  ],

  sections: [
    {
      heading: 'Why Woodstock Homes Need Pest Control',
      paras: [
        "Woodstock sits in the wooded, hilly southern end of Cherokee County, where humid summers, mild winters, and abundant tree and water cover give pests a year-round foothold. Mature-tree neighborhoods and lots that back to woods or water see steady pressure from termites, mosquitoes, and rodents, while the region's clay soil and humidity keep ants, fire ants, and roaches busy from early spring well into fall.",
        "The city's rapid growth adds its own twist: new subdivisions sit on freshly graded, disturbed soil that subterranean termites readily colonize, while older homes near Downtown Woodstock have had decades for pests to find a way in. A recurring, locally-tuned plan handles both far better than waiting for the next infestation.",
      ],
    },
    {
      heading: 'Neighborhoods & Areas We Serve in Woodstock',
      paras: [
        "Local pros in our directory cover Woodstock across both ZIP codes — 30188 around Downtown Woodstock and 30189 toward Towne Lake and Lake Allatoona — including these neighborhoods and everywhere between:",
      ],
      areas: true, // signals the template to render the neighborhoods grid here
    },
    {
      heading: 'Local, Licensed & Guaranteed',
      paras: [
        "Every pest control company listed here is licensed and insured in Georgia, regulated by the Georgia Department of Agriculture, and uses EPA-registered, family- and pet-safe products applied at label rates. You get a free, property-specific inspection and quote up front, fast scheduling — including same-day and emergency service — and work most companies back with a satisfaction guarantee between visits.",
      ],
    },
  ],

  faqs: [
    { q: 'How much does pest control cost in Woodstock?', a: "It depends on the pest, the size of your home and lot, and whether you need a one-time treatment or a recurring plan. General recurring pest control is the most affordable option, while specialty work like termite or bed bug treatment costs more. Every pro in our directory gives a free, property-specific quote before any work begins, so you'll know your exact price up front." },
    { q: 'Do you offer same-day pest control in Woodstock?', a: "Yes — many of the local pros serving Woodstock offer same-day and emergency service for urgent problems like stinging insects, rodents, or a sudden roach issue. Call and we'll connect you with a licensed Cherokee County exterminator who can get out fast." },
    { q: 'What areas of Woodstock do you serve?', a: "All of Woodstock and the surrounding Cherokee County area — both the 30188 and 30189 ZIP codes — including Towne Lake, Eagle Watch, Bradshaw Farm, The Woodlands, Wyngate, Brookshire, Kingsgate, Serenade, and Downtown Woodstock." },
    { q: 'What are the most common pests in Woodstock?', a: "The big ones are subterranean termites (especially around wooded lots and new construction), mosquitoes (near Towne Lake, Lake Allatoona, and shaded yards), roaches and 'palmetto bugs,' roof rats and mice in attics, and fire ants in lawns. Our directory pros handle all of them." },
    { q: 'Are the treatments safe for kids and pets?', a: "Yes. Woodstock pros use EPA-registered products applied at label rates, with most treatment placed around the exterior, entry points, and cracks and crevices rather than across living areas. Your technician will note any short re-entry time — usually just until the product dries." },
  ],

  finalCtaHeading: 'Get Your Free Woodstock Pest Control Quote',

  pestPages: {
    'termite-control': {
      cardBlurb: "Subterranean termites thrive in Woodstock's wooded, clay-soil lots and new construction. Liquid barriers, bait systems, and the Georgia termite letter for closings.",
      metaTitle: 'Woodstock Termite Treatment | Free Inspection & Letter',
      metaDesc: "Termite treatment in Woodstock, GA — subterranean termites, liquid or bait, plus the Georgia termite letter for closings. Free inspection — call your local pro.",
      h1: 'Termite Treatment in Woodstock, GA',
      breadcrumbName: 'Termite Treatment',
      heroSub: "Woodstock's wooded lots, red clay, and mix of new construction and established homes make it prime territory for subterranean termites. Get a licensed Cherokee County termite pro to inspect, treat, and protect your home — plus the Georgia termite letter when you buy or sell.",
      sections: [
        {
          heading: 'Why Termites Target Woodstock Homes',
          paras: [
            "Subterranean termites need warmth, moisture, and wood — and Woodstock hands them all three. Lots that back to woods, creeks, or the Lake Allatoona watershed stay damp, and the area's heavy red clay holds moisture against foundations, creating ideal conditions along the soil line where termites forage. Crawlspace homes common around Towne Lake and older neighborhoods give them quiet, humid access to floor joists and sills.",
            "New construction is a target too, not an exception. The graded, disturbed soil and fresh framing in Woodstock's newer subdivisions are exactly what a foraging colony looks for, which is why many builders and lenders expect a termite treatment or bond on a brand-new home.",
          ],
        },
        {
          heading: 'Termite Treatment Built for Woodstock Properties',
          paras: [
            "A licensed local inspector matches the treatment to your home and lot:",
          ],
          cards: [
            { name: 'Liquid barrier', text: "A non-repellent termiticide trenched into the soil around the foundation — the go-to for Woodstock's slab and crawlspace homes, creating a continuous treated zone that wipes out foragers." },
            { name: 'Bait systems', text: "In-ground stations placed around landscaped, wooded, or lakeside lots where trenching is impractical; foragers carry the bait back to collapse the colony, with ongoing monitoring." },
            { name: 'Annual bond & inspections', text: "A renewable termite bond with yearly re-inspections keeps protection active — important in a wooded area with constant outside pressure." },
          ],
        },
        {
          heading: "Buying or Selling in Woodstock? You'll Need a Termite Letter",
          paras: [
            "Almost every Cherokee County home sale involves a termite letter — officially the Georgia Wood Infestation Inspection Report. Lenders and closing attorneys typically require it, it's usually done within 30 days of closing, and only a Georgia-licensed operator can issue it. The pros in our directory perform Woodstock termite inspections and issue the report, so your closing stays on schedule.",
          ],
        },
      ],
      faqs: [
        { q: 'How do I know if I have termites in my Woodstock home?', a: "Watch for mud tubes on foundation walls or crawlspace piers, winged swarmers (or discarded wings on windowsills) on warm spring days, and wood that sounds hollow when tapped. Because termites work out of sight, a free professional inspection is the surest way to know." },
        { q: 'Do brand-new homes in Woodstock get termites?', a: "Yes. New subdivisions sit on disturbed soil with fresh framing, which subterranean termites readily colonize — that's why a builder pre-treatment or bond is common here. If your new Woodstock home didn't come with documented termite protection, it's worth an inspection." },
        { q: 'Do I need a termite letter to sell my house in Woodstock?', a: "It isn't a state law, but lenders and closing attorneys almost always require the Georgia Wood Infestation Inspection Report before a Cherokee County closing. A licensed local pro can inspect and issue it, typically within 30 days of your closing date." },
        { q: 'How much does termite treatment cost in Woodstock?', a: "It varies with your home's size and foundation, the termite species, and whether you choose a liquid barrier or a bait system. You'll get a free inspection and an exact written quote first. A termite letter for a closing is a separate, lower-cost service." },
      ],
      finalCtaHeading: 'Protect Your Woodstock Home From Termites',
    },

    'mosquito-control': {
      cardBlurb: "Towne Lake, Lake Allatoona, and shaded yards make Woodstock a mosquito magnet. Barrier sprays, larvicide, and misting systems give your yard back.",
      metaTitle: 'Woodstock Mosquito Control | Take Back Your Yard',
      metaDesc: "Mosquito control in Woodstock, GA — barrier sprays, larvicide & misting for Towne Lake, Lake Allatoona & wooded yards. Free quote — call your local pro.",
      h1: 'Mosquito Control in Woodstock, GA',
      breadcrumbName: 'Mosquito Control',
      heroSub: "With Towne Lake, Lake Allatoona, the Little River, and shaded wooded lots, Woodstock gives mosquitoes everything they need to breed. Licensed local mosquito control can make your yard usable again from spring through fall.",
      sections: [
        {
          heading: 'Why Mosquitoes Thrive in Woodstock',
          paras: [
            "Mosquitoes breed in standing water and rest in cool, shaded vegetation — and Woodstock is full of both. The 153-acre Towne Lake, nearby Lake Allatoona, the Little River, neighborhood retention ponds, and countless creeks give larvae endless nurseries, while mature-tree lots and dense landscaping give adults shady daytime harborage right next to your patio. Add metro Atlanta's notorious mosquito pressure and a season that runs March into October, and a can of repellent doesn't stand a chance.",
            "It only takes a bottle cap of water to breed a batch, so even tidy Woodstock yards produce them — which is why treating resting areas and breeding sites together works far better than spraying yourself before you go outside.",
          ],
        },
        {
          heading: 'How Local Mosquito Control Works',
          paras: [
            "A licensed Woodstock mosquito program hits the problem at every stage:",
          ],
          cards: [
            { name: 'Barrier treatments', text: "A residual treatment applied to shrubs, tree lines, and shaded resting spots, reapplied roughly every three to four weeks through the season to knock down biting adults." },
            { name: 'Larviciding', text: "Treating standing water you can't drain — retention ponds, drainage swales, low spots, and water features — to kill larvae before they ever take flight." },
            { name: 'Misting systems', text: "Automated systems for larger or lakeside Towne Lake lots that want hands-off, scheduled protection, plus one-time event sprays before a party or cookout." },
          ],
        },
        {
          heading: 'Standing Water Around Woodstock Yards',
          paras: [
            "Between treatments, cutting breeding sites makes a big difference. Common culprits around Woodstock homes:",
          ],
          bullets: [
            "Clogged gutters and downspouts that pond after Georgia thunderstorms",
            "Plant saucers, buckets, kids' toys, and tarps that hold rainwater",
            "Neighborhood retention ponds and drainage swales that stay wet",
            "Bird baths and pet water bowls that aren't refreshed every few days",
            "The shallow, vegetated edges of ponds and creeks",
          ],
        },
        {
          heading: 'Protect Your Family From Mosquito-Borne Illness',
          paras: [
            "Georgia mosquitoes can carry West Nile virus — tracked statewide every year by public health, with risk peaking in late summer — and the aggressive Asian tiger mosquito common here bites during the day, not just at dusk. Mosquitoes also transmit heartworm to dogs, a real concern for Woodstock's many pet owners. Reducing the population around your home is about health, not just comfort.",
          ],
        },
      ],
      faqs: [
        { q: 'When does mosquito season start in Woodstock?', a: "Mosquitoes typically become active around March and stay out into October or later, with the worst pressure in the hot, rainy stretch from June through September. Starting a seasonal plan in early spring keeps the population down before it peaks." },
        { q: 'I live on Towne Lake — can mosquitoes still be controlled?', a: "Yes. While you can't treat the lake itself, a pro controls mosquitoes on your property with barrier treatments on resting vegetation and larviciding of the standing water you do have — retention areas, drains, gutters, and low spots. Lakeside lots often add a misting system for steadier protection." },
        { q: 'How often do mosquito treatments need to be done?', a: "Barrier treatments are usually reapplied every three to four weeks during the active season, because the residual wears off and new mosquitoes move in from surrounding woods and water. Misting systems run on a set schedule." },
        { q: 'Are mosquito treatments safe for pets and pollinators?', a: "Yes, when applied by a licensed pro. Technicians use EPA-registered products at label rates, target mosquito resting areas rather than blooming plants, and avoid treating when bees are active. Let treated areas dry — usually about 30 minutes — before pets and kids go back out." },
      ],
      finalCtaHeading: 'Reclaim Your Woodstock Backyard',
    },

    'cockroach-control': {
      cardBlurb: "German roaches indoors and 'palmetto bugs' from the mulch, crawlspaces, and wooded lots — cleared out and kept out, usually with a guarantee.",
      metaTitle: 'Woodstock Cockroach & Palmetto Bug Control',
      metaDesc: "Cockroach control in Woodstock, GA — German roaches indoors, palmetto bugs from the yard. Licensed Cherokee County pros, guaranteed & pet-safe. Free quote, call now.",
      h1: 'Cockroach Control in Woodstock, GA',
      breadcrumbName: 'Cockroach Control',
      heroSub: "From German roaches in the kitchen to the big 'palmetto bugs' that wander in from Woodstock's mulch beds, crawlspaces, and wooded lots, a licensed local pro can clear them out — and keep them out, usually with a guarantee.",
      sections: [
        {
          heading: 'The Roaches Woodstock Homeowners Actually See',
          paras: [
            "Most Woodstock roach calls come down to two very different problems. German cockroaches are small, indoor breeders that take hold in kitchens, bathrooms, apartments, and rentals — they multiply fast and signal a true infestation. The big roaches people call 'palmetto bugs' — smokybrown and American cockroaches — are outdoor insects that live in pine straw, mulch beds, gutters, crawlspaces, and the wooded lots common around Towne Lake, then wander inside. Damp crawlspaces and basements can also harbor dark Oriental cockroaches, the ones often mistaken for 'water bugs.'",
          ],
        },
        {
          heading: 'Indoor vs. Outdoor Roaches — Different Fixes',
          paras: [
            "Treating the wrong way wastes money, so the approach depends on the species:",
          ],
          cards: [
            { name: 'German roaches (indoor)', text: "Targeted gel baiting in cracks and crevices, growth regulators to stop breeding, monitoring, and sanitation guidance. Store-bought foggers usually scatter them and make it worse." },
            { name: 'Palmetto bugs (outdoor)', text: "A perimeter barrier, treatment of harborage like mulch, gutters, woodpiles, and crawlspaces, and sealing the gaps where they slip inside." },
            { name: 'Ongoing protection', text: "Because Woodstock's wooded, landscaped lots produce roaches all season, most homeowners pair an initial cleanout with recurring quarterly service, backed by a re-treat guarantee." },
          ],
        },
        {
          heading: "Why Woodstock's Landscaping Invites Roaches",
          paras: [
            "The pine straw and mulch beds, mature trees, crawlspaces, and humidity that make Woodstock neighborhoods attractive also create perfect roach harborage right against the foundation. Outdoor 'palmetto bugs' shelter in that damp organic material by day and follow moisture, lights, and gaps indoors at night — which is exactly why you can see large roaches even in a spotless home.",
          ],
        },
        {
          heading: 'Roaches and Your Health',
          paras: [
            "Cockroaches aren't just unpleasant. German cockroach droppings and shed skins are a documented asthma and allergy trigger, especially for children, and roaches can track bacteria like Salmonella from drains and garbage onto kitchen surfaces. Clearing an infestation is a genuine health upgrade for your Woodstock home.",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I see big roaches in my clean Woodstock home?', a: "Those large roaches are almost always 'palmetto bugs' — smokybrown or American cockroaches — that live outdoors in mulch, gutters, crawlspaces, and wooded lots and wander in. They're not a sign of poor housekeeping; in Woodstock's climate they're right up against the house. A perimeter barrier plus sealing entry points keeps them out." },
        { q: "What's the difference between a palmetto bug and a cockroach?", a: "'Palmetto bug' is just a Southern nickname for large roaches, mainly the smokybrown and American cockroach — they are cockroaches. The key distinction is indoor vs. outdoor: German cockroaches breed indoors and mean an infestation, while palmetto bugs are outdoor roaches coming in from the yard." },
        { q: 'Do I need recurring service or is one treatment enough?', a: "A German cockroach infestation can often be cleaned out with an initial treatment and a follow-up. Outdoor palmetto bugs are different — because Woodstock's wooded lots produce them all season, recurring quarterly perimeter service is the reliable way to keep them out, usually with a guarantee." },
        { q: 'Is roach treatment safe for kids and pets?', a: "Yes. Local pros use targeted gel baits and EPA-registered products placed in cracks, crevices, and exterior areas rather than sprayed across living space — both safer and far more effective than over-the-counter foggers." },
      ],
      finalCtaHeading: 'Clear the Roaches From Your Woodstock Home',
    },

    'bed-bug-treatment': {
      cardBlurb: "Discreet, guaranteed bed bug treatment for Woodstock homes, apartments, and rentals — heat or conventional, killing every life stage.",
      metaTitle: 'Woodstock Bed Bug Treatment | Heat & Guaranteed',
      metaDesc: "Bed bug treatment in Woodstock, GA & Cherokee County — discreet heat or conventional, fully guaranteed. Stop the spread fast. Free inspection — call your local pro.",
      h1: 'Bed Bug Treatment in Woodstock, GA',
      breadcrumbName: 'Bed Bug Treatment',
      heroSub: "Bed bugs hitchhike home from travel, hotels, and secondhand furniture — and they spread fast. A licensed Woodstock pro can wipe them out at every life stage with heat or conventional treatment, discreetly and with a guarantee.",
      sections: [
        {
          heading: 'How Bed Bugs Get Into Woodstock Homes',
          paras: [
            "Bed bugs are hitchhikers, not a hygiene problem. In Woodstock they usually arrive on luggage after travel — the city sits right off I-575/I-75 with quick access to Atlanta and Hartsfield-Jackson, the world's busiest airport — or on secondhand furniture and mattresses, with returning college students, or by spreading between units in apartments, townhomes, and rentals near Downtown Woodstock. Once inside, a few bugs can become an infestation in weeks, since each female lays hundreds of eggs.",
          ],
        },
        {
          heading: 'Signs You Have Bed Bugs',
          paras: [
            "Bed bugs are about the size of an apple seed, flat, and reddish-brown, and they hide close to where you sleep. Look for:",
          ],
          bullets: [
            "Small, itchy bites in rows or clusters on skin exposed during sleep",
            "Rust- or blood-colored spots on sheets, pillowcases, and mattress seams",
            "Dark, pepper-like fecal specks along seams, the box spring, and the headboard",
            "Pale shed skins, and in heavy cases a sweet, musty odor",
            "Live bugs in mattress seams, behind the headboard, and in nightstands",
          ],
        },
        {
          heading: 'Heat vs. Conventional Treatment',
          paras: [
            "Woodstock pros offer two proven approaches, sometimes combined:",
          ],
          cards: [
            { name: 'Whole-room heat', text: "Specialized equipment raises the room to a temperature lethal to bed bugs and their eggs, killing every life stage in a single day — including bugs deep in walls and furniture." },
            { name: 'Conventional (residual)', text: "A program of EPA-registered residual products and follow-up visits that clears bed bugs over a few weeks, often paired with steam and mattress encasements." },
            { name: 'Inspection & monitoring', text: "Trained techs — sometimes with K-9 detection — confirm the infestation, find every harborage, and verify success so nothing is missed." },
          ],
        },
        {
          heading: "Don't Try to DIY It",
          paras: [
            "Over-the-counter sprays and foggers are a top reason bed bugs spread. Many populations resist the common store-bought insecticides, foggers don't reach the cracks where bugs hide, and disturbing them just scatters the infestation — a serious risk in Woodstock's townhomes and apartments, where bugs can move into neighboring units. Professional heat and residual programs reach the eggs and hiding spots DIY can't.",
          ],
        },
      ],
      faqs: [
        { q: 'How do I know if I have bed bugs?', a: "Look for itchy bites in rows, small blood or rust spots on bedding, dark fecal specks along mattress seams and the headboard, shed skins, and live apple-seed-sized bugs near the bed. A local pro — sometimes with a K-9 — can confirm it and find every hiding spot." },
        { q: 'Does heat treatment really work?', a: "Yes. Raising a room to a temperature bed bugs can't survive kills adults, nymphs, and eggs in a single day, including bugs hidden in walls and furniture. It's one of the most thorough options and leaves little residue." },
        { q: 'Can I stay in my Woodstock home during treatment?', a: "In most cases yes. You'll get a prep checklist and instructions on when to be out of the treated rooms (heat treatments require you to leave during the process) and when it's safe to return. Your provider walks you through the specifics." },
        { q: 'Do I have to throw out my mattress and furniture?', a: "Usually not. Professional heat and residual treatments save most mattresses and furniture, and encasements let you keep a treated mattress safely. Tossing items out can actually spread bed bugs — ask your tech before discarding anything." },
      ],
      finalCtaHeading: 'Get Rid of Bed Bugs in Woodstock',
    },

    'rodent-control': {
      cardBlurb: "Roof rats and mice from Woodstock's wooded lots into your attic — trapped, excluded, and monitored so they can't get back in.",
      metaTitle: 'Woodstock Rodent Control | Rats & Mice in the Attic',
      metaDesc: "Rodent control in Woodstock, GA — roof rats & mice from wooded lots into attics. Trapping, exclusion (sealing entry points) & monitoring. Free inspection, call now.",
      h1: 'Rodent Control in Woodstock, GA',
      breadcrumbName: 'Rodent Control',
      heroSub: "Woodstock's tree-lined, wooded neighborhoods are perfect for roof rats and mice — and when nights cool they head for attics, crawlspaces, and walls. A local pro doesn't just trap them; they seal the entry points so they can't come back.",
      sections: [
        {
          heading: 'Why Woodstock Gets Roof Rats & Mice',
          paras: [
            "Roof rats are agile climbers, and Woodstock's mature trees and wooded lots — think Towne Lake, Eagle Watch, and the many neighborhoods backing to woods — give them leafy highways straight to the roofline, where they slip into attics and soffits. Norway rats and house mice work lower, through crawlspaces, garages, and foundation gaps. Pressure spikes in fall as cooling nights push them indoors, but Woodstock's mild winters keep rodents active all year.",
          ],
        },
        {
          heading: 'Signs of a Rodent Problem',
          paras: [
            "The first clue is usually something you hear or find:",
          ],
          bullets: [
            "Scratching or scurrying in the attic or walls, especially at night (classic roof rats)",
            "Droppings in the pantry, garage, under sinks, or along walls",
            "Gnaw marks on food packaging, wood, or wiring",
            "Greasy rub marks along beams, baseboards, and entry points",
            "Shredded insulation or paper used for nesting, or a musky odor",
          ],
        },
        {
          heading: 'The Permanent Fix: Trapping + Exclusion',
          paras: [
            "Poison alone doesn't solve a rodent problem — it can leave rodents dying in walls and does nothing to stop the next ones. A local pro builds the job around keeping them out for good:",
          ],
          cards: [
            { name: 'Inspection', text: "A full check of the roofline, soffits, crawlspace, garage, and utility penetrations to identify the species and every entry point." },
            { name: 'Trapping & removal', text: "Strategic trapping clears the active population quickly and cleanly, without poisons inside your living space." },
            { name: 'Exclusion', text: "Sealing roofline gaps, vents, and utility openings with rodent-proof materials so rats and mice physically can't return — the step that makes it permanent." },
            { name: 'Monitoring & cleanup', text: "Exterior tamper-resistant stations catch new pressure, and contaminated nesting and droppings are cleaned and sanitized." },
          ],
        },
        {
          heading: 'Keep Rodents Out of Your Woodstock Home',
          bullets: [
            "Trim tree limbs back from the roofline — roof rats use branches as bridges",
            "Seal gaps around pipes, vents, and the foundation; screen crawlspace and attic vents",
            "Store food and pet food in sealed containers and clean up spills",
            "Keep firewood, debris, and clutter away from the house",
            "Secure trash and pick up fallen fruit and birdseed",
          ],
        },
      ],
      faqs: [
        { q: 'Why do I hear scratching in my attic at night?', a: "In Woodstock that's most often roof rats — excellent climbers that nest in attics and soffits and are active after dark. Squirrels are possible too, but they're usually active in daytime. A local inspector can confirm the species and find the roofline openings they're using." },
        { q: 'How do roof rats get into my Woodstock home?', a: "They climb. Overhanging tree limbs, gutters, and downspouts give roof rats access to the roofline, where they enter through soffit gaps, vents, and small openings. Trimming trees back and sealing those gaps (exclusion) is the lasting fix." },
        { q: 'Is trapping better than poison?', a: "For indoor rodents, yes — trapping removes them cleanly and avoids rodents dying inside walls. Just as important is exclusion, which poison can't do. Exterior bait stations have a role around the perimeter, but keeping rodents out is the real solution." },
        { q: 'Do you seal up the entry points?', a: "Yes — that's the most important part. A proper Woodstock rodent job includes exclusion: sealing roofline gaps, soffits, vents, and utility penetrations with rodent-proof materials so the problem doesn't simply come back after the traps come out." },
      ],
      finalCtaHeading: 'Get Rodents Out of Your Woodstock Home',
    },

    'pest-control': {
      cardBlurb: "One quarterly plan for fire ants, spiders, wasps, ants, fleas, and ticks across your Woodstock property — licensed, guaranteed, and pet-safe.",
      metaTitle: 'Woodstock General Pest Control | Quarterly Plans',
      metaDesc: "Recurring pest control in Woodstock, GA — fire ants, spiders, wasps, ants, fleas & ticks. Quarterly plans, licensed & guaranteed, pet-safe. Free quote, call now.",
      h1: 'General Pest Control in Woodstock, GA',
      breadcrumbName: 'General Pest Control',
      heroSub: "Fire ants in the lawn, wasps under the eaves, spiders in the garage, ants in the kitchen — Woodstock's climate keeps household pests busy nearly year-round. One quarterly plan from a local pro handles them all.",
      sections: [
        {
          heading: 'Year-Round Pest Pressure in Cherokee County',
          paras: [
            "Woodstock's humid summers, mild winters, and wooded, well-watered lots mean household pests barely get an off-season. While homes up north get a winter die-off, Woodstock's ants, spiders, and wasps keep going — which is why a recurring quarterly plan beats one-off sprays here. It keeps a fresh protective barrier in place as each pest's season comes around.",
            "A general plan covers the broad range of everyday pests. A few specialties — termites, mosquitoes, roaches, bed bugs, and rodents — are worth a dedicated program, and we cover each on its own Woodstock page, linked below.",
          ],
        },
        {
          heading: 'Fire Ants Are Everywhere in Woodstock',
          paras: [
            "If you have a lawn in Woodstock, you have fire ants — every county in Georgia, Cherokee included, is infested with imported fire ants. Their dome-shaped mounds pop up across yards and common areas, and their burning, painful stings are a real hazard for kids, pets, and anyone allergic. Knocking them down takes the right approach: a broadcast bait colonies carry underground to kill the queen, combined with mound treatments and a perimeter barrier — exactly what a recurring plan handles.",
          ],
        },
        {
          heading: 'Other Common Woodstock Pests',
          paras: [
            "Beyond fire ants, a Woodstock general pest plan keeps these in check:",
          ],
          cards: [
            { name: 'Ants', text: "Argentine ants, odorous house ants, and wood-damaging carpenter ants are all common. Recurring exterior treatment stops trails before they reach the kitchen." },
            { name: 'Spiders', text: "Most are harmless, but black and brown widows hide in garages, woodpiles, and meter boxes around Woodstock homes. Treatment targets webs, harborage, and the insects spiders feed on." },
            { name: 'Wasps & yellowjackets', text: "Paper wasps, red wasps, hornets, and ground-nesting yellowjackets peak in late summer and fall. Pros remove nests and treat eaves and soffits to stop rebuilding." },
            { name: 'Fleas & ticks', text: "Wooded lots and mild winters keep fleas and ticks active much of the year. Georgia ticks can carry Rocky Mountain spotted fever and ehrlichiosis, so yard treatment protects pets and family." },
            { name: 'Occasional invaders', text: "Silverfish, millipedes, centipedes, earwigs, and seasonal invaders push indoors in the humidity. A barrier treatment and exclusion keep them out." },
          ],
        },
        {
          heading: 'What a Quarterly Plan Covers',
          paras: [
            "A typical Woodstock quarterly plan includes:",
          ],
          bullets: [
            "A thorough inspection and interior treatment on the first visit, then exterior-focused service that doesn't disrupt your home",
            "A treated barrier around the foundation, windows, doors, and entry points",
            "De-webbing of eaves and removal of accessible wasp nests",
            "Fire ant and nuisance-ant control across the yard and perimeter",
            "Free re-service between visits if pests come back — the guarantee most local companies stand behind",
          ],
        },
      ],
      faqs: [
        { q: 'What does a Woodstock pest control plan cover?', a: "It covers the everyday household pests — fire ants and other ants, spiders, wasps and yellowjackets, silverfish, millipedes, fleas and ticks, and seasonal invaders. Specialty pests like termites, mosquitoes, roaches, bed bugs, and rodents are handled by dedicated programs, each with its own Woodstock page." },
        { q: 'How often should pest control be done in Woodstock?', a: "Because the climate keeps pests active nearly year-round, quarterly (every three months) service is the standard. Each visit refreshes the protective barrier ahead of the next pest season. A specific problem may call for an extra visit, which your pro will recommend." },
        { q: 'How do I get rid of fire ants in my Woodstock yard?', a: "Effective control combines a broadcast bait that colonies carry underground to kill the queen, direct mound treatments for fast knockdown, and a perimeter barrier. Since all of Cherokee County has fire ants, ongoing treatment as part of a recurring plan is the realistic way to keep a yard clear." },
        { q: 'Is recurring pest control safe for kids and pets?', a: "Yes. Local technicians use EPA-registered products at label rates, focused on entry points, the exterior perimeter, and cracks and crevices rather than across living areas. They'll note any short re-entry time — usually just until the product dries." },
        { q: 'Is there a contract, and what if pests come back?', a: "Most Woodstock plans are quarterly and back the service with a guarantee — if covered pests return between visits, the company re-treats at no extra charge. Terms vary by provider; the pro who quotes your home will spell out the plan and any commitment before you start." },
      ],
      finalCtaHeading: 'Get Year-Round Pest Protection in Woodstock',
    },
  },
};
