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

test('uppercase question includes complete code and identifies the missing call', () => {
    const question = questions.find((item) => item.id === 'applied-copilot-techniques-hot-area-01')
    assert.equal(question.artifact, question.choices.join('\n'))
    assert.deepEqual(question.correctChoiceIndexes, [1])
    assert.equal(question.choices[1], 'result = message.upper')
    assert.match(question.explanation, /message\.upper\(\)/)
})

test('answer formats have consistent cardinality and complete content', () => {
    for (const question of questions) {
        assert.ok(question.prompt.trim() && question.explanation.trim(), question.id)
        assert.ok(question.choices.length >= 2 && question.choices.every((choice) => choice.trim()), question.id)
        assert.equal(new Set(question.choices).size, question.choices.length, question.id)
        if (['single-select', 'true-false', 'hot-area'].includes(question.format)) {
            assert.equal(question.correctChoiceIndexes.length, 1, question.id)
        }
        if (question.format === 'multiple-select') {
            assert.ok(question.correctChoiceIndexes.length >= 2, question.id)
        }
        if (['matching', 'dropdown', 'yes-no'].includes(question.format)) {
            assert.ok(question.rows?.length > 0 && question.rows.every((row) => row.trim()), question.id)
        } else {
            assert.equal(question.rows, undefined, question.id)
            assert.equal(new Set(question.correctChoiceIndexes).size, question.correctChoiceIndexes.length, question.id)
        }
        if (question.format === 'true-false') assert.deepEqual(question.choices, ['True', 'False'], question.id)
        if (question.format === 'yes-no') assert.deepEqual(question.choices, ['Yes', 'No'], question.id)
        assert.doesNotMatch(question.prompt, /\b(?:this|the) (?:training )?unit\b/i, question.id)
    }
})

test('every nonpositional answer subset grades as the exact independently compared set', () => {
    for (const question of questions.filter((item) => !isPositional(item))) {
        for (let mask = 0; mask < 2 ** question.choices.length; mask += 1) {
            const answer = question.choices.flatMap((_, index) => mask & (1 << index) ? [index] : [])
            const expected = [...question.correctChoiceIndexes].sort((first, second) => first - second)
            assert.equal(isAnswerCorrect(question, answer), JSON.stringify(answer) === JSON.stringify(expected), question.id)
        }
    }
})

test('every ordering permutation grades only the reviewed sequence as correct', () => {
    function permutations(values) {
        if (!values.length) return [[]]
        return values.flatMap((value) => permutations(values.filter((item) => item !== value)).map((tail) => [value, ...tail]))
    }
    for (const question of questions.filter((item) => item.format === 'ordering')) {
        for (const answer of permutations(question.choices.map((_, index) => index))) {
            assert.equal(isAnswerCorrect(question, answer), JSON.stringify(answer) === JSON.stringify(question.correctChoiceIndexes), question.id)
        }
    }
})