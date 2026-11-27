# SaBrian Digital Solutions

Portfolio for Mwebesa Brian. The live site is the static files in `public/`.

## Preview

```bash
npm start
```

Opens at http://127.0.0.1:4173/

## Edit copy

Page text is in `content/*.json`. How each field maps to the page is in `content/README.md`.

Rebuild locally with `npm run build`, then commit the updated files under `public/`. The original HTML templates stay on this computer and are listed in `.gitignore`, so they are not part of the GitHub repo or the Vercel site.

## GitHub

This folder is the repository root.

```powershell
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Create the GitHub repo empty (no README, no license) before the first push.

## Vercel

Import the GitHub repo. Leave the root directory as the repo root.

| Setting | Value |
|---|---|
| Framework | Other |
| Build command | taken from `vercel.json` (no page rebuild) |
| Output directory | `public` |

Vercel serves `public/` as-is. After the first deploy, add a custom domain under Project → Settings → Domains.
