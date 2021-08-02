// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-danger */
import React from "react"
// types
// eslint-disable-next-line import/no-cycle
import { AnswerObject } from "../App"

type Props = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
  questionNr: number
  totalQuestions: number
}

// React.FC tells typescript that it is fuctional component, <> is used to specify props
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button
            type="button"
            // eslint-disable-next-line no-unneeded-ternary
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default QuestionCard
