import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import { MessageCircle, X, Send, Sparkles, ExternalLink, GraduationCap, Clock } from 'lucide-react';

export const WhatsAppSupportWidget: React.FC = () => {
  const { isTestActive } = useTest();
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState(
    'Hello NETPrep, I have a query regarding the UGC NET Economics Test Series.'
  );

  // Keep test interface distraction-free
  if (isTestActive) {
    return null;
  }

  const WHATSAPP_PHONE = '91824992831';
  const DEFAULT_MESSAGE = 'Hello NETPrep, I have a query regarding the UGC NET Economics Test Series.';

  const handleOpenWhatsApp = (customText?: string) => {
    const textToSend = customText || userQuery || DEFAULT_MESSAGE;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="WhatsApp Support"
      id="floating-whatsapp-widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Expanded Support Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Card Header (WhatsApp themed) */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h4 className="font-['Outfit'] font-bold text-sm text-white">
                  NETPrep Economics Support
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online • Astha Jha & Sourabh Saw</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Preview Body */}
          <div className="p-4 bg-slate-50/80 space-y-3">
            
            {/* Auto Message Bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200/80 shadow-2xs space-y-1.5 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">
                👋 Hello Economics Aspirant!
              </p>
              <p className="leading-relaxed">
                Have a question regarding our 100-question Mock Tests, Syllabus topics, or JRF preparation strategy? Chat with our mentors on WhatsApp.
              </p>
              <div className="flex items-center justify-end text-[10px] text-slate-400 font-mono gap-1 pt-1">
                <Clock className="w-3 h-3" />
                <span>Mentorship Helpline</span>
              </div>
            </div>

            {/* Quick topics pills */}
            <div className="space-y-1 pt-1">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Test Series Access',
                  'Econometrics Doubts',
                  'Paper II Syllabus Guidance'
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const msg = `Hello NETPrep, I have a query regarding ${item} in UGC NET Economics.`;
                      setUserQuery(msg);
                      handleOpenWhatsApp(msg);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Editable Query Box */}
            <div className="pt-2">
              <label className="text-[11px] font-medium text-slate-600 block mb-1">
                Your WhatsApp Message:
              </label>
              <textarea
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                rows={2}
                className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                placeholder="Type your message..."
              />
            </div>

            {/* Send to WhatsApp Action */}
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat (+91 824992831)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="px-4 py-2 bg-slate-100/90 text-center border-t border-slate-200/60">
            <span className="text-[10px] text-slate-500 font-mono">
              Official Helpline: +91 824992831
            </span>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Pill / Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200 shadow-lg text-xs font-semibold text-slate-700 cursor-pointer hover:bg-slate-50 transition-all hover:shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Need Help? Chat on WhatsApp</span>
          </div>
        )}

        <button
          id="whatsapp-chat-button"
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              handleOpenWhatsApp();
            }
          }}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center relative group"
          title="Chat with NETPrep on WhatsApp (+91 824992831)"
          aria-label="Open WhatsApp Support Chat"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          
          {/* Notification Dot */}
          <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-emerald-500" />
          </span>
        </button>
      </div>
    </aside>
  );
};
