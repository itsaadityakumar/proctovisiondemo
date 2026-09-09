import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle, Building2, User, MessageSquare } from 'lucide-react';
import { brand } from '../../config/brand';
import { useToast } from '../../hooks/useToast';
import { submitInquiry } from '../../services/inquiryService';
import { useInView } from '../../hooks/useInView';

const initialForm = { name: '', email: '', phone: '', organization: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const { addToast } = useToast();
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: formRef, isInView: formVisible } = useInView();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      addToast('Please fill in all required fields', 'error');
      return;
    }
    setLoading(true);
    try {
      const result = await submitInquiry(form);
      setSuccess(result);
      setForm(initialForm);
      addToast('Inquiry submitted successfully!', 'success');
    } catch {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <section className="hero" style={{ minHeight: '80vh' }}>
          <div className="hero-glow" />
          <div className="container text-center" style={{ maxWidth: 500, margin: '0 auto' }}>
            <div className="success-icon">
              <CheckCircle size={32} />
            </div>
            <h2 className="heading-lg" style={{ marginTop: 20 }}>Inquiry Submitted!</h2>
            <p className="body-lg" style={{ marginTop: 12, marginBottom: 8 }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div style={{
              display: 'inline-block',
              background: 'var(--bg-card)',
              padding: '12px 24px',
              borderRadius: 'var(--radius)',
              marginTop: 16,
              marginBottom: 32,
              border: '1px solid var(--border)',
            }}>
              <span className="body-sm" style={{ color: 'var(--text-muted)' }}>Reference ID: </span>
              <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, color: 'var(--accent-light)' }}>
                {success.refId}
              </span>
            </div>
            <p className="body-sm" style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
              Save this reference ID for your records.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setSuccess(null)}
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div ref={heroRef} className={`hero-content reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-badge">
              <Mail size={14} /> Get in Touch
            </span>
            <h1 className="heading-xl hero-title">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="hero-subtitle">
              Have questions about Procto Vision? Want to discuss your institution's needs?
              We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section section-border">
        <div className="container">
          <div ref={formRef} className={`reveal ${formVisible ? 'visible' : ''}`}>
            <div className="contact-grid">
              {/* Form */}
              <div>
                <h2 className="heading-md" style={{ marginBottom: 8 }}>Send Us a Message</h2>
                <p className="body-md" style={{ marginBottom: 28, color: 'var(--text-muted)' }}>
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span className="form-required">*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <User size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                          type="text"
                          name="name"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          style={{ paddingLeft: 36 }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="form-required">*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          style={{ paddingLeft: 36 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <div style={{ position: 'relative' }}>
                        <Phone size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          style={{ paddingLeft: 36 }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Organization</label>
                      <div style={{ position: 'relative' }}>
                        <Building2 size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                          type="text"
                          name="organization"
                          className="form-input"
                          placeholder="Your institution or company"
                          value={form.organization}
                          onChange={handleChange}
                          style={{ paddingLeft: 36 }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Message <span className="form-required">*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare size={16} style={{ position: 'absolute', left: 12, top: 14, color: 'var(--text-muted)' }} />
                      <textarea
                        name="message"
                        className="form-textarea"
                        placeholder="Tell us about your requirements..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{ paddingLeft: 36 }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%' }}>
                    {loading ? (
                      <>
                        <div className="loading-spinner" style={{ width: 18, height: 18, borderWidth: 2 }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="heading-md" style={{ marginBottom: 8 }}>Contact Information</h2>
                <p className="body-md" style={{ marginBottom: 28, color: 'var(--text-muted)' }}>
                  Reach out directly through any of these channels.
                </p>

                <div className="contact-info-cards">
                  <div className="contact-info-card">
                    <div className="icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4>Email</h4>
                      <p>{brand.email}</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="icon">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <p>{brand.phone}</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4>Location</h4>
                      <p>CGC University, Mohali, India</p>
                    </div>
                  </div>
                </div>

                <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginTop: 16, border: '1px solid var(--border)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54899.609333215936!2d76.59418825435323!3d30.68392849932244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe5b795735cfd%3A0xb287b4430b6720fb!2sCGC%20University%2C%20Mohali!5e0!3m2!1sen!2sin!4v1788940890391!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Procto Vision Office Location"
                  />
                </div>

                <div className="card" style={{ marginTop: 24, padding: '20px 24px', background: 'var(--accent-glow)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-light)', marginBottom: 6 }}>Business Hours</h4>
                  <p className="body-sm">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  <p className="body-sm">Saturday: 10:00 AM – 2:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
