import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapConfig';

const Signature = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.7, filter: 'blur(40px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Parallax on scroll
      gsap.to(textRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    const section = sectionRef.current;
    if (!glow || !section) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glow, {
      x: x - 300,
      y: y - 300,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Subtle text distortion on mouse
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -4;
    const rotY = ((x - centerX) / centerX) * 4;

    gsap.to(textRef.current, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });
    gsap.to(glowRef.current, { opacity: 0, duration: 0.5 });
  };

  const handleMouseEnter = () => {
    gsap.to(glowRef.current, { opacity: 1, duration: 0.3 });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: '50vh', paddingTop: '80px', paddingBottom: '60px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,200,255,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,255,0.3), rgba(123,94,167,0.3), transparent)' }}
      />

      {/* Mouse glow — initially hidden */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full opacity-0"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,200,255,0.12) 0%, rgba(123,94,167,0.06) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />

      {/* The giant XITAMIN text */}
      <div ref={containerRef} className="relative z-10 text-center select-none">
        <div
          ref={textRef}
          className="font-display font-black leading-none"
          style={{
            fontSize: 'clamp(80px, 14vw, 280px)',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(0,200,255,0.15) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px rgba(0,200,255,0.2)',
            willChange: 'transform',
            transformStyle: 'preserve-3d',
          }}
        >
          XITAMIN
        </div>

        {/* Tagline below */}
        <p
          className="font-mono text-xs md:text-sm tracking-[0.5em] text-[var(--muted)] mt-4 uppercase"
          style={{ letterSpacing: '0.4em' }}
        >
          Premium Web Development Agency
        </p>
      </div>
    </section>
  );
};

export default Signature;