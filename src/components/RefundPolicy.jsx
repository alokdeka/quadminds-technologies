import '../styles/ContactFooter.css';
import '../styles/Legal.css';
import SEO from './SEO';

export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <SEO 
        title="Refund Policy | Quadminds Technologies" 
        description="Refund and Cancellation Policy for Quadminds Technologies and BookAdda."
        path="/refund"
      />
      <div className="legal-header">
        <div className="container">
          <a href="/" className="legal-back" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
            ← Back
          </a>
          <h1 className="legal-title">Refund &amp; Cancellation Policy</h1>
          <p className="legal-meta">Last updated: May 25, 2026 · Quadminds Technologies</p>
        </div>
      </div>

      <div className="container">
        <div className="legal-body">

          <section className="legal-section">
            <h2>1. Overview</h2>
            <p>
              This Refund and Cancellation Policy applies to all payments made on platforms operated by
              Quadminds Technologies, including BookAdda. Please read this policy carefully before
              completing any transaction.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Platform Services (Listing Boosts &amp; Premium Features)</h2>
            <p>
              Payments made for premium platform services — such as "Boost" listing promotion or
              exceeding the free listing quota — are <strong>non-refundable</strong> once the service has
              been activated and the benefit has been delivered.
            </p>
            <p>
              If you are charged but the service was <em>not</em> activated due to a technical error,
              you are eligible for a full refund. Please contact us within <strong>7 days</strong> of
              the transaction.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. User-to-User Transactions</h2>
            <p>
              BookAdda is a peer-to-peer marketplace. Transactions between buyers and sellers are
              conducted directly between the parties. Quadminds Technologies does not hold, escrow, or
              intermediate funds in user-to-user book transactions.
            </p>
            <p>
              Disputes regarding the quality, condition, or delivery of books must be resolved between
              the buyer and seller directly. Quadminds Technologies will assist in mediation on a
              best-effort basis but bears no financial liability for such transactions.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Failed / Duplicate Transactions</h2>
            <ul>
              <li>If a payment fails but your account is debited, the amount will be auto-refunded by Razorpay within <strong>5–7 business days</strong>.</li>
              <li>In case of a duplicate charge, please contact us immediately at <a href="mailto:support@quadmindstechnologies.in">support@quadmindstechnologies.in</a> with your transaction ID.</li>
              <li>Refunds for confirmed duplicate transactions will be processed within <strong>7–10 business days</strong>.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Cancellations</h2>
            <ul>
              <li>You may cancel a listing on BookAdda at any time from your dashboard at no charge.</li>
              <li>Payments for activated premium services cannot be cancelled after activation.</li>
              <li>Subscription-based services (if introduced in future) may be cancelled before the next billing cycle for a prorated refund.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. How to Request a Refund</h2>
            <p>To request a refund, please email us with the following:</p>
            <ul>
              <li>Your registered email address</li>
              <li>Razorpay Order ID or Payment ID</li>
              <li>Reason for the refund request</li>
              <li>Screenshot of the transaction (if available)</li>
            </ul>
            <div className="legal-contact-block">
              <strong>Email:</strong> <a href="mailto:support@quadmindstechnologies.in">support@quadmindstechnologies.in</a><br />
              <strong>Response time:</strong> Within 2 business days<br />
              <strong>Refund processing:</strong> 7–10 business days after approval
            </div>
          </section>

          <section className="legal-section">
            <h2>7. Contact</h2>
            <div className="legal-contact-block">
              <strong>Quadminds Technologies</strong><br />
              Email: <a href="mailto:support@quadmindstechnologies.in">support@quadmindstechnologies.in</a><br />
              Website: quadmindstechnologies.in<br />
              India 🇮🇳
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
