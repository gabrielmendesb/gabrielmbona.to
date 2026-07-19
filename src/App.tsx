import { Fragment } from 'react'
import {
  CONTACT, RESUME_URL, INTRO, CASE, FLOWS, ALSO, EXPERIENCE, SKILL_GROUPS, PRINCIPLES, CONTACT_TEXT,
} from './content'
import { useReveal } from './useReveal'

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 16 16" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M8 1a.75.75 0 0 1 .75.75v6.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V1.75A.75.75 0 0 1 8 1zM2.75 12a.75.75 0 0 1 .75.75v.75h9v-.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75z" />
    </svg>
  )
}

function TopNav() {
  return (
    <header className="nav">
      <a className="nav-name" href="#top">Gabriel Bonato</a>
      <nav className="nav-links" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
      </nav>
      <div className="nav-social">
        <a
          className="icon-btn"
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <GithubIcon />
        </a>
        <a
          className="icon-btn"
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon />
        </a>
      </div>
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
        <a className="btn" href={RESUME_URL} download>
          <DownloadIcon />
          Résumé <span className="btn-hint">PDF</span>
        </a>
      </div>
    </section>
  )
}

function Diagram() {
  return (
    <figure className="diagram">
      {FLOWS.map((flow) => (
        <div key={flow.label} className="track">
          <p className="track-label">{flow.label}</p>
          <div className="diagram-flow">
            {flow.stages.map((s, i) => (
              <Fragment key={s.name}>
                {i > 0 && <span className="arrow" aria-hidden="true" />}
                <div className="stage">
                  <p className="stage-name">{s.name}</p>
                  <p className="stage-desc">{s.desc}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      ))}
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
      <p className="case-summary">{CASE.summary}</p>

      <dl className="case-meta">
        {CASE.meta.map((m) => (
          <div key={m.label} className="meta-cell">
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>

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

      <p className="case-note">
        Repositories are private — this is my employer’s platform. Happy to go deep on the
        architecture and the reasoning behind it.
      </p>
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
      <a className="contact-email" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      <div className="btn-row">
        <a className="btn" href={RESUME_URL} download>
          <DownloadIcon />
          Résumé <span className="btn-hint">PDF</span>
        </a>
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
