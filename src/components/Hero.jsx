import { useEffect, useRef } from 'react';
import BookAddaLogo from './BookAddaLogo';
import '../styles/Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb orb-1"/>
        <div className="hero-orb orb-2"/>
        <div className="hero-orb orb-3"/>
        <canvas ref={canvasRef} id="particles-canvas"/>
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"/>
            Proudly Indian · quadmindstechnologies.in
          </div>

          <h1 className="hero-heading">
            Building the <br />
            <span className="gradient-text">Digital Ecosystem</span><br />
            of Tomorrow
          </h1>

          <p className="hero-subtext">
            Quadminds Technologies crafts intelligent, scalable digital products that solve real problems — starting with India&apos;s student community.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('product')}>
              Explore BookAdda
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('about')}>
              Our Story →
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">1</span>
              <span className="stat-label">Live Product</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat-item">
              <span className="stat-num">2026</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-divider"/>
            <div className="stat-item">
              <span className="stat-num">∞</span>
              <span className="stat-label">Ambition</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-grid">
            <div className="float-card card-a">
              <BookAddaLogo iconSize={30} textSize={13} />
              <div className="card-badge live" style={{marginLeft: 'auto'}}>Live</div>
            </div>
            <div className="float-card card-b">
              <div className="card-icon">🏫</div>
              <div className="card-info">
                <div className="card-title">Campus-First</div>
                <div className="card-desc">Hyperlocal Discovery</div>
              </div>
            </div>
            <div className="float-card card-c">
              <div className="card-icon">💬</div>
              <div className="card-info">
                <div className="card-title">Real-Time Chat</div>
                <div className="card-desc">Buyer ↔ Seller Messaging</div>
              </div>
            </div>
            <div className="center-logo-widget">
              <div style={{ position: 'relative', zIndex: 2 }}>
                <BookAddaLogo iconSize={60} showText={false} />
              </div>
              <div className="widget-ring ring-1"/>
              <div className="widget-ring ring-2"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
