import { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapConfig';
import MagneticButton from '../components/ui/MagneticButton';

const Hero = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const tagRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Grid fade in
      tl.fromTo(gridRef.current, { opacity: 0 }, { opacity: 1, duration: 2 }, 0);

      // Tag line
      tl.fromTo(tagRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5);

      // Staggered headline lines
      tl.fromTo(
        lineRefs.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.15, duration: 1, ease: 'power4.out' },
        0.8
      );

      // Subtitle
      tl.fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.4);

      // CTA buttons
      tl.fromTo(ctaRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 }, 1.6);

      // Orbs floating
      [orb1Ref, orb2Ref, orb3Ref].forEach((ref, i) => {
        gsap.to(ref.current, {
          y: -30 - i * 10,
          x: 10 * (i % 2 === 0 ? 1 : -1),
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToLineRefs = (el) => {
    if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
    >
      {/* Grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 rounded-full blur-3xl pointer-events-none"
        style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)' }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/3 right-1/4 rounded-full blur-3xl pointer-events-none"
        style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(123,94,167,0.1) 0%, transparent 70%)' }}
      />
      <div
        ref={orb3Ref}
        className="absolute top-1/2 right-1/3 rounded-full blur-3xl pointer-events-none"
        style={{ width: 250, height: 250, background: 'radial-gradient(circle, rgba(0,255,163,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Tag */}
        <div ref={tagRef} className="inline-flex items-center gap-3 mb-8 opacity-0">
          <span className="w-10 h-px bg-[var(--accent)]" />
          <span className="font-mono text-xs tracking-[0.4em] text-[var(--accent)]">PREMIUM WEB DEVELOPMENT AGENCY</span>
          <span className="w-10 h-px bg-[var(--accent)]" />
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-3">
          <h1 ref={addToLineRefs} className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none opacity-0">
            We Build
          </h1>
        </div>
        <div className="overflow-hidden mb-3">
          <h1 ref={addToLineRefs} className="font-display font-black text-4xl md:text-7xl lg:text-8xl xl:text-8xl leading-none opacity-0 gradient-text">
            Digital Experiences
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1 ref={addToLineRefs} className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none opacity-0">
            That Convert.
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subRef}
          className="opacity-0 text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          XITAMIN crafts premium, futuristic websites and web applications for businesses
          that demand the extraordinary. Fast. Beautiful. Scalable.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="#contact"
            className="px-8 py-4 font-display font-bold text-sm tracking-[0.2em] bg-[var(--accent)] text-[var(--bg)] rounded hover:shadow-[0_0_40px_rgba(0,200,255,0.4)] transition-all duration-300"
          >
            START YOUR PROJECT →
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="px-8 py-4 font-display font-bold text-sm tracking-[0.2em] border border-[rgba(255,255,255,0.15)] text-[var(--text)] rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            VIEW SERVICES
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-xs tracking-[0.3em] text-[var(--muted)]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;