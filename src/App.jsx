

import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import './App.css'
import { useEffect, useRef, useState } from 'react'


const projects = [
  {
    title: 'São Burger',
    category: 'Direção de arte · Marketing 360°',
    year: '2025',
    image: '/images/projects/sao-burger/capa.png',
    type: 'wide',
    slug: 'sao-burger',
  },

  {
    title: 'Victuri Stucchi',
    category: 'Marketing 360° · Comunicação integrada',
    year: '—',
    image: '/images/projects/victuri-stucchi/capacard.png',
    type: 'wide',
    slug: 'victuri-stucchi',
  },
  {
    title: 'Chromatic Studies',
    category: 'Exploração visual',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    type: 'portrait',
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
      
      <Link
        className="wordmark footer-mark signature-logo"
        to="/"
        aria-label="Voltar ao início"
      >
        <img src="/images/coroa.png" alt="Lucas Santanna" />
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


function ProjectCard({ project, index, total }) {
  const projectHref = project.slug
    ? `/work/${project.slug}`
    : '/work'

  return (
    <Link
      to={projectHref}
      className={`project-card ${project.type || ''}`}
      aria-label={`Ver projeto ${project.title}`}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={`Projeto ${project.title}`}
          loading="lazy"
        />

        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="project-info">
        <div>
          <span className="project-number">
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>

          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>

        <span className="project-year">{project.year}</span>
      </div>
    </Link>
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

function InteractiveCredit() {
  const [revealed, setRevealed] = useState(false)
  const [pull, setPull] = useState({ x: 0, y: 0 })
  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function handlePointerMove(event) {
    if (event.pointerType === 'touch') return

    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = event.clientX - centerX
    const dy = event.clientY - centerY

    setPull({
      x: (dx / Math.max(rect.width / 2, 1)) * 4,
      y: (dy / Math.max(rect.height / 2, 1)) * 3,
    })

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setRevealed(true)
      setPull({ x: 0, y: 0 })
    }, 450)
  }

  function handlePointerLeave() {
    clearTimeout(timerRef.current)
    setRevealed(false)
    setPull({ x: 0, y: 0 })
  }

  return (
    <span
      className={`hero-credit-zone ${revealed ? 'is-revealed' : ''}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        '--pull-x': `${pull.x}px`,
        '--pull-y': `${pull.y}px`,
      }}
      aria-label="Desenvolvido por Lucas Santanna"
    >
      <span className="hero-credit-symbol" aria-hidden="true">©</span>

      <span className="hero-credit-window">
        <span className="hero-credit-track">
          <span className="hero-credit-original">
            Desenvolvido por Lucas
          </span>
          <span className="hero-credit-name">
            Lucas Santanna
          </span>
        </span>
      </span>
    </span>
  )
}

function Hero() {
  return (
    <section className="hero page-grid" id="home">
      <div className="hero-meta">
        <span>PORTFÓLIO — 2026</span>
        <InteractiveCredit />
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
          Designer brasileiro explorando os limites da criatividade. Vem conhecer meus projetos!
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

      <section className="work-section page-grid home-projects">
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
          Marcas reais.
          <br />
          <span className="outline-text">
            Ideias em movimento.
          </span>
        </h1>

        <p className="route-description">
          Identidade visual, direção de arte e comunicação integrada.
          Projetos que conectam estratégia, expressão visual e presença
          de marca — do digital ao mundo físico.
        </p>
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / PROJETOS SELECIONADOS</span>
          <h2>Trabalhos<span className="period">.</span></h2>
        </div>

        <span className="section-count">
          PROJETOS — 2026
        </span>
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
    <section className="about-section page-grid route-page about-editorial">
      <div className="about-label">
        <span className="eyebrow">01 / SOBRE MIM</span>
        <span className="about-symbol" aria-hidden="true">✳</span>
      </div>

      <div className="about-content">
        <h1>
          AJUDO MARCAS
          <br />
          A <span className="outline-text">PROSPERAREM</span>
          <br />
          NO DIGITAL.
        </h1>

        <div className="about-copy">
          <p>
            Sou Lucas Santanna, designer brasileiro que conecta direção de arte,
            identidade visual e experiências digitais.
          </p>

          <div className="about-editorial-photo about-photo-one">
            <img
              src="/images/sobre-lucas-01.jpg"
              alt="Lucas Santanna"
              loading="lazy"
            />
            
          </div>

          <p className="about-second-paragraph">
            Acredito em design que vai além da estética: marcas precisam
            comunicar com clareza, criar conexões e transformar boas ideias
            em experiências relevantes. Meu trabalho combina pensamento
            conceitual, direção visual e execução prática, do primeiro
            esboço à experiência final.
          </p>

          <div className="about-editorial-photo about-photo-two">
            <img
              src="/images/sobre-lucas-02.jpg"
              alt="Lucas Santanna em seu processo criativo"
              loading="lazy"
            />
            
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


function SaoBurgerPage() {
  return (
    <section className="case-page page-grid route-page">
      <div className="route-intro">
        <span className="eyebrow">CASE 01 / DIREÇÃO DE ARTE</span>

        <h1 className="route-title">
          São Burger<span className="period">.</span>
          <br />
          <span className="outline-text">
            Sabor com identidade.
          </span>
        </h1>

        <p className="route-description">
          Comunicação de marca para uma hamburgueria artesanal
          que transforma bons ingredientes e um serviço de qualidade
          em uma experiência própria.
        </p>
      </div>

      <div className="case-cover">
        <img
          src="/images/projects/sao-burger/case1.png"
          alt="Projeto São Burger"
        />
      </div>

      <div className="case-meta">
        <div>
          <span className="eyebrow">CLIENTE</span>
          <p>São Burger</p>
        </div>

        <div>
          <span className="eyebrow">ESCOPO</span>
          <p>Marketing 360° · Direção de arte</p>
        </div>

        <div>
          <span className="eyebrow">ENTREGAS</span>
          <p>Campanhas · Peças digitais e impressas</p>
        </div>
      </div>

      <div className="case-story">
        <span className="eyebrow">01 / O PROJETO</span>

        <h2>Uma marca que eu já admirava.</h2>

        <p>
          O São Burger é um estabelecimento focado em hambúrgueres
          artesanais gourmet, com um serviço que faz parte da experiência.
          Eu já era fã do lugar antes de trabalhar com a marca — por isso,
          assumir esse projeto foi uma honra.
        </p>

        <p>
          A proposta foi levar a comunicação da marca por diferentes
          frentes, criando peças visuais para campanhas e necessidades
          variadas do negócio. Um trabalho de comunicação integrada,
          pensado para manter a personalidade da marca presente em
          diferentes formatos e pontos de contato.
        </p>
      </div>

      <div className="case-gallery-heading">
        <span className="eyebrow">02 / DIREÇÃO DE ARTE</span>
        <h2>Da ideia à campanha<span className="period">.</span></h2>
        <p>
          As peças e aplicações deste projeto serão apresentadas aqui.
        </p>
      </div>


      <div className="case-gallery">
        <figure className="case-gallery-item">
          <img
            src="/images/projects/sao-burger/sextoupost.png"
            alt="Campanha Sextou Burger"
            loading="lazy"
          />
          <figcaption>
            <span>01 / CAMPANHA</span>
            <p>Post Social Media - Sextou</p>
          </figcaption>
        </figure>


        <figure className="case-gallery-item">
          <video
            src="/images/projects/sao-burger/crispy_1comlogo.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
          <figcaption>
            <span>02 / CONTEÚDO AUDIOVISUAL</span>
            <p>King Crispy </p>
          </figcaption>
        </figure>


        <figure className="case-gallery-item">
          <img
            src="/images/projects/sao-burger/postcampanha.png"
            alt="Peça gráfica de campanha do São Burger"
            loading="lazy"
          />
          <figcaption>
            <span>03 / DIREÇÃO DE ARTE</span>
            <p>Campanhas e peças gráficas</p>
          </figcaption>
        </figure>
      </div>


      <Link to="/work" className="text-link">
        ← VOLTAR AOS PROJETOS
      </Link>
    </section>
  )
}

const victuriCarousels = [
  {
    src: '/images/projects/victuri-stucchi/carousel-01.png',
    alt: 'Carrossel de comunicação digital da Victuri Stucchi',
  },
  {
    src: '/images/projects/victuri-stucchi/carousel-02.png',
    alt: 'Outra sequência de peças da Victuri Stucchi',
  },
]

function VicturiCarouselMarquee() {
  return (
    <div
      className="victuri-marquee"
      aria-label="Carrosséis de comunicação da Victuri Stucchi"
    >
      <div className="victuri-marquee-track">
        {[0, 1].map((copy) => (
          <div
            className="victuri-marquee-group"
            key={copy}
            aria-hidden={copy === 1}
          >
            {victuriCarousels.map((item, index) => (
              <img
                key={`${copy}-${index}`}
                src={item.src}
                alt={copy === 0 ? item.alt : ''}
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}


function VicturiStucchiPage() {
  return (
    <section className="case-page page-grid route-page">
      <div className="route-intro">
        <span className="eyebrow">
          CASE 02 / MARKETING 360°
        </span>

        <h1 className="route-title">
          Victuri Stucchi<span className="period">.</span>
          <br />
          <span className="outline-text">
            Uma marca, várias presenças.
          </span>
        </h1>

        <p className="route-description">
          Comunicação integrada para aproximar uma imobiliária
          tradicional do público no digital e ampliar sua presença
          para além das telas.
        </p>
      </div>

      <div className="case-cover">
        <img
          src="/images/projects/victuri-stucchi/capa.png"
          alt="Projeto Victuri Stucchi"
          loading="lazy"
        />
      </div>


      <div className="case-meta">
        <div>
          <span className="eyebrow">CLIENTE</span>
          <p>Victuri Stucchi</p>
        </div>

        <div>
          <span className="eyebrow">ESCOPO</span>
          <p>Marketing 360°</p>
        </div>

        <div>
          <span className="eyebrow">FRENTES</span>
          <p>Digital e comunicação offline</p>
        </div>
      </div>

      <div className="case-story">
        <span className="eyebrow">01 / CONTEXTO</span>

        <h2>Uma marca com raízes locais.</h2>

        <p>
          A Victuri Stucchi é uma imobiliária familiar, fortemente
          ligada a Araraquara. O projeto partiu da oportunidade de
          desenvolver um relacionamento mais próximo entre a marca
          e seu público por meio dos canais digitais.
        </p>

        <p>
          Mais do que produzir peças para redes sociais, o trabalho
          buscou construir uma presença digital para a imobiliária,
          levando sua comunicação para um canal de contato contínuo
          com as pessoas.
        </p>

        <span className="eyebrow">02 / COMUNICAÇÃO INTEGRADA</span>

                
        <h2>Do digital para as ruas.</h2>

        <p>
          A comunicação também ultrapassou o ambiente online.
          Desenvolvemos materiais offline, incluindo aplicações
          visuais na frota automotiva, ampliando os pontos de contato
          da marca com a cidade.
        </p>

        <div className="case-fleet-gallery">
          <figure>
            <img
              src="/images/projects/victuri-stucchi/frota-01.png"
              alt="Aplicação da identidade visual da Victuri Stucchi na frota"
              loading="lazy"
            />
            <figcaption>01 / IDENTIDADE VISUAL EM MOVIMENTO</figcaption>
          </figure>

          <figure>
            <img
              src="/images/projects/victuri-stucchi/frota-02.png"
              alt="Detalhe da comunicação visual de um veículo da Victuri Stucchi"
              loading="lazy"
            />
            <figcaption>02 / PRESENÇA NAS RUAS</figcaption>
          </figure>
        </div>

        <p>
          A proposta foi trabalhar diferentes formatos de comunicação
          dentro de uma mesma visão de marca: presença, proximidade
          e reconhecimento local.
        </p>

      </div>

      
      <div className="case-gallery-heading">
        <span className="eyebrow">03 / CONTEÚDO DIGITAL</span>
        <h2>Uma marca em movimento<span className="period">.</span></h2>
        <p>
          Conteúdo, campanhas e narrativas visuais para fortalecer
          a presença digital da imobiliária.
        </p>
      </div>

      <div className="case-gallery">
        <figure className="case-gallery-item">
          <img
            src="/images/projects/victuri-stucchi/conteudo-01.png"
            alt="Peça de conteúdo da Victuri Stucchi"
            loading="lazy"
          />
          <figcaption>
            <span>01 / CONTEÚDO</span>
            <p>Conteúdo para redes sociais</p>
          </figcaption>
        </figure>

        <figure className="case-gallery-item">
          <img
            src="/images/projects/victuri-stucchi/imovel-01.png"
            alt="Divulgação de imóvel da Victuri Stucchi"
            loading="lazy"
          />
          <figcaption>
            <span>02 / IMÓVEIS</span>
            <p>Divulgação de propriedades</p>
          </figcaption>
        </figure>

        <figure className="case-gallery-item">
          <img
            src="/images/projects/victuri-stucchi/dia-das-maes.png"
            alt="Arte comemorativa de Dia das Mães"
            loading="lazy"
          />
          <figcaption>
            <span>03 / CAMPANHA SAZONAL</span>
            <p>Dia das Mães</p>
          </figcaption>
        </figure>

        <figure className="case-gallery-item">
          <img
            src="/images/projects/victuri-stucchi/quarta-feira.png"
            alt="Peça da tradição de quarta-feira da imobiliária"
            loading="lazy"
          />
          <figcaption>
            <span>04 / IDENTIDADE LOCAL</span>
            <p>Postagem Institucional</p>
          </figcaption>
        </figure>
      </div>

      <div className="case-gallery-heading">
        <span className="eyebrow">04 / CAMPANHAS EM SEQUÊNCIA</span>
        <h2>Uma história, quadro a quadro<span className="period">.</span></h2>
      </div>

      <VicturiCarouselMarquee />

      

      <Link to="/work" className="text-link">
        ← VOLTAR AOS PROJETOS
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

      <div className="ambient-label ambient-left">
        <img
          className="ambient-signature"
          src="/images/assinatura.png"
          alt="Lucas Santanna"
        />
        <span>POR Lucas Santanna</span>
        
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
              
              <Route path="/work/sao-burger" element={<SaoBurgerPage />} />
              
              <Route
                path="/work/victuri-stucchi"
                element={<VicturiStucchiPage />}
              />


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
