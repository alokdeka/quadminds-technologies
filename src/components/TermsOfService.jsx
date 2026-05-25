import '../styles/ContactFooter.css';
import '../styles/Legal.css';
import SEO from './SEO';

export default function TermsOfService() {
  return (
    <div className="legal-page">
      <SEO 
        title="Terms of Service | Quadminds Technologies" 
        description="Terms of Service for Quadminds Technologies and BookAdda. Read the rules and conditions for using our platform."
        path="/terms"
      />
      <div className="legal-header">
        <div className="container">
          <a href="/" className="legal-back" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
            ← Back
          </a>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">Last updated: May 25, 2026 · Quadminds Technologies</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-body">

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using any platform operated by Quadminds Technologies — including
              BookAdda and quadmindstechnologies.in — you agree to be bound by these Terms of Service
              and all applicable laws. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. About Quadminds Technologies</h2>
            <p>
              Quadminds Technologies is an Indian technology company building digital products for the
              student community. Our flagship product, BookAdda, is a peer-to-peer marketplace for
              buying, selling, and exchanging academic books among university students.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. User Accounts</h2>
            <ul>
              <li>You must be at least 18 years old or have parental consent to use our services.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and current information during registration.</li>
              <li>One person may maintain only one active account.</li>
              <li>Quadminds Technologies reserves the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Marketplace Rules (BookAdda)</h2>
            <ul>
              <li>Users may only list books they legitimately own and intend to sell or exchange.</li>
              <li>Listings must be accurate — incorrect descriptions, pricing, or condition ratings are prohibited.</li>
              <li>Prohibited items include counterfeit books, pirated material, and non-academic contraband.</li>
              <li>Quadminds Technologies does not guarantee the completion of any transaction between users.</li>
              <li>We reserve the right to remove any listing that violates these terms without notice.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Payments</h2>
            <p>
              Payment processing on BookAdda is handled by <strong>Razorpay</strong>, a PCI-DSS compliant
              third-party payment gateway. By making a payment on our platform, you agree to Razorpay's
              terms and conditions in addition to these terms.
            </p>
            <ul>
              <li>Quadminds Technologies does not store any card or banking details.</li>
              <li>Payments for "Boost" listings or premium features are non-refundable once the service has been activated.</li>
              <li>In case of a failed or disputed transaction, please contact us within 7 days.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content, branding, logos, and code on our platforms are the exclusive property of
              Quadminds Technologies. You may not reproduce, distribute, or create derivative works without
              prior written permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              Quadminds Technologies is a platform facilitator. We are not responsible for disputes between
              buyers and sellers, the quality or condition of books exchanged, or any losses arising from
              user-to-user transactions. Our liability is limited to the amount paid directly to us for
              platform services.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of courts in India.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of our platforms after any update
              constitutes acceptance of the revised terms. We will notify users of significant changes via email.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <div className="legal-contact-block">
              <strong>Quadminds Technologies</strong><br />
              Email: <a href="mailto:legal@quadmindstechnologies.in">legal@quadmindstechnologies.in</a><br />
              Website: quadmindstechnologies.in<br />
              India 🇮🇳
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
