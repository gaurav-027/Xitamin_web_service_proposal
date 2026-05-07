import { useRef } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowCard from '../components/ui/GlowCard';
import useStaggerAnimation from '../animations/useStaggerAnimation';
import { PRICING_PLANS, PRICING_NOTES } from '../constants/pricing';

const CheckIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7" fill={`${color}20`} stroke={color} strokeWidth="1" />
    <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pricing = () => {
  const cardsRef = useStaggerAnimation('.pricing-card', { stagger: 0.15, y: 70, scale: 0.95 });
  const notesRef = useStaggerAnimation('.note-card', { stagger: 0.1, y: 40 });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(0,200,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          tag="Pricing"
          title="Transparent"
          highlight="Pricing Packages"
          subtitle="No hidden costs. Choose a package that fits your goals — or contact us for a custom quote."
        />

        {/* Pricing cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {PRICING_PLANS.map((plan) => (
            <GlowCard
              key={plan.id}
              className={`pricing-card relative flex flex-col p-7 rounded-2xl transition-all duration-400 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-2'
                  : 'border border-[var(--border)] glass'
              }`}
              glowColor={plan.glowColor}
              style={plan.popular ? { borderColor: plan.color, background: `${plan.color}08` } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-display font-bold tracking-wider"
                  style={{ background: plan.color, color: '#fff' }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pb-6" style={{ borderBottom: `1px solid ${plan.color}20` }}>
                <h3
                  className="font-display font-black text-2xl tracking-wider mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <div className="font-mono text-2xl font-bold text-[var(--text)]">{plan.priceRange}</div>
              </div>

              {/* Features */}
              <div className="flex-1 mb-6">
                <p className="font-mono text-xs tracking-[0.2em] mb-4" style={{ color: plan.color }}>
                  FEATURES
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon color={plan.color} />
                      <span className="font-body text-sm text-[var(--text)] leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div className="mb-6 pt-4" style={{ borderTop: `1px solid ${plan.color}15` }}>
                <p className="font-mono text-xs tracking-[0.2em] mb-3" style={{ color: plan.color }}>
                  IDEAL FOR
                </p>
                <ul className="space-y-1">
                  {plan.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full" style={{ background: plan.color }} />
                      <span className="font-body text-sm text-[var(--muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block text-center py-3 px-6 rounded-lg font-display font-bold text-sm tracking-wider transition-all duration-300"
                style={{
                  background: plan.popular ? plan.color : 'transparent',
                  color: plan.popular ? '#fff' : plan.color,
                  border: `1px solid ${plan.color}`,
                  hover: `background: ${plan.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = plan.color;
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = `0 0 30px ${plan.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = plan.popular ? plan.color : 'transparent';
                  e.currentTarget.style.color = plan.popular ? '#fff' : plan.color;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                GET STARTED →
              </a>
            </GlowCard>
          ))}
        </div>

        {/* Notes grid */}
        <div ref={notesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRICING_NOTES.map((note) => (
            <div
              key={note.title}
              className="note-card p-5 rounded-xl glass border border-[var(--border)] hover:border-[rgba(0,200,255,0.15)] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{note.icon}</span>
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">{note.title}</span>
              </div>
              <ul className="space-y-1">
                {note.items.map((item) => (
                  <li key={item} className="font-body text-xs text-[var(--muted)] leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8 font-body text-sm text-[var(--muted)] italic">
          We deliver quality websites tailored to your business goals.
        </p>
      </div>
    </section>
  );
};

export default Pricing;