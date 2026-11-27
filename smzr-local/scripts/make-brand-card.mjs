import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(ROOT, "public", "_astro", "logo-white.svg");
const outPath = path.join(ROOT, "public", "_astro", "about-brand-card.svg");

const logo = fs.readFileSync(logoPath, "utf8");
const inner = logo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "").trim();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" fill="none">
  <rect width="1200" height="1600" fill="#0d1f1b"/>
  <rect x="80" y="80" width="1040" height="1440" rx="28" stroke="#1f3a32" stroke-width="2"/>
  <circle cx="600" cy="560" r="250" fill="#061309" stroke="#b45309" stroke-width="2" opacity="0.55"/>
  <g transform="translate(400 360) scale(0.39)">
    ${inner}
  </g>
  <text x="600" y="930" font-family="Montserrat, sans-serif" font-size="58" font-weight="700" fill="#ffffff" text-anchor="middle">SaBrian</text>
  <text x="600" y="1006" font-family="Montserrat, sans-serif" font-size="58" font-weight="700" fill="#ffffff" text-anchor="middle">Digital Solutions</text>
  <text x="600" y="1100" font-family="Montserrat, sans-serif" font-size="26" fill="#9ca3af" text-anchor="middle">Custom Software &amp; Web Development</text>
</svg>
`;

fs.writeFileSync(outPath, svg);
console.log("Wrote", outPath);
