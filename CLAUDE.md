@AGENTS.md

# Singularity — Claude Code Instructions

## Project Overview

Singularity is a scrollytelling demo website for SingularAgency's AI-native software factory vision. It is a single-URL site where narrative copy explains the platform as you scroll, with embedded interactive/animated UI components demonstrating each product capability inline.

**Live:** https://singularity-2026.vercel.app  
**Repo:** https://github.com/SingularAgency/singularity-2026

## Architecture Context

- **Framework:** Next.js 15 App Router + TypeScript
- **Styling:** Tailwind CSS v4 (see `app/globals.css` for design tokens)
- **Animations:** Framer Motion (scroll-triggered via `useInView`)
- **AI:** Anthropic Claude API (`claude-haiku-4-5-20251001`) — River section only
- **Deployment:** Vercel (auto-deploy on push to `main`)

## Design System

Colors (from `app/globals.css`):
- Background: `#FFFFFF`
- Text: `#0A0A0A`
- Accent: `#7C3AED` (violet — primary brand)
- Muted: `#6B7280`
- Border: `#E5E7EB`

The accent color is violet. All interactive elements and brand moments use violet. Do not introduce new brand colors.

## The 11 Scroll Sections

1. HeroSection — "Every idea dies in a meeting" + 6-step change loop
2. ProblemSection — Old agency model timeline + 3 stats
3. ShiftSection — New monetization model (tokens + story points + infra)
4. WhatIsSingularitySection — Three-layer architecture (Totems → Map → River)
5. TotemsSection — Animated knowledge base cards
6. RiverSection — Live Claude API: transcript → specs → stories (streaming)
7. AgentsSection — Mike (PM) and Runly (Engineering) agent cards
8. BillingSection — Interactive calculator (slider: human/agent ratio)
9. GapAnalysisSection — GitHub vs stories drift detection demo
10. FutureSection — Platform vision (Year 1 → 2 → 3)
11. CTASection — Book a demo / join waitlist

## Coding Conventions

- All section components live in `components/sections/`
- All sections follow the same Framer Motion pattern: `useInView` + stagger children
- Mock data lives in `lib/mock-data.ts` — do not hardcode data in components
- Use `cn()` from `lib/utils.ts` for conditional classnames
- The `"use client"` directive is required for any component using hooks or Framer Motion
- Section max-width: 1200px centered (`max-w-[1200px] mx-auto`)
- Section padding: `py-32 px-6` (generous vertical breathing room)

## Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-...   # Required for River section
```

Set in Vercel Dashboard only. Never commit to any env file.

## Key Files

- `app/page.tsx` — Root page, imports all sections in order
- `app/globals.css` — Design system, animations, CSS variables
- `app/api/river/route.ts` — Claude streaming endpoint
- `lib/mock-data.ts` — All seeded demo data
- `docs/vision.md` — Full product vision
- `docs/architecture.md` — Technical deep-dive
- `docs/spartan-review-transcript.md` — The founding meeting transcript

## Git Workflow

- Main branch: `main` (auto-deploys to Vercel)
- Feature branches: `claude/[descriptive-name]`
- Always create a PR; merge to main via PR
- Every push to a feature branch gets a Vercel preview URL

## Do Not

- Do not add database dependencies — this is a demo site
- Do not change the color palette (violet accent is intentional brand)
- Do not use `useEffect` for animations — use Framer Motion `animate` prop
- Do not hardcode mock data in components — use `lib/mock-data.ts`
- Do not commit `ANTHROPIC_API_KEY` anywhere
