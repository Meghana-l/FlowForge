# FlowForge — From Broken Workflows to AI-Native Operations

**Live at :** [flow-forge-eta-ten.vercel.app](https://flow-forge-eta-ten.vercel.app)

FlowForge is an enterprise workflow intelligence tool that takes any business process — from invoice approvals to employee onboarding — and produces a full AI-native transformation blueprint: what's broken, how to fix it with AI, what it's worth, and how to get there.

---

## How It Works

Select a business domain and a specific process, configure your team size and pain points, and run the analysis. FlowForge generates a five-part transformation blueprint in seconds.

<img width="1874" height="858" alt="Screenshot 2026-06-28 213213" src="https://github.com/user-attachments/assets/9abf6ae6-aeb5-47f4-b42e-269fb9dc555d" />


---

## What Each Tab Shows

### Current State Assessment

Maps the existing workflow step by step — cycle time, error rate, automation coverage, and manual touchpoints. Identifies the specific inefficiency vectors costing the organization time and money, so there's no ambiguity about where the problem is.

<img width="1861" height="826" alt="Screenshot 2026-06-28 213609" src="https://github.com/user-attachments/assets/8f857845-1e4f-48ca-a51b-fb5de7f49f01" />


### AI-Native Redesign

Rebuilds the process from first principles using agentic AI — not incremental automation, but a ground-up redesign. Shows which AI agents replace which manual steps, how cycle time collapses, and what humans are left owning: judgment calls and exceptions only.

<img width="1616" height="799" alt="Screenshot 2026-06-28 213627" src="https://github.com/user-attachments/assets/f7b6281c-00ed-4ec5-970b-6aed633c5220" />


### Value Creation

Quantifies the business case: annual cost savings, productivity gain, and cycle time reduction — modeled against the actual team size and transaction volume entered. The ROI chart shows cumulative savings vs. investment across quarters so leadership can see exactly when the program pays for itself.

<img width="1593" height="785" alt="Screenshot 2026-06-28 213703" src="https://github.com/user-attachments/assets/5864bb27-2c9d-45be-8a02-729dc8214add" />


### Transformation Roadmap

Breaks the transformation into a phased, executable plan — Foundation, Pilot, and Scale — with specific initiatives and initiative-type tags. Gives program managers a concrete starting point rather than a vague recommendation.

<img width="1525" height="787" alt="Screenshot 2026-06-28 213716" src="https://github.com/user-attachments/assets/355e65cc-6eb5-43ee-a00f-d2f5e54ae024" />


### AI Governance

Defines the risk posture of the AI deployment and the specific controls required: model explainability, human-in-the-loop escalation thresholds, audit trail requirements, and data governance — so the transformation is safe to operate at enterprise scale.

---

## Stack

- HTML/CSS/JS 
- Chart.js for ROI visualization
- Groq AI (`llama-3.1-8b-instant`) via serverless proxy for live analysis generation
- Deployed on Vercel
