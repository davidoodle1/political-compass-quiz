import { useState, useCallback } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import questions from './data/questions';
import { calculateScores, normalizeScores } from './utils/scoring';

function App() {
  const [screen, setScreen] = useState('welcome'); // welcome | quiz | results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [scores, setScores] = useState(null);

  const startQuiz = useCallback(() => {
    setScreen('quiz');
    setCurrentIndex(0);
  }, []);

  const handleAnswer = useCallback(
    (value) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[currentIndex] = value;
        return next;
      });
    },
    [currentIndex],
  );

  const goNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // Compute results
      const { raw, maxPossible } = calculateScores(answers, questions);
      const normalized = normalizeScores(raw, maxPossible);
      setScores(normalized);
      setScreen('results');
    }
  }, [currentIndex, answers]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  const retake = useCallback(() => {
    setAnswers(Array(questions.length).fill(null));
    setScores(null);
    setCurrentIndex(0);
    setScreen('welcome');
  }, []);

  return (
    <div className="app">
      {screen === 'welcome' && <Welcome onStart={startQuiz} />}

      {screen === 'quiz' && (
        <>
          <ProgressBar current={currentIndex} total={questions.length} />
          <Question
            question={questions[currentIndex]}
            answer={answers[currentIndex]}
            onAnswer={handleAnswer}
            onPrev={goPrev}
            onNext={goNext}
            isFirst={currentIndex === 0}
            isLast={currentIndex === questions.length - 1}
          />
        </>
      )}

      {screen === 'results' && (
        <Results scores={scores} onRetake={retake} />
      )}
    </div>
  );
}

export default App;
