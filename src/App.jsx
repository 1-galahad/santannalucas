
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Objects of Desire',
    category: 'ART DIRECTION · CONCEPT',
    year: '2026',
    type: 'wide',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Composição minimalista de objetos e formas',
  },
  {
    number: '02',
    title: 'Form & Function',
    category: 'DIGITAL DESIGN · CONCEPT',
    year: '2026',
    type: 'portrait',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85',
    alt: 'Interior contemporâneo com design minimalista',
  },
  {
    number: '03',
    title: 'Chromatic Studies',
    category: 'VISUAL EXPERIMENT · CONCEPT',
    year: '2026',
    type: 'portrait',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    alt: 'Estudo visual de espaço, luz e composição',
  },
]

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? '↗' : '→'}
    </span>
  )
}

function Portfolio() {
  return (
    <main className="site-content">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Lucas Santanna, início">
          LS<span>®</span>
        </a>

        <span className="topbar-label">INDEPENDENT DESIGNER · BRAZIL</span>

        <nav className="navigation" aria-label="Navegação principal">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact" className="contact-link">
            LET'S TALK <Arrow diagonal />
          </a>
        </nav>
      </header>

      <section className="hero page-grid" id="home">
        <div className="hero-meta">
          <span>PORTFOLIO — 2026</span>
          <span>DESIGN MEETS TECHNOLOGY</span>
        </div>

        <h1>
          DESIGN
          <br />
          WITH <span className="outline-text">INTENT.</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            Designer híbrido explorando a interseção entre
            direção de arte, experiências digitais e tecnologia.
          </p>

          <a className="round-link" href="#work" aria-label="Explorar projetos">
            <Arrow />
          </a>

          <span className="hero-index">
            <span className="status-dot" />
            AVAILABLE FOR SELECT PROJECTS
          </span>
        </div>
      </section>

      <section className="work-section page-grid" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>Selected projects<span className="period">.</span></h2>
          </div>
          <span className="section-count">CONCEPT STUDIES — 2026</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.type}`}
              key={project.number}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <span className="project-number">{project.number} / 03</span>
                <span className="project-open" aria-hidden="true">
                  <Arrow diagonal />
                </span>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </article>
          ))}
        </div>

        <a
          className="text-link behance-link"
          href="https://www.behance.net/lucassantanna"
          target="_blank"
          rel="noreferrer"
        >
          EXPLORE MORE ON BEHANCE <Arrow diagonal />
        </a>
      </section>

      <section className="about-section page-grid" id="about">
        <div className="about-label">
          <span className="eyebrow">02 / THE DESIGNER</span>
          <span className="about-symbol" aria-hidden="true">✳</span>
        </div>

        <div className="about-content">
          <h2>
            BETWEEN
            <br />
            <span className="outline-text">LOGIC</span> & INSTINCT.
          </h2>

          <div className="about-copy">
            <p>
              I’m Lucas Santanna, a Brazilian designer working across
              visual communication, digital experiences and creative
              technology.
            </p>
            <p>
              My approach combines conceptual thinking, visual systems
              and a hands-on mindset — from the first sketch to the
              final interface.
            </p>
          </div>

          <div className="disciplines">
            <span>ART DIRECTION</span>
            <span>UI / UX DESIGN</span>
            <span>VISUAL IDENTITY</span>
            <span>FRONT-END</span>
            <span>3D & MOTION</span>
          </div>
        </div>
      </section>

      <section className="contact-section page-grid" id="contact">
        <span className="eyebrow">03 / HAVE SOMETHING IN MIND?</span>

        <h2>
          LET'S MAKE
          <br />
          <span className="outline-text">IT MATTER.</span>
        </h2>

        <a className="contact-cta" href="mailto:lucas.santanna.f@gmail.com">
          START A CONVERSATION <Arrow diagonal />
        </a>

        <p className="contact-note">
          A good project starts with a good conversation.
        </p>
      </section>

      <footer className="footer page-grid">
        <a className="wordmark footer-mark" href="#home">
          LS<span>®</span>
        </a>

        <span>INDEPENDENT BY NATURE.</span>

        <div className="footer-links">
          <a
            href="https://www.behance.net/lucassantanna"
            target="_blank"
            rel="noreferrer"
          >
            BEHANCE <Arrow diagonal />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-santanna-0b4b30121/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN <Arrow diagonal />
          </a>
          <a href="#home">BACK TO TOP ↑</a>
        </div>

        <span className="copyright">© 2026 LUCAS SANTANNA</span>
      </footer>
    </main>
  )
}

function App() {
  return (
    <div className="experience-shell">
      <div className="ambient-label ambient-left" aria-hidden="true">
        <span>LS®</span>
        <span>INDEPENDENT DESIGNER</span>
      </div>

      <div className="device-frame">
        <div className="device-screen" aria-label="Portfólio de Lucas Santanna">
          <div className="device-island" aria-hidden="true" />
          <Portfolio />
        </div>
      </div>

      <div className="ambient-label ambient-right" aria-hidden="true">
        <span>PORTFOLIO / 2026</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
  )
}

export default App
