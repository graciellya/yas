# Atelier

Design and creative technology studio portfolio — built for contemporary artists, museums, and cultural institutions.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (scroll reveals)
- **Custom fonts:** Kolosal Display, Nedilac, Snorter

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Fonts

| Font | Role | File |
|------|------|------|
| Kolosal Display | Headlines | `src/fonts/KolosalDisplay-*.otf` |
| Nedilac | Body text | `src/fonts/Nedilac-Regular.otf` |
| Snorter | Labels, logo, accents | `src/fonts/Snorter-Regular.ttf` |

Tailwind classes: `font-display`, `font-body`, `font-accent`

## Structure

```
src/
├── app/              # Pages (home, work, practice, contact)
├── components/       # UI, layout, work components
├── data/             # Project catalogue (edit projects.ts)
├── fonts/            # Local font files
└── lib/              # Fonts config & utilities
```

## Customize

1. **Projects** — Edit `src/data/projects.ts` with your real work
2. **Studio name** — Search/replace "Atelier" in layout, header, footer
3. **Contact** — Update email in footer, contact page, and form action
4. **Collaborators** — Update the list on the home page
5. **Images** — Replace gradient placeholders with project photography

## Deploy

```bash
npm run build
npm start
```

## License

Private — all rights reserved. Snorter is personal-use only per its license terms.
