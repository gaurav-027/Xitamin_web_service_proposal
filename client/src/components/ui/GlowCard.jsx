import { useRef } from 'react';
import { gsap } from '../../animations/gsapConfig';

const GlowCard = ({ children, className = '', glowColor = 'rgba(0,200,255,0.15)' }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glow, {
      x: x - 150,
      y: y - 150,
      duration: 0.4,
      ease: 'power2.out',
    });

    const rotX = ((y / rect.height) - 0.5) * 8;
    const rotY = ((x / rect.width) - 0.5) * -8;
    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          willChange: 'transform',
        }}
      />
      {children}
    </div>
  );
};

export default GlowCard;