import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const platformLinks = [
  { to: '/platform', label: 'Features' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/security', label: 'Security' },
  { to: '/pricing', label: 'Subscription' },
];

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
];

export default function Footer() {
  return (
    <footer className="section-dark footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ color: 'var(--text-white)', marginBottom: 14 }}>
              <span className="logo-icon"><Shield size={14} /></span>{brand.name}
            </Link>
            <p>{brand.tagline} — Secure examination platform for institutions and educators.</p>
          </div>

          <div>
            <h4 className="footer-heading">Platform</h4>
            <div className="footer-links">
              {platformLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-link">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links">
              <a href={`mailto:${brand.email}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={12} /> Email
              </a>
              <a href={`tel:${brand.phone}`} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={12} /> Phone
              </a>
              <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={12} /> Mohali, India
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{brand.copyright}</span>
          <span>Built for secure examinations</span>
        </div>
      </div>
    </footer>
  );
}
