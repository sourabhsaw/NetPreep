import { MockTest, EconomicsTopic } from '../types';

export const ALL_ECONOMICS_TOPICS: EconomicsTopic[] = [
  'Micro Economics',
  'Macro Economics',
  'Mathematical Economics',
  'Statistics',
  'Econometrics',
  'International Economics',
  'Public Economics',
  'Money & Banking',
  'Development Economics',
  'Indian Economy',
  'Environmental Economics',
  'Agricultural Economics',
  'Industrial Economics',
  'Labour Economics',
  'Growth Economics'
];

export const MOCK_TESTS_CATALOG: MockTest[] = [
  {
    id: 1,
    title: 'UGC NET Economics — Mock Test 01',
    description: 'Comprehensive 100-question full-length mock test based on latest NTA UGC NET Economics (Paper II) syllabus and pattern.',
    totalQuestions: 100,
    durationMinutes: 180,
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
    description: 'High-difficulty mock test with advanced problems in Econometrics, Mathematical Economics, and Microeconomic Theory.',
    totalQuestions: 100,
    durationMinutes: 180,
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
    description: 'Balanced full-length mock test featuring high-frequency UGC NET questions and Indian Economy current updates.',
    totalQuestions: 100,
    durationMinutes: 180,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ALL_ECONOMICS_TOPICS,
    attemptsCount: 2970
  },
  {
    id: 4,
    title: 'UGC NET Economics — Mock Test 04',
    description: 'Special emphasis on Microeconomics, Macroeconomics, Money & Banking, and Public Finance models.',
    totalQuestions: 100,
    durationMinutes: 180,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Micro Economics', 'Macro Economics', 'Money & Banking', 'Public Economics'],
    attemptsCount: 1890
  },
  {
    id: 5,
    title: 'UGC NET Economics — Mock Test 05',
    description: 'Analytical mock test with numerical optimization, matrix input-output, and advanced econometric model testing.',
    totalQuestions: 100,
    durationMinutes: 180,
    totalMarks: 200,
    difficulty: 'Hard',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Mathematical Economics', 'Statistics', 'Econometrics'],
    attemptsCount: 1540
  },
  {
    id: 6,
    title: 'UGC NET Economics — Mock Test 06',
    description: 'Focus on Indian Economic Policies, 15th/16th Finance Commission, Budgeting, and Environmental Sustainable Development.',
    totalQuestions: 100,
    durationMinutes: 180,
    totalMarks: 200,
    difficulty: 'Moderate',
    isFree: false,
    category: 'Full Mock',
    topicsCovered: ['Indian Economy', 'Development Economics', 'Environmental Economics', 'Agricultural Economics'],
    attemptsCount: 2130
  }
];

export const INITIAL_STUDENT_PROFILE = {
  name: 'Rahul',
  email: 'rahul.ugcnet@example.com',
  rollNumber: 'UGC-NET-2026-8941',
  targetExam: 'UGC NET / JRF Economics Dec 2026',
  testsAttempted: 8,
  averageScore: 146,
  bestScore: 178,
  averageAccuracy: 81,
  currentRank: 27
};
