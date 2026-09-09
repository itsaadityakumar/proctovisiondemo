import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Shield, LogOut } from 'lucide-react';

export default function AuthenticatedHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="auth-header">
      <div className="auth-header-logo">
        <Link to="/dashboard" className="auth-header-logo__link">
          <span className="auth-header-logo__icon">
            <Shield size={18} />
          </span>
          ProctoVision
        </Link>
      </div>

      <div className="auth-header-user">
        <span className="auth-header-user__name">
          {user?.displayName || user?.email}
        </span>
        <button className="auth-header-user__logout" onClick={handleLogout}>
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </header>
  );
}
