# TranscribeToText.AI marketing site

Redesigned marketing landing for TranscribeToText.AI. A dark "studio" aesthetic
built around a live voice-spectrum waveform motif, made to feel premium and convert.
All copy and section order are preserved from the current site; only the visual layer
is new.

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` tokens in `src/index.css`)
- Framer Motion (scroll reveals, pricing toggle, FAQ accordion)
- lucide-react icons
- Google Fonts: Instrument Serif (display), Inter (UI), JetBrains Mono (data)

## Develop
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # type-check + production build to dist/
    npm run preview   # serve the built site on :4173

## Structure
- `src/data/content.ts` - all copy, single source of truth
- `src/lib/motion.ts` - shared animation variants and easings
- `src/components/primitives/` - Button, Chip, Section, Waveform, and other building blocks
- `src/components/mocks/` - code-native product UI (the hero transcript panel)
- `src/components/sections/` - the 14 landing sections, composed in `src/App.tsx`

## Deploy
Vercel auto-detects Vite. Build command `npm run build`, output directory `dist`.
