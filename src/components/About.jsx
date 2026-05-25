import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-tag">About Us</div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="section-heading">
              We Are <span className="gradient-text">Quadminds</span>
            </h2>
            <p className="about-para">
              Quadminds Technologies is an Indian technology startup on a mission to build digital products that matter. We believe the best software comes from deeply understanding the people it serves — not from copying trends.
            </p>
            <p className="about-para">
              Our name says it all: <em>four minds working in four directions</em> — Product, Engineering, Design, and Growth — converging on a single goal: to make technology more human.
            </p>
            <div className="about-values">
              {['🎯 Mission-Driven', '🇮🇳 India-First', '⚡ Move Fast', '🔍 User-Obsessed'].map(v => (
                <div key={v} className="value-chip">{v}</div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-card-stack">
              <div className="abt-card abt-card-top">
                <div className="abt-card-icon">🏗️</div>
                <h3>We Build, Not Just Dream</h3>
                <p>Every idea at Quadminds ships. We move from whiteboard to working product faster than most teams finish a deck.</p>
              </div>
              <div className="abt-card abt-card-bot">
                <div className="abt-card-icon">🌐</div>
                <h3>Rooted in India, Global in Scope</h3>
                <p>Our products are designed for Indian users first — then refined to scale globally. Local insight. Global ambition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
