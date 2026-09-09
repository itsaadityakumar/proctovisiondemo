import { useState } from 'react';
import {
  institutions,
  teachers,
  students,
  mockExams,
} from '../../data/mockData';
import {
  Building2,
  GraduationCap,
  Users,
  FileText,
  Shield,
  BarChart3,
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'institutions', label: 'Institutions', icon: Building2 },
  { id: 'teachers', label: 'Teachers', icon: GraduationCap },
  { id: 'students', label: 'Students', icon: Users },
  { id: 'exams', label: 'Exams', icon: FileText },
];

const stats = [
  {
    label: 'Total Institutions',
    value: institutions.length,
    change: '+0 this month',
  },
  {
    label: 'Total Teachers',
    value: teachers.length,
    change: '+0 this month',
  },
  {
    label: 'Total Students',
    value: students.length,
    change: '+0 this month',
  },
  {
    label: 'Active Exams',
    value: mockExams.filter((e) => e.status === 'active').length,
    change: '+0 this week',
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="logo">
          <Shield size={20} /> Procto Vision
        </div>
        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.id}
                href="#"
                className={activeTab === tab.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                <Icon size={16} />
                {tab.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <main className="admin-main">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 32,
          }}
        >
          <div>
            <h1 className="heading-md">Admin Dashboard</h1>
            <p
              className="body-sm"
              style={{ marginTop: 4, color: 'var(--text-muted)' }}
            >
              Platform overview and management
            </p>
          </div>
          <span className="badge badge-warning">Demo Mode</span>
        </div>

        {activeTab === 'overview' && (
          <>
            <div className="admin-stats">
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-change">{s.change}</div>
                </div>
              ))}
            </div>

            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Recent Exams
            </h2>
            <div
              className="data-table"
              style={{ display: 'table', width: '100%' }}
            >
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['Exam', 'X-Code', 'Teacher', 'Date', 'Status'].map(
                    (h) => (
                      <div
                        key={h}
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
                        {h}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {mockExams.map((exam) => {
                  const teacher = teachers.find((t) => t.id === exam.teacher);
                  return (
                    <div key={exam.id} style={{ display: 'table-row' }}>
                      <div
                        style={{
                          display: 'table-cell',
                          padding: '12px 16px',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          borderBottom: '1px solid var(--border)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {exam.name}
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
                        {exam.xCode}
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
                        {teacher?.name || exam.teacher}
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
                        {exam.date}
                      </div>
                      <div
                        style={{
                          display: 'table-cell',
                          padding: '12px 16px',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <span
                          className={`badge ${exam.status === 'active' ? 'badge-success' : 'badge-warning'}`}
                        >
                          {exam.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {activeTab === 'institutions' && (
          <>
            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Institutions
            </h2>
            <div
              className="data-table"
              style={{ display: 'table', width: '100%' }}
            >
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['ID', 'Name', 'Type', 'Departments'].map((h) => (
                    <div
                      key={h}
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
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {institutions.map((inst) => (
                  <div key={inst.id} style={{ display: 'table-row' }}>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontFamily: "'Courier New', monospace",
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {inst.id}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {inst.name}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span className="badge badge-primary">{inst.type}</span>
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
                      {inst.departments.length}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'teachers' && (
          <>
            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Teachers
            </h2>
            <div
              className="data-table"
              style={{ display: 'table', width: '100%' }}
            >
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['ID', 'Name', 'Department', 'Email'].map((h) => (
                    <div
                      key={h}
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
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {teachers.map((t) => (
                  <div key={t.id} style={{ display: 'table-row' }}>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontFamily: "'Courier New', monospace",
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {t.id}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {t.name}
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
                      {t.dept}
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
                      {t.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'students' && (
          <>
            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Students
            </h2>
            <div
              className="data-table"
              style={{ display: 'table', width: '100%' }}
            >
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['ID', 'Name', 'Department', 'Batch', 'Email'].map((h) => (
                    <div
                      key={h}
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
                      {h}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {students.map((s) => (
                  <div key={s.id} style={{ display: 'table-row' }}>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontFamily: "'Courier New', monospace",
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {s.id}
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {s.name}
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
                      {s.dept}
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
                      {s.batch}
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
                      {s.email}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'exams' && (
          <>
            <h2
              className="heading-sm"
              style={{ marginBottom: 16, color: 'var(--text-primary)' }}
            >
              Exams
            </h2>
            <div
              className="data-table"
              style={{ display: 'table', width: '100%' }}
            >
              <div style={{ display: 'table-header-group' }}>
                <div style={{ display: 'table-row' }}>
                  {['Exam', 'X-Code', 'Department', 'Date', 'Duration', 'Status'].map(
                    (h) => (
                      <div
                        key={h}
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
                        {h}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div style={{ display: 'table-row-group' }}>
                {mockExams.map((exam) => (
                  <div key={exam.id} style={{ display: 'table-row' }}>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderBottom: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {exam.name}
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
                      {exam.xCode}
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
                      {exam.dept}
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
                      {exam.date}
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
                      {exam.duration} min
                    </div>
                    <div
                      style={{
                        display: 'table-cell',
                        padding: '12px 16px',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span
                        className={`badge ${exam.status === 'active' ? 'badge-success' : 'badge-warning'}`}
                      >
                        {exam.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
