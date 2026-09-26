import React from 'react';
import { StrategicScore, UserDecisionRecord } from '../types';
import { Compass, RotateCcw, ArrowRight, ShieldCheck, Award, BookOpen } from 'lucide-react';

interface StrategicProfileProps {
  scores: StrategicScore;
  decisionRecords: UserDecisionRecord[];
  characterPerspectiveName: string;
  onRetakeQuiz: () => void;
  onExploreLessons: () => void;
}

export const StrategicProfile: React.FC<StrategicProfileProps> = ({
  scores,
  decisionRecords,
  characterPerspectiveName,
  onRetakeQuiz,
  onExploreLessons,
}) => {
  // 5 dimensions for radar chart
  const dimensions = [
    { key: 'strategicThinking', label: 'Strategic Thinking', value: scores.strategicThinking },
    { key: 'riskAwareness', label: 'Risk Awareness', value: scores.riskAwareness },
    { key: 'consequenceAwareness', label: 'Consequence Awareness', value: scores.consequenceAwareness },
    { key: 'responsibility', label: 'Responsibility', value: scores.responsibility },
    { key: 'ethicalReflection', label: 'Ethical Reflection', value: scores.ethicalReflection },
  ];

  // Radar chart mathematics
  const size = 320;
  const center = size / 2;
  const radius = size * 0.38;
  const numSides = dimensions.length;

  // Calculate coordinates on regular pentagon
  const getCoordinates = (value: number, index: number, maxRadius = radius) => {
    // Angle in radians (start at top: -PI/2)
    const angle = (Math.PI * 2 * index) / numSides - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points string for data
  const dataPoints = dimensions.map((dim, i) => {
    const { x, y } = getCoordinates(dim.value, i);
    return `${x},${y}`;
  }).join(' ');

  // Concentric background rings (20%, 40%, 60%, 80%, 100%)
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Determine Archetype based on highest score
  const getArchetype = () => {
    if (scores.ethicalReflection >= 85 && scores.strategicThinking >= 85) {
      return {
        title: 'The Dharmic Realist',
        sanskrit: 'धर्मज्ञ नीतिज्ञ (Dharmajña Nītijña)',
        description: 'You recognize that duty and moral reflection are meaningless without the operational courage to act. Like Krishna in the chariot, your decisions seek to balance transcendental ethical conscience with empirical real-world survival.',
      };
    }
    if (scores.ethicalReflection > scores.strategicThinking) {
      return {
        title: 'The Conscientious Guardian',
        sanskrit: 'विवेकशील रक्षक (Vivekaśīla Rakṣaka)',
        description: 'You prioritize moral integrity, personal conscience, and the prevention of direct harm above tactical expediency. Like Arjuna before the dialogue, you instinctively question whether the spoils of victory justify the spiritual cost.',
      };
    }
    return {
      title: 'The Pragmatic Commander',
      sanskrit: 'कर्तव्यनिष्ठ योद्धा (Kartavyaniṣṭha Yoddhā)',
      description: 'You focus on decisive systemic responsibility, deterrence, and mission outcome. You accept that leadership in crisis involves managing difficult moral compromises rather than seeking pristine theoretical perfection.',
    };
  };

  const archetype = getArchetype();

  return (
    <section id="strategic-profile" className="py-24 bg-[#0e1017] border-t border-[#2c2925] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header required by prompt */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-[#c89d56]" />
            <span>Simulation Completed</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            YOUR STRATEGIC PROFILE
          </h2>

          {/* Academic disclaimer required verbatim by user prompt */}
          <p className="text-xs sm:text-sm text-[#c89d56] italic font-['Cormorant_Garamond'] max-w-2xl mx-auto">
            "This profile reflects your choices within this interactive experience. It is not a psychological assessment."
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="rounded-2xl bg-gradient-to-br from-[#161822] to-[#10121a] border border-[#c89d56]/40 p-6 sm:p-10 shadow-2xl mb-12">
          {/* Top Archetype Banner */}
          <div className="text-center pb-8 border-b border-[#2c2925] mb-8">
            <span className="text-[11px] font-['Cormorant_Garamond'] text-[#c89d56] italic text-base block mb-1">
              {archetype.sanskrit}
            </span>
            <h3 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#ede6d6] mb-2">
              {archetype.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#b8ad96] max-w-2xl mx-auto font-['Plus_Jakarta_Sans'] leading-relaxed">
              {archetype.description}
            </p>
            <div className="inline-block mt-3 text-[11px] text-[#96743c]">
              Evaluated under the lens of: <strong className="text-[#ede6d6]">{characterPerspectiveName}</strong>
            </div>
          </div>

          {/* Main Grid: Radar Graphic (Left) & Metrics Breakdown (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT: Radar Graphic */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-4">
              <div className="relative w-[320px] h-[320px] flex items-center justify-center">
                <svg width={size} height={size} className="overflow-visible">
                  {/* Background concentric pentagon rings */}
                  {rings.map((ringScale, idx) => {
                    const ringPoints = dimensions.map((_, i) => {
                      const { x, y } = getCoordinates(100, i, radius * ringScale);
                      return `${x},${y}`;
                    }).join(' ');
                    return (
                      <polygon
                        key={idx}
                        points={ringPoints}
                        fill={idx === rings.length - 1 ? 'rgba(24, 27, 36, 0.4)' : 'none'}
                        stroke="#2c2925"
                        strokeWidth="1"
                        strokeDasharray={idx < rings.length - 1 ? '3 3' : 'none'}
                      />
                    );
                  })}

                  {/* Spokes from center to vertices */}
                  {dimensions.map((_, i) => {
                    const { x, y } = getCoordinates(100, i, radius);
                    return (
                      <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="#2c2925"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Data Polygon with glowing gradient & crimson/gold fill */}
                  <polygon
                    points={dataPoints}
                    fill="rgba(200, 157, 86, 0.22)"
                    stroke="#c89d56"
                    strokeWidth="2.5"
                    className="drop-shadow-[0_0_12px_rgba(200,157,86,0.5)]"
                  />

                  {/* Vertices Dots */}
                  {dimensions.map((dim, i) => {
                    const { x, y } = getCoordinates(dim.value, i);
                    return (
                      <g key={i}>
                        <circle
                          cx={x}
                          cy={y}
                          r="5"
                          fill="#801e1e"
                          stroke="#c89d56"
                          strokeWidth="2"
                        />
                      </g>
                    );
                  })}

                  {/* Labels on vertices */}
                  {dimensions.map((dim, i) => {
                    const { x, y } = getCoordinates(118, i, radius);
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[10px] font-['Cinzel'] font-bold fill-[#ede6d6]"
                      >
                        {dim.label}
                      </text>
                    );
                  })}
                </svg>
              </div>

              <span className="text-[10px] text-[#96743c] uppercase tracking-wider mt-4">
                Five Dimensions of Classical Strategic Reasoning
              </span>
            </div>

            {/* RIGHT: Numeric Progress Bars & Decision History */}
            <div className="lg:col-span-6 space-y-5">
              <h4 className="font-['Cinzel'] text-sm font-bold uppercase tracking-wider text-[#c89d56]">
                Dimension Metrics & Calibrations
              </h4>

              <div className="space-y-3.5">
                {dimensions.map((dim) => (
                  <div key={dim.key} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#ede6d6] font-['Plus_Jakarta_Sans']">
                        {dim.label}
                      </span>
                      <span className="font-['Cinzel'] font-bold text-[#c89d56]">
                        {dim.value} / 100
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1e222e] overflow-hidden p-0.5 border border-[#2c2925]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#801e1e] via-[#c89d56] to-[#e6c382] transition-all duration-700"
                        style={{ width: `${dim.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary of Choices Made */}
              <div className="pt-4 border-t border-[#2c2925] space-y-2">
                <span className="text-[11px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#96743c] block">
                  Decisions Logged in this Run:
                </span>
                <div className="space-y-1.5 text-xs text-[#b8ad96]">
                  {decisionRecords.map((r, idx) => (
                    <div key={idx} className="p-2 rounded bg-[#12141c] border border-[#2c2925] flex items-center justify-between">
                      <span className="font-medium text-[#ede6d6]">{r.scenarioTitle}:</span>
                      <span className="text-[#c89d56] italic truncate max-w-[200px]">"{r.choiceLabel}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-[#2c2925]">
            <button
              onClick={onRetakeQuiz}
              className="w-full sm:w-auto px-5 py-2.5 rounded border border-[#c89d56]/40 text-xs font-semibold uppercase tracking-wider font-['Cinzel'] text-[#ede6d6] hover:bg-[#1a1d26] transition-all flex items-center justify-center gap-2"
              id="retake-quiz-btn"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Simulation</span>
            </button>

            <button
              onClick={onExploreLessons}
              id="proceed-to-lessons-btn"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#801e1e] hover:bg-[#962525] border border-[#c89d56]/50 text-xs font-bold uppercase tracking-widest font-['Cinzel'] text-white transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Explore Strategic Lessons from the Epic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
