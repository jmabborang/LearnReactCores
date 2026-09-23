const featureCards = [
  { number: '01', title: 'Know what you have', text: 'Get a clear view of every product, variant, and stock level from one calm, focused workspace.', icon: 'box' },
  { number: '02', title: 'Move with confidence', text: 'Spot low-stock items early and keep your team aligned on the work that matters next.', icon: 'pulse' },
  { number: '03', title: 'Grow without the noise', text: 'A flexible system that gives your operation room to scale without adding busywork.', icon: 'spark' },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" /></svg>;
}

function FeatureIcon({ type }) {
  if (type === 'box') return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></svg>;
  if (type === 'pulse') return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 13h4l2.2-7 3.2 13 2.2-6H20" /></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></svg>;
}

function Logo() {
  return <div className="site-logo"><span className="logo-glyph">N</span><span>nexus<span className="logo-dot">.</span></span></div>;
}

function LandingPage({ onLogin }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="landing-page">
      <nav className="site-nav" aria-label="Main navigation">
        <button className="logo-button" onClick={() => scrollTo('home')} aria-label="Go to home"><Logo /></button>
        <div className="nav-links">
          <button className="nav-link active" onClick={() => scrollTo('home')}>Home</button>
          <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
          <button className="nav-link" onClick={() => scrollTo('demo')}>Demo</button>
        </div>
        <button className="nav-login" onClick={onLogin}>Login <ArrowIcon /></button>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> BUILT FOR THE EVERYDAY OPERATOR</div>
          <h1>Inventory,<br /><em>in focus.</em></h1>
          <p className="hero-text">Nexus gives your team a clearer way to manage stock, make faster decisions, and keep the whole operation moving.</p>
          <div className="hero-actions">
            <button className="primary-cta" onClick={onLogin}>Get started <ArrowIcon /></button>
            <button className="text-cta" onClick={() => scrollTo('demo')}>See how it works <span>&darr;</span></button>
          </div>
          <div className="hero-proof"><span className="proof-avatars"><i>J</i><i>M</i><i>A</i></span><span>Trusted by teams that<br /><strong>keep things moving.</strong></span></div>
        </div>
        <div className="hero-visual" aria-label="Nexus inventory dashboard preview">
          <div className="visual-glow" />
          <div className="dashboard-card">
            <div className="dashboard-top"><span className="mini-brand"><span className="mini-glyph">N</span> nexus</span><span className="dashboard-date">Mon, Jun 24 <span className="chevron">&#8964;</span></span></div>
            <div className="dashboard-body">
              <div className="dashboard-heading"><div><span className="mini-eyebrow">OVERVIEW</span><h2>Good morning, Alex.</h2></div><span className="notification-dot" /></div>
              <div className="metric-row"><div className="metric-card metric-blue"><span>Total products</span><strong>1,284</strong><small>&uarr; 12.4% <b>this month</b></small></div><div className="metric-card"><span>Low stock</span><strong>24</strong><small className="warning">&bull; Needs attention</small></div></div>
              <div className="chart-card"><div className="chart-label"><span>Stock movement</span><span>Last 7 days <b>&#8964;</b></span></div><div className="chart"><div className="chart-grid" /><svg viewBox="0 0 420 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 78 C35 75 46 59 75 64 S116 54 140 60 S174 83 200 68 S229 41 251 49 S280 61 301 49 S332 33 350 42 S384 52 420 19" /></svg><span className="chart-value">+18.2%</span></div></div>
              <div className="activity-row"><span className="activity-title">Recent activity</span><span className="activity-link">View all <ArrowIcon /></span></div>
              <div className="activity-item"><span className="activity-icon">&uarr;</span><span><strong>Stock received</strong><small>24 units &middot; Wireless Keyboard</small></span><time>2m ago</time></div>
            </div>
          </div>
          <div className="float-pill"><span className="pill-check">&#10003;</span><span><b>All systems clear</b><small>Updated just now</small></span></div>
        </div>
      </section>

      <section className="feature-section" id="about">
        <div className="section-intro"><span className="section-number">01 / 03</span><h2>The calm behind<br /><em>the control.</em></h2><p>Good inventory management should feel like a superpower, not another thing to manage.</p></div>
        <div className="feature-grid">{featureCards.map((feature) => <article className="feature-card" key={feature.number}><span className="card-number">{feature.number}</span><div className="feature-icon"><FeatureIcon type={feature.icon} /></div><h3>{feature.title}</h3><p>{feature.text}</p><button className="card-arrow" onClick={() => scrollTo('demo')} aria-label={`Learn more about ${feature.title}`}><ArrowIcon /></button></article>)}</div>
      </section>

      <section className="demo-section" id="demo"><div><span className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO WORK</span><h2>See the full picture.<br /><em>Make the next move.</em></h2></div><button className="demo-button" onClick={onLogin}>Explore the workspace <ArrowIcon /></button></section>
      <footer className="site-footer"><Logo /><span>&copy; 2024 Nexus Inventory Systems</span><button onClick={() => scrollTo('home')}>Back to top &uarr;</button></footer>
    </main>
  );
}

export default LandingPage;
