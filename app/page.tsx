import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import SystemsThinking from './components/SystemsThinking';
import HowIThink from './components/HowIThink';
import BlogBreakdown from './components/BlogBreakdown';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Achievements />
      <Experience />
      {/* <SystemsThinking /> */}
      <Projects />
      {/* <HowIThink />
      <BlogBreakdown /> */}
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

