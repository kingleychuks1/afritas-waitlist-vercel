# Afritas — one-page launch & waitlist site

A single-page React/Vite site (structural/visual inspiration from gymduoo.com's layout, not
its content) with a dual traveller/vendor waitlist backed by the Neon Postgres database
already connected to this project via Vercel Storage, deployable as one Vercel project.

```
├── src/
│   ├── config.js         LAUNCH_DATE (single place to change it), logo URL, brand info
│   ├── hooks.js           useCountdown, useReveal / <Reveal> scroll-in animation
│   ├── index.css          all styling (DM Sans, brand tokens, mockups, marquee, forms)
│   ├── pages/Home.jsx      assembles every section
│   └── components/         Nav, Hero, Steps, CategoryMarquee, Intro, TravellerSection,
│                            VendorSection, Security, WaitlistSection, Faq, FinalCta, Footer
├── api/
│   ├── traveller-waitlist.js   POST — validates + inserts into `traveller_waitlist`
│   └── vendor-waitlist.js      POST — validates + inserts into `vendor_waitlist`
├── lib/
│   ├── db.js               Neon serverless client + auto-creates both tables on first use
│   └── validate.js         shared field/email validation helpers
├── sql/schema.sql         optional — same tables db.js creates automatically, for reference
├── vercel.json, index.html, vite.config.js, package.json
```

## Brand notes

- Logo: pulled live from `https://useafritas.com/logo/logo.png` (the real Afritas site) —
  permanent, not a temporary export.
- Colour + type: I couldn't get a real browser session to sample useafritas.com's computed
  CSS this round (no color/theme metadata in the page's static HTML, and my browser tool
  wasn't reachable), so the palette here is the green already confirmed from the actual
  Afritas app screens in Figma (`#1E8F4E` primary / `#146638` dark), on a warm off-white
  background per the brief. If useafritas.com uses a different exact hex, tell me the value
  (or reconnect the browser tool) and I'll swap `--green` / `--green-dark` in `index.css`.
- Font: DM Sans, loaded from Google Fonts in `index.html`.

## 1. Database

Nothing to set up — this uses the Neon Postgres database you already connected to this
project through Vercel Storage. `lib/db.js` reads whichever connection string Vercel
injected (`DATABASE_URL`, `POSTGRES_URL`, or `POSTGRES_PRISMA_URL`, checked in that order)
and creates `traveller_waitlist` / `vendor_waitlist` automatically the first time someone
joins a waitlist. `sql/schema.sql` has the same `CREATE TABLE` statements if you'd rather
run them by hand first via the Neon SQL editor or Vercel's Storage → Query tab.

## 2. Push to GitHub

```bash
cd afritas-waitlist-vercel
git init
git add .
git commit -m "Afritas one-page launch site"
git branch -M main
git remote add origin https://github.com/<your-username>/afritas.git
git push -u origin main
```

## 3. Deploy to Vercel

1. vercel.com/new → import the repo (Vite auto-detected).
2. Since the Neon storage is already connected to this project, the env vars are already
   set — nothing to add manually.
3. Deploy / redeploy.

## Local development

```bash
npm install
npm i -g vercel   # if you don't have it
vercel link
vercel env pull .env.local     # pulls the Neon connection string down locally
vercel dev                      # serves the frontend AND /api together
```

`vite`/`npm run dev` alone only serves the frontend — the `/api` routes need `vercel dev`
(or a live deployment).

## Cleanup

This build replaced an earlier version (Vercel Postgres, then briefly Supabase) plus a
separate `/waitlist`-page approach. These files are no longer used and are safe to delete
before you commit:

- `api/waitlist.js`
- `api/waitlist-count.js`
- `src/pages/Waitlist.jsx`
- `lib/supabaseAdmin.js`

## Notes

- `LAUNCH_DATE` lives in exactly one place: `src/config.js`.
- Both forms have a hidden honeypot field for basic bot protection, client + server-side
  validation, and reject duplicate emails with a friendly `409` message.
- The property photo in the hero/traveller mockup is a real Afritas app screen pulled from
  Figma — its asset URL expires ~7 days after being generated; download and re-host it
  before then.
