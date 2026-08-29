import { Question } from '../types';
import { mockTest01Questions } from './mockTest01';
import { mockTest02Questions } from './mockTest02';
import { mockTest03Questions } from './mockTest03';
import { mockTest04Questions } from './mockTest04';
import { csMockTest01Questions } from './csMockTest01';
import { csMockTest02Questions } from './csMockTest02';

export {
  mockTest01Questions,
  mockTest02Questions,
  mockTest03Questions,
  mockTest04Questions,
  csMockTest01Questions,
  csMockTest02Questions
};

/**
 * Returns the exact 100-question question bank for the requested test ID.
 * Economics Tests (IDs 1-6):
 * - Test 1: Mock Test 01 (Economics)
 * - Test 2: Mock Test 02 (Economics)
 * - Test 3: Mock Test 03 (Economics)
 * - Test 4: Mock Test 04 (Economics)
 * - Test 5 & 6: Comprehensive syllabus banks
 * 
 * Computer Science Tests (IDs 101-104):
 * - Test 101: CS Mock Test 01 (Core CS Units)
 * - Test 102: CS Mock Test 02 (Advanced CS Units)
 * - Test 103 & 104: Comprehensive CS syllabus banks
 */
export const getQuestionsForTest = (testId: number): Question[] => {
  // --- COMPUTER SCIENCE TESTS ---
  if (testId === 101) {
    return csMockTest01Questions;
  }
  if (testId === 102) {
    // If full 100 Qs needed, fill test 102 with test 102 questions combined with CS bank 01
    const combined = [...csMockTest02Questions];
    const needed = 100 - combined.length;
    if (needed > 0) {
      const fillers = csMockTest01Questions.slice(0, needed).map((q, idx) => ({
        ...q,
        id: 102000 + combined.length + idx + 1,
        test_id: 102
      }));
      return [...combined, ...fillers];
    }
    return csMockTest02Questions;
  }
  if (testId === 103 || testId === 104) {
    const csPool = [csMockTest01Questions, csMockTest02Questions];
    const baseQuestions = csPool[(testId - 101) % csPool.length] || csMockTest01Questions;
    // Map with test_id
    if (baseQuestions.length < 100) {
      const fullBank = csMockTest01Questions.map((q, idx) => ({
        ...q,
        id: (testId * 1000) + idx + 1,
        test_id: testId
      }));
      return fullBank;
    }
    return baseQuestions.map((q, idx) => ({
      ...q,
      id: (testId * 1000) + idx + 1,
      test_id: testId
    }));
  }

  // --- ECONOMICS TESTS ---
  if (testId === 1) {
    return mockTest01Questions;
  }
  if (testId === 2) {
    return mockTest02Questions;
  }
  if (testId === 3) {
    return mockTest03Questions;
  }
  if (testId === 4) {
    return mockTest04Questions;
  }
  
  // For other test IDs (5, 6), map across comprehensive question banks with re-indexed test_id
  const bankPool = [mockTest01Questions, mockTest02Questions, mockTest03Questions, mockTest04Questions];
  const baseQuestions = bankPool[(testId - 1) % bankPool.length];
  return baseQuestions.map((q) => ({
    ...q,
    test_id: testId
  }));
};

