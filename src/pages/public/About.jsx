import { Link } from 'react-router-dom';
import {
  Shield,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { team } from '../../config/brand';
import { useInView } from '../../hooks/useInView';

const values = [
  { icon: Shield, title: 'Security First', description: 'Every feature is designed with exam integrity and data protection at its core.' },
  { icon: Heart, title: 'User-Centric', description: 'We build for the end user — students, teachers, and administrators alike.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Continuously evolving our platform with the latest technology and best practices.' },
  { icon: Users, title: 'Accessibility', description: 'Making quality examination tools available to institutions of every size.' },
  { icon: Target, title: 'Reliability', description: '99.9% uptime commitment so your exams never miss a beat.' },
  { icon: Eye, title: 'Transparency', description: 'Clear pricing, open communication, and honest business practices.' },
];

export default function About() {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: storyRef, isInView: storyVisible } = useInView();
  const { ref: probRef, isInView: probVisible } = useInView();
  const { ref: mvRef, isInView: mvVisible } = useInView();
  const { ref: valuesRef, isInView: valuesVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div
            ref={heroRef}
            className={`hero-content text-center mx-auto reveal ${heroVisible ? 'visible' : ''}`}
            style={{ maxWidth: 720 }}
          >
            <span className="label">About Us</span>
            <h1 className="heading-xl hero-title" style={{ marginTop: 12 }}>
              Redefining <span className="gradient-text">Online Examinations</span> for a Digital World
            </h1>
            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600, margin: '16px auto 0' }}>
              We started with a simple belief: every institution deserves access to secure, reliable,
              and easy-to-use examination technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section section-border">
        <div className="container">
          <div
            ref={storyRef}
            className={`reveal ${storyVisible ? 'visible' : ''}`}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          >
            <div>
              <span className="label">Our Story</span>
              <h2 className="heading-lg" style={{ marginTop: 12 }}>
                Born from a <span className="gradient-text">Real Need</span>
              </h2>
              <p className="body-lg" style={{ marginTop: 16 }}>
                During the rapid shift to remote learning, we saw institutions struggle with unreliable
                examination tools, complex setups, and compromised exam integrity. Teachers were frustrated,
                students were anxious, and administrators were overwhelmed.
              </p>
              <p className="body-md" style={{ marginTop: 16 }}>
                Procto Vision was founded in 2024 with a mission to change that. We built a platform
                that puts security and simplicity at the forefront — so institutions can focus on what
                matters most: education.
              </p>
            </div>
            <div
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                padding: 48,
                textAlign: 'center',
                border: '1px solid var(--border)',
              }}
            >
              <div className="heading-xl" style={{ color: 'var(--accent-light)', lineHeight: 1 }}>
                2024
              </div>
              <p className="body-sm" style={{ marginTop: 8 }}>Year Founded</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 24 }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>200+</div>
                  <p className="body-sm">Institutions</p>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>50K+</div>
                  <p className="body-sm">Students</p>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>99.9%</div>
                  <p className="body-sm">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section section-border">
        <div className="container">
          <div ref={probRef} className={`text-center reveal ${probVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">The Challenge</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Why We Built <span className="gradient-text">Procto Vision</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 48 }}>
            <div
              style={{
                padding: 32,
                background: 'var(--error-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <AlertTriangle size={20} style={{ color: 'var(--error)' }} />
                <h3 className="heading-sm" style={{ color: 'var(--error)' }}>The Problem</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Existing tools are complex and expensive',
                  'Exam integrity is easily compromised',
                  'No unified platform for all exam needs',
                  'Poor student and teacher experience',
                  'Lack of real-time monitoring capabilities',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--error)', fontWeight: 700, marginTop: 2 }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: 32,
                background: 'var(--success-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <CheckCircle size={20} style={{ color: 'var(--success)' }} />
                <h3 className="heading-sm" style={{ color: 'var(--success)' }}>Our Solution</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Simple, intuitive platform for everyone',
                  'Multi-layered anti-cheating architecture',
                  'All-in-one exam creation and management',
                  'Beautiful experience on any device',
                  'Real-time proctoring and live dashboards',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section section-border">
        <div className="container">
          <div ref={mvRef} className={`reveal ${mvVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="card" style={{ padding: 40 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-light)',
                  marginBottom: 20,
                }}
              >
                <Target size={28} />
              </div>
              <h2 className="heading-md">Our Mission</h2>
              <p className="body-lg" style={{ marginTop: 12 }}>
                To empower every institution with secure, accessible, and reliable online examination
                technology — making quality assessments available to all, regardless of size or budget.
              </p>
            </div>
            <div className="card" style={{ padding: 40 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-light)',
                  marginBottom: 20,
                }}
              >
                <Eye size={28} />
              </div>
              <h2 className="heading-md">Our Vision</h2>
              <p className="body-lg" style={{ marginTop: 12 }}>
                To become the world's most trusted examination platform — where every test is fair,
                every result is reliable, and every institution has the tools to assess with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-border">
        <div className="container">
          <div ref={valuesRef} className={`text-center reveal ${valuesVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">Our Values</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              What Drives Us <span className="gradient-text">Every Day</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              These core principles guide every decision we make and every feature we build.
            </p>
          </div>
          <div className="feature-grid" style={{ marginTop: 48 }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-border">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">Our Team</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              The People Behind <span className="gradient-text">Procto Vision</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              A dedicated team of educators, engineers, and strategists working together to transform
              online examinations.
            </p>
          </div>
          <div className="leadership-grid" style={{ marginTop: 48 }}>
            {team.map((member) => (
              <div key={member.name} className="leadership-card">
                <div className="leadership-photo">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <div className="bio">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-border">
        <div className="container">
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '64px 48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, var(--accent-glow-strong) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="heading-lg">
                Join Us on Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="body-lg" style={{ marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>
                Whether you're an institution looking for a better exam platform or a talented individual
                who wants to make a difference — we'd love to hear from you.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <Link to="/platform" className="btn btn-secondary btn-lg">
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
