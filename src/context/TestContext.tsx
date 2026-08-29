import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  MockTest,
  Question,
  UserAnswer,
  TestResult,
  StudentProfile,
  QuestionState,
  SubmittedTestRecord,
  ExamSubject
} from '../types';
import { getQuestionsForTest, mockTest01Questions } from '../data/questionsData';
import { MOCK_TESTS_CATALOG, INITIAL_STUDENT_PROFILE } from '../data/mockTestsData';
import {
  initAuth,
  saveStudentToFirestore,
  saveTestResultToFirestore,
  subscribeToTestResults,
  deleteTestResultFromFirestore
} from '../firebase';
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
  | 'admin_scores'
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
  registerStudent: (details: { name: string; phone: string; email: string }) => Promise<void>;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isFirestoreConnected: boolean;
  bookmarks: number[];
  toggleBookmark: (questionId: number) => void;
  
  // Subject Navigation & Filters
  selectedSubjectFilter: ExamSubject | 'All';
  setSelectedSubjectFilter: (subject: ExamSubject | 'All') => void;
  navigateToSubjectTests: (subject: ExamSubject) => void;

  // Admin Submitted Scores Log
  submittedRecords: SubmittedTestRecord[];
  deleteSubmittedRecord: (id: string) => Promise<void>;
  clearAllSubmittedRecords: () => void;
  addSubmittedRecord: (record: SubmittedTestRecord) => void;
  viewRecordResult: (record: SubmittedTestRecord) => void;

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

const DEFAULT_SAMPLE_SUBMISSIONS: SubmittedTestRecord[] = [
  {
    id: 'rec_init_cs_1',
    studentName: 'Vikramaditya Roy',
    phoneNumber: '9845123980',
    phone: '9845123980',
    email: 'vikram.cs@example.com',
    studentEmail: 'vikram.cs@example.com',
    studentRoll: 'UGC-NET-2026-6192',
    testId: 101,
    testTitle: 'UGC NET Computer Science — Mock Test 01',
    subject: 'Computer Science',
    score: 168,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 84,
    wrongCount: 11,
    unattemptedCount: 5,
    accuracy: 88,
    percentile: 96.5,
    timeTaken: '104 min',
    timeTakenMinutes: 104,
    timestamp: new Date(Date.now() - 3600000 * 1).toISOString(),
    formattedDate: 'Today, 03:20 PM',
    strongAreas: ['Data Structures & Algorithms — 95%', 'Operating Systems — 90%'],
    weakAreas: ['Theory of Computation — 60%']
  },
  {
    id: 'rec_init_1',
    studentName: 'Rahul Sharma',
    phoneNumber: '9876543210',
    phone: '9876543210',
    email: 'rahul.ugcnet@example.com',
    studentEmail: 'rahul.ugcnet@example.com',
    studentRoll: 'UGC-NET-2026-8941',
    testId: 1,
    testTitle: 'UGC NET Economics — Mock Test 01',
    subject: 'Economics',
    score: 142,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 71,
    wrongCount: 19,
    unattemptedCount: 10,
    accuracy: 78,
    percentile: 84.62,
    timeTaken: '98 min',
    timeTakenMinutes: 98,
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    formattedDate: 'Today, 02:45 PM',
    strongAreas: ['Indian Economy — 90%', 'Micro Economics — 87%'],
    weakAreas: ['Econometrics — 50%', 'Statistics — 60%']
  },
  {
    id: 'rec_init_cs_2',
    studentName: 'Sneha Venkatesh',
    phoneNumber: '9940128765',
    phone: '9940128765',
    email: 'sneha.gate@example.com',
    studentEmail: 'sneha.gate@example.com',
    studentRoll: 'UGC-NET-2026-9043',
    testId: 101,
    testTitle: 'UGC NET Computer Science — Mock Test 01',
    subject: 'Computer Science',
    score: 176,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 88,
    wrongCount: 8,
    unattemptedCount: 4,
    accuracy: 92,
    percentile: 98.1,
    timeTaken: '110 min',
    timeTakenMinutes: 110,
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    formattedDate: 'Today, 11:30 AM',
    strongAreas: ['DBMS — 95%', 'Computer Networks — 90%'],
    weakAreas: ['Discrete Mathematics — 65%']
  },
  {
    id: 'rec_init_2',
    studentName: 'Ankit Deshmukh',
    phoneNumber: '9823419087',
    phone: '9823419087',
    email: 'ankit.jrf@example.com',
    studentEmail: 'ankit.jrf@example.com',
    studentRoll: 'UGC-NET-2026-3312',
    testId: 1,
    testTitle: 'UGC NET Economics — Mock Test 01',
    subject: 'Economics',
    score: 184,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 92,
    wrongCount: 6,
    unattemptedCount: 2,
    accuracy: 94,
    percentile: 99.4,
    timeTaken: '105 min',
    timeTakenMinutes: 105,
    timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
    formattedDate: 'Today, 10:15 AM',
    strongAreas: ['Macro Economics — 96%', 'Mathematical Economics — 92%'],
    weakAreas: ['Econometrics — 66%']
  },
  {
    id: 'rec_init_3',
    studentName: 'Priya Mukherjee',
    phoneNumber: '9811223344',
    phone: '9811223344',
    email: 'priya.mukh@example.com',
    studentEmail: 'priya.mukh@example.com',
    studentRoll: 'UGC-NET-2026-4489',
    testId: 2,
    testTitle: 'UGC NET Economics — Mock Test 02',
    subject: 'Economics',
    score: 178,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 89,
    wrongCount: 8,
    unattemptedCount: 3,
    accuracy: 91,
    percentile: 98.2,
    timeTaken: '112 min',
    timeTakenMinutes: 112,
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    formattedDate: 'Yesterday, 04:30 PM',
    strongAreas: ['International Economics — 90%', 'Money & Banking — 88%'],
    weakAreas: ['Micro Economics — 65%']
  },
  {
    id: 'rec_init_4',
    studentName: 'Pooja Agarwal',
    phoneNumber: '9765432109',
    phone: '9765432109',
    email: 'pooja.eco@example.com',
    studentEmail: 'pooja.eco@example.com',
    studentRoll: 'UGC-NET-2026-7821',
    testId: 1,
    testTitle: 'UGC NET Economics — Mock Test 01',
    subject: 'Economics',
    score: 156,
    maxScore: 200,
    totalMarks: 200,
    totalQuestions: 100,
    correctCount: 78,
    wrongCount: 14,
    unattemptedCount: 8,
    accuracy: 85,
    percentile: 91.8,
    timeTaken: '115 min',
    timeTakenMinutes: 115,
    timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
    formattedDate: '2 days ago',
    strongAreas: ['Public Economics — 85%', 'Micro Economics — 82%'],
    weakAreas: ['Econometrics — 55%']
  }
];

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedTest, setSelectedTest] = useState<MockTest | null>(MOCK_TESTS_CATALOG[0]);
  const [questions, setQuestions] = useState<Question[]>(mockTest01Questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(120 * 60);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [testHistory, setTestHistory] = useState<TestResult[]>([]);
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    try {
      const savedProfile = localStorage.getItem('netprep_student_profile');
      if (savedProfile) {
        return JSON.parse(savedProfile);
      }
    } catch (e) {
      // ignore
    }
    return {
      name: '',
      phone: '',
      email: '',
      rollNumber: `UGC-NET-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      targetExam: 'UGC NET / JRF Economics Dec 2026',
      isRegistered: false,
      testsAttempted: 0,
      averageScore: 0,
      bestScore: 0,
      averageAccuracy: 0,
      currentRank: 1
    };
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isFirestoreConnected, setIsFirestoreConnected] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [solutionsFilter, setSolutionsFilter] = useState<'all' | 'wrong' | 'correct' | 'unattempted' | 'marked'>('all');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('All');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<ExamSubject | 'All'>('All');
  const [submittedRecords, setSubmittedRecords] = useState<SubmittedTestRecord[]>([]);

  const navigateToSubjectTests = (subject: ExamSubject) => {
    setSelectedSubjectFilter(subject);
    setCurrentView('tests');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize Firebase Auth & Real-Time Firestore Sync
  useEffect(() => {
    initAuth().catch((err) => console.warn('Auth init note:', err));

    // Load initial local history and bookmarks
    try {
      const savedHistory = localStorage.getItem('netprep_test_history');
      if (savedHistory) setTestHistory(JSON.parse(savedHistory));

      const savedBookmarks = localStorage.getItem('netprep_bookmarks');
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));

      const savedAdminScores = localStorage.getItem('netprep_admin_submitted_scores');
      if (savedAdminScores) {
        setSubmittedRecords(JSON.parse(savedAdminScores));
      } else {
        setSubmittedRecords(DEFAULT_SAMPLE_SUBMISSIONS);
      }
    } catch (e) {
      console.error('Error loading local state', e);
    }

    // Subscribe to live Firestore `test_results` collection
    const unsubscribe = subscribeToTestResults(
      (firestoreRecords) => {
        setIsFirestoreConnected(true);
        if (firestoreRecords.length > 0) {
          setSubmittedRecords(firestoreRecords);
          try {
            localStorage.setItem('netprep_admin_submitted_scores', JSON.stringify(firestoreRecords));
          } catch (e) {
            // safe storage
          }
        }
      },
      (err) => {
        console.warn('Firestore live listener offline fallback:', err);
        setIsFirestoreConnected(false);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Register Student Profile in State & Firestore
  const registerStudent = async (details: { name: string; phone: string; email: string }) => {
    const updatedProfile: StudentProfile = {
      ...studentProfile,
      name: details.name.trim(),
      phone: details.phone.trim(),
      email: details.email.trim().toLowerCase(),
      isRegistered: true,
      rollNumber: studentProfile.rollNumber || `UGC-NET-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
    };

    setStudentProfile(updatedProfile);
    try {
      localStorage.setItem('netprep_student_profile', JSON.stringify(updatedProfile));
    } catch (e) {
      // safe storage
    }

    // Push to Firestore students collection
    await saveStudentToFirestore({
      name: updatedProfile.name,
      phone: updatedProfile.phone || '',
      email: updatedProfile.email,
      rollNumber: updatedProfile.rollNumber
    });
  };

  // Update profile without full re-registration
  const updateStudentProfile = (newProfile: Partial<StudentProfile>) => {
    setStudentProfile((prev) => {
      const updated = { ...prev, ...newProfile };
      try {
        localStorage.setItem('netprep_student_profile', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
      return updated;
    });

    if (newProfile.name || newProfile.phone || newProfile.email) {
      saveStudentToFirestore({
        name: newProfile.name || studentProfile.name,
        phone: newProfile.phone || studentProfile.phone || '',
        email: newProfile.email || studentProfile.email,
        rollNumber: newProfile.rollNumber || studentProfile.rollNumber
      }).catch((e) => console.warn('Sync profile note:', e));
    }
  };

  // Admin record management
  const deleteSubmittedRecord = async (id: string) => {
    setSubmittedRecords((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      try {
        localStorage.setItem('netprep_admin_submitted_scores', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
      return updated;
    });

    // Also delete from Firestore
    await deleteTestResultFromFirestore(id);
  };

  const clearAllSubmittedRecords = () => {
    setSubmittedRecords([]);
    try {
      localStorage.setItem('netprep_admin_submitted_scores', JSON.stringify([]));
    } catch (e) {
      // safe storage
    }
  };

  const addSubmittedRecord = async (record: SubmittedTestRecord) => {
    setSubmittedRecords((prev) => {
      const updated = [record, ...prev];
      try {
        localStorage.setItem('netprep_admin_submitted_scores', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
      return updated;
    });

    // Also push to Firestore
    await saveTestResultToFirestore(record);
  };

  const viewRecordResult = (record: SubmittedTestRecord) => {
    const reconstructedResult: TestResult = {
      testId: record.testId,
      testTitle: record.testTitle,
      completedAt: record.formattedDate,
      score: record.score,
      totalMarks: record.totalMarks || record.maxScore || 200,
      totalQuestions: record.totalQuestions || 100,
      correctCount: record.correctCount,
      wrongCount: record.wrongCount,
      unattemptedCount: record.unattemptedCount,
      markedForReviewCount: 2,
      accuracy: record.accuracy,
      percentile: record.percentile,
      timeTakenMinutes: record.timeTakenMinutes,
      userAnswers: {},
      topicBreakdown: {
        'Micro Economics': { total: 15, correct: 13, wrong: 2, unattempted: 0, accuracy: 87 },
        'Macro Economics': { total: 15, correct: 11, wrong: 3, unattempted: 1, accuracy: 73 },
        'Statistics': { total: 10, correct: 6, wrong: 4, unattempted: 0, accuracy: 60 },
        'Econometrics': { total: 10, correct: 5, wrong: 4, unattempted: 1, accuracy: 50 },
        'International Economics': { total: 10, correct: 8, wrong: 2, unattempted: 0, accuracy: 80 },
        'Indian Economy': { total: 10, correct: 9, wrong: 1, unattempted: 0, accuracy: 90 },
        'Public Economics': { total: 8, correct: 6, wrong: 2, unattempted: 0, accuracy: 75 },
        'Money & Banking': { total: 8, correct: 6, wrong: 1, unattempted: 1, accuracy: 86 }
      },
      strongAreas: record.strongAreas || ['Indian Economy — 90%', 'Micro Economics — 87%'],
      weakAreas: record.weakAreas || ['Econometrics — 50%', 'Statistics — 60%'],
      recommendation: `Candidate ${record.studentName} performed with ${record.accuracy}% accuracy (${record.score}/${record.totalMarks || 200}). Recommend focusing on numerical problem-solving and weak topic revision.`
    };

    setTestResult(reconstructedResult);
    const foundTest = MOCK_TESTS_CATALOG.find((t) => t.id === record.testId) || MOCK_TESTS_CATALOG[0];
    setSelectedTest(foundTest);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle bookmark
  const toggleBookmark = (questionId: number) => {
    setBookmarks((prev) => {
      const updated = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      try {
        localStorage.setItem('netprep_bookmarks', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
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
    // If student has not provided name or is missing, trigger registration modal
    if (!studentProfile.name || studentProfile.name.trim().length < 2) {
      setIsAuthModalOpen(true);
      return;
    }

    const totalQ = getQuestionsForTest(selectedTest?.id || 1);
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

    const testDurationMin = selectedTest?.durationMinutes || 120;

    setUserAnswers(initialAnswers);
    setCurrentQuestionIndex(0);
    setTimeRemainingSeconds(testDurationMin * 60);
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

  // Calculate & Submit Test Result (Syncs to Firestore `test_results`)
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
    
    const testTotalDurationMin = selectedTest?.durationMinutes || 120;
    const timeTakenSeconds = (testTotalDurationMin * 60) - timeRemainingSeconds;
    const timeTakenMinutes = Math.max(1, Math.round(timeTakenSeconds / 60));
    const timeTakenFormatted = `${timeTakenMinutes} min`;

    let recommendation = 'Practice more questions from Econometrics and Statistics to strengthen conceptual clarity.';
    if (weakAreas.length > 0) {
      const topWeak = weakAreas.slice(0, 2).map(w => w.split(' — ')[0]).join(' and ');
      recommendation = `Practice more questions from ${topWeak}. Focus on numerical problem solving and formula revision.`;
    }

    const currentSubject = selectedTest?.subject || (selectedTest?.title.includes('Computer Science') ? 'Computer Science' : 'Economics');

    const calculatedResult: TestResult = {
      testId: selectedTest?.id || 1,
      testTitle: selectedTest?.title || 'UGC NET Economics — Mock Test 01',
      subject: currentSubject,
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
      strongAreas: strongAreas.length > 0 ? strongAreas : (currentSubject === 'Computer Science' ? ['Data Structures & Algorithms — 90%', 'DBMS — 85%'] : ['Indian Economy — 90%', 'Micro Economics — 87%']),
      weakAreas: weakAreas.length > 0 ? weakAreas : (currentSubject === 'Computer Science' ? ['Theory of Computation — 55%'] : ['Econometrics — 50%']),
      recommendation
    };

    setTestResult(calculatedResult);
    setTestHistory((prev) => {
      const updated = [calculatedResult, ...prev.slice(0, 19)];
      try {
        localStorage.setItem('netprep_test_history', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
      return updated;
    });

    // Complete Student Test Record object for Firestore & Admin
    const newStudentLog: SubmittedTestRecord = {
      id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      studentName: studentProfile.name || 'Candidate',
      phoneNumber: studentProfile.phone || '',
      phone: studentProfile.phone || '',
      email: studentProfile.email || '',
      studentEmail: studentProfile.email || '',
      studentRoll: studentProfile.rollNumber || `UGC-NET-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      testId: selectedTest?.id || 1,
      testTitle: selectedTest?.title || 'UGC NET Economics — Mock Test 01',
      subject: currentSubject,
      score,
      maxScore: totalMarks,
      totalMarks,
      totalQuestions,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy,
      percentile,
      timeTaken: timeTakenFormatted,
      timeTakenMinutes,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      strongAreas: strongAreas.length > 0 ? strongAreas : (currentSubject === 'Computer Science' ? ['Data Structures & Algorithms — 90%', 'DBMS — 85%'] : ['Indian Economy — 90%', 'Micro Economics — 87%']),
      weakAreas: weakAreas.length > 0 ? weakAreas : (currentSubject === 'Computer Science' ? ['Theory of Computation — 55%'] : ['Econometrics — 50%'])
    };

    // 1. Update local records immediately for zero latency
    setSubmittedRecords((prev) => {
      const updated = [newStudentLog, ...prev];
      try {
        localStorage.setItem('netprep_admin_submitted_scores', JSON.stringify(updated));
      } catch (e) {
        // safe storage
      }
      return updated;
    });

    // 2. Real-Time Sync to Firebase Firestore
    saveTestResultToFirestore(newStudentLog).then((docId) => {
      if (docId) {
        console.log('✅ Real-time score synced to Firestore, Doc ID:', docId);
      }
    }).catch((err) => {
      console.warn('Firestore sync note:', err);
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
  }, [questions, userAnswers, selectedTest, timeRemainingSeconds, studentProfile]);

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
      timeTakenMinutes: 98,
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
        registerStudent,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isFirestoreConnected,
        bookmarks,
        toggleBookmark,
        submittedRecords,
        deleteSubmittedRecord,
        clearAllSubmittedRecords,
        addSubmittedRecord,
        viewRecordResult,
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
        setSelectedTopicFilter,
        selectedSubjectFilter,
        setSelectedSubjectFilter,
        navigateToSubjectTests
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


