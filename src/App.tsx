import { CONTACT, INTRO, CASE, ALSO, EXPERIENCE, SKILL_GROUPS, PRINCIPLES, CONTACT_TEXT } from './content'
import { useReveal } from './useReveal'

function TopNav() {
  return (
    <header className="nav">
      <a className="nav-name" href="#top">Gabriel Bonato</a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href={`mailto:${CONTACT.email}`}>Email</a>
    </header>
  )
}

function Intro() {
  return (
    <section className="intro" id="top">
      <h1>{INTRO.name}</h1>
      <p className="intro-title">{INTRO.title}</p>
      <p className="intro-body">{INTRO.paragraph}</p>
      <p className="intro-meta">{INTRO.meta}</p>
      <div className="btn-row">
        <a className="btn primary" href={`mailto:${CONTACT.email}`}>Email me</a>
        <a className="btn" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

function Diagram() {
  return (
    <figure className="diagram">
      <div className="diagram-flow">
        <div className="stage">
          <p className="stage-name">Plant sites</p>
          <p className="stage-desc">Inverters · protection relays · weather stations · meters</p>
          <p className="stage-tech">Modbus TCP</p>
        </div>
        <span className="arrow" aria-hidden="true" />
        <div className="stage">
          <p className="stage-name">Edge collector</p>
          <p className="stage-desc">Python service per plant — polling, fault detection, local buffer</p>
          <p className="stage-tech">Docker · TimescaleDB</p>
        </div>
        <span className="arrow" aria-hidden="true" />
        <div className="stage">
          <p className="stage-name">Cloud platform</p>
          <p className="stage-desc">Ingestion, reports, loss attribution, alerting</p>
          <p className="stage-tech">FastAPI · TimescaleDB</p>
        </div>
        <span className="arrow" aria-hidden="true" />
        <div className="stage">
          <p className="stage-name">Operators</p>
          <p className="stage-desc">Web dashboard & field commissioning tool</p>
          <p className="stage-tech">React · TypeScript</p>
        </div>
      </div>
      <figcaption className="diagram-note">
        Control flows back down the same path: an audited WebSocket/HTTP command rail with two-factor
        step-up — remote equipment operation and over-the-air collector updates, no SSH to sites.
      </figcaption>
    </figure>
  )
}

function CaseStudy() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref} id="work">
      <p className="kicker">Selected work</p>
      <h2>{CASE.heading}</h2>
      <p className="case-period">{CASE.period}</p>
      <div className="case-grid">
        <div className="case-main">
          <p className="case-summary">{CASE.summary}</p>
          <Diagram />
          <h3 className="sub">What I built</h3>
          <div className="built">
            {CASE.built.map((b) => (
              <div key={b.title} className="built-item">
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
          <h3 className="sub">Selected outcomes</h3>
          <ul className="outcomes">
            {CASE.outcomes.map((o) => (
              <li key={o.slice(0, 24)}>{o}</li>
            ))}
          </ul>
        </div>
        <aside className="case-aside">
          {CASE.meta.map((m) => (
            <div key={m.label} className="aside-item">
              <p className="aside-label">{m.label}</p>
              <p className="aside-value">{m.value}</p>
            </div>
          ))}
          <p className="aside-note">
            Repositories are private (employer platform). I walk through the code live in interviews
            and share redacted excerpts on request.
          </p>
        </aside>
      </div>
    </section>
  )
}

function AlsoBuilt() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref}>
      <h2 className="kicker">Also built</h2>
      <div className="also-grid">
        {ALSO.map((a) => (
          <article key={a.title} className="also-card">
            <div className="also-head">
              <h3>{a.title}</h3>
              <span className="tag">{a.tag}</span>
            </div>
            <p>{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref} id="experience">
      <h2 className="kicker">Experience</h2>
      <div className="xp">
        {EXPERIENCE.map((e) => (
          <article key={e.company} className="xp-row">
            <div className="xp-left">
              <p className="xp-period">{e.period}</p>
            </div>
            <div>
              <h3>{e.role}</h3>
              <p className="xp-company">{e.company}</p>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref} id="skills">
      <h2 className="kicker">Skills</h2>
      <div className="skills">
        {SKILL_GROUPS.map((g) => (
          <div key={g.name} className="skill-group">
            <p className="skill-name">{g.name}</p>
            <p className="skill-items">{g.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowIWork() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref}>
      <h2 className="kicker">How I work</h2>
      <div className="principles">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="principle">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal contact" ref={ref} id="contact">
      <h2 className="kicker">Contact</h2>
      <p className="contact-text">{CONTACT_TEXT}</p>
      <div className="btn-row">
        <a className="btn primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <a className="btn" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <TopNav />
      <main>
        <Intro />
        <CaseStudy />
        <AlsoBuilt />
        <Experience />
        <Skills />
        <HowIWork />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Gabriel Mendes Bonato</span>
        <a href={CONTACT.github} target="_blank" rel="noreferrer">Site source on GitHub</a>
      </footer>
    </>
  )
}
