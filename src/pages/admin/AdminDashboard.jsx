import { useState } from 'react';
import { institutions, teachers, students, mockExams } from '../../data/mockData';
import { Building2, GraduationCap, Users, FileText, Shield, BarChart3 } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'institutions', label: 'Institutions', icon: Building2 },
  { id: 'teachers', label: 'Teachers', icon: GraduationCap },
  { id: 'students', label: 'Students', icon: Users },
  { id: 'exams', label: 'Exams', icon: FileText },
];

const stats = [
  { label: 'Total Institutions', value: institutions.length, change: '+0 this month' },
  { label: 'Total Teachers', value: teachers.length, change: '+0 this month' },
  { label: 'Total Students', value: students.length, change: '+0 this month' },
  { label: 'Active Exams', value: mockExams.filter((e) => e.status === 'active').length, change: '+0 this week' },
];

const th = { display: 'table-cell', padding: '12px 16px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-light)' };
const td = { display: 'table-cell', padding: '12px 16px', fontSize: '0.9rem', borderBottom: '1px solid var(--border-light)', color: 'var(--text-secondary)' };
const tdPrimary = { ...td, fontWeight: 500, color: 'var(--text-primary)' };
const tdMono = { ...td, fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)' };

function DataTable({ headers, children }) {
  return (
    <div className="data-table" style={{ display: 'table', width: '100%' }}>
      <div style={{ display: 'table-header-group' }}>
        <div style={{ display: 'table-row' }}>
          {headers.map((h) => <div key={h} style={th}>{h}</div>)}
        </div>
      </div>
      <div style={{ display: 'table-row-group' }}>{children}</div>
    </div>
  );
}

function Row({ children }) {
  return <div style={{ display: 'table-row' }}>{children}</div>;
}

function Cell({ children, style = td }) {
  return <div style={style}>{children}</div>;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="logo"><Shield size={20} /> Procto Vision</div>
        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <a key={tab.id} href="#" className={activeTab === tab.id ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}>
                <Icon size={16} /> {tab.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <main className="admin-main">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <h1 className="headline-large">Admin Dashboard</h1>
            <p style={{ marginTop: 4, color: 'var(--text-muted)', fontSize: '0.85rem' }}>Platform overview and management</p>
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

            <h2 className="headline-small" style={{ marginBottom: 16 }}>Recent Exams</h2>
            <DataTable headers={['Exam', 'X-Code', 'Teacher', 'Date', 'Status']}>
              {mockExams.map((exam) => {
                const teacher = teachers.find((t) => t.id === exam.teacher);
                return (
                  <Row key={exam.id}>
                    <Cell style={tdPrimary}>{exam.name}</Cell>
                    <Cell style={tdMono}>{exam.xCode}</Cell>
                    <Cell>{teacher?.name || exam.teacher}</Cell>
                    <Cell>{exam.date}</Cell>
                    <Cell><span className={`badge ${exam.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{exam.status}</span></Cell>
                  </Row>
                );
              })}
            </DataTable>
          </>
        )}

        {activeTab === 'institutions' && (
          <>
            <h2 className="headline-small" style={{ marginBottom: 16 }}>Institutions</h2>
            <DataTable headers={['ID', 'Name', 'Type', 'Departments']}>
              {institutions.map((inst) => (
                <Row key={inst.id}>
                  <Cell style={tdMono}>{inst.id}</Cell>
                  <Cell style={tdPrimary}>{inst.name}</Cell>
                  <Cell><span className="badge badge-primary">{inst.type}</span></Cell>
                  <Cell>{inst.departments.length}</Cell>
                </Row>
              ))}
            </DataTable>
          </>
        )}

        {activeTab === 'teachers' && (
          <>
            <h2 className="headline-small" style={{ marginBottom: 16 }}>Teachers</h2>
            <DataTable headers={['ID', 'Name', 'Department', 'Email']}>
              {teachers.map((t) => (
                <Row key={t.id}>
                  <Cell style={tdMono}>{t.id}</Cell>
                  <Cell style={tdPrimary}>{t.name}</Cell>
                  <Cell>{t.dept}</Cell>
                  <Cell>{t.email}</Cell>
                </Row>
              ))}
            </DataTable>
          </>
        )}

        {activeTab === 'students' && (
          <>
            <h2 className="headline-small" style={{ marginBottom: 16 }}>Students</h2>
            <DataTable headers={['ID', 'Name', 'Department', 'Batch', 'Email']}>
              {students.map((s) => (
                <Row key={s.id}>
                  <Cell style={tdMono}>{s.id}</Cell>
                  <Cell style={tdPrimary}>{s.name}</Cell>
                  <Cell>{s.dept}</Cell>
                  <Cell>{s.batch}</Cell>
                  <Cell>{s.email}</Cell>
                </Row>
              ))}
            </DataTable>
          </>
        )}

        {activeTab === 'exams' && (
          <>
            <h2 className="headline-small" style={{ marginBottom: 16 }}>Exams</h2>
            <DataTable headers={['Exam', 'X-Code', 'Department', 'Date', 'Duration', 'Status']}>
              {mockExams.map((exam) => (
                <Row key={exam.id}>
                  <Cell style={tdPrimary}>{exam.name}</Cell>
                  <Cell style={tdMono}>{exam.xCode}</Cell>
                  <Cell>{exam.dept}</Cell>
                  <Cell>{exam.date}</Cell>
                  <Cell>{exam.duration} min</Cell>
                  <Cell><span className={`badge ${exam.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{exam.status}</span></Cell>
                </Row>
              ))}
            </DataTable>
          </>
        )}
      </main>
    </div>
  );
}
