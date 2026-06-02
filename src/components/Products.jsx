import BookAddaLogo from './BookAddaLogo';
import GhostNoteLogo from './GhostNoteLogo';
import ToonifyLogo from './ToonifyLogo';
import '../styles/Products.css';

const productsList = [
  {
    id: 'bookadda',
    logo: (iconSize, textSize) => <BookAddaLogo iconSize={iconSize} textSize={textSize} />,
    name: 'BookAdda',
    tagline: 'Student Book Exchange',
    status: 'Live Now',
    statusClass: 'live',
    desc: 'A premium, hyperlocal marketplace for university students to buy, sell, and exchange academic textbooks, eliminating new-semester financial burdens.',
    features: [
      'Hyperlocal campus discovery via map integration',
      'Real-time WebSocket chat powered by Laravel Reverb',
      'Secure listings boost monetization via Cashfree',
      'Firebase push notifications for chat & transaction events',
    ],
    tech: ['React 18', 'Laravel 13', 'MySQL', 'WebSockets', 'Cashfree', 'Firebase FCM'],
    url: '#',
    brandClass: 'brand-bookadda'
  },
  {
    id: 'ghostnote',
    logo: (iconSize, textSize) => <GhostNoteLogo iconSize={iconSize} textSize={textSize} />,
    name: 'GhostNote',
    tagline: 'Zero-Knowledge Secure Notes',
    status: 'Live Now',
    statusClass: 'live',
    desc: 'A high-security, single-use, self-destructing note application. Encrypts secret payloads using AES-256 before database storage and wipes them instantly on read.',
    features: [
      'Zero-knowledge AES-256 client-backend encryption',
      'Immediate database pruning upon first successful retrieval',
      'Throttle-based API rate limiting and brute force defense',
      'Automated 24-hour expiration scheduler using prunable traits',
    ],
    tech: ['React', 'Vite', 'Tailwind v4', 'Laravel 12 API', 'MySQL', 'Filament v3'],
    url: 'https://ghostnote.click/',
    brandClass: 'brand-ghostnote'
  },
  {
    id: 'toonify',
    logo: (iconSize, textSize) => <ToonifyLogo iconSize={iconSize} textSize={textSize} />,
    name: 'toonify',
    tagline: 'Zero-Leak JSON to TOON Converter',
    status: 'Live Now',
    statusClass: 'live',
    desc: 'A real-time, browser-native utility that strips JSON of structural noise—braces, quotes, commas around keys—converting it into highly readable TOON format.',
    features: [
      'Stateless recursive client-side encoding (zero server logs)',
      'Pre-flight JSON validation with precise line/column errors',
      'Tabular serialization schema for uniform object arrays',
      'One-click file uploads (.json) and styled file saves (.toon)',
    ],
    tech: ['React 18', 'Vite', 'Inline JS', 'IBM Plex Mono', 'Netlify'],
    url: 'https://toonify-app.netlify.app/',
    brandClass: 'brand-toonify'
  }
];

export default function Products() {
  return (
    <section className="products" id="product">
      <div className="container">
        <div className="section-tag">Our Products</div>
        <h2 className="section-heading centered">
          Meet Our <span className="gradient-text">Digital Suite</span>
        </h2>
        <p className="section-sub centered">
          Intelligent, production-grade applications crafted with technical precision, clean architecture, and exceptional user experience.
        </p>

        <div className="products-portfolio-grid">
          {productsList.map((product) => (
            <div key={product.id} className={`product-card featured ${product.brandClass}`} id={`product-${product.id}`}>
              <div className="product-glow" />
              
              <div className="product-header">
                {product.logo(42, 18)}
                <span className={`product-status-badge ${product.statusClass}`}>
                  ● {product.status}
                </span>
              </div>

              <p className="product-tagline">{product.tagline}</p>
              <p className="product-desc">{product.desc}</p>

              <div className="product-grid-details">
                <div className="feat-group">
                  <h4 className="feat-group-title">Core Features</h4>
                  <div className="feat-list">
                    {product.features.map((feat, index) => (
                      <div key={index} className="feat-item">
                        <span className="feat-icon">✓</span>
                        <span className="feat-text">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-group">
                  <h4 className="feat-group-title">Tech Stack</h4>
                  <div className="product-tech">
                    {product.tech.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={product.url}
                target={product.url.startsWith('http') ? "_blank" : undefined}
                rel={product.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="btn-product"
              >
                {product.id === 'bookadda' ? 'Explore BookAdda →' : `Visit ${product.name} →`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
