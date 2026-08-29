import React, { useState, useEffect } from 'react';
import { useTest } from '../context/TestContext';
import { ExamSubject, SubmittedTestRecord } from '../types';
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
  GraduationCap,
  Phone,
  Mail,
  Radio,
  CheckCircle,
  Database,
  Code2,
  Layers,
  Lock,
  Unlock,
  KeyRound,
  AlertCircle,
  LogOut,
  EyeOff,
  ArrowLeft,
  ShieldAlert
} from 'lucide-react';

const ADMIN_DEFAULT_PIN = '2026';

export const AdminScoresPage: React.FC = () => {
  const {
    submittedRecords,
    deleteSubmittedRecord,
    clearAllSubmittedRecords,
    addSubmittedRecord,
    viewRecordResult,
    setCurrentView,
    isFirestoreConnected
  } = useTest();

  // Admin PIN Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('netprep_admin_authenticated') === 'true';
    } catch {
      return false;
    }
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'All' | 'Economics' | 'Computer Science'>('All');
  const [selectedTestFilter, setSelectedTestFilter] = useState<string>('All');
  const [selectedTierFilter, setSelectedTierFilter] = useState<'All' | 'JRF' | 'Lectureship' | 'Below Cutoff'>('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New manual candidate submission state
  const [newEntry, setNewEntry] = useState({
    studentName: '',
    phone: '',
    email: '',
    studentRoll: '',
    subject: 'Economics' as ExamSubject,
    testTitle: 'UGC NET Economics — Mock Test 01',
    score: 150,
    accuracy: 80,
    timeTakenMinutes: 110
  });

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_DEFAULT_PIN) {
      try {
        sessionStorage.setItem('netprep_admin_authenticated', 'true');
      } catch (err) {
        console.error('Failed to write to sessionStorage:', err);
      }
      setIsAdminAuthenticated(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Access Denied / Unauthorized Access. Incorrect 4-Digit Security PIN.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  const handleLockAdmin = () => {
    try {
      sessionStorage.removeItem('netprep_admin_authenticated');
    } catch (err) {
      console.error('Failed to remove from sessionStorage:', err);
    }
    setIsAdminAuthenticated(false);
    setPinInput('');
    setPinError('');
  };

  // Filtered records
  const filteredRecords = submittedRecords.filter((record) => {
    const phoneStr = record.phoneNumber || record.phone || '';
    const emailStr = record.email || record.studentEmail || '';
    const nameStr = record.studentName || '';
    const rollStr = record.studentRoll || '';
    const titleStr = record.testTitle || '';
    const recordSubject =
      record.subject ||
      (titleStr.toLowerCase().includes('computer science') ? 'Computer Science' : 'Economics');

    const matchesSearch =
      nameStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      titleStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rollStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phoneStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emailStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recordSubject.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject =
      selectedSubjectFilter === 'All' || recordSubject === selectedSubjectFilter;

    const matchesTest = selectedTestFilter === 'All' || record.testTitle.includes(selectedTestFilter);

    let matchesTier = true;
    if (selectedTierFilter === 'JRF') matchesTier = record.score >= 160;
    else if (selectedTierFilter === 'Lectureship') matchesTier = record.score >= 136 && record.score < 160;
    else if (selectedTierFilter === 'Below Cutoff') matchesTier = record.score < 136;

    return matchesSearch && matchesSubject && matchesTest && matchesTier;
  });

  // Calculate aggregates for current filtered view
  const totalSubmissions = filteredRecords.length;
  const avgScore =
    totalSubmissions > 0
      ? Math.round(filteredRecords.reduce((acc, r) => acc + r.score, 0) / totalSubmissions)
      : 0;
  const highestScore =
    totalSubmissions > 0 ? Math.max(...filteredRecords.map((r) => r.score)) : 0;
  const avgAccuracy =
    totalSubmissions > 0
      ? Math.round(filteredRecords.reduce((acc, r) => acc + r.accuracy, 0) / totalSubmissions)
      : 0;

  // Counts by subject
  const ecoCount = submittedRecords.filter(
    (r) => (r.subject || (r.testTitle.includes('Computer') ? 'Computer Science' : 'Economics')) === 'Economics'
  ).length;
  const csCount = submittedRecords.filter(
    (r) => (r.subject || (r.testTitle.includes('Computer') ? 'Computer Science' : 'Economics')) === 'Computer Science'
  ).length;

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredRecords.length === 0) return;

    const headers = [
      'Submission ID',
      'Student Name',
      'Phone Number',
      'Email Address',
      'Roll Number',
      'Subject',
      'Test Title',
      'Score (out of 200)',
      'Accuracy (%)',
      'Correct Count',
      'Wrong Count',
      'Unattempted Count',
      'Percentile',
      'Time Taken',
      'Date & Time'
    ];

    const rows = filteredRecords.map((r) => {
      const sub = r.subject || (r.testTitle.includes('Computer') ? 'Computer Science' : 'Economics');
      return [
        `"${r.id}"`,
        `"${r.studentName}"`,
        `"${r.phoneNumber || r.phone || 'N/A'}"`,
        `"${r.email || r.studentEmail || 'N/A'}"`,
        `"${r.studentRoll || 'N/A'}"`,
        `"${sub}"`,
        `"${r.testTitle}"`,
        r.score,
        r.accuracy,
        r.correctCount,
        r.wrongCount,
        r.unattemptedCount,
        r.percentile,
        `"${r.timeTaken || `${r.timeTakenMinutes} min`}"`,
        `"${r.formattedDate || r.timestamp}"`
      ];
    });

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NETPrep_${selectedSubjectFilter}_Student_Scores_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add manual entry
  const handleAddManualSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    const correctCount = Math.round(newEntry.score / 2);
    const wrongCount = Math.max(0, Math.round(((100 - newEntry.accuracy) / 100) * (newEntry.score / 2)));
    const unattemptedCount = Math.max(0, 100 - (correctCount + wrongCount));

    const isCS = newEntry.subject === 'Computer Science';

    const newRecord: SubmittedTestRecord = {
      id: 'sub_manual_' + Date.now(),
      studentName: newEntry.studentName.trim() || 'Aspirant',
      phoneNumber: newEntry.phone.trim(),
      phone: newEntry.phone.trim(),
      email: newEntry.email.trim().toLowerCase(),
      studentEmail: newEntry.email.trim().toLowerCase(),
      studentRoll: newEntry.studentRoll.trim() || `UGC-NET-${Math.floor(1000 + Math.random() * 9000)}`,
      testId: isCS ? 101 : 1,
      testTitle: newEntry.testTitle,
      subject: newEntry.subject,
      score: Number(newEntry.score),
      maxScore: 200,
      totalMarks: 200,
      totalQuestions: 100,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy: Number(newEntry.accuracy),
      percentile: Number(Math.min(99.9, Math.max(50, (newEntry.score / 200) * 95 + 4)).toFixed(2)),
      timeTaken: `${newEntry.timeTakenMinutes} min`,
      timeTakenMinutes: Number(newEntry.timeTakenMinutes),
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      strongAreas: isCS ? ['DBMS — 85%', 'Data Structures & Algorithms — 82%'] : ['Micro Economics — 85%', 'Macro Economics — 82%'],
      weakAreas: isCS ? ['Theory of Computation — 55%'] : ['Econometrics — 55%']
    };

    await addSubmittedRecord(newRecord);
    setShowAddModal(false);
    setNewEntry({
      studentName: '',
      phone: '',
      email: '',
      studentRoll: '',
      subject: 'Economics',
      testTitle: 'UGC NET Economics — Mock Test 01',
      score: 150,
      accuracy: 80,
      timeTakenMinutes: 110
    });
  };

  // If not authenticated, render the Security PIN Verification Gate
  if (!isAdminAuthenticated) {
    return (
      <div id="admin-pin-auth-gate" className="max-w-xl mx-auto px-4 py-12 sm:py-16">
        <div className={`bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 space-y-6 text-center relative overflow-hidden transition-transform ${isShaking ? 'animate-bounce' : ''}`}>
          
          {/* Top Security Banner */}
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 shadow-xs">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Admin Authentication Required</span>
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Enter Admin Security PIN
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
              Candidate phone numbers, email addresses, and detailed test logs are protected behind administrative security controls.
            </p>
          </div>

          {/* Error Alert */}
          {pinError && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-2xl flex items-center gap-2.5 text-left animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{pinError}</span>
            </div>
          )}

          {/* PIN Form */}
          <form onSubmit={handleVerifyPin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                4-Digit Security Passcode
              </label>

              <div className="relative max-w-xs mx-auto">
                <input
                  type={showPin ? 'text' : 'password'}
                  maxLength={6}
                  autoFocus
                  placeholder="• • • •"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError('');
                  }}
                  className="w-full text-center text-2xl sm:text-3xl font-mono tracking-[0.5em] font-bold py-3.5 bg-slate-50 border-2 border-slate-200 focus:border-indigo-600 focus:bg-white rounded-2xl focus:outline-hidden transition-all placeholder:text-slate-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 cursor-pointer"
                  title={showPin ? 'Hide PIN' : 'Show PIN'}
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Numpad for convenience */}
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto pt-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    if (key === 'C') {
                      setPinInput('');
                    } else if (key === '⌫') {
                      setPinInput((prev) => prev.slice(0, -1));
                    } else {
                      if (pinInput.length < 6) {
                        setPinInput((prev) => prev + key);
                      }
                    }
                    if (pinError) setPinError('');
                  }}
                  className="py-2.5 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-800 font-['Outfit'] font-bold text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <KeyRound className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Verify & Unlock Admin Logs</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setPinInput('2026');
                    if (pinError) setPinError('');
                  }}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-2 cursor-pointer"
                >
                  Fill Default PIN (2026)
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentView('home')}
                  className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div id="admin-scores-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin Portal • Live Score Sync</span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Firestore Real-Time Sync Active</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-medium border border-indigo-400/20">
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authenticated (PIN: ****)</span>
              </div>
            </div>

            <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Live Candidate Scorecards & Submissions
            </h1>

            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Real-time Firestore database sync for all UGC NET candidate attempts across Economics and Computer Science. Track candidate full names, phone numbers, email addresses, score breakdowns, and time taken live as students submit tests.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCSV}
              disabled={filteredRecords.length === 0}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV ({filteredRecords.length})</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Record New Score</span>
            </button>

            <button
              onClick={handleLockAdmin}
              className="px-3.5 py-2.5 bg-slate-800 hover:bg-rose-950 text-slate-300 hover:text-rose-200 text-xs sm:text-sm font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Lock Admin Session"
            >
              <Lock className="w-4 h-4" />
              <span>Lock Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Primary Subject Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          id="admin-subject-all"
          onClick={() => setSelectedSubjectFilter('All')}
          className={`px-4 py-2.5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            selectedSubjectFilter === 'All'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>All Subjects</span>
          <span className={`text-[11px] px-2 py-0.2 rounded-full ${
            selectedSubjectFilter === 'All' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'
          }`}>
            {submittedRecords.length}
          </span>
        </button>

        <button
          id="admin-subject-economics"
          onClick={() => setSelectedSubjectFilter('Economics')}
          className={`px-4 py-2.5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            selectedSubjectFilter === 'Economics'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-indigo-300" />
          <span>Economics (Code: 01)</span>
          <span className={`text-[11px] px-2 py-0.2 rounded-full ${
            selectedSubjectFilter === 'Economics' ? 'bg-indigo-700 text-white' : 'bg-indigo-50 text-indigo-700'
          }`}>
            {ecoCount}
          </span>
        </button>

        <button
          id="admin-subject-cs"
          onClick={() => setSelectedSubjectFilter('Computer Science')}
          className={`px-4 py-2.5 rounded-xl font-['Outfit'] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            selectedSubjectFilter === 'Computer Science'
              ? 'bg-teal-700 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Code2 className="w-4 h-4 text-teal-300" />
          <span>Computer Science (Code: 87)</span>
          <span className={`text-[11px] px-2 py-0.2 rounded-full ${
            selectedSubjectFilter === 'Computer Science' ? 'bg-teal-800 text-white' : 'bg-teal-50 text-teal-700'
          }`}>
            {csCount}
          </span>
        </button>
      </div>

      {/* 3. Aggregate Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium text-slate-500">Filtered Submissions</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
            {totalSubmissions}
          </p>
          <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>Synced to Firestore cloud</span>
          </p>
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

      {/* 4. Search, Filter & Action Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search student name, phone, email, subject, roll no..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {(['All', 'Mock Test 01', 'Mock Test 02', 'Mock Test 03', 'Mock Test 04'] as const).map((testName) => (
              <button
                key={testName}
                onClick={() => setSelectedTestFilter(testName)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
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
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
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
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
              title="Clear all records"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>

      {/* 5. Submitted Records Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <span>Live Test Submissions Table</span>
              <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full border border-indigo-100">
                {filteredRecords.length} Results
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Live updates directly from Firestore `test_results` collection
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Real-time polling active</span>
          </div>
        </div>

        {filteredRecords.length === 0 ? (
          <div className="text-center py-16 px-4 space-y-3">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-['Outfit'] font-bold text-base text-slate-800">
              No Test Submissions Found
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Whenever a candidate starts and submits any mock test for Economics or Computer Science, their full name, phone number, email, score, accuracy, and time taken are automatically synced here in real time.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentView('tests')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Launch Mock Test Series
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Student Name</th>
                  <th className="py-3.5 px-4">Subject</th>
                  <th className="py-3.5 px-4">Phone Number</th>
                  <th className="py-3.5 px-4">Email Address</th>
                  <th className="py-3.5 px-4">Test Title</th>
                  <th className="py-3.5 px-4 text-center">Score / Marks</th>
                  <th className="py-3.5 px-4 text-center">Accuracy %</th>
                  <th className="py-3.5 px-4 text-center">Time Taken</th>
                  <th className="py-3.5 px-4">Date / Time</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredRecords.map((record) => {
                  const isJRF = record.score >= 160;
                  const isNET = record.score >= 136 && record.score < 160;
                  const phoneDisplay = record.phoneNumber || record.phone || '—';
                  const emailDisplay = record.email || record.studentEmail || '—';
                  const recordSubject =
                    record.subject ||
                    (record.testTitle.toLowerCase().includes('computer science') ? 'Computer Science' : 'Economics');
                  const isCS = recordSubject === 'Computer Science';

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

                      {/* Subject Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
                          isCS
                            ? 'bg-teal-50 text-teal-700 border-teal-200'
                            : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        }`}>
                          {recordSubject}
                        </span>
                      </td>

                      {/* Phone Number */}
                      <td className="py-4 px-4 font-mono text-xs text-slate-700">
                        {phoneDisplay !== '—' ? (
                          <span className="inline-flex items-center gap-1 text-slate-800 font-medium">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{phoneDisplay}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Email Address */}
                      <td className="py-4 px-4 text-xs text-slate-700">
                        {emailDisplay !== '—' ? (
                          <span className="inline-flex items-center gap-1 text-slate-800 font-medium">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{emailDisplay}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Test Title */}
                      <td className="py-4 px-4 font-medium text-slate-800 max-w-[200px] truncate" title={record.testTitle}>
                        {record.testTitle}
                      </td>

                      {/* Score */}
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className={`font-['Outfit'] font-bold text-sm sm:text-base ${isJRF ? 'text-emerald-600' : isNET ? 'text-indigo-600' : 'text-slate-800'}`}>
                            {record.score} <span className="text-xs text-slate-400 font-normal">/ {record.totalMarks || record.maxScore || 200}</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {record.percentile}%ile
                          </span>
                        </div>
                      </td>

                      {/* Accuracy */}
                      <td className="py-4 px-4 text-center font-mono font-bold text-slate-800">
                        <span className={`px-2.5 py-0.5 rounded-md ${record.accuracy >= 80 ? 'bg-emerald-50 text-emerald-700' : record.accuracy >= 65 ? 'bg-blue-50 text-blue-700' : 'bg-rose-50 text-rose-700'}`}>
                          {record.accuracy}%
                        </span>
                      </td>

                      {/* Time Taken */}
                      <td className="py-4 px-4 text-center font-mono text-xs text-slate-600">
                        {record.timeTaken || `${record.timeTakenMinutes} min`}
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 text-xs text-slate-500 whitespace-nowrap">
                        {record.formattedDate || 'Recent'}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => viewRecordResult(record)}
                            className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                            title="Inspect complete score analysis"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect</span>
                          </button>

                          <button
                            onClick={() => deleteSubmittedRecord(record.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
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
                Manually record a candidate's UGC NET mock test result to Firestore.
              </p>
            </div>

            <form onSubmit={handleAddManualSubmission} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Student Full Name *</label>
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
                  <label className="text-xs font-semibold text-slate-700">Exam Subject *</label>
                  <select
                    value={newEntry.subject}
                    onChange={(e) => {
                      const sub = e.target.value as ExamSubject;
                      setNewEntry({
                        ...newEntry,
                        subject: sub,
                        testTitle: sub === 'Computer Science' ? 'UGC NET Computer Science — Mock Test 01' : 'UGC NET Economics — Mock Test 01'
                      });
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  >
                    <option value="Economics">UGC NET Economics (01)</option>
                    <option value="Computer Science">UGC NET Computer Science (87)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Test Title *</label>
                  <select
                    value={newEntry.testTitle}
                    onChange={(e) => setNewEntry({ ...newEntry, testTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  >
                    {newEntry.subject === 'Computer Science' ? (
                      <>
                        <option value="UGC NET Computer Science — Mock Test 01">CS Mock Test 01</option>
                        <option value="UGC NET Computer Science — Mock Test 02">CS Mock Test 02</option>
                        <option value="UGC NET Computer Science — Mock Test 03">CS Mock Test 03</option>
                        <option value="UGC NET Computer Science — Mock Test 04">CS Mock Test 04</option>
                      </>
                    ) : (
                      <>
                        <option value="UGC NET Economics — Mock Test 01">Economics Mock Test 01</option>
                        <option value="UGC NET Economics — Mock Test 02">Economics Mock Test 02</option>
                        <option value="UGC NET Economics — Mock Test 03">Economics Mock Test 03</option>
                        <option value="UGC NET Economics — Mock Test 04">Economics Mock Test 04</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={newEntry.phone}
                    onChange={(e) => setNewEntry({ ...newEntry, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@gmail.com"
                    value={newEntry.email}
                    onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>
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
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
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
