import { useState, useRef } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import useRevealAnimation from '../animations/useRevealAnimation';
import useFormSubmit from '../hooks/useFormSubmit';

const SERVICES_LIST = [
  'Web Development',
  'Landing Page Development',
  'MERN Stack Application',
  'UI/UX Design',
  'Portfolio Website',
  'Website Optimization',
  'Custom Web Solution',
  'Other',
];

const BUDGETS = ['Below ₹5k', '₹5k – ₹10k', '₹10k – ₹20k', '₹20k – ₹50k', '₹50k+', 'Let\'s Discuss'];

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  serviceRequirement: '',
  budget: '',
  projectType: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const formRef = useRevealAnimation({ y: 60 });
  const infoRef = useRevealAnimation({ y: 40 });
  const { submitForm, loading, success, error, reset } = useFormSubmit();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(form);
    if (!error) setForm(initialState);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(0,200,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          tag="Contact Us"
          title="Let's Build Something"
          highlight="Extraordinary"
          subtitle="Tell us about your project and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-[var(--text)] mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                We're a team of passionate developers and designers ready to bring your vision
                to life. Fill in the form and a member of our team will reach out shortly.
              </p>
            </div>

            {[
              { icon: '📧', label: 'Email', value: 'connect@xitamin.co.in' },
              { icon: '📱', label: 'Phone', value: '+91 90652 00137' },
              { icon: '📍', label: 'Location', value: 'Xitamin Solution Pvt. Ltd., Gen X Icon, 7th Floor Above Pramod Laddoo Bhandar Mangalam Colony, Saguna More, Patna, Bihar 801503' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl glass border border-[var(--border)]">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-mono text-xs text-[var(--muted)] tracking-wider">{item.label}</div>
                  <div className="font-body font-medium text-[var(--text)] mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl glass border border-[rgba(0,200,255,0.15)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[var(--accent3)] animate-pulse" />
                <span className="font-mono text-xs text-[var(--accent3)] tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <p className="font-body text-sm text-[var(--muted)]">Typical response time: within 24 hours</p>
            </div>
          </div>

          {/* Right form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="p-8 rounded-2xl glass border border-[var(--border)]">
              {success ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-2xl text-[var(--text)] mb-3">
                    Request Received!
                  </h3>
                  <p className="text-[var(--muted)] mb-6">
                    We've received your details and will reach out within 24 hours.
                  </p>
                  <button
                    onClick={reset}
                    className="px-6 py-2 font-mono text-sm border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        FULL NAME <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-field w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        EMAIL <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input-field w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        PHONE <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="input-field w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        SERVICE <span className="text-[var(--accent)]">*</span>
                      </label>
                      <select
                        name="serviceRequirement"
                        value={form.serviceRequirement}
                        onChange={handleChange}
                        required
                        className="input-field w-full px-4 py-3 rounded-lg text-sm appearance-none"
                      >
                        <option value="">Select a service</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget + Project Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        BUDGET <span className="text-[var(--muted)] font-normal">(optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="input-field w-full px-4 py-3 rounded-lg text-sm appearance-none"
                      >
                        <option value="">Select budget</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                        PROJECT TYPE <span className="text-[var(--muted)] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        placeholder="e.g. E-commerce, SaaS..."
                        className="input-field w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs tracking-wider text-[var(--muted)] mb-2">
                      MESSAGE <span className="text-[var(--muted)] font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your project..."
                      className="input-field w-full px-4 py-3 rounded-lg text-sm resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 font-display font-bold text-sm tracking-[0.2em] rounded-lg transition-all duration-300 disabled:opacity-60"
                    style={{
                      background: loading ? 'rgba(0,200,255,0.3)' : 'var(--accent)',
                      color: 'var(--bg)',
                      boxShadow: loading ? 'none' : '0 0 40px rgba(0,200,255,0.2)',
                    }}
                  >
                    {loading ? 'SENDING...' : 'SEND REQUEST →'}
                  </button>

                  <p className="text-center font-body text-xs text-[var(--muted)]">
                    Your data is stored securely. We will never share it.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;