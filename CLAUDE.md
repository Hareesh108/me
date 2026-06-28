# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Hareesh Bhittam, built with Next.js 15 (App Router), React 19, TypeScript (strict), and Tailwind CSS v3. Deployed on Vercel. Package manager is **pnpm**.

## Commands

```bash
pnpm install      # install dependencies
pnpm dev          # dev server at http://localhost:3000
pnpm build        # production build (also the CI / type-check gate)
pnpm start        # serve the production build
pnpm lint         # next lint (eslint-config-next: core-web-vitals + typescript)
```

There is **no test framework configured** — `pnpm build` and `pnpm lint` are the only verification gates. TypeScript runs in `strict` mode with `noEmit`, so type errors surface during `build`.

## Architecture

The entire site is one route. `app/page.tsx` composes the page by rendering top-level section components **in document order**:

```
LandingPage → ProjectPage → Tech → ContactPage → Footer
```

`app/layout.tsx` wraps everything in two providers (order matters): `WindowEventProvider` then `ThemeProvider`, and loads the local Geist Sans/Mono fonts via `next/font/local`.

Key structural conventions:

- **Sections live in `components/<name>/index.tsx`** and are mostly `"use client"` components driven by `framer-motion` (and `motion`) animations. `LandingPage` additionally renders `AboutMePage` (`components/about-me`) and `SocialDialog`; `AboutMePage` renders `Skills`.
- **Content is data, not markup.** All portfolio content is centralized in `lib/utils.ts` as exported constants — `PROJECT_INFO`, `FRONTEND_SKILLS`, `BACKEND_SKILLS`, `DEVOPS_SKILLS`. To add/edit a project or skill, edit these arrays; the section components map over them. Commented-out entries in `PROJECT_INFO` are intentionally hidden projects.
- `lib/utils.ts` also exports `cn(...)` (the standard `clsx` + `tailwind-merge` class-merge helper) used throughout.
- **shadcn/ui primitives** live in `components/ui/`. Config is in `components.json` (style `default`, base color `neutral`, CSS variables enabled). Add new primitives with the shadcn CLI rather than hand-writing them.
- **Theming**: `next-themes` with `attribute="class"` and `defaultTheme="dark"`. Color tokens are HSL CSS variables (`--background`, `--primary`, etc.) defined in `app/globals.css` and mapped in `tailwind.config.ts`. Use semantic Tailwind classes (`bg-background`, `text-primary`, `border-border`) rather than raw colors so both themes work.
- **Global scroll state**: `contexts/window-event-provider.tsx` exposes `useWindowEvent()` returning `{ scrollX, scrollY }`, tracked on the `scroll` event and persisted to `localStorage`. Components like `LandingPage` use it for scroll-driven UI (e.g. hiding decorative images past a threshold).

## Path alias

`@/*` maps to the repo root (`tsconfig.json`). Import as `@/components/...`, `@/lib/utils`, `@/contexts/...`.

## Important: dormant components

Several components exist in the tree but are **not wired into the live page** (`app/page.tsx`): `components/navbar/`, `components/ui/main-nav.tsx`, `components/cursor/`, `components/particles/`, `components/carousel/`, `components/work/`, `components/work-projects/`, and `components/full-screen.tsx`. Don't assume edits to these affect the rendered site — verify a component is actually imported in the render tree before relying on changes to it. `hey.js` at the root is a standalone novelty `resume` object and is not part of the app build.

## Static assets

Images and media live under `public/` (`assets/`, `profile/`, `logo/`, `music/`). Project images referenced in `PROJECT_INFO` resolve to `public/assets/project/`.
