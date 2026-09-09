import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { login } from '../../services/authService';
import { brand } from '../../config/brand';
import { Shield } from 'lucide-react';

export default function Login() {
  const [activeTab, setActiveTab] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [turnstile, setTurnstile] = useState(false);
  const [errors, setErrors] = useState({});
  const { loading, setLoading, loginUser } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (!password) errs.password = 'Password is required.';
    if (!turnstile) errs.turnstile = 'Please verify you are human.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await login(email, password, activeTab);
      if (result.success) {
        loginUser(result.user);
        addToast('Login successful!', 'success');
        navigate(result.user.role === 'student' ? '/student' : '/teacher');
      } else {
        addToast(result.error || 'Login failed.', 'error');
      }
    } catch {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

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

        <h2 style={{ color: 'var(--text-primary)' }}>Welcome Back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => setActiveTab('student')}
            type="button"
          >
            Student
          </button>
          <button
            className={`auth-tab ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => setActiveTab('teacher')}
            type="button"
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">
              Email Address
            </label>
            <input
              id="login-email"
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: '' }));
              }}
              autoComplete="email"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((p) => ({ ...p, password: '' }));
              }}
              autoComplete="current-password"
            />
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>

          <div className="form-group" style={{ textAlign: 'center' }}>
            <div
              className="turnstile-mock"
              style={{ cursor: 'pointer', margin: '0 auto' }}
              onClick={() => {
                setTurnstile(!turnstile);
                if (errors.turnstile) setErrors((p) => ({ ...p, turnstile: '' }));
              }}
              role="checkbox"
              aria-checked={turnstile}
              tabIndex={0}
            >
              <div
                className="check"
                style={{
                  background: turnstile ? 'var(--success)' : 'transparent',
                  borderColor: turnstile ? 'var(--success)' : 'var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                {turnstile && (
                  <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 700 }}>
                    ✓
                  </span>
                )}
              </div>
              <span>I'm not a robot</span>
            </div>
            {errors.turnstile && <p className="form-error">{errors.turnstile}</p>}
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
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="auth-footer">
          {activeTab === 'student'
            ? 'Demo: student@demo.proctovision.com / demo1234'
            : 'Demo: teacher@demo.proctovision.com / demo1234'}
        </div>
      </div>
    </div>
  );
}
