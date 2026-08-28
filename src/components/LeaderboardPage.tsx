import React, { useState } from 'react';
import { useTest } from '../context/TestContext';
import { LEADERBOARD_DATA } from '../data/leaderboardData';
import {
  Trophy,
  Medal,
  Award,
  Search,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  Users,
  Target,
  Sparkles,
  Zap
} from 'lucide-react';

export const LeaderboardPage: React.FC = () => {
  const { testResult, initiateTestStart, studentProfile } = useTest();
  const [selectedMockId, setSelectedMockId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Top 3 Podium
  const top1 = LEADERBOARD_DATA[0];
  const top2 = LEADERBOARD_DATA[1];
  const top3 = LEADERBOARD_DATA[2];

  const filteredUsers = LEADERBOARD_DATA.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (user.city && user.city.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div id="leaderboard-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/20">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>All India Benchmark Ranking</span>
            </div>

            <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              UGC NET Economics Leaderboard
            </h1>

            <p className="text-slate-300 text-sm max-w-lg">
              Compare your performance with top UGC NET & JRF aspirants across India in Mock Test #01.
            </p>
          </div>

          {/* Test Selector Pill */}
          <div className="bg-slate-800/80 p-2 rounded-2xl border border-slate-700 flex items-center gap-1.5 self-center md:self-auto">
            <button
              onClick={() => setSelectedMockId(1)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMockId === 1
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Mock Test #01
            </button>
            <button
              onClick={() => setSelectedMockId(2)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMockId === 2
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Mock Test #02
            </button>
          </div>
        </div>
      </div>

      {/* Podium Display (Top 3 Rankers) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        
        {/* 🥈 Rank 2: Priya */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center shadow-xs space-y-4 order-2 md:order-1 relative">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-700 mx-auto flex items-center justify-center font-['Outfit'] font-black text-2xl border-2 border-slate-300 shadow-sm">
            🥈
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Rank #02</span>
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 mt-1">{top2.name}</h3>
            <p className="text-xs text-slate-500">{top2.city || 'Kolkata'}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl space-y-1">
            <p className="font-['Outfit'] font-bold text-2xl text-slate-900">{top2.score} <span className="text-sm font-normal text-slate-500">/ 200</span></p>
            <p className="text-xs text-slate-500 font-medium">Accuracy: {top2.accuracy}% • Time: {top2.timeTaken}</p>
          </div>
        </div>

        {/* 🥇 Rank 1: Ankit (Center Champion) */}
        <div className="bg-gradient-to-b from-amber-50 to-white rounded-3xl border-2 border-amber-400/80 p-8 text-center shadow-xl space-y-4 order-1 md:order-2 relative -translate-y-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
            All India Rank #1
          </div>
          <div className="w-20 h-20 rounded-2xl bg-amber-400 text-white mx-auto flex items-center justify-center text-4xl shadow-md">
            🥇
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Highest Score</span>
            <h3 className="font-['Outfit'] font-extrabold text-2xl text-slate-900 mt-1">{top1.name}</h3>
            <p className="text-xs text-slate-500">{top1.city || 'New Delhi'}</p>
          </div>
          <div className="p-4 bg-amber-100/60 rounded-2xl space-y-1 border border-amber-200">
            <p className="font-['Outfit'] font-extrabold text-3xl text-amber-950">{top1.score} <span className="text-sm font-medium text-slate-600">/ 200</span></p>
            <p className="text-xs text-amber-800 font-semibold">Accuracy: {top1.accuracy}% • Time: {top1.timeTaken}</p>
          </div>
        </div>

        {/* 🥉 Rank 3: Rahul */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center shadow-xs space-y-4 order-3 md:order-3">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-800 mx-auto flex items-center justify-center font-['Outfit'] font-black text-2xl border-2 border-amber-300 shadow-sm">
            🥉
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Rank #03</span>
            <h3 className="font-['Outfit'] font-bold text-xl text-slate-900 mt-1">{top3.name}</h3>
            <p className="text-xs text-slate-500">{top3.city || 'Bhubaneswar'}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl space-y-1">
            <p className="font-['Outfit'] font-bold text-2xl text-slate-900">{top3.score} <span className="text-sm font-normal text-slate-500">/ 200</span></p>
            <p className="text-xs text-slate-500 font-medium">Accuracy: {top3.accuracy}% • Time: {top3.timeTaken}</p>
          </div>
        </div>

      </div>

      {/* Your Rank Highlight Strip (Matching Rank #27 from user prompt!) */}
      <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-['Outfit'] font-bold text-lg flex items-center justify-center shadow-md">
            #27
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-['Outfit'] font-bold text-base text-slate-900">
                You ({studentProfile.name})
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-600 text-white">
                Current Position
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Score: <strong className="text-indigo-700">142/200</strong> • Accuracy: <strong className="text-slate-800">78%</strong> • Percentile: <strong className="text-slate-800">84.62%</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-white px-4 py-2 rounded-xl border border-indigo-200">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Top 15% in UGC NET Economics All-India</span>
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-4 p-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-slate-900">
              Overall Rankings
            </h3>
            <p className="text-xs text-slate-500">UGC NET Economics Mock Test #01 Submissions</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidate name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Candidate</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4 text-center">Accuracy</th>
                <th className="py-3 px-4 text-center">Time Taken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredUsers.map((user) => {
                const isCurrent = user.isCurrentUser;
                return (
                  <tr
                    key={user.rank}
                    className={`transition-colors ${
                      isCurrent
                        ? 'bg-indigo-50/90 font-semibold text-indigo-950 border-l-4 border-l-indigo-600'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold">
                      {user.rank <= 3 ? (
                        <span className="text-base">{user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}</span>
                      ) : (
                        `#${user.rank.toString().padStart(2, '0')}`
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-900 flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold ${user.avatarBg}`}>
                        {user.name.charAt(0)}
                      </div>
                      <span>{user.name}</span>
                      {isCurrent && (
                        <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded-md font-bold">
                          You
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 font-medium">
                      {user.city || 'India'}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900">
                      {user.score} / {user.totalMarks}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-600">
                      {user.accuracy}%
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono text-slate-500">
                      {user.timeTaken}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
