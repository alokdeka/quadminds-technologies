import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo-icon">
            <img src={logo} alt="Quadminds Technologies Logo" height="36" style={{ objectFit: 'contain' }} />
          </div>
          <div className="logo-text">
            <span className="logo-name">Quadminds</span>
            <span className="logo-sub">Technologies</span>
          </div>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {['about','product','vision','team','contact'].map(id => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {id === 'product' ? 'BookAdda' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-nav" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
          Get in Touch
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
}
