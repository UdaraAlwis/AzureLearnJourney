import assert from 'node:assert/strict'
import { test } from 'node:test'
import { questions } from '../src/questions.ts'
import { isAnswerComplete, isAnswerCorrect, isPositional } from '../src/quizAnswers.ts'

test('bank has unique IDs, valid answer keys and exact completed-unit URLs', () => {
    assert.equal(new Set(questions.map((question) => question.id)).size, questions.length)
    for (const question of questions) {
        assert.ok(isAnswerCorrect(question, question.correctChoiceIndexes), question.id)
        assert.equal(isAnswerComplete(question, []), false, question.id)
        assert.match(question.unitUrl, /^https:\/\/learn\.microsoft\.com\/en-us\/training\/modules\/[^/]+\/[^/]+$/)
        assert.ok(question.correctChoiceIndexes.every((choice) => Number.isInteger(choice) && choice >= 0 && choice < question.choices.length), question.id)
        if (question.rows) assert.equal(question.rows.length, question.correctChoiceIndexes.length, question.id)
        if (question.format === 'ordering') assert.equal(question.correctChoiceIndexes.length, question.choices.length, question.id)
    }
})

test('all supported formats have original practice content', () => {
    assert.deepEqual([...new Set(questions.map((question) => question.format))].sort(),
        ['single-select', 'multiple-select', 'true-false', 'ordering', 'matching', 'dropdown', 'yes-no', 'hot-area'].sort())
})

test('positional answers reject incomplete, unanswered and wrong positions', () => {
    for (const question of questions.filter(isPositional)) {
        assert.equal(isAnswerComplete(question, question.correctChoiceIndexes.slice(1)), false, question.id)
        const unanswered = [...question.correctChoiceIndexes]
        unanswered[0] = -1
        assert.equal(isAnswerComplete(question, unanswered), false, question.id)
        const wrong = [...question.correctChoiceIndexes]
        wrong[0] = (wrong[0] + 1) % question.choices.length
        assert.equal(isAnswerCorrect(question, wrong), false, question.id)
    }
})

test('ordering uses sequence, not set equality, and rejects duplicate steps', () => {
    const question = questions.find((item) => item.format === 'ordering')
    assert.equal(isAnswerCorrect(question, [...question.correctChoiceIndexes].reverse()), false)
    assert.equal(isAnswerComplete(question, question.choices.map(() => 0)), false)
})

test('matching permits reused options and yes/no grades every row', () => {
    const question = { format: 'matching', choices: ['A', 'B'], rows: ['Task 1', 'Task 2'], correctChoiceIndexes: [1, 1] }
    assert.equal(isAnswerCorrect(question, [1, 1]), true)
    assert.equal(isAnswerCorrect({ ...question, format: 'yes-no' }, [1, 0]), false)
})

test('legacy multi-select is order-independent but requires the exact set', () => {
    const question = questions.find((item) => item.format === 'multiple-select' && item.correctChoiceIndexes.length > 1)
    assert.equal(isAnswerCorrect(question, [...question.correctChoiceIndexes].reverse()), true)
    assert.equal(isAnswerCorrect(question, question.correctChoiceIndexes.slice(1)), false)
    assert.equal(isAnswerCorrect(question, question.correctChoiceIndexes.map(() => question.correctChoiceIndexes[0])), false)
})