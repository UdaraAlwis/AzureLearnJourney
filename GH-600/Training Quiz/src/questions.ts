export type QuestionFormat = 'single-select' | 'multiple-select' | 'true-false'

export type QuizQuestion = {
    id: string
    unitTitle: string
    format: QuestionFormat
    prompt: string
    choices: string[]
    correctChoiceIndexes: number[]
    explanation: string
    sourceUrl: string
}

const defineAgenticAiSource = 'https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/2-define-agentic-ai'
const agentLifecycleSource = 'https://learn.microsoft.com/en-us/training/modules/foundations-agentic-ai/3-explain-agent-lifecycle-plan-act-evaluate'

// Add questions only after the learner provides a completed Microsoft Learn unit page.
export const questions: QuizQuestion[] = [
    {
        id: 'define-agentic-ai-1',
        unitTitle: 'Define agentic AI in the SDLC',
        format: 'multiple-select',
        prompt: 'Which capabilities indicate that an AI system is behaving as an agent rather than an assistant?',
        choices: [
            'Maintaining a goal across multiple steps',
            'Requiring a user to apply every suggested change manually',
            'Using tools to act inside a repository workflow',
            'Iterating in response to checks and review feedback',
        ],
        correctChoiceIndexes: [0, 2, 3],
        explanation: 'An agent maintains a goal, decides and performs intermediate actions with tools, and responds to feedback. Suggestion-only output that the user must apply manually is assistant behavior.',
        sourceUrl: defineAgenticAiSource,
    },
    {
        id: 'define-agentic-ai-2',
        unitTitle: 'Define agentic AI in the SDLC',
        format: 'single-select',
        prompt: 'A security alert identifies a vulnerable dependency. Which sequence best demonstrates agentic behavior in GitHub?',
        choices: [
            'Explain the risk and wait for the developer to perform every repository action',
            'Create a branch, update the dependency and lockfile, open a pull request, then revise based on CI or review feedback',
            'Generate recommended commands without accessing the repository',
            'Summarize the alert in a chat response and return control to the user',
        ],
        correctChoiceIndexes: [1],
        explanation: 'The PR-producing sequence is agentic because the system uses tools to move a goal through multiple steps, creates durable repository artifacts, and can iterate from validation feedback.',
        sourceUrl: defineAgenticAiSource,
    },
    {
        id: 'define-agentic-ai-3',
        unitTitle: 'Define agentic AI in the SDLC',
        format: 'multiple-select',
        prompt: 'Where is an agent’s work and its human oversight visible in a GitHub workflow?',
        choices: [
            'Branches and commits',
            'Pull requests',
            'Workflows and checks',
            'Review comments and approvals',
            'Only in the private chat that started the task',
        ],
        correctChoiceIndexes: [0, 1, 2, 3],
        explanation: 'GitHub exposes agent activity through normal development structures: branches and commits show changes, pull requests present proposals, checks provide evidence, and reviews record human acceptance or rejection.',
        sourceUrl: defineAgenticAiSource,
    },
    {
        id: 'define-agentic-ai-4',
        unitTitle: 'Define agentic AI in the SDLC',
        format: 'true-false',
        prompt: 'True or false: An agent replaces the existing GitHub workflow because autonomous work no longer needs branches, pull requests, checks, or human review.',
        choices: [
            'True',
            'False',
        ],
        correctChoiceIndexes: [1],
        explanation: 'False. An agent participates in—not replaces—the existing workflow. Branches and commits expose its changes, pull requests present its proposal, checks provide validation evidence, and reviews preserve human acceptance or rejection. Autonomy does not remove these controls.',
        sourceUrl: defineAgenticAiSource,
    },
    {
        id: 'define-agentic-ai-5',
        unitTitle: 'Define agentic AI in the SDLC',
        format: 'single-select',
        prompt: 'Which outcome is a durable repository artifact an agent can create while progressing a task?',
        choices: [
            'A branch, commit, or pull request',
            'A suggestion that exists only in a chat response',
            'An unrecorded change outside the repository workflow',
            'A command list that the developer must apply manually',
        ],
        correctChoiceIndexes: [0],
        explanation: 'Agent behavior can produce durable outcomes in the repository, including branches, commits, and pull requests. Suggestions and command lists alone are assistant-style output.',
        sourceUrl: defineAgenticAiSource,
    },
    {
        id: 'agent-lifecycle-1',
        unitTitle: 'Explain the agent lifecycle - plan, act, evaluate',
        format: 'multiple-select',
        prompt: 'Which characteristics make an agent plan more reviewable and useful in a GitHub workflow?',
        choices: [
            'It describes the scope of the changes',
            'It defines success criteria',
            'It includes a rollback or escalation path',
            'It is kept as an unreviewable internal state',
        ],
        correctChoiceIndexes: [0, 1, 2],
        explanation: 'A high-quality plan is a structured, reviewable artifact. Scope, success criteria, and a rollback or escalation path help reviewers assess the intended work.',
        sourceUrl: agentLifecycleSource,
    },
    {
        id: 'agent-lifecycle-2',
        unitTitle: 'Explain the agent lifecycle - plan, act, evaluate',
        format: 'single-select',
        prompt: 'Which action best keeps an agent’s repository execution bounded?',
        choices: [
            'Make uncontrolled direct changes to the default branch',
            'Work on a branch and propose changes through a pull request',
            'Skip the repository workflow once a plan is approved',
            'Perform only undocumented external changes',
        ],
        correctChoiceIndexes: [1],
        explanation: 'Working on a branch and proposing changes through a pull request is best because it bounds execution and preserves review and validation. Direct default-branch changes bypass that safe path; approval of a plan does not justify skipping execution controls; undocumented external changes reduce traceability.',
        sourceUrl: agentLifecycleSource,
    },
    {
        id: 'agent-lifecycle-3',
        unitTitle: 'Explain the agent lifecycle - plan, act, evaluate',
        format: 'multiple-select',
        prompt: 'Which GitHub signals can objectively evaluate an agent-proposed change?',
        choices: [
            'Workflow runs and status checks',
            'Code review feedback and approvals',
            'Security signals such as code scanning or secret scanning alerts',
            'The agent’s own confidence that the result is correct',
        ],
        correctChoiceIndexes: [0, 1, 2],
        explanation: 'Evaluation must be grounded in system signals, including checks, reviews, and security results—not an agent’s self-assessment.',
        sourceUrl: agentLifecycleSource,
    },
    {
        id: 'agent-lifecycle-4',
        unitTitle: 'Explain the agent lifecycle - plan, act, evaluate',
        format: 'single-select',
        prompt: 'CI checks fail after an agent opens a pull request for a dependency update. What should happen next?',
        choices: [
            'Merge anyway because planning is complete',
            'Stop permanently because evaluation is the final lifecycle step',
            'Revise the plan, adjust the change, and evaluate again; escalate if needed',
            'Ignore the checks if the agent is confident in its update',
        ],
        correctChoiceIndexes: [2],
        explanation: 'Plan, act, and evaluate form a loop. Failed checks, unresolved risks, or unmet requirements require revised planning and action followed by reevaluation, or a handoff to a human.',
        sourceUrl: agentLifecycleSource,
    },
    {
        id: 'agent-lifecycle-5',
        unitTitle: 'Explain the agent lifecycle - plan, act, evaluate',
        format: 'single-select',
        prompt: 'How can a repository make an agent’s evaluation an enforceable gate before a pull request merges?',
        choices: [
            'Rely only on the agent saying its work is complete',
            'Use rulesets or branch protection to require checks to pass',
            'Remove status checks so the agent can merge faster',
            'Treat workflow failures as informal suggestions only',
        ],
        correctChoiceIndexes: [1],
        explanation: 'Repository or organization policies, such as rulesets and branch protection, can require checks to pass before merging. This turns evaluation from an informal suggestion into an enforceable gate.',
        sourceUrl: agentLifecycleSource,
    },
]
