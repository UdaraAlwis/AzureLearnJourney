# GH-300 Study Notes — GitHub Copilot

GH-300 Exam guide: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300

GitHub Copilot certification: https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/

LEARNING PATH 1: [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot/) (GH-300)

LEARNING PATH 2: [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) (GH-300)

## Training Quiz

The local quiz app includes original practice questions only for completed Microsoft Learn units and records GH-300 progress in your browser. It currently covers **Mitigate AI risks**, **Microsoft and GitHub's six principles of responsible AI**, **GitHub Copilot, your AI pair programmer**, **Interact with Copilot**, **Set up, configure, and troubleshoot GitHub Copilot**, **Prompt engineering foundations and best practices**, **GitHub Copilot user prompt process flow**, **GitHub Copilot data**, **GitHub Copilot Large Language Models (LLMs)**, **Introduction to Copilot Spaces**, **Sharing, discoverability, and governance**, **Do's and Don'ts of working in a Space**, **Advanced GitHub Copilot features**, **Applied GitHub Copilot techniques**, and **Code completion with GitHub Copilot**.

From the `Training Quiz` folder, install dependencies and start the app:

```powershell
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`. Run `npm run build` to validate a production build.

Practice includes single/multiple choice, true/false, drag-and-drop ordering and matching, dropdown completion, yes/no statement grids, and simplified code/settings hot areas. Mixed practice shuffles the full bank. These are original exercises based on completed units, not copied exam items or a guaranteed GH-300 format mix. See the [quiz format research and limitations](Training%20Quiz/README.md#format-research-2026-11-09) and the [official GitHub exam demo](https://GHCertDemo.starttest.com).

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

#### [Set up, configure, and troubleshoot GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/4-setup-configure-troubleshoot)

Start with a GitHub account that has access to GitHub Copilot, then install and authorize Copilot in the chosen environment.

- GitHub Copilot is available on GitHub.com without an extension and as an extension in VS Code, Visual Studio, JetBrains IDEs, and Neovim.
- In VS Code, install the **GitHub Copilot** extension and sign in to GitHub when prompted to authorize VS Code.
- Use the Copilot status icon to enable or disable Copilot completions globally or only for the language of the active file.
- In VS Code settings, under **Extensions** > **GitHub Copilot**, use **Editor: Enable Auto Completions** to control inline suggestions and language-specific behavior.
- For connection issues, inspect VS Code extension logs with **Developer: Open Log File** or **Developer: Open Extensions Logs Folder**; if normal logs are empty, inspect Electron logs through **Help** > **Toggle Developer Tools**.
- Network restrictions, firewalls, and proxies can affect Copilot connectivity. Run **GitHub Copilot: Collect Diagnostics** from the Command Palette to collect information for investigation or support.

##### Completed exercise: Develop with AI-powered code suggestions using GitHub Copilot and VS Code

- Microsoft Learn exercise: [Develop with AI-powered code suggestions by using GitHub Copilot and VS Code](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/5-exercise?source=learn)
- Exercise repository: [UdaraAlwis/skills-getting-started-with-github-copilot](https://github.com/UdaraAlwis/skills-getting-started-with-github-copilot)
- Completed exercise issue: [Issue #1 — Exercise: Get started using GitHub Copilot](https://github.com/UdaraAlwis/skills-getting-started-with-github-copilot/issues/1)

### [Introduction to prompt engineering with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/)

#### [Prompt engineering foundations and best practices](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/2-prompt-engineering-foundations-best-practices)

Prompt engineering is the practice of giving Copilot clear instructions so it can generate code appropriate to the project and task.

- Use the **4 Ss**: make each prompt **Single** in purpose, **Specific** in instructions, **Short** but clear, and **Surrounded** by useful context such as descriptive filenames and related open files.
- Add relevant comments, requirements, and examples to clarify intended behavior; Copilot can also use parallel open editor tabs as context.
- Start with a focused prompt, then assert and iterate: refine the request with missing details or examples instead of accepting a weak first result.
- **Zero-shot** prompting gives no example and suits common patterns; **one-shot** uses one example to establish a pattern; **few-shot** uses several examples for more complex patterns, scenarios, or edge cases.
- For long Copilot Chat conversations, summarize prior context or reset the chat with essential details for a new task to keep requests focused and manage processing usage.
- Role prompting asks Copilot to act as a relevant specialist, such as a security expert, performance expert, or testing specialist, to produce more targeted suggestions.
- Review generated output before use; clear prompts improve relevance but do not guarantee production-ready code.

#### [GitHub Copilot user prompt process flow](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/3-github-copilot-user-prompt-process-flow)

Copilot turns a prompt into a suggestion through secure inbound processing, model generation, and validated outbound delivery.

- The prompt is sent over HTTPS. Copilot gathers nearby code, the filename and file type, adjacent open tabs, project structure and paths, and programming-language or framework information.
- Fill-in-the-Middle (FIM) pre-processing considers code before and after the cursor to build broader context for a suggestion.
- A proxy in a GitHub-owned Microsoft Azure tenant filters traffic and blocks attempts to manipulate the system or reveal how suggestions are generated.
- Content filtering screens for hate speech, inappropriate content, and personal data before the filtered prompt is sent to an LLM for code generation.
- Generated responses are filtered again and checked for code-quality, security, and ethical concerns; responses with XSS or SQL-injection risks can be identified during validation.
- Administrators can optionally block suggestions matching public code. Current documentation describes comparison with surrounding code of about 150 characters, not a universal minimum suggestion length; failed responses can be withheld.
- Only responses that pass checks are delivered. Acceptance, modification, and rejection contribute to the feedback loop for subsequent interactions.

#### [GitHub Copilot data](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/4-github-copilot-data)

Data handling differs between code suggestions and chat experiences, and available context is limited.

- Retention, conversation history, and model-training permission are separate concerns. Do not treat an editor feature as a universal guarantee of zero retention or no training use.
- Under GitHub's standard data-protection terms, Copilot Business and Enterprise customer data is not used to train AI models. Personal-plan subscribers can disable model-training use in their personal Copilot settings.
- Copilot Chat formats responses for the chat interface and maintains conversation history so follow-up questions can use prior context.
- Retention depends on the plan, interface, model, and current terms. The Learn unit's editor/CLI versus GitHub/mobile retention periods should not be memorized as universal current guarantees. Check [current GitHub data-training policy](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#model-training-and-improvements) and applicable service terms.
- Copilot Chat can handle direct questions, code requests, open-ended guidance, and contextual prompts containing code or scenario details.
- Context windows limit the code and text Copilot can process at once. Break complex work into smaller focused requests or provide relevant snippets. Capacity varies by model and feature; the unit's 4k-token example is not a universal current limit.

#### [GitHub Copilot Large Language Models (LLMs)](https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/5-github-copilot-large-language-models)

LLMs are AI neural networks trained on large volumes of text to understand, generate, and manipulate language.

- LLMs use millions or billions of parameters that are tuned during training, enabling them to predict contextually relevant and coherent text.
- Their broad training and versatility let them be tailored for specialized tasks, domains, and languages.
- Copilot uses LLMs with context from the current file and other open IDE files or tabs to provide relevant code completions.
- **Fine-tuning** adapts a pretrained model to a specific task or domain by training it on a smaller target dataset while retaining knowledge from the source model.
- **LoRA** (Low-Rank Adaptation) fine-tuning trains small added components while keeping pretrained base weights frozen, reducing adaptation costs. The adapted system's behavior still changes.

### [Introduction to Copilot Spaces](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/)

#### [Introduction](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/1-introduction)

A GitHub Copilot Space is a dedicated Copilot chat grounded in a curated, topic-specific set of context.

- Add GitHub files, issues, pull requests, and free-text instructions to focus the Space on a service, runbook, dataset, or other narrow topic.
- Use a Space when consistent, reproducible, domain-specific answers matter more than broad repository discovery; tightly scoped context tends to yield more predictable, grounded responses.
- Attach repository code, documentation, configuration, and other assets as context. Linked GitHub files come from the repository's default branch, keeping them current as the repository changes.
- Write brief, focused, actionable instructions for goals, style preferences, workflows, or canonical examples. Instructions can be updated as the Space evolves.
- Keep the Space small because model context limits still apply. The selected sources and their order affect responses, so put the most important files and instructions first.

#### [Sharing, discoverability, and governance](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/3-share-discover-govern)

Manage a Copilot Space so it remains easy to find, safe to share, current, and useful over time.

- Set ownership and visibility to match the intended audience. Share by link and, where available, use organization browsing or catalogs to aid discovery.
- Use a clear, purpose-driven title and short description that state the Space's scope, audience, and expected outputs. Keep one job per Space.
- A Space does not grant access. GitHub's existing repository, issue, and pull-request permissions determine which linked content a viewer can use or see reflected in answers.
- Avoid pasting sensitive data into free-text notes. Prefer version-controlled linked files, where existing review processes and permissions apply.
- Linked default-branch files and attached issues or pull requests stay current as their sources change. For branch-specific or historical guidance, narrow the references or provide the exact needed content as an example or supported text attachment.
- Assign an owner, document how to use the Space, include canonical output examples, and set a regular review cadence to validate links, test representative prompts, prune stale sources, and confirm visibility.
- Split a Space that grows beyond one job into smaller Spaces to preserve discovery and consistent answer quality.

#### [Do's and Don'ts of working in a Space](https://learn.microsoft.com/en-us/training/modules/introduction-copilot-spaces/6-working-guide-space)

Work in a Space as a focused environment for one task or domain, using only the context it contains.

- Keep questions tightly scoped to attached files, issues, pull requests, and notes; reuse the Space's terminology to support consistent answers.
- Confirm the intended result, then refine requests with concrete constraints such as output format, time range, file path, or sections to examine. Ask for runnable code, queries, or commands and, where useful, source references for traceability.
- A Space does not automatically discover content outside its included context unless an explicitly attached repository-search capability is available in the environment.
- If responses drift, tighten instructions, add one to three high-quality examples of the desired output, and remove noisy or irrelevant sources.
- Keep context fresh, focused, and ordered: linked files track the default branch, and the most important sources or examples should appear first.
- Do not use `@` mentions to notify people or invoke other Copilot extensions from a Space; these interactions are not supported there.
- Do not let a Space exceed context limits or grow beyond one job. Reduce sources or split it into smaller Spaces when answers degrade or size warnings appear.
- Do not paste sensitive data into free-text notes; prefer repository files or supported uploads so standard permissions and review processes apply.

##### Completed exercise: Democratize tribal knowledge using Copilot Spaces

- Exercise repository: [UdaraAlwis/skills-scale-institutional-knowledge-using-copilot-spaces](https://github.com/UdaraAlwis/skills-scale-institutional-knowledge-using-copilot-spaces)

### [Using advanced GitHub Copilot features](https://learn.microsoft.com/en-us/training/modules/advanced-github-copilot/)

#### [Advanced GitHub Copilot features](https://learn.microsoft.com/en-us/training/modules/advanced-github-copilot/2-advanced-github-copilot-features)

Use the interaction style that fits the coding task: inline suggestions, chat, inline chat, and agents.

- Inline suggestions appear as ghost text and can be accepted with `Tab`; Copilot uses open files as context by default, and comments can provide additional prompts.
- Use the chat pane to ask about the current code or other software-development topics.
- In VS Code, inline chat keeps the interaction near the code; open it with `Ctrl+I` on Windows or `Command+I` on macOS.
- Slash commands such as `/tests` and `/docs` select a focused intent and can help produce relevant results with shorter prompts.
- VS Code agents can answer using a specific context; for example, the `@terminal` agent can interact with the terminal.

#### [Applied GitHub Copilot techniques](https://learn.microsoft.com/en-us/training/modules/advanced-github-copilot/4-applied-copilot-techniques)

Apply implicit prompts and selectively provide context to work more effectively in an existing project.

- Select code and use inline chat with `/fix` to request a code fix; slash commands such as `/doc`, `/explain`, `/generate`, `/optimize`, and `/tests` express common intents in chat or inline chat.
- Ask Copilot to use relevant context such as the workspace or terminal output. The `@terminal` agent can help with terminal errors and commands; open files are also used as context by default.
- Make prompts more specific when needed, such as requiring a Python virtual environment in a generated Dockerfile; reword the request if suggestions miss the requirement.

### [GitHub Copilot Across Environments: IDE, Chat, GitHub.com, Command Line Techniques, and the GitHub Copilot App](https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/)

#### [Code completion with GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/github-copilot-across-environments/2-code-completion-with-git-hub-copilot)

Use context-aware IDE completions to draft code, compare alternatives, and follow the project's conventions.

- Suggestions can complete a line or an entire block. Accept the whole suggestion, accept part, or ignore it; available controls depend on the editor and keybindings.
- Hover over ghost text to reveal suggestion controls, then use the forward/backward arrows to compare alternatives. The documented shortcuts are `Alt+]` for next and `Alt+[` for previous on Windows/Linux, and `Option+]` / `Option+[` on macOS.
- Existing code can guide method implementations, naming, formatting, comment style, and design patterns; these are context-based suggestions, not guaranteed enforcement.
- Copilot interprets comment intent with natural-language processing and relates comments to surrounding code through contextual analysis.
- Inline comments, block comments, Python docstrings, TODOs, and API documentation can guide completions. Comments can describe a function, clarify names, or specify an algorithm to influence the suggested implementation.
- Copilot supports many languages and frameworks, including Python, JavaScript, Java, TypeScript, Ruby, Go, C#, and C++; that list is not exhaustive. Plan quotas in older training examples can change.

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
- Add the number of original questions that best covers this completed unit only in `GH-300/Training Quiz/src/questions.ts`; there is no fixed question count. Use fewer questions for focused content and more for broad or high-value content; preserve existing questions and IDs so browser progress survives.
- Write standalone, exam-style decision scenarios. Do not mention the training unit, its wording, or the learner. Do not copy or use remembered, leaked, dump-site, or community “actual exam” questions.
- Use explicit formats (`single-select`, `multiple-select`, `true-false`, `ordering`, `matching`, `dropdown`, `yes-no`, `hot-area`), choosing interactions that genuinely fit the content. Use practical standalone scenarios, rationales explaining correct and plausible incorrect answers, and the exact unit URL for every question. Ordered answers use sequence indexes; row-based formats require `rows` and one correct choice index per row.
- Include interactive formats when the completed content supports them. Do not invent a CLI workflow, force an arbitrary order onto independent actions, or claim a guaranteed official exam-format mix. Preserve original questions and IDs when adding coverage.
- Keep the unit picker, GH-300-only localStorage progress, keyboard accessibility, and responsive layout working.
- Do not add material from unfinished units. If the unit is inaccessible, ask for its text rather than inventing notes or questions.
- Recheck the [GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) for changes; run `npm run build` from `GH-300/Training Quiz`.
- Report what was added and whether validation passed.
