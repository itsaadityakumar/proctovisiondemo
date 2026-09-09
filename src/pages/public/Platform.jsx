import { BookOpen, ClipboardList, Key, Shield, Users, BarChart, Check, ArrowRight, Zap, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

const features = [
  {
    icon: BookOpen,
    title: 'Online Examination',
    description: 'Conduct secure online examinations with a distraction-free interface. Support for multiple question types including MCQ, descriptive, coding, and file uploads.',
    items: ['Multiple question types', 'Auto-save', 'Timer & progress'],
  },
  {
    icon: ClipboardList,
    title: 'Exam Management',
    description: 'Create, schedule, and manage examinations with powerful tools. Set question banks, define time limits, and control access windows with precision.',
    items: ['Create & schedule', 'Question banks', 'Access control'],
  },
  {
    icon: Key,
    title: 'X-Code Access',
    description: 'Unique examination codes (X-Codes) provide secure, single-use access to each exam. No shared links or vulnerable credentials.',
    items: ['Unique per exam', 'One-time use', 'Time-bound'],
  },
  {
    icon: Shield,
    title: 'Anti-Cheating Ready',
    description: 'Built-in anti-cheating infrastructure with tab-switch detection, fullscreen enforcement, and activity monitoring to maintain exam integrity.',
    items: ['Tab detection', 'Fullscreen lock', 'Activity log'],
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Manage student enrollments, track performance across exams, and maintain comprehensive records with an intuitive student directory.',
    items: ['Enrollment', 'Performance tracking', 'Records'],
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Gain deep insights into exam performance with detailed analytics. Track pass rates, score distributions, and identify areas for improvement.',
    items: ['Score distributions', 'Pass rates', 'Export reports'],
  },
];

const currentCapabilities = [
  'Online examination delivery',
  'X-Code based secure access',
  'Exam creation & management',
  'Student enrollment system',
  'Basic anti-cheating measures',
  'Real-time exam timer',
  'Auto-save responses',
  'Performance analytics',
  'Email & WhatsApp notifications',
  'Role-based access control',
];

const futureCapabilities = [
  'AI-powered live proctoring',
  'Facial recognition verification',
  'Advanced browser lockdown',
  'Plagiarism detection engine',
  'Video/audio monitoring',
  'Question paper randomization',
  'Advanced question types (draw, audio)',
  'White-label deployment',
  'Mobile examination app',
  'Blockchain credential verification',
];

function FeatureSection({ feature, index }) {
  const { ref, isInView } = useInView();
  const Icon = feature.icon;
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'visible' : ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: 48,
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <div style={{ order: isReversed ? 2 : 1 }}>
        <div className="feature-icon">
          <Icon size={24} />
        </div>
        <h3 className="heading-md" style={{ marginTop: 16, marginBottom: 12 }}>{feature.title}</h3>
        <p className="body-lg">{feature.description}</p>
      </div>
      <div style={{ order: isReversed ? 1 : 2 }}>
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: 32,
            border: '1px solid var(--border)',
          }}
        >
          <span className="label" style={{ marginBottom: 16, display: 'block' }}>{feature.title}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {feature.items.map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'var(--bg-elevated)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}>
                <Check size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView();
  const { ref: deepRef, isInView: deepVisible } = useInView();
  const { ref: capRef, isInView: capVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div ref={heroRef} className={`hero-content reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-badge">
              <Zap size={14} /> Complete Platform
            </span>
            <h1 className="heading-xl hero-title">
              Complete <span className="gradient-text">Examination Platform</span>
            </h1>
            <p className="hero-subtitle">
              From exam creation to result analytics — Procto Vision provides everything
              institutions need to conduct secure, reliable online examinations at any scale.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section section-border">
        <div className="container">
          <div ref={gridRef} className={`text-center reveal ${gridVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Platform Features</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Everything You Need for <span className="gradient-text">Online Exams</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              A comprehensive suite of tools designed for modern educational institutions
            </p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <f.icon size={24} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="section section-border">
        <div className="container">
          <div ref={deepRef} className={`text-center reveal ${deepVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 24px' }}>
            <span className="label">Deep Dive</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Explore Each <span className="gradient-text">Capability</span>
            </h2>
          </div>
          {features.map((f, i) => (
            <FeatureSection key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-border">
        <div className="container">
          <div ref={capRef} className={`text-center reveal ${capVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Roadmap</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Capabilities <span className="gradient-text">Overview</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              See what's available today and what's coming soon
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="card" style={{ borderTop: '3px solid var(--success)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, background: 'var(--success-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
                  <Check size={20} />
                </div>
                <h3 className="heading-sm">Current Capabilities</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {currentCapabilities.map((cap) => (
                  <li key={cap} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Check size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)' }}>
                  <ArrowRight size={20} />
                </div>
                <h3 className="heading-sm">Future Capabilities</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {futureCapabilities.map((cap) => (
                  <li key={cap} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Lock size={16} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
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
                Ready to Experience the <span className="gradient-text">Platform</span>?
              </h2>
              <p className="body-lg" style={{ marginTop: 12, maxWidth: 500, margin: '12px auto 32px' }}>
                Start conducting secure online examinations today
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Link to="/pricing" className="btn btn-primary btn-lg">View Pricing</Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
