import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';
import { forgotPassword } from '../../services/authService';
import { brand } from '../../config/brand';
import { Shield } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToast } = useToast();

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Enter a valid email address.';
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
        <div className="auth-card">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                <Shield size={18} />
              </span>
              {brand.name}
            </Link>
          </div>
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2
              className="heading-sm"
              style={{ marginBottom: 8, color: 'var(--text-primary)' }}
            >
              Check Your Email
            </h2>
            <p
              className="body-md"
              style={{ marginBottom: 24, color: 'var(--text-secondary)' }}
            >
              Reset link sent to your email. Please check your inbox and follow
              the instructions to reset your password.
            </p>
            <Link to="/login" className="btn btn-primary">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 700,
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                background: 'var(--accent)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '0.9rem',
              }}
            >
              <Shield size={18} />
            </span>
            {brand.name}
          </Link>
        </div>

        <h2 style={{ color: 'var(--text-primary)' }}>Forgot Password?</h2>
        <p className="subtitle">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="forgot-email">
              Email Address
            </label>
            <input
              id="forgot-email"
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({});
              }}
              autoComplete="email"
              autoFocus
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 8 }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="loading-spinner"
                  style={{ width: 18, height: 18, borderWidth: 2 }}
                />
                Sending...
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>

        <div className="auth-footer" style={{ marginTop: 20 }}>
          <Link to="/login">← Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
