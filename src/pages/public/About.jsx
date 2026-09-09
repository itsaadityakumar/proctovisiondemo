import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Eye, Heart, Lightbulb, Users } from 'lucide-react';
import { team } from '../../config/brand';
import Reveal from '../../components/ui/Reveal';

const values = [
  { icon: Shield, title: 'Security First', desc: 'Every feature is designed with exam integrity and data protection at its core.' },
  { icon: Heart, title: 'User-Centric', desc: 'We build for the end user — students, teachers, and administrators alike.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously evolving our platform with the latest technology and best practices.' },
  { icon: Users, title: 'Accessibility', desc: 'Making quality examination tools available to institutions of every size.' },
  { icon: Target, title: 'Reliability', desc: '99.9% uptime commitment so your exams never miss a beat.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear pricing, open communication, and honest business practices.' },
];

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="hero-content text-center mx-auto" style={{ maxWidth: 720 }}>
            <p className="caption" style={{ marginBottom: 12 }}>About Us</p>
            <h1 className="headline-super hero-title">
              Redefining online examinations for a digital world.
            </h1>
            <p className="subhead-large" style={{ maxWidth: 560, margin: '0 auto' }}>
              We started with a simple belief: every institution deserves access to secure, reliable,
              and easy-to-use examination technology.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <Reveal>
            <div className="content-block">
              <div className="content-block-text">
                <p className="caption" style={{ marginBottom: 8 }}>Our Story</p>
                <h2 className="headline-large">
                  Born from a real need.
                </h2>
                <p className="subhead-large" style={{ marginTop: 16 }}>
                  During the rapid shift to remote learning, we saw institutions struggle with unreliable
                  examination tools, complex setups, and compromised exam integrity. Teachers were frustrated,
                  students were anxious, and administrators were overwhelmed.
                </p>
                <p className="subhead-medium" style={{ marginTop: 16 }}>
                  Procto Vision was founded in 2024 with a mission to change that. We built a platform
                  that puts security and simplicity at the forefront — so institutions can focus on what
                  matters most: education.
                </p>
              </div>
              <div className="content-block-visual">
                <div className="content-block-visual-mock" style={{ padding: 48, textAlign: 'center' }}>
                  <div>
                    <div className="headline-super" style={{ color: 'var(--accent)', lineHeight: 1, marginBottom: 8 }}>
                      2024
                    </div>
                    <p className="caption">Year Founded</p>
                    <div className="about-stats-row" style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 32 }}>
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>200+</div>
                        <p className="caption">Institutions</p>
                      </div>
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>50K+</div>
                        <p className="caption">Students</p>
                      </div>
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>99.9%</div>
                        <p className="caption">Uptime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>The Challenge</p>
            <h2 className="headline-large" style={{ maxWidth: 600, margin: '0 auto' }}>
              Why we built Procto Vision.
            </h2>
          </Reveal>
          <div className="card-grid" style={{ marginTop: 64 }}>
            <Reveal delay={0}>
              <div className="apple-card" style={{ borderTop: '3px solid var(--error)' }}>
                <p className="caption" style={{ color: 'var(--error)', marginBottom: 16 }}>The Problem</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Existing tools are complex and expensive',
                    'Exam integrity is easily compromised',
                    'No unified platform for all exam needs',
                    'Poor student and teacher experience',
                    'Lack of real-time monitoring',
                  ].map((item) => (
                    <li key={item} className="subhead-medium" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: 'var(--error)', fontWeight: 700, marginTop: 2 }}>✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="apple-card" style={{ borderTop: '3px solid var(--success)' }}>
                <p className="caption" style={{ color: 'var(--success)', marginBottom: 16 }}>Our Solution</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Simple, intuitive platform for everyone',
                    'Multi-layered anti-cheating architecture',
                    'All-in-one exam creation and management',
                    'Beautiful experience on any device',
                    'Real-time proctoring and live dashboards',
                  ].map((item) => (
                    <li key={item} className="subhead-medium" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ color: 'var(--success)', fontWeight: 700, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="content-block">
            <Reveal>
              <div className="content-block-text">
                <div style={{ width: 48, height: 48, background: 'rgba(0,113,227,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Target size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h2 className="headline-medium">Our Mission</h2>
                <p className="subhead-large" style={{ marginTop: 12 }}>
                  To empower every institution with secure, accessible, and reliable online examination
                  technology — making quality assessments available to all, regardless of size or budget.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="content-block-visual">
                <div className="content-block-visual-mock">
                  <Target size={64} style={{ color: 'var(--accent)', opacity: 0.3 }} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="content-block reverse">
              <div className="content-block-text">
                <div style={{ width: 48, height: 48, background: 'rgba(0,113,227,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Eye size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h2 className="headline-medium">Our Vision</h2>
                <p className="subhead-large" style={{ marginTop: 12 }}>
                  To become the world's most trusted examination platform — where every test is fair,
                  every result is reliable, and every institution has the tools to assess with confidence.
                </p>
              </div>
              <div className="content-block-visual">
                <div className="content-block-visual-mock" style={{ background: 'var(--bg-dark)' }}>
                  <Eye size={64} style={{ color: 'var(--accent)', opacity: 0.3 }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Our Values</p>
            <h2 className="headline-large">
              What drives us every day.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto' }}>
              These core principles guide every decision we make and every feature we build.
            </p>
          </Reveal>
          <div className="feature-row" style={{ marginTop: 64 }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <v.icon size={28} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Our Team</p>
            <h2 className="headline-large">
              The people behind Procto Vision.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '0 auto' }}>
              A dedicated team of educators, engineers, and strategists working together to transform
              online examinations.
            </p>
          </Reveal>
          <div className="leadership-row" style={{ marginTop: 64 }}>
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="leadership-item">
                  <div className="leadership-photo">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <div className="bio">{member.bio}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <h2 className="headline-large">
              Join us on our mission.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 520, margin: '12px auto 0' }}>
              Whether you're an institution looking for a better exam platform or a talented individual
              who wants to make a difference — we'd love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link to="/platform" className="btn btn-secondary">
                View Open Positions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
