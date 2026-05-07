import { useRef } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowCard from '../components/ui/GlowCard';
import useStaggerAnimation from '../animations/useStaggerAnimation';
import { SERVICES } from '../constants/services';

const Services = () => {
  const cardsRef = useStaggerAnimation('.service-card', { stagger: 0.1, y: 60, scale: 0.95 });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(123,94,167,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          tag="Our Services"
          title="What We"
          highlight="Craft For You"
          subtitle="From concept to deployment, we offer a full spectrum of web development services tailored to your goals and budget."
        />

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <GlowCard
              key={service.id}
              className="service-card group p-6 rounded-xl glass border border-[var(--border)] transition-all duration-400 hover:-translate-y-2"
              glowColor={`${service.color}1a`}
            >
              {/* Animated border on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${service.color}33, 0 0 30px ${service.color}15` }}
              />

              {/* Icon */}
              <div
                className="text-3xl mb-5 w-12 h-12 flex items-center justify-center rounded-lg"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30`, color: service.color }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-lg text-[var(--text)] mb-3 group-hover:transition-colors duration-300"
                style={{ '--hover-color': service.color }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-[var(--muted)] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-mono"
                    style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="mt-5 flex items-center gap-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: service.color }}
              >
                <span>Learn more</span>
                <span>→</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;