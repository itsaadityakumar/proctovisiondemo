import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, HelpCircle, Shield } from 'lucide-react';
import { calculatePerTestPrice, getTierRate } from '../../services/pricingService';
import { pricing } from '../../config/brand';
import { useInView } from '../../hooks/useInView';

export default function Pricing() {
  const [studentCount, setStudentCount] = useState(500);
  const total = calculatePerTestPrice(studentCount);
  const rate = getTierRate(studentCount);
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: cardsRef, isInView: cardsVisible } = useInView();
  const { ref: tierRef, isInView: tierVisible } = useInView();
  const { ref: faqRef, isInView: faqVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div ref={heroRef} className={`hero-content reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-badge">
              <Zap size={14} /> Simple Pricing
            </span>
            <h1 className="heading-xl hero-title">
              Transparent, Fair <span className="gradient-text">Pricing</span>
            </h1>
            <p className="hero-subtitle">
              Pay only for what you use. No hidden fees, no surprise charges.
              Scale your examinations without worrying about costs.
            </p>
            <div className="hero-actions">
              <a href="#pricing-cards" className="btn btn-primary btn-lg">
                View Plans <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section section-border" id="pricing-cards">
        <div className="container">
          <div ref={cardsRef} className={`text-center reveal ${cardsVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 64px' }}>
            <span className="label">Plans</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              Flexible pricing designed for institutions of all sizes
            </p>
          </div>

          <div className="pricing-cards">
            {/* Per Test Card */}
            <div className="pricing-card featured">
              <span className="badge badge-primary" style={{ marginBottom: 16 }}>Most Popular</span>
              <h3>{pricing.perTest.name}</h3>
              <p className="body-sm" style={{ color: 'var(--text-muted)', marginBottom: 16 }}>{pricing.perTest.description}</p>

              <div className="pricing-calculated">
                <div className="amount">₹{total.toLocaleString('en-IN')}</div>
                <div className="detail">Estimated total for {studentCount.toLocaleString('en-IN')} students</div>
                <div className="detail" style={{ marginTop: 4 }}>Base: ₹{pricing.perTest.basePrice} + ₹{rate}/student</div>
              </div>

              <div className="pricing-slider">
                <label>Number of students: <strong>{studentCount.toLocaleString('en-IN')}</strong></label>
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                />
                <div className="slider-labels">
                  <span>100</span>
                  <span>2,500</span>
                  <span>5,000</span>
                  <span>7,500</span>
                  <span>10,000</span>
                </div>
              </div>

              <ul>
                {pricing.perTest.features.map((f) => (
                  <li key={f}>
                    <Check size={16} style={{ color: 'var(--success)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Get Started <ArrowRight size={16} />
              </Link>
            </div>

            {/* Enterprise Card */}
            <div className="pricing-card">
              <span className="badge badge-success" style={{ marginBottom: 16 }}>Enterprise</span>
              <h3>{pricing.enterprise.name}</h3>
              <p className="body-sm" style={{ color: 'var(--text-muted)', marginBottom: 16 }}>{pricing.enterprise.description}</p>

              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div className="price">Custom</div>
                <div className="detail" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tailored to your institution</div>
              </div>

              <ul>
                {pricing.enterprise.features.map((f) => (
                  <li key={f}>
                    <Check size={16} style={{ color: 'var(--success)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                Contact Sales <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Breakdown */}
      <section className="section section-border">
        <div className="container">
          <div ref={tierRef} className={`text-center reveal ${tierVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Volume Discounts</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Per-Student <span className="gradient-text">Rate Tiers</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 12 }}>
              The more students, the lower your per-student rate
            </p>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-elevated)' }}>
                    {['Student Range', 'Per-Student Rate', 'Example (500 students)'].map((h) => (
                      <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.perTest.tiers.map((tier, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-elevated)' }}>
                      <td style={{ padding: '14px 20px', fontSize: '0.9rem', borderBottom: '1px solid var(--border)' }}>
                        {tier.min.toLocaleString('en-IN')} – {tier.max.toLocaleString('en-IN')}
                      </td>
                      <td style={{ padding: '14px 20px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-light)', borderBottom: '1px solid var(--border)' }}>
                        ₹{tier.rate}/student
                      </td>
                      <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>
                        {i === 0 ? `₹${calculatePerTestPrice(500).toLocaleString('en-IN')} total` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-border">
        <div className="container">
          <div ref={faqRef} className={`text-center reveal ${faqVisible ? 'visible' : ''}`} style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            <span className="label">Questions?</span>
            <h2 className="heading-lg" style={{ marginTop: 12 }}>
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is there a setup fee?', a: 'No. There are no setup fees for the Per Test plan. Enterprise plans include custom onboarding at no additional charge.' },
              { q: 'Can I change my plan later?', a: 'Yes. You can upgrade from Per Test to Enterprise at any time. Contact our sales team for a seamless transition.' },
              { q: 'What payment methods do you accept?', a: 'We accept UPI, net banking, credit/debit cards, and bank transfers. Enterprise customers can also pay via invoice.' },
              { q: 'Is there a free trial?', a: 'Contact us to discuss a pilot program for your institution. We offer special pricing for initial deployments.' },
            ].map((faq) => (
              <div key={faq.q} className="card" style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <HelpCircle size={16} style={{ color: 'var(--accent-light)' }} />
                  <h4 className="heading-sm">{faq.q}</h4>
                </div>
                <p className="body-md">{faq.a}</p>
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
                Ready to <span className="gradient-text">Get Started</span>?
              </h2>
              <p className="body-lg" style={{ marginTop: 12, maxWidth: 500, margin: '12px auto 32px' }}>
                Start conducting secure examinations with transparent pricing
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                <Link to="/platform" className="btn btn-secondary btn-lg">Explore Platform</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
