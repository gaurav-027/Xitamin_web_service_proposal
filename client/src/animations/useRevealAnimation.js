import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapConfig';

/**
 * Reveals an element from below with fade on scroll
 * Usage: const ref = useRevealAnimation();
 *        <div ref={ref}>...</div>
 */
const useRevealAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 60, scale: options.scale ?? 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 1,
          ease: options.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useRevealAnimation;