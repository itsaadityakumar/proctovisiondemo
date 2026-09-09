import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Shield, LogOut } from 'lucide-react';

export default function AuthenticatedHeader() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <header className="auth-header">
      <Link to="/" className="auth-header-logo">
        <span className="logo-icon"><Shield size={18} /></span>
        {user?.role === 'teacher' ? 'Procto Vision Teacher' : 'Procto Vision Student'}
      </Link>

      <div className="auth-header-user">
        <span className="name">{user?.displayName || user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>
          <LogOut size={14} /> Log Out
        </button>
      </div>
    </header>
  );
}
