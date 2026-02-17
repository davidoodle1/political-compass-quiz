export default function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <h1>Political Compass Quiz</h1>
      <p className="welcome-subtitle">
        Discover where you stand on the political spectrum
      </p>
      <div className="welcome-description">
        <p>
          This quiz presents 25 statements covering economics, social issues,
          government authority, foreign policy, environmental policy, and
          immigration. Rate each statement on a scale from Strongly Disagree to
          Strongly Agree.
        </p>
        <p>
          Your answers are scored across <strong>6 dimensions</strong> and
          displayed as a personalized political profile. No data is collected
          &mdash; everything runs in your browser.
        </p>
      </div>
      <button className="btn-primary btn-large" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}
