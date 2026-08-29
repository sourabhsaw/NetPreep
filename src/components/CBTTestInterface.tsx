import React, { useState, useEffect } from 'react';
import { useTest } from '../context/TestContext';
import { QuestionState } from '../types';
import {
  GraduationCap,
  Clock,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  RotateCcw,
  Send,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Maximize2,
  Minimize2,
  X,
  User,
  Tag,
  Check
} from 'lucide-react';

export const CBTTestInterface: React.FC = () => {
  const {
    selectedTest,
    questions,
    currentQuestionIndex,
    userAnswers,
    timeRemainingSeconds,
    selectOption,
    clearResponse,
    toggleMarkForReview,
    goToNextQuestion,
    goToPreviousQuestion,
    jumpToQuestion,
    submitTest,
    studentProfile
  } = useTest();

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [paletteFilter, setPaletteFilter] = useState<'all' | 'answered' | 'unanswered' | 'marked'>('all');

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;

  // Format time remaining (hh:mm:ss)
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Status counts
  let answeredCount = 0;
  let notAnsweredCount = 0;
  let notVisitedCount = 0;
  let markedForReviewCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans || ans.state === 'not_visited') {
      notVisitedCount++;
    } else if (ans.state === 'answered') {
      answeredCount++;
    } else if (ans.state === 'not_answered') {
      notAnsweredCount++;
    } else if (ans.state === 'marked_for_review' || ans.state === 'answered_and_marked') {
      markedForReviewCount++;
    }
  });

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSubmitModal) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextQuestion();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPreviousQuestion();
      } else if (['1', '2', '3', '4'].includes(e.key) && currentQuestion) {
        selectOption(currentQuestion.id, parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSubmitModal, currentQuestion, goToNextQuestion, goToPreviousQuestion, selectOption]);

  if (!currentQuestion) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];
  const isTimeCritical = timeRemainingSeconds < 300; // less than 5 mins

  return (
    <div id="cbt-exam-portal" className="min-h-screen bg-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Official CBT Exam Top Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          
          {/* Logo & Test Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Outfit'] font-bold text-lg text-white">NETPrep</span>
                <span className="text-xs text-indigo-400 font-mono hidden sm:inline-block">• Paper II</span>
              </div>
              <p className="text-xs text-slate-300 font-medium truncate max-w-[200px] sm:max-w-md">
                {selectedTest?.title || 'UGC NET Economics — Mock Test 01'}
              </p>
            </div>
          </div>

          {/* Center / Right: Progress & Timer */}
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* Question Progress Counter */}
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[11px] text-slate-400 font-medium">Question Progress</span>
              <span className="text-xs sm:text-sm font-bold text-white">
                Question <span className="text-indigo-400">{currentQuestionIndex + 1}</span> of {questions.length}
              </span>
            </div>

            {/* Timer Display */}
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base ${
                isTimeCritical
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-slate-800 border-slate-700 text-emerald-400'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>⏱ {formatTime(timeRemainingSeconds)}</span>
            </div>

            {/* Candidate Photo / Info mini card */}
            <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-slate-700">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center text-xs font-bold ring-2 ring-indigo-400/40 shrink-0">
                {studentProfile.name ? studentProfile.name.charAt(0).toUpperCase() : 'C'}
              </div>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-bold text-white truncate max-w-[120px] lg:max-w-[150px]">
                  {studentProfile.name || 'Candidate'}
                </p>
                <p className="text-[10px] text-indigo-300 font-mono">
                  {studentProfile.rollNumber || 'UGC-NET-2026'}
                </p>
              </div>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen Mode"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors hidden sm:block"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </header>

      {/* 2. Main Exam Arena (Split Layout: Question Area + Palette Sidebar) */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left Column: Question Area (8 Cols on Desktop) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col min-h-[580px] justify-between overflow-hidden">
            
            {/* Question Card Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Outfit'] font-bold text-base sm:text-lg text-slate-900">
                  Question {currentQuestion.id}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100/70 text-indigo-700 font-semibold border border-indigo-200/50">
                  {currentQuestion.topic}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/60">
                  +2.0 Marks
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                  -0.0 Negative
                </span>
              </div>
            </div>

            {/* Question Text & Options Body */}
            <div className="p-5 sm:p-8 space-y-6 flex-1">
              
              {/* Question Text */}
              <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                <span className="font-bold text-indigo-600 mr-2">{currentQuestion.id}.</span>
                {currentQuestion.question}
              </div>

              {/* Options Radio List */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = currentAnswer?.selectedOption === optIdx;
                  const letter = optionLetters[optIdx];

                  return (
                    <div
                      key={optIdx}
                      id={`option-choice-${currentQuestion.id}-${letter}`}
                      onClick={() => selectOption(currentQuestion.id, optIdx)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/60 shadow-xs'
                          : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50/80 bg-white'
                      }`}
                    >
                      {/* Radio Circle */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'border-2 border-slate-300 text-slate-600 bg-slate-50'
                        }`}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : letter}
                      </div>

                      {/* Option Text */}
                      <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal flex-1">
                        <span className="font-semibold text-slate-900 mr-1.5">{letter}.</span>
                        {opt}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Action Button Bar */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              
              {/* Left Action: Previous */}
              <div className="flex items-center gap-2">
                <button
                  id="btn-prev-question"
                  disabled={currentQuestionIndex === 0}
                  onClick={goToPreviousQuestion}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                    currentQuestionIndex === 0
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  id="btn-mark-for-review"
                  onClick={() => toggleMarkForReview(currentQuestion.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all border ${
                    currentAnswer?.state === 'marked_for_review' || currentAnswer?.state === 'answered_and_marked'
                      ? 'bg-amber-100 border-amber-300 text-amber-900'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-amber-50 hover:text-amber-800'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  <span>
                    {currentAnswer?.state === 'marked_for_review' || currentAnswer?.state === 'answered_and_marked'
                      ? 'Marked for Review'
                      : 'Mark for Review'}
                  </span>
                </button>
              </div>

              {/* Right Actions: Clear Response & Save/Next */}
              <div className="flex items-center gap-2">
                {currentAnswer?.selectedOption !== null && (
                  <button
                    id="btn-clear-response"
                    onClick={() => clearResponse(currentQuestion.id)}
                    className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Response</span>
                  </button>
                )}

                <button
                  id="btn-next-question"
                  onClick={() => {
                    if (currentQuestionIndex < questions.length - 1) {
                      goToNextQuestion();
                    } else {
                      setShowSubmitModal(true);
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/30 transition-all flex items-center gap-1.5"
                >
                  <span>{currentQuestionIndex === questions.length - 1 ? 'Review & Submit' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Quick Shortcuts Helper */}
          <div className="hidden sm:flex items-center justify-between text-[11px] text-slate-500 px-2">
            <span>💡 Tip: Use keyboard keys [1, 2, 3, 4] to select options and [← / →] to navigate.</span>
            <span>UGC NET Economics Paper II • 100 Questions</span>
          </div>

        </div>

        {/* Right Column: Question Palette (4 Cols on Desktop) */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 space-y-4">
            
            {/* Palette Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-['Outfit'] font-bold text-base text-slate-900">
                Question Palette
              </h3>
              <span className="text-xs font-mono font-semibold text-slate-500">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>

            {/* Status Counter Chips */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Answered</span>
                </span>
                <span className="font-bold font-mono">{answeredCount}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Not Answered</span>
                </span>
                <span className="font-bold font-mono">{notAnsweredCount}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Marked Review</span>
                </span>
                <span className="font-bold font-mono">{markedForReviewCount}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span>Not Visited</span>
                </span>
                <span className="font-bold font-mono">{notVisitedCount}</span>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-semibold">
              {(['all', 'answered', 'unanswered', 'marked'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setPaletteFilter(f)}
                  className={`flex-1 py-1 rounded-lg capitalize transition-colors ${
                    paletteFilter === f
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {f === 'all' ? 'All (100)' : f}
                </button>
              ))}
            </div>

            {/* 100-Question Number Grid */}
            <div className="max-h-[320px] overflow-y-auto pr-1">
              <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-1.5">
                {questions.map((q, idx) => {
                  const ans = userAnswers[q.id];
                  const isCurrent = idx === currentQuestionIndex;

                  // Determine status styling
                  let statusClasses = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'; // not visited
                  if (ans?.state === 'answered') {
                    statusClasses = 'bg-emerald-600 text-white font-bold border-emerald-700';
                  } else if (ans?.state === 'not_answered') {
                    statusClasses = 'bg-rose-500 text-white font-bold border-rose-600';
                  } else if (ans?.state === 'marked_for_review') {
                    statusClasses = 'bg-amber-500 text-white font-bold border-amber-600';
                  } else if (ans?.state === 'answered_and_marked') {
                    statusClasses = 'bg-purple-600 text-white font-bold border-purple-700';
                  }

                  // Check filter
                  if (paletteFilter === 'answered' && ans?.state !== 'answered' && ans?.state !== 'answered_and_marked') {
                    return null;
                  }
                  if (paletteFilter === 'unanswered' && (ans?.state === 'answered' || ans?.state === 'answered_and_marked')) {
                    return null;
                  }
                  if (paletteFilter === 'marked' && ans?.state !== 'marked_for_review' && ans?.state !== 'answered_and_marked') {
                    return null;
                  }

                  return (
                    <button
                      key={q.id}
                      id={`palette-q-${q.id}`}
                      onClick={() => jumpToQuestion(idx)}
                      className={`h-9 rounded-lg text-xs font-mono font-medium border flex items-center justify-center transition-all ${statusClasses} ${
                        isCurrent ? 'ring-2 ring-indigo-600 ring-offset-2 scale-105 z-10 shadow-sm' : ''
                      }`}
                    >
                      {q.id.toString().padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Final Submit Test Button */}
            <div className="pt-2">
              <button
                id="btn-open-submit-modal"
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Submit Test</span>
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* 3. Submit Test Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
                    Submit Examination?
                  </h3>
                  <p className="text-xs text-slate-500">Summary of your attempts</p>
                </div>
              </div>

              <button
                onClick={() => setShowSubmitModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Breakdown Table */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70">
                <span className="text-slate-600">Total Questions</span>
                <span className="font-bold text-slate-900">{questions.length}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Answered</span>
                </span>
                <span className="font-bold">{answeredCount}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-rose-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Not Answered</span>
                </span>
                <span className="font-bold">{notAnsweredCount}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-amber-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Marked for Review</span>
                </span>
                <span className="font-bold">{markedForReviewCount}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span>Not Visited</span>
                </span>
                <span className="font-bold">{notVisitedCount}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center leading-relaxed">
              Are you sure you want to submit? Once submitted, your score and detailed performance analysis will be generated immediately.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Resume Test
              </button>

              <button
                id="confirm-submit-exam-btn"
                onClick={() => {
                  setShowSubmitModal(false);
                  submitTest();
                }}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition-all"
              >
                Yes, Submit Now
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
