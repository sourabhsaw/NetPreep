import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import {
  FileText,
  Clock,
  Award,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Play,
  ShieldCheck,
  Check
} from 'lucide-react';

export const InstructionsScreen: React.FC = () => {
  const { selectedTest, confirmAndLaunchTest, setCurrentView, studentProfile } = useTest();
  const [agreementChecked, setAgreementChecked] = useState(true);

  const testTitle = selectedTest?.title || 'UGC NET Economics — Mock Test 01';
  const totalQuestions = selectedTest?.totalQuestions || 100;
  const durationMinutes = selectedTest?.durationMinutes || 120;
  const totalMarks = selectedTest?.totalMarks || 200;

  return (
    <div id="test-instructions-screen" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      
      {/* Top Breadcrumb / Back button */}
      <button
        onClick={() => setCurrentView('tests')}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Test Series</span>
      </button>

      {/* Main Instructions Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                <span>📋 Test Instructions</span>
              </div>
              <h1 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {testTitle}
              </h1>
              <p className="text-xs text-slate-300">
                National Testing Agency (NTA) UGC NET Pattern • Paper II (Economics)
              </p>
            </div>

            {/* Candidate Badge */}
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-right self-start sm:self-auto">
              <p className="text-[11px] text-slate-400">Candidate Name</p>
              <p className="text-sm font-bold text-white">{studentProfile.name}</p>
              <p className="text-[10px] font-mono text-indigo-400">{studentProfile.rollNumber}</p>
            </div>
          </div>
        </div>

        {/* Test Summary Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 bg-slate-50 border-b border-slate-200">
          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Total Questions</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              {totalQuestions}
            </p>
            <p className="text-[11px] text-slate-400">MCQs</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Total Marks</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-indigo-600 mt-0.5">
              {totalMarks}
            </p>
            <p className="text-[11px] text-slate-400">+2 Marks per correct</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Duration</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              {durationMinutes} Min
            </p>
            <p className="text-[11px] text-slate-400">2 Hours Live Clock</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Negative Marking</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-emerald-600 mt-0.5">
              No (-0)
            </p>
            <p className="text-[11px] text-slate-400">As per UGC NET rules</p>
          </div>
        </div>

        {/* Instructions Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>General Instructions</span>
            </h3>
            <p className="text-xs text-slate-500">
              Please read the following instructions carefully before starting the test:
            </p>
          </div>

          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Each question has four options (A, B, C, D).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Select one answer by clicking on the desired option circle.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Unattempted questions receive no marks (0 marks).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Submit the test before the timer ends. The test will auto-submit upon timer expiry.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                You can navigate between questions using the Question Palette or the Next/Previous buttons.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                You can mark questions for review if you want to reconsider them later before submitting.
              </p>
            </div>
          </div>

          {/* Palette Status Reference Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-['Outfit']">
              Question Palette Color Legend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-xs" />
                <span>🟢 Answered</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-xs" />
                <span>🔴 Not Answered</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-300 border border-slate-400" />
                <span>⚪ Not Visited</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-xs" />
                <span>🟡 Marked for Review</span>
              </div>
            </div>
          </div>

          {/* Declaration Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 p-4 rounded-xl border border-indigo-100 bg-indigo-50/60 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreementChecked}
                onChange={(e) => setAgreementChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-indigo-600 rounded-md border-slate-300 focus:ring-indigo-500 cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                I have read and understood all the instructions above. I declare that I am ready to begin the UGC NET Economics examination simulation.
              </span>
            </label>
          </div>

          {/* Start Test Button */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={() => setCurrentView('tests')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>

            <button
              id="confirm-start-test-btn"
              disabled={!agreementChecked}
              onClick={confirmAndLaunchTest}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2.5 shadow-lg transition-all ${
                agreementChecked
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-slate-300 cursor-not-allowed shadow-none'
              }`}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Test</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
