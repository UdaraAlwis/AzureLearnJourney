# GH-300 GitHub Copilot Practice Quiz

A standalone Vite + React + TypeScript quiz for [GH-300 study notes](../README.md). Questions are added only after a Microsoft Learn unit is completed and its exact URL shared. The bank starts empty.

From this directory:

```powershell
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). Run `npm run build` to type-check and produce a build.

Questions live in `src/questions.ts`. Add original questions for completed units only, with stable IDs, explicit formats, correct choices, rationales addressing plausible wrong answers, and exact unit URLs. The unit picker groups questions by URL. Per-question mastery is stored only in this browser's `localStorage` under `gh-300-github-copilot-quiz-progress-v1`; it is not shared with GH-600.
