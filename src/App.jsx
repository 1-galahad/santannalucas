
import { useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Objects of Desire',
    category: 'DIREÇÃO DE ARTE · CONCEITO',
    year: '2026',
    type: 'wide',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85',
    alt: 'Composição minimalista de objetos e formas',
  },
  {
    number: '02',
    title: 'Form & Function',
    category: 'DESIGN DIGITAL · CONCEITO',
    year: '2026',
    type: 'portrait',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85',
    alt: 'Interior contemporâneo com design minimalista',
  },
  {
    number: '03',
    title: 'Chromatic Studies',
    category: 'EXPERIMENTO VISUAL · CONCEITO',
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

function Header() {
  return (
    <header className="topbar">
      
      <Link className="wordmark signature-logo" to="/" aria-label="Lucas Santanna, início">
        <img src="/images/assinatura.png" alt="Lucas Santanna" />
      </Link>


      <span className="topbar-label">
        DESIGNER INDEPENDENTE · BRASIL
      </span>

      <nav className="navigation" aria-label="Navegação principal">
        <NavLink to="/work">PROJETOS</NavLink>
        <NavLink to="/about">SOBRE</NavLink>
        <NavLink to="/contato" className="contact-link">
          CONTATO <Arrow diagonal />
        </NavLink>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer page-grid">
      <Link className="wordmark footer-mark" to="/" aria-label="Voltar ao início">
        LS<span>®</span>
      </Link>

      <span>INDEPENDENTE POR NATUREZA.</span>

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

        <Link to="/">INÍCIO ↑</Link>
      </div>

      <span className="copyright">© 2026 LUCAS SANTANNA</span>
    </footer>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.type}`}>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
        />

        <span className="project-number">
          {project.number} / {String(projects.length).padStart(2, '0')}
        </span>

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
  )
}

function ProjectGrid({ items = projects }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <ProjectCard key={project.number} project={project} />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero page-grid" id="home">
      <div className="hero-meta">
        <span>PORTFÓLIO — 2026</span>
        <span>DESIGN + TECNOLOGIA</span>
      </div>

      <div className="hero-visual">
        <img
          className="hero-photo"
          src="/images/lucas.jpg"
          alt="Retrato de Lucas Santanna"
          fetchPriority="high"
        />

        <div className="hero-marquee" aria-label="Lucas Santanna">
          <div className="hero-marquee-track">
            <h1 className="hero-name">
              <span className="hero-star" aria-hidden="true">★</span>
              <span>LUCAS SANTANNA</span>
            </h1>

            <h1 className="hero-name" aria-hidden="true">
              <span className="hero-star">★</span>
              <span>LUCAS SANTANNA</span>
            </h1>
          </div>
        </div>

        <span className="hero-photo-caption">
          DESIGN · DIREÇÃO DE ARTE · DIGITAL
        </span>
      </div>

      <div className="hero-bottom">
        <p className="hero-description">
          Designer híbrido explorando a interseção entre direção de arte,
          experiências digitais e tecnologia.
        </p>

        <Link className="round-link" to="/work" aria-label="Explorar projetos">
          <Arrow />
        </Link>

        <span className="hero-index">
          <span className="status-dot" />
          DISPONÍVEL PARA PROJETOS SELECIONADOS
        </span>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />

      <section className="work-section page-grid">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / TRABALHOS SELECIONADOS</span>
            <h2>Projetos em destaque<span className="period">.</span></h2>
          </div>
          <span className="section-count">SELEÇÃO — 2026</span>
        </div>

        <ProjectGrid items={projects.slice(0, 2)} />

        <Link className="text-link behance-link" to="/work">
          VER TODOS OS PROJETOS <Arrow diagonal />
        </Link>
      </section>

      
      <section className="home-contact page-grid">
        <div className="home-contact-portrait">
           <img src="/images/lucas-contato.jpg" alt="Lucas Santanna" />
        </div>

        <div className="home-contact-content">
          

          <h2>
            Bora construir
            <br />
            <span className="outline-text">algo juntos?</span>
          </h2>


          <div className="home-contact-links">
            <a
              className="home-contact-email"
              href="mailto:lucas.santanna.f@gmail.com"
            >
              lucas.santanna.f@gmail.com <Arrow diagonal />
            </a>

            <a
              className="home-contact-email home-contact-whatsapp"
              href="https://wa.me/5516996203090"
              target="_blank"
              rel="noreferrer"
            >
              16 996203090 <Arrow diagonal />
            </a>
          </div>

        </div>
      </section>

    </>
  )
}

function WorkPage() {
  return (
    <section className="work-section page-grid route-page">
      <div className="route-intro">
        <span className="eyebrow">01 / PORTFÓLIO</span>
        <h1 className="route-title">
          Ideias em
          <br />
          <span className="outline-text">construção.</span>
        </h1>
        <p className="route-description">
          Direção de arte, identidade visual, design digital e experimentação.
          Uma seleção de trabalhos e estudos visuais.
        </p>
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / GALERIA</span>
          <h2>Projetos<span className="period">.</span></h2>
        </div>
        <span className="section-count">03 PROJETOS</span>
      </div>

      <ProjectGrid />

      <a
        className="text-link behance-link"
        href="https://www.behance.net/lucassantanna"
        target="_blank"
        rel="noreferrer"
      >
        EXPLORAR PORTFÓLIO NO BEHANCE <Arrow diagonal />
      </a>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="about-section page-grid route-page">
      <div className="about-label">
        <span className="eyebrow">01 / QUEM SOU</span>
        <span className="about-symbol" aria-hidden="true">✳</span>
      </div>

      <div className="about-content">
        <h1>
          ENTRE
          <br />
          <span className="outline-text">LÓGICA</span> E INSTINTO.
        </h1>

        <div className="about-copy">
          <p>
            Sou Lucas Santanna, designer brasileiro que trabalha entre
            comunicação visual, experiências digitais e tecnologia criativa.
          </p>

          <p>
            Minha abordagem combina pensamento conceitual, sistemas visuais
            e execução prática — do primeiro esboço à interface final.
          </p>

          <p>
            Tenho interesse especial em projetos que conectam direção de arte,
            design de interfaces e desenvolvimento front-end.
          </p>
        </div>

        <div className="about-photo-grid" aria-label="Espaço reservado para fotografias">
          <div className="about-photo-placeholder">
            <span>FOTO 01</span>
            <span>RETRATO</span>
          </div>
          <div className="about-photo-placeholder">
            <span>FOTO 02</span>
            <span>PROCESSO / ESTÚDIO</span>
          </div>
        </div>

        <div className="disciplines">
          <span>DIREÇÃO DE ARTE</span>
          <span>UI / UX DESIGN</span>
          <span>IDENTIDADE VISUAL</span>
          <span>FRONT-END</span>
          <span>3D & MOTION</span>
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="contact-section page-grid route-page">
      <span className="eyebrow">01 / CONTATO</span>

      <h1>
        TEM UM
        <br />
        <span className="outline-text">PROJETO?</span>
      </h1>

      <p className="contact-intro">
        Estou aberto a conversas sobre projetos, colaborações e ideias que
        mereçam sair do papel.
      </p>

      <a
        className="contact-cta"
        href="mailto:lucas.santanna.f@gmail.com"
      >
        ESCREVA PARA MIM <Arrow diagonal />
      </a>

      <p className="contact-note">lucas.santanna.f@gmail.com</p>

      <div className="contact-socials">
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
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="contact-section page-grid route-page">
      <span className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</span>
      <h1>
        CAMINHO
        <br />
        <span className="outline-text">INCORRETO.</span>
      </h1>
      <Link className="contact-cta" to="/">
        VOLTAR AO INÍCIO <Arrow />
      </Link>
    </section>
  )
}

function PortfolioShell() {
  const screenRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    screenRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="experience-shell">
      <div className="ambient-label ambient-left" aria-hidden="true">
        <span>LS®</span>
        <span>DESIGNER INDEPENDENTE</span>
      </div>

      <div className="device-frame">
        <div
          className="device-screen"
          ref={screenRef}
          aria-label="Portfólio de Lucas Santanna"
        >
          <div className="device-island" aria-hidden="true" />

          <main className="site-content">
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
          </main>
        </div>
      </div>

      <div className="ambient-label ambient-right" aria-hidden="true">
        <span>PORTFÓLIO / 2026</span>
        <span>ROLE PARA EXPLORAR ↓</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PortfolioShell />
    </BrowserRouter>
  )
}

export default App
