import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { AXES } from '../data/questions';
import { getLabel } from '../utils/scoring';

export default function Results({ scores, onRetake }) {
  const chartData = Object.entries(AXES).map(([key, info]) => ({
    axis: info.name,
    // Radar chart needs 0-100 range, shift from -100..+100
    value: Math.round((scores[key] + 100) / 2),
  }));

  return (
    <div className="results">
      <h2>Your Political Profile</h2>

      <div className="radar-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#ddd" />
            <PolarAngleAxis dataKey="axis" tick={{ fontSize: 13 }} />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.25}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="axis-breakdown">
        <h3>Detailed Breakdown</h3>
        {Object.entries(AXES).map(([key, info]) => {
          const score = scores[key];
          const label = getLabel(key, score);
          const fillPercent = ((score + 100) / 200) * 100;

          return (
            <div key={key} className="axis-row">
              <div className="axis-header">
                <span className="axis-name">{info.name}</span>
                <span className="axis-label">{label}</span>
              </div>
              <div className="axis-bar-container">
                <span className="axis-end left">{info.left}</span>
                <div className="axis-bar">
                  <div className="axis-bar-center" />
                  <div
                    className="axis-bar-fill"
                    style={{ left: `${Math.min(fillPercent, 50)}%`, width: `${Math.abs(fillPercent - 50)}%` }}
                  />
                  <div
                    className="axis-bar-marker"
                    style={{ left: `${fillPercent}%` }}
                  />
                </div>
                <span className="axis-end right">{info.right}</span>
              </div>
              <div className="axis-score">Score: {score > 0 ? '+' : ''}{score}</div>
            </div>
          );
        })}
      </div>

      <button className="btn-primary btn-large" onClick={onRetake}>
        Retake Quiz
      </button>
    </div>
  );
}
