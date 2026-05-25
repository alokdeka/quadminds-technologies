import '../styles/Vision.css';

const roadmap = [
  { year: '2026 Q1–Q2', title: 'Foundation', desc: 'Launch BookAdda, establish the brand, acquire first 1,000 campus users, and validate the hyperlocal marketplace model.', active: true },
  { year: '2026 Q3–Q4', title: 'Scale & Expand', desc: 'Expand BookAdda to 20+ universities across India. Launch Project Atlas. Build a team of 5+.', active: false },
  { year: '2027', title: 'Platform Play', desc: 'Build a unified student super-app under the Quadminds umbrella. Explore seed funding and strategic partnerships.', active: false },
  { year: '2028+', title: 'Global Ambition', desc: 'Take our proven India playbook to Southeast Asia. Build products that serve millions. Be the Quadminds that changes lives.', active: false },
];

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="vision-bg"><div className="vision-orb"/></div>
      <div className="container">
        <div className="section-tag light">Our Vision</div>
        <h2 className="section-heading centered light">
          The Road We&apos;re <span className="gradient-text-light">Building</span>
        </h2>

        <div className="roadmap">
          <div className="roadmap-line"/>
          {roadmap.map((item, i) => (
            <div key={i} className={`roadmap-item${item.active ? ' active' : ''}`} id={`rm-${i + 1}`}>
              <div className="rm-dot"/>
              <div className="rm-content">
                <div className="rm-year">{item.year}</div>
                <h3 className="rm-title">{item.title}</h3>
                <p className="rm-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
