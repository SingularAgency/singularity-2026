export const SPARTAN_TRANSCRIPT = `Spartan Review
Thu, Jun 25, 2026

Miguel demonstrated SpartanBrain — a personal AI brain that auto-syncs daily from Gmail, Slack, Read AI meetings, and Google Calendar into a structured GitHub repository via a cron job. The brain has four phases: gather intel, clean and classify by project, Cuba verification (guardrail for hallucinations), and auto-commit to GitHub.

Key decisions from the meeting:
1. Integrate SpartanBrain architecture into Singular Stories, renaming it Singularity
2. Assign one dedicated talent (Carlos Martínez) 100% to this initiative — no split focus
3. 6-week sprint to build a functional demo
4. Singular Stories to be stabilized at current state, no new feature velocity
5. New billing model: charge clients for tokens (agent work) + story points (human work)
6. The vision: AI and human intelligence merge into the shortest possible change loop — client speaks intent, AI extracts specs, agents execute, humans intervene only when necessary`;

export const MOCK_STORIES = [
  {
    id: "SNG-001",
    title: "Integrate SpartanBrain daily sync cron into Singularity platform",
    spec: "Build a cron job that collects intelligence from Gmail, Slack, Read AI, and GitHub every 24 hours. Clean and classify by project. Run Cuba verification. Auto-commit to project brain repo.",
    assignedTo: "agent" as const,
    agent: "Mike",
    storyPoints: 0,
    tokens: 18400,
    status: "in_progress" as const,
    priority: "critical" as const,
    githubPR: "PR #47",
  },
  {
    id: "SNG-002",
    title: "Build Knowledge Base (Totems) — Client MD, Design System, Sold MD",
    spec: "Create a structured knowledge base with three foundational documents: Client MD (everything about the client), Sold MD (commitments made), and Design System. Auto-generate from GitHub repo scan + website crawl on client onboarding.",
    assignedTo: "human" as const,
    agent: null,
    storyPoints: 5,
    tokens: 0,
    status: "todo" as const,
    priority: "high" as const,
    githubPR: null,
  },
  {
    id: "SNG-003",
    title: "River pipeline: Meeting transcript → Spec → User Story → Route",
    spec: "Process meeting transcripts through Claude. Extract: decisions made, specs, user stories. For each story, determine if it requires an engineer (complex/infra) or can be executed by an agent. Route accordingly.",
    assignedTo: "agent" as const,
    agent: "Mike",
    storyPoints: 0,
    tokens: 12800,
    status: "done" as const,
    priority: "critical" as const,
    githubPR: "PR #51",
  },
  {
    id: "SNG-004",
    title: "Hybrid billing dashboard: tokens + story points per feature",
    spec: "Build a billing view where each feature shows its cost breakdown: story points (human hours @ rate) + tokens consumed (agent work @ per-1k rate). Show total vs traditional agency model comparison.",
    assignedTo: "human" as const,
    agent: null,
    storyPoints: 3,
    tokens: 0,
    status: "todo" as const,
    priority: "high" as const,
    githubPR: null,
  },
  {
    id: "SNG-005",
    title: "GitHub ↔ Stories gap analysis agent",
    spec: "Build an agent that compares approved user stories in Singularity against actual GitHub commits/PRs. Surface stories with no matching commits. Flag drift. Generate weekly report.",
    assignedTo: "agent" as const,
    agent: "Runly",
    storyPoints: 0,
    tokens: 9200,
    status: "in_progress" as const,
    priority: "medium" as const,
    githubPR: null,
  },
  {
    id: "SNG-006",
    title: "Client PIO: visual change interface (Vercel-style)",
    spec: "Allow non-technical clients to click on any element in their live product and type what they want changed. The system generates a spec and determines if it can be executed by an agent directly or needs an engineer.",
    assignedTo: "human" as const,
    agent: null,
    storyPoints: 8,
    tokens: 0,
    status: "todo" as const,
    priority: "medium" as const,
    githubPR: null,
  },
];

export const MOCK_GITHUB_COMMITS = [
  { sha: "a3f92b1", message: "feat: add daily cron sync for brain repo", pr: "PR #47", storyId: "SNG-001" },
  { sha: "c8d4e52", message: "feat: river pipeline transcript processor", pr: "PR #51", storyId: "SNG-003" },
  { sha: "91b3f7a", message: "chore: update dependencies", pr: null, storyId: null },
];

export const MOCK_TOTEMS = {
  clientMd: {
    title: "FileFelicity — Client Brief",
    lastUpdated: "2026-06-24",
    sections: [
      { heading: "Company", content: "FileFelicity is a B2B SaaS for document management. 40 employees. Series A ($8M). Based in Miami." },
      { heading: "Key stakeholders", content: "Valentina Cruz (CEO), Marco Jiménez (CPO), Dev team of 6." },
      { heading: "Product stack", content: "React + Node.js + PostgreSQL + AWS. iOS app in development." },
      { heading: "Primary goal", content: "Reduce document signing friction. Current drop-off at 67% in signing flow." },
    ],
  },
  soldMd: {
    title: "FileFelicity — Committed Scope",
    lastUpdated: "2026-06-20",
    sections: [
      { heading: "Sprint 1 (current)", content: "Integrate Face ID signing, reduce steps from 7 to 3, mobile-first redesign of signing flow." },
      { heading: "Sprint 2", content: "Bulk send + tracking dashboard. Slack notifications for signature events." },
      { heading: "Out of scope", content: "ERP integration (Q3), public API, white-labeling." },
    ],
  },
  designSystem: {
    title: "FileFelicity — Design System",
    lastUpdated: "2026-06-18",
    colors: ["#1A1A2E", "#7C3AED", "#FFFFFF", "#F3F4F6"],
    typography: "Inter — headings 32/24/20px, body 16/14px",
    components: ["Button (primary, secondary, ghost)", "Input", "Modal", "Toast", "DataTable"],
  },
};

export const MOCK_AGENTS = [
  {
    id: "mike",
    name: "Mike",
    role: "PM Agent",
    description: "Syncs daily intelligence, extracts specs from meetings, creates and routes user stories.",
    status: "active" as const,
    tasksToday: 4,
    tokensUsed: 24800,
    lastAction: "Processed Spartan Review transcript → generated 6 user stories",
  },
  {
    id: "runly",
    name: "Runly",
    role: "Engineering Agent",
    description: "Generates code, opens PRs, runs tests, deploys. Handles stories flagged for agent execution.",
    status: "working" as const,
    tasksToday: 2,
    tokensUsed: 18200,
    lastAction: "Building gap analysis between SNG-005 stories and GitHub commits",
  },
];

export const BILLING_PRESETS = [
  {
    label: "Add Face ID login",
    storyPoints: 2,
    agentTokens: 8400,
    description: "Mobile biometric auth integration",
  },
  {
    label: "Bulk document send",
    storyPoints: 5,
    agentTokens: 14200,
    description: "Multi-recipient sending with tracking",
  },
  {
    label: "Slack notification integration",
    storyPoints: 1,
    agentTokens: 6800,
    description: "Webhooks + Slack API integration",
  },
  {
    label: "Signing flow redesign",
    storyPoints: 8,
    agentTokens: 22000,
    description: "Full UX overhaul, 7 steps → 3 steps",
  },
];

export const HUMAN_RATE_PER_SP = 350; // $ per story point
export const TOKEN_RATE_PER_1K = 0.015; // $ per 1k tokens (blended agent rate)
export const TRADITIONAL_RATE_PER_SP = 650; // $ per story point traditional agency
