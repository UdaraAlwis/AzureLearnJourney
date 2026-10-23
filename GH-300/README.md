# GH-300 Study Notes — GitHub Copilot

GH-300 Exam guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300

GitHub Copilot certification: https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/

LEARNING PATH 1: [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot/) (GH-300)

LEARNING PATH 2: [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) (GH-300)

## Training Quiz

The local quiz app includes practice questions only for completed Microsoft Learn units. It starts empty and records GH-300 progress in your browser.

From the `Training Quiz` folder, install dependencies and start the app:

```powershell
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`. Run `npm run build` to validate a production build.

---

## LEARNING PATH 1: [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot/) (GH-300)

### [Responsible AI with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/)

### [Introduction to GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/)

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
- Use explicit formats (`single-select`, `multiple-select`, `true-false`), practical scenarios where supported, rationales explaining correct and plausible incorrect answers, and the exact unit URL for every question.
- Keep the unit picker, GH-300-only localStorage progress, keyboard accessibility, and responsive layout working.
- Do not add material from unfinished units. If the unit is inaccessible, ask for its text rather than inventing notes or questions.
- Recheck the [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) for changes; run `npm run build` from `GH-300/Training Quiz`.
- Report what was added and whether validation passed.
