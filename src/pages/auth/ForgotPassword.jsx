import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';
import { forgotPassword } from '../../services/authService';
import { brand } from '../../config/brand';
import { Shield, Loader2, Check, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToast } = useToast();

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const result = await forgotPassword(email.trim().toLowerCase());
      if (result.success) {
        setSuccess(true);
      } else {
        addToast(result.error || 'Failed to send reset link.', 'error');
      }
    } catch {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
        <div className="auth-orb auth-orb-3" />
        <div className="auth-orb auth-orb-4" />
        <div className="auth-card auth-success" style={{ textAlign: 'center' }}>
          <div className="auth-success-icon">
            <Check size={40} color="white" strokeWidth={2.5} />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d1d1f', marginBottom: 8, letterSpacing: '-0.02em' }}>
            Check Your Email
          </h1>
          <p style={{ color: '#6e6e73', marginBottom: 32, lineHeight: 1.6, fontSize: '0.9rem' }}>
            Reset link sent to your email. Please check your inbox and follow the instructions to reset your password.
          </p>
          <Link to="/login" className="btn" style={{ width: '100%', display: 'block', textAlign: 'center', padding: '14px', borderRadius: 14, background: 'linear-gradient(135deg, #0071e3, #5856d6)', color: 'white', fontWeight: 600, textDecoration: 'none' }}>
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon"><Shield size={26} /></span>
          <span className="auth-logo-text">{brand.name}</span>
        </Link>

        <div className="auth-heading">
          <h1>Reset Password</h1>
          <p>Enter your email and we'll send you a reset link</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="auth-form" style={{ marginTop: 8 }}>
          <div className="auth-field form-group">
            <label className="form-label" htmlFor="forgot-email">Email</label>
            <input
              id="forgot-email"
              type="email"
              className={`form-input${errors.email ? ' error' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({}); }}
              autoComplete="email"
              autoFocus
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="auth-submit">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Sending...
                </>
              ) : 'Send Reset Link'}
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={14} />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
