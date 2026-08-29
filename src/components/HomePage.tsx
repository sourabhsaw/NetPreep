import React from 'react';
import { useTest } from '../context/TestContext';
import { MOCK_TESTS_CATALOG } from '../data/mockTestsData';
import {
  GraduationCap,
  BookOpen,
  HelpCircle,
  Target,
  BarChart3,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronRight,
  TrendingUp,
  Code2,
  Database,
  Cpu,
  Binary,
  Layers,
  MapPin,
  Phone,
  ShieldCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentView, initiateTestStart, loadSampleResult, navigateToSubjectTests } = useTest();

  const stats = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      label: 'Exam Subjects',
      value: '2 Subjects',
      desc: 'Economics (01) & CS (87)'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      label: 'Mock Test Series',
      value: '10+ Full Mocks',
      desc: '100-Question CBT sets'
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
      label: 'Questions & Solutions',
      value: '1,000+ Qs',
      desc: 'Detailed conceptual steps'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-amber-600" />,
      label: 'Live CBT Analytics',
      value: 'Real-Time',
      desc: 'Score, percentile & sync'
    }
  ];

  return (
    <div id="home-page-container" className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-200/60">
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-200/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-200 shadow-xs text-xs font-semibold text-indigo-700">
              <span className="text-base">🎓</span>
              <span>NTA UGC NET Exam Portal & CBT Test Series</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Ace Your UGC NET Exam with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Real CBT Mock Tests
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Standard 100-question full-length mock tests designed strictly for NTA UGC NET / JRF aspirants with live score tracking and in-depth performance diagnostics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                id="hero-start-free-test-btn"
                onClick={() => initiateTestStart(MOCK_TESTS_CATALOG[0])}
                className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>Start Free Economics Test</span>
              </button>

              <button
                id="hero-cs-free-test-btn"
                onClick={() => {
                  const csTest = MOCK_TESTS_CATALOG.find(t => t.id === 101) || MOCK_TESTS_CATALOG[0];
                  initiateTestStart(csTest);
                }}
                className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <Code2 className="w-5 h-5 text-emerald-950" />
                <span>Start Free CS Test</span>
              </button>

              <button
                id="hero-view-series-btn"
                onClick={() => {
                  setCurrentView('tests');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>View All Series</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Quick Demo Result Prompt */}
            <div className="pt-2">
              <button
                onClick={loadSampleResult}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Want to see a live score report first? Click to preview 142/200 score analysis</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Primary Subject Selection Section */}
      <section id="subject-selection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold uppercase tracking-wider text-indigo-700 font-['Outfit']">
            <span>Choose Your Discipline</span>
          </div>
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Select Your UGC NET Subject
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Choose your target paper to access dedicated full-length mock tests, syllabus-aligned questions, and unit diagnostics.
          </p>
        </div>

        {/* 2 Interactive Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: UGC NET Economics */}
          <div
            id="subject-card-economics"
            className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-indigo-800/80 hover:border-indigo-500 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
            
            <div className="space-y-6 relative z-10">
              {/* Header with Code Badge */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                    Paper Code: 01
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    6 Mocks Available
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-white group-hover:text-indigo-200 transition-colors">
                  UGC NET Economics
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Comprehensive test series strictly covering Microeconomics, Macroeconomics, Public Economics, International Trade, Econometrics, and Indian Economic Policies.
                </p>
              </div>

              {/* Key Units Checklist */}
              <div className="grid grid-cols-2 gap-2 text-xs text-indigo-200 pt-2 border-t border-indigo-800/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Micro & Macro Theory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Econometrics & Math</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>International & Public</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Indian Economy & Budget</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row gap-3 relative z-10">
              <button
                id="select-subject-economics-btn"
                onClick={() => navigateToSubjectTests('Economics')}
                className="flex-1 py-3.5 px-5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-indigo-50 shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Explore Economics Tests</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => initiateTestStart(MOCK_TESTS_CATALOG[0])}
                className="py-3.5 px-4 rounded-xl text-xs font-semibold text-indigo-200 hover:text-white bg-indigo-800/50 hover:bg-indigo-800 border border-indigo-700/60 transition-colors flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Start Free Mock</span>
              </button>
            </div>
          </div>

          {/* Card 2: UGC NET Computer Science */}
          <div
            id="subject-card-computer-science"
            className="bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-teal-800/80 hover:border-teal-400 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all" />
            
            <div className="space-y-6 relative z-10">
              {/* Header with Code Badge */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-teal-500/30 text-teal-200 border border-teal-400/30">
                    Paper Code: 87
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    4 Mocks Available
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-white group-hover:text-teal-200 transition-colors">
                  UGC NET Computer Science
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Full-length test series tailored for Computer Science & Applications (Paper II) covering Discrete Mathematics, DBMS, OS, Networks, Algorithms, TOC, and AI.
                </p>
              </div>

              {/* Key Units Checklist */}
              <div className="grid grid-cols-2 gap-2 text-xs text-teal-200 pt-2 border-t border-teal-800/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Discrete Math & Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>DBMS & Relational Algebra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>OS & Computer Networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>DSA, TOC & Artificial Intelligence</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row gap-3 relative z-10">
              <button
                id="select-subject-cs-btn"
                onClick={() => navigateToSubjectTests('Computer Science')}
                className="flex-1 py-3.5 px-5 rounded-xl text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Explore CS Tests</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const csTest = MOCK_TESTS_CATALOG.find(t => t.id === 101) || MOCK_TESTS_CATALOG[0];
                  initiateTestStart(csTest);
                }}
                className="py-3.5 px-4 rounded-xl text-xs font-semibold text-teal-200 hover:text-white bg-teal-800/50 hover:bg-teal-800 border border-teal-700/60 transition-colors flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Start Free Mock</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-xs font-bold font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {item.value}
                </p>
                <h3 className="text-sm font-semibold text-slate-800 mt-0.5">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Mock Tests Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-indigo-600 uppercase font-['Outfit']">
              <span>NTA UGC NET Exam Pattern</span>
            </div>
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Featured Mock Tests
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Each test contains 100 questions, 120 minutes duration, and 200 total marks.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentView('tests');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 self-start md:self-auto"
          >
            <span>Explore All Mock Tests</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mock Test Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Show first Economics test, first CS test, and second Economics test */}
          {[
            MOCK_TESTS_CATALOG[0], // Eco Mock 01
            MOCK_TESTS_CATALOG.find(t => t.id === 101) || MOCK_TESTS_CATALOG[1], // CS Mock 01
            MOCK_TESTS_CATALOG[1]  // Eco Mock 02
          ].map((test) => {
            const isFree = test.isFree;
            const isCS = test.subject === 'Computer Science';
            const diffColor =
              test.difficulty === 'Easy'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : test.difficulty === 'Moderate'
                ? 'text-blue-700 bg-blue-50 border-blue-200'
                : 'text-amber-700 bg-amber-50 border-amber-200';

            return (
              <div
                key={test.id}
                id={`mock-test-card-${test.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between p-6 group"
              >
                <div className="space-y-4">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                      isCS ? 'bg-teal-50 text-teal-700 border border-teal-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    }`}>
                      {test.subject}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${diffColor}`}>
                        {test.difficulty}
                      </span>
                      {isFree && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                          Free
                        </span>
                      )}
                    </div>
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

                  {/* Test Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center">
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-xs font-bold text-slate-800">{test.totalQuestions || 100}</p>
                      <p className="text-[11px] text-slate-500">Questions</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-xs font-bold text-slate-800">{test.durationMinutes || 120}</p>
                      <p className="text-[11px] text-slate-500">Minutes</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-xs font-bold text-slate-800">{test.totalMarks || 200}</p>
                      <p className="text-[11px] text-slate-500">Marks</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5">
                  <button
                    id={`start-test-btn-${test.id}`}
                    onClick={() => initiateTestStart(test)}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition-all duration-150 flex items-center justify-center gap-2 group-hover:shadow-md group-hover:shadow-indigo-600/20"
                  >
                    <span>Start Test</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Complete Workflow / Features Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-['Outfit']">
              Complete Preparation Workflow
            </span>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white">
              Why Aspirants Choose NETPrep
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              From real NTA CBT simulation to deep mistake analysis and All-India benchmarking across subjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white">
                Authentic CBT Exam Interface
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience the exact NTA portal look and feel with question palette, review tags, live countdown timer, and quick question jumping.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white">
                Detailed Solutions for Every Question
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step-by-step conceptual explanations, mathematical derivations, formula breakdowns, and core theories for every option.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white">
                Topic Analytics & Recommendations
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Identify your strong units and weak areas with personalized revision suggestions and instant cloud sync.
              </p>
            </div>

          </div>

          {/* Quick CTA Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-slate-800 to-teal-900 p-8 rounded-2xl border border-indigo-700/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-['Outfit'] font-bold text-xl text-white">
                Ready to evaluate your UGC NET exam readiness?
              </h4>
              <p className="text-xs text-indigo-200 mt-1">
                Take a 100-question full mock test with instant score analytics and rank prediction.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => initiateTestStart(MOCK_TESTS_CATALOG[0])}
                className="px-5 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-indigo-900" />
                <span>Economics Mock 01</span>
              </button>
              <button
                onClick={() => {
                  const csTest = MOCK_TESTS_CATALOG.find(t => t.id === 101) || MOCK_TESTS_CATALOG[0];
                  initiateTestStart(csTest);
                }}
                className="px-5 py-2.5 bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>CS Mock 01</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Organization & Founders Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span>About NETPrep Platform</span>
            </div>
            
            <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
              Built by UGC NET Mentors for Future Professors & JRF Scholars
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              NETPrep was founded with a single mission: to provide the highest-quality, syllabus-aligned test series and comprehensive performance analytics for students preparing for UGC NET / SET exams across disciplines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-xs text-slate-500 font-medium">Academic Leads</p>
                <p className="text-base font-bold text-slate-900 font-['Outfit']">Astha Jha & Sourabh Saw</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-xs text-slate-500 font-medium">Headquarters</p>
                <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Rourkela, Odisha, India</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => { setCurrentView('about_contact'); window.scrollTo(0, 0); }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View Founders Story & Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 rounded-2xl border border-emerald-100 space-y-4">
            <h4 className="font-['Outfit'] font-bold text-base text-slate-900 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp & Mentor Support</span>
            </h4>
            <p className="text-xs text-slate-600">
              Have questions regarding mock tests, syllabus doubts, or technical issues? Chat with our academic mentors:
            </p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-xs font-sans text-slate-500">Official WhatsApp</span>
                <a
                  href="https://wa.me/918249928311?text=Hello%20NETPrep%2C%20I%20have%20a%20query%20regarding%20the%20UGC%20NET%20Test%20Series."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-800 hover:underline"
                >
                  +91 8249928311
                </a>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-xs font-sans text-slate-500">Official Email</span>
                <a href="mailto:support@netprep.in" className="font-bold text-slate-800 hover:text-indigo-600 font-sans text-xs">
                  support@netprep.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
