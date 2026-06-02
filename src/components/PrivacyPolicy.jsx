import '../styles/ContactFooter.css';
import '../styles/Legal.css';
import SEO from './SEO';

export default function PrivacyPolicy() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="legal-page">
      <SEO 
        title="Privacy Policy | Quadminds Technologies" 
        description="Privacy Policy for Quadminds Technologies and BookAdda. Learn how we collect, use, and protect your data."
        path="/privacy"
      />
      <div className="legal-header">
        <div className="container">
          <a href="/" className="legal-back" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
            ← Back
          </a>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Last updated: May 25, 2026 · Quadminds Technologies</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-body">

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Quadminds Technologies ("we", "our", or "us") operates the BookAdda platform and the
              quadmindstechnologies.in website. This Privacy Policy explains how we collect, use, store,
              and protect your personal information when you use our services.
            </p>
            <p>
              By using our platforms, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Name, email address, and password when you register</li>
              <li>Profile information such as university and location</li>
              <li>Book listing details including title, price, description, and photos</li>
              <li>Messages sent through the in-app chat</li>
              <li>Payment information (processed securely via Cashfree; we do not store card details)</li>
              <li>Inquiries submitted through our contact form</li>
            </ul>
            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>Device information (browser type, OS, device identifiers)</li>
              <li>Usage data (pages visited, actions taken, session duration)</li>
              <li>IP address and approximate geolocation</li>
              <li>Firebase Cloud Messaging tokens for push notifications (with your consent)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To create and manage your account</li>
              <li>To facilitate book listings, transactions, and communication between users</li>
              <li>To process payments and verify transactions via Cashfree</li>
              <li>To send transactional notifications (listing status, messages, payment receipts)</li>
              <li>To send push notifications (if you have granted permission)</li>
              <li>To improve our platform through analytics</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Sharing of Information</h2>
            <p>We do <strong>not</strong> sell your personal information. We may share data with:</p>
            <ul>
              <li><strong>Cashfree:</strong> For payment processing. Subject to Cashfree's Privacy Policy.</li>
              <li><strong>Google Firebase:</strong> For push notification delivery.</li>
              <li><strong>Google reCAPTCHA:</strong> For bot protection on forms.</li>
              <li><strong>Law enforcement:</strong> If required by law or to protect the rights of users.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention</h2>
            <p>
              We retain your data as long as your account is active. You may request deletion of your
              account and associated data at any time by contacting us at{' '}
              <a href="mailto:privacy@quadmindstechnologies.in">privacy@quadmindstechnologies.in</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Security</h2>
            <p>
              We implement industry-standard security measures including HTTPS encryption, hashed
              passwords, and token-based authentication. Payment data is handled exclusively by Cashfree's
              PCI-DSS-compliant infrastructure.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for push notifications at any time</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Cookies</h2>
            <p>
              We use essential cookies for session management and authentication. We do not use
              third-party advertising cookies. You can disable cookies in your browser settings, though
              some features may not function correctly.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>For any privacy-related questions or requests, contact:</p>
            <div className="legal-contact-block">
              <strong>Quadminds Technologies</strong><br />
              Email: <a href="mailto:privacy@quadmindstechnologies.in">privacy@quadmindstechnologies.in</a><br />
              Website: quadmindstechnologies.in<br />
              India 🇮🇳
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
