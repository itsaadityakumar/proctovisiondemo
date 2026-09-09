import { Link } from 'react-router-dom';
import { BookOpen, ClipboardList, Key, Shield, Users, BarChart, ArrowRight, Zap, Lock, Check } from 'lucide-react';
import Reveal from '../../components/ui/Reveal';

const features = [
  {
    icon: BookOpen,
    title: 'Online Examination',
    desc: 'Conduct secure online examinations with a distraction-free interface. Support for MCQ, descriptive, coding, and file uploads.',
    items: ['Multiple question types', 'Auto-save', 'Timer & progress'],
  },
  {
    icon: ClipboardList,
    title: 'Exam Management',
    desc: 'Create, schedule, and manage examinations with powerful tools. Set question banks, define time limits, and control access windows.',
    items: ['Create & schedule', 'Question banks', 'Access control'],
  },
  {
    icon: Key,
    title: 'X-Code Access',
    desc: 'Unique examination codes provide secure, single-use access to each exam. No shared links or vulnerable credentials.',
    items: ['Unique per exam', 'One-time use', 'Time-bound'],
  },
  {
    icon: Shield,
    title: 'Anti-Cheating Ready',
    desc: 'Built-in anti-cheating infrastructure with tab-switch detection, fullscreen enforcement, and activity monitoring.',
    items: ['Tab detection', 'Fullscreen lock', 'Activity log'],
  },
  {
    icon: Users,
    title: 'Student Management',
    desc: 'Manage student enrollments, track performance across exams, and maintain comprehensive records.',
    items: ['Enrollment', 'Performance tracking', 'Records'],
  },
  {
    icon: BarChart,
    title: 'Analytics & Reports',
    desc: 'Gain deep insights into exam performance with detailed analytics. Track pass rates and score distributions.',
    items: ['Score distributions', 'Pass rates', 'Export reports'],
  },
];

const currentCapabilities = [
  'Online examination delivery', 'X-Code based secure access', 'Exam creation & management',
  'Student enrollment system', 'Basic anti-cheating measures', 'Real-time exam timer',
  'Auto-save responses', 'Performance analytics', 'Email & WhatsApp notifications',
  'Role-based access control',
];

const futureCapabilities = [
  'AI-powered live proctoring', 'Facial recognition verification', 'Advanced browser lockdown',
  'Plagiarism detection engine', 'Video/audio monitoring', 'Question paper randomization',
  'Advanced question types', 'White-label deployment', 'Mobile examination app',
  'Blockchain credential verification',
];

function FeatureSection({ feature, index }) {
  const isReversed = index % 2 === 1;
  return (
    <Reveal delay={index * 80}>
      <div className="content-block" style={{ padding: '60px 0' }}>
        <div className="content-block-text" style={{ order: isReversed ? 2 : 1 }}>
          <div style={{ width: 48, height: 48, background: 'rgba(0,113,227,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            <feature.icon size={24} style={{ color: 'var(--accent)' }} />
          </div>
          <h2 className="headline-medium">{feature.title}</h2>
          <p className="subhead-large" style={{ marginTop: 12 }}>{feature.desc}</p>
          <ul style={{ listStyle: 'none', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {feature.items.map((item) => (
              <li key={item} className="subhead-medium" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Check size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-block-visual" style={{ order: isReversed ? 1 : 2 }}>
          <div className="content-block-visual-mock">
            <feature.icon size={48} style={{ color: 'var(--accent)', opacity: 0.25 }} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Platform() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="hero-content text-center mx-auto">
            <p className="caption" style={{ marginBottom: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Zap size={12} /> Complete Platform</span>
            </p>
            <h1 className="headline-super hero-title">
              The complete examination platform.
            </h1>
            <p className="hero-subtitle">
              From exam creation to result analytics — Procto Vision provides everything
              institutions need to conduct secure, reliable online examinations at any scale.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary">
                See How It Works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Platform Features</p>
            <h2 className="headline-large">
              Everything you need for online exams.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto' }}>
              A comprehensive suite of tools designed for modern educational institutions.
            </p>
          </Reveal>
          <div className="feature-row" style={{ marginTop: 64 }}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="feature-item">
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
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 600, margin: '0 auto 48px' }}>
            <p className="caption" style={{ marginBottom: 8 }}>Deep Dive</p>
            <h2 className="headline-large">
              Explore each capability.
            </h2>
          </Reveal>
          {features.map((f, i) => (
            <FeatureSection key={f.title} feature={f} index={i} />
          ))}
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Roadmap</p>
            <h2 className="headline-large">
              Capabilities overview.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto' }}>
              See what's available today and what's coming soon.
            </p>
          </Reveal>
          <div className="card-grid" style={{ marginTop: 64 }}>
            <Reveal delay={0}>
              <div className="apple-card" style={{ borderTop: '3px solid var(--success)' }}>
                <p className="caption" style={{ color: 'var(--success)', marginBottom: 16 }}>Current Capabilities</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {currentCapabilities.map((cap) => (
                    <li key={cap} className="subhead-medium" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Check size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="apple-card" style={{ borderTop: '3px solid var(--accent)' }}>
                <p className="caption" style={{ color: 'var(--accent)', marginBottom: 16 }}>Future Capabilities</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {futureCapabilities.map((cap) => (
                    <li key={cap} className="subhead-medium" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Lock size={16} style={{ color: 'var(--accent)', flexShrink: 0, opacity: 0.6 }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="headline-large">
              Ready to experience the platform?
            </h2>
            <p className="subhead-large" style={{ maxWidth: 480, margin: '12px auto 0' }}>
              Start conducting secure online examinations today.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
              <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Sales</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
