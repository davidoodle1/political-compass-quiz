import { AXES } from '../data/questions';

// Likert values: 0=Strongly Disagree, 1=Disagree, 2=Neutral, 3=Agree, 4=Strongly Agree
const LIKERT_MULTIPLIERS = [-2, -1, 0, 1, 2];

export function calculateScores(answers, questions) {
  const raw = {};
  const maxPossible = {};

  for (const axis of Object.keys(AXES)) {
    raw[axis] = 0;
    maxPossible[axis] = 0;
  }

  questions.forEach((question, index) => {
    const answer = answers[index];
    if (answer === undefined || answer === null) return;

    const multiplier = LIKERT_MULTIPLIERS[answer];

    for (const [axis, weight] of Object.entries(question.weights)) {
      raw[axis] += weight * multiplier;
      maxPossible[axis] += Math.abs(weight) * 2; // max possible contribution
    }
  });

  return { raw, maxPossible };
}

export function normalizeScores(raw, maxPossible) {
  const normalized = {};

  for (const axis of Object.keys(AXES)) {
    const max = maxPossible[axis] || 1;
    normalized[axis] = Math.round((raw[axis] / max) * 100);
    normalized[axis] = Math.max(-100, Math.min(100, normalized[axis]));
  }

  return normalized;
}

export function getLabel(axis, score) {
  const info = AXES[axis];
  const absScore = Math.abs(score);

  let intensity;
  if (absScore <= 15) intensity = 'Centrist';
  else if (absScore <= 40) intensity = 'Leaning';
  else if (absScore <= 70) intensity = 'Moderately';
  else intensity = 'Strongly';

  if (intensity === 'Centrist') return 'Centrist';

  const direction = score < 0 ? info.left : info.right;
  return `${intensity} ${direction}`;
}
