import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, Building2, User, MessageSquare } from 'lucide-react';
import { brand } from '../../config/brand';
import { useToast } from '../../hooks/useToast';
import { submitInquiry } from '../../services/inquiryService';
import Reveal from '../../components/ui/Reveal';

const initialForm = { name: '', email: '', phone: '', organization: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const { addToast } = useToast();

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
      <section className="hero" style={{ minHeight: '80vh' }}>
        <div className="hero-glow" />
        <div className="container text-center" style={{ maxWidth: 500 }}>
          <Reveal>
            <div style={{ width: 64, height: 64, background: 'rgba(52,199,89,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle size={32} style={{ color: 'var(--success)' }} />
            </div>
            <h1 className="headline-large">Inquiry submitted.</h1>
            <p className="subhead-large" style={{ marginTop: 12 }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div style={{ display: 'inline-block', background: 'var(--bg-gray)', padding: '12px 24px', borderRadius: 12, marginTop: 24, border: '1px solid var(--border-light)' }}>
              <p className="body-small" style={{ color: 'var(--text-muted)' }}>Reference ID: </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)' }}>
                {success.refId}
              </span>
            </div>
            <p className="body-small" style={{ color: 'var(--text-muted)', marginTop: 8 }}>
              Save this reference ID for your records.
            </p>
            <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => setSuccess(null)}>
              Submit Another Inquiry
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="hero" style={{ minHeight: 'auto', paddingBottom: 40 }}>
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="hero-content text-center mx-auto">
            <h1 className="headline-super hero-title">
              Get in touch.
            </h1>
            <p className="hero-subtitle">
              Have questions about Procto Vision? Want to discuss your institution's needs?
              We're here to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="contact-row">
              <div>
                <h2 className="headline-medium" style={{ marginBottom: 8 }}>Contact Information</h2>
                <p className="subhead-medium" style={{ marginBottom: 28 }}>
                  Reach out directly through any of these channels.
                </p>

                <div className="contact-info-stack">
                  <div className="contact-info-item">
                    <div className="icon"><Mail size={18} /></div>
                    <div><h4>Email</h4><p>{brand.email}</p></div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon"><Phone size={18} /></div>
                    <div><h4>Phone</h4><p>{brand.phone}</p></div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon"><MapPin size={18} /></div>
                    <div><h4>Location</h4><p>CGC University, Mohali, India</p></div>
                  </div>
                </div>

                <div className="map-frame" style={{ marginTop: 16 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54899.609333215936!2d76.59418825435323!3d30.68392849932244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe5b795735cfd%3A0xb287b4430b6720fb!2sCGC%20University%2C%20Mohali!5e0!3m2!1sen!2sin!4v1788940890391!5m2!1sen!2sin"
                    width="100%" height="280" style={{ border: 0, display: 'block' }}
                    allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
                    title="Procto Vision Office Location"
                  />
                </div>

                <div className="apple-card" style={{ marginTop: 16, padding: '16px 20px' }}>
                  <p className="caption" style={{ color: 'var(--accent)', marginBottom: 6 }}>Business Hours</p>
                  <p className="subhead-medium">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                  <p className="subhead-medium">Saturday: 10:00 AM – 2:00 PM IST</p>
                </div>
              </div>

              <div className="apple-card" style={{ padding: '36px 40px' }}>
                <h2 className="headline-medium" style={{ marginBottom: 8 }}>Send us a message</h2>
                <p className="subhead-medium" style={{ marginBottom: 28 }}>
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div className="form-group">
                      <label className="form-label">Full Name <span className="form-required">*</span></label>
                      <div style={{ position: 'relative' }}>
                        <User size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="text" name="name" className="form-input" placeholder="Your full name" value={form.name} onChange={handleChange} required style={{ paddingLeft: 34 }} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email <span className="form-required">*</span></label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="email" name="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={handleChange} required style={{ paddingLeft: 34 }} />
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <div style={{ position: 'relative' }}>
                        <Phone size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="tel" name="phone" className="form-input" placeholder="+91 6207817603" value={form.phone} onChange={handleChange} style={{ paddingLeft: 34 }} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Organization</label>
                      <div style={{ position: 'relative' }}>
                        <Building2 size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="text" name="organization" className="form-input" placeholder="Your institution or company" value={form.organization} onChange={handleChange} style={{ paddingLeft: 34 }} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message <span className="form-required">*</span></label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare size={14} style={{ position: 'absolute', left: 12, top: 14, color: 'var(--text-muted)' }} />
                      <textarea name="message" className="form-textarea" placeholder="Tell us about your requirements..." value={form.message} onChange={handleChange} required rows={4} style={{ paddingLeft: 34 }} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: 8 }}>
                    {loading ? (
                      <>
                        <div className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
