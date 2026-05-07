import { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapConfig';
import SectionHeading from '../components/ui/SectionHeading';
import { PROCESS_STEPS } from '../constants/process';

const WorkProcess = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // Stagger step cards
      stepsRef.current.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, rgba(0,200,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          tag="How We Work"
          title="Our"
          highlight="Work Process"
          subtitle="A transparent, structured process built for collaboration and excellence — every time."
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting line */}
          <div className="absolute top-8 left-[8%] right-[8%] h-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              ref={lineRef}
              className="absolute inset-0"
              style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))' }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => (stepsRef.current[i] = el)}
                className="flex flex-col items-center text-center cursor-default"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step dot */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 z-10"
                  style={{
                    background: activeStep === step.id ? step.color : 'var(--bg3)',
                    border: `2px solid ${activeStep === step.id ? step.color : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: activeStep === step.id ? `0 0 30px ${step.color}50` : 'none',
                  }}
                >
                  <span className="font-mono text-sm font-bold" style={{ color: activeStep === step.id ? 'var(--bg)' : step.color }}>
                    {step.step}
                  </span>
                </div>

                <h4 className="font-display font-bold text-sm text-[var(--text)] mb-2 leading-tight">
                  {step.title}
                </h4>
                <p
                  className="font-body text-xs text-[var(--muted)] leading-relaxed transition-all duration-300"
                  style={{ maxHeight: activeStep === step.id ? '120px' : '60px', overflow: 'hidden' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet list */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => (stepsRef.current[i] = el)}
              className="flex gap-5 p-5 rounded-xl glass border border-[var(--border)] hover:border-[rgba(0,200,255,0.2)] transition-colors duration-300"
            >
              <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-mono text-sm font-bold"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}
              >
                {step.step}
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[var(--text)] mb-1">{step.title}</h4>
                <p className="font-body text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;