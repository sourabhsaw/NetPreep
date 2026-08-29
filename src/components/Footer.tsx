import React from 'react';
import { useTest } from '../context/TestContext';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowUpRight,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, isTestActive } = useTest();

  if (isTestActive) return null;

  return (
    <footer id="netprep-footer" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-['Outfit'] font-bold text-2xl text-white tracking-tight">
                  NET<span className="text-indigo-400">Prep</span>
                </span>
                <p className="text-xs text-slate-400 font-medium">UGC NET Economics Test Series</p>
              </div>
            </div>

            <div className="pt-1">
              <p className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">
                Practice • Analyze • Improve • Succeed
              </p>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                India's specialized mock test portal designed strictly according to the latest NTA UGC NET Economics Paper II exam pattern.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% NTA CBT Pattern Compliant</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('tests'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  UGC NET Mock Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('dashboard'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('leaderboard'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  All-India Leaderboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('about_contact'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  About Us & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Founders & Leadership */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Leadership & Founders
            </h4>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/70 space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs text-slate-400">Founded by</span>
              </div>
              <p className="text-base font-semibold text-white">
                Astha Jha & Sourabh Saw
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated to empowering Economics scholars and JRF aspirants across India with high-yield mock tests and deep conceptual clarity.
              </p>
            </div>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Headquarters & Support
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  Jamunanki, Kaurmunda, Rourkela, Odisha, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/91824992831?text=Hello%20NETPrep%2C%20I%20have%20a%20query%20regarding%20the%20UGC%20NET%20Economics%20Test%20Series."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-emerald-400 font-mono transition-colors"
                >
                  WhatsApp: +91 824992831
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs text-slate-300 font-mono">
                  support@netprep.in
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => { setCurrentView('about_contact'); window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Have a question? Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NETPrep. All Rights Reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => setCurrentView('about_contact')} className="hover:text-slate-300 transition-colors">
              About Us
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('about_contact')} className="hover:text-slate-300 transition-colors">
              Contact
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('about_contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setCurrentView('about_contact')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
