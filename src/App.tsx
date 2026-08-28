import React from 'react';
import { TestProvider, useTest } from './context/TestContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { TestSeriesPage } from './components/TestSeriesPage';
import { InstructionsScreen } from './components/InstructionsScreen';
import { CBTTestInterface } from './components/CBTTestInterface';
import { TestResultPage } from './components/TestResultPage';
import { SolutionsReviewPage } from './components/SolutionsReviewPage';
import { AnalyticsPage } from './components/AnalyticsPage';
import { LeaderboardPage } from './components/LeaderboardPage';
import { DashboardPage } from './components/DashboardPage';
import { AboutContactPage } from './components/AboutContactPage';

const AppContent: React.FC = () => {
  const { currentView, isTestActive } = useTest();

  // In CBT test taking mode, hide global navigation and footer for distraction-free full exam simulation
  const isCBTExamMode = currentView === 'cbt_test' && isTestActive;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {!isCBTExamMode && <Navbar />}

      <main className="flex-1">
        {currentView === 'home' && <HomePage />}
        {currentView === 'tests' && <TestSeriesPage />}
        {currentView === 'instructions' && <InstructionsScreen />}
        {currentView === 'cbt_test' && <CBTTestInterface />}
        {currentView === 'result' && <TestResultPage />}
        {currentView === 'solutions' && <SolutionsReviewPage />}
        {currentView === 'analytics' && <AnalyticsPage />}
        {currentView === 'leaderboard' && <LeaderboardPage />}
        {currentView === 'dashboard' && <DashboardPage />}
        {currentView === 'about_contact' && <AboutContactPage />}
      </main>

      {!isCBTExamMode && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <TestProvider>
      <AppContent />
    </TestProvider>
  );
}
