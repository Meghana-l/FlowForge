# FlowForge — From Broken Workflows to AI-Native Operations

**Live:** [flow-forge-eta-ten.vercel.app](https://flow-forge-eta-ten.vercel.app)

FlowForge is an enterprise workflow intelligence tool that takes any business process — from invoice approvals to employee onboarding — and produces a full AI-native transformation blueprint: what's broken, how to fix it with AI, what it's worth, and how to get there.

---

## How It Works

Select a business domain and a specific process, configure your team size and pain points, and run the analysis. FlowForge generates a five-part transformation blueprint in seconds.

---

## What Each Tab Shows

### Current State Assessment
![Current State Assessment](screenshots/current-state.png)

Maps the existing workflow step by step — cycle time, error rate, automation coverage, and manual touchpoints. Identifies the specific inefficiency vectors costing the organization time and money, so there's no ambiguity about where the problem is.

### AI-Native Redesign
![AI-Native Redesign](screenshots/ai-redesign.png)

Rebuilds the process from first principles using agentic AI — not incremental automation, but a ground-up redesign. Shows which AI agents replace which manual steps, how cycle time collapses, and what humans are left owning: judgment calls and exceptions only.

### Value Creation
![Value Creation](screenshots/value-creation.png)

Quantifies the business case: annual cost savings, productivity gain, and cycle time reduction — modeled against the actual team size and transaction volume entered. The ROI chart shows cumulative savings vs. investment across quarters so leadership can see exactly when the program pays for itself.

### Transformation Roadmap
![Transformation Roadmap](screenshots/roadmap.png)

Breaks the transformation into a phased, executable plan — Foundation, Pilot, and Scale — with specific initiatives and initiative-type tags. Gives program managers a concrete starting point rather than a vague recommendation.

### AI Governance

Defines the risk posture of the AI deployment and the specific controls required: model explainability, human-in-the-loop escalation thresholds, audit trail requirements, and data governance — so the transformation is safe to operate at enterprise scale.

---

## Stack

- Vanilla HTML/CSS/JS — no framework, no build step
- Chart.js for ROI visualization
- Groq AI (`llama-3.1-8b-instant`) via serverless proxy for live analysis generation
- Deployed on Vercel
