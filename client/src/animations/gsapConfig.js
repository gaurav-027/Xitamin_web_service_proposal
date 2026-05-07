import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Default GSAP config
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Default ease
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top 85%',
});

export { gsap, ScrollTrigger };