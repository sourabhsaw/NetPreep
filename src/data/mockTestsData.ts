import { MockTest, EconomicsTopic, ComputerScienceTopic } from '../types';

export const ALL_ECONOMICS_TOPICS: EconomicsTopic[] = [
  'Micro Economics',
  'Macro Economics',
  'Mathematical Economics',
  'Econometrics',
  'International Economics',
  'Public Economics',
  'Money & Banking',
  'Development Economics',
  'Indian Economy',
  'Environmental Economics'
];

export const ALL_CS_TOPICS: ComputerScienceTopic[] = [
  'Discrete Mathematics & Optimization',
  'Computer System Architecture',
  'Programming Languages & CG',
  'Database Management Systems',
  'Operating Systems & System Software',
  'Software Engineering',
  'Data Structures & Algorithms',
  'Theory of Computation & Compilers',
  'Computer Networks & Security',
  'Artificial Intelligence'
];

export const MOCK_TESTS_CATALOG: MockTest[] = [
  // --- UGC NET ECONOMICS (Paper Code: 01) ---
  {
    id: 1,
    title: 'UGC NET Economics — Mock Test 01',
    subject: 'Economics',
    subjectCode: '01',
    description: 'Comprehensive 100-question full-length mock test based on latest NTA UGC NET Economics (Paper II) syllabus and CBT pattern.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: true,
    category: 'Full Mock',
    topicsCovered: ALL_ECONOMICS_TOPICS,
    attemptsCount: 3840
  },
  {
    id: 2,
    title: 'UGC NET Economics — Mock Test 02',
    subject: 'Economics',
    subjectCode: '01',
    description: 'High-difficulty mock test with 100 distinct questions covering Econometrics, Mathematical Economics, Micro & Macro Theory, and Indian Economy.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Hard',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ALL_ECONOMICS_TOPICS,
    attemptsCount: 2410
  },
  {
    id: 3,
    title: 'UGC NET Economics — Mock Test 03',
    subject: 'Economics',
    subjectCode: '01',
    description: 'Balanced full-length mock test featuring high-frequency UGC NET questions and Indian Economy current updates.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ALL_ECONOMICS_TOPICS,
    attemptsCount: 2970
  },
  {
    id: 4,
    title: 'UGC NET Dec 2025 — Mock Test 04 (Paper 1 + Paper 2)',
    subject: 'Economics',
    subjectCode: '01',
    description: 'Complete 150-question full-length UGC NET Dec 2025 pattern test: Q1-Q50 General Paper 1 (Teaching & Research Aptitude) + Q51-Q150 Economics Core Syllabus.',
    totalQuestions: 150,
    durationMinutes: 180,
    totalMarks: 300,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Paper 1 (General Paper)', ...ALL_ECONOMICS_TOPICS],
    attemptsCount: 3120
  },
  {
    id: 5,
    title: 'UGC NET Economics — Mock Test 05',
    subject: 'Economics',
    subjectCode: '01',
    description: 'Analytical mock test with numerical optimization, matrix input-output, and advanced econometric model testing.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Hard',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Mathematical Economics', 'Econometrics', 'Micro Economics', 'Macro Economics'],
    attemptsCount: 1540
  },
  {
    id: 6,
    title: 'UGC NET Economics — Mock Test 06',
    subject: 'Economics',
    subjectCode: '01',
    description: 'Focus on Indian Economic Policies, 15th/16th Finance Commission, Budgeting, and Environmental Sustainable Development.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Indian Economy', 'Development Economics', 'Environmental Economics', 'Public Economics'],
    attemptsCount: 2130
  },

  // --- UGC NET COMPUTER SCIENCE & APPLICATIONS (Paper Code: 87) ---
  {
    id: 101,
    title: 'UGC NET Computer Science — Mock Test 01',
    subject: 'Computer Science',
    subjectCode: '87',
    description: 'Full syllabus 100-question mock test covering Discrete Math, DBMS, OS, Computer Networks, Data Structures & Algorithms, and TOC as per latest NTA pattern.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: true,
    category: 'Full Mock',
    topicsCovered: ALL_CS_TOPICS,
    attemptsCount: 4120
  },
  {
    id: 102,
    title: 'UGC NET Computer Science — Mock Test 02',
    subject: 'Computer Science',
    subjectCode: '87',
    description: 'Advanced mock test focusing on Theory of Computation, Compiler Design, Database Normalization, Computer Architecture, and Artificial Intelligence.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Hard',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ALL_CS_TOPICS,
    attemptsCount: 2890
  },
  {
    id: 103,
    title: 'UGC NET Computer Science — Mock Test 03',
    subject: 'Computer Science',
    subjectCode: '87',
    description: 'Core systems mock test covering Operating Systems, Computer Networks, Software Engineering, and Computer Graphics with detailed step-by-step solutions.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Operating Systems & System Software', 'Computer Networks & Security', 'Software Engineering', 'Database Management Systems'],
    attemptsCount: 2340
  },
  {
    id: 104,
    title: 'UGC NET Computer Science — Mock Test 04',
    subject: 'Computer Science',
    subjectCode: '87',
    description: 'Algorithms & Optimization special mock test covering Dynamic Programming, Graph Algorithms, Discrete Mathematics, LPP, and AI heuristic search.',
    totalQuestions: 100,
    durationMinutes: 120,
    totalMarks: 200,
    difficulty: 'Hard',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Data Structures & Algorithms', 'Discrete Mathematics & Optimization', 'Artificial Intelligence', 'Theory of Computation & Compilers'],
    attemptsCount: 1980
  }
];

export const INITIAL_STUDENT_PROFILE = {
  name: 'Rahul',
  email: 'rahul.ugcnet@example.com',
  rollNumber: 'UGC-NET-2026-8941',
  targetExam: 'UGC NET / JRF Dec 2026',
  preferredSubject: 'Economics' as const,
  testsAttempted: 8,
  averageScore: 146,
  bestScore: 178,
  averageAccuracy: 81,
  currentRank: 27
};

