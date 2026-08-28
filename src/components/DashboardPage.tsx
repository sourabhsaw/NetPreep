import React from 'react';
import { useTest } from '../context/TestContext';
import { MOCK_TESTS_CATALOG } from '../data/mockTestsData';
import {
  User,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Bookmark,
  TrendingUp,
  GraduationCap,
  Play,
  RotateCcw,
  Sparkles,
  FileText,
  Trash2
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const {
    studentProfile,
    testResult,
    setCurrentView,
    initiateTestStart,
    bookmarks,
    questions,
    toggleBookmark,
    setSolutionsFilter
  } = useTest();

  const bookmarkedQuestionsList = questions.filter((q) => bookmarks.includes(q.id));

  return (
    <div id="student-dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Student Profile Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-indigo-600 border-2 border-indigo-400 text-white flex items-center justify-center font-['Outfit'] font-black text-3xl shadow-xl">
              {studentProfile.name.charAt(0)}
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
                <span>🎓 UGC NET Aspirant Portal</span>
              </div>
              <h1 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white">
                {studentProfile.name}
              </h1>
              <p className="text-xs text-slate-300 font-mono">
                Roll No: {studentProfile.rollNumber} • Target: {studentProfile.targetExam}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-center md:self-auto">
            <button
              onClick={() => initiateTestStart(MOCK_TESTS_CATALOG[1])}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Prep (Mock 02)</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Key Lifetime Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Tests Attempted</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
            {testResult ? 1 : 0} <span className="text-sm font-normal text-slate-500">/ 20</span>
          </p>
          <p className="text-[11px] text-indigo-600 font-semibold">Mock Test 01 completed</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Latest Score</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-indigo-600">
            {testResult ? testResult.score : 142} <span className="text-sm font-normal text-slate-500">/ 200</span>
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold">71% Score Ratio</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Accuracy Rate</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
            {testResult ? testResult.accuracy : 78}%
          </p>
          <p className="text-[11px] text-slate-400">71 Correct / 90 Attempted</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Saved Bookmarks</span>
            <Bookmark className="w-4 h-4 text-purple-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-purple-600">
            {bookmarks.length}
          </p>
          <p className="text-[11px] text-purple-600 font-semibold">Marked for quick revision</p>
        </div>

      </div>

      {/* 3. Recent Test Attempts & Performance History */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
              Recent Test Attempts
            </h3>
            <p className="text-xs text-slate-500">Review your past test performance and question solutions</p>
          </div>

          <button
            onClick={() => { setCurrentView('tests'); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            <span>Take More Tests</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                  Moderate
                </span>
                <span className="text-xs text-slate-500">
                  Attempted on Today, 137 min
                </span>
              </div>
              <h4 className="font-['Outfit'] font-bold text-base text-slate-900">
                UGC NET Economics — Mock Test 01
              </h4>
              <p className="text-xs text-slate-500">
                100 Questions • 200 Marks • Score: <strong className="text-indigo-600 font-mono">142/200</strong> (Accuracy: 78%)
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setCurrentView('result');
                  window.scrollTo(0, 0);
                }}
                className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors shadow-2xs"
              >
                View Scorecard
              </button>

              <button
                onClick={() => {
                  setSolutionsFilter('wrong');
                  setCurrentView('solutions');
                  window.scrollTo(0, 0);
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                Review Mistakes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bookmarked Questions for Revision */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
                Saved Questions for Revision ({bookmarks.length})
              </h3>
              <p className="text-xs text-slate-500">Quickly review challenging conceptual questions</p>
            </div>
          </div>
        </div>

        {bookmarkedQuestionsList.length === 0 ? (
          <div className="text-center py-10 text-slate-400 space-y-2">
            <Bookmark className="w-8 h-8 mx-auto text-slate-300" />
            <p className="text-sm font-medium">No bookmarked questions yet.</p>
            <p className="text-xs">While reviewing solutions, click "Save for Revision" to pin questions here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookmarkedQuestionsList.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-slate-50/80 transition-all flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-700 font-mono font-bold text-xs flex items-center justify-center">
                      {q.id}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {q.topic}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                    {q.question}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    Concept: <span className="font-mono font-medium text-slate-700">{q.concept}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setCurrentView('solutions');
                      window.scrollTo(0, 0);
                    }}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg text-xs font-bold transition-colors"
                  >
                    View Solution
                  </button>

                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
