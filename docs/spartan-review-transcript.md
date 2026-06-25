# Spartan Review — Meeting Transcript

**Date:** June 25, 2026  
**Session:** Spartan Review — Founding Session  
**Participants:** Sebastian Rohrmann, Miguel Ángel Pérez Benavides, Jorge Enrique Castañeda Pradilla, Amilkar Abdiel Saavedra Suñe, Carlos Martínez

---

## Overview

This is the founding meeting transcript for Singularity. Two major demonstrations preceded the vision reveal:

1. **Miguel** demonstrated **SpartanBrain** — a personal AI knowledge repository that auto-syncs daily intelligence from Gmail, Slack, meetings, and GitHub into a structured repo via cron job.

2. **Sebastian** laid out the vision for transforming Singular Stories into **Singularity** — an AI-native software factory where clients interact through natural language, agents handle 70% of execution, and agencies charge a hybrid of human story points + AI tokens.

---

## SpartanBrain Demo (Miguel Ángel Pérez Benavides)

### What It Does

SpartanBrain is a personal AI brain — a daily cron job that runs at 6 AM, pulling intelligence from:

- **Gmail** — emails received and sent
- **Slack** — channel messages, DMs, threads
- **Read AI** — meeting transcripts and summaries
- **Google Calendar** — scheduled events and context

The cron job:
1. Fetches all new data from each source
2. Runs it through Claude to clean, classify, and structure it
3. Applies a **Cuba verification guardrail** (ensures no Cuba-related business activity per compliance requirements)
4. Auto-commits to a private GitHub repository

The result: Miguel's GitHub repo becomes his personal knowledge base, updated daily, fully searchable, version-controlled.

### The Cost

**$82/month** — that's the total cost of running SpartanBrain at scale:
- Anthropic API (Claude Haiku for classification, Claude Sonnet for summaries): ~$40/month
- Infrastructure (cron, GitHub Actions, hosting): ~$42/month

For comparison, a junior PM doing the same work (meeting notes, email summaries, Slack digests, calendar prep) costs $3,500-$8,000/month.

**SpartanBrain delivers PM-level intelligence at $82/month.**

### Why It Matters

This isn't a product yet — it's a proof of concept that the architecture works. The insight: if you can build this for one person's personal intel, you can build it for a client's entire project.

---

## The Vision (Sebastian Rohrmann)

### The Problem with Agencies Today

Every software idea follows this path:

1. Client has idea in conversation
2. Meeting happens — 20% of ideas captured
3. PM writes notes — 20% of notes become stories
4. Stories enter sprint — 30% of stories ship
5. Ship happens 3-6 weeks after original idea
6. Client remembers different version of the idea

**The bottleneck is human-to-human communication overhead.**

Three statistics that define the current state:
- **3-6 weeks** from idea to shipped feature
- **67%** of meeting decisions never make it into code
- **$650/story point** — average agency rate (fully loaded)

### The Shift

AI changes the equation. The bottleneck can be eliminated:

- Meetings → transcripts → structured specs → user stories (automated)
- Stories → code → PR → deploy (agent-driven, 70%)
- Humans handle: hardware, novel architecture, security, judgment calls (30%)

The new cost structure: `Feature = Story Points × $350 + Tokens × $0.015/1k + Infrastructure`

### Singularity: The Vision

> *"The operating system for AI-native software delivery."*

Singularity is three things simultaneously:

**1. The Shortest Change Loop**
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

**2. A New Revenue Model**

Agencies that adopt Singularity gain three new revenue streams:
- **Agent tokens** — charge clients for AI execution (new)
- **Infrastructure** — charge for the environment (recurring)
- **Human story points** — reduced count, higher value (existing, improved)

**3. A Platform, Not a Tool**

Singularity scales to become infrastructure for agencies globally:
- Small teams with 2-3 humans + unlimited agent capacity
- Per-client Totems (knowledge bases) that persist across tools
- River feeds that keep the system current (meetings, commits, analytics, revenue)

---

## Key Decisions Made in This Session

1. **Name**: Singularity (not "Singular Stories 2.0" or "AgentCore")
2. **First deliverable**: Scrollytelling demo website — one URL to show internal team, clients, and Carlos
3. **Tech stack**: Next.js 15 + TypeScript + Tailwind + Framer Motion + Claude API
4. **Primary audience for demo**: Internal stakeholders + client POs + engineering talents
5. **Billing model confirmed**: Story points + tokens + infra (hybrid)
6. **The River demo**: Live Claude API call — real transcript → real specs → real stories (streaming)
7. **70/30 rule**: Agents handle ~70% of execution. Humans handle the 30% requiring judgment.
8. **Totem-first architecture**: Tool-agnostic knowledge base as the durable moat
9. **Carlos Martínez**: 6-week dedicated sprint to build Singularity MVP
10. **Vercel + GitHub**: Deploy from day one, org-level integration for all future repos

---

## Example Feature: Add Face ID Login

To illustrate the billing model, this scenario was walked through:

**Traditional Agency Model:**
- 4 story points × $650 = **$2,600**
- Timeline: 3 weeks

**Singularity Model:**
- 2 story points × $350 = $700 (human: architecture decisions, security review)
- 8,400 tokens × $0.015/1k = $0.13 (agent: implementation, tests, PR)
- Infrastructure: $50/month (flat)
- **Total: $750.13 — delivered in 2 days**

**Savings: 71% cost reduction. Speed: 10x faster.**

---

## FileFelicity — Demo Client

Carlos demonstrated the concept using FileFelicity (a document management SaaS) as the sample client. Their Totems were pre-populated:

- **client.md**: FileFelicity overview, CEO Maya Chen, stack (React + Node + PostgreSQL), goals (reduce churn, add collaboration features)
- **sold.md**: Sprint scope — Q3 stories, what's in vs out of scope
- **design-system.md**: Brand colors (teal #0EA5E9), typography, components
- **network.md**: Key relationships — Maya (CEO), Alex (CTO), Priya (lead engineer)

Three of their approved Q3 stories had no matching GitHub commits. Singularity surfaced this as a "drift alert" — the Gap Analysis feature.

---

## Closing

Sebastian closed the session with:

> *"This is not an incremental improvement to how software agencies work. This is a synthetic evolutionary jump — the collapse of the bottleneck that has always been human-to-human communication overhead. SpartanBrain is the proof. Singularity is the product. The agency that builds this first owns the next decade of software delivery."*

The team agreed to move immediately into build mode. Carlos was assigned the 6-week sprint. Jorge owns engineering architecture. Miguel owns agent architecture. Amilkar owns infrastructure.

---

*Transcript reconstructed from Read AI meeting summary and session notes — June 25, 2026*
