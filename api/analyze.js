export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const { domain, process, teamSize, volume, pains, context } = req.body;

    const prompt = `Analyze this enterprise workflow for an AI-native transformation assessment:

Domain: ${domain}
Process: ${process}
Team size: ${teamSize} employees
Monthly volume: ${volume}
Pain points: ${(pains || []).join(', ') || 'none specified'}
Context: ${context || 'none'}

Return ONLY a JSON object with this exact shape (no markdown, no backticks):
{
  "executive_summary": "2-3 sentence executive summary of the transformation opportunity and expected impact",
  "current_state": {
    "steps": [
      {"name":"Step name","type":"manual|automated|decision","avg_hours_per_cycle":2,"pain_level":"high|medium|low"}
    ],
    "total_cycle_time_days": 7,
    "error_rate_pct": 12,
    "automation_pct": 18,
    "manual_touchpoints": 9,
    "key_inefficiencies": [
      {"title":"Inefficiency title","impact":"Specific impact description"}
    ]
  },
  "ai_redesign": {
    "approach": "One paragraph describing the agentic AI redesign approach",
    "agents_deployed": [
      {"name":"Agent name","icon":"emoji","function":"what it does"}
    ],
    "redesigned_steps": [
      {"name":"Step name","type":"agent|human|hybrid","avg_hours_per_cycle":0.1}
    ],
    "new_cycle_time_days": 0.5,
    "new_automation_pct": 87,
    "new_error_rate_pct": 2
  },
  "value_creation": {
    "annual_hours_saved": 12000,
    "cost_savings_usd_k": 820,
    "productivity_gain_pct": 64,
    "error_reduction_pct": 83,
    "cycle_time_reduction_pct": 93,
    "roi_quarters": [
      {"quarter":"Q1 2026","cumulative_savings_k":70},
      {"quarter":"Q2 2026","cumulative_savings_k":260},
      {"quarter":"Q3 2026","cumulative_savings_k":530},
      {"quarter":"Q4 2026","cumulative_savings_k":820}
    ],
    "investment_k": 170
  },
  "roadmap": {
    "q1": {"label":"Foundation","items":[{"name":"Initiative","description":"Details","tags":["infra"]}]},
    "q2": {"label":"Pilot","items":[{"name":"Initiative","description":"Details","tags":["agentic"]}]},
    "q3": {"label":"Scale","items":[{"name":"Initiative","description":"Details","tags":["data"]}]}
  },
  "governance": {
    "risk_level": "medium",
    "controls": [
      {"icon":"🔒","title":"Control name","description":"What it enforces"}
    ]
  }
}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        max_tokens: 2000,
        messages: [
          {
            role: "system",
            content: "You are an enterprise workflow transformation analysis engine. Produce structured JSON analysis of enterprise process redesign using agentic AI concepts. Return ONLY valid JSON — no markdown, no backticks, no preamble, no explanation."
          },
          { role: "user", content: prompt }
        ]
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);
    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: "Analysis failed", detail: err.message });
  }
}
