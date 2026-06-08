'use strict';

// ── Generate the social-share OG card → public/images/og-default.jpg ──────────
// One-off build asset. Renders a hand-authored 1200×630 SVG to JPG with sharp.
// sharp is NOT a runtime dependency (it would bloat the Railway deploy), so it's
// installed locally only when you need to regenerate the card:
//
//   npm install sharp --no-save
//   node scripts/make-og-card.js
//
// Commit the resulting public/images/og-default.jpg. Brand: navy #1a3c6e with an
// orange #e05c00 accent, wordmark "The Local Pest" + "Pro".

const path = require('path');
const sharp = require('sharp');

const W = 1200, H = 630;
const NAVY = '#1a3c6e', NAVY_DARK = '#122a4f', BLUE = '#2c5fa8', ORANGE = '#e05c00';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY_DARK}"/>
      <stop offset="0.55" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${BLUE}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Orange accent bar down the left edge -->
  <rect x="0" y="0" width="14" height="${H}" fill="${ORANGE}"/>
  <!-- Subtle bottom band -->
  <rect x="0" y="${H - 78}" width="${W}" height="78" fill="#ffffff" opacity="0.06"/>

  <!-- Shield trust mark (top-right) -->
  <g transform="translate(1010,86)" opacity="0.95">
    <path d="M70 0 L132 24 V70 C132 118 104 150 70 166 C36 150 8 118 8 70 V24 Z"
          fill="${ORANGE}"/>
    <path d="M44 78 L62 96 L100 54" fill="none" stroke="#ffffff" stroke-width="11"
          stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Wordmark -->
  <text x="80" y="232" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="800" fill="#ffffff">The Local Pest<tspan fill="${ORANGE}">Pro</tspan></text>

  <!-- Divider -->
  <rect x="84" y="266" width="150" height="6" rx="3" fill="${ORANGE}"/>

  <!-- Tagline -->
  <text x="80" y="346" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="600" fill="#e8eefc">Find a Licensed Local Exterminator Near You</text>

  <!-- Pest list -->
  <text x="80" y="410" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="400" fill="#b9c8e6">Termites &#8226; Bed Bugs &#8226; Roaches &#8226; Mosquitoes &#8226; Rodents &#8226; Fire Ants</text>

  <!-- Phone pill -->
  <g transform="translate(80,452)">
    <rect x="0" y="0" width="430" height="72" rx="36" fill="${ORANGE}"/>
    <text x="215" y="48" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" fill="#ffffff">Call (844) 544-3498</text>
  </g>

  <!-- Trust line -->
  <text x="80" y="596" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600" fill="#cdd9f0">Licensed &amp; Insured  &#8226;  Family &amp; Pet-Safe Options  &#8226;  Free Quotes</text>
</svg>`;

const out = path.join(__dirname, '..', 'public', 'images', 'og-default.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
  .toFile(out)
  .then(info => console.log(`Wrote ${out}  (${info.width}x${info.height}, ${info.size} bytes)`))
  .catch(err => { console.error('OG card render failed:', err); process.exit(1); });
