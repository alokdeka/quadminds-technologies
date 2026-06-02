import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/ContactFooter.css';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="nav-logo" onClick={(e) => { 
              e.preventDefault(); 
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }
            }}>
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
                  <li key={id}><a href={location.pathname === '/' ? `#${id}` : `/#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href={location.pathname === '/' ? "#product-bookadda" : "/#product-bookadda"} onClick={(e) => { e.preventDefault(); scrollTo('product-bookadda'); }}>BookAdda</a></li>
                <li><a href="https://ghostnote.click/" target="_blank" rel="noopener noreferrer">GhostNote</a></li>
                <li><a href="https://toonify-app.netlify.app/" target="_blank" rel="noopener noreferrer">Toonify</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/refund">Refund Policy</Link></li>
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
