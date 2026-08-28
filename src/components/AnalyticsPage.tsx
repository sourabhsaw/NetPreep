import React from 'react';
import { useTest } from '../context/TestContext';
import {
  BarChart3,
  TrendingUp,
  Target,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  PieChart,
  Award,
  Zap,
  Activity
} from 'lucide-react';

export const AnalyticsPage: React.FC = () => {
  const { testResult, setCurrentView, setSolutionsFilter } = useTest();

  // Default fallback data if no test taken yet
  const topicData = testResult?.topicBreakdown || {
    'Micro Economics': { total: 15, correct: 13, wrong: 2, unattempted: 0, accuracy: 87 },
    'Macro Economics': { total: 15, correct: 11, wrong: 3, unattempted: 1, accuracy: 73 },
    'Statistics': { total: 10, correct: 6, wrong: 4, unattempted: 0, accuracy: 60 },
    'Econometrics': { total: 10, correct: 5, wrong: 4, unattempted: 1, accuracy: 50 },
    'International Economics': { total: 10, correct: 8, wrong: 2, unattempted: 0, accuracy: 80 },
    'Indian Economy': { total: 10, correct: 9, wrong: 1, unattempted: 0, accuracy: 90 },
    'Public Economics': { total: 8, correct: 6, wrong: 2, unattempted: 0, accuracy: 75 },
    'Money & Banking': { total: 8, correct: 6, wrong: 1, unattempted: 1, accuracy: 86 },
    'Development Economics': { total: 6, correct: 5, wrong: 0, unattempted: 1, accuracy: 100 },
    'Growth Economics': { total: 8, correct: 2, wrong: 0, unattempted: 6, accuracy: 100 }
  };

  const strongAreas = testResult?.strongAreas || [
    'Indian Economy — 90%',
    'Micro Economics — 87%',
    'International Economics — 80%'
  ];

  const weakAreas = testResult?.weakAreas || [
    'Econometrics — 50%',
    'Statistics — 60%'
  ];

  const recommendation = testResult?.recommendation ||
    'Practice more questions from Econometrics and Statistics. Focus on regression diagnostics, hypothesis testing, and OLS assumptions.';

  return (
    <div id="analytics-dashboard-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
            <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Diagnostic Intelligence</span>
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Performance & Subject Analytics
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed">
            Gain full visibility into your topic strengths, accuracy distribution, and personalized revision priorities for UGC NET Economics.
          </p>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs text-slate-500 font-medium">Overall Accuracy</p>
          <p className="font-['Outfit'] font-extrabold text-3xl text-indigo-600">
            {testResult?.accuracy || 78}%
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold">+6% above state average</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs text-slate-500 font-medium">Projected JRF Percentile</p>
          <p className="font-['Outfit'] font-extrabold text-3xl text-slate-900">
            {testResult?.percentile || 84.62}%
          </p>
          <p className="text-[11px] text-indigo-500 font-semibold">Tier 1 National Band</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs text-slate-500 font-medium">Speed per Question</p>
          <p className="font-['Outfit'] font-extrabold text-3xl text-slate-900">
            1.37 <span className="text-sm font-normal text-slate-500">min</span>
          </p>
          <p className="text-[11px] text-slate-400">Target: 1.8 min / Q</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <p className="text-xs text-slate-500 font-medium">Topics Mastered</p>
          <p className="font-['Outfit'] font-extrabold text-3xl text-emerald-600">
            {strongAreas.length} <span className="text-sm font-normal text-slate-500">/ 15</span>
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold">&gt; 75% accuracy mark</p>
        </div>
      </div>

      {/* Strong vs Weak Areas Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strong Areas */}
        <div className="bg-emerald-50/70 rounded-3xl border border-emerald-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-emerald-950">
                🟢 Strong Areas (High Accuracy)
              </h3>
              <p className="text-xs text-emerald-700">Topics you have mastered thoroughly</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {strongAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-emerald-200 text-sm font-bold text-emerald-900 shadow-2xs"
              >
                <span>{area.split(' — ')[0]}</span>
                <span className="text-xs px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono">
                  {area.split(' — ')[1] || '90%'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas */}
        <div className="bg-rose-50/70 rounded-3xl border border-rose-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-rose-950">
                🔴 Weak Areas (Focus Required)
              </h3>
              <p className="text-xs text-rose-700">Topics needing immediate attention</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {weakAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-rose-200 text-sm font-bold text-rose-900 shadow-2xs"
              >
                <span>{area.split(' — ')[0]}</span>
                <span className="text-xs px-3 py-1 rounded-lg bg-rose-100 text-rose-800 font-mono">
                  {area.split(' — ')[1] || '50%'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Recommendation Card */}
      <div className="bg-gradient-to-r from-amber-50 via-amber-100/40 to-white p-6 rounded-2xl border border-amber-300 shadow-xs flex items-start gap-4">
        <div className="p-3 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5 shadow-sm">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <h4 className="font-['Outfit'] font-bold text-base text-amber-950">
            Actionable Recommendation for UGC NET Exam
          </h4>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            {recommendation}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSolutionsFilter('wrong');
                setCurrentView('solutions');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900"
            >
              <span>Practice weak topic questions now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Subject Performance Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
              Complete Subject Performance Matrix
            </h3>
            <p className="text-xs text-slate-500">Detailed breakdown across all Economics sub-disciplines</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3.5 px-4">Topic</th>
                <th className="py-3.5 px-4 text-center">Total Questions</th>
                <th className="py-3.5 px-4 text-center">Correct</th>
                <th className="py-3.5 px-4 text-center">Accuracy</th>
                <th className="py-3.5 px-4">Performance Bar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(topicData).map(([topic, stats]) => {
                const acc = stats.accuracy;
                const barColor =
                  acc >= 75
                    ? 'bg-emerald-500'
                    : acc >= 60
                    ? 'bg-blue-500'
                    : 'bg-rose-500';

                return (
                  <tr key={topic} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {topic}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono text-slate-600">
                      {stats.total}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-600">
                      {stats.correct}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900">
                      {acc}%
                    </td>
                    <td className="py-3.5 px-4 min-w-[160px]">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${barColor}`}
                            style={{ width: `${acc}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 font-semibold w-8 text-right">
                          {acc}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
