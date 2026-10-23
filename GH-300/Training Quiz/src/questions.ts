export type QuestionFormat = 'single-select' | 'multiple-select' | 'true-false'

export interface QuizQuestion {
    /** Stable and unique across all units so saved mastery survives future additions. */
    id: string
    unitTitle: string
    /** Exact URL of the completed Microsoft Learn unit, not its module or learning path. */
    unitUrl: string
    format: QuestionFormat
    prompt: string
    /** Optional excerpt of a prompt, setting, policy, or code to interpret. */
    artifact?: string
    choices: string[]
    /** Zero-based positions of every correct choice. */
    correctChoiceIndexes: number[]
    /** Explain the correct answer and why plausible alternatives are wrong. */
    explanation: string
}

// Add questions only after the learner shares a completed unit URL and its content is verified.
// Never change an existing ID: browser progress is keyed by ID.
export const questions: QuizQuestion[] = []
