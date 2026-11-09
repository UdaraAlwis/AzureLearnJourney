import { useEffect, useState } from 'react'
import { questions, type QuestionFormat } from './questions'
import { AnswerInput } from './AnswerInput'
import { answerInstructions, formatLabels, isAnswerComplete, isAnswerCorrect } from './quizAnswers'
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
  const [sessionQuestions, setSessionQuestions] = useState<typeof questions | null>(null)
  const [mixedPractice, setMixedPractice] = useState(false)
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
  const unitQuestions = sessionQuestions ?? []
  const question = unitQuestions[currentIndex]
  const masteredCount = questions.filter((item) => progress[item.id]).length

  function returnToPicker() {
    setSessionQuestions(null)
    setMixedPractice(false)
    setCurrentIndex(0)
    setSelected([])
    setSubmitted(false)
  }

  function beginUnit(unitUrl: string) {
    setSessionQuestions(questions.filter((item) => item.unitUrl === unitUrl))
    setMixedPractice(false)
    setCurrentIndex(0)
    setSelected([])
    setSubmitted(false)
  }

  function beginMixedPractice() {
    const shuffled = [...questions]
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1))
      const currentQuestion = shuffled[index]
      shuffled[index] = shuffled[randomIndex]
      shuffled[randomIndex] = currentQuestion
    }
    setSessionQuestions(shuffled)
    setMixedPractice(true)
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

  function beginFormat(format: QuestionFormat) {
    setSessionQuestions(questions.filter((item) => item.format === format))
    setMixedPractice(false)
    setCurrentIndex(0)
    setSelected([])
    setSubmitted(false)
  }

  function submitAnswer() {
    if (!question || submitted || !isAnswerComplete(question, selected)) return
    const correct = isAnswerCorrect(question, selected)
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
      ) : !sessionQuestions || !question ? (
        <>
          <section className="hero compact" aria-labelledby="picker-title">
            <span className="kicker">PRACTICE AT YOUR PACE</span>
            <h1 id="picker-title">Choose your <em>practice.</em></h1>
            <p className="lede">Pick any completed unit. Your mastery stays in this browser, so you can practice what matters next.</p>
            <div className="hero-meta">{units.length} UNITS <span className="meta-separator">·</span> {masteredCount} / {questions.length} MASTERED</div>
          </section>
          <section className="unit-list" aria-labelledby="mixed-practice-title">
            <h2 id="mixed-practice-title">Mixed practice</h2>
            <button className="unit-card" type="button" onClick={beginMixedPractice}>
              <span className="unit-info"><strong>All questions</strong><small>{questions.length} questions across {units.length} units · Random order</small></span>
              <span className="unit-arrow" aria-hidden="true">↗</span>
            </button>
          </section>
          <section aria-labelledby="format-practice-title">
            <h2 id="format-practice-title">Practice by question type</h2>
            <div className="format-list">
              {(Object.keys(formatLabels) as QuestionFormat[]).map((format) => {
                const count = questions.filter((item) => item.format === format).length
                return count > 0 && <button className="unit-card" type="button" key={format} onClick={() => beginFormat(format)}>
                  <span className="unit-info"><strong>{formatLabels[format]}</strong><small>{count} questions</small></span>
                  <span className="unit-arrow" aria-hidden="true">↗</span>
                </button>
              })}
            </div>
          </section>
          <section className="unit-list" aria-label="Units available for practice">
            <h2>Unit practice</h2>
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
          <div className="quiz-nav"><button className="back-button" type="button" onClick={returnToPicker}>← All units</button><span>{mixedPractice ? 'Mixed practice · ' : ''}{currentIndex + 1} / {unitQuestions.length}</span></div>
          <section className="question-panel" aria-labelledby="question-title">
            <p className="kicker">{question.unitTitle} <span aria-hidden="true">/</span> QUESTION {String(currentIndex + 1).padStart(2, '0')}</p>
            <h1 id="question-title">{question.prompt}</h1>
            {question.artifact && <pre className="artifact"><code>{question.artifact}</code></pre>}
            <fieldset aria-labelledby="question-title" aria-describedby="answer-instruction" disabled={submitted}>
              <legend className="sr-only">Answer choices</legend>
              <p id="answer-instruction" className="answer-instruction">{answerInstructions[question.format]}</p>
              <AnswerInput key={question.id} question={question} answer={selected} onChange={setSelected} disabled={submitted} />
            </fieldset>
            {!submitted ? (
              <button className="action-button" type="button" disabled={!isAnswerComplete(question, selected)} onClick={submitAnswer}>Check answer <span aria-hidden="true">→</span></button>
            ) : (
              <div className="feedback" role="status" aria-live="polite">
                <h2>{isAnswerCorrect(question, selected) ? 'Correct answer.' : 'Not quite — take another look.'}</h2>
                {question.rows ? <ul>{question.rows.map((row, index) => <li key={index}><strong>{row}: </strong>{question.choices[question.correctChoiceIndexes[index]]}</li>)
                }</ul> : question.format === 'ordering' ? <ol>{question.correctChoiceIndexes.map((index) => <li key={index}>{question.choices[index]}</li>)}</ol> : <p><strong>Correct: {question.correctChoiceIndexes.map((index) => question.choices[index]).join('; ')}</strong></p>}
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
