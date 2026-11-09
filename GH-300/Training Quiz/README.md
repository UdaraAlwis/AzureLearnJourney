# GH-300 GitHub Copilot Practice Quiz

A standalone Vite + React + TypeScript quiz for [GH-300 study notes](../README.md). Questions are added only after a Microsoft Learn unit is completed and its exact URL shared. See the study notes for current unit coverage.

From this directory:

```powershell
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). Run `npm run build` to type-check and produce a build.

Run `npm test` for answer-key and grading regression checks (Node.js 22.6 or newer), and `npm run lint` for lint checks.

Choose **Mixed practice > All questions** for the full bank in a freshly shuffled order each time you start a session. Each question appears once per session, and the order stays fixed while answering. Unit practice remains available separately. Both modes share saved mastery and immediate answer feedback; mixed practice is not a timed mock exam or a replica of the official exam.

## Interaction Practice

Use **Practice by question type** to open a format directly, **Mixed practice** to combine every format, or **Unit practice** to stay within one completed unit.

- Single-select, multiple-select, and true/false questions.
- Build-list ordering: drag steps into sequence, or select steps and use the move/remove controls. Every listed step is used once in the current questions.
- Matching: drag options onto answer rows or use each row's dropdown. Options may be reused and distractors may be unused.
- Dropdown completion: choose an answer for each blank; this is a simplified active-screen-style exercise, not a live application.
- Yes/no statement grids, including standalone case-based scenarios.
- Simplified hot-area questions: select code lines or setting areas, not exact exam screenshots.

Ordering and row-based answers require all positions to be filled before submission and are graded position by position. The whole question must be correct to count as mastered; this is the app's rule, not a claim about official partial-credit scoring. Submission locks controls until the next question. Existing question IDs and the storage key are preserved.

## Content Audit (2026-11-09)

Manually reviewed all 93 prompts, choices, answer keys, explanations, and artifacts against their 14 exact linked Learn units. Cross-checked changing plan and data-policy claims with [GitHub's current plan documentation](https://docs.github.com/en/copilot/get-started/plans) and [personal model-training controls](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#model-training-and-improvements). Corrected or clarified 22 questions; retained 71. All IDs, answer-index keys, and saved mastery were preserved; one question changed from multiple-select to single-select because it has exactly one correct option. Revisit corrected topics even if previously marked mastered.

| Completed unit | Questions reviewed | Audit result |
| --- | ---: | --- |
| Mitigate AI risks | 5 | Supported |
| Six principles of Responsible AI | 9 | Supported, including principle matching and statement grids |
| Copilot, your AI pair programmer | 7 | Clarified editor context and plan distinctions; removed indexing exclusivity implications |
| Interact with Copilot | 7 | Clarified acceptance key, command scope, and context versus review |
| Set up, configure, and troubleshoot | 9 | Corrected answer format and misleading settings-panel framing; verified setup sequence |
| Prompt engineering foundations | 10 | Supported, including 4 Ss and example-count mappings |
| User prompt process flow | 8 | Removed false strict chronology, filtering guarantees, and universal length-threshold implication |
| Copilot data | 6 | Scoped training policy by plan; separated retention, history, and training permission |
| Copilot LLMs | 5 | Clarified frozen LoRA base weights versus changed adapted behavior |
| Introduction to Spaces | 5 | Supported with conditional uploads and focused context |
| Space sharing and governance | 6 | Supported, including permissions and statement-grid keys |
| Working in a Space | 5 | Clarified repository-document scope of the search exception |
| Advanced Copilot features | 4 | Avoided universal command spelling and autonomous-execution implications |
| Applied Copilot techniques | 7 | Added complete Python artifact and qualified command availability |

Specific corrections:

- `applied-copilot-techniques-hot-area-01`: originally clarified with a complete snippet, then replaced on request with a similar string-uppercase example. The correct line is `result = message.upper`; it must become `result = message.upper()` to produce `HELLO`. The full three-line snippet is visible and the second-line answer key is preserved.
- `github-copilot-data-01`, `-02`, and `-03`: removed the blanket no-training claim, obsolete Individual-plan terminology, and memorization of old retention periods. Training permission is not the same as retention or local history. The Learn unit mixes older statements, so the current GitHub policy is the supplemental authority here.
- `setup-configure-troubleshoot-copilot-02`: now single-select, matching its one correct answer.
- `copilot-user-prompt-process-flow-07`: secure transmission and context gathering no longer have an unsupported strict order.
- `interact-with-copilot-06`: reviewing output is evaluated as a review practice, not claimed to supply prompt context.
- `github-copilot-llms-05`: frozen pretrained weights do not mean unchanged adapted-model behavior.
- Command examples are scoped to available client command sets; chat participants are not described as automatically authorized to execute commands.

Automated tests check answer cardinality, required rows, nonempty/distinct choices, valid indices and keys, every nonpositional choice subset, all ordering permutations, and the complete Python artifact. These tests validate structure and grading, not factual truth; the source review above is a separate manual check. Version-dependent features still require periodic review, and this is not official exam validation.

## Format Research (2026-11-09)

The [GH-300 certification page](https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/) says the exam may contain interactive components and currently lists 100 minutes. It links to the [official GitHub exam demo](https://GHCertDemo.starttest.com). The demo inspected during this review is labeled GH-001 and explicitly demonstrates multiple-select and drag-and-drop; it is interface practice, not a GH-300 question bank or a promise about a particular sitting.

[Microsoft's exam-experience guidance](https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience#question-types-on-exams) documents active screen, build list, case studies, drag and drop, hot area, multiple choice, and labs. It also explicitly says specific exam formats and question types are not disclosed before the exam. These general examples must not be presented as a verified GH-300 checklist. The [current GH-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300) governs subject coverage, not an item-type distribution.

GitHub repository research:

- [Cloud2BR-MSFTLearningHub/GH-300StudyGuide](https://github.com/Cloud2BR-MSFTLearningHub/GH-300StudyGuide) identifies its material as independent notes and original scenarios, and points readers to official exam resources. Its README does not establish a guaranteed question-format mix.
- [Ferozona/Github-Copilot](https://github.com/Ferozona/Github-Copilot) is a completed GitHub Skills exercise, not evidence about live exam formats.
- [jhwon1917/gh300](https://github.com/jhwon1917/gh300) is a community study collection; its repository overview does not establish an authoritative exam-format specification. Its question files were not used.

No external question bank, recalled exam item, leak, or dump was used. All added questions are original and linked to completed Microsoft Learn units. CLI installation procedures remain outside this bank until the relevant unit is completed and verified; older `gh copilot` extension workflows must not be assumed to describe today's Copilot CLI.

The app does not simulate labs, an entire live settings application, linked multi-question case-study navigation, a timer, review flags, or the secure exam browser. Use the official demo for the actual interface. There is no defensible way to guarantee this app reproduces every format on an individual GH-300 exam.

Questions live in `src/questions.ts`. Add original questions for completed units only, with stable IDs, explicit formats, correct choices, rationales addressing plausible wrong answers, and exact unit URLs. The unit picker groups questions by URL. Per-question mastery is stored only in this browser's `localStorage` under `gh-300-github-copilot-quiz-progress-v1`; it is not shared with GH-600.
