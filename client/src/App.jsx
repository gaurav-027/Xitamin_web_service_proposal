import { useEffect, useRef, useState } from 'react';
import { gsap } from './animations/gsapConfig';

// Layout
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/cursor/CustomCursor';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WorkProcess from './sections/WorkProcess';
import Pricing from './sections/Pricing';
import ContactForm from './sections/ContactForm';
import Footer from './components/layout/Footer';
import Signature from './sections/Signature';

// Styles
import './styles/globals.css';

// Loading screen
const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .to(barRef.current, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, 0.4)
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.4 }, 1.4);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: 'var(--bg)' }}
    >
      <div ref={textRef} className="text-center mb-8">
        <div className="h-15 w-80">
          <img className='h-full w-full' src="/whiteLogo.png" alt="" />
        </div>
      </div>
      <div className="w-80 h-px bg-[rgba(255,255,255,0.1)] rounded overflow-hidden">
        <div ref={barRef} className="h-full rounded" style={{ width: 0, background: 'linear-gradient(90deg, var(--accent), var(--accent3))' }} />
      </div>
    </div>
  );
};

// Scroll progress bar
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = (scrolled / total) * 100;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100]" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div
        ref={barRef}
        className="h-full"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent3))', transition: 'width 0.05s linear' }}
      />
    </div>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Loading screen */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Main site */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}>
       <Navbar/>
        <main>
          <Hero />
          <About />
          <Services />
          <WorkProcess />
          <Pricing />
          <ContactForm />
          <Signature />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;