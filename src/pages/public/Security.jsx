import { Shield, Lock, Eye, Key, Users, Building2, ArrowRight, Check, AlertTriangle, Monitor, Fingerprint, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Secure Exam Access',
    description: 'X-Code based authentication ensures only authorized students can access examinations. No shared links or vulnerable password-based entry.',
    items: ['Unique X-Code per exam', 'Time-bound validity', 'Server-side validation', 'Rate limiting on attempts'],
    future: false,
  },
  {
    icon: Monitor,
    title: 'Controlled Sessions',
    description: 'Exam sessions are tightly controlled with fullscreen enforcement, tab-switch detection, and clipboard restrictions.',
    items: ['Fullscreen enforcement', 'Tab-switch alerts', 'Clipboard blocking', 'Right-click disabled'],
    future: false,
  },
  {
    icon: Fingerprint,
    title: 'Identity Architecture',
    description: 'Multi-layered identity verification framework designed to confirm student identity before and during examinations.',
    items: ['Institutional ID verification', 'Profile validation', 'Session fingerprinting', 'Device recognition'],
    future: false,
  },
  {
    icon: Eye,
    title: 'Anti-Cheating Readiness',
    description: 'Built-in infrastructure for anti-cheating measures, ready to scale with advanced monitoring capabilities.',
    items: ['Activity logging', 'Behavioral patterns', 'Screenshot prevention', 'Copy-paste blocking'],
    future: false,
  },
  {
    icon: Globe,
    title: 'Proctoring Architecture',
    description: 'Scalable proctoring infrastructure designed to support live monitoring, AI analysis, and intervention capabilities.',
    items: ['Live monitoring dashboard', 'AI anomaly detection', 'Real-time alerts', 'Proctor intervention'],
    future: true,
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description: 'Granular role-based access control ensures each user — student, teacher, admin — has exactly the permissions they need.',
    items: ['Student role', 'Teacher role', 'Admin role', 'Custom roles'],
    future: false,
  },
  {
    icon: Building2,
    title: 'Institutional Controls',
    description: 'Organization-level security policies and controls that administrators can configure for their institution.',
    items: ['Exam policies', 'Access schedules', 'IP restrictions', 'Audit logging'],
    future: true,
  },
];

function ProctoringDiagram() {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 40,
      border: '1px solid var(--border)',
    }}>
      <h3 className="heading-sm" style={{ textAlign: 'center', marginBottom: 32 }}>
        Proctoring Readiness Architecture
      </h3>

      {/* Top layer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <div style={{
          background: 'var(--accent)',
          color: 'white',
          padding: '12px 32px',
          borderRadius: 'var(--radius)',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <Shield size={16} /> Security Layer
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{ width: 2, height: 24, background: 'var(--border-light)' }} />
      </div>

      {/* Middle layer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { label: 'Access Control', icon: Lock, active: true },
          { label: 'Session Monitor', icon: Eye, active: true },
          { label: 'AI Analysis', icon: AlertTriangle, active: false },
        ].map((node) => (
          <div key={node.label} style={{
            textAlign: 'center',
            padding: '20px 12px',
            borderRadius: 'var(--radius)',
            border: `2px solid ${node.active ? 'var(--accent)' : 'var(--border)'}`,
            background: node.active ? 'var(--accent-glow)' : 'var(--bg-elevated)',
            opacity: node.active ? 1 : 0.6,
          }}>
            <node.icon size={24} style={{ color: node.active ? 'var(--accent-light)' : 'var(--text-muted)', margin: '0 auto 8px' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: node.active ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              {node.label}
            </span>
            {!node.active && (
              <span className="badge badge-warning" style={{ marginTop: 6, fontSize: '0.65rem' }}>Future</span>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{ width: 2, height: 24, background: 'var(--border-light)' }} />
      </div>

      {/* Bottom layer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          { label: 'X-Code Entry', active: true },
          { label: 'Tab Detection', active: true },
          { label: 'Fullscreen Lock', active: true },
          { label: 'Video Feed', active: false },
        ].map((item) => (
          <div key={item.label} style={{
            textAlign: 'center',
            padding: '12px 8px',
            borderRadius: 'var(--radius-sm)',
            background: item.active ? 'var(--success-bg)' : 'var(--bg-elevated)',
            border: `1px solid ${item.active ? 'rgba(34, 197, 94, 0.2)' : 'var(--border)'}`,
            fontSize: '0.75rem',
            fontWeight: 500,
            color: item.active ? 'var(--success)' : 'var(--text-muted)',
          }}>
            {item.active && <Check size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />}
            {item.label}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, padding: '12px 16px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', textAlign: 'center', border: '1px solid var(--border)' }}>
        <span className="body-sm">
          Active capabilities shown in green &middot; Planned capabilities marked as Future
        </span>
      </div>
    </div>
  );
}

export default function Security() {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: featRef, isInView: featVisible } = useInView();
  const { ref: archRef, isInView: archVisible } = useInView();
  const { ref: princRef, isInView: princVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div ref={heroRef} className={`hero-content reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-badge">
              <Shield size={14} /> Enterprise Security
            </span>
            <h1 className="heading-xl hero-title">
              <span className="gradient-text">Security-First</span> Architecture
            </h1>
            <p className="hero-subtitle">
              Every layer of Procto Vision is designed with security at its core — from exam
              access to session monitoring to data protection.
            </p>
            <div className="hero-actions">
              <Link to="/platform" className="btn btn-primary btn-lg">
                Explore Platform <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Security Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section section-border">
        <div className="container">
          <div ref={featRef} className={`text-center reveal ${featVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 64px' }}>
            <span className="label">Security Features</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Comprehensive <span className="gradient-text">Security Framework</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Multi-layered protection designed to safeguard examination integrity
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.5fr',
                  gap: 32,
                  alignItems: 'center',
                  padding: '32px 40px',
                  position: 'relative',
                }}>
                  {feature.future && (
                    <span className="badge badge-warning" style={{ position: 'absolute', top: 16, right: 16 }}>
                      Future
                    </span>
                  )}
                  <div>
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="heading-sm" style={{ marginTop: 12, marginBottom: 8 }}>{feature.title}</h3>
                    <p className="body-md">{feature.description}</p>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {feature.items.map((item) => (
                        <li key={item} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: '0.9rem',
                          color: feature.future ? 'var(--text-muted)' : 'var(--text-secondary)',
                          padding: '8px 12px',
                          background: feature.future ? 'var(--bg-elevated)' : 'var(--bg-card-hover)',
                          borderRadius: 'var(--radius-sm)',
                        }}>
                          <Check size={14} style={{ color: feature.future ? 'var(--text-muted)' : 'var(--accent-light)', flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proctoring Diagram */}
      <section className="section section-border">
        <div className="container">
          <div ref={archRef} className={`text-center reveal ${archVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Architecture</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Proctoring <span className="gradient-text">Readiness</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Our architecture is built to scale from basic monitoring to full AI proctoring
            </p>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <ProctoringDiagram />
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="section section-border">
        <div className="container">
          <div ref={princRef} className={`text-center reveal ${princVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Our Principles</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              <span className="gradient-text">Security Principles</span>
            </h2>
          </div>
          <div className="feature-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { icon: Lock, title: 'Zero Trust', desc: 'Every access request is verified regardless of origin' },
              { icon: Shield, title: 'Defense in Depth', desc: 'Multiple security layers protect every component' },
              { icon: Eye, title: 'Audit Everything', desc: 'Complete activity logging for forensic analysis' },
              { icon: Key, title: 'Least Privilege', desc: 'Users get only the access they absolutely need' },
              { icon: Users, title: 'Role Isolation', desc: 'Strict separation between student, teacher, admin roles' },
              { icon: Building2, title: 'Institutional Control', desc: 'Organizations define their own security policies' },
            ].map((p) => (
              <div key={p.title} className="feature-card" style={{ textAlign: 'center' }}>
                <div className="feature-icon" style={{ margin: '0 auto 16px' }}>
                  <p.icon size={24} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-border">
        <div className="container">
          <div
            ref={ctaRef}
            className={`text-center reveal ${ctaVisible ? 'visible' : ''}`}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '64px 48px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, var(--accent-glow-strong) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="heading-lg">
                Have <span className="gradient-text">Security Questions</span>?
              </h2>
              <p className="body-lg" style={{ marginTop: 12, maxWidth: 500, margin: '12px auto 32px' }}>
                Our team is ready to discuss your institution's security requirements
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                <Link to="/platform" className="btn btn-secondary btn-lg">View Platform</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
