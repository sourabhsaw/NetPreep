import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import { MOCK_TESTS_CATALOG, ALL_ECONOMICS_TOPICS } from '../data/mockTestsData';
import { MockTest } from '../types';
import {
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  Clock,
  Award,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  GraduationCap
} from 'lucide-react';

export const TestSeriesPage: React.FC = () => {
  const { initiateTestStart } = useTest();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Moderate' | 'Hard'>('All');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full Mock' | 'Topic Special'>('All');

  const filteredTests = MOCK_TESTS_CATALOG.filter((test) => {
    const matchesSearch =
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || test.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div id="test-series-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-md">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <GraduationCap className="w-96 h-96" />
        </div>

        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
            <span>📝 UGC NET Economics (Paper II)</span>
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            UGC NET Economics Mock Test Series
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Practice with full-length 100-question mock tests created by subject experts. Accurate CBT simulator, complete timer tracking, and in-depth performance analytics.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100 Questions per test
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-blue-400" />
              120 Minutes (2 Hours)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Award className="w-4 h-4 text-amber-400" />
              200 Total Marks (+2, -0)
            </span>
          </div>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mock tests (e.g. Mock Test 01, Micro, Econometrics)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            {(['All', 'Moderate', 'Hard'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedDifficulty === diff
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {diff === 'All' ? 'All Difficulties' : diff}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            {(['All', 'Full Mock', 'Topic Special'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Types' : cat}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Mock Tests Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => {
          const isFree = test.isFree;
          const diffBadge =
            test.difficulty === 'Easy'
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
              : test.difficulty === 'Moderate'
              ? 'text-blue-700 bg-blue-50 border-blue-200'
              : 'text-amber-700 bg-amber-50 border-amber-200';

          return (
            <div
              key={test.id}
              id={`test-series-card-${test.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between p-6 group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${diffBadge}`}>
                    Difficulty: {test.difficulty}
                  </span>
                  {isFree ? (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-xs">
                      Free Test
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      Standard Mock
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {test.description}
                  </p>
                </div>

                {/* Test Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center">
                  <div className="p-2 rounded-lg bg-slate-50">
                    <p className="text-xs font-bold text-slate-800">{test.totalQuestions}</p>
                    <p className="text-[11px] text-slate-500">Questions</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <p className="text-xs font-bold text-slate-800">{test.durationMinutes}</p>
                    <p className="text-[11px] text-slate-500">Minutes</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50">
                    <p className="text-xs font-bold text-slate-800">{test.totalMarks}</p>
                    <p className="text-[11px] text-slate-500">Marks</p>
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Topics Covered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {test.topicsCovered.slice(0, 3).map((top) => (
                      <span
                        key={top}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                      >
                        {top}
                      </span>
                    ))}
                    {test.topicsCovered.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 font-medium">
                        +{test.topicsCovered.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Start Test Action */}
              <div className="pt-6">
                <button
                  id={`series-start-btn-${test.id}`}
                  onClick={() => initiateTestStart(test)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 group-hover:scale-101 active:scale-99"
                >
                  <span>Start Test</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
