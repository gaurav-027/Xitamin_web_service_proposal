import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapConfig';

/**
 * Generic scroll trigger hook — pass any gsap animation config
 * Usage:
 *   const ref = useScrollTrigger((el) => ({
 *     from: { opacity: 0 },
 *     to:   { opacity: 1, duration: 1 },
 *     trigger: { start: 'top 70%' }
 *   }));
 */
const useScrollTrigger = (animationFactory, deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const config = animationFactory(el);
    if (!config) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, config.from, {
        ...config.to,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...(config.trigger || {}),
        },
      });
    });

    return () => ctx.revert();
  }, deps);

  return ref;
};

export default useScrollTrigger;