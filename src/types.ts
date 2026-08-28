export type Difficulty = 'Easy' | 'Moderate' | 'Hard';

export type EconomicsTopic =
  | 'Micro Economics'
  | 'Macro Economics'
  | 'Mathematical Economics'
  | 'Statistics'
  | 'Econometrics'
  | 'International Economics'
  | 'Public Economics'
  | 'Money & Banking'
  | 'Development Economics'
  | 'Indian Economy'
  | 'Environmental Economics'
  | 'Agricultural Economics'
  | 'Industrial Economics'
  | 'Labour Economics'
  | 'Growth Economics';

export interface Question {
  id: number;
  test_id: number;
  question: string;
  options: string[];
  correct_answer: number; // 0-indexed (0=A, 1=B, 2=C, 3=D)
  topic: EconomicsTopic;
  difficulty: Difficulty;
  explanation: string;
  concept: string;
  paper_section?: string;
}

export type QuestionState = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked';

export interface MockTest {
  id: number;
  title: string;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
  totalMarks: number;
  difficulty: Difficulty;
  isFree: boolean;
  category: 'Full Mock' | 'Topic Special' | 'Previous Year';
  topicsCovered: EconomicsTopic[];
  attemptsCount: number;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number | null; // 0, 1, 2, 3 or null
  state: QuestionState;
  timeSpentSeconds: number;
  isBookmarked?: boolean;
}

export interface TestResult {
  testId: number;
  testTitle: string;
  completedAt: string;
  score: number;
  totalMarks: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unattemptedCount: number;
  markedForReviewCount: number;
  accuracy: number; // in %
  percentile: number;
  timeTakenMinutes: number;
  userAnswers: Record<number, UserAnswer>;
  topicBreakdown: Record<string, {
    total: number;
    correct: number;
    wrong: number;
    unattempted: number;
    accuracy: number;
  }>;
  strongAreas: string[];
  weakAreas: string[];
  recommendation: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  score: number;
  totalMarks: number;
  accuracy: number;
  timeTaken: string;
  avatarBg: string;
  isCurrentUser?: boolean;
  city?: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  rollNumber: string;
  targetExam: string;
  testsAttempted: number;
  averageScore: number;
  bestScore: number;
  averageAccuracy: number;
  currentRank: number;
}
