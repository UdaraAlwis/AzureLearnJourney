import type { QuizQuestion } from './questions'

export const formatLabels: Record<QuizQuestion['format'], string> = {
    'single-select': 'Single choice',
    'multiple-select': 'Multiple choice (multiple answers)',
    'true-false': 'True / false',
    ordering: 'Ordering / build list',
    matching: 'Drag-and-drop matching',
    dropdown: 'Dropdown completion',
    'yes-no': 'Yes / no statement grid',
    'hot-area': 'Code / settings hot area',
}

export const answerInstructions: Record<QuizQuestion['format'], string> = {
    'single-select': 'Select one answer',
    'multiple-select': 'Select all that apply',
    'true-false': 'Choose true or false',
    ordering: 'Arrange all steps in order',
    matching: 'Match each requirement to an option',
    dropdown: 'Complete each blank',
    'yes-no': 'Choose yes or no for each statement',
    'hot-area': 'Select the code or setting area',
}

export function isPositional(question: QuizQuestion): boolean {
    return ['ordering', 'matching', 'dropdown', 'yes-no'].includes(question.format)
}

export function isAnswerComplete(question: QuizQuestion, answer: number[]): boolean {
    if (!isPositional(question)) return answer.length > 0
    const count = question.format === 'ordering' ? question.choices.length : question.rows?.length ?? 0
    return count > 0 && answer.length === count
        && answer.every((choice) => Number.isInteger(choice) && choice >= 0 && choice < question.choices.length)
        && (question.format !== 'ordering' || new Set(answer).size === count)
}

export function isAnswerCorrect(question: QuizQuestion, answer: number[]): boolean {
    return isAnswerComplete(question, answer)
        && answer.length === question.correctChoiceIndexes.length
        && (isPositional(question)
            ? answer.every((choice, index) => choice === question.correctChoiceIndexes[index])
            : new Set(answer).size === answer.length && answer.every((choice) => question.correctChoiceIndexes.includes(choice)))
}