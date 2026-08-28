import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  MockTest,
  Question,
  UserAnswer,
  TestResult,
  StudentProfile,
  QuestionState
} from '../types';
import { mockTest01Questions } from '../data/questionsData';
import { MOCK_TESTS_CATALOG, INITIAL_STUDENT_PROFILE } from '../data/mockTestsData';
import confetti from 'canvas-confetti';

export type AppView =
  | 'home'
  | 'tests'
  | 'instructions'
  | 'cbt_test'
  | 'result'
  | 'solutions'
  | 'analytics'
  | 'leaderboard'
  | 'dashboard'
  | 'about_contact';

interface TestContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedTest: MockTest | null;
  setSelectedTest: (test: MockTest | null) => void;
  questions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  userAnswers: Record<number, UserAnswer>;
  timeRemainingSeconds: number;
  isTestActive: boolean;
  testResult: TestResult | null;
  testHistory: TestResult[];
  studentProfile: StudentProfile;
  updateStudentProfile: (profile: Partial<StudentProfile>) => void;
  bookmarks: number[];
  toggleBookmark: (questionId: number) => void;
  
  // Test Action Handlers
  initiateTestStart: (test: MockTest) => void;
  confirmAndLaunchTest: () => void;
  selectOption: (questionId: number, optionIndex: number) => void;
  clearResponse: (questionId: number) => void;
  toggleMarkForReview: (questionId: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  jumpToQuestion: (index: number) => void;
  submitTest: () => void;
  retryCurrentTest: () => void;
  loadSampleResult: () => void;
  
  // Filter for Solutions
  solutionsFilter: 'all' | 'wrong' | 'correct' | 'unattempted' | 'marked';
  setSolutionsFilter: (filter: 'all' | 'wrong' | 'correct' | 'unattempted' | 'marked') => void;
  selectedTopicFilter: string;
  setSelectedTopicFilter: (topic: string) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedTest, setSelectedTest] = useState<MockTest | null>(MOCK_TESTS_CATALOG[0]);
  const [questions, setQuestions] = useState<Question[]>(mockTest01Questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(180 * 60);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [testHistory, setTestHistory] = useState<TestResult[]>([]);
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [solutionsFilter, setSolutionsFilter] = useState<'all' | 'wrong' | 'correct' | 'unattempted' | 'marked'>('all');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('All');

  // Load persistence
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('netprep_test_history');
      if (savedHistory) setTestHistory(JSON.parse(savedHistory));

      const savedBookmarks = localStorage.getItem('netprep_bookmarks');
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));

      const savedProfile = localStorage.getItem('netprep_student_profile');
      if (savedProfile) setStudentProfile(JSON.parse(savedProfile));
    } catch (e) {
      console.error('Error loading saved state', e);
    }
  }, []);

  // Sync profile changes
  const updateStudentProfile = (newProfile: Partial<StudentProfile>) => {
    setStudentProfile((prev) => {
      const updated = { ...prev, ...newProfile };
      localStorage.setItem('netprep_student_profile', JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle bookmark
  const toggleBookmark = (questionId: number) => {
    setBookmarks((prev) => {
      const updated = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      localStorage.setItem('netprep_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  // Timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTestActive && timeRemainingSeconds > 0) {
      interval = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            submitTest();
            return 0;
          }
          return prev - 1;
        });

        // Track time spent on current question
        const currentQ = questions[currentQuestionIndex];
        if (currentQ) {
          setUserAnswers((prev) => {
            const currentAns = prev[currentQ.id] || {
              questionId: currentQ.id,
              selectedOption: null,
              state: 'not_answered',
              timeSpentSeconds: 0
            };
            return {
              ...prev,
              [currentQ.id]: {
                ...currentAns,
                timeSpentSeconds: currentAns.timeSpentSeconds + 1
              }
            };
          });
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTestActive, timeRemainingSeconds, currentQuestionIndex, questions]);

  // Initiate Test Start (Goes to Instructions)
  const initiateTestStart = (test: MockTest) => {
    setSelectedTest(test);
    setCurrentView('instructions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch the CBT test
  const confirmAndLaunchTest = () => {
    const totalQ = mockTest01Questions;
    setQuestions(totalQ);

    const initialAnswers: Record<number, UserAnswer> = {};
    totalQ.forEach((q, idx) => {
      initialAnswers[q.id] = {
        questionId: q.id,
        selectedOption: null,
        state: idx === 0 ? 'not_answered' : 'not_visited',
        timeSpentSeconds: 0
      };
    });

    setUserAnswers(initialAnswers);
    setCurrentQuestionIndex(0);
    setTimeRemainingSeconds(180 * 60);
    setIsTestActive(true);
    setCurrentView('cbt_test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select option for question
  const selectOption = (questionId: number, optionIndex: number) => {
    setUserAnswers((prev) => {
      const existing = prev[questionId] || {
        questionId,
        selectedOption: null,
        state: 'not_answered',
        timeSpentSeconds: 0
      };
      
      const newState: QuestionState =
        existing.state === 'marked_for_review' || existing.state === 'answered_and_marked'
          ? 'answered_and_marked'
          : 'answered';

      return {
        ...prev,
        [questionId]: {
          ...existing,
          selectedOption: optionIndex,
          state: newState
        }
      };
    });
  };

  // Clear response
  const clearResponse = (questionId: number) => {
    setUserAnswers((prev) => {
      const existing = prev[questionId];
      if (!existing) return prev;
      return {
        ...prev,
        [questionId]: {
          ...existing,
          selectedOption: null,
          state: existing.state === 'answered_and_marked' ? 'marked_for_review' : 'not_answered'
        }
      };
    });
  };

  // Toggle Mark for Review
  const toggleMarkForReview = (questionId: number) => {
    setUserAnswers((prev) => {
      const existing = prev[questionId] || {
        questionId,
        selectedOption: null,
        state: 'not_answered',
        timeSpentSeconds: 0
      };

      let newState: QuestionState = 'marked_for_review';
      if (existing.selectedOption !== null) {
        newState = existing.state === 'answered_and_marked' ? 'answered' : 'answered_and_marked';
      } else {
        newState = existing.state === 'marked_for_review' ? 'not_answered' : 'marked_for_review';
      }

      return {
        ...prev,
        [questionId]: {
          ...existing,
          state: newState
        }
      };
    });
  };

  // Navigation handlers
  const jumpToQuestion = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    
    // Mark target as visited if not visited yet
    const targetQ = questions[index];
    if (targetQ) {
      setUserAnswers((prev) => {
        const existing = prev[targetQ.id];
        if (existing && existing.state === 'not_visited') {
          return {
            ...prev,
            [targetQ.id]: {
              ...existing,
              state: 'not_answered'
            }
          };
        }
        return prev;
      });
    }
    setCurrentQuestionIndex(index);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      jumpToQuestion(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      jumpToQuestion(currentQuestionIndex - 1);
    }
  };

  // Calculate & Submit Test Result
  const submitTest = useCallback(() => {
    setIsTestActive(false);

    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    let markedCount = 0;

    const topicStats: Record<string, { total: number; correct: number; wrong: number; unattempted: number; accuracy: number }> = {};

    questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      const topic = q.topic;

      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, correct: 0, wrong: 0, unattempted: 0, accuracy: 0 };
      }
      topicStats[topic].total += 1;

      if (userAns?.state === 'marked_for_review' || userAns?.state === 'answered_and_marked') {
        markedCount += 1;
      }

      if (userAns && userAns.selectedOption !== null) {
        if (userAns.selectedOption === q.correct_answer) {
          correctCount += 1;
          topicStats[topic].correct += 1;
        } else {
          wrongCount += 1;
          topicStats[topic].wrong += 1;
        }
      } else {
        unattemptedCount += 1;
        topicStats[topic].unattempted += 1;
      }
    });

    // Compute Topic Accuracies
    const strongAreas: string[] = [];
    const weakAreas: string[] = [];

    Object.entries(topicStats).forEach(([topic, stats]) => {
      const attempted = stats.correct + stats.wrong;
      stats.accuracy = attempted > 0 ? Math.round((stats.correct / attempted) * 100) : 0;
      if (stats.accuracy >= 75) {
        strongAreas.push(`${topic} — ${stats.accuracy}%`);
      } else if (stats.accuracy <= 60 && stats.total >= 2) {
        weakAreas.push(`${topic} — ${stats.accuracy}%`);
      }
    });

    const totalQuestions = questions.length;
    const score = correctCount * 2; // +2 marks per question, 0 for wrong/unattempted
    const totalMarks = totalQuestions * 2;
    const totalAttempted = correctCount + wrongCount;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
    
    // Percentile approximation
    const scoreRatio = score / totalMarks;
    const percentile = Math.min(99.4, Math.max(45.0, Number((scoreRatio * 92 + 8.5).toFixed(2))));
    
    const timeTakenSeconds = (180 * 60) - timeRemainingSeconds;
    const timeTakenMinutes = Math.max(1, Math.round(timeTakenSeconds / 60));

    let recommendation = 'Practice more questions from Econometrics and Statistics to strengthen conceptual clarity.';
    if (weakAreas.length > 0) {
      const topWeak = weakAreas.slice(0, 2).map(w => w.split(' — ')[0]).join(' and ');
      recommendation = `Practice more questions from ${topWeak}. Focus on numerical problem solving and formula revision.`;
    }

    const calculatedResult: TestResult = {
      testId: selectedTest?.id || 1,
      testTitle: selectedTest?.title || 'UGC NET Economics — Mock Test 01',
      completedAt: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      score,
      totalMarks,
      totalQuestions,
      correctCount,
      wrongCount,
      unattemptedCount,
      markedForReviewCount: markedCount,
      accuracy,
      percentile,
      timeTakenMinutes,
      userAnswers,
      topicBreakdown: topicStats,
      strongAreas: strongAreas.length > 0 ? strongAreas : ['Indian Economy — 90%', 'Micro Economics — 87%', 'International Economics — 80%'],
      weakAreas: weakAreas.length > 0 ? weakAreas : ['Econometrics — 50%', 'Statistics — 60%'],
      recommendation
    };

    setTestResult(calculatedResult);
    setTestHistory((prev) => {
      const updated = [calculatedResult, ...prev.slice(0, 19)];
      localStorage.setItem('netprep_test_history', JSON.stringify(updated));
      return updated;
    });

    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  }, [questions, userAnswers, selectedTest, timeRemainingSeconds]);

  // Load the standard sample result (142/200, 78% accuracy, 71 correct, 19 wrong, 10 unattempted)
  const loadSampleResult = () => {
    const totalQ = mockTest01Questions;
    const simulatedAnswers: Record<number, UserAnswer> = {};

    // Simulate 71 correct, 19 wrong, 10 unattempted
    totalQ.forEach((q, idx) => {
      if (idx < 71) {
        simulatedAnswers[q.id] = {
          questionId: q.id,
          selectedOption: q.correct_answer,
          state: 'answered',
          timeSpentSeconds: 65
        };
      } else if (idx < 90) {
        // wrong answer
        const wrongOpt = (q.correct_answer + 1) % 4;
        simulatedAnswers[q.id] = {
          questionId: q.id,
          selectedOption: wrongOpt,
          state: 'answered',
          timeSpentSeconds: 90
        };
      } else {
        // unattempted
        simulatedAnswers[q.id] = {
          questionId: q.id,
          selectedOption: null,
          state: 'not_visited',
          timeSpentSeconds: 15
        };
      }
    });

    const topicStats: Record<string, { total: number; correct: number; wrong: number; unattempted: number; accuracy: number }> = {
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

    const sample: TestResult = {
      testId: 1,
      testTitle: 'UGC NET Economics — Mock Test 01',
      completedAt: 'Just Now',
      score: 142,
      totalMarks: 200,
      totalQuestions: 100,
      correctCount: 71,
      wrongCount: 19,
      unattemptedCount: 10,
      markedForReviewCount: 4,
      accuracy: 78,
      percentile: 84.62,
      timeTakenMinutes: 137,
      userAnswers: simulatedAnswers,
      topicBreakdown: topicStats,
      strongAreas: [
        'Indian Economy — 90%',
        'Micro Economics — 87%',
        'International Economics — 80%'
      ],
      weakAreas: [
        'Econometrics — 50%',
        'Statistics — 60%'
      ],
      recommendation: 'Practice more questions from Econometrics and Statistics.'
    };

    setUserAnswers(simulatedAnswers);
    setTestResult(sample);
    setSelectedTest(MOCK_TESTS_CATALOG[0]);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const retryCurrentTest = () => {
    if (selectedTest) {
      confirmAndLaunchTest();
    } else {
      initiateTestStart(MOCK_TESTS_CATALOG[0]);
    }
  };

  return (
    <TestContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedTest,
        setSelectedTest,
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        userAnswers,
        timeRemainingSeconds,
        isTestActive,
        testResult,
        testHistory,
        studentProfile,
        updateStudentProfile,
        bookmarks,
        toggleBookmark,
        initiateTestStart,
        confirmAndLaunchTest,
        selectOption,
        clearResponse,
        toggleMarkForReview,
        goToNextQuestion,
        goToPreviousQuestion,
        jumpToQuestion,
        submitTest,
        retryCurrentTest,
        loadSampleResult,
        solutionsFilter,
        setSolutionsFilter,
        selectedTopicFilter,
        setSelectedTopicFilter
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
