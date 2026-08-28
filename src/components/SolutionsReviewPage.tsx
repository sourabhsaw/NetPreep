import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import { ALL_ECONOMICS_TOPICS } from '../data/mockTestsData';
import {
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Filter,
  Lightbulb,
  BookOpen,
  ArrowLeft,
  Sparkles,
  Search,
  Layers,
  Award
} from 'lucide-react';

export const SolutionsReviewPage: React.FC = () => {
  const {
    questions,
    userAnswers,
    testResult,
    setCurrentView,
    bookmarks,
    toggleBookmark,
    solutionsFilter,
    setSolutionsFilter,
    selectedTopicFilter,
    setSelectedTopicFilter
  } = useTest();

  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const optionLetters = ['A', 'B', 'C', 'D'];

  // Filter questions according to state & topic
  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const isCorrect = ans && ans.selectedOption === q.correct_answer;
    const isWrong = ans && ans.selectedOption !== null && ans.selectedOption !== q.correct_answer;
    const isUnattempted = !ans || ans.selectedOption === null;
    const isMarked = ans && (ans.state === 'marked_for_review' || ans.state === 'answered_and_marked');

    // Status filter
    if (solutionsFilter === 'wrong' && !isWrong) return false;
    if (solutionsFilter === 'correct' && !isCorrect) return false;
    if (solutionsFilter === 'unattempted' && !isUnattempted) return false;
    if (solutionsFilter === 'marked' && !isMarked) return false;

    // Topic filter
    if (selectedTopicFilter !== 'All' && q.topic !== selectedTopicFilter) return false;

    // Search query
    if (searchQuery.trim()) {
      const matchQ = q.question.toLowerCase().includes(searchQuery.toLowerCase());
      const matchTopic = q.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchConcept = q.concept.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchQ && !matchTopic && !matchConcept) return false;
    }

    return true;
  });

  const selectedQuestion = questions.find((q) => q.id === activeQuestionId) || questions[0];
  const userAns = selectedQuestion ? userAnswers[selectedQuestion.id] : undefined;
  const isCorrect = userAns && userAns.selectedOption === selectedQuestion.correct_answer;
  const isWrong = userAns && userAns.selectedOption !== null && userAns.selectedOption !== selectedQuestion.correct_answer;
  const isUnattempted = !userAns || userAns.selectedOption === null;
  const isBookmarked = selectedQuestion ? bookmarks.includes(selectedQuestion.id) : false;

  const currentFilteredIndex = filteredQuestions.findIndex((q) => q.id === activeQuestionId);

  const goToNextFiltered = () => {
    if (currentFilteredIndex < filteredQuestions.length - 1) {
      setActiveQuestionId(filteredQuestions[currentFilteredIndex + 1].id);
    }
  };

  const goToPrevFiltered = () => {
    if (currentFilteredIndex > 0) {
      setActiveQuestionId(filteredQuestions[currentFilteredIndex - 1].id);
    }
  };

  return (
    <div id="solutions-review-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (testResult) {
                setCurrentView('result');
              } else {
                setCurrentView('dashboard');
              }
              window.scrollTo(0, 0);
            }}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="Back to Scorecard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase font-['Outfit']">
              <span>Solution & Explanation Portal</span>
            </div>
            <h1 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900">
              Detailed Question Solutions
            </h1>
          </div>
        </div>

        {/* Quick Result Mini Summary */}
        {testResult && (
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-xs">
            <span className="text-slate-500 font-medium">Score:</span>
            <span className="font-bold font-mono text-indigo-600 text-sm">
              {testResult.score} / {testResult.totalMarks}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">Accuracy:</span>
            <span className="font-bold font-mono text-slate-900 text-sm">
              {testResult.accuracy}%
            </span>
          </div>
        )}
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <button
            onClick={() => setSolutionsFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              solutionsFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions ({questions.length})
          </button>

          <button
            onClick={() => setSolutionsFilter('wrong')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 ${
              solutionsFilter === 'wrong'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Wrong Answers ({testResult?.wrongCount || 19})</span>
          </button>

          <button
            onClick={() => setSolutionsFilter('correct')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors flex items-center gap-1.5 ${
              solutionsFilter === 'correct'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Correct ({testResult?.correctCount || 71})</span>
          </button>

          <button
            onClick={() => setSolutionsFilter('unattempted')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-colors ${
              solutionsFilter === 'unattempted'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Unattempted ({testResult?.unattemptedCount || 10})
          </button>
        </div>

        {/* Topic Selector & Search */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <select
            value={selectedTopicFilter}
            onChange={(e) => setSelectedTopicFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Topics (15)</option>
            {ALL_ECONOMICS_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Main Review Arena (Split Layout: Question Explorer + Solution View) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Question Selector Strip (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-['Outfit'] font-bold text-sm text-slate-900">
              Questions List ({filteredQuestions.length})
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Filtered
            </span>
          </div>

          <div className="max-h-[560px] overflow-y-auto space-y-2 pr-1">
            {filteredQuestions.map((q) => {
              const qAns = userAnswers[q.id];
              const qIsCorrect = qAns && qAns.selectedOption === q.correct_answer;
              const qIsWrong = qAns && qAns.selectedOption !== null && qAns.selectedOption !== q.correct_answer;
              const isSelected = q.id === activeQuestionId;

              return (
                <div
                  key={q.id}
                  id={`solution-q-nav-${q.id}`}
                  onClick={() => setActiveQuestionId(q.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                        qIsCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : qIsWrong
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {q.id.toString().padStart(2, '0')}
                    </div>
                    <div className="truncate text-left">
                      <p className="text-xs font-semibold text-slate-900 truncate">
                        {q.question}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {q.topic}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {qIsCorrect ? (
                      <span className="text-emerald-600 font-bold text-xs">✅</span>
                    ) : qIsWrong ? (
                      <span className="text-rose-600 font-bold text-xs">❌</span>
                    ) : (
                      <span className="text-slate-400 text-xs">⚪</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Question Solution & Concept Card (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            
            {/* Question Header */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-['Outfit'] font-bold text-lg text-slate-900">
                  Question {selectedQuestion.id}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  {selectedQuestion.topic}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                  Difficulty: {selectedQuestion.difficulty}
                </span>
              </div>

              {/* Bookmark Toggle */}
              <button
                onClick={() => toggleBookmark(selectedQuestion.id)}
                className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-amber-600" />
                    <span>Saved in Bookmarks</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Save for Revision</span>
                  </>
                )}
              </button>
            </div>

            {/* Question Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Question Statement */}
              <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                <span className="font-bold text-indigo-600 mr-2">{selectedQuestion.id}.</span>
                {selectedQuestion.question}
              </div>

              {/* Options Breakdown with Your Answer vs Correct Answer */}
              <div className="space-y-3 pt-2">
                {selectedQuestion.options.map((opt, optIdx) => {
                  const letter = optionLetters[optIdx];
                  const isUserSelected = userAns?.selectedOption === optIdx;
                  const isThisCorrect = optIdx === selectedQuestion.correct_answer;

                  let cardStyle = 'border-slate-200 bg-white text-slate-800';
                  let badge = null;

                  if (isThisCorrect) {
                    cardStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 shadow-2xs';
                    badge = (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Correct Answer
                      </span>
                    );
                  } else if (isUserSelected && !isThisCorrect) {
                    cardStyle = 'border-rose-500 bg-rose-50/70 text-rose-950 shadow-2xs';
                    badge = (
                      <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" />
                        Your Answer
                      </span>
                    );
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-4 rounded-xl border-2 transition-all flex items-start justify-between gap-3 ${cardStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isThisCorrect
                              ? 'bg-emerald-600 text-white'
                              : isUserSelected
                              ? 'bg-rose-600 text-white'
                              : 'border-2 border-slate-300 text-slate-600 bg-slate-50'
                          }`}
                        >
                          {letter}
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed font-medium">
                          {opt}
                        </span>
                      </div>

                      {badge}
                    </div>
                  );
                })}
              </div>

              {/* Status Comparison Banner (Matching the User Request EXACTLY) */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-500">Answer Status:</div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    {userAns && userAns.selectedOption !== null ? (
                      isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          🟢 Correct! (Your Answer: ✅ {optionLetters[userAns.selectedOption]}. {selectedQuestion.options[userAns.selectedOption]})
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          ❌ Your Answer: {optionLetters[userAns.selectedOption]}. {selectedQuestion.options[userAns.selectedOption]}
                        </span>
                      )
                    ) : (
                      <span className="text-amber-700">
                        ⚪ Unattempted
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-emerald-800 font-mono">
                  Correct Answer: ✅ {optionLetters[selectedQuestion.correct_answer]}. {selectedQuestion.options[selectedQuestion.correct_answer]}
                </div>
              </div>

              {/* 💡 Deep Explanation Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-['Outfit']">
                  <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>💡 Detailed Explanation</span>
                </div>

                <div className="bg-amber-50/40 p-5 rounded-2xl border border-amber-200/70 text-sm text-slate-800 leading-relaxed">
                  {selectedQuestion.explanation}
                </div>
              </div>

              {/* 📚 Concept & Syllabus Mapping */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-['Outfit']">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>📚 Core Economic Concept</span>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-indigo-900">Concept:</span>
                    <span className="font-bold text-indigo-700 font-mono">
                      {selectedQuestion.concept}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <span>Topic: <strong className="text-slate-800">{selectedQuestion.topic}</strong></span>
                    <span>•</span>
                    <span>Difficulty: <strong className="text-slate-800">{selectedQuestion.difficulty}</strong></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Question Step Navigation Bar */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <button
                disabled={currentFilteredIndex <= 0}
                onClick={goToPrevFiltered}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  currentFilteredIndex <= 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Solution</span>
              </button>

              <span className="text-xs font-mono font-medium text-slate-500">
                {currentFilteredIndex + 1} of {filteredQuestions.length}
              </span>

              <button
                disabled={currentFilteredIndex >= filteredQuestions.length - 1}
                onClick={goToNextFiltered}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
                  currentFilteredIndex >= filteredQuestions.length - 1
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs'
                }`}
              >
                <span>Next Solution</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
