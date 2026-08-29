export type Difficulty = 'Easy' | 'Moderate' | 'Hard';

export type ExamSubject = 'Economics' | 'Computer Science';

export type EconomicsTopic =
  | 'Micro Economics'
  | 'Macro Economics'
  | 'Mathematical Economics'
  | 'Econometrics'
  | 'International Economics'
  | 'Public Economics'
  | 'Money & Banking'
  | 'Development Economics'
  | 'Indian Economy'
  | 'Environmental Economics';

export type ComputerScienceTopic =
  | 'Discrete Mathematics & Optimization'
  | 'Computer System Architecture'
  | 'Programming Languages & CG'
  | 'Database Management Systems'
  | 'Operating Systems & System Software'
  | 'Software Engineering'
  | 'Data Structures & Algorithms'
  | 'Theory of Computation & Compilers'
  | 'Computer Networks & Security'
  | 'Artificial Intelligence';

export type SubjectTopic = EconomicsTopic | ComputerScienceTopic | string;

export interface Question {
  id: number;
  test_id: number;
  question: string;
  options: string[];
  correct_answer: number; // 0-indexed (0=A, 1=B, 2=C, 3=D)
  topic: SubjectTopic;
  difficulty: Difficulty;
  explanation: string;
  concept: string;
  subject?: ExamSubject;
  paper_section?: string;
}

export type QuestionState = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_and_marked';

export interface MockTest {
  id: number;
  title: string;
  subject: ExamSubject;
  subjectCode: string;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
  totalMarks: number;
  difficulty: Difficulty;
  isFree: boolean;
  category: 'Full Mock' | 'Topic Special' | 'Previous Year';
  topicsCovered: string[];
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
  subject?: ExamSubject;
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
  phone?: string;
  email: string;
  rollNumber: string;
  targetExam?: string;
  preferredSubject?: ExamSubject;
  isRegistered?: boolean;
  testsAttempted?: number;
  averageScore?: number;
  bestScore?: number;
  averageAccuracy?: number;
  currentRank?: number;
}

export interface SubmittedTestRecord {
  id: string;
  studentName: string;
  phoneNumber?: string;
  phone?: string;
  email?: string;
  studentEmail?: string;
  studentRoll?: string;
  testId: number;
  testTitle: string;
  subject?: ExamSubject;
  score: number;
  maxScore?: number;
  totalMarks: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unattemptedCount: number;
  accuracy: number; // in %
  percentile: number;
  timeTaken?: string;
  timeTakenMinutes: number;
  timestamp: string;
  formattedDate: string;
  strongAreas?: string[];
  weakAreas?: string[];
}
