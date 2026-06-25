# Singularity

> *The moment AI and human intelligence merge to drive a synthetic evolutionary jump.*

**Live:** https://singularity-2026.vercel.app

---

## What is Singularity?

Singularity is the next evolution of SingularAgency's platform — an AI-native software factory that enables the **shortest possible change loop**: from client intent to shipped product, at hyperspeed.

```
Client speaks intent
       ↓
AI extracts the plan
       ↓
Client approves
       ↓
Agents execute in loops
       ↓
Humans when necessary
       ↓
Shipped at hyperspeed
```

This is not an incremental improvement to how software agencies work. It is a **synthetic evolutionary jump** — the collapse of the bottleneck that has always been human-to-human communication overhead.

---

## The Origin

Singularity was born in the **Spartan Review** meeting on June 25, 2026. Miguel Ángel Pérez Benavides demonstrated SpartanBrain — a personal AI knowledge repository that auto-syncs daily intelligence from Gmail, Slack, meetings, and GitHub into a structured repo via cron job. Sebastian Rohrmann then presented the vision for transforming Singular Stories into something far bigger.

**Full transcript:** [`docs/spartan-review-transcript.md`](docs/spartan-review-transcript.md)
**Founding session log:** [`docs/founding-session.md`](docs/founding-session.md)
**Full vision document:** [`docs/vision.md`](docs/vision.md)

---

## The Architecture

Singularity is built on three layers:

### 1. Totems — Foundational Knowledge
*Things that don't move. The moat.*

The knowledge architecture is tool-agnostic and durable. When HyperAgent gets replaced in 6 months, the Totems remain. This is what agencies sell — not the AI tool, but the knowledge structure.

| Totem | Purpose |
|-------|---------|
| `client.md` | Everything about the client — company, stakeholders, stack, goals |
| `sold.md` | Committed scope, sprint deliverables, what's out of scope |
| `design-system.md` | Colors, typography, components, brand rules |
| `network.md` | Key people — relationships, context, history |

### 2. The Map — Active Work
*Projects, epics, user stories, sprint boards.*

Stories have two labels: **agent** or **human**. Agents handle ~70% of execution. Humans handle hardware, novel architecture, security auditing, and complex judgment calls.

### 3. The River — Intelligence Feed
*Things that flow and change.*

| Source | What it feeds |
|--------|--------------|
| Read AI (meetings) | Extracts decisions → specs → stories |
| GitHub | Commits, PRs, gap analysis vs stories |
| Slack + Gmail | Daily intelligence, decisions, context |
| PostHog | Engagement, retention, drop-offs |
| Stripe | Revenue, transactions, billing events |

---

## The New Billing Model

Singularity introduces a hybrid billing model that ends the headcount era:

```
Feature cost = Story Points (human) + Tokens (agent) + Infrastructure
```

Example: *Add Face ID login*
- 2 story points × $350 = **$700** (human)
- 8,400 tokens × $0.015/1k = **$0.13** (agent)
- **Total: $700.13 vs $1,300 traditional**

Agencies gain a new revenue stream: **charging for agent tokens**. Clients gain transparency. Both gain speed.

---

## The Agents

| Agent | Role | Status |
|-------|------|--------|
| **Mike** | PM Agent — daily intelligence sync, meeting → spec → story | Active |
| **Runly** | Engineering Agent — code generation, PRs, testing, deploy | Active |
| More to come | As Singularity scales | Planned |

---

## Demo Site

This repo contains a **scrollytelling demo website** — a single URL that explains the vision through narrative copy as you scroll, with embedded interactive and animated UI components demonstrating each product capability inline.

Built for three audiences simultaneously:
- **Internal stakeholders** — team alignment and north star
- **Client POs** — showing how they'll interact with agents directly
- **Talents** — what they're building toward

### Sections
1. **Hero** — The synthetic evolutionary jump
2. **The Problem** — How ideas die in meetings today
3. **The Shift** — The new agency model and monetization
4. **What is Singularity?** — The three-layer architecture
5. **The Totems** — Animated knowledge base demo
6. **The River** — Live Claude API: transcript → specs → stories
7. **The Agents** — Mike and Runly in action
8. **The Billing** — Interactive token + story point calculator
9. **GitHub ↔ Stories Gap** — Drift detection demo
10. **The Future** — Platform vision
11. **CTA** — Book a demo / join waitlist

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| AI | Anthropic Claude API (`claude-haiku-4-5` for River) |
| Deployment | Vercel (Singular Projects team) |
| Future | React Native (iOS + Android) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

```bash
ANTHROPIC_API_KEY=your_key_here   # Required for the live River demo section
```

Set in Vercel Dashboard → Project Settings → Environment Variables for production.

---

## Repository Structure

```
singularity-2026/
├── app/
│   ├── page.tsx                    # Main scrollytelling page
│   ├── layout.tsx                  # Root layout + metadata
│   ├── globals.css                 # Design system + animations
│   └── api/
│       └── river/
│           └── route.ts            # Claude API: transcript → stories (streaming)
├── components/
│   └── sections/                   # 11 scroll sections
├── lib/
│   ├── mock-data.ts               # Seeded demo scenarios
│   └── utils.ts                   # cn(), formatTokens(), formatCost()
├── docs/
│   ├── spartan-review-transcript.md   # Founding meeting transcript (Jun 25, 2026)
│   ├── founding-session.md            # Full session log — how Singularity was born
│   ├── vision.md                      # The complete Singularity vision
│   ├── rubric.md                      # Quality rubric used to score the plan
│   └── architecture.md                # Technical architecture deep-dive
└── vercel.json                    # Vercel deployment config
```

---

## Founding Team

| Person | Role |
|--------|------|
| **Sebastian Rohrmann** | Vision & Strategy |
| **Jorge Enrique Castañeda Pradilla** | Engineering Leadership |
| **Miguel Ángel Pérez Benavides** | Agent Architecture (SpartanBrain) |
| **Amilkar Abdiel Saavedra Suñe** | Engineering |
| **Carlos Martínez** | Dedicated build talent (6-week sprint) |

---

## Roadmap

- [x] Founding vision defined (Spartan Review, Jun 25, 2026)
- [x] Scrollytelling demo site initialized
- [x] Deployed to Vercel with auto-deploy on push
- [ ] Rubric validation (90+/100 quality score)
- [ ] All 11 sections built and animated
- [ ] Live River demo with Claude streaming
- [ ] Billing calculator interactive
- [ ] GitHub gap analysis demo
- [ ] iOS + Android app
- [ ] Client onboarding → Totem generation
- [ ] Multi-client dashboard

---

*Built with Claude Code — SingularAgency, June 2026*
