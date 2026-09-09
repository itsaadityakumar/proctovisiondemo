import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-404">
      <div>
        <h1 className="headline-super" style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', lineHeight: 1 }}>
          404
        </h1>
        <p className="subhead-large" style={{ marginTop: 8, marginBottom: 32 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">Go Back</button>
        </div>
      </div>
    </div>
  );
}
