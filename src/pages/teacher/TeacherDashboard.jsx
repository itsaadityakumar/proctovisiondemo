import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { generateExam, getExamsForTeacher } from '../../services/examService';
import AuthenticatedHeader from '../../components/layout/AuthenticatedHeader';
import { Copy, CheckCircle, Plus, FileText, Loader2 } from 'lucide-react';

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
    if (user?.id) {
      getExamsForTeacher(user.id).then(setExams);
    }
  }, [user?.id, generatedExam]);

  const validateName = (name) => {
    if (!name.trim()) { setNameError('Exam name is required.'); return false; }
    if (name.trim().length > 100) { setNameError('Exam name must be 100 characters or less.'); return false; }
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

  return (
    <div className="auth-layout">
      <AuthenticatedHeader />
      <main className="auth-main" style={{ maxWidth: 640 }}>
        <div className="auth-welcome">
          <h1 className="headline-large">
            Hi, {user?.name?.split(' ')[0] || 'Teacher'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            Create and manage your examinations from here.
          </p>
        </div>

        {!generatedExam ? (
          <div className="exam-gen-card" style={{ maxWidth: '100%' }}>
            <h2 className="headline-small" style={{ marginBottom: 24 }}>
              <Plus size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: 'var(--accent)' }} />
              Generate New Exam
            </h2>
            <div className="form-group">
              <label className="form-label">Exam Name <span style={{ color: 'var(--error)' }}>*</span></label>
              <input type="text" className={`form-input${nameError ? ' error' : ''}`} placeholder="e.g. Data Structures Mid-Term" value={examName} onChange={(e) => { setExamName(e.target.value); if (nameError) validateName(e.target.value); }} maxLength={100} />
              {nameError && <p className="form-error">{nameError}</p>}
              <p className="form-hint">{examName.length}/100 characters</p>
            </div>
            <button className="btn btn-primary" onClick={handleGenerate} disabled={loading || !examName.trim()} style={{ width: '100%' }}>
              {loading ? (
                <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Generating...</>
              ) : (
                <><FileText size={18} /> Generate Exam</>
              )}
            </button>
          </div>
        ) : (
          <div className="exam-gen-card" style={{ maxWidth: '100%' }}>
            <div className="success-state">
              <div className="success-icon"><CheckCircle size={32} /></div>
              <h2 className="headline-small">Exam Generated!</h2>
              <p style={{ marginTop: 4, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{generatedExam.name}</p>
            </div>

            <div className="xcode-display">
              <div style={{ color: 'var(--text-muted)', marginBottom: 12, fontSize: '0.85rem' }}>X-Code</div>
              <div className="code">{generatedExam.xCode}</div>
              <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
                {copied ? (
                  <><CheckCircle size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Copied!</>
                ) : (
                  <><Copy size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Copy X-Code</>
                )}
              </button>
            </div>

            <button className="btn btn-secondary" onClick={() => { setGeneratedExam(null); setExamName(''); setNameError(''); setCopied(false); }} style={{ width: '100%' }}>
              <Plus size={18} /> Generate Another Exam
            </button>
          </div>
        )}

        {exams.length > 0 && (
          <div style={{ marginTop: 40 }}>
            <h2 className="headline-small" style={{ marginBottom: 16 }}>Previously Generated Exams</h2>
            <div className="data-table" style={{ display: 'table', width: '100%' }}>
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['Name', 'X-Code', 'Date', 'Status'].map((h) => (
                    <div key={h} style={{ display: 'table-cell', padding: '12px 16px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-light)' }}>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {exams.map((e) => (
                  <div key={e.id} style={{ display: 'table-row' }}>
                    <div style={{ display: 'table-cell', padding: '12px 16px', fontSize: '0.9rem', borderBottom: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>{e.name}</div>
                    <div style={{ display: 'table-cell', padding: '12px 16px', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 600, borderBottom: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>{e.xCode}</div>
                    <div style={{ display: 'table-cell', padding: '12px 16px', fontSize: '0.9rem', borderBottom: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>{e.date}</div>
                    <div style={{ display: 'table-cell', padding: '12px 16px', borderBottom: '1px solid var(--border-light)' }}>
                      <span className={`badge ${e.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{e.status}</span>
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
