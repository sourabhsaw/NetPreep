import { Question } from '../types';
import { mockTest01Questions } from './mockTest01';
import { mockTest02Questions } from './mockTest02';
import { mockTest03Questions } from './mockTest03';
import { mockTest04Questions } from './mockTest04';

export { mockTest01Questions, mockTest02Questions, mockTest03Questions, mockTest04Questions };

/**
 * Returns the exact 100-question question bank for the requested test ID.
 * Test 1 returns Mock Test 01 (100 distinct UGC NET Economics questions)
 * Test 2 returns Mock Test 02 (100 distinct UGC NET Economics questions)
 * Test 3 returns Mock Test 03 (100 distinct UGC NET Economics questions)
 * Test 4 returns Mock Test 04 (100 distinct UGC NET Economics questions)
 * Tests 5 & 6 dynamically cycle high-yield full syllabus banks.
 */
export const getQuestionsForTest = (testId: number): Question[] => {
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
