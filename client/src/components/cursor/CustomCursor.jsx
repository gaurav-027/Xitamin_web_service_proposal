import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapConfig';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 });
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      gsap.to(dot, { scale: 2.5, background: '#00ffa3', duration: 0.3 });
      gsap.to(ring, { scale: 1.5, borderColor: 'rgba(0,255,163,0.6)', duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(dot, { scale: 1, background: '#00c8ff', duration: 0.3 });
      gsap.to(ring, { scale: 1, borderColor: 'rgba(0,200,255,0.4)', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, [data-cursor]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#00c8ff',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(0,200,255,0.4)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;