import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, HelpCircle } from 'lucide-react';
import { calculatePerTestPrice, getTierRate } from '../../services/pricingService';
import { pricing } from '../../config/brand';
import Reveal from '../../components/ui/Reveal';

export default function Pricing() {
  const [studentCount, setStudentCount] = useState(500);
  const total = calculatePerTestPrice(studentCount);
  const rate = getTierRate(studentCount);

  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <Reveal className="hero-content text-center mx-auto">
            <p className="caption" style={{ marginBottom: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Zap size={12} /> Simple Pricing</span>
            </p>
            <h1 className="headline-super hero-title">
              Transparent, fair pricing.
            </h1>
            <p className="hero-subtitle">
              Pay only for what you use. No hidden fees, no surprise charges.
              Scale your examinations without worrying about costs.
            </p>
            <div className="hero-actions">
              <a href="#pricing-cards" className="btn btn-primary">
                View Plans <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Talk to Sales
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray" id="pricing-cards">
        <div className="container">
          <Reveal className="text-center" style={{ maxWidth: 600, margin: '0 auto 64px' }}>
            <p className="caption" style={{ marginBottom: 8 }}>Plans</p>
            <h2 className="headline-large">
              Choose your plan.
            </h2>
            <p className="subhead-large">
              Flexible pricing designed for institutions of all sizes.
            </p>
          </Reveal>

          <div className="pricing-row">
            <Reveal delay={0}>
              <div className="pricing-item featured">
                <span className="badge badge-primary" style={{ marginBottom: 16 }}>Most Popular</span>
                <h2 className="headline-medium">{pricing.perTest.name}</h2>
                <p className="subhead-medium" style={{ color: 'var(--text-white-muted)', marginBottom: 16 }}>{pricing.perTest.description}</p>

                <div className="pricing-calculated" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="price" style={{ color: 'white' }}>₹{total.toLocaleString('en-IN')}</div>
                  <p className="price-note" style={{ color: 'var(--text-white-muted)' }}>Estimated total for {studentCount.toLocaleString('en-IN')} students</p>
                  <p className="price-note" style={{ color: 'var(--text-white-muted)', marginTop: 4 }}>Base: ₹{pricing.perTest.basePrice} + ₹{rate}/student</p>
                </div>

                <div className="apple-slider">
                  <label>
                    <span>Students: <strong style={{ color: 'white' }}>{studentCount.toLocaleString('en-IN')}</strong></span>
                  </label>
                  <input
                    type="range"
                    min={100}
                    max={10000}
                    step={100}
                    value={studentCount}
                    onChange={(e) => setStudentCount(Number(e.target.value))}
                  />
                </div>

                <ul>
                  {pricing.perTest.features.map((f) => (
                    <li key={f}>
                      <Check size={14} style={{ color: 'var(--success)' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="pricing-item">
                <span className="badge badge-success" style={{ marginBottom: 16 }}>Enterprise</span>
                <h2 className="headline-medium">{pricing.enterprise.name}</h2>
                <p className="subhead-medium" style={{ color: 'var(--text-muted)', marginBottom: 16 }}>{pricing.enterprise.description}</p>

                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div className="price">Custom</div>
                  <p className="price-note">Tailored to your institution</p>
                </div>

                <ul>
                  {pricing.enterprise.features.map((f) => (
                    <li key={f}>
                      <Check size={14} style={{ color: 'var(--accent)' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Contact Sales
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Volume Discounts</p>
            <h2 className="headline-large">
              Per-student rate tiers.
            </h2>
            <p className="subhead-large" style={{ maxWidth: 480, margin: '0 auto' }}>
              The more students, the lower your per-student rate.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ maxWidth: 640, margin: '48px auto 0' }}>
              <div className="apple-card" style={{ padding: 0, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Student Range', 'Per-Student Rate', 'Example (500 students)'].map((h) => (
                        <th key={h} style={{ padding: '14px 24px', textAlign: 'left', fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-light)' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.perTest.tiers.map((tier, i) => (
                      <tr key={i}>
                        <td className="subhead-medium" style={{ padding: '14px 24px', borderBottom: '1px solid var(--border-light)' }}>
                          {tier.min.toLocaleString('en-IN')} – {tier.max.toLocaleString('en-IN')}
                        </td>
                        <td className="subhead-medium" style={{ padding: '14px 24px', fontWeight: 600, color: 'var(--accent)', borderBottom: '1px solid var(--border-light)' }}>
                          ₹{tier.rate}/student
                        </td>
                        <td className="subhead-medium" style={{ padding: '14px 24px', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-light)' }}>
                          {i === 0 ? `₹${calculatePerTestPrice(500).toLocaleString('en-IN')} total` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container text-center">
          <Reveal>
            <p className="caption" style={{ marginBottom: 8 }}>Questions?</p>
            <h2 className="headline-large">
              Pricing FAQ.
            </h2>
          </Reveal>
          <div style={{ maxWidth: 640, margin: '48px auto 0', display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
            {[
              { q: 'Is there a setup fee?', a: 'No. There are no setup fees for the Per Test plan. Enterprise plans include custom onboarding at no additional charge.' },
              { q: 'Can I change my plan later?', a: 'Yes. You can upgrade from Per Test to Enterprise at any time. Contact our sales team for a seamless transition.' },
              { q: 'What payment methods do you accept?', a: 'We accept UPI, net banking, credit/debit cards, and bank transfers. Enterprise customers can also pay via invoice.' },
              { q: 'Is there a free trial?', a: 'Contact us to discuss a pilot program for your institution. We offer special pricing for initial deployments.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="apple-card" style={{ padding: '24px 28px' }}>
                  <h3 className="headline-small" style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HelpCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {faq.q}
                  </h3>
                  <p className="subhead-medium">{faq.a}</p>
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
              Ready to get started?
            </h2>
            <p className="subhead-large" style={{ maxWidth: 480, margin: '12px auto 0' }}>
              Start conducting secure examinations with transparent pricing.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/platform" className="btn btn-secondary">Explore Platform</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
