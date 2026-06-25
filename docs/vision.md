# The Singularity Vision

> *"This is not an incremental improvement to how software agencies work. This is a synthetic evolutionary jump — the collapse of the bottleneck that has always been human-to-human communication overhead."*
>
> — Sebastian Rohrmann, Spartan Review, June 25, 2026

---

## The Origin Insight

Miguel Ángel Pérez Benavides built SpartanBrain to solve a personal problem: losing track of decisions from meetings, emails, and Slack. His solution — a daily cron job that pulls from every source, runs it through Claude, and commits structured intelligence to GitHub — costs $82/month and does the work of a $5,000/month junior PM.

That's not a cost optimization. That's a category destruction.

**If one person's daily intelligence can be automated for $82/month, what can an entire client project's intelligence be automated for?**

That question is Singularity.

---

## The Problem We're Solving

Every software idea follows the same dying path in a traditional agency:

```
Client has idea (100% of intent)
       ↓
Meeting happens (20% captured)
       ↓
PM writes notes (20% of notes → stories)
       ↓
Stories enter sprint (30% ship)
       ↓
Ships 3-6 weeks later
       ↓
Client remembers different version
```

**The bottleneck is human-to-human communication overhead.**

Three statistics define the damage:
- **3-6 weeks** average time from idea to shipped feature
- **67%** of meeting decisions never make it into code
- **$650/story point** average fully-loaded agency rate

None of these are engineering problems. They're communication and coordination problems. And AI solves communication and coordination problems.

---

## The Synthetic Evolutionary Jump

Singularity eliminates the bottleneck by replacing the human-to-human communication chain with direct client-to-agent collaboration:

```
Client speaks intent
       ↓
AI extracts the plan (100% captured)
       ↓
Client approves (minutes, not meetings)
       ↓
Agents execute in loops (70% of work)
       ↓
Humans when necessary (30% — judgment, security, novel arch)
       ↓
Shipped at hyperspeed
```

The "synthetic evolutionary jump" is the moment where AI and human intelligence merge into a single, seamless execution machine. Not AI replacing humans — AI amplifying the blast radius of each human decision.

---

## The Three-Layer Architecture

### Layer 1: Totems — Foundational Knowledge

*Things that don't move. The moat.*

The knowledge architecture is tool-agnostic and durable. When HyperAgent gets replaced in 6 months, the Totems remain. This is what agencies sell — not the AI tool, but the knowledge structure built around the client.

| Totem | What It Contains |
|-------|-----------------|
| `client.md` | Company overview, stakeholders, tech stack, business goals, constraints |
| `sold.md` | Committed sprint scope, deliverables, what's explicitly out of scope |
| `design-system.md` | Colors, typography, components, brand rules, accessibility standards |
| `network.md` | Key relationships — history, context, communication preferences |

Totems are generated once from a GitHub URL + website scan, then maintained automatically as The River flows.

### Layer 2: The Map — Active Work

*Projects, epics, user stories, sprint boards.*

Every story has exactly two labels:
- **`agent`** — AI executes autonomously (code, tests, PR, deploy)
- **`human`** — Requires judgment (security decisions, novel architecture, hardware, complex UX)

The 70/30 rule: agents handle ~70% of execution. Humans handle the 30% requiring irreducible judgment. Both work in loops — agents commit, humans review and guide.

### Layer 3: The River — Intelligence Feed

*Things that flow and change.*

| Source | What It Feeds |
|--------|--------------|
| Read AI (meetings) | Extracts decisions → generates specs → creates user stories |
| GitHub | Commits, PRs, gap analysis (stories without commits = drift) |
| Slack + Gmail | Daily intelligence, decisions, escalations, context |
| PostHog | Engagement data, retention curves, drop-off points |
| Stripe | Revenue events, transaction patterns, billing changes |

The River is always on. Every meeting, every commit, every transaction updates the system automatically.

---

## The New Agency Business Model

### The Old Model (Dying)

```
Revenue = Headcount × Hourly Rate × Hours
```

This model has a ceiling. More revenue requires more people. More people require more coordination. More coordination creates more overhead. The agency grows slower as it grows larger.

### The New Model (Singularity)

```
Feature Cost = Story Points (human) × $350 
             + Tokens (agent) × $0.015/1k 
             + Infrastructure (flat)
```

**Example: Add Face ID Login**

| Component | Singularity | Traditional |
|-----------|-------------|-------------|
| Human work | 2 SP × $350 = $700 | 4 SP × $650 = $2,600 |
| Agent work | 8,400 tokens × $0.015/1k = $0.13 | N/A |
| Infrastructure | $50/month | N/A |
| **Total** | **$750.13** | **$2,600** |
| **Timeline** | **2 days** | **3 weeks** |

**71% cost reduction. 10x speed increase.**

### New Revenue Streams for Agencies

1. **Agent tokens** — Every AI execution billable (new revenue, near-zero cost)
2. **Infrastructure** — Monthly flat fee for the Singularity environment (recurring)
3. **Human story points** — Fewer, but each worth more (expert-tier positioning)
4. **Knowledge architecture** — Building and maintaining Totems (high-value consulting)

The agency that adopts Singularity first doesn't just get more efficient. It captures a new category of revenue that didn't exist before.

---

## The Agents

### Mike — PM Agent

Mike runs daily intelligence sync. Every morning at 6 AM:
1. Pulls all meetings, emails, Slack messages from the last 24 hours
2. Extracts decisions, action items, risks, and blockers
3. Creates or updates user stories based on new decisions
4. Routes stories: `agent` or `human` label
5. Sends a daily brief to the team

**Status:** Active on all Singularity projects

### Runly — Engineering Agent

Runly handles code execution. When assigned an `agent`-labeled story:
1. Reads the spec and Totems (design system, client context)
2. Generates implementation plan
3. Writes code, tests, and documentation
4. Opens PR with description mapping to the story
5. Deploys to staging for human review
6. Merges and deploys to production after approval

**Status:** Active, currently building Singularity sections

---

## The Platform Vision

Singularity is not a tool. It is a platform that agencies run their entire delivery operation on.

**Year 1:** Single-agency deployment. SingularAgency uses Singularity internally. Build the proof. Refine the model.

**Year 2:** Multi-agency licensing. Package the platform for other agencies. Revenue: platform license + token overage + support.

**Year 3:** Marketplace. Agents built by the community. Integrations with every tool. Singularity becomes the operating system for the agency industry.

**The long game:** Every agency becomes a software factory. The human expertise that was previously bottlenecked by coordination overhead is now multiplied by AI execution capacity. Smaller teams, larger impact.

---

## Why Now

Three forces are converging:

1. **AI capability** — Models like Claude can now generate production-quality code, understand complex business context, and make routing decisions that previously required senior engineers.

2. **Tool maturity** — GitHub Copilot, Cursor, and similar tools have normalized AI-assisted coding. The leap to AI-executed coding is smaller than it looks.

3. **Client readiness** — Post-2025, clients have internalized that AI is changing software delivery timelines. They're asking for it — they just don't know what to ask for yet.

Singularity gives them the answer.

---

*Vision document — SingularAgency, June 2026*  
*Full transcript: `docs/spartan-review-transcript.md`*  
*Architecture deep-dive: `docs/architecture.md`*
