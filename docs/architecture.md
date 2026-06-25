# Singularity Technical Architecture

*A deep-dive into how the Singularity platform is built, how the demo site works, and where the architecture scales.*

---

## Demo Site Architecture

### Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 15 (App Router) | Streaming SSR; Vercel-native; React Server Components for performance |
| Language | TypeScript | Type safety across API routes and component props |
| Styling | Tailwind CSS v4 | Utility-first; fastest iteration; co-located styles |
| Animation | Framer Motion | Scroll-triggered, stagger, layout animations — production-quality |
| AI | Anthropic Claude API (`claude-haiku-4-5-20251001`) | Speed + cost for live streaming demo |
| Deployment | Vercel | GitHub integration; auto-deploy on push; edge network |
| Icons | Lucide React | Consistent, lightweight, tree-shakeable |
| Fonts | Inter (Next.js built-in) | Vercel/Stripe aesthetic; automatic subset optimization |

### Project Structure

```
singularity-2026/
├── app/
│   ├── page.tsx                    # Root scrollytelling page (imports all sections)
│   ├── layout.tsx                  # Root layout, Inter font, metadata
│   ├── globals.css                 # Design system: CSS vars, animations, utilities
│   └── api/
│       └── river/
│           └── route.ts            # POST /api/river — Claude streaming endpoint
├── components/
│   └── sections/                   # 11 scroll sections (one component each)
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── ShiftSection.tsx
│       ├── WhatIsSingularity.tsx
│       ├── TotemsSection.tsx
│       ├── RiverSection.tsx        # Interactive — real Claude API call
│       ├── AgentsSection.tsx
│       ├── BillingSection.tsx      # Interactive — calculator
│       ├── GapAnalysisSection.tsx
│       ├── FutureSection.tsx
│       └── CTASection.tsx
├── lib/
│   ├── mock-data.ts               # Seeded demo scenarios (stories, commits, agents)
│   └── utils.ts                   # cn(), formatTokens(), formatCost()
├── docs/                          # This documentation
├── public/                        # Brand assets
└── vercel.json                    # Vercel deployment config
```

---

## Design System

### Color Tokens (CSS Variables)

```css
--background: #FFFFFF
--foreground: #0A0A0A
--accent: #7C3AED          /* Violet — primary brand */
--accent-light: #EDE9FE    /* Violet 100 — backgrounds, badges */
--accent-mid: #A78BFA      /* Violet 400 — mid-emphasis */
--muted: #6B7280           /* Gray 500 — secondary text */
--border: #E5E7EB           /* Gray 200 — dividers */
--card: #F9FAFB            /* Gray 50 — card backgrounds */
```

### Typography Scale

```css
/* Section labels */
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

/* Gradient text (hero headline) */
.gradient-text {
  background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animation Keyframes

```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(124, 58, 237, 0); }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes stream-in {
  from { opacity: 0; transform: translateX(-8px); }
  to { opacity: 1; transform: translateX(0); }
}
```

---

## The River API

### Endpoint

```
POST /api/river
Content-Type: application/json

{ "transcript": "string — raw meeting transcript text" }
```

### Response

Streamed `text/plain` response. The model outputs structured JSON streamed token by token. The UI reads the stream and progressively renders:

```typescript
interface RiverOutput {
  keyDecisions: string[];
  specs: Spec[];
  userStories: UserStory[];
}

interface Spec {
  title: string;
  description: string;
  acceptanceCriteria: string[];
}

interface UserStory {
  id: string;
  title: string;
  description: string;
  routing: "agent" | "human";
  estimatedTokens: number;
  storyPoints: number;
  priority: "high" | "medium" | "low";
}
```

### System Prompt

The River uses a two-part system prompt:

1. **Role**: You are Singularity's PM intelligence layer. You analyze meeting transcripts and extract structured deliverables.

2. **Output format**: Return valid JSON only. Include: `keyDecisions` (decisions made), `specs` (technical specifications derived from decisions), `userStories` (actionable stories with `routing: "agent" | "human"` label and `estimatedTokens`).

### Routing Logic (AI-decided)

The model decides `routing` based on:

- **`agent`**: UI changes, CRUD operations, API integrations, form updates, test additions, documentation, config changes
- **`human`**: Database schema design, security review, novel architecture decisions, hardware interfaces, complex state management, compliance work

---

## Mock Data Architecture

All non-River sections use seeded mock data from `lib/mock-data.ts`. This enables:
1. Deterministic demos (same data every time)
2. No external dependencies for most sections
3. Offline-capable demo

### Mock Data Structure

```typescript
// User Stories (6 seeded)
export const MOCK_STORIES: UserStory[] = [
  {
    id: "SNG-001",
    title: "Implement real-time transcript processing",
    routing: "agent",
    estimatedTokens: 12400,
    storyPoints: 0,
    status: "completed"
  },
  // ... SNG-002 through SNG-006
]

// GitHub Commits (3 seeded — 2 linked, 1 unlinked → gap)
export const MOCK_GITHUB_COMMITS: Commit[] = [
  { sha: "a1b2c3d", story: "SNG-001", ... },
  { sha: "e4f5g6h", story: "SNG-003", ... },
  { sha: "i7j8k9l", story: null, ... }  // unlinked → drift alert
]

// Totems (FileFelicity client)
export const MOCK_TOTEMS = {
  client: "FileFelicity...",
  sold: "Sprint Q3 scope...",
  designSystem: "Teal #0EA5E9..."
}

// Agents
export const MOCK_AGENTS: Agent[] = [
  { id: "mike", name: "Mike", role: "PM", status: "active" },
  { id: "runly", name: "Runly", role: "Engineering", status: "working" }
]
```

### Billing Constants

```typescript
export const HUMAN_RATE_PER_SP = 350;       // $350 per story point
export const TOKEN_RATE_PER_1K = 0.015;     // $0.015 per 1k tokens
export const TRADITIONAL_RATE_PER_SP = 650; // $650 traditional rate
```

---

## Scroll Animation Architecture

Every section uses the same Framer Motion pattern:

```tsx
const { ref, inView } = useInView({
  threshold: 0.2,
  triggerOnce: true
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, staggerChildren: 0.1 }}
>
  {items.map((item, i) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1 }}
    />
  ))}
</motion.div>
```

Sections trigger once — on first entering viewport. This prevents re-triggering on scroll back.

---

## Environment Variables

```bash
# Required for River section (live Claude API call)
ANTHROPIC_API_KEY=sk-ant-...

# Set in Vercel Dashboard → Project Settings → Environment Variables
# Never commit to .env or .env.local in production
```

The `ANTHROPIC_API_KEY` is only used server-side in `app/api/river/route.ts`. It is never exposed to the client.

---

## Deployment Architecture

### GitHub → Vercel Integration

The repo is connected to Vercel via GitHub App integration at the organization level:

1. **Install**: GitHub App installed on `SingularAgency` org (not per-repo)
2. **Auto-detect**: Any new repo in the org can be connected with one click
3. **Auto-deploy**: Every push to `main` triggers a production deployment
4. **Preview**: Every PR gets a preview URL

### Build Pipeline

```
git push origin main
       ↓
GitHub webhook → Vercel
       ↓
npm install
       ↓
npm run build (next build)
       ↓
.next/ output deployed to edge network
       ↓
https://singularity-2026.vercel.app live
```

### Two Team Deployments

The repo is currently connected to two Vercel teams:
- `jrsingulars-projects` team (personal)
- `singular-projects` team (canonical — use this URL)

Canonical URL: `https://singularity-2026.vercel.app`

---

## Future Platform Architecture

### What the Demo Previews

The scrollytelling site is a demo, but the architecture it previews is real:

| Demo Component | Real Platform Equivalent |
|---------------|-------------------------|
| Mock Totems (FileFelicity) | Per-client knowledge bases, auto-generated |
| River section (one live call) | Continuous intelligence pipeline (daily cron) |
| Mock GitHub gap analysis | Real webhook-driven drift detection |
| Billing calculator | Actual billing engine (Stripe integration) |
| Mike + Runly agent cards | Deployed agent instances per client |

### Scaling the Architecture

**Phase 1 (Current):** Single-client demo, one live API endpoint  
**Phase 2:** Per-client Totem generation pipeline, multi-client dashboard  
**Phase 3:** Agent marketplace, community integrations, platform licensing  
**Phase 4:** Enterprise: SOC2, SSO, custom SLAs, on-prem deployment  

---

*Architecture document — SingularAgency, June 2026*  
*See also: `docs/vision.md`, `docs/founding-session.md`*
