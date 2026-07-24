# Afritas — Waitlist landing page (Vercel-ready)

Single Vercel project: React/Vite frontend + serverless API functions + Vercel Postgres.
Content, colors (`#41B11A` green, `#403C3C` ink), and type (Poppins) pulled from the Afritas
Figma file; page structure follows gymduoo.com's launch pattern (hero + countdown, feature
pillars, how it works, FAQ, closing CTA).

```
├── src/            React app (App.jsx has all copy/sections, index.css has all styling)
├── api/
│   ├── waitlist.js         POST — insert a signup
│   └── waitlist-count.js   GET  — total signups, for the social-proof line
├── lib/db.js       creates the `signups` table on first call
├── index.html, vite.config.js, package.json
```

## 1. Push to GitHub

```bash
cd afritas-waitlist-vercel
git init
git add .
git commit -m "Afritas waitlist page"
git branch -M main
git remote add origin https://github.com/<your-username>/afritas-waitlist.git
git push -u origin main
```

(Create the empty repo on github.com first, or via `gh repo create afritas-waitlist --private --source=. --push` if you have the GitHub CLI.)

## 2. Deploy to Vercel

Easiest path — import from GitHub:

1. Go to vercel.com/new, import the `afritas-waitlist` repo. Framework preset auto-detects as Vite.
2. Deploy once (it'll build fine; the API will 500 until step 3 — that's expected).
3. In the project: **Storage → Create Database → Postgres** (Neon-backed), then **Connect** it to
   this project. Vercel adds the `POSTGRES_URL` env var automatically.
4. Redeploy (Deployments tab → ⋯ → Redeploy), or just push a new commit.

That's it — `signups` table is created automatically on the first API call.

Or via CLI instead of the dashboard:

```bash
npm i -g vercel
vercel login
vercel link
vercel          # first deploy
# then create + connect Postgres from the dashboard as in step 3 above
vercel --prod
```

## Local development

```bash
npm install
vercel link            # links this folder to the Vercel project
vercel env pull .env.local   # pulls POSTGRES_URL locally
vercel dev              # serves the frontend AND /api functions together
```

`npm run dev`/`vite` alone will only serve the frontend — the `/api` routes need `vercel dev`
(or a live deployment) to run.

## Notes

- `LAUNCH_DATE` in `src/App.jsx` — set your real launch date.
- The hero image currently points at a temporary Figma asset URL (~7-day expiry). Swap
  `heroImage` in `src/App.jsx` for a permanently hosted image before that window closes.
- Duplicate emails return `409` and a friendly message instead of erroring out.
