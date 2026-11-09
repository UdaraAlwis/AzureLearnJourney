import { ArrowDown, ArrowUp, GripVertical, X } from 'lucide-react'
import type { DragEvent } from 'react'
import type { QuizQuestion } from './questions'

type Props = {
    question: QuizQuestion
    answer: number[]
    onChange: (answer: number[]) => void
    disabled: boolean
}

export function AnswerInput({ question, answer, onChange, disabled }: Props) {
    function dragStart(event: DragEvent, choice: number) {
        event.dataTransfer.setData('text/plain', JSON.stringify({ questionId: question.id, choice }))
        event.dataTransfer.effectAllowed = 'move'
    }

    function readDrop(event: DragEvent): number | null {
        event.preventDefault()
        if (disabled) return null
        try {
            const data = JSON.parse(event.dataTransfer.getData('text/plain'))
            return data.questionId === question.id && Number.isInteger(data.choice)
                && data.choice >= 0 && data.choice < question.choices.length ? data.choice : null
        } catch {
            return null
        }
    }

    function placeStep(choice: number, position: number) {
        const remaining = answer.filter((item) => item !== choice)
        remaining.splice(position, 0, choice)
        onChange(remaining)
    }

    function assign(row: number, choice: number) {
        const updated = question.rows!.map((_, index) => answer[index] ?? -1)
        updated[row] = choice
        onChange(updated)
    }

    if (question.format === 'ordering') {
        return (
            <div className="ordered-answer">
                <div className="answer-pool" aria-label="Available steps">
                    {question.choices.map((choice, index) => !answer.includes(index) && (
                        <button type="button" className="drag-option" key={index} disabled={disabled}
                            draggable={!disabled} onDragStart={(event) => dragStart(event, index)}
                            onClick={() => placeStep(index, answer.length)}>
                            <GripVertical size={18} aria-hidden="true" /><span>{choice}</span>
                        </button>
                    ))}
                </div>
                <ol className="ordered-steps" aria-label="Step order">
                    {answer.map((choice, position) => (
                        <li className="ordered-step" key={choice} draggable={!disabled}
                            onDragStart={(event) => dragStart(event, choice)} onDragOver={(event) => event.preventDefault()}
                            onDrop={(event) => { const dropped = readDrop(event); if (dropped !== null) placeStep(dropped, position) }}>
                            <span className="step-number">{position + 1}.</span><span className="step-text">{question.choices[choice]}</span>
                            <div className="step-tools">
                                <button type="button" title="Move up" aria-label={`Move step ${position + 1} up`} disabled={disabled || position === 0} onClick={() => placeStep(choice, position - 1)}><ArrowUp size={18} /></button>
                                <button type="button" title="Move down" aria-label={`Move step ${position + 1} down`} disabled={disabled || position === answer.length - 1} onClick={() => placeStep(choice, position + 1)}><ArrowDown size={18} /></button>
                                <button type="button" title="Remove step" aria-label={`Remove step ${position + 1}`} disabled={disabled} onClick={() => onChange(answer.filter((item) => item !== choice))}><X size={18} /></button>
                            </div>
                        </li>
                    ))}
                </ol>
                {!disabled && answer.length < question.choices.length && <div className="drop-target" onDragOver={(event) => event.preventDefault()} onDrop={(event) => { const choice = readDrop(event); if (choice !== null) placeStep(choice, answer.length) }}>Next step</div>}
                <span className="sr-only" role="status">{answer.length} of {question.choices.length} steps placed. {answer.map((choice, index) => `${index + 1}: ${question.choices[choice]}`).join('. ')}</span>
            </div>
        )
    }

    if (question.rows) {
        return (
            <div className="mapped-answer">
                {question.format === 'matching' && <div className="answer-pool" aria-label="Matching options">
                    {question.choices.map((choice, index) => <span className="drag-option" key={index} draggable={!disabled} onDragStart={(event) => dragStart(event, index)}><GripVertical size={18} aria-hidden="true" />{choice}</span>)}
                </div>}
                {question.rows.map((row, rowIndex) => (
                    <div className="answer-row" key={rowIndex} onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) => { if (question.format !== 'matching') return; const choice = readDrop(event); if (choice !== null) assign(rowIndex, choice) }}>
                        {question.format === 'yes-no' ? <fieldset className="statement-row">
                            <legend>{row}</legend>
                            <div className="statement-options">{question.choices.map((choice, index) => <label key={index}><input type="radio" name={`${question.id}-${rowIndex}`} checked={answer[rowIndex] === index} onChange={() => assign(rowIndex, index)} />{choice}</label>)}</div>
                        </fieldset> : <label className="mapped-label"><span>{row}</span>
                            <select value={answer[rowIndex] ?? -1} onChange={(event) => assign(rowIndex, Number(event.target.value))}>
                                <option value={-1}>Select an option</option>
                                {question.choices.map((choice, index) => <option value={index} key={index}>{choice}</option>)}
                            </select>
                        </label>}
                    </div>
                ))}
                <span className="sr-only" role="status">{answer.filter((choice) => choice >= 0).length} of {question.rows.length} answered.</span>
            </div>
        )
    }

    return (
        <div className={`choices ${question.format === 'hot-area' ? 'hot-area' : ''}`}>
            {question.choices.map((choice, index) => (
                <label className={`choice ${answer.includes(index) ? 'selected' : ''}`} key={`${index}-${choice}`}>
                    <input type={question.format === 'multiple-select' ? 'checkbox' : 'radio'} name={`question-${question.id}`} checked={answer.includes(index)}
                        onChange={() => onChange(question.format === 'multiple-select'
                            ? answer.includes(index) ? answer.filter((item) => item !== index) : [...answer, index]
                            : [index])} />
                    {question.format === 'hot-area' ? <code>{choice}</code> : <span>{choice}</span>}
                </label>
            ))}
        </div>
    )
}