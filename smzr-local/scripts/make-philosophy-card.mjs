import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(ROOT, "public", "_astro", "logo-white.svg");
const outPath = path.join(ROOT, "public", "_astro", "philosophy-card.svg");

const logo = fs.readFileSync(logoPath, "utf8");
const inner = logo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "").trim();

// Full-bleed portrait panel for the About philosophy block. The card is displayed
// in a tall, narrow slot and cropped ~10% on each side, so all content stays
// inside a 160px safe margin.
const lines = [];
for (let x = 160; x <= 1040; x += 146) {
  lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="1600" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>`);
}
for (let y = 160; y <= 1440; y += 146) {
  lines.push(`<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>`);
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" fill="none">
  <rect width="1200" height="1600" fill="#0b120d"/>
  <g>${lines.join("")}</g>
  <circle cx="600" cy="520" r="380" fill="#061309"/>
  <circle cx="600" cy="520" r="240" fill="#0d1f1b" stroke="#b45309" stroke-opacity="0.45" stroke-width="2"/>
  <g transform="translate(446 366) scale(0.3)">
    ${inner}
  </g>
  <text x="600" y="912" font-family="Montserrat, sans-serif" font-size="74" font-weight="700" fill="#ffffff" text-anchor="middle">SaBrian</text>
  <text x="600" y="1000" font-family="Montserrat, sans-serif" font-size="74" font-weight="700" fill="#ffffff" text-anchor="middle">Digital Solutions</text>
  <rect x="480" y="1052" width="240" height="3" rx="1.5" fill="#ea580c"/>
  <text x="600" y="1136" font-family="Montserrat, sans-serif" font-size="27" fill="#9ca3af" text-anchor="middle">Websites · Custom software · Business systems</text>
  <text x="600" y="1320" font-family="Montserrat, sans-serif" font-size="22" letter-spacing="6" fill="#6b7280" text-anchor="middle">BUILT AROUND YOUR BUSINESS</text>
</svg>
`;

fs.writeFileSync(outPath, svg);
console.log("Wrote", outPath);
