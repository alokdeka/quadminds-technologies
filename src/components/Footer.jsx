import logo from '../assets/logo.png';
import '../styles/ContactFooter.css';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="logo-icon">
                <img src={logo} alt="Quadminds Technologies" height="28" style={{ objectFit: 'contain' }} />
              </div>
              <div className="logo-text">
                <span className="logo-name">Quadminds</span>
                <span className="logo-sub">Technologies</span>
              </div>
            </a>
            <p className="footer-tagline">Building tomorrow&apos;s digital ecosystem — one product at a time.</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {[['about','About Us'],['vision','Vision'],['team','Team'],['contact','Contact']].map(([id, label]) => (
                  <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="https://bookadda.in" target="_blank" rel="noreferrer">BookAdda</a></li>
                <li><a href="#product" onClick={(e) => { e.preventDefault(); scrollTo('product'); }}>Features</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Quadminds Technologies. All rights reserved. · quadmindstechnologies.in</p>
          <p className="footer-love">Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
