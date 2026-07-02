# Priyanshu Galani — Portfolio

Minimal, precision-engineered personal site. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Fully static, accessible, and responsive.

## Design

- **Palette** — warm paper `#FAFAF8`, ink `#17171B`, slate `#5B5B66`, hairline `#E6E6E0`, cobalt signal `#1E2AFF`.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (data/labels), all self-hosted via `next/font`.
- **Signature** — the hero "build manifest": impact metrics rendered as a monospace spec-sheet readout, with a `frontend → backend → cloud` connective-line motif.
- **Motion** — hero load stagger + scroll reveals; fully disabled under `prefers-reduced-motion`.

## Edit content

All copy lives in one file — **`lib/data.ts`**. Update profile, skills, experience, projects, education, and links there; every section reads from it.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js; no config needed.
3. Deploy. Add a custom domain in the project settings if desired.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Notes

- The résumé link serves `public/resume.pdf` (one-page, styled to match the site). To regenerate after editing `scripts/resume.html`, run:
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="public/resume.pdf" "file://$(pwd)/scripts/resume.html"
  ```
- `next` is pinned to a patched 14.2.x. Remaining `npm audit` advisories require Next 16 (a breaking upgrade) and concern server features this static site does not use (Image Optimization API, i18n middleware, RSC cache, WebSocket upgrades).
