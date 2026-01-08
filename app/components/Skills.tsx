'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'C++', level: 92, category: 'Languages', icon: '⚙️' },
  { name: 'C', level: 88, category: 'Languages', icon: '🔧' },
  { name: 'Python', level: 90, category: 'Languages', icon: '🐍' },
  { name: 'JavaScript', level: 90, category: 'Languages', icon: '⚡' },
  { name: 'TypeScript', level: 88, category: 'Languages', icon: '💙' },
  { name: 'HTML/CSS', level: 90, category: 'Languages', icon: '🎨' },

  // Frontend Frameworks
  { name: 'React.js', level: 92, category: 'Frontend', icon: '⚛️' },
  { name: 'Vue.js', level: 85, category: 'Frontend', icon: '💚' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🌊' },
  { name: 'Chakra UI', level: 80, category: 'Frontend', icon: '🎯' },

  // Backend & APIs
  { name: 'Node.js', level: 90, category: 'Backend', icon: '🟢' },
  { name: 'Express.js', level: 88, category: 'Backend', icon: '⚙️' },
  { name: 'REST APIs', level: 92, category: 'Backend', icon: '🔌' },
  { name: 'gRPC', level: 85, category: 'Backend', icon: '📡' },

  // Databases
  { name: 'MongoDB', level: 88, category: 'Database', icon: '🍃' },
  { name: 'MySQL', level: 85, category: 'Database', icon: '🐬' },
  { name: 'PostgreSQL', level: 85, category: 'Database', icon: '🐘' },
  { name: 'Redis', level: 80, category: 'Database', icon: '🔴' },

  // DevOps & Tools
  { name: 'Docker', level: 90, category: 'DevOps', icon: '🐳' },
  { name: 'Kafka', level: 85, category: 'DevOps', icon: '🧵' },
  { name: 'Git/GitHub', level: 95, category: 'Tools', icon: '🔧' },
  { name: 'VS Code', level: 92, category: 'Tools', icon: '💻' },
  { name: 'Postman', level: 88, category: 'Tools', icon: '📮' },

  // Systems & Concepts
  { name: 'Algorithm Design', level: 92, category: 'Concepts', icon: '🧩' },
  { name: 'OS Concepts', level: 85, category: 'Concepts', icon: '⚙️' },
  { name: 'Object Oriented Programming', level: 90, category: 'Concepts', icon: '🏗️' },
  { name: 'Network Programming', level: 80, category: 'Concepts', icon: '🌐' },
  { name: 'Microservices Architecture', level: 85, category: 'Concepts', icon: '🧩' },

  // Platforms
  { name: 'Linux/Ubuntu', level: 88, category: 'Platforms', icon: '🐧' },
  { name: 'AWS', level: 80, category: 'Platforms', icon: '☁️' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(skills.map(s => s.category))];
  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A diverse toolkit built through continuous learning and hands-on problem-solving
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                    <span className="text-xs text-purple-400">{skill.category}</span>
                  </div>
                </div>
                <span className={`text-2xl font-bold transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'text-purple-400 scale-110' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ${
                    hoveredSkill === skill.name ? 'animate-pulse' : ''
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Problem-solving approach */}
        <div className="mt-16 sm:mt-20 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            My Problem-Solving <span className="text-purple-400">Approach</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'Deep dive into the problem space', icon: '🔍' },
              { step: '02', title: 'Analyze', desc: 'Break down into manageable parts', icon: '📊' },
              { step: '03', title: 'Implement', desc: 'Build with best practices', icon: '⚡' },
              { step: '04', title: 'Optimize', desc: 'Refine for performance', icon: '🚀' },
            ].map((phase) => (
              <div key={phase.step} className="text-center group">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {phase.icon}
                </div>
                <div className="text-purple-400 font-mono text-xs sm:text-sm mb-1 sm:mb-2">{phase.step}</div>
                <h4 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
