# 🌍 Smart Travel Companion

A mini API Hub — enter any city and get **weather, attractions, news, and currency rates** on one dashboard.

## Tech Stack

- Turborepo
- Next.js 14 (App Router)
- TypeScript (Strict Mode)
- Zustand
- React Query v5
- Tailwind CSS
- Zod
- ESLint + Prettier

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3003
```

## Project Structure

```
apps/web/src/
├── app/api/        → 4 API routes (weather, attractions, news, currency)
├── components/     → UI components (search bar, dashboard cards)
├── hooks/          → React Query hooks for data fetching
├── store/          → Zustand store (selected city + history)
└── lib/            → Zod schemas for validation
```

## APIs

- **Weather** → wttr.in (free, no key)
- **Currency** → frankfurter.app (free, no key)
- **Attractions & News** → bundled mock data

## 🔗 Live Preview

Check out the live project here:
👉 https://city-explorer-web.vercel.app/

> No API keys needed — works out of the box!
