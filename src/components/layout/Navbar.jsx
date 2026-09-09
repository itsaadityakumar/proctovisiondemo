import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { brand } from '../../config/brand';
import { Shield, Menu, X, ChevronDown, BookOpen, Lock, Zap, Building2, Users, Phone, Sun, Moon } from 'lucide-react';

const productLinks = [
  { label: 'Platform', path: '/platform', icon: BookOpen, desc: 'Complete examination platform' },
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
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button className={`nav-dropdown-trigger${isOpen ? ' active' : ''}`} onClick={onToggle}>
        {label}
        <ChevronDown size={12} className={`nav-dropdown-chevron${isOpen ? ' open' : ''}`} />
      </button>
      <div className={`nav-dropdown-menu${isOpen ? ' open' : ''}`} style={!isOpen ? { pointerEvents: 'none' } : undefined}>
        {links.map((l) => (
          <Link key={l.path} to={l.path} className="nav-dropdown-item" onClick={onClose}>
            <span className="nav-dropdown-icon"><l.icon size={16} /></span>
            <span className="nav-dropdown-text">
              <span className="nav-dropdown-label">{l.label}</span>
              <span className="nav-dropdown-desc">{l.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [location.pathname]);

  if (user) return null;

  const isActive = (p) => location.pathname === p;

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon"><Shield size={14} /></span>
            {brand.name}
          </Link>

          <nav className="navbar-links">
            <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
            <Dropdown
              label="Product"
              links={productLinks}
              isOpen={openDrop === 'product'}
              onToggle={() => setOpenDrop(openDrop === 'product' ? null : 'product')}
              onClose={() => setOpenDrop(null)}
            />
            <Dropdown
              label="Company"
              links={companyLinks}
              isOpen={openDrop === 'company'}
              onToggle={() => setOpenDrop(openDrop === 'company' ? null : 'company')}
              onClose={() => setOpenDrop(null)}
            />
            <Link to="/pricing" className={`nav-link${isActive('/pricing') ? ' active' : ''}`}>Pricing</Link>
          </nav>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
          </div>

          <button className="navbar-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
            <span className="logo-icon"><Shield size={14} /></span>{brand.name}
          </Link>
          <button className="navbar-mobile-btn" onClick={() => setMobileOpen(false)} aria-label="Close">
            <X size={20} />
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
          <Link to="/login" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Login</Link>
          <Link to="/signup" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Sign Up</Link>
        </div>
      </div>
    </>
  );
}
