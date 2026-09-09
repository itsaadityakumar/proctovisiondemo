import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import Reveal from '../../components/ui/Reveal';

const sections = [
  {
    title: 'Information Collection',
    body: `We collect information you provide directly when you create an account, participate in examinations, or contact support. This includes your name, email address, institutional identification, profile information, and examination responses. We also automatically collect certain data when you use the platform, including device information, browser type, IP address, usage logs, and examination session metadata. This data is necessary for the proper functioning of the platform and the integrity of the examination process.`,
  },
  {
    title: 'Use of Information',
    body: `We use the information we collect to provide, maintain, and improve the ${brand.name} platform; to administer examinations and deliver results; to detect and prevent fraud, cheating, and other violations of examination integrity; to communicate with you about your account, examinations, and platform updates; to comply with legal obligations and enforce our terms of service; and to generate anonymized analytics and reports for institutional administrators. We do not sell your personal information to third parties.`,
  },
  {
    title: 'Data Security',
    body: `We implement industry-standard security measures to protect your personal information, including encryption in transit (TLS 1.3) and at rest, regular security audits, access controls, and secure data center infrastructure. Examination data is stored in isolated environments with strict access restrictions. While we take all reasonable precautions to protect your data, no method of transmission or storage is completely secure. We cannot guarantee absolute security, though we are committed to promptly addressing any security incidents.`,
  },
  {
    title: 'Cookies',
    body: `${brand.name} uses cookies and similar technologies to maintain your session, remember your preferences, ensure platform security, and analyze usage patterns. Essential cookies are required for the platform to function properly and cannot be disabled. Functional cookies remember your preferences, and analytics cookies help us understand how the platform is used. You can manage non-essential cookies through your browser settings, though disabling them may affect your experience.`,
  },
  {
    title: 'Third-Party Services',
    body: `We may share information with trusted third-party service providers who assist in operating the platform, such as cloud hosting providers, payment processors, and analytics services. These providers are contractually obligated to use your information only for the purposes of providing services to us and in compliance with this Privacy Policy. We may also share information when required by law, to protect our rights, or in connection with a merger, acquisition, or sale of assets. We do not authorize third parties to use your information for their own marketing purposes.`,
  },
  {
    title: 'User Rights',
    body: `You have the right to access, correct, or delete your personal information at any time. You may request a copy of the data we hold about you, ask for corrections to inaccurate data, or request deletion of your account and associated data. You may also withdraw consent for data processing where applicable. To exercise these rights, please contact us at ${brand.email}. We will respond to your request within 30 days. Please note that certain data may be retained as required by law or for legitimate operational purposes.`,
  },
];

export default function Privacy() {
  return (
    <section className="section-lg" style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Reveal className="text-center" style={{ marginBottom: 64 }}>
          <h1 className="headline-super">
            Privacy Policy.
          </h1>
          <p className="subhead-medium" style={{ marginTop: 12 }}>
            Last updated: September 9, 2026
          </p>
        </Reveal>

        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div style={{ marginBottom: 48 }}>
              <h2 className="headline-medium" style={{ marginBottom: 16 }}>
                {i + 1}. {s.title}
              </h2>
              <p className="subhead-large">{s.body}</p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={sections.length * 60}>
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 48 }}>
            <h2 className="headline-medium" style={{ marginBottom: 16 }}>
              {sections.length + 1}. Contact
            </h2>
            <p className="subhead-large" style={{ marginBottom: 16 }}>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <p className="subhead-medium"><strong>Data Protection Officer</strong></p>
            <p className="subhead-medium"><strong>Email:</strong> {brand.email}</p>
            <p className="subhead-medium"><strong>Phone:</strong> {brand.phone}</p>
            <div style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-secondary">Contact Support</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
