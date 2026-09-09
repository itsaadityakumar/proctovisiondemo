import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { brand } from '../../config/brand';
import Reveal from '../../components/ui/Reveal';
import {
  Shield, BookOpen, Lock, Users, BarChart3, Key, Zap,
  GraduationCap, Building2, UserCheck, Briefcase, ArrowRight,
  ClipboardList, Mail, Phone, MapPin
} from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Online Examinations', desc: 'Conduct secure, structured online exams with controlled access and real-time monitoring.', color: '#0071E3' },
  { icon: ClipboardList, title: 'Exam Management', desc: 'Create, schedule, and manage examinations from a centralized dashboard.', color: '#5856D6' },
  { icon: Key, title: 'X-Code Access', desc: 'Unique exam access codes for controlled, time-bound examination entry.', color: '#FF9F0A' },
  { icon: Shield, title: 'Anti-Cheating Design', desc: 'Security-first architecture designed to maintain examination integrity.', color: '#34C759' },
  { icon: Users, title: 'Student Management', desc: 'Organize students by institution, department, program, and batch.', color: '#BF5AF2' },
  { icon: BarChart3, title: 'Analytics Ready', desc: 'Examination insights and reporting for institutional decision-making.', color: '#FF375F' },
];

const steps = [
  { num: '01', title: 'Institution Onboarding', desc: 'Schools, colleges, and organizations join the platform.', color: '#0071E3' },
  { num: '02', title: 'Teacher Creates Exam', desc: 'Educators prepare and configure examinations.', color: '#5856D6' },
  { num: '03', title: 'X-Code Generated', desc: 'System generates a unique access code for each exam.', color: '#FF9F0A' },
  { num: '04', title: 'Student Enters X-Code', desc: 'Students log in and enter the code to access their exam.', color: '#34C759' },
];

const audiences = [
  { icon: GraduationCap, label: 'Schools', desc: 'Structured examinations and student assessment.' },
  { icon: Building2, label: 'Universities', desc: 'Institution-wide academic examination management.' },
  { icon: Users, label: 'Coaching', desc: 'Large-scale tests and controlled candidate access.' },
  { icon: UserCheck, label: 'Teachers', desc: 'Simple exam creation and student access.' },
  { icon: Briefcase, label: 'Corporate', desc: 'Structured assessments and training examinations.' },
];

export default function Home() {
  useEffect(() => { document.title = `${brand.name} — Secure Online Examinations`; }, []);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-content">
          <Reveal delay={0}>
            <p className="hero-eyebrow">
              <Zap size={14} /> Secure Online Examinations
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="headline-super hero-title">
              Exams, managed<br />with confidence.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-subtitle">
              {brand.name} helps institutions and educators conduct secure, structured online examinations with controlled access and future-ready proctoring.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/signup" className="btn btn-secondary hero-cta-secondary">
                Get Started
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is Procto Vision */}
      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 10 }}>What is {brand.name}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="headline-large" style={{ marginBottom: 18 }}>
              The examination platform<br />built for institutions.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="subhead-large" style={{ maxWidth: 660, margin: '0 auto' }}>
              A complete ecosystem for creating, managing, and conducting secure online examinations — designed for schools, universities, coaching institutes, and enterprises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 10 }}>Platform</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="headline-large" style={{ marginBottom: 56 }}>
              Everything you need to<br />manage examinations.
            </h2>
          </Reveal>
          <div className="feature-row">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <f.icon size={30} style={{ color: f.color }} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray" id="how-it-works">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 10 }}>How It Works</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="headline-large" style={{ marginBottom: 56 }}>
              From setup to exam day,<br />in four simple steps.
            </h2>
          </Reveal>
          <div className="steps-flow">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="step-item">
                  <div className="step-number" style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}dd)` }}>
                    {s.num}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section" id="audiences">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 10 }}>Who It's For</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="headline-large" style={{ marginBottom: 56 }}>
              Built for every<br />institution.
            </h2>
          </Reveal>
          <div className="audience-row">
            {audiences.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="feature-item glow-card" style={{ padding: '40px 18px' }}>
                  <div className="feature-item-icon"><a.icon size={28} /></div>
                  <h3 style={{ fontSize: '1rem' }}>{a.label}</h3>
                  <p style={{ fontSize: '0.82rem' }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section section-gray" id="security">
        <div className="container">
          <div className="content-block">
            <div className="content-block-text">
              <Reveal>
                <p className="caption" style={{ marginBottom: 10 }}>Security</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="headline-medium" style={{ marginBottom: 14 }}>
                  Designed for secure<br />examination workflows.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="subhead-medium" style={{ marginBottom: 24 }}>
                  Security is not a feature — it's the foundation. {brand.name} is built with a security-first architecture designed to maintain examination integrity at every level.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Link to="/security" className="btn btn-secondary">Learn more about security</Link>
              </Reveal>
            </div>
            <Reveal delay={200} animation="reveal-right">
              <div className="content-block-visual-mock dark" style={{
                background: 'linear-gradient(135deg, #0f0f1a, #1a1a3e)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 40%, rgba(0,113,227,0.15) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
                <div style={{ textAlign: 'center', padding: 44, position: 'relative', zIndex: 1 }}>
                  <Shield size={52} style={{ color: 'var(--accent)', marginBottom: 18 }} />
                  <p style={{ color: 'var(--text-white-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Security-First Architecture</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-lg" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,113,227,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <h2 className="headline-large" style={{ marginBottom: 18 }}>
              Ready to transform your<br />examinations?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto 36px', color: 'var(--text-white-muted)' }}>
              Get started with {brand.name} today or request a personalized demo for your institution.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link to="/signup" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                Create Account
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-row">
            <div>
              <Reveal>
                <p className="caption" style={{ marginBottom: 10 }}>Contact</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="headline-medium" style={{ marginBottom: 22 }}>
                  Get in touch.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="contact-info-stack">
                  <div className="contact-info-item">
                    <span className="icon"><Mail size={16} /></span>
                    <div><h4>Email</h4><p>{brand.email}</p></div>
                  </div>
                  <div className="contact-info-item">
                    <span className="icon"><Phone size={16} /></span>
                    <div><h4>Phone</h4><p>{brand.phone}</p></div>
                  </div>
                  <div className="contact-info-item">
                    <span className="icon"><MapPin size={16} /></span>
                    <div><h4>Location</h4><p>CGC University, Mohali, India</p></div>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} animation="reveal-right">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54899.609333215936!2d76.59418825435323!3d30.68392849932244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe5b795735cfd%3A0xb287b4430b6720fb!2sCGC%20University%2C%20Mohali!5e0!3m2!1sen!2sin!4v1788940890391!5m2!1sen!2sin"
                  width="100%" height="340" style={{ border: 0, display: 'block' }}
                  allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
                  title="Office Location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
