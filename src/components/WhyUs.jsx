import '../styles/WhyUsTeam.css';

const pillars = [
  { num: '01', icon: '⚙️', title: 'Engineering Excellence', desc: "We don't cut corners. Every product we ship is built on a solid technical foundation — scalable, secure, and maintainable." },
  { num: '02', icon: '🎨', title: 'Design Obsession', desc: 'Great products feel as good as they work. We invest heavily in UX research and interface design to create experiences users love.' },
  { num: '03', icon: '🧩', title: 'Problem-First Thinking', desc: "We start with a real problem, not a cool technology. If we can't articulate the problem, we don't build the product." },
  { num: '04', icon: '🤝', title: 'User Trust', desc: 'Privacy, transparency, and reliability are not features — they are the foundation on which everything we build stands.' },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="section-tag">Why Quadminds</div>
        <h2 className="section-heading centered">
          Principles We <span className="gradient-text">Never Compromise</span>
        </h2>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card" id={`pillar-${i + 1}`}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
