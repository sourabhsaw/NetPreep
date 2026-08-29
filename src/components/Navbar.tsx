import React, { useState } from 'react';
import { useTest, AppView } from '../context/TestContext';
import {
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Trophy,
  BarChart3,
  PhoneCall,
  Menu,
  X,
  PlayCircle,
  FileCheck2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    studentProfile,
    loadSampleResult,
    isTestActive,
    selectedTest,
    initiateTestStart,
    submittedRecords
  } = useTest();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If in the middle of a CBT test, show a focused exam header
  if (isTestActive) {
    return null; // The CBT interface has its own dedicated exam navigation
  }

  const navItems: { id: AppView; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'home', label: 'Home', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'tests', label: 'Test Series', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Student Portal', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'admin_scores', label: 'Admin Logs', icon: <ShieldCheck className="w-4 h-4" />, badge: submittedRecords.length },
    { id: 'leaderboard', label: 'Leaderboard', icon: <Trophy className="w-4 h-4" /> },
    { id: 'about_contact', label: 'About & Support', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  return (
    <header id="netprep-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            id="brand-logo-btn"
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-['Outfit'] font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
                  NET<span className="text-indigo-600">Prep</span>
                </span>
                <span className="bg-indigo-50 text-indigo-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-indigo-200/60 hidden sm:inline-block">
                  Economics
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide -mt-1 hidden sm:block">
                UGC NET Economics Test Series
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-150 relative ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-600 text-white font-mono font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Sample Scorecard Button */}
            <button
              id="view-sample-result-btn"
              onClick={loadSampleResult}
              title="Explore the simulated 142/200 test scorecard and solutions"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 rounded-lg border border-indigo-200/70 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Sample (142/200)</span>
            </button>

            {/* Start Free Test CTA */}
            <button
              id="header-start-free-test-btn"
              onClick={() => {
                if (selectedTest) {
                  initiateTestStart(selectedTest);
                } else {
                  setCurrentView('tests');
                }
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:shadow-md hover:shadow-indigo-600/30 active:scale-98"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Start Free Test</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  setCurrentView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-mono font-bold">
                    {item.badge} logs
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-sample-result-btn"
              onClick={() => {
                loadSampleResult();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg border border-indigo-200"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>View Sample Scorecard (142/200)</span>
            </button>
            <button
              id="mobile-start-free-test-btn"
              onClick={() => {
                if (selectedTest) {
                  initiateTestStart(selectedTest);
                } else {
                  setCurrentView('tests');
                }
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Start Free Test (Mock 01)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
