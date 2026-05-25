import '../styles/WhyUsTeam.css';

const founders = [
  {
    initials: 'AD',
    name: 'Alok Deka',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer and product builder. Alok built BookAdda from the ground up — API, frontend, admin panel, and everything in between.',
    links: { linkedin: '#', twitter: '#' },
    id: 'team-1',
  },
  {
    initials: 'DB',
    name: 'Dishant Bharali',
    role: 'Co-Founder & Entrepreneur',
    bio: 'Business strategist and entrepreneur. Dishant drives growth, partnerships, and the vision that turns great engineering into market success.',
    links: { linkedin: '#', twitter: '#' },
    id: 'team-2',
  },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-tag">The Founders</div>
        <h2 className="section-heading centered">
          The <span className="gradient-text">Minds</span> Behind Quadminds
        </h2>
        <p className="section-sub centered">
          Two builders with complementary strengths — engineering meets entrepreneurship.
        </p>

        <div className="team-grid">
          {founders.map((f) => (
            <div className="team-card" id={f.id} key={f.id}>
              <div className="team-avatar">
                <div className="avatar-placeholder">{f.initials}</div>
              </div>
              <h3 className="team-name">{f.name}</h3>
              <div className="team-role">{f.role}</div>
              <p className="team-bio">{f.bio}</p>
              <div className="team-links">
                <a href={f.links.linkedin} className="team-social" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href={f.links.twitter} className="team-social" aria-label="Twitter/X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}

          <div className="team-card join-card" id="team-join">
            <div className="join-icon">+</div>
            <h3 className="team-name">You?</h3>
            <div className="team-role">Early Team Member</div>
            <p className="team-bio">
              A designer, engineer, or growth hacker who wants to build something from scratch? We&apos;d love to hear from you.
            </p>
            <a href="#contact" className="btn-join" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Join the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
