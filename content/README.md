# Editing your site content

Editable content for each page lives in a JSON file in `content/` (this folder). It sits outside `public/` so it is not served as a page. The `*.template.html` files are local rebuild sources and are gitignored, so they are not uploaded to GitHub or Vercel.

| Page | Content file | Template | Build script | Output |
|---|---|---|---|---|
| `/` | `content/home.json` | `content/home.template.html` | `scripts/build-home.mjs` | `public/index.html` |
| `/about/` | `content/about.json` | `content/about.template.html` | `scripts/build-about.mjs` | `public/about/index.html` |
| `/work/` | `content/home.json` + `content/work.json` | `content/work.template.html` | `scripts/build-work.mjs` | `public/work/index.html` |
| `/services/` | `content/home.json` + `content/services.json` | `content/services.template.html` | `scripts/build-services.mjs` | `public/services/index.html` |
| `/contact/` | `content/home.json` + `content/contact.json` | `content/contact.template.html` | `scripts/build-contact.mjs` | `public/contact/index.html` |

`home.json` holds the content shared by every page (nav, footer, services, projects,
skills, social links). The per-page files only add what differs: `work.json` /
`services.json` carry the page `<title>`/description, and `contact.json` adds the
contact form labels and helper text.

Do not edit the generated `index.html` files directly — they are overwritten on build.

## 1. Edit the JSON

### Home content (`home.json`)

| Field | What it controls |
|---|---|
| `site.title` | Browser tab title + SEO/OG title |
| `site.description` | Meta description + social preview text |
| `site.name` | Name used in the nav logo text and image alt |
| `site.brand` | Brand name (used in copy/metadata) |
| `site.location`, `site.region` | Location details for copy/metadata |
| `site.email` | Contact email (shown + mailto link) |
| `site.logo` | Path to the logo image in the nav |
| `site.nav` | Nav link labels (Work, Services, About, Contact) |
| `site.hireMe` | The "Hire me" button label |
| `site.social.*` | LinkedIn / GitHub URLs and their tooltip titles |
| `site.copyrightYear`, `site.copyrightName` | Footer copyright line |
| `hero.badge` | Small pill above the headline ("Available for Projects – 2027") |
| `hero.headlinePrefix` / `headlineHighlight` / `headlineSuffix` | The three parts of the H1 (highlight is the gradient phrase) |
| `hero.subhead` | Hero paragraph |
| `hero.cta`, `hero.ctaHref` | Hero button label + link |
| `hero.background.*` | FluxLines hero background (see section 3) |
| `problem.*` | "Stop fighting your tools" section, including its image |
| `services.kicker/title/body` | Services section heading |
| `services.items[]` | The 6 service cards (`title` + `body`) |
| `about.kicker/title` | About section heading |
| `about.intro[]` | About paragraphs, each `{ label, body }` — label renders bold at the start |
| `about.images[]` | The two About tiles (`src` + `alt`): portrait, then brand card |
| `experience.kicker` | Text of the "My experience" link |
| `projects.kicker/title/subhead` | Projects section heading |
| `projects.slides[]` | One object per carousel slide (see below) |
| `testimonial.*` | Quote, client name, company, company link, logo/photo |
| `skills[]` | Marquee skill list (repeats automatically) |
| `contact.*` | "Let's Chat" section copy + email |
| `images.logo/social` | Shared logo and OG preview image paths |

### Project slides

Each entry in `projects.slides` produces **two** linked carousel panels — an image panel
and a text panel — so the order and count of objects controls the carousel.

```json
{
  "title": "Project name",
  "url": "https://live-site-or-repo",
  "urlText": "short label shown in the slide top bar",
  "label": "Frontend · React + TypeScript",
  "body": ["First paragraph", "Second paragraph"],
  "image": "/_astro/project-name.jpg",
  "imageAlt": "Description for screen readers"
}
```

`body` is an array — one `<p>` per string. Use one or two short paragraphs per slide.

### About page fields (`about.json`)

| Field | What it controls |
|---|---|
| `site.*` | Same role as on the home page: title, description, name, nav, social links, footer |
| `hero.*` | "Hello! I'm Brian." intro block, status pill, CTA |
| `lanyard.*` | The 3D ID-card portrait in the hero (see section 2) |
| `philosophy.*` | Agency vs freelancer block, pull quote, and its portrait image |
| `experience.*` | Experience intro, the 3 cards (`chips`, `title`, `body`), and the 3 stat blocks |
| `location.*` | Bwindi/Kanungu image, badge, heading and paragraphs |
| `skills[]` | Marquee skill list (shared wording with the home page) |
| `contact.*` | "Let's Chat" block + email |
| `images.social` | Social preview image |

The About page uses the same nav, footer and marquee components as the home page, so
update `skills`, `contact` and `site.social` in both files when those change.

## 2. The About hero card (React Bits `Lanyard`)

The About hero portrait is a draggable 3D ID card. Click it to flip between the neon
front and the black-and-white back; drag to swing it; it settles back to rest.

Source and build live in `lanyard/`:

```
lanyard/
  package.json        React 19 + three.js + esbuild (dev only)
  src/Lanyard.jsx     component (React Bits source)
  src/Lanyard.css     component + site styles
  src/mount.jsx       reads the data-* attributes and mounts React
  build.mjs           bundles to public/_astro/lanyard/
```

Rebuild after changing the component:

```bash
node lanyard/build.mjs
```

The bundle is emitted to `public/_astro/lanyard/lanyard.js` (~744 KB, ~205 KB gzip);
`public/_astro/lanyard/lanyard.css` is the matching stylesheet. The build script writes
the props from `about.json` onto the stage element.

### Card props (`about.json` → `lanyard`)

| Field | What it does |
|---|---|
| `front`, `back` | Card face images (900×1266) |
| `posterAlt` | Alt text for the static poster shown before/without WebGL |
| `imageFit` | `cover` or `contain` |
| `cardColor` | Card stock colour behind the photo (`#0d1f1b` here) |
| `orientation` | `portrait` (1.6×2.25) or `landscape` |
| `finish` | `glossy`, `glossy-soft` (used here), `matte`, `holographic`, `metallic` |
| `cornerRadius` | 0–1, corner rounding |
| `size` | How much of the stage the card fills (0.15–0.9) |
| `anchor` | `left`, `center`, `right` — where the strap hangs |
| `strapLength` | 0–1, longer strap = smaller card |
| `strapColor`, `strapWidth` | Lanyard band colour and width |
| `metal` | `gold`, `silver`, `graphite` — clamp and ring finish |
| `gravity`, `damping`, `elasticity`, `breeze` | Physics feel |
| `interactive`, `intro` | Allow dragging/flipping; play the drop-in animation |
| `hint` | Small helper line under the card |

`glossy-soft` is the default because full `glossy` clearcoat washes a dark portrait out
with a grey reflection. `holographic` adds a rainbow foil shader — on this dark photo it
buries the face in speckles, so it is available but not recommended here.

The card degrades safely: without WebGL the poster image stays visible, and
`prefers-reduced-motion` skips the intro and freezes the breeze. Keyboard flipping is not
implemented yet — flipping is pointer-only.

## 3. The home hero background (React Bits `FluxLines`)

The hero's WebGL "dither" background has been replaced with flowing light lines.

Source and build live in `flux-lines/`:

```
flux-lines/
  package.json        React 19 + esbuild (dev only)
  src/FluxLines.jsx   component (React Bits source)
  src/FluxLines.css   component + site styles
  src/mount.jsx       reads the data-* attributes and mounts React
  build.mjs           bundles to public/_astro/flux-lines/
```

```bash
node flux-lines/build.mjs
```

Output: `public/_astro/flux-lines/flux-lines.js` (~229 KB, ~72 KB gzip) plus
`flux-lines.css`. The campaign colours live in `home.json`:

```json
"hero": {
  "background": {
    "colors": ["#f97316", "#34d399", "#ffffff"],
    "flowDirection": "down",
    "opacity": 1,
    "glow": 2.4,
    "mouseInteraction": true,
    "clickSwirl": true
  }
}
```

Every prop from the component can be set there; arrays become comma-separated
`data-*` attributes. The site sets `mixBlendMode: "screen"` so the lines glow over the
dark green hero instead of sitting on top of it. The layer is `pointer-events: none` so
the headline and buttons stay clickable; hover and click are still detected.

The effect respects `prefers-reduced-motion` (static render, no intro) and pauses when
the hero scrolls out of view.

## 4. Replacing images

All image assets live in `public/_astro/`.

| File | Used for |
|---|---|
| `logo-white.svg` | Nav logo + testimonial image |
| `about-brand-card.svg` | Second tile in the home About block (generated from the logo) |
| `philosophy-card.svg` | Portrait panel in the About philosophy block (generated from the logo) |
| `portrait-brian.jpg` | Portrait tile in the home About block (1200×1600) |
| `lanyard-front.jpg` | Neon card face (900×1266) |
| `lanyard-back.jpg` | B&W card face + source for the home portrait (900×1266) |
| `problem-dashboard.jpg` | Home "Stop fighting your tools" feature image (1500×1200) |
| `about-location.jpg` | About location image — Pearl Bridge dashboard (1500×1200) |
| `project-*.jpg` | The 8 project screenshots (1600×900) |
| `placeholder-portrait.svg` | Legacy — no longer referenced by any page |

To swap in your own artwork, either overwrite a file with the same name, or drop a new
file into `public/_astro/` and update the matching path in `home.json` / `about.json`
(e.g. `"/_astro/my-photo.jpg"`). Paths must start with `/`.

### Regenerating images

Original project screenshots, portraits and brand source files live in `assets/source-images/`. From the repository root:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/prepare-images.ps1
```

This copies the logo + favicon, fits each source screenshot into a 1600×900 dark frame
(letterboxed, no cropping) and saves JPEGs at quality 88. It also builds
`problem-dashboard.jpg` and `about-location.jpg` at 1500×1200, crops the two card faces
to 900×1266, and crops the home portrait to 1200×1600. The neon front face is saved with
a gamma lift (1.35) because the source renders very dark inside three.js.

The crop helper takes a focus value (0 = keep the top of the photo, 1 = keep the
bottom); tweak it in the script if a face sits too high or low in the frame.

To regenerate the logo-based panels after changing the logo:

```bash
node scripts/make-brand-card.mjs
node scripts/make-philosophy-card.mjs
```

## 5. Rebuild the pages

From the repository root:

```bash
node scripts/build-home.mjs
node scripts/build-about.mjs
node scripts/build-work.mjs
node scripts/build-services.mjs
node scripts/build-contact.mjs
```

Expected output ends with `Total changes: 92, Misses: 0` for home, `88` for about,
`44` for work, `53` for services and `47` for contact. A `MISS:` line means the template
no longer contains the original string the script looks for — check the matching
`rep(...)` call in the build script.

All five builds are idempotent: running them repeatedly produces byte-identical output.

## 6. Preview

The local server runs at **http://127.0.0.1:4173/**. If it isn't running:

```bash
node server.mjs
```

## Notes

- The testimonial in `home.json` is **sample copy** and needs the client's approval
  before publishing.
- The contact form currently opens the visitor's email app (`mailto:` to
  `brianmwebesa119@gmail.com`). Replace it with a real form service before publishing.
- The About "stats" row uses descriptive values (Full-Stack / End-to-End / Direct)
  rather than unverified numbers — edit them in `about.json` if you have real figures.
- Slides for Photographer Portfolio, Junior AI, MRKT Edge and Personal Portfolio point
  at `https://github.com/Baby-jesuset` until live URLs are available.
- The hero 3D card and the FluxLines background are bundled locally; no CDN or runtime
  package manager is needed at preview time.
