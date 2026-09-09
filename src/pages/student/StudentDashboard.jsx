import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { validateXCode } from '../../services/examService';
import AuthenticatedHeader from '../../components/layout/AuthenticatedHeader';
import { ShieldCheck, AlertCircle, Clock, ChevronLeft, ChevronRight, Send } from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [xCode, setXCode] = useState('');
  const [exam, setExam] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 30;

  const handleAccessExam = async () => {
    if (!xCode.trim()) {
      setError('Please enter an X-Code to access the exam.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const result = await validateXCode(xCode);
      if (result.success) {
        setExam(result.exam);
        addToast('Exam accessed successfully!', 'success');
      } else {
        setError(result.error);
        addToast('Invalid X-Code', 'error');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAccessExam();
  };

  return (
    <div className="auth-layout">
      <AuthenticatedHeader />
      <main className="auth-main">
        <div className="auth-welcome">
          <h1 style={{ color: 'var(--text-primary)' }}>
            Hi, {user?.name?.split(' ')[0] || 'Student'}
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>
            Enter your X-Code below to access your scheduled examination.
          </p>
        </div>

        {!exam ? (
          <>
            <div className="xcode-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter X-Code (e.g. PV-7K4M-82QX)"
                value={xCode}
                onChange={(e) => {
                  setXCode(e.target.value.toUpperCase());
                  if (error) setError('');
                }}
                onKeyDown={handleKeyDown}
                maxLength={15}
                autoFocus
              />
              <button
                className="btn btn-primary"
                onClick={handleAccessExam}
                disabled={loading || !xCode.trim()}
              >
                {loading ? 'Verifying...' : 'Access Exam'}
              </button>
            </div>

            {error && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 16,
                  padding: '12px 16px',
                  background: 'var(--error-bg)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  color: 'var(--error)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="xcode-info">
              <h4>What is an X-Code?</h4>
              <p>
                An X-Code is a unique exam access code provided by your teacher.
                It looks like <strong style={{ color: 'var(--accent-light)' }}>PV-XXXX-XXXX</strong> and grants
                you entry into a specific examination session. Enter it above and
                click "Access Exam" to begin.
              </p>
            </div>
          </>
        ) : (
          <div className="exam-shell">
            <div className="exam-header-bar">
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {exam.name}
                </h2>
                <span className="body-sm" style={{ color: 'var(--text-muted)' }}>
                  Candidate: {user?.name || 'Student'}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="proctor-status">
                  <span className="dot"></span>
                  Proctor Active
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    background: 'var(--accent-glow)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--accent-light)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                  }}
                >
                  <Clock size={14} />
                  01:30:00
                </div>
              </div>
            </div>

            <div className="exam-question-area">
              <div style={{ marginBottom: 8 }}>
                <span className="label" style={{ color: 'var(--accent-light)' }}>
                  Question {currentQuestion} of {totalQuestions}
                </span>
              </div>
              <div
                style={{
                  padding: '32px 24px',
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius)',
                  border: '1px dashed var(--border-light)',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Question content will appear here once the exam is fully
                  launched.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <span
                className="body-sm"
                style={{
                  display: 'block',
                  marginBottom: 8,
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                }}
              >
                Navigation
              </span>
              <div className="exam-nav-dots">
                {Array.from({ length: totalQuestions }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`exam-nav-dot${i + 1 === currentQuestion ? ' current' : ''}${i + 1 <= 5 ? ' answered' : ''}${i + 1 === 12 ? ' flagged' : ''}`}
                    onClick={() => setCurrentQuestion(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="exam-controls">
              <button
                className="btn btn-secondary btn-sm"
                disabled={currentQuestion <= 1}
                onClick={() => setCurrentQuestion((q) => q - 1)}
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setExam(null);
                  setXCode('');
                  setCurrentQuestion(1);
                }}
              >
                Exit Exam
              </button>
              {currentQuestion < totalQuestions ? (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setCurrentQuestion((q) => q + 1)}
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    addToast('Exam submitted successfully!', 'success')
                  }
                >
                  <Send size={16} /> Submit Exam
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
