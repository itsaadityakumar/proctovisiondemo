import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { validateXCode } from '../../services/examService';
import AuthenticatedHeader from '../../components/layout/AuthenticatedHeader';
import { AlertCircle, Clock, ChevronLeft, ChevronRight, Send, Loader2 } from 'lucide-react';

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

  return (
    <div className="auth-layout">
      <AuthenticatedHeader />
      <main className="auth-main">
        <div className="auth-welcome">
          <h1 className="headline-large">
            Hi, {user?.name?.split(' ')[0] || 'Student'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            Enter your X-Code below to access your scheduled examination.
          </p>
        </div>

        {!exam ? (
          <div style={{ maxWidth: 520, width: '100%' }}>
            <div className="xcode-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter X-Code (e.g. PV-7K4M-82QX)"
                value={xCode}
                onChange={(e) => { setXCode(e.target.value.toUpperCase()); if (error) setError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && handleAccessExam()}
                maxLength={15}
                autoFocus
              />
              <button className="btn btn-primary" onClick={handleAccessExam} disabled={loading || !xCode.trim()}>
                {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : 'Access Exam'}
              </button>
            </div>

            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, padding: '14px 18px', background: 'rgba(255,59,48,0.08)', borderRadius: 12, color: 'var(--error)', fontSize: '0.9rem', fontWeight: 500 }}>
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="xcode-info" style={{ marginTop: 28 }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                What is an X-Code?
              </h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                An X-Code is a unique exam access code provided by your teacher.
                It looks like <strong style={{ color: 'var(--accent)' }}>PV-XXXX-XXXX</strong> and grants
                you entry into a specific examination session. Enter it above and
                click "Access Exam" to begin.
              </p>
            </div>
          </div>
        ) : (
          <div className="exam-shell">
            <div className="exam-header-bar">
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                  {exam.name}
                </h2>
                <p style={{ color: 'var(--text-muted)', marginTop: 2, fontSize: '0.85rem' }}>
                  Candidate: {user?.name || 'Student'}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="proctor-status">
                  <span className="dot"></span>
                  Proctor Active
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'rgba(0,113,227,0.08)', borderRadius: 10, fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                  <Clock size={14} />
                  01:30:00
                </div>
              </div>
            </div>

            <div className="exam-question-area">
              <div style={{ marginBottom: 8 }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Question {currentQuestion} of {totalQuestions}
                </span>
              </div>
              <div style={{ padding: '40px 28px', background: 'var(--bg-gray)', borderRadius: 14, textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Question content will appear here once the exam is fully launched.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <span style={{ display: 'block', marginBottom: 10, fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
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
              <button className="btn btn-secondary btn-sm" disabled={currentQuestion <= 1} onClick={() => setCurrentQuestion((q) => q - 1)}>
                <ChevronLeft size={16} /> Previous
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => { setExam(null); setXCode(''); setCurrentQuestion(1); }}>
                Exit Exam
              </button>
              {currentQuestion < totalQuestions ? (
                <button className="btn btn-primary btn-sm" onClick={() => setCurrentQuestion((q) => q + 1)}>
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={() => addToast('Exam submitted successfully!', 'success')}>
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
