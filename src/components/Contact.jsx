import { useState } from 'react';
import '../styles/ContactFooter.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id.replace('cf-', '')]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="section-tag">Contact</div>
            <h2 className="section-heading">
              Let&apos;s Build <span className="gradient-text">Something</span> Together
            </h2>
            <p className="contact-desc">
              Whether you&apos;re a potential partner, investor, user, or just curious — our inbox is always open.
            </p>
            <div className="contact-info-list">
              {[
                { icon: '🌐', label: 'Website', val: 'quadmindstechnologies.in' },
                { icon: '📍', label: 'Location', val: 'India 🇮🇳' },
                { icon: '💼', label: 'Flagship Product', val: 'BookAdda — Student Book Exchange' },
              ].map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right">
            {sent ? (
              <div className="contact-form" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 22, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: 'var(--slate-light)', fontSize: 15 }}>
                  Thanks for reaching out. We&apos;ll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: 24, padding: '10px 22px', background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.4)', borderRadius: 50, color: '#A5B4FC', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Name</label>
                    <input type="text" id="cf-name" placeholder="Your name" value={form.name} onChange={handleChange} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email</label>
                    <input type="email" id="cf-email" placeholder="you@example.com" value={form.email} onChange={handleChange} required/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-subject">Subject</label>
                  <select id="cf-subject" value={form.subject} onChange={handleChange}>
                    <option value="">What&apos;s this about?</option>
                    <option value="partnership">Partnership / Collaboration</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="career">Career / Joining the Team</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Message</label>
                  <textarea id="cf-message" rows="5" placeholder="Tell us about your idea, inquiry, or opportunity..." value={form.message} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn-submit" id="contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
