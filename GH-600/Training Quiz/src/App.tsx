import { useEffect, useMemo, useState } from 'react'
import { questions } from './questions'

type Progress = Record<string, boolean>

const progressKey = 'agentic-ai-developer-quiz-progress'
const certificationTitle = 'GitHub Certified: Agentic AI Developer (GH-600)'

function loadProgress(): Progress {
    try {
        const saved: unknown = JSON.parse(localStorage.getItem(progressKey) ?? '{}')
        if (typeof saved !== 'object' || saved === null || Array.isArray(saved)) return {}
        return Object.fromEntries(
            Object.entries(saved).filter((entry): entry is [string, boolean] => typeof entry[1] === 'boolean'),
        )
    } catch {
        return {}
    }
}

function App() {
    const [activeUnit, setActiveUnit] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selected, setSelected] = useState<number[]>([])
    const [submitted, setSubmitted] = useState(false)
    const [progress, setProgress] = useState<Progress>(loadProgress)

    useEffect(() => {
        try {
            localStorage.setItem(progressKey, JSON.stringify(progress))
        } catch {
            // The quiz remains usable if browser storage is unavailable or full.
        }
    }, [progress])

    const units = useMemo(() => [...new Set(questions.map((question) => question.unitTitle))], [])
    const unitQuestions = activeUnit
        ? questions.filter((question) => question.unitTitle === activeUnit)
        : []
    const question = unitQuestions[currentIndex]
    const completedCount = questions.filter((item) => progress[item.id]).length

    const beginUnit = (unitTitle: string) => {
        setActiveUnit(unitTitle)
        setCurrentIndex(0)
        setSelected([])
        setSubmitted(false)
    }

    const returnToUnits = () => {
        setActiveUnit(null)
        setCurrentIndex(0)
        setSelected([])
        setSubmitted(false)
    }

    if (questions.length === 0) {
        return (
            <main className="page-shell">
                <section className="hero" aria-labelledby="page-title">
                    <p className="eyebrow">{certificationTitle}</p>
                    <h1 id="page-title">Practice as you learn.</h1>
                    <p className="lede">Your question bank is ready. Complete a Microsoft Learn unit, then bring its page here to add focused practice questions.</p>
                </section>
                <section className="empty-card" aria-labelledby="ready-title">
                    <span className="status-icon" aria-hidden="true">✦</span>
                    <div>
                        <h2 id="ready-title">Ready for your first unit</h2>
                        <p>Questions will use multiple selections where appropriate, explain every answer, and link back to the exact Learn page.</p>
                    </div>
                </section>
            </main>
        )
    }

    if (!activeUnit) {
        return (
            <main className="page-shell">
                <header className="quiz-header">
                    <div>
                        <p className="eyebrow">{certificationTitle}</p>
                        <h1>Choose a unit</h1>
                    </div>
                    <p className="progress" aria-label={`${completedCount} questions answered correctly`}>{completedCount} mastered</p>
                </header>
                <section className="unit-picker" aria-label="Completed units available for practice">
                    {units.map((unitTitle) => {
                        const questionsInUnit = questions.filter((item) => item.unitTitle === unitTitle)
                        const masteredInUnit = questionsInUnit.filter((item) => progress[item.id]).length
                        return (
                            <button className="unit-button" type="button" key={unitTitle} onClick={() => beginUnit(unitTitle)}>
                                <span>{unitTitle}</span>
                                <small>{masteredInUnit}/{questionsInUnit.length} mastered · Practice now →</small>
                            </button>
                        )
                    })}
                </section>
            </main>
        )
    }

    const isCorrect = selected.length === question.correctChoiceIndexes.length
        && selected.every((choice) => question.correctChoiceIndexes.includes(choice))
    const isLastQuestion = currentIndex === unitQuestions.length - 1
    const isMultiSelect = question.format === 'multiple-select'
    const formatInstruction = question.format === 'multiple-select'
        ? 'Select all that apply'
        : question.format === 'true-false'
            ? 'Choose true or false'
            : 'Select one answer'

    const toggleChoice = (choiceIndex: number) => {
        if (submitted) return
        if (!isMultiSelect) {
            setSelected([choiceIndex])
            return
        }
        setSelected((current) => current.includes(choiceIndex)
            ? current.filter((choice) => choice !== choiceIndex)
            : [...current, choiceIndex])
    }

    const submit = () => {
        if (selected.length === 0) return
        setSubmitted(true)
        setProgress((current) => ({ ...current, [question.id]: isCorrect }))
    }

    const nextQuestion = () => {
        if (isLastQuestion) {
            returnToUnits()
            return
        }
        setCurrentIndex((current) => current + 1)
        setSelected([])
        setSubmitted(false)
    }

    return (
        <main className="page-shell">
            <header className="quiz-header">
                <div>
                    <p className="eyebrow">{certificationTitle}</p>
                    <h1>Learning check</h1>
                </div>
                <button className="text-button" type="button" onClick={returnToUnits}>All units</button>
            </header>
            <section className="question-card" aria-labelledby="question-title">
                <p className="unit-label">From: {question.unitTitle}</p>
                <p className="question-count" id="question-instruction">Question {currentIndex + 1} of {unitQuestions.length} · {formatInstruction}</p>
                <h2 id="question-title">{question.prompt}</h2>
                <fieldset aria-labelledby="question-title" aria-describedby="question-instruction">
                    <legend className="sr-only">Answer choices</legend>
                    <div className="choices">
                        {question.choices.map((choice, index) => (
                            <label className={`choice ${selected.includes(index) ? 'selected' : ''}`} key={choice}>
                                <input
                                    type={isMultiSelect ? 'checkbox' : 'radio'}
                                    name={`question-${question.id}`}
                                    checked={selected.includes(index)}
                                    onChange={() => toggleChoice(index)}
                                    disabled={submitted}
                                />
                                <span>{choice}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                {!submitted ? (
                    <button className="primary-button" type="button" onClick={submit} disabled={selected.length === 0}>Check answer</button>
                ) : (
                    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`} role="status">
                        <p className="feedback-title">{isCorrect ? 'Correct — nice work.' : 'Not quite — review this point.'}</p>
                        <p>{question.explanation}</p>
                        <a href={question.sourceUrl} target="_blank" rel="noreferrer">Review this unit on Microsoft Learn ↗</a>
                        <button className="secondary-button" type="button" onClick={nextQuestion}>{isLastQuestion ? 'Choose another unit' : 'Next question'}</button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default App
