import { Link } from 'react-router-dom';
import {
  Shield,
  BookOpen,
  Lock,
  Users,
  BarChart3,
  Settings,
  ChevronRight,
  Eye,
  GraduationCap,
  Building2,
  UserCheck,
  Briefcase,
  ArrowRight,
  Zap,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { team, pricing } from '../../config/brand';
import { useInView } from '../../hooks/useInView';

const features = [
  {
    icon: BookOpen,
    title: 'Online Examination',
    description: 'Conduct secure online exams with real-time monitoring, auto-submission, and instant result generation.',
  },
  {
    icon: Settings,
    title: 'Exam Management',
    description: 'Create, schedule, and manage examinations with flexible question banks, time limits, and difficulty levels.',
  },
  {
    icon: Lock,
    title: 'X-Code Access',
    description: 'Unique exam entry codes ensure only authorized students can access specific examinations.',
  },
  {
    icon: Shield,
    title: 'Anti-Cheating Architecture',
    description: 'Multi-layered security with tab-switch detection, fullscreen enforcement, and activity logging.',
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Organize students by classes, departments, and roles with bulk import and enrollment features.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    description: 'Detailed performance analytics, score distributions, and institutional reporting dashboards.',
  },
];

const steps = [
  { title: 'Sign Up & Configure', description: 'Create your institution account and set up departments, classes, and user roles.' },
  { title: 'Create Examinations', description: 'Design exams with question banks, set time limits, and configure security settings.' },
  { title: 'Generate X-Codes', description: 'Generate unique exam entry codes and share them with your students securely.' },
  { title: 'Monitor & Analyze', description: 'Track live exam sessions, review submissions, and access detailed analytics.' },
];

const audiences = [
  { icon: Building2, title: 'Schools', description: 'K-12 institutions looking for reliable online exam solutions.' },
  { icon: GraduationCap, title: 'Colleges & Universities', description: 'Higher education bodies conducting semester and entrance exams.' },
  { icon: BookOpen, title: 'Coaching Institutes', description: 'Test prep centers and coaching classes running mock exams.' },
  { icon: UserCheck, title: 'Individual Teachers', description: 'Independent educators conducting assessments for their students.' },
  { icon: Briefcase, title: 'Corporate Training', description: 'Organizations running employee assessments and certifications.' },
];

function FeatureSection() {
  const { ref: ref1, isInView: v1 } = useInView();
  const { ref: ref2, isInView: v2 } = useInView();
  const { ref: stepsRef, isInView: stepsVisible } = useInView();
  const { ref: audRef, isInView: audVisible } = useInView();
  const { ref: secRef, isInView: secVisible } = useInView();
  const { ref: priceRef, isInView: priceVisible } = useInView();
  const { ref: leadRef, isInView: leadVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();

  return (
    <>
      {/* Features */}
      <section className="section">
        <div className="container">
          <div ref={ref1} className={`text-center mx-auto reveal ${v1 ? 'visible' : ''}`} style={{ maxWidth: 640 }}>
            <span className="label">Why Procto Vision</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Everything You Need for <span className="gradient-text">Secure Examinations</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              A complete platform designed to make online examinations secure, scalable, and simple for
              institutions of all sizes.
            </p>
          </div>
          <div ref={ref2} className={`feature-grid reveal ${v2 ? 'visible' : ''}`} style={{ marginTop: 48 }}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-border">
        <div className="container">
          <div ref={stepsRef} className={`text-center reveal ${stepsVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">How It Works</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Up and Running in <span className="gradient-text">Four Steps</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              From sign-up to your first live exam, the process is straightforward.
            </p>
          </div>
          <div className="steps-grid" style={{ marginTop: 48 }}>
            {steps.map((s) => (
              <div key={s.title} className="step">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section section-border">
        <div className="container">
          <div ref={audRef} className={`text-center reveal ${audVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">Who It's For</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Built for <span className="gradient-text">Every Learning Environment</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Whether you're a school, university, or corporate trainer — Procto Vision adapts to your needs.
            </p>
          </div>
          <div className="audience-grid" style={{ marginTop: 48 }}>
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="audience-card">
                  <div className="audience-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Preview */}
      <section className="section section-border">
        <div className="container">
          <div
            ref={secRef}
            className={`reveal ${secVisible ? 'visible' : ''}`}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
          >
            <div>
              <span className="label">Security First</span>
              <h2 className="heading-lg" style={{ marginTop: 12 }}>
                Enterprise-Grade Security for Every Exam
              </h2>
              <p className="body-lg" style={{ marginTop: 16 }}>
                Our multi-layered security architecture ensures exam integrity at every step. From secure
                login to post-exam audit trails, every detail is covered.
              </p>
              <ul style={{ marginTop: 20, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'End-to-end encrypted exam sessions',
                  'Real-time proctoring activity logs',
                  'Tab-switch and fullscreen monitoring',
                  'IP-based access restrictions',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/security" className="btn btn-primary" style={{ marginTop: 24 }}>
                Learn More About Security <ArrowRight size={16} />
              </Link>
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
              <Shield size={64} style={{ color: 'var(--accent-light)', marginBottom: 16 }} />
              <h3 className="heading-md">Zero-Trust Exam Environment</h3>
              <p className="body-md" style={{ marginTop: 8 }}>
                Every action is verified, every session is monitored, every result is trustworthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section section-border">
        <div className="container">
          <div ref={priceRef} className={`text-center reveal ${priceVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">Pricing</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Pay only for what you use. No hidden fees, no long-term contracts.
            </p>
          </div>
          <div className="pricing-cards" style={{ marginTop: 48 }}>
            <div className="pricing-card">
              <h3>{pricing.perTest.name}</h3>
              <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{pricing.perTest.description}</p>
              <div className="price">
                ₹{pricing.perTest.basePrice} <small>+ per student</small>
              </div>
              <ul>
                {pricing.perTest.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                Get Started
              </Link>
            </div>
            <div className="pricing-card featured">
              <h3>{pricing.enterprise.name}</h3>
              <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{pricing.enterprise.description}</p>
              <div className="price">
                Custom <small>tailored for you</small>
              </div>
              <ul>
                {pricing.enterprise.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-border">
        <div className="container">
          <div ref={leadRef} className={`text-center reveal ${leadVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="label">Leadership</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Meet the Team Behind <span className="gradient-text">Procto Vision</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              A team of passionate educators and technologists committed to transforming online examinations.
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
            ref={ctaRef}
            className={`reveal ${ctaVisible ? 'visible' : ''}`}
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
                Ready to Transform Your <span className="gradient-text">Examinations</span>?
              </h2>
              <p className="body-lg" style={{ marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>
                Join hundreds of institutions already using Procto Vision for secure, reliable online exams.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Request Demo <ChevronRight size={16} />
                </Link>
                <Link to="/signup" className="btn btn-secondary btn-lg">
                  Get Started Free <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: trustRef, isInView: trustVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div
            ref={heroRef}
            className={`hero-content reveal ${heroVisible ? 'visible' : ''}`}
          >
            <div className="hero-badge">
              <Zap size={14} /> Trusted by 200+ Institutions
            </div>
            <h1 className="heading-xl hero-title">
              <span className="gradient-text">Secure Online Examinations</span>, Built for Institutions
            </h1>
            <p className="hero-subtitle">
              An enterprise-grade examination and proctoring platform designed for schools, universities,
              and organizations that demand security, reliability, and simplicity.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request Demo <ChevronRight size={18} />
              </Link>
              <Link to="/signup" className="btn btn-secondary btn-lg">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div
          ref={trustRef}
          className={`container trust-grid reveal ${trustVisible ? 'visible' : ''}`}
        >
          <div className="trust-item">
            <div className="trust-icon">
              <Lock size={22} />
            </div>
            <h4>Secure Access</h4>
            <p>End-to-end encryption</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <BookOpen size={22} />
            </div>
            <h4>Exam Management</h4>
            <p>Full lifecycle control</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <Users size={22} />
            </div>
            <h4>Role-Based Architecture</h4>
            <p>Admin, teacher, student</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">
              <Globe size={22} />
            </div>
            <h4>Scalable Platform</h4>
            <p>From 10 to 10,000 users</p>
          </div>
        </div>
      </div>

      <FeatureSection />
    </>
  );
}
