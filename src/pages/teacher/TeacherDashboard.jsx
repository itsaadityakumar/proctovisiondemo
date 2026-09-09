import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { generateExam, getExamsForTeacher } from '../../services/examService';
import { mockExams } from '../../data/mockData';
import AuthenticatedHeader from '../../components/layout/AuthenticatedHeader';
import { Copy, CheckCircle, Plus, FileText } from 'lucide-react';

export default function TeacherDashboard() {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [examName, setExamName] = useState('');
  const [nameError, setNameError] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedExam, setGeneratedExam] = useState(null);
  const [copied, setCopied] = useState(false);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const loadExams = async () => {
      if (user?.id) {
        const teacherExams = await getExamsForTeacher(user.id);
        setExams(teacherExams);
      }
    };
    loadExams();
  }, [user?.id, generatedExam]);

  const validateName = (name) => {
    if (!name.trim()) {
      setNameError('Exam name is required.');
      return false;
    }
    if (name.trim().length > 100) {
      setNameError('Exam name must be 100 characters or less.');
      return false;
    }
    setNameError('');
    return true;
  };

  const handleGenerate = async () => {
    if (!validateName(examName)) return;
    setLoading(true);
    try {
      const result = await generateExam(examName, user.id);
      if (result.success) {
        setGeneratedExam(result.exam);
        addToast('Exam generated successfully!', 'success');
      }
    } catch {
      addToast('Failed to generate exam. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedExam.xCode);
      setCopied(true);
      addToast('X-Code copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      addToast('Failed to copy. Please copy manually.', 'error');
    }
  };

  const handleGenerateAnother = () => {
    setGeneratedExam(null);
    setExamName('');
    setNameError('');
    setCopied(false);
  };

  return (
    <div className="auth-layout">
      <AuthenticatedHeader />
      <main className="auth-main" style={{ maxWidth: 640 }}>
        <div className="auth-welcome">
          <h1 style={{ color: 'var(--text-primary)' }}>
            Hi, {user?.name?.split(' ')[0] || 'Teacher'}
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>
            Create and manage your examinations from here.
          </p>
        </div>

        {!generatedExam ? (
          <div className="exam-gen-card" style={{ maxWidth: '100%' }}>
            <h2
              className="heading-sm"
              style={{ marginBottom: 24, color: 'var(--text-primary)' }}
            >
              <Plus
                size={20}
                style={{
                  display: 'inline',
                  verticalAlign: 'middle',
                  marginRight: 8,
                  color: 'var(--accent-light)',
                }}
              />
              Generate New Exam
            </h2>
            <div className="form-group">
              <label className="form-label">
                Exam Name <span className="form-required">*</span>
              </label>
              <input
                type="text"
                className={`form-input${nameError ? ' error' : ''}`}
                placeholder="e.g. Data Structures Mid-Term"
                value={examName}
                onChange={(e) => {
                  setExamName(e.target.value);
                  if (nameError) validateName(e.target.value);
                }}
                maxLength={100}
              />
              {nameError && <p className="form-error">{nameError}</p>}
              <p className="form-hint">{examName.length}/100 characters</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleGenerate}
              disabled={loading || !examName.trim()}
              style={{ width: '100%' }}
            >
              {loading ? (
                <>
                  <span
                    className="loading-spinner"
                    style={{ width: 18, height: 18, borderWidth: 2 }}
                  />
                  Generating...
                </>
              ) : (
                <>
                  <FileText size={18} />
                  Generate Exam
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="exam-gen-card" style={{ maxWidth: '100%' }}>
            <div className="success-state">
              <div className="success-icon">
                <CheckCircle size={32} />
              </div>
              <h2
                className="heading-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                Exam Generated!
              </h2>
              <p
                className="body-sm"
                style={{ marginTop: 4, color: 'var(--text-secondary)' }}
              >
                {generatedExam.name}
              </p>
            </div>

            <div className="xcode-display">
              <div
                className="label"
                style={{ color: 'var(--text-muted)', marginBottom: 12 }}
              >
                X-Code
              </div>
              <div className="code">{generatedExam.xCode}</div>
              <button
                className={`copy-btn${copied ? ' copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckCircle
                      size={16}
                      style={{ verticalAlign: 'middle', marginRight: 6 }}
                    />{' '}
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy
                      size={16}
                      style={{ verticalAlign: 'middle', marginRight: 6 }}
                    />{' '}
                    Copy X-Code
                  </>
                )}
              </button>
            </div>

            <button
              className="btn btn-secondary"
              onClick={handleGenerateAnother}
              style={{ width: '100%' }}
            >
              <Plus size={18} /> Generate Another Exam
            </button>
          </div>
        )}

        {exams.length > 0 && (
          <div style={{ marginTop: 40 }}>
            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Previously Generated Exams
            </h2>
            <div className="data-table" style={{ display: 'table' }}>
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  <div
                    style={{
                      display: 'table-cell',
                      padding: '12px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-elevated)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    Name
                  </div>
                  <div
                    style={{
                      display: 'table-cell',
                      padding: '12px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-elevated)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    X-Code
                  </div>
                  <div
                    style={{
                      display: 'table-cell',
                      padding: '12px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-elevated)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    Date
                  </div>
                  <div
                    style={{
                      display: 'table-cell',
                      padding: '12px 16px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-elevated)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    Status
                  </div>
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {exams.map((e) => (
                  <div key={e.id} style={{ display: 'table-row' }}>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {e.name}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 600,
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {e.xCode}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {e.date}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span
                        className={`badge ${e.status === 'active' ? 'badge-success' : 'badge-warning'}`}
                      >
                        {e.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
