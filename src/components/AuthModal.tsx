import React, { useState, useEffect } from 'react';
import { useTest } from '../context/TestContext';
import {
  User,
  Phone,
  Mail,
  X,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
  actionText?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  title = 'Student Registration & Verification',
  subtitle = 'Please enter your candidate details before taking the UGC NET Economics Mock Test.',
  actionText = 'Save & Start Mock Test'
}) => {
  const { studentProfile, updateStudentProfile, registerStudent } = useTest();

  const [name, setName] = useState(studentProfile.name || '');
  const [phone, setPhone] = useState(studentProfile.phone || '');
  const [email, setEmail] = useState(studentProfile.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [touched, setTouched] = useState({ name: false, phone: false, email: false });

  // Sync with current context profile when opened
  useEffect(() => {
    if (isOpen) {
      setName(studentProfile.name && studentProfile.name !== 'Rahul' ? studentProfile.name : '');
      setPhone(studentProfile.phone || '');
      setEmail(studentProfile.email && studentProfile.email !== 'rahul.ugcnet@example.com' ? studentProfile.email : '');
      setErrorMessage('');
      setTouched({ name: false, phone: false, email: false });
    }
  }, [isOpen, studentProfile]);

  if (!isOpen) return null;

  // Validation logic
  const isNameValid = name.trim().length >= 2;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const isPhoneValid = cleanPhone.length >= 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isFormValid = isNameValid && isPhoneValid && isEmailValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });

    if (!isFormValid) {
      if (!isNameValid) setErrorMessage('Please enter your full name (minimum 2 characters).');
      else if (!isPhoneValid) setErrorMessage('Please enter a valid 10-digit mobile number.');
      else if (!isEmailValid) setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Register in TestContext & Firebase Firestore
      await registerStudent({
        name: name.trim(),
        phone: cleanPhone,
        email: email.trim().toLowerCase()
      });

      setIsSubmitting(false);
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('Registration failed:', err);
      setIsSubmitting(false);
      setErrorMessage('Failed to save profile. Please check your connection and try again.');
    }
  };

  return (
    <div
      id="student-auth-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center text-white shrink-0">
              <GraduationCap className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NTA UGC NET Registration</span>
              </div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            {subtitle}
          </p>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800">
              Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                id="reg-fullname-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                placeholder="e.g. Sourabh Saw"
                className={`w-full pl-9 pr-9 py-2.5 bg-slate-50 border rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                  touched.name && !isNameValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                    : isNameValid
                    ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                    : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                }`}
              />
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              {isNameValid && (
                <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-3 top-3 pointer-events-none" />
              )}
            </div>
            {touched.name && !isNameValid && (
              <p className="text-[11px] text-rose-600 font-medium">Please enter candidate name (min. 2 letters)</p>
            )}
          </div>

          {/* 2. Phone Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800">
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                id="reg-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                placeholder="e.g. 9876543210"
                maxLength={15}
                className={`w-full pl-9 pr-9 py-2.5 bg-slate-50 border rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                  touched.phone && !isPhoneValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                    : isPhoneValid
                    ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                    : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                }`}
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              {isPhoneValid && (
                <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-3 top-3 pointer-events-none" />
              )}
            </div>
            {touched.phone && !isPhoneValid && (
              <p className="text-[11px] text-rose-600 font-medium">Please enter a 10-digit mobile number</p>
            )}
          </div>

          {/* 3. Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800">
              Email Address <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <input
                id="reg-email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                placeholder="e.g. sourabh@gmail.com"
                className={`w-full pl-9 pr-9 py-2.5 bg-slate-50 border rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden transition-all ${
                  touched.email && !isEmailValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                    : isEmailValid
                    ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-200'
                    : 'border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                }`}
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              {isEmailValid && (
                <CheckCircle className="w-4 h-4 text-emerald-600 absolute right-3 top-3 pointer-events-none" />
              )}
            </div>
            {touched.email && !isEmailValid && (
              <p className="text-[11px] text-rose-600 font-medium">Please enter a valid email address</p>
            )}
          </div>

          {/* Verification Badge */}
          <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 flex items-start gap-2 text-[11px] text-indigo-900">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>
              Your scorecard, test analysis, and JRF cut-off ranking will be saved and linked directly to this candidate profile.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              id="submit-student-reg-btn"
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <span>Saving details...</span>
              ) : (
                <>
                  <span>{actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
