import { Question } from '../types';
import { mockTest4Paper1Questions } from './mockTest4Paper1';
import { mockTest4Paper2Part1Questions } from './mockTest4Paper2Part1';
import { mockTest4Paper2Part2Questions } from './mockTest4Paper2Part2';

/**
 * UGC NET Dec 2025 Complete Full-Length Mock Test 04
 * - Paper 1 (Q1 - Q50): General Teaching & Research Aptitude (50 Questions / 100 Marks)
 * - Paper 2 (Q51 - Q150): Economics Core Syllabus (100 Questions / 200 Marks)
 * Total: 150 Questions / 300 Marks / 180 Minutes (3 Hours)
 */
export const mockTest4Questions: Question[] = [
  ...mockTest4Paper1Questions,
  ...mockTest4Paper2Part1Questions,
  ...mockTest4Paper2Part2Questions
];

export const mockTest04Questions = mockTest4Questions;
export default mockTest4Questions;
