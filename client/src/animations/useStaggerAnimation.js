import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapConfig';

/**
 * Staggers children of a container element
 * Usage: const ref = useStaggerAnimation('.card');
 *        <div ref={ref}><div className="card">...</div>...</div>
 */
const useStaggerAnimation = (childSelector = '*', options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const children = container.querySelectorAll(childSelector);

      gsap.fromTo(
        children,
        { opacity: 0, y: options.y ?? 50, scale: options.scale ?? 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.8,
          stagger: options.stagger ?? 0.12,
          ease: options.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: options.start ?? 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useStaggerAnimation;