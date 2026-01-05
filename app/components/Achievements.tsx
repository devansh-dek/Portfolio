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
    <section id="achievements" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0 opacity-5">
        {mathConcepts.map((concept, idx) => (
          <div
            key={idx}
            className="absolute text-4xl sm:text-6xl font-bold text-purple-500 animate-float"
            style={{
              left: `${10 + (idx * 15)}%`,
              top: `${20 + (idx * 10)}%`,
              animationDelay: `${idx * 0.5}s`
            }}
          >
            {concept.symbol}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-block mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full border border-purple-500/50 backdrop-blur-sm">
            <span className="text-purple-200 font-mono font-bold text-xs sm:text-sm">∫ proof_of_excellence dx = ∞</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            Trophy <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Case</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of competitive programming excellence and problem-solving mastery
          </p>
        </div>

        {/* Featured Achievement - ICPC */}
        {achievements.filter(a => a.featured).map((achievement) => {
          const colors = getColorClasses(achievement.color);
          return (
            <div key={achievement.id} className="mb-12 relative">
              <div className={`absolute inset-0 bg-gradient-to-b ${colors.glow} blur-3xl opacity-30 rounded-3xl`}></div>

              <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 ${colors.border} shadow-2xl ${colors.shadow} overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <span className="text-red-300 font-bold text-sm">⭐ FEATURED ACHIEVEMENT</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div>
                      <div className="text-8xl md:text-9xl mb-6 animate-bounce-slow">
                        {achievement.icon}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-2xl text-yellow-300 font-bold mb-2">
                        Chennai: <span className="text-4xl">#65</span> | Amritapuri: <span className="text-4xl">#66</span>
                      </p>
                      <p className="text-xl text-purple-300 font-semibold mb-4">{achievement.organization}</p>
                      <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        {achievement.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {achievement.stats?.map((stat, idx) => (
                        <div key={idx} className={`bg-gradient-to-r ${colors.glow} backdrop-blur-sm rounded-xl p-6 border ${colors.border} transform hover:scale-105 transition-all`}>
                          <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                            {stat.value}
                          </div>
                          <div className="text-gray-300 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Other Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {achievements.filter(a => !a.featured).map((achievement) => {
            const colors = getColorClasses(achievement.color);
            const isHovered = selectedAchievement === achievement.id;

            return (
              <div
                key={achievement.id}
                onMouseEnter={() => setSelectedAchievement(achievement.id)}
                onMouseLeave={() => setSelectedAchievement(null)}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? `${colors.border} shadow-2xl ${colors.shadow} scale-105 z-10`
                    : 'border-slate-700 hover:border-slate-600'
                } transform`}
              >
                {isHovered && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} blur-xl opacity-50 rounded-2xl`}></div>
                )}

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`text-6xl transition-transform duration-500 ${isHovered ? 'scale-125 rotate-12' : ''}`}>
                      {achievement.icon}
                    </div>
                    <div className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full`}>
                      <span className={`${colors.text} font-bold text-xs`}>
                        {achievement.rank}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 transition-colors ${isHovered ? colors.text : ''}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-purple-300 text-sm font-semibold mb-1">{achievement.organization}</p>
                  <p className="text-gray-500 text-xs font-mono mb-4">{achievement.date}</p>

                  {achievement.stats && (
                    <div className="space-y-2">
                      {achievement.stats.map((stat, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-2 rounded-lg ${isHovered ? colors.bg : 'bg-slate-700/30'} transition-all`}>
                          <span className="text-gray-400 text-xs">{stat.label}</span>
                          <span className={`font-bold ${isHovered ? colors.text : 'text-white'} transition-colors`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Battle Stats */}
        <div className="relative bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-purple-500/30 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4">
                <span className="text-5xl">⚔️</span>
                <span>Battle Stats</span>
                <span className="text-5xl">⚔️</span>
              </h3>
              <p className="text-purple-200 text-lg">Live Competitive Programming Ratings</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { platform: 'Codeforces', rating: '1964', rank: 'Candidate Master', color: 'from-purple-500 to-violet-500', handle: 'devanshhhhhh', icon: '🔷', link: 'https://codeforces.com/profile/devanshhhhhh' },
                { platform: 'LeetCode', rating: '2109', rank: 'Guardian', color: 'from-yellow-500 to-orange-500', handle: 'devanshksg', icon: '⚔️', link: 'https://leetcode.com/u/devanshksg' },
                { platform: 'CodeChef', rating: '2019', rank: '6★', color: 'from-orange-500 to-red-500', handle: 'devanshksg', icon: '⭐', link: 'https://codechef.com/users/devanshksg' },
                { platform: 'AlgoUniversity', rating: 'Top 70', rank: 'ATF Fellow', color: 'from-green-500 to-teal-500', icon: '🎓', link: '#' }
              ].map((profile, idx) => (
                <a
                  key={idx}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-600 hover:border-purple-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                      {profile.icon}
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      {profile.platform}
                    </h4>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-2`}>
                      {profile.rating}
                    </div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${profile.color} rounded-full mb-3`}>
                      <span className="text-white font-bold text-xs">{profile.rank}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">@{profile.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Peak Rating', value: '2109', icon: '🎯' },
                { label: 'ICPC Regional', value: '#65 & #66', icon: '🏆' },
                { label: 'India Rank', value: 'Top 150', icon: '📈' },
                { label: 'ATF Fellow', value: '₹1,00,000', icon: '🚀' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Theorem */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="text-purple-300 font-mono text-lg mb-4">
              <span className="text-white font-bold">Theorem:</span> ∀ problem P, ∃ solution S | complexity(S) = optimal
            </div>
            <div className="text-gray-400 text-sm">
              "For every problem, there exists a solution with optimal complexity"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
