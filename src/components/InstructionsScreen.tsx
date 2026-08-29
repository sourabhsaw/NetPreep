import React, { useState, useEffect } from 'react';
import { useTest } from '../context/TestContext';
import {
  FileText,
  Clock,
  Award,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Play,
  ShieldCheck,
  Check,
  User,
  Phone,
  Mail,
  Hash,
  Sparkles,
  Info,
  AlertCircle
} from 'lucide-react';

export const InstructionsScreen: React.FC = () => {
  const {
    selectedTest,
    confirmAndLaunchTest,
    setCurrentView,
    studentProfile,
    updateStudentProfile,
    registerStudent
  } = useTest();

  const [candidateName, setCandidateName] = useState<string>(
    studentProfile.name && studentProfile.name !== 'Rahul' ? studentProfile.name : ''
  );
  const [candidatePhone, setCandidatePhone] = useState<string>(
    studentProfile.phone || ''
  );
  const [candidateEmail, setCandidateEmail] = useState<string>(
    studentProfile.email && studentProfile.email !== 'rahul.ugcnet@example.com' ? studentProfile.email : ''
  );
  const [candidateRoll, setCandidateRoll] = useState<string>(
    studentProfile.rollNumber || `UGC-NET-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
  );
  const [agreementChecked, setAgreementChecked] = useState(true);
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // Sync state if studentProfile changes
  useEffect(() => {
    if (studentProfile.name && studentProfile.name !== 'Rahul' && !candidateName) {
      setCandidateName(studentProfile.name);
    }
    if (studentProfile.phone && !candidatePhone) {
      setCandidatePhone(studentProfile.phone);
    }
    if (studentProfile.email && studentProfile.email !== 'rahul.ugcnet@example.com' && !candidateEmail) {
      setCandidateEmail(studentProfile.email);
    }
  }, [studentProfile]);

  const testTitle = selectedTest?.title || 'UGC NET Economics — Mock Test 01';
  const totalQuestions = selectedTest?.totalQuestions || 100;
  const durationMinutes = selectedTest?.durationMinutes || 120;
  const totalMarks = selectedTest?.totalMarks || 200;

  const isNameValid = candidateName.trim().length >= 2;
  const cleanPhone = candidatePhone.replace(/[^0-9]/g, '');
  const isPhoneValid = cleanPhone.length >= 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateEmail.trim());

  const canStartTest = isNameValid && isPhoneValid && isEmailValid && agreementChecked;

  const handleStartTest = async () => {
    setTouched({ name: true, phone: true, email: true });
    if (!canStartTest) return;

    try {
      await registerStudent({
        name: candidateName.trim(),
        phone: cleanPhone,
        email: candidateEmail.trim().toLowerCase()
      });
    } catch (e) {
      console.warn('Registration note:', e);
      updateStudentProfile({
        name: candidateName.trim(),
        phone: cleanPhone,
        email: candidateEmail.trim().toLowerCase(),
        rollNumber: candidateRoll.trim()
      });
    }

    confirmAndLaunchTest();
  };

  return (
    <div id="test-instructions-screen" className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Top Breadcrumb / Back button */}
      <button
        onClick={() => setCurrentView('tests')}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Test Series</span>
      </button>

      {/* Main Instructions Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                <span>📋 Official NTA UGC NET Pattern</span>
              </div>
              <h1 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {testTitle}
              </h1>
              <p className="text-xs text-slate-300">
                UGC NET Economics (Paper II) • 100 MCQs • 200 Marks • 120 Minutes
              </p>
            </div>

            {/* Test Badge */}
            <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-right self-start sm:self-auto">
              <p className="text-[11px] text-slate-400">Total Duration</p>
              <p className="text-sm font-bold text-emerald-400">120 Minutes (2 Hrs)</p>
              <p className="text-[10px] font-mono text-indigo-400">Paper II Code: 01</p>
            </div>
          </div>
        </div>

        {/* 1. MANDATORY CANDIDATE REGISTRATION SECTION */}
        <div className="bg-indigo-50/70 border-b border-indigo-100 p-6 sm:p-7 space-y-4">
          <div className="flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-base text-slate-900 flex items-center gap-2">
                  <span>Mandatory Candidate Registration</span>
                  <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                    * Required to Start
                  </span>
                </h3>
                <p className="text-xs text-slate-600">
                  Enter your verified details below. Your scorecard, all-India rank analysis, and admin live tracking will be attached to these details.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {/* Candidate Full Name Input (Required) */}
            <div className="space-y-1.5">
              <label htmlFor="candidate-name-input" className="block text-xs font-bold text-slate-800">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="candidate-name-input"
                  type="text"
                  value={candidateName}
                  onChange={(e) => {
                    setCandidateName(e.target.value);
                    if (!touched.name) setTouched((p) => ({ ...p, name: true }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                  placeholder="e.g. Sourabh Saw"
                  className={`w-full pl-9 pr-8 py-2.5 bg-white rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                    touched.name && !isNameValid
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                      : isNameValid
                      ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                      : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                  }`}
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                {isNameValid && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-2.5 top-3 pointer-events-none" />
                )}
              </div>
              {touched.name && !isNameValid && (
                <p className="text-[11px] text-rose-600 font-medium">Candidate name is required (min 2 chars)</p>
              )}
            </div>

            {/* Candidate Phone Number (Required) */}
            <div className="space-y-1.5">
              <label htmlFor="candidate-phone-input" className="block text-xs font-bold text-slate-800">
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="candidate-phone-input"
                  type="tel"
                  value={candidatePhone}
                  onChange={(e) => {
                    setCandidatePhone(e.target.value);
                    if (!touched.phone) setTouched((p) => ({ ...p, phone: true }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                  placeholder="e.g. 9876543210"
                  maxLength={15}
                  className={`w-full pl-9 pr-8 py-2.5 bg-white rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                    touched.phone && !isPhoneValid
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                      : isPhoneValid
                      ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                      : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                  }`}
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                {isPhoneValid && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-2.5 top-3 pointer-events-none" />
                )}
              </div>
              {touched.phone && !isPhoneValid && (
                <p className="text-[11px] text-rose-600 font-medium">Enter 10-digit mobile number</p>
              )}
            </div>

            {/* Candidate Email Address (Required) */}
            <div className="space-y-1.5">
              <label htmlFor="candidate-email-input" className="block text-xs font-bold text-slate-800">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="candidate-email-input"
                  type="email"
                  value={candidateEmail}
                  onChange={(e) => {
                    setCandidateEmail(e.target.value);
                    if (!touched.email) setTouched((p) => ({ ...p, email: true }));
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                  placeholder="e.g. sourabh@gmail.com"
                  className={`w-full pl-9 pr-8 py-2.5 bg-white rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-all ${
                    touched.email && !isEmailValid
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                      : isEmailValid
                      ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                      : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                  }`}
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                {isEmailValid && (
                  <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-2.5 top-3 pointer-events-none" />
                )}
              </div>
              {touched.email && !isEmailValid && (
                <p className="text-[11px] text-rose-600 font-medium">Enter valid email address</p>
              )}
            </div>
          </div>

          {/* Active Candidate Confirmation Pill */}
          {isNameValid && isPhoneValid && isEmailValid && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium animate-fadeIn">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Verified candidate: <strong className="font-bold text-emerald-950">{candidateName.trim()}</strong> • {cleanPhone} • {candidateEmail.trim().toLowerCase()} (Roll No: <span className="font-mono">{candidateRoll}</span>). Ready for examination.
              </span>
            </div>
          )}
        </div>

        {/* Test Summary Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 bg-slate-50 border-b border-slate-200">
          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Total Questions</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              {totalQuestions}
            </p>
            <p className="text-[11px] text-slate-400">MCQs</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Total Marks</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-indigo-600 mt-0.5">
              {totalMarks}
            </p>
            <p className="text-[11px] text-slate-400">+2 Marks per correct</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Duration</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              {durationMinutes} Min
            </p>
            <p className="text-[11px] text-slate-400">2 Hours Live Clock</p>
          </div>

          <div className="p-4 sm:p-5 text-center">
            <p className="text-xs text-slate-500 font-medium">Negative Marking</p>
            <p className="font-['Outfit'] font-bold text-xl sm:text-2xl text-emerald-600 mt-0.5">
              No (-0)
            </p>
            <p className="text-[11px] text-slate-400">As per UGC NET rules</p>
          </div>
        </div>

        {/* Instructions Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>General Instructions</span>
            </h3>
            <p className="text-xs text-slate-500">
              Please read the following instructions carefully before starting the test:
            </p>
          </div>

          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Each question has four options (A, B, C, D) with exactly one correct answer (+2 Marks).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Select one answer by clicking on the desired option circle. You can change your choice anytime.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Unattempted questions receive no marks (0 marks). There is NO negative marking in UGC NET Economics Paper II.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Submit the test before the 120-minute timer expires. The test will automatically submit upon countdown completion.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Navigate between questions using the Question Palette on the right or Next / Previous buttons.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                You can mark questions for review if you want to revisit them later before final submission.
              </p>
            </div>
          </div>

          {/* Palette Status Reference Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-['Outfit']">
              Question Palette Color Legend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-xs" />
                <span>🟢 Answered</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-xs" />
                <span>🔴 Not Answered</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-300 border border-slate-400" />
                <span>⚪ Not Visited</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-xs" />
                <span>🟡 Marked for Review</span>
              </div>
            </div>
          </div>

          {/* Declaration Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 p-4 rounded-xl border border-indigo-100 bg-indigo-50/60 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreementChecked}
                onChange={(e) => setAgreementChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-indigo-600 rounded-md border-slate-300 focus:ring-indigo-500 cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                I have read and understood all the instructions above. I declare that all information provided is accurate and I am ready to begin the examination.
              </span>
            </label>
          </div>

          {/* Validation Notice if button is disabled */}
          {!canStartTest && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {!isNameValid || !isPhoneValid || !isEmailValid
                  ? '⚠️ Please enter your Full Name, Phone Number, and Email in the Candidate Registration section above to unlock the Start Test button.'
                  : '⚠️ Please accept the declaration checkbox above to proceed.'}
              </span>
            </div>
          )}

          {/* Start Test Button */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={() => setCurrentView('tests')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>

            <button
              id="confirm-start-test-btn"
              disabled={!canStartTest}
              onClick={handleStartTest}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2.5 shadow-lg transition-all ${
                canStartTest
                  ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                  : 'bg-slate-300 cursor-not-allowed shadow-none opacity-80'
              }`}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isNameValid ? `Start Test as ${candidateName.trim()}` : 'Complete Registration to Start Test'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};


