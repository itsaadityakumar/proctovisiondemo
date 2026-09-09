import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import Reveal from '../../components/ui/Reveal';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the ${brand.name} platform ("Service"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must not use the Service. These terms apply to all users, including students, teachers, administrators, and any other visitors to the platform. We reserve the right to modify these terms at any time, and continued use of the Service constitutes acceptance of any changes.`,
  },
  {
    title: 'Use of Platform',
    body: `The ${brand.name} platform is designed to facilitate secure online examinations and proctoring. You agree to use the platform only for its intended purpose and in compliance with all applicable laws and regulations. You shall not attempt to circumvent any security measures, exploit vulnerabilities, or use the platform for any unauthorized or illegal activity. Any misuse of the platform may result in immediate termination of your account and potential legal action.`,
  },
  {
    title: 'User Accounts',
    body: `To access certain features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms or that we reasonably believe are compromised. Each user may maintain only one active account; duplicate accounts are prohibited.`,
  },
  {
    title: 'Examination Integrity',
    body: `${brand.name} is committed to maintaining the integrity of online examinations. By participating in an examination through this platform, you agree to the following: you will not access unauthorized resources during the exam; you will not communicate with other individuals about exam content; you will not attempt to copy, photograph, or share exam questions or answers; you will comply with all proctoring instructions and requirements. Violations of examination integrity may result in disqualification from the exam, account suspension, and reporting to the relevant institution or authority.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content, features, and functionality of the ${brand.name} platform—including but not limited to text, graphics, logos, icons, images, audio, video, software, and code—are the exclusive property of ${brand.name} or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the platform without prior written permission.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the maximum extent permitted by law, ${brand.name} and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the platform. This includes, but is not limited to, loss of data, interruption of service, or errors in examination results. Our total liability for any claim arising from use of the platform shall not exceed the amount you have paid to ${brand.name} in the twelve months preceding the claim.`,
  },
];

export default function Terms() {
  return (
    <section className="section-lg" style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Reveal className="text-center" style={{ marginBottom: 64 }}>
          <h1 className="headline-super">
            Terms & Conditions.
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
              If you have questions about these Terms & Conditions, please contact us:
            </p>
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
