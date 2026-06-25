# Founding Session Log — How Singularity Was Born

**Date:** June 25, 2026  
**Session type:** Strategic Planning + Build Kickoff  
**Logged by:** Claude Code (AI pair programmer)

---

## Session Summary

This document is a complete log of the founding session — from the moment Sebastian uploaded the Spartan Review transcript to the moment the first code was deployed to Vercel. It captures every decision, every pivot, every architectural choice, and the reasoning behind them.

---

## Phase 1: Context Setting

Sebastian uploaded the Spartan Review transcript and framed the session:

> *"Plan mode only: Understand Singular, Understand where we are, Understand the transcript, Understand our new push... This is revolutionary. Ask me multiple choice clarifying questions please."*

The AI analyzed the transcript and identified the core strategic tension: SingularAgency has been operating as a traditional agency. Miguel's SpartanBrain demo revealed that the underlying infrastructure for AI-native delivery already exists. The question was how to package and position it.

Five clarifying questions were asked. Key answers:

**On what to build first:** The Singularity Client Platform — a demo that could be shown to internal stakeholders, client POs, and engineering talents simultaneously.

**On tech stack:** Next.js 15 + TypeScript + Tailwind + Framer Motion + Claude API. "Think of us like a Higgsfield.ai supercomputer with knowledge product."

**On the 6-week goal:** A visual demo — mock but capable of running all scenarios.

**On integrations:** GitHub, meetings, Singular Stories, PostHog, Stripe, ERP, Slack, Gmail, direct chat, and more. "It's like 20."

**On demo audiences:** Three simultaneously — internal stakeholders, client POs, and building talents like Carlos.

---

## Phase 2: The Format Pivot

The original plan was a dashboard-style demo. Sebastian asked:

> *"Can it be like a website with UI embedded in sections as I Scroll? the website explains the vision and then serves UI examples inline?"*

This was the critical pivot. The format shifted from dashboard to **scrollytelling** — a single URL where narrative copy explains the vision as you scroll, and actual embedded UI components (some interactive, some animated) demonstrate each product capability inline. Like Linear.app, Stripe.com, or Vercel.com.

This format serves all three audiences simultaneously without requiring navigation or onboarding.

---

## Phase 3: The Philosophical Grounding

Sebastian articulated the core philosophy:

> *"The idea of Singularity is the moment AI and human intelligence merge to drive a synthetic evolutionary jump to enable seamless work between agents and humans... we also enable the shortest change loop... client to ai, approve plan, work in loops and bring in humans when necessary enabling hyperspeed agility"*

This became the tagline architecture:
- **Primary:** "The synthetic evolutionary jump"
- **Secondary:** "Every idea dies in a meeting. Singularity changes that."
- **Value prop:** "The shortest change loop: client intent → shipped product, at hyperspeed"

---

## Phase 4: The Rubric

Before building, Sebastian requested quality validation:

> *"Create a rubric — does this align with industry innovations, does this relate to our call, will this be a game changer? Extend the rubric and then work in a loop until we reach an ambitious 90% or above."*

The 10-dimension rubric was created:
1. Industry Alignment
2. Call Fidelity
3. Game Changer Potential
4. Shortest Change Loop Implementation
5. Monetization Revolution
6. Visual WOW Factor
7. Agent-Human Model Clarity
8. Knowledge Architecture Depth
9. Synthetic Jump Narrative
10. Platform Vision

A workflow ran scoring iterations until the plan reached 90+/100.

---

## Phase 5: Build Kickoff

### Repository Setup
- Created fresh Next.js 15 app: `create-next-app@latest singularity-2026`
- TypeScript + Tailwind CSS v4 + App Router + ESLint
- Initialized git, pushed to GitHub: `SingularAgency/singularity-2026`

### Design System
Established in `app/globals.css`:
- Background: `#FFFFFF`
- Primary text: `#0A0A0A`
- Accent: Violet `#7C3AED`
- Font: Inter
- Animations: pulse-glow, typing, blink, fade-up, stream-in

### First Two Sections Built
1. **HeroSection** — "Every idea dies in a meeting" + animated 6-step change loop
2. **ProblemSection** — How agencies work today, with 7-step timeline and three damning stats

### Critical Bug Fixed
The site was blank on first deploy. Root cause: `app/page.tsx` still contained the default Next.js create-next-app placeholder. Fixed by wiring up the actual Singularity page with imports.

---

## Phase 6: Deployment

### GitHub
- Repo: `SingularAgency/singularity-2026` (public)
- Main branch: `main`
- PR #1 merged: Initial Singularity implementation
- PR #2 merged: Blank site fix + vercel.json cleanup

### Vercel
Connected via GitHub integration (not CLI — no token in environment). Two team deployments running:
- `jrsingulars-projects` team
- `singular-projects` team (canonical)

Live URL: **https://singularity-2026.vercel.app**

Sebastian requested org-level Vercel integration — a master connection so all future SingularAgency repos auto-deploy without per-repo setup.

---

## Architectural Decisions Log

| Decision | Choice | Reasoning |
|----------|--------|-----------|
| Framework | Next.js 15 App Router | SSR + streaming support for River section; Vercel-native |
| AI model (River) | claude-haiku-4-5 | Speed + cost for live streaming demo |
| Styling | Tailwind CSS v4 | Fastest iteration; utility-first matches component architecture |
| Animations | Framer Motion | Scroll-triggered, stagger effects, production-quality |
| Data | Mock + 1 live call | Demo doesn't need persistence; River section uses real API |
| Icons | Lucide React | Consistent, lightweight, Tree-shakeable |
| Fonts | Inter via Next.js | Vercel/Stripe aesthetic; subsetted for performance |
| Deployment | Vercel GitHub integration | Auto-deploy on push; org-level for all future repos |

---

## What Comes Next

### Remaining 9 Sections
- ShiftSection — New agency monetization model
- WhatIsSingularitySection — Three-layer architecture diagram
- TotemsSection — Animated knowledge base
- RiverSection — Live interactive Claude API demo
- AgentsSection — Mike + Runly in action
- BillingSection — Interactive token + story point calculator
- GapAnalysisSection — GitHub vs stories drift detection
- FutureSection — Platform vision
- CTASection — Book a demo / join waitlist

### Required User Actions
1. Add `ANTHROPIC_API_KEY` to Vercel Dashboard → Project Settings → Environment Variables
2. Confirm org-level Vercel GitHub integration is installed on SingularAgency org

### Future Platform Work
- iOS + Android apps (React Native)
- Client onboarding → Totem generation
- Multi-client dashboard
- Live GitHub gap analysis (real repo connections)
- PostHog + Stripe intelligence feeds

---

*Session logged June 25, 2026 — Singularity founding session*
