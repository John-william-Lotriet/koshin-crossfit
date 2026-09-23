# ⚡ Koshin CrossFit — Production Monorepo

Enterprise-grade full-stack monorepo for **Koshin CrossFit** (Durban North, South Africa), powered by **Turborepo**, **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Atomic Component System**, and **Standalone Sanity Studio (v3)**.

---

## 🏛️ Monorepo Architecture

```
koshin-crossfit/
├── apps/
│   ├── web/                     # Next.js 15 App Router, TypeScript, Tailwind CSS, SEO
│   └── studio/                  # Standalone Sanity Studio v3 (Page Builder & CMS)
├── packages/
│   ├── ui/                      # Atomic Component Library (Atoms, Molecules, Tokens)
│   ├── tailwind-config/         # Shared Miami Synthwave Tailwind preset
│   └── typescript-config/       # Base TypeScript configs
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

## 🎨 Atomic Design Hierarchy (`packages/ui`)

* **Atoms**:
  - `Button` (`primary`, `secondary`, `outline`, `glow`, `ghost`)
  - `Badge` (`cyan`, `pink`, `purple`, `green`, `outline`, `subtle`)
  - `Glow` (Ambient radial background lighting)
  - `Typography` (`DisplayTitle`, `AthleticSub`, `BrushScript`, `ChalkQuote`)
  - `Input` (Dark high-contrast inputs with neon focus ring)
* **Molecules**:
  - `MetricStat` (Large display counters with athletic subtitles)
  - `PolaroidCard` (Chalkboard quotes with dashed borders)
  - `WodExerciseItem` (Exercise name with category tag)
  - `TimeSlotCard` (Timetable slot card)
  - `PricingFeatureItem` (Checkmark + feature description)
  - `CoachTraitItem` (Emoji + uppercase tracked trait)
  - `StatusBadge` (Pulsing live box operating status)
* **Organisms & Page Builder Blocks (`apps/web/components/page-builder/`)**:
  - `HeroBlock`
  - `MascotShowcaseBlock`
  - `SponsorsBlock`
  - `MarqueeBlock`
  - `WodBlock`
  - `FacilityBlock`
  - `ProgramsBlock`
  - `TimetableBlock`
  - `EventBannerBlock`
  - `CoachesBlock`
  - `PricingBlock`
  - `ContactBlock`

---

## 🚀 Quickstart

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development
Run all apps concurrently:
```bash
pnpm dev
```
Or start individual applications:
- **Next.js Web**: `pnpm --filter @koshin/web dev` (Runs at [http://localhost:3000](http://localhost:3000))
- **Sanity Studio**: `pnpm --filter @koshin/studio dev` (Runs at [http://localhost:3333](http://localhost:3333))

### 3. Build for Production
```bash
pnpm build
```

---

## 🌐 Dynamic Page Builder & CMS Model

The Next.js frontend is driven dynamically by Sanity's `page.pageBuilder` polymorphic array.
If no Sanity project credentials are provided, `apps/web` automatically loads the curated fallback seed data, ensuring zero downtime and 100% immediate usability.

To connect your own Sanity Content Lake:
1. Copy `.env.example` to `.env.local` in `apps/web` and `apps/studio`.
2. Add your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.

---

## 🔍 SEO & Web Vitals Optimization

- **JSON-LD Schema**: Structured `ExerciseGym` / `LocalBusiness` data with location, hours, and pricing.
- **Dynamic XML Sitemap**: Generated at `/sitemap.xml`.
- **Robots.txt**: Generated at `/robots.txt`.
- **Google Fonts Preloading**: Zero cumulative layout shift (CLS) via `next/font/google`.
