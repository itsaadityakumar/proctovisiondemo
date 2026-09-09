import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-404">
      <div>
        <div style={{ marginBottom: 24 }}>
          <Shield size={48} style={{ color: 'var(--accent-glow-strong)', margin: '0 auto' }} />
        </div>
        <h1>404</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
