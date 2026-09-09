import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { brand } from '../../config/brand';
import { Shield, Menu, X, ChevronDown, BookOpen, Lock, Zap, Building2, Users, Phone } from 'lucide-react';

const productLinks = [
  { label: 'Platform', path: '/platform', icon: BookOpen, desc: 'Full examination platform' },
  { label: 'How It Works', path: '/how-it-works', icon: Zap, desc: 'Step-by-step guide' },
  { label: 'Security', path: '/security', icon: Lock, desc: 'Security & proctoring' },
];

const companyLinks = [
  { label: 'About', path: '/about', icon: Building2, desc: 'Our story & mission' },
  { label: 'Leadership', path: '/about#leadership', icon: Users, desc: 'Meet the team' },
  { label: 'Contact', path: '/contact', icon: Phone, desc: 'Get in touch' },
];

function Dropdown({ label, links, isOpen, onToggle, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button className={`nav-dropdown-trigger ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        {label}
        <ChevronDown size={14} className={`nav-dropdown-chevron ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <div className="nav-dropdown-menu">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="nav-dropdown-item" onClick={onClose}>
              <span className="nav-dropdown-icon"><link.icon size={16} /></span>
              <span className="nav-dropdown-text">
                <span className="nav-dropdown-label">{link.label}</span>
                <span className="nav-dropdown-desc">{link.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  if (user) return null;

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon"><Shield size={16} /></span>
            {brand.name}
          </Link>

          <nav className="navbar-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>

            <Dropdown
              label="Product"
              links={productLinks}
              isOpen={openDropdown === 'product'}
              onToggle={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
              onClose={() => setOpenDropdown(null)}
            />

            <Dropdown
              label="Company"
              links={companyLinks}
              isOpen={openDropdown === 'company'}
              onToggle={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
              onClose={() => setOpenDropdown(null)}
            />

            <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
          </nav>

          <div className="navbar-actions">
            <Link to="/login" className="btn btn-ghost btn-sm">Login</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Sign Up Free</Link>
          </div>

          <button className="navbar-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
            <span className="logo-icon"><Shield size={16} /></span>
            {brand.name}
          </Link>
          <button className="navbar-mobile-btn" onClick={() => setMobileOpen(false)} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="mobile-nav-section">
            <span className="mobile-nav-section-title">Product</span>
            {productLinks.map((l) => (
              <Link key={l.path} to={l.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <l.icon size={16} /> {l.label}
              </Link>
            ))}
          </div>

          <div className="mobile-nav-section">
            <span className="mobile-nav-section-title">Company</span>
            {companyLinks.map((l) => (
              <Link key={l.path} to={l.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <l.icon size={16} /> {l.label}
              </Link>
            ))}
          </div>

          <Link to="/pricing" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
        </div>

        <div className="mobile-nav-actions">
          <Link to="/login" className="btn btn-secondary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>Login</Link>
          <Link to="/signup" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>Sign Up Free</Link>
        </div>
      </div>
    </>
  );
}
