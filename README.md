# gabrielmbona.to

Personal portfolio site. React 19 + TypeScript + Vite, static build, no backend.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build  → dist/
npm run preview  # serve the built output
```

## Deploy

Cloudflare Pages, building from this repo:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 (see `.nvmrc`) |

Every push to `main` redeploys.

## Content

All site copy lives in `src/content.ts` as typed exports — `INTRO`, `CASE`,
`ALSO`, `EXPERIENCE`, `SKILL_GROUPS`, `PRINCIPLES`, `CONTACT_TEXT`. Edit copy
there, not in `App.tsx`.
