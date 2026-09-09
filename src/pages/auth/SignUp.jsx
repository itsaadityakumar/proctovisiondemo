import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';
import { signup } from '../../services/authService';
import { brand } from '../../config/brand';
import { Shield } from 'lucide-react';

const STUDENT_ID_REGEX = /^[A-Z]{3}-STU-\d{4}[A-Z]{2}\d{4}$/;
const TEACHER_ID_REGEX = /^[A-Z]{3}-TCH-\d{4}$/;

export default function SignUp() {
  const [activeTab, setActiveTab] = useState('student');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    tenrollId: '',
    turnstile: false,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const idFormat =
    activeTab === 'student'
      ? 'Format: XXX-STU-YYYYCCNNNN (e.g., PUC-STU-2026030042)'
      : 'Format: XXX-TCH-0000 (e.g., PUC-TCH-1024)';

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email address.';
    if (!form.password) errs.password = 'Password is required.';
    else if (form.password.length < 8)
      errs.password = 'Password must be at least 8 characters.';
    if (form.password !== form.confirmPassword)
      errs.confirmPassword = 'Passwords do not match.';

    if (activeTab === 'student') {
      if (!form.studentId.trim()) errs.studentId = 'Student ID is required.';
      else if (!STUDENT_ID_REGEX.test(form.studentId.toUpperCase().trim()))
        errs.studentId = 'Invalid format. Expected: XXX-STU-YYYYCCNNNN';
    } else {
      if (!form.tenrollId.trim()) errs.tenrollId = 'Teacher ID is required.';
      else if (!TEACHER_ID_REGEX.test(form.tenrollId.toUpperCase().trim()))
        errs.tenrollId = 'Invalid format. Expected: XXX-TCH-0000';
    }

    if (!form.turnstile) errs.turnstile = 'Please verify you are human.';
    if (!form.termsAccepted)
      errs.termsAccepted = 'You must accept the terms and conditions.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const isValid = useMemo(() => {
    const hasRequired =
      form.name.trim() &&
      form.email.trim() &&
      form.password &&
      form.confirmPassword;
    const hasId =
      activeTab === 'student' ? form.studentId.trim() : form.tenrollId.trim();
    return hasRequired && hasId && form.turnstile && form.termsAccepted;
  }, [form, activeTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        role: activeTab,
        ...(activeTab === 'student'
          ? { studentId: form.studentId.toUpperCase().trim() }
          : { tenrollId: form.tenrollId.toUpperCase().trim() }),
      };
      const result = await signup(payload);
      if (result.success) {
        setSuccess(true);
      } else {
        addToast(result.error || 'Signup failed. Please try again.', 'error');
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
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2
              className="heading-sm"
              style={{ marginBottom: 8, color: 'var(--text-primary)' }}
            >
              Verification Link Sent
            </h2>
            <p
              className="body-md"
              style={{ marginBottom: 24, color: 'var(--text-secondary)' }}
            >
              Verification link sent to your email. Please check your inbox and
              verify your account to continue.
            </p>
            <Link to="/login" className="btn btn-primary">
              Go to Login
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

        <h2 style={{ color: 'var(--text-primary)' }}>Create Account</h2>
        <p className="subtitle">
          Join {brand.name} as a student or teacher
        </p>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('student');
              setErrors({});
            }}
            type="button"
          >
            Student
          </button>
          <button
            className={`auth-tab ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('teacher');
              setErrors({});
            }}
            type="button"
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="signup-name">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              autoComplete="name"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-email">
              Email Address
            </label>
            <input
              id="signup-email"
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              autoComplete="email"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-password">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => update('password', e.target.value)}
              autoComplete="new-password"
            />
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="signup-confirm">
              Confirm Password
            </label>
            <input
              id="signup-confirm"
              type="password"
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={(e) => update('confirmPassword', e.target.value)}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="form-error">{errors.confirmPassword}</p>
            )}
          </div>

          {activeTab === 'student' ? (
            <div className="form-group">
              <label className="form-label" htmlFor="signup-studentId">
                Student ID
              </label>
              <input
                id="signup-studentId"
                type="text"
                className={`form-input ${errors.studentId ? 'error' : ''}`}
                placeholder="e.g., PUC-STU-2026030042"
                value={form.studentId}
                onChange={(e) =>
                  update('studentId', e.target.value.toUpperCase())
                }
                style={{ textTransform: 'uppercase' }}
              />
              <p className="form-hint">{idFormat}</p>
              {errors.studentId && (
                <p className="form-error">{errors.studentId}</p>
              )}
            </div>
          ) : (
            <div className="form-group">
              <label className="form-label" htmlFor="signup-tenrollId">
                Teacher ID
              </label>
              <input
                id="signup-tenrollId"
                type="text"
                className={`form-input ${errors.tenrollId ? 'error' : ''}`}
                placeholder="e.g., PUC-TCH-1024"
                value={form.tenrollId}
                onChange={(e) =>
                  update('tenrollId', e.target.value.toUpperCase())
                }
                style={{ textTransform: 'uppercase' }}
              />
              <p className="form-hint">{idFormat}</p>
              {errors.tenrollId && (
                <p className="form-error">{errors.tenrollId}</p>
              )}
            </div>
          )}

          <div className="form-group" style={{ textAlign: 'center' }}>
            <div
              className="turnstile-mock"
              style={{ cursor: 'pointer', margin: '0 auto' }}
              onClick={() => update('turnstile', !form.turnstile)}
              role="checkbox"
              aria-checked={form.turnstile}
              tabIndex={0}
            >
              <div
                className="check"
                style={{
                  background: form.turnstile
                    ? 'var(--success)'
                    : 'transparent',
                  borderColor: form.turnstile
                    ? 'var(--success)'
                    : 'var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
              >
                {form.turnstile && (
                  <span
                    style={{
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>
              <span>I'm not a robot</span>
            </div>
            {errors.turnstile && <p className="form-error">{errors.turnstile}</p>}
          </div>

          <div className="terms-check">
            <input
              type="checkbox"
              id="terms"
              checked={form.termsAccepted}
              onChange={(e) => update('termsAccepted', e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <Link
                to="/terms"
                style={{ color: 'var(--accent-light)', fontWeight: 500 }}
              >
                Terms &amp; Conditions
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                style={{ color: 'var(--accent-light)', fontWeight: 500 }}
              >
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="form-error" style={{ marginTop: -8 }}>
              {errors.termsAccepted}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 16 }}
            disabled={loading || !isValid}
          >
            {loading ? (
              <>
                <span
                  className="loading-spinner"
                  style={{ width: 18, height: 18, borderWidth: 2 }}
                />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
