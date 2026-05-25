import BookAddaLogo from './BookAddaLogo';
import '../styles/Products.css';

export default function Products() {
  return (
    <section className="products" id="product">
      <div className="container">
        <div className="section-tag">Our Product</div>
        <h2 className="section-heading centered">
          Meet <span className="gradient-text">BookAdda</span>
        </h2>
        <p className="section-sub centered">
          A premium, hyperlocal marketplace where university students buy, sell, and exchange academic textbooks — eliminating the financial burden of new-semester books.
        </p>

        <div className="bookadda-showcase" id="product-bookadda">
          <div className="product-card featured solo">
            <div className="product-glow"/>
            <div className="product-header">
              <BookAddaLogo iconSize={52} textSize={22} />
              <div className="product-status-badge live">● Live Now</div>
            </div>

            <h3 className="product-name">BookAdda</h3>
            <p className="product-tagline">The Student Book Exchange Marketplace</p>
            <p className="product-desc">
              BookAdda solves a universal student pain point — expensive textbooks. Built on a robust Laravel + React stack with real-time WebSocket chat, Razorpay payment integration, Firebase push notifications, and a campus-radius discovery engine powered by geolocation.
            </p>

            <div className="product-features-grid">
              <div className="feat-group">
                <h4 className="feat-group-title">Core Features</h4>
                {[
                  'Hyperlocal campus discovery via interactive map',
                  'Real-time buyer-seller WebSocket chat',
                  'Listing boost monetization with Razorpay',
                  'Firebase push notifications for all events',
                  'Google reCAPTCHA v3 bot protection',
                  'Admin dashboard with live notification feed',
                ].map(f => (
                  <div key={f} className="feat-item">
                    <span className="feat-icon">✓</span> {f}
                  </div>
                ))}
              </div>

              <div className="feat-group">
                <h4 className="feat-group-title">Tech Stack</h4>
                <div className="product-tech stacked">
                  {[
                    { label: 'Frontend', tags: ['React 18', 'Vite', 'Framer Motion'] },
                    { label: 'Backend', tags: ['Laravel 13', 'MySQL 8', 'Redis'] },
                    { label: 'Real-Time', tags: ['Laravel Reverb', 'WebSockets'] },
                    { label: 'Payments', tags: ['Razorpay'] },
                    { label: 'Notifications', tags: ['Firebase FCM'] },
                  ].map(({ label, tags }) => (
                    <div key={label} className="tech-row">
                      <span className="tech-row-label">{label}</span>
                      <div className="tech-row-tags">
                        {tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn-product"
              id="bookadda-cta"
            >
              Visit BookAdda →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
