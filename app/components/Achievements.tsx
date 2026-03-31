'use client';

import { useState } from 'react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  rank: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICPC Regionals 2025",
    organization: "International Collegiate Programming Contest",
    rank: "#19 & #63",
    date: "2025",
    description: "Qualified for ICPC Regionals and secured Rank 19 in Chennai Regional and Rank 63 in Amritapuri Regional among thousands of teams across Asia.",
    icon: "🏆",
    color: "yellow",
    featured: true,
    stats: [
      { label: "Chennai Rank", value: "#19" },
      { label: "Amritapuri Rank", value: "#63" },
      { label: "Regional Qualifier", value: "2025" }
    ]
  },
  {
    id: 2,
    title: "CodeChef 6★ Rating",
    organization: "CodeChef Platform",
    rank: "6 Star",
    date: "2024 - Present",
    description: "Achieved 6-star rating with peak rating of 2219, ranking in Top 150 in India.",
    icon: "⭐",
    color: "orange",
    stats: [
      { label: "Peak Rating", value: "2219" },
      { label: "India Rank", value: "Top 150" },
      { label: "Global Rank 7", value: "Starters 176" }
    ]
  },
  {
    id: 3,
    title: "Codeforces Candidate Master",
    organization: "Codeforces Platform",
    rank: "Candidate Master",
    date: "2023 - Present",
    description: "Achieved Candidate Master with peak rating of 1964, ranking in Top 150 in India.",
    icon: "🎯",
    color: "purple",
    stats: [
      { label: "Peak Rating", value: "1964" },
      { label: "India Rank", value: "Top 125" },
      { label: "Global Rank 162", value: "Contest 1024" }
    ]
  },
  {
    id: 4,
    title: "LeetCode Guardian",
    organization: "LeetCode Platform",
    rank: "Guardian",
    date: "2023 - Present",
    description: "Achieved Guardian rating with peak of 2109, ranking in Top 1% on the platform.",
    icon: "⚔️",
    color: "blue",
    stats: [
      { label: "Peak Rating", value: "2186" },
      { label: "Platform Rank", value: "Top 1%" },
      { label: "Contest Performance", value: "Guardian" }
    ]
  },
  {
    id: 5,
    title: "AlgoUniversity ATF Fellowship",
    organization: "AlgoUniversity (YC-backed)",
    rank: "Top 70",
    date: "2024",
    description: "Received ATF Fellowship with ₹100,000 scholarship for outstanding performance in competitive programming, selected from 20,000+ applicants.",
    icon: "🚀",
    color: "green",
    stats: [
      { label: "Scholarship", value: "₹1,00,000" },
      { label: "Selection", value: "Top 70" },
      { label: "Applicants", value: "20,000+" }
    ]
  },
  {
    id: 6,
    title: "Global Contest Rankings",
    organization: "Multiple Platforms",
    rank: "Top Performer",
    date: "2024 - Present",
    description: "Achieved outstanding global ranks in competitive contests.",
    icon: "🌟",
    color: "yellow",
    stats: [
      { label: "CodeChef", value: "Rank 7" },
      { label: "Codeforces", value: "Rank 162" },
      { label: "Participants", value: "20,000+" }
    ]
  }
];

const mathConcepts = [
  { symbol: "O(n log n)", desc: "Time Complexity" },
  { symbol: "∑", desc: "Summation" },
  { symbol: "∀", desc: "For all" },
  { symbol: "∃", desc: "There exists" },
  { symbol: "≈", desc: "Approximation" },
  { symbol: "∞", desc: "Infinity" }
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-500/50',
        text: 'text-yellow-300',
        shadow: 'shadow-yellow-500/50',
        glow: 'from-yellow-500/30 to-yellow-600/10'
      },
      orange: {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/50',
        text: 'text-orange-300',
        shadow: 'shadow-orange-500/50',
        glow: 'from-orange-500/30 to-orange-600/10'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/50',
        text: 'text-purple-300',
        shadow: 'shadow-purple-500/50',
        glow: 'from-purple-500/30 to-purple-600/10'
      },
      blue: {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/50',
        text: 'text-blue-300',
        shadow: 'shadow-blue-500/50',
        glow: 'from-blue-500/30 to-blue-600/10'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-500/50',
        text: 'text-green-300',
        shadow: 'shadow-green-500/50',
        glow: 'from-green-500/30 to-green-600/10'
      },
      gray: {
        bg: 'bg-gray-500/20',
        border: 'border-gray-500/50',
        text: 'text-gray-300',
        shadow: 'shadow-gray-500/50',
        glow: 'from-gray-500/30 to-gray-600/10'
      }
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Achievements — concise, verifiable signals</h2>
        <p className="text-gray-400 mb-8">Top-tier competitive programming results and platform scores, expressed with metrics recruiters and engineers trust.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/60 rounded-xl p-6">
            <div className="text-sm text-gray-400">ICPC</div>
            <div className="text-2xl font-bold text-white">Chennai Regional — #19</div>
            <div className="text-xs text-gray-400 mt-2">Regional qualifier among thousands of teams</div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-6">
            <div className="text-sm text-gray-400">Codeforces</div>
            <div className="text-2xl font-bold text-white">Candidate Master — 1964</div>
            <div className="text-xs text-gray-400 mt-2">Consistent contest performance; global contest participation</div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-6">
            <div className="text-sm text-gray-400">CodeChef</div>
            <div className="text-2xl font-bold text-white">6★ — peak 2219</div>
            <div className="text-xs text-gray-400 mt-2">Top-ranked on national leaderboards</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-800/50 rounded-xl p-6 text-left">
            <div className="text-sm text-gray-400">AlgoUniversity</div>
            <div className="text-lg font-bold text-white">ATF Fellowship — Top 70</div>
            <div className="text-xs text-gray-400 mt-2">Selected from 20,000+ applicants; ₹100,000 scholarship</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 text-left">
            <div className="text-sm text-gray-400">Competitive Scale</div>
            <div className="text-lg font-bold text-white">Global contest experience — thousands of participants</div>
            <div className="text-xs text-gray-400 mt-2">Multiple platforms, ranked across Codeforces / CodeChef / LeetCode</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">For full proof (handles, contest/contest-ids, or logs), see the platform links in the Battle Stats below.</div>

        {/* Condensed battle stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { label: 'Codeforces', value: '1964', extra: 'Candidate Master', handle: 'devanshhhhhh', link: 'https://codeforces.com/profile/devanshhhhhh' },
            { label: 'LeetCode', value: '2109', extra: 'Guardian', handle: 'devanshksg', link: 'https://leetcode.com/u/devanshksg/' },
            { label: 'CodeChef', value: '2219', extra: '6★', handle: 'devanshksg', link: 'https://www.codechef.com/users/devanshksg' },
            { label: 'AlgoUniversity', value: 'Top 70', extra: 'ATF Fellow', handle: '', link: '#' }
          ].map((p, i) => (
            <a key={i} href={p.link} className="block bg-slate-800/50 rounded-xl p-4 text-center hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
              <div className="text-sm text-gray-400">{p.label}</div>
              <div className="text-2xl font-bold text-white">{p.value}</div>
              <div className="text-xs text-gray-400 mt-1">{p.extra}</div>
              {p.handle && <div className="text-xs text-gray-500 mt-1">@{p.handle}</div>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
