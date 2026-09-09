import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { useInView } from '../../hooks/useInView';

export default function Privacy() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-lg" style={{ paddingTop: 'calc(var(--nav-h) + 40px)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div ref={ref} className={`text-center reveal ${isInView ? 'visible' : ''}`} style={{ marginBottom: 48 }}>
          <h1 className="heading-lg">
            <span className="gradient-text">Privacy</span> Policy
          </h1>
          <p className="body-md" style={{ marginTop: 8 }}>
            Last updated: September 9, 2026
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>1. Information Collection</h2>
          <p className="body-md">
            We collect information you provide directly when you create an account, participate in examinations, or contact support. This includes your name, email address, institutional identification, profile information, and examination responses. We also automatically collect certain data when you use the platform, including device information, browser type, IP address, usage logs, and examination session metadata. This data is necessary for the proper functioning of the platform and the integrity of the examination process.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>2. Use of Information</h2>
          <p className="body-md">
            We use the information we collect to provide, maintain, and improve the {brand.name} platform; to administer examinations and deliver results; to detect and prevent fraud, cheating, and other violations of examination integrity; to communicate with you about your account, examinations, and platform updates; to comply with legal obligations and enforce our terms of service; and to generate anonymized analytics and reports for institutional administrators. We do not sell your personal information to third parties.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>3. Data Security</h2>
          <p className="body-md">
            We implement industry-standard security measures to protect your personal information, including encryption in transit (TLS 1.3) and at rest, regular security audits, access controls, and secure data center infrastructure. Examination data is stored in isolated environments with strict access restrictions. While we take all reasonable precautions to protect your data, no method of transmission or storage is completely secure. We cannot guarantee absolute security, though we are committed to promptly addressing any security incidents.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>4. Cookies</h2>
          <p className="body-md">
            {brand.name} uses cookies and similar technologies to maintain your session, remember your preferences, ensure platform security, and analyze usage patterns. Essential cookies are required for the platform to function properly and cannot be disabled. Functional cookies remember your preferences, and analytics cookies help us understand how the platform is used. You can manage non-essential cookies through your browser settings, though disabling them may affect your experience.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>5. Third-Party Services</h2>
          <p className="body-md">
            We may share information with trusted third-party service providers who assist in operating the platform, such as cloud hosting providers, payment processors, and analytics services. These providers are contractually obligated to use your information only for the purposes of providing services to us and in compliance with this Privacy Policy. We may also share information when required by law, to protect our rights, or in connection with a merger, acquisition, or sale of assets. We do not authorize third parties to use your information for their own marketing purposes.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>6. User Rights</h2>
          <p className="body-md">
            You have the right to access, correct, or delete your personal information at any time. You may request a copy of the data we hold about you, ask for corrections to inaccurate data, or request deletion of your account and associated data. You may also withdraw consent for data processing where applicable. To exercise these rights, please contact us at {brand.email}. We will respond to your request within 30 days. Please note that certain data may be retained as required by law or for legitimate operational purposes.
          </p>
        </div>

        <div className="card">
          <h2 className="heading-sm" style={{ marginBottom: 12 }}>7. Contact</h2>
          <p className="body-md" style={{ marginBottom: 16 }}>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <p className="body-md">
            <strong>Data Protection Officer</strong>
          </p>
          <p className="body-md">
            <strong>Email:</strong> {brand.email}
          </p>
          <p className="body-md">
            <strong>Phone:</strong> {brand.phone}
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to="/contact" className="btn btn-secondary btn-sm">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
