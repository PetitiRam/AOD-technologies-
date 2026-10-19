import { useState } from 'react'
import './App.css'

const capabilities = [
  {
    number: '01',
    title: 'Software Engineering',
    description:
      'Building dependable digital products, platforms and the systems that connect them.',
    tags: ['Web platforms', 'System architecture', 'API engineering'],
  },
  {
    number: '02',
    title: 'Digital Infrastructure',
    description:
      'Developing the technical foundations for connected services, reliable operations and future growth.',
    tags: ['Cloud systems', 'Infrastructure', 'Automation'],
  },
  {
    number: '03',
    title: 'Security Engineering',
    description:
      'Designing systems with security, controlled access and operational accountability built into the architecture.',
    tags: ['Access control', 'Secure design', 'Auditability'],
  },
  {
    number: '04',
    title: 'Research & Innovation',
    description:
      'Exploring practical technologies and engineering approaches that solve meaningful problems.',
    tags: ['Research', 'Prototyping', 'Applied technology'],
  },
]

const principles = [
  {
    number: '01',
    title: 'Build with purpose.',
    text: 'Every system begins with a clear problem, a defined purpose and a reason to exist.',
  },
  {
    number: '02',
    title: 'Engineer for reliability.',
    text: 'Good technology must work beyond the presentation. Architecture, testing and maintenance matter.',
  },
  {
    number: '03',
    title: 'Think beyond today.',
    text: 'We consider how systems evolve, connect and remain useful as requirements change.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark${light ? ' brand-mark-light' : ''}`} aria-hidden="true">
      A<span>.</span>
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="AOD Technologies home">
          <Mark />
          <span className="brand-copy">
            <strong>AOD TECHNOLOGIES</strong>
            <small>ANCIENT OF DAYS</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#platforms" onClick={closeMenu}>Platforms</a>
          <a href="#principles" onClick={closeMenu}>Our approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true">
          <div className="architecture architecture-back" />
          <div className="architecture architecture-front" />
          <div className="architecture architecture-column" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TECHNOLOGY · ENGINEERING · INFRASTRUCTURE
          </div>

          <h1>
            Built on vision.
            <br />
            <span>Engineered</span>
            <br />
            for what&apos;s next.
          </h1>

          <p className="hero-description">
            We build digital systems and technology foundations
            designed to solve real problems and support lasting progress.
          </p>

          <div className="hero-actions">
            <a className="button button-light" href="#capabilities">
              Explore our work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">
              Discover AOD <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>ANCIENT OF DAYS TECHNOLOGIES</span>
          <span className="hero-location">KAMPALA, UGANDA <i /> BUILDING FOR TOMORROW</span>
        </div>

        <div className="hero-index" aria-hidden="true">AOD / 001</div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-label">
          <span>01</span>
          <span>WHO WE ARE</span>
        </div>

        <div className="intro-content">
          <p className="overline">A TECHNOLOGY COMPANY WITH A LONG-TERM VIEW</p>
          <h2>
            Technology is not the destination.
            <span> What it makes possible is.</span>
          </h2>
          <div className="intro-bottom">
            <p>
              AOD Technologies is developing a foundation for digital products,
              software engineering and connected technology services. Our focus
              is practical innovation: building systems with clear purpose,
              thoughtful architecture and room to grow.
            </p>
            <a className="circle-link" href="#principles" aria-label="Discover our approach">
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad" id="capabilities">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>02</span>
              <span>WHAT WE DO</span>
            </div>
            <h2>Engineering the <span>foundations.</span></h2>
          </div>
          <p>
            Connected disciplines. One engineering mindset.
            Built around real-world needs.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <div className="card-top">
                <span className="card-number">{item.number} / 04</span>
                <span className="card-arrow"><ArrowIcon /></span>
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="tag-list">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="platforms section-pad" id="platforms">
        <div className="section-label">
          <span>03</span>
          <span>THE BIGGER PICTURE</span>
        </div>

        <div className="platform-layout">
          <div className="platform-copy">
            <p className="overline">A CONNECTED TECHNOLOGY ECOSYSTEM</p>
            <h2>
              Independent systems.
              <br />
              <span>A shared vision.</span>
            </h2>
            <p className="platform-description">
              We see technology as more than individual products. We are
              working toward an ecosystem in which digital platforms,
              infrastructure and services can develop independently while
              remaining part of a coherent long-term vision.
            </p>
            <a className="text-link text-link-light" href="#contact">
              Discuss a collaboration <ArrowIcon />
            </a>
          </div>

          <div className="ecosystem" aria-label="AOD technology ecosystem illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-node node-top">INFRASTRUCTURE</div>
            <div className="orbit-node node-right">PLATFORMS</div>
            <div className="orbit-node node-left">ENGINEERING</div>
            <div className="ecosystem-core">
              <Mark light />
              <span>AOD</span>
              <small>TECHNOLOGIES</small>
            </div>
          </div>
        </div>
      </section>

      <section className="principles section-pad" id="principles">
        <div className="principles-heading">
          <div className="section-label">
            <span>04</span>
            <span>HOW WE THINK</span>
          </div>
          <h2>Our standards shape<br />what we <span>build.</span></h2>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article className="principle-row" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
              <span className="principle-symbol">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-outline" aria-hidden="true">AOD</div>
        <div className="section-label">
          <span>05</span>
          <span>START A CONVERSATION</span>
        </div>
        <h2>
          Have a challenge
          <br />
          worth <span>engineering?</span>
        </h2>
        <p>
          We welcome conversations about technology, engineering,
          infrastructure and meaningful collaboration.
        </p>
        <a className="button button-light" href="mailto:contact@aodtechnologies.com">
          Contact AOD Technologies <ArrowIcon />
        </a>
        <small className="contact-note">
          Replace this provisional email address with your confirmed company email before launch.
        </small>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <Mark light />
          <span className="brand-copy">
            <strong>AOD TECHNOLOGIES</strong>
            <small>ANCIENT OF DAYS</small>
          </span>
        </a>

        <p>Thoughtful engineering. Technology with purpose.</p>

        <div className="footer-right">
          <span>© {new Date().getFullYear()} AOD Technologies</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
