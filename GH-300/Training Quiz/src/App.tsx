import { useEffect, useState } from 'react'
import { questions } from './questions'
import './App.css'

type Progress = Record<string, boolean>

const progressKey = 'gh-300-github-copilot-quiz-progress-v1'

function loadProgress(): Progress {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(progressKey) ?? '{}')
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {}
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
      // Browser storage might be disabled; practice still works for this session.
    }
  }, [progress])

  const units = [...new Set(questions.map((item) => item.unitUrl))]
  const unitQuestions = questions.filter((item) => item.unitUrl === activeUnit)
  const question = unitQuestions[currentIndex]
  const masteredCount = questions.filter((item) => progress[item.id]).length

  function returnToPicker() {
    setActiveUnit(null)
    setCurrentIndex(0)
    setSelected([])
    setSubmitted(false)
  }

  function beginUnit(unitUrl: string) {
    setActiveUnit(unitUrl)
    setCurrentIndex(0)
    setSelected([])
    setSubmitted(false)
  }

  function nextQuestion() {
    if (currentIndex === unitQuestions.length - 1) {
      returnToPicker()
    } else {
      setCurrentIndex((index) => index + 1)
      setSelected([])
      setSubmitted(false)
    }
  }

  function toggleChoice(index: number) {
    if (submitted || !question) return
    if (question.format === 'multiple-select') {
      setSelected((current) => current.includes(index)
        ? current.filter((choice) => choice !== index)
        : [...current, index])
    } else {
      setSelected([index])
    }
  }

  function submitAnswer() {
    if (!question || submitted || selected.length === 0) return
    const correct = selected.length === question.correctChoiceIndexes.length
      && selected.every((index) => question.correctChoiceIndexes.includes(index))
    setSubmitted(true)
    setProgress((current) => ({ ...current, [question.id]: correct }))
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand"><span className="brand-mark" aria-hidden="true">✳</span> GH-300 <span className="brand-divider">/</span> STUDY STUDIO</div>
        <span className="header-tag">GITHUB COPILOT CERTIFICATION</span>
      </header>

      {questions.length === 0 ? (
        <>
          <section className="hero" aria-labelledby="page-title">
            <span className="kicker">YOUR STUDY SPACE IS READY <span aria-hidden="true">↗</span></span>
            <h1 id="page-title">Learn a unit.<br /><em>Make it stick.</em></h1>
            <p className="lede">Your practice bank grows with you. Complete a Microsoft Learn unit and share its exact link to unlock focused questions here.</p>
            <div className="hero-meta"><span className="meta-dot" /> 0 COMPLETED UNITS <span className="meta-separator">·</span> 0 QUESTIONS</div>
            <div className="hero-decoration" aria-hidden="true"><span>01</span><span>↗</span></div>
          </section>
          <section className="empty-panel" aria-labelledby="empty-title">
            <div className="empty-number" aria-hidden="true">01 / START HERE</div>
            <div>
              <h2 id="empty-title">The first question starts with a unit.</h2>
              <p>Read a unit in either GitHub Copilot Fundamentals learning path, then send its URL. Notes and original, source-linked practice questions will be added for that unit only.</p>
            </div>
            <span className="empty-arrow" aria-hidden="true">↗</span>
          </section>
        </>
      ) : !activeUnit || !question ? (
        <>
          <section className="hero compact" aria-labelledby="picker-title">
            <span className="kicker">PRACTICE AT YOUR PACE</span>
            <h1 id="picker-title">Choose a <em>unit.</em></h1>
            <p className="lede">Pick any completed unit. Your mastery stays in this browser, so you can practice what matters next.</p>
            <div className="hero-meta">{units.length} UNITS <span className="meta-separator">·</span> {masteredCount} / {questions.length} MASTERED</div>
          </section>
          <section className="unit-list" aria-label="Units available for practice">
            {units.map((unitUrl, index) => {
              const unitQuestions = questions.filter((item) => item.unitUrl === unitUrl)
              const mastered = unitQuestions.filter((item) => progress[item.id]).length
              return (
                <button key={unitUrl} className="unit-card" type="button" onClick={() => beginUnit(unitUrl)}>
                  <span className="unit-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="unit-info"><strong>{unitQuestions[0].unitTitle}</strong><small>{unitQuestions.length} questions <span aria-hidden="true">·</span> {mastered}/{unitQuestions.length} mastered</small></span>
                  <span className="unit-arrow" aria-hidden="true">↗</span>
                </button>
              )
            })}
          </section>
        </>
      ) : (
        <>
          <div className="quiz-nav"><button className="back-button" type="button" onClick={returnToPicker}>← All units</button><span>{currentIndex + 1} / {unitQuestions.length}</span></div>
          <section className="question-panel" aria-labelledby="question-title">
            <p className="kicker">{question.unitTitle} <span aria-hidden="true">/</span> QUESTION {String(currentIndex + 1).padStart(2, '0')}</p>
            <h1 id="question-title">{question.prompt}</h1>
            {question.artifact && <pre className="artifact"><code>{question.artifact}</code></pre>}
            <fieldset aria-labelledby="question-title" aria-describedby="answer-instruction" disabled={submitted}>
              <legend className="sr-only">Answer choices</legend>
              <p id="answer-instruction" className="answer-instruction">{question.format === 'multiple-select' ? 'Select all that apply' : question.format === 'true-false' ? 'Choose true or false' : 'Select one answer'}</p>
              <div className="choices">
                {question.choices.map((choice, index) => (
                  <label className={`choice ${selected.includes(index) ? 'selected' : ''}`} key={`${index}-${choice}`}>
                    <input type={question.format === 'multiple-select' ? 'checkbox' : 'radio'} name={`question-${question.id}`} checked={selected.includes(index)} onChange={() => toggleChoice(index)} />
                    <span>{choice}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            {!submitted ? (
              <button className="action-button" type="button" disabled={selected.length === 0} onClick={submitAnswer}>Check answer <span aria-hidden="true">→</span></button>
            ) : (
              <div className="feedback" role="status" aria-live="polite">
                <h2>{selected.length === question.correctChoiceIndexes.length && selected.every((index) => question.correctChoiceIndexes.includes(index)) ? 'Correct answer.' : 'Not quite — take another look.'}</h2>
                <p><strong>Correct: {question.correctChoiceIndexes.map((index) => question.choices[index]).join('; ')}</strong></p>
                <p>{question.explanation}</p>
                <a href={question.unitUrl} target="_blank" rel="noopener noreferrer">Review the exact Microsoft Learn unit ↗</a>
                <button className="action-button" type="button" onClick={nextQuestion}>{currentIndex === unitQuestions.length - 1 ? 'Back to units' : 'Next question'} <span aria-hidden="true">→</span></button>
              </div>
            )}
          </section>
        </>
      )}
      <footer className="site-footer"><span>GH-300 / PRACTICE QUIZ</span><span>ONE UNIT AT A TIME.</span></footer>
    </main>
  )
}

export default App
