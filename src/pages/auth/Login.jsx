import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { login } from '../../services/authService';
import { brand } from '../../config/brand';
import { Shield, Loader2, Check, ArrowLeft } from 'lucide-react';

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
      {/* Animated background orbs */}
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />
      <div className="auth-orb auth-orb-4" />

      <Link to="/" className="auth-back-float">
        <ArrowLeft size={18} />
      </Link>

      {/* Glass card */}
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon"><Shield size={26} /></span>
          <span className="auth-logo-text">{brand.name}</span>
        </Link>

        <div className="auth-heading">
          <h1>Welcome back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <div className="auth-tabs">
          <div className={`auth-tab-indicator${activeTab === 'teacher' ? ' right' : ''}`} />
          <button
            className={`auth-tab${activeTab === 'student' ? ' active' : ''}`}
            onClick={() => setActiveTab('student')}
            type="button"
          >
            Student
          </button>
          <button
            className={`auth-tab${activeTab === 'teacher' ? ' active' : ''}`}
            onClick={() => setActiveTab('teacher')}
            type="button"
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="auth-form">
          <div className="auth-field form-group">
            <label className="form-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              className={`form-input${errors.email ? ' error' : ''}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: '' })); }}
              autoComplete="email"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="auth-field form-group">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              className={`form-input${errors.password ? ' error' : ''}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: '' })); }}
              autoComplete="current-password"
            />
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>

          <div className="auth-field form-group" style={{ textAlign: 'center' }}>
            <div
              className="turnstile-mock"
              onClick={() => { setTurnstile(!turnstile); if (errors.turnstile) setErrors((p) => ({ ...p, turnstile: '' })); }}
              role="checkbox"
              aria-checked={turnstile}
              tabIndex={0}
            >
              <div className={`check${turnstile ? ' checked' : ''}`}>
                {turnstile && <Check size={13} color="white" strokeWidth={3} />}
              </div>
              <span>I'm not a robot</span>
            </div>
            {errors.turnstile && <p className="form-error">{errors.turnstile}</p>}
          </div>

          <div className="auth-submit">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
          </div>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/signup">Create Account</Link>
        </div>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
}
