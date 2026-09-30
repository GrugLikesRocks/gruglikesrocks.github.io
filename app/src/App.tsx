import { MotionConfig } from 'framer-motion';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ink font-kanit" style={{ overflowX: 'clip' }}>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </MotionConfig>
  );
}
