const LIKERT_OPTIONS = [
  { value: 0, label: 'Strongly Disagree' },
  { value: 1, label: 'Disagree' },
  { value: 2, label: 'Neutral' },
  { value: 3, label: 'Agree' },
  { value: 4, label: 'Strongly Agree' },
];

export default function Question({
  question,
  answer,
  onAnswer,
  onPrev,
  onNext,
  isFirst,
  isLast,
}) {
  return (
    <div className="question">
      <p className="question-text">&ldquo;{question.text}&rdquo;</p>

      <div className="likert-scale">
        {LIKERT_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`likert-btn ${answer === opt.value ? 'selected' : ''}`}
            onClick={() => onAnswer(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="question-nav">
        <button
          className="btn-secondary"
          onClick={onPrev}
          disabled={isFirst}
        >
          &larr; Previous
        </button>
        <button
          className="btn-primary"
          onClick={onNext}
          disabled={answer === undefined || answer === null}
        >
          {isLast ? 'See Results' : 'Next \u2192'}
        </button>
      </div>
    </div>
  );
}
