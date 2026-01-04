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
  { name: 'Python', level: 95, category: 'Languages', icon: '🐍' },
  { name: 'JavaScript/TypeScript', level: 90, category: 'Languages', icon: '⚡' },
  { name: 'Java', level: 85, category: 'Languages', icon: '☕' },
  { name: 'Go', level: 80, category: 'Languages', icon: '🔷' },
  { name: 'C++', level: 75, category: 'Languages', icon: '⚙️' },
  
  // Frameworks & Libraries
  { name: 'React/Next.js', level: 90, category: 'Frontend', icon: '⚛️' },
  { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
  { name: 'Django/Flask', level: 85, category: 'Backend', icon: '🎯' },
  { name: 'TensorFlow/PyTorch', level: 82, category: 'AI/ML', icon: '🤖' },
  
  // Tools & Platforms
  { name: 'Docker/Kubernetes', level: 85, category: 'DevOps', icon: '🐳' },
  { name: 'AWS/Cloud', level: 80, category: 'Cloud', icon: '☁️' },
  { name: 'Git/GitHub', level: 92, category: 'Tools', icon: '🔧' },
  { name: 'PostgreSQL/MongoDB', level: 85, category: 'Database', icon: '🗄️' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(skills.map(s => s.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Tech <span className="text-purple-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse toolkit built through continuous learning and hands-on problem-solving
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105"
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
        <div className="mt-20 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            My Problem-Solving <span className="text-purple-400">Approach</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'Deep dive into the problem space', icon: '🔍' },
              { step: '02', title: 'Analyze', desc: 'Break down into manageable parts', icon: '📊' },
              { step: '03', title: 'Implement', desc: 'Build with best practices', icon: '⚡' },
              { step: '04', title: 'Optimize', desc: 'Refine for performance', icon: '🚀' },
            ].map((phase) => (
              <div key={phase.step} className="text-center group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {phase.icon}
                </div>
                <div className="text-purple-400 font-mono text-sm mb-2">{phase.step}</div>
                <h4 className="text-white font-bold text-lg mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
