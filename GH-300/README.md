# GH-300 Study Notes — GitHub Copilot

GH-300 Exam guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300

GitHub Copilot certification: https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/

LEARNING PATH 1: [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot/) (GH-300)

LEARNING PATH 2: [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) (GH-300)

## Training Quiz

The local quiz app includes original practice questions only for completed Microsoft Learn units and records GH-300 progress in your browser. It currently covers **Mitigate AI risks**.

From the `Training Quiz` folder, install dependencies and start the app:

```powershell
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`. Run `npm run build` to validate a production build.

---

## LEARNING PATH 1: [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot/) (GH-300)

### [Responsible AI with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/)

#### [Mitigate AI risks](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/2-manage-ai-risks)

Responsible AI guides the development, assessment, and deployment of AI systems so they are safe, trustworthy, and ethical.

- Keep people and their goals at the center of AI system design decisions.
- Consider risks from hard-to-interpret decisions, including weak transparency and accountability.
- Anticipate unintended harmful outcomes, such as biased decisions and privacy violations.
- Reduce risk with robust governance, transparent AI processes, and human oversight.
- Balance AI innovation and efficiency with measures that minimize negative impacts and support fair, reliable outcomes.

#### [Microsoft and GitHub's six principles of responsible AI](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/3-six-principles-of-responsible-ai)

Microsoft and GitHub use six Responsible AI principles to guide the development and use of AI systems.

- **Fairness:** Treat similarly situated people fairly; use balanced data, bias testing, and monitoring to reduce unfair outcomes.
- **Reliability and safety:** Build systems that behave consistently as intended, respond safely to unexpected conditions, and resist harmful manipulation.
- **Privacy and security:** Obtain consent, minimize collection, protect or anonymize personal data, encrypt sensitive data, and restrict access.
- **Inclusiveness:** Design for diverse users, communities, geographies, languages, abilities, and connectivity constraints.
- **Transparency:** Make operation, design choices, capabilities, limitations, and decisions understandable; support logging, reporting, and auditing.
- **Accountability:** People and organizations remain responsible for system operation, continuous monitoring, and risk mitigation.

### [Introduction to GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/)

#### [GitHub Copilot, your AI pair programmer](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/2-github-copilot-your-ai-pair-programmer)

GitHub Copilot is an AI pair programmer that helps developers create, understand, test, review, and ship code across popular programming languages and supported development environments.

- Copilot Chat uses code context to answer questions, explain code or errors, generate tests or documentation, and explore feature implementations.
- Pull request summaries and code review assistance help reviewers understand changes, identify potential issues and edge cases, and propose improvements.
- Copilot CLI can suggest commands and code, generate shell scripts, explain output or errors, and help create or improve projects from the terminal.
- Copilot Spaces provide a context-rich place to explore a project, plan work, refine requirements, and iterate on designs.
- Copilot Cloud Agent can perform multi-step coding tasks, such as generating related files, implementing a feature set, or scaffolding from a specification, under developer direction.
- Plans differ by usage capacity and organizational capabilities: Free has limited usage; Pro and Pro+ add individual capacity and priority access; Business adds centralized controls and protections; Enterprise adds personalized organization-aware features.
#### [Interact with Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/3-interacting-with-copilot)

Use the interaction method that best fits the current task, then review Copilot output before using it.

- Inline suggestions appear as grayed-out code while typing; accept with `Tab` or the right arrow, and reject with `Esc` or by continuing to type.
- Use the VS Code Command Palette to run Copilot actions such as **Explain This** and **Generate Unit Tests**.
- Copilot Chat supports natural-language questions and requests; Inline Chat targets the current code location without leaving the editor.
- Inline Chat slash commands include `/explain`, `/suggest`, `/tests`, and `/comment` for targeted actions.
- Comments can describe intended functionality for code generation. For complex code, cycle through alternative suggestions to compare approaches.
- Well-structured, well-commented code gives Copilot better context and can improve the relevance of its suggestions.
### [Introduction to prompt engineering with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/)

### [Introduction to Copilot Spaces](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/)

### [Using advanced GitHub Copilot features](https://learn.microsoft.com/en-us/training/modules/advanced-github-copilot/)

### [GitHub Copilot Across Environments: IDE, Chat, GitHub.com, Command Line Techniques, and the GitHub Copilot App](https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/)

### [Management and customization considerations with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/github-copilot-management-and-customizations/)

### [Developer use cases for AI with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/developer-use-cases-for-ai-with-github-copilot/)

### [Develop unit tests using GitHub Copilot tools](https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/)

---

## LEARNING PATH 2: [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) (GH-300)

### [Building applications with GitHub Copilot agent mode](https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode/)

### [Accelerate development with GitHub Copilot cloud agent](https://learn.microsoft.com/en-us/training/modules/github-copilot-code-agent/)

### [Introduction to MCP Server](https://learn.microsoft.com/en-us/training/modules/mcp-server/)

### [Leveling up code reviews and pull requests with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/code-reviews-pull-requests-github-copilot/)

### [Using GitHub Copilot with JavaScript](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-javascript/)

### [Using GitHub Copilot with Python](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-python/)

WIP

CONTINUATION PROMPT FOR LLM,

I completed this Microsoft Learn unit: [PASTE EXACT UNIT URL]

Continue the GH-300 study notes and quiz incrementally. First verify the link is a single unit and read its authoritative content. Then:

- Update `GH-300/README.md` under the matching module with short plain-language notes and focused hyphen bullets; do not mark the whole module complete.
- Add enough original questions for this completed unit only in `GH-300/Training Quiz/src/questions.ts`; preserve existing questions and IDs so browser progress survives.
- Write standalone, exam-style decision scenarios. Do not mention the training unit, its wording, or the learner. Do not copy or use remembered, leaked, dump-site, or community “actual exam” questions.
- Use explicit formats (`single-select`, `multiple-select`, `true-false`), practical scenarios where supported, rationales explaining correct and plausible incorrect answers, and the exact unit URL for every question.
- Keep the unit picker, GH-300-only localStorage progress, keyboard accessibility, and responsive layout working.
- Do not add material from unfinished units. If the unit is inaccessible, ask for its text rather than inventing notes or questions.
- Recheck the [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) for changes; run `npm run build` from `GH-300/Training Quiz`.
- Report what was added and whether validation passed.
