import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Key, Users, Building2, ArrowRight, Check, Monitor, Fingerprint, Globe } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

const securityFeatures = [
  { icon: Lock, title: 'Secure Exam Access', desc: 'X-Code based authentication ensures only authorized students can access examinations.', future: false },
  { icon: Monitor, title: 'Controlled Sessions', desc: 'Exam sessions are tightly controlled with fullscreen enforcement and tab-switch detection.', future: false },
  { icon: Fingerprint, title: 'Identity Architecture', desc: 'Multi-layered identity verification framework designed to confirm student identity.', future: false },
  { icon: Eye, title: 'Anti-Cheating Readiness', desc: 'Built-in infrastructure for anti-cheating measures, ready to scale with advanced monitoring.', future: false },
  { icon: Globe, title: 'Proctoring Architecture', desc: 'Scalable proctoring infrastructure designed to support live monitoring and AI analysis.', future: true },
  { icon: Users, title: 'Role-Based Access', desc: 'Granular role-based access control ensures each user has exactly the permissions they need.', future: false },
];

const principles = [
  { icon: Lock, title: 'Zero Trust', desc: 'Every access request is verified regardless of origin.' },
  { icon: Shield, title: 'Defense in Depth', desc: 'Multiple security layers protect every component.' },
  { icon: Eye, title: 'Audit Everything', desc: 'Complete activity logging for forensic analysis.' },
  { icon: Key, title: 'Least Privilege', desc: 'Users get only the access they absolutely need.' },
  { icon: Users, title: 'Role Isolation', desc: 'Strict separation between student, teacher, admin roles.' },
  { icon: Building2, title: 'Institutional Control', desc: 'Organizations define their own security policies.' },
];

export default function Security() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="hero-content text-center mx-auto">
            <p className="caption" style={{ marginBottom: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Shield size={12} /> Enterprise Security</span>
            </p>
            <h1 className="headline-super hero-title">
              Security-first architecture.
            </h1>
            <p className="hero-subtitle">
              Every layer of Procto Vision is designed with security at its core — from exam
              access to session monitoring to data protection.
            </p>
            <div className="hero-actions">
              <Link to="/platform" className="btn btn-primary">
                Explore Platform <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Security Inquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 600, margin: '0 auto 64px' }}>
            <p className="caption" style={{ marginBottom: 8 }}>Security Features</p>
            <h2 className="headline-large">
              Comprehensive security framework.
            </h2>
            <p className="subhead-large">
              Multi-layered protection designed to safeguard examination integrity.
            </p>
          </Reveal>
          <div className="feature-row">
            {securityFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="feature-item" style={{ position: 'relative' }}>
                  {f.future && (
                    <span className="badge badge-warning" style={{ position: 'absolute', top: 16, right: 16 }}>Future</span>
                  )}
                  <div className="feature-item-icon">
                    <f.icon size={28} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Architecture</p>
            <h2 className="headline-large">
              Proctoring readiness.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto' }}>
              Our architecture is built to scale from basic monitoring to full AI proctoring.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="apple-card" style={{ maxWidth: 700, margin: '48px auto 0', padding: '40px 48px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div style={{ background: 'var(--accent)', color: 'white', padding: '10px 28px', borderRadius: 980, fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Shield size={14} /> Security Layer
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
              </div>

              <div className="security-arch-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Access Control', icon: Lock, active: true },
                  { label: 'Session Monitor', icon: Eye, active: true },
                  { label: 'AI Analysis', icon: Shield, active: false },
                ].map((node) => (
                  <div key={node.label} style={{
                    textAlign: 'center',
                    padding: '16px 12px',
                    borderRadius: 12,
                    border: `1px solid ${node.active ? 'var(--accent)' : 'var(--border)'}`,
                    background: node.active ? 'rgba(0,113,227,0.06)' : 'var(--bg-gray)',
                    opacity: node.active ? 1 : 0.5,
                  }}>
                    <node.icon size={20} style={{ color: node.active ? 'var(--accent)' : 'var(--text-muted)', margin: '0 auto 6px' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 500, color: node.active ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                      {node.label}
                    </span>
                    {!node.active && (
                      <span className="badge badge-warning" style={{ marginTop: 6, fontSize: '0.6rem' }}>Future</span>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
              </div>

              <div className="security-arch-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {[
                  { label: 'X-Code Entry', active: true },
                  { label: 'Tab Detection', active: true },
                  { label: 'Fullscreen Lock', active: true },
                  { label: 'Video Feed', active: false },
                ].map((item) => (
                  <div key={item.label} style={{
                    textAlign: 'center',
                    padding: '10px 8px',
                    borderRadius: 8,
                    background: item.active ? 'rgba(52,199,89,0.06)' : 'var(--bg-gray)',
                    border: `1px solid ${item.active ? 'rgba(52,199,89,0.2)' : 'var(--border)'}`,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: item.active ? 'var(--success)' : 'var(--text-muted)',
                  }}>
                    {item.active && <Check size={10} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />}
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20, padding: '10px 16px', background: 'var(--bg-gray)', borderRadius: 8, textAlign: 'center' }}>
                <p className="body-small">
                  Active capabilities shown in green · Planned capabilities marked as Future
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Our Principles</p>
            <h2 className="headline-large">
              Security principles.
            </h2>
          </Reveal>
          <div className="feature-row" style={{ marginTop: 64 }}>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <p.icon size={28} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="headline-large">
              Have security questions?
            </h2>
            <p className="subhead-large" style={{ maxWidth: 480, margin: '12px auto 0' }}>
              Our team is ready to discuss your institution's security requirements.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/platform" className="btn btn-secondary">View Platform</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
