import React, { useRef } from 'react';
import { useTest } from '../context/TestContext';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  ArrowRight,
  RotateCcw,
  Download,
  FileText,
  TrendingUp,
  AlertTriangle,
  Award,
  Sparkles,
  Share2,
  Printer
} from 'lucide-react';

export const TestResultPage: React.FC = () => {
  const {
    testResult,
    setCurrentView,
    retryCurrentTest,
    studentProfile,
    setSolutionsFilter
  } = useTest();

  const printRef = useRef<HTMLDivElement>(null);

  if (!testResult) return null;

  const handlePrint = () => {
    window.print();
  };

  const scorePercentage = Math.round((testResult.score / testResult.totalMarks) * 100);
  const isQualifiedJRF = testResult.score >= 160;
  const isQualifiedLectureship = testResult.score >= 136;

  return (
    <div id="test-result-page" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header Celebratory Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-indigo-800/50">
        
        {/* Background glow circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Test Completed Successfully</span>
            </div>

            <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              🎉 Scorecard: {studentProfile.name || 'Candidate'}
            </h1>

            <p className="text-slate-300 text-sm max-w-md">
              {testResult.testTitle} • Roll: <span className="font-mono text-indigo-300">{studentProfile.rollNumber || 'UGC-NET-2026'}</span> • Completed on {testResult.completedAt}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isQualifiedJRF
                  ? 'JRF Qualified Benchmark'
                  : isQualifiedLectureship
                  ? 'Assistant Professor Qualified'
                  : 'Good Practice Attempt'}
              </span>
            </div>
          </div>

          {/* Main Score Hero Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 text-center min-w-[240px] shadow-2xl">
            <p className="text-xs uppercase font-bold tracking-widest text-indigo-200">
              Your Score
            </p>
            <div className="font-['Outfit'] font-black text-5xl sm:text-6xl text-white mt-1">
              {testResult.score} <span className="text-2xl sm:text-3xl text-indigo-300 font-semibold">/ {testResult.totalMarks}</span>
            </div>
            <p className="text-xs text-indigo-200 mt-2 font-medium">
              Accuracy: <span className="font-bold text-white text-sm">{testResult.accuracy}%</span>
            </p>
          </div>

        </div>
      </div>

      {/* 2. Key Summary Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Correct</p>
            <p className="font-['Outfit'] font-bold text-2xl text-slate-900">{testResult.correctCount}</p>
            <p className="text-[11px] text-emerald-600 font-semibold">+{testResult.correctCount * 2} Marks</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Wrong</p>
            <p className="font-['Outfit'] font-bold text-2xl text-slate-900">{testResult.wrongCount}</p>
            <p className="text-[11px] text-rose-500 font-semibold">0 Negative</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 border border-slate-200">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Unattempted</p>
            <p className="font-['Outfit'] font-bold text-2xl text-slate-900">{testResult.unattemptedCount}</p>
            <p className="text-[11px] text-slate-400 font-medium">0 Marks</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Percentile</p>
            <p className="font-['Outfit'] font-bold text-2xl text-indigo-600">{testResult.percentile}%</p>
            <p className="text-[11px] text-indigo-500 font-medium">All India Rank: #27</p>
          </div>
        </div>

      </div>

      {/* 3. Performance Metrics Table & Actions */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
              Performance Breakdown
            </h3>
            <p className="text-xs text-slate-500">Summary of exam metrics and completion time</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            
            <button
              id="result-view-solutions-btn"
              onClick={() => {
                setSolutionsFilter('all');
                setCurrentView('solutions');
                window.scrollTo(0, 0);
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Solutions</span>
            </button>

            <button
              id="result-retry-test-btn"
              onClick={retryCurrentTest}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Test</span>
            </button>

            <button
              id="result-download-btn"
              onClick={handlePrint}
              className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5"
              title="Download or Print Result Scorecard"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Download Result</span>
            </button>

          </div>
        </div>

        {/* Detailed Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 p-2 bg-slate-50/70 text-center">
          <div className="p-4">
            <span className="text-xs text-slate-500">Score</span>
            <p className="font-['Outfit'] font-bold text-lg text-slate-900 mt-0.5">
              {testResult.score} / {testResult.totalMarks}
            </p>
          </div>
          <div className="p-4">
            <span className="text-xs text-slate-500">Accuracy</span>
            <p className="font-['Outfit'] font-bold text-lg text-slate-900 mt-0.5">
              {testResult.accuracy}%
            </p>
          </div>
          <div className="p-4">
            <span className="text-xs text-slate-500">Percentile</span>
            <p className="font-['Outfit'] font-bold text-lg text-indigo-600 mt-0.5">
              {testResult.percentile}%
            </p>
          </div>
          <div className="p-4">
            <span className="text-xs text-slate-500">Time Taken</span>
            <p className="font-['Outfit'] font-bold text-lg text-slate-900 mt-0.5">
              {testResult.timeTakenMinutes} min
            </p>
          </div>
        </div>
      </div>

      {/* 4. Strong & Weak Areas + Recommendation Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strong Areas Card */}
        <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-6 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-['Outfit'] font-bold text-base text-emerald-950">
                🟢 Strong Areas
              </h4>
              <p className="text-xs text-emerald-700">Topics where your accuracy is above 75%</p>
            </div>
          </div>

          <div className="space-y-2">
            {testResult.strongAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-emerald-200/80 text-sm font-semibold text-emerald-900 shadow-2xs"
              >
                <span>{area.split(' — ')[0]}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold font-mono">
                  {area.split(' — ')[1] || '85%'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas Card */}
        <div className="bg-rose-50/60 rounded-2xl border border-rose-200 p-6 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-['Outfit'] font-bold text-base text-rose-950">
                🔴 Weak Areas
              </h4>
              <p className="text-xs text-rose-700">Topics requiring focused revision</p>
            </div>
          </div>

          <div className="space-y-2">
            {testResult.weakAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-rose-200/80 text-sm font-semibold text-rose-900 shadow-2xs"
              >
                <span>{area.split(' — ')[0]}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold font-mono">
                  {area.split(' — ')[1] || '55%'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Recommendation Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 sm:p-6 rounded-2xl border border-amber-300/80 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5 shadow-xs">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-['Outfit'] font-bold text-sm text-amber-950">
            Personalized Academic Recommendation
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {testResult.recommendation}
          </p>
        </div>
      </div>

      {/* 6. Subject Performance Analytics Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-4 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
              Subject Performance
            </h3>
            <p className="text-xs text-slate-500">Topic-wise question breakdown and accuracy rate</p>
          </div>

          <button
            onClick={() => {
              setCurrentView('analytics');
              window.scrollTo(0, 0);
            }}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View Full Visual Analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4 text-center">Questions</th>
                <th className="py-3 px-4 text-center">Correct</th>
                <th className="py-3 px-4 text-center">Accuracy</th>
                <th className="py-3 px-4">Performance Bar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(testResult.topicBreakdown).map(([topic, stats]) => {
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
                    <td className="py-3.5 px-4 min-w-[140px]">
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${barColor}`}
                          style={{ width: `${acc}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. Bottom Navigation CTA bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <button
          onClick={() => {
            setCurrentView('leaderboard');
            window.scrollTo(0, 0);
          }}
          className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>View All-India Leaderboard</span>
        </button>

        <button
          onClick={() => {
            setSolutionsFilter('wrong');
            setCurrentView('solutions');
            window.scrollTo(0, 0);
          }}
          className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
        >
          <span>Review Wrong Answers ({testResult.wrongCount})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
