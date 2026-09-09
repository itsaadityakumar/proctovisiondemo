import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ color: 'var(--text-primary)', marginBottom: 12 }}>
              <span className="logo-icon"><Shield size={16} /></span>
              {brand.name}
            </Link>
            <p>{brand.tagline} — Enterprise-grade secure examination platform for institutions and educators.</p>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`mailto:${brand.email}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Mail size={14} /> {brand.email}
              </a>
              <a href={`tel:${brand.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Phone size={14} /> {brand.phone}
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <MapPin size={14} /> {brand.location}
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/platform">Features</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/security">Security</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/about#leadership">Leadership</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={brand.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={brand.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
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
