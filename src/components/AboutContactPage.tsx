import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  HelpCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Users
} from 'lucide-react';

export const AboutContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Syllabus & Test Series Query',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'How many questions are in each UGC NET Economics mock test?',
      a: 'Each full-length test contains 100 questions carrying 200 marks (2 marks per question) with a duration of 120 minutes, following the exact NTA Paper II pattern.'
    },
    {
      q: 'Is there any negative marking in UGC NET Economics?',
      a: 'As per the official NTA UGC NET guidelines, there is NO negative marking for incorrect or unattempted answers.'
    },
    {
      q: 'Can I review step-by-step solutions and explanations after submitting?',
      a: 'Yes! Immediately upon test submission, you gain full access to detailed mathematical derivations, economic theories, and option-by-option analysis.'
    },
    {
      q: 'Who prepared the NETPrep Economics Test Series?',
      a: 'The questions and solutions are curated by Astha Jha & Sourabh Saw along with qualified UGC NET & JRF mentors based in Rourkela, Odisha.'
    }
  ];

  return (
    <div id="about-contact-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
            <span>🏛️ Academic Leadership & Support</span>
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            About NETPrep & Contact Us
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Empowering economics scholars and future assistant professors across India with authentic NTA test simulations and deep conceptual mastery.
          </p>
        </div>
      </div>

      {/* 2. Founders & Organization Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase font-['Outfit']">
            <span>Founders & Academic Mentors</span>
          </div>

          <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-slate-900">
            Astha Jha & Sourabh Saw
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            NETPrep was conceived in Rourkela, Odisha, to bridge the gap between theoretical textbook preparation and computer-based test (CBT) speed, accuracy, and exam temperament.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 font-medium">Headquarters</span>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Rourkela, Odisha, India</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 font-medium">Subject Domain</span>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>UGC NET Economics (Code 01)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Direct Helpline Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50/60 p-6 sm:p-8 rounded-3xl border border-emerald-100 space-y-5">
          <div className="space-y-1">
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp & Email Support</span>
            </h3>
            <p className="text-xs text-slate-600">
              Reach out directly on WhatsApp for test series inquiries, mock test guidance, or syllabus doubts:
            </p>
          </div>

          <div className="space-y-3 font-mono">
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
              <span className="text-xs font-sans text-slate-500">Official WhatsApp</span>
              <a
                href="https://wa.me/91824992831?text=Hello%20NETPrep%2C%20I%20have%20a%20query%20regarding%20the%20UGC%20NET%20Economics%20Test%20Series."
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-600 hover:text-emerald-800 text-sm hover:underline"
              >
                +91 824992831
              </a>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs font-sans text-xs">
              <span className="text-slate-500">Official Email</span>
              <a
                href="mailto:support@netprep.in"
                className="font-bold text-slate-800 hover:text-indigo-600"
              >
                support@netprep.in
              </a>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs font-sans text-xs">
              <span className="text-slate-500">Mentorship Leads</span>
              <span className="font-bold text-slate-800">
                Astha Jha & Sourabh Saw
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Student Query / Feedback Form & FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
              Send an Academic Query
            </h3>
            <p className="text-xs text-slate-500">
              Have a question on a specific question or test series registration?
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-['Outfit'] font-bold text-emerald-950 text-base">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you for reaching out. Our mentor team will reply back to your email/phone within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-bold text-emerald-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Your Message or Doubt</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your query regarding questions, syllabus, or preparation strategy..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Query</span>
              </button>
            </form>
          )}
        </div>

        {/* Right FAQs (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1">
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500">
              Key information regarding test format and preparation
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <h4 className="font-['Outfit'] font-bold text-sm text-slate-900 flex items-start gap-2">
                  <span className="text-indigo-600 font-mono">Q{i + 1}.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
