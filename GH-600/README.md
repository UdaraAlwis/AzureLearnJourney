# GH-600 Study Notes — GitHub Certified: Agentic AI Developer

GH-600 Exam guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-600

LEARNING PATH 1: Developing in Agentic AI Systems Part 1 of 2 (GH-600)

LEARNING PATH 2: Developing in Agentic AI Systems Part 2 of 2 (GH-600)

## Training Quiz

The local quiz app includes practice questions only for completed Microsoft Learn units. It records your progress in your browser.

From the `Training Quiz` folder, install dependencies and start the app:

```powershell
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`. Run `npm run build` to validate a production build.

---

## LEARNING PATH 1: Developing in Agentic AI Systems Part 1 of 2 (GH-600)

### [Foundations of Agentic AI in GitHub](https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/)

#### [Define agentic AI in the SDLC](https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/2-define-agentic-ai)

Assistant-based systems are reactive:

- Suggest or explain but don't take repository actions
- Depend on the user to apply each step

Agent-based systems are goal-driven:

- Maintain a goal and decide intermediate actions across multiple steps
- Use tools such as GitHub APIs, CI workflows, and repository write operations
- Create durable artifacts such as branches, commits, and pull requests
- Iterate from feedback such as checks, scans, and reviews

Agents participate in existing GitHub workflows rather than replace them. Their work remains visible through branches, commits, pull requests, checks, review comments, and approvals.

#### [Explain the agent lifecycle - plan, act, evaluate](https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/3-explain-agent-lifecycle-plan-act-evaluate)

Agentic systems use a continuous Plan → Act → Evaluate loop until success criteria are met or the work is escalated to a human.

- **Plan:** Interpret the goal and create a structured, reviewable plan with scope, success criteria, and rollback or escalation paths.
- **Act:** Execute bounded repository actions on a branch, such as changing files, pushing commits, and opening or updating a pull request.
- **Evaluate:** Use objective system signals: CI workflow runs, status checks, code review, code scanning, secret scanning, and dependency alerts.

If evaluation fails or risks remain, revise the plan, adjust the changes, and evaluate again. Rulesets and branch protection can enforce passing checks before a pull request merges.

### [Designing Agent Architecture and SDLC Integration](https://learn.microsoft.com/en-us/training/modules/design-agent-architecture-integration/)

### [Tooling, MCP, and Agent Execution Environments](https://learn.microsoft.com/en-us/training/modules/agent-tooling-mcp-execution-environments/)

---

## LEARNING PATH 2: Developing in Agentic AI Systems Part 2 of 2 (GH-600)

### [Multi-Agent systems and orchestration](https://learn.microsoft.com/en-us/training/modules/multi-agent-systems-orchestration/)

### [Memory, State, and Evaluation](https://learn.microsoft.com/en-us/training/modules/memory-state-evaluation/)

### [Governance, guardrails, and operations](https://learn.microsoft.com/en-us/training/modules/governance-guardrails-operations/)

WIP

CONTINUATION PROMPT FOR LLM,

I completed this Microsoft Learn unit: [[PASTE UNIT URL](https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/3-explain-agent-lifecycle-plan-act-evaluate)]

Continue the GH-600 study notes and quiz incrementally. First verify the link is a single unit and read only its authoritative content. Then:

- Update `GH-600/README.md` in the matching learning-path/module section, preserving the existing concise note style and outline.
- Add enough new questions for this completed unit only in `GH-600/Training Quiz/src/questions.ts`; preserve all existing questions and IDs.
- Use explicit format metadata (`single-select`, `multiple-select`, `true-false`), clear rationales including why plausible alternatives fail, and link every question to this exact unit.
- Ensure the unit picker, localStorage progress, accessibility, and responsive UI still work.
- Do not add material from incomplete units or invent unsupported facts.
- Run `npm run build` from `GH-600/Training Quiz`.
- Report the notes/questions added and any validation failure.