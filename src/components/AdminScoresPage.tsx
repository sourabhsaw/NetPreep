import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import { SubmittedTestRecord } from '../types';
import {
  ShieldCheck,
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  Award,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileSpreadsheet,
  Plus,
  RefreshCw,
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const AdminScoresPage: React.FC = () => {
  const {
    submittedRecords,
    deleteSubmittedRecord,
    clearAllSubmittedRecords,
    addSubmittedRecord,
    viewRecordResult,
    setCurrentView,
    studentProfile
  } = useTest();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestFilter, setSelectedTestFilter] = useState<string>('All');
  const [selectedTierFilter, setSelectedTierFilter] = useState<'All' | 'JRF' | 'Lectureship' | 'Below Cutoff'>('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New manual candidate submission state
  const [newEntry, setNewEntry] = useState({
    studentName: '',
    studentEmail: '',
    studentRoll: '',
    testTitle: 'UGC NET Economics — Mock Test 01',
    score: 150,
    accuracy: 80,
    timeTakenMinutes: 110
  });

  // Filtered records
  const filteredRecords = submittedRecords.filter((record) => {
    const matchesSearch =
      record.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.testTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (record.studentRoll && record.studentRoll.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (record.studentEmail && record.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTest = selectedTestFilter === 'All' || record.testTitle.includes(selectedTestFilter);

    let matchesTier = true;
    if (selectedTierFilter === 'JRF') matchesTier = record.score >= 160;
    else if (selectedTierFilter === 'Lectureship') matchesTier = record.score >= 136 && record.score < 160;
    else if (selectedTierFilter === 'Below Cutoff') matchesTier = record.score < 136;

    return matchesSearch && matchesTest && matchesTier;
  });

  // Calculate high-level aggregates
  const totalSubmissions = submittedRecords.length;
  const avgScore =
    totalSubmissions > 0
      ? Math.round(submittedRecords.reduce((acc, r) => acc + r.score, 0) / totalSubmissions)
      : 0;
  const highestScore =
    totalSubmissions > 0 ? Math.max(...submittedRecords.map((r) => r.score)) : 0;
  const avgAccuracy =
    totalSubmissions > 0
      ? Math.round(submittedRecords.reduce((acc, r) => acc + r.accuracy, 0) / totalSubmissions)
      : 0;

  // Export to CSV
  const handleExportCSV = () => {
    if (submittedRecords.length === 0) return;

    const headers = [
      'Submission ID',
      'Student Name',
      'Roll Number',
      'Email',
      'Test Title',
      'Score (out of 200)',
      'Accuracy (%)',
      'Correct Count',
      'Wrong Count',
      'Unattempted Count',
      'Percentile',
      'Time Taken (Min)',
      'Date & Time'
    ];

    const rows = submittedRecords.map((r) => [
      `"${r.id}"`,
      `"${r.studentName}"`,
      `"${r.studentRoll || 'N/A'}"`,
      `"${r.studentEmail || 'N/A'}"`,
      `"${r.testTitle}"`,
      r.score,
      r.accuracy,
      r.correctCount,
      r.wrongCount,
      r.unattemptedCount,
      r.percentile,
      r.timeTakenMinutes,
      `"${r.formattedDate || r.timestamp}"`
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NETPrep_Student_Scores_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add manual entry
  const handleAddManualSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCount = Math.round(newEntry.score / 2);
    const wrongCount = Math.max(0, Math.round(((100 - newEntry.accuracy) / 100) * (newEntry.score / 2)));
    const unattemptedCount = Math.max(0, 100 - (correctCount + wrongCount));

    const newRecord: SubmittedTestRecord = {
      id: 'sub_manual_' + Date.now(),
      studentName: newEntry.studentName || 'Aspirant',
      studentEmail: newEntry.studentEmail || 'aspirant@netprep.in',
      studentRoll: newEntry.studentRoll || `UGC-NET-${Math.floor(1000 + Math.random() * 9000)}`,
      testId: 1,
      testTitle: newEntry.testTitle,
      score: Number(newEntry.score),
      totalMarks: 200,
      totalQuestions: 100,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy: Number(newEntry.accuracy),
      percentile: Number(Math.min(99.9, Math.max(50, (newEntry.score / 200) * 95 + 4)).toFixed(2)),
      timeTakenMinutes: Number(newEntry.timeTakenMinutes),
      timestamp: new Date().toISOString(),
      formattedDate: 'Just Now (Manual Entry)',
      strongAreas: ['Micro Economics — 85%', 'Macro Economics — 82%'],
      weakAreas: ['Econometrics — 55%']
    };

    addSubmittedRecord(newRecord);
    setShowAddModal(false);
    setNewEntry({
      studentName: '',
      studentEmail: '',
      studentRoll: '',
      testTitle: 'UGC NET Economics — Mock Test 01',
      score: 150,
      accuracy: 80,
      timeTakenMinutes: 110
    });
  };

  return (
    <div id="admin-scores-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Owner & Admin Portal • Student Test Records</span>
            </div>

            <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Candidate Test Scorecards & Logs
            </h1>

            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Real-time persistent repository of all submitted UGC NET Economics mock tests. View individual performance scorecards, accuracy rates, and export candidate data.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCSV}
              disabled={submittedRecords.length === 0}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export to CSV (Excel)</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Record New Score</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Aggregate Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Total Submissions</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
            {totalSubmissions}
          </p>
          <p className="text-[11px] text-indigo-600 font-semibold">Persisted in local storage</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Average Score</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-blue-600">
            {avgScore} <span className="text-sm font-normal text-slate-500">/ 200</span>
          </p>
          <p className="text-[11px] text-slate-500">Class Average</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Highest Score</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-amber-500">
            {highestScore} <span className="text-sm font-normal text-slate-500">/ 200</span>
          </p>
          <p className="text-[11px] text-amber-600 font-semibold">JRF Qualified Top Mark</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Average Accuracy</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-emerald-600">
            {avgAccuracy}%
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold">Overall precision rate</p>
        </div>

      </div>

      {/* 3. Search, Filter & Action Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student name, roll no, test..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {(['All', 'Mock Test 01', 'Mock Test 02'] as const).map((testName) => (
              <button
                key={testName}
                onClick={() => setSelectedTestFilter(testName)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedTestFilter === testName
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {testName === 'All' ? 'All Tests' : testName}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {(['All', 'JRF', 'Lectureship', 'Below Cutoff'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTierFilter(tier)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedTierFilter === tier
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {submittedRecords.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all submitted candidate records?')) {
                  clearAllSubmittedRecords();
                }
              }}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
              title="Clear all records"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>

      {/* 4. Submitted Records Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
              Submitted Mock Test Records ({filteredRecords.length})
            </h3>
            <p className="text-xs text-slate-500">
              Complete chronological breakdown of student attempts and results
            </p>
          </div>
        </div>

        {filteredRecords.length === 0 ? (
          <div className="text-center py-16 px-4 space-y-3">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-['Outfit'] font-bold text-base text-slate-800">
              No Test Submissions Found
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Whenever a candidate starts and submits any mock test, their score, accuracy, time taken, and answers are automatically recorded here.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentView('tests')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Launch Mock Test 01
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Student & Roll No</th>
                  <th className="py-3.5 px-4">Test Title</th>
                  <th className="py-3.5 px-4 text-center">Score</th>
                  <th className="py-3.5 px-4 text-center">Accuracy</th>
                  <th className="py-3.5 px-4 text-center">Breakdown (C/W/U)</th>
                  <th className="py-3.5 px-4 text-center">Time Taken</th>
                  <th className="py-3.5 px-4">Date / Time</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredRecords.map((record) => {
                  const isJRF = record.score >= 160;
                  const isNET = record.score >= 136 && record.score < 160;

                  return (
                    <tr key={record.id} className="hover:bg-slate-50/80 transition-colors group">
                      
                      {/* Candidate Column */}
                      <td className="py-4 px-4">
                        <div className="space-y-0.5">
                          <p className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span>{record.studentName}</span>
                            {isJRF && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-800 font-semibold">
                                JRF
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] font-mono text-slate-400">
                            {record.studentRoll || 'UGC-NET-CANDIDATE'}
                          </p>
                        </div>
                      </td>

                      {/* Test Title */}
                      <td className="py-4 px-4 font-medium text-slate-800">
                        {record.testTitle}
                      </td>

                      {/* Score */}
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className={`font-['Outfit'] font-bold text-base ${isJRF ? 'text-emerald-600' : isNET ? 'text-indigo-600' : 'text-slate-800'}`}>
                            {record.score} <span className="text-xs text-slate-400 font-normal">/ {record.totalMarks}</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {record.percentile}%ile
                          </span>
                        </div>
                      </td>

                      {/* Accuracy */}
                      <td className="py-4 px-4 text-center font-mono font-bold text-slate-800">
                        <span className={`px-2 py-0.5 rounded-md ${record.accuracy >= 80 ? 'bg-emerald-50 text-emerald-700' : record.accuracy >= 65 ? 'bg-blue-50 text-blue-700' : 'bg-rose-50 text-rose-700'}`}>
                          {record.accuracy}%
                        </span>
                      </td>

                      {/* Breakdown */}
                      <td className="py-4 px-4 text-center font-mono text-xs">
                        <span className="text-emerald-600 font-bold">{record.correctCount}C</span>
                        <span className="text-slate-300 mx-1">/</span>
                        <span className="text-rose-500 font-bold">{record.wrongCount}W</span>
                        <span className="text-slate-300 mx-1">/</span>
                        <span className="text-slate-400">{record.unattemptedCount}U</span>
                      </td>

                      {/* Time Taken */}
                      <td className="py-4 px-4 text-center font-mono text-xs text-slate-600">
                        {record.timeTakenMinutes} min
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {record.formattedDate || 'Recent'}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => viewRecordResult(record)}
                            className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                            title="Inspect complete score analysis"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect</span>
                          </button>

                          <button
                            onClick={() => deleteSubmittedRecord(record.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Delete this record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Manual Submission Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95">
            <div className="space-y-1">
              <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
                Log Student Score Entry
              </h3>
              <p className="text-xs text-slate-500">
                Manually record a candidate's UGC NET Economics mock test result.
              </p>
            </div>

            <form onSubmit={handleAddManualSubmission} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Student Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={newEntry.studentName}
                  onChange={(e) => setNewEntry({ ...newEntry, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Roll Number</label>
                  <input
                    type="text"
                    placeholder="UGC-NET-2026-XXXX"
                    value={newEntry.studentRoll}
                    onChange={(e) => setNewEntry({ ...newEntry, studentRoll: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Score (out of 200)</label>
                  <input
                    type="number"
                    min="0"
                    max="200"
                    required
                    value={newEntry.score}
                    onChange={(e) => setNewEntry({ ...newEntry, score: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Accuracy (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={newEntry.accuracy}
                    onChange={(e) => setNewEntry({ ...newEntry, accuracy: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Time Taken (Minutes)</label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    required
                    value={newEntry.timeTakenMinutes}
                    onChange={(e) => setNewEntry({ ...newEntry, timeTakenMinutes: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Save Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
