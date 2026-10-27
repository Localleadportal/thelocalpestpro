// County landing pages — the expansion pattern for the pest directory.
// Assignment is county-based in Local Lead Portal, so a county page is the
// natural landing page between a state hub and its city hubs. County pages
// are built up front and stay live whether or not a contractor is assigned:
// unassigned counties show the shared (844) directory line, assigned counties
// show the assigned contractor's name and number on the same URL.
// Only counties with a real contractor presence are added, one at a time.
// Approved facts used in the Forsyth entry (no streets, subdivisions, schools,
// or ordinances are named): Cumming is the Forsyth County seat; Forsyth is one
// of Georgia's fastest-growing counties with heavy new construction; the GA 400
// corridor runs through it; Lake Lanier borders Forsyth to the east/north;
// communities Coal Mountain, Chestatee, Silver City, Big Creek; humid
// subtropical climate; eastern subterranean termites are the dominant Georgia
// species (Formosan termites are rare statewide and not established in metro
// Atlanta); red imported fire ants occur statewide; metro Atlanta is a top-five
// US mosquito metro (Orkin 2025); structural pest control in Georgia is
// regulated by the GA Dept. of Agriculture Structural Pest Control Commission.
const GEORGIA_COUNTIES = {
  forsyth: {
    name: 'Forsyth County',
    slug: 'forsyth',
    seat: 'Cumming',
    seatSlug: 'cumming',
    communities: ['Cumming', 'Coal Mountain', 'Chestatee', 'Silver City', 'Big Creek'],
    photo: '/images/forsyth-county.webp',
    metaTitle: 'Pest Control in Forsyth County, GA | The Local Pest Pro',
    metaDesc: 'Pest control in Forsyth County, GA — termites, mosquitoes, fire ants, rodents and more across Cumming and the whole county. Call to ask about licensing, pricing, and availability.',
    h1: 'Pest Control in Forsyth County, GA',
    heroSub: 'County-wide pest control for Forsyth County — from Cumming out along GA 400 and around Lake Lanier. One call connects you with the contractor serving this county.',
    overview: [
      'Forsyth County is one of Georgia\'s fastest-growing counties, and that growth sets its pest pattern. New subdivisions, new sod, and new homes going up along the GA 400 corridor bring fire ants in the turf, mosquitoes where new drainage holds water, and nuisance ants finding construction gaps into new kitchens — while older homes near Cumming and along the lake face the termites, roaches, and rodents that come with any established Georgia county.',
      'Lake Lanier borders Forsyth to the east and north, and the creeks and low ground feeding it keep mosquito pressure high through the warm season. Humid subtropical summers, wooded lots, and the county\'s mix of new and older housing mean the same county can need termite work, mosquito work, and fire ant work on the same street.',
      'This page covers the whole county, not just Cumming. Whether you are in Coal Mountain, Chestatee, Silver City, or Big Creek, call the number on this page — we cover the whole county.',
    ],
    sections: [
      {
        heading: 'Termites: New Builds and Older Homes Alike',
        paras: [
          'Eastern subterranean termites are the dominant termite species in Georgia, and they do not distinguish between a new build and an older home — they follow moisture and wood-to-soil contact wherever they find it. New construction in Forsyth adds a wrinkle: disturbed soil, new grading, and fresh mulch beds can hide the early signs, and a home that looks brand new can still sit over an active colony.',
          'If you are buying or selling in Forsyth, ask about a termite inspection and the Georgia wood-infestation report (WIIR) — and ask us about inspection licensing when you call. If you already own, mention mud tubes on the foundation, soft or hollow-sounding wood, and any moisture problem near the slab or crawlspace when you call.',
        ],
      },
      {
        heading: 'Mosquitoes, Fire Ants, and Rodents Across the County',
        paras: [
          'Mosquitoes are the county-wide summer complaint: Lake Lanier shoreline, creeks, retention ponds in new subdivisions, and anything that holds water after a storm. Fire ants are the turf complaint, statewide and here — mounds in new sod, along driveways, and in sunny common areas. Rodents and roaches are the year-round indoor complaint, worse in older homes and in any home with a crawlspace or attic access.',
          'When you call, it helps to say which of these you have, where you have seen it, and whether the home is new construction or an older place — the dispatcher plans a different visit for a lake-edge mosquito problem than for a new-subdivision fire ant problem. Ask about products, pets, and re-entry when you call, and about pricing and availability.',
        ],
      },
      {
        heading: 'Towns and Communities Served in Forsyth County',
        paras: [
          'The contractor serving Forsyth County covers the whole county, including Cumming (the county seat), Coal Mountain, Chestatee, Silver City, and Big Creek. If your town is not listed, call anyway — we can confirm whether we cover your address.',
        ],
      },
    ],
    faqs: [
      { q: 'Who will do the work in Forsyth County?', a: 'Call us and tell us about the job — we will confirm the local crew for your county before any work starts.' },
      { q: 'Does this page apply outside Cumming?', a: 'Yes. This is the county-wide page. Cumming has its own city hub with more Cumming-specific detail, but we cover Coal Mountain, Chestatee, Silver City, Big Creek, and the rest of the county too.' },
      { q: 'I am buying a home in Forsyth. What about a termite letter?', a: 'Ask us about a termite inspection and the Georgia wood-infestation report (WIIR), and about inspection licensing, when you call. Mention the closing timeline so the dispatcher can plan around it.' },
      { q: 'Why are mosquitoes so bad near the lake and creeks?', a: 'Standing water is the driver: Lake Lanier shoreline, creeks, retention ponds, and anything holding water after rain. Tip out standing water where you can, and ask the contractor about barrier and larvicide options for your yard.' },
      { q: 'Are treatments safe for kids and pets?', a: 'Products and methods vary by contractor. Ask us which products we use, about pets and children, and about any re-entry interval after an application.' },
    ],
    finalCtaHeading: 'Get Pest Control in Forsyth County',
  },
};

module.exports = { GEORGIA_COUNTIES };
