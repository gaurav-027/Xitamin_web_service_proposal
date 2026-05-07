import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapConfig';
import SectionHeading from '../components/ui/SectionHeading';
import GlowCard from '../components/ui/GlowCard';
import useStaggerAnimation from '../animations/useStaggerAnimation';

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3yr+', label: 'Industry Experience' },
  { value: '24/7', label: 'Support Available' },
];

const WHY_US = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed. Every millisecond counts for your users and your rankings.' },
  { icon: '◎', title: 'Premium Design', desc: 'UI that turns heads. We design with intention — every pixel serves a purpose.' },
  { icon: '⬡', title: 'Scalable Code', desc: 'Clean, modular architecture that grows with your business without breaking.' },
  { icon: '◈', title: 'Full Support', desc: 'We\'re with you post-launch. Maintenance, updates, and technical guidance always.' },
];

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useStaggerAnimation('.stat-item', { stagger: 0.1, y: 40 });
  const cardsRef = useStaggerAnimation('.why-card', { stagger: 0.12, y: 50 });

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="About XITAMIN"
          title="We Don't Just Build Websites."
          highlight="We Build Growth."
          subtitle="XITAMIN is a premium web development agency that transforms your digital vision into reality. We specialize in creating futuristic, high-performance web experiences that captivate users and drive business results."
        />

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="stat-item text-center p-6 rounded-xl glass glow-border"
            >
              <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2">{s.value}</div>
              <div className="font-body text-sm text-[var(--muted)] tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Left — mission */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-[var(--accent3)]" />
              <span className="font-mono text-xs tracking-[0.3em] text-[var(--accent3)] uppercase">Our Mission</span>
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-[var(--text)] mb-6 leading-tight">
              Elevating businesses through{' '}
              <span className="gradient-text">intelligent digital craft.</span>
            </h3>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              At XITAMIN, we believe great software is a competitive advantage. We bring
              together cutting-edge technology, thoughtful design, and deep engineering
              expertise to deliver products that don't just work — they <em>wow</em>.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              From solo founders to growing businesses, we build digital experiences
              that tell your story, earn trust, and convert visitors into loyal customers.
            </p>
          </div>

          {/* Right — approach */}
          <div className="space-y-4">
            {['Modern Tech Stack', 'Pixel-Perfect Design', 'Agile Development', 'Post-Launch Support'].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 rounded-lg glass border border-[var(--border)] hover:border-[rgba(0,200,255,0.2)] transition-colors duration-300"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0"
                  style={{ background: 'rgba(0,200,255,0.1)', color: 'var(--accent)', border: '1px solid rgba(0,200,255,0.2)' }}
                >
                  0{i + 1}
                </div>
                <span className="font-body font-medium text-[var(--text)]">{item}</span>
                <span className="ml-auto text-[var(--accent)] opacity-50">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us cards */}
        <div>
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.3em] text-[var(--accent2)]">WHY CHOOSE US</span>
          </div>
          <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item) => (
              <GlowCard
                key={item.title}
                className="why-card p-6 rounded-xl glass border border-[var(--border)] glow-border-hover transition-all duration-300"
                glowColor="rgba(0,200,255,0.1)"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-display font-bold text-lg text-[var(--text)] mb-2">{item.title}</h4>
                <p className="font-body text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;