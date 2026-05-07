import useRevealAnimation from '../../animations/useRevealAnimation';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'LinkedIn', href: '#', icon: 'LI' },
  { label: 'GitHub', href: '#', icon: 'GH' },
  { label: 'Twitter', href: '#', icon: 'TW' },
];

const Footer = () => {
  const ref = useRevealAnimation({ y: 40, duration: 0.8 });

  return (
    <footer ref={ref} className="relative border-t border-[var(--border)] pt-16 pb-8 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: 800, height: 200, background: 'radial-gradient(ellipse at bottom, rgba(0,200,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display font-black text-2xl tracking-[0.3em] gradient-text mb-4">XITAMIN</div>
            <p className="font-body text-sm text-[var(--muted)] leading-relaxed max-w-sm mb-6">
              Premium web development agency crafting futuristic digital experiences
              for businesses that demand the extraordinary.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass border border-[var(--border)] flex items-center justify-center font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] hover:border-[rgba(0,200,255,0.3)] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] text-[var(--accent)] mb-5">QUICK LINKS</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] text-[var(--accent)] mb-5">CONTACT</h4>
            <div className="space-y-3">
              {[
                { label: 'Email', value: 'connect@xitamin.co.in' },
                { label: 'Phone', value: '+91 90652 00137' },
                { label: 'Location', value: 'Xitamin Solution Pvt. Ltd., Gen X Icon, 7th Floor Above Pramod Laddoo Bhandar Mangalam Colony, Saguna More, Patna, Bihar 801503' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-xs text-[var(--muted)] tracking-wider mb-0.5">{item.label}</div>
                  <div className="font-body text-sm text-[var(--text)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} XITAMIN. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs text-[var(--muted)]">Crafted with</span>
            <span className="text-[var(--accent)]">♥</span>
            <span className="font-mono text-xs text-[var(--muted)]">by XITAMIN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;