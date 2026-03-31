'use client';

// Resume link - Using local PDF for now. Upload to Google Drive and update if needed.
const RESUME_GDRIVE_LINK = '/Devansh_Khandelwal_Resume.pdf'; // Local resume path

export default function Contact() {


  const handleResumeView = () => {
    window.open(RESUME_GDRIVE_LINK, '_blank');
  };

  const handleResumeDownload = () => {
    // Convert Google Drive link to download link
    const fileId = RESUME_GDRIVE_LINK.match(/[-\w]{25,}/);
    if (fileId) {
      window.open(`https://drive.google.com/uc?export=download&id=${fileId[0]}`, '_blank');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 sm:px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have a problem to solve or a project idea? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Resume Section - HIGHLIGHTED */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📄</span> Resume
              </h3>
              <p className="text-purple-200 mb-6">
                Download my complete resume with all projects, skills, and achievements
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleResumeView}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <a
                  href="mailto:devanshdek@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold">devanshdek@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919625976503"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-semibold">+91 96259 76503</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/devansh-khandelwal-dek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="font-semibold">/in/devansh-khandelwal-dek</div>
                  </div>
                </a>

                <a
                  href="https://github.com/devansh-dek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="font-semibold">/devansh-dek</div>
                  </div>
                </a>

                <a
                  href="https://www.codechef.com/users/devanshksg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">CodeChef</div>
                    <div className="font-semibold">/devanshksg</div>
                  </div>
                </a>

                <a
                  href="https://codeforces.com/profile/devanshhhhhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <span className="text-2xl">⚔️</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Codeforces</div>
                    <div className="font-semibold">/devanshhhhhh</div>
                  </div>
                </a>

                <a
                  href="https://leetcode.com/u/devanshksg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LeetCode</div>
                    <div className="font-semibold">/devanshksg</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right column: concise contact cards to fill space */}
          <div className="space-y-6">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">Preferred contact</h4>
              <p className="text-gray-300 text-sm mb-3">Email is preferred for technical conversations. I typically reply within 48 hours.</p>
              <a href="mailto:devanshdek@gmail.com" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">Email →</a>
            </div>

            {/* <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">Open to</h4>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                <li>Systems / Backend Engineering (low-latency)</li>
                <li>Quantitative / Trading Infrastructure</li>
                <li>SDE roles at FAANG / High-scale infra teams</li>
              </ul>
            </div> */}

            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/6 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">One-line highlights</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <div>ICPC Chennai Regional — <strong className="text-white">#19</strong></div>
                <div>Codeforces — <strong className="text-white">Candidate Master (1964)</strong></div>
                <div>CodeChef — <strong className="text-white">6★ (peak 2219)</strong></div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href="#achievements" className="text-sm px-3 py-2 bg-slate-800 text-purple-200 rounded-md border border-purple-700/10">Achievements</a>
                <a href="#projects" className="text-sm px-3 py-2 bg-slate-800 text-purple-200 rounded-md border border-purple-700/10">Projects</a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-white font-bold text-xl mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Codeforces Peak Rating', value: '1964' },
                  { label: 'Contest Rank', value: 'Top 125' },
                  { label: 'ICPC Rank', value: '#19 & #63' },
                  { label: 'ATF Fellow', value: 'Top 70' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
