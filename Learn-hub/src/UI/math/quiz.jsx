import React, { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    id: 1,
    question: "Solve for x: 2x + 5 = 13",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    answer: "x = 4",
  },
  {
    id: 2,
    question: "Solve: 3x = 12",
    options: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer: "x = 4",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const allAnswered = questions.length === Object.keys(answers).length;

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const score = questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.answer ? 1 : 0);
  }, 0);

  return (
    <div className="quiz-container">
      <h1>Algebra Practice Test</h1>
      <p className="subtitle">
        Test your knowledge with {questions.length} multiple-choice questions.
      </p>

      <div className="instructions">
        ✏️ Select one answer for each question. You must answer all questions before submitting.
      </div>

      {questions.map((q, index) => (
        <div key={q.id} className="question-card">
          <div className="question-header">
            <span className="question-number">{index + 1}</span>
            <h3>{q.question}</h3>
          </div>

          <div className="options">
            {q.options.map((opt, i) => (
              <label key={i} className={`option ${answers[q.id] === opt ? "selected" : ""}`}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={() => handleSelect(q.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        className="submit-btn"
        disabled={!allAnswered}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {submitted && (
        <div className="result">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
        </div>
      )}
    </div>
  );
}