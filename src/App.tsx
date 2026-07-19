import {
  CONTACT, RESUME_URL, REPO_URL, NAME, CAT_PHOTOS, LOCALES, type Content, type Locale,
} from './content'
import { useReveal } from './useReveal'
import { useTheme } from './useTheme'
import { useLang } from './useLang'
import { useScrollSpy } from './useScrollSpy'
import { useClipboard } from './useClipboard'

/** Sections built but not shown yet — flip to true to enable.
 *  Cats needs photos in public/cats/ + CAT_PHOTOS filled first. */
const SHOW_CONTACT = true
const SHOW_CATS = false

const SECTION_IDS = ['top', 'work', 'experience', 'skills', 'contact'].filter(
  (id) => id !== 'contact' || SHOW_CONTACT,
)

/** Scroll to a section without writing a hash into the address bar.
 *  The href stays put so the link is still right-clickable, keyboard
 *  accessible, and works if the script never runs. */
function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

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

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM8 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 8 0zm0 13a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 8 13zM16 8a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 16 8zM3 8a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 3 8zm10.657-5.657a.75.75 0 0 1 0 1.06l-.708.708a.75.75 0 1 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0zM4.111 11.889a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.061-1.061l.707-.707a.75.75 0 0 1 1.061 0zm9.546 1.768a.75.75 0 0 1-1.06 0l-.708-.707a.75.75 0 0 1 1.06-1.061l.708.707a.75.75 0 0 1 0 1.061zM4.111 4.111a.75.75 0 0 1-1.06 0l-.708-.707a.75.75 0 1 1 1.06-1.061l.708.707a.75.75 0 0 1 0 1.061z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.1 1.2a.75.75 0 0 1 .2.9 5.6 5.6 0 0 0 7.4 7.4.75.75 0 0 1 1 1A7.1 7.1 0 1 1 5.2 1a.75.75 0 0 1 .9.2z" />
    </svg>
  )
}

function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function LangSwitch({ lang, setLang }: { lang: Locale; setLang: (l: Locale) => void }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? ' is-active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          lang={l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

function SideNav({ t }: { t: Content }) {
  const active = useScrollSpy(SECTION_IDS, 'top')
  return (
    <nav className="side-nav" aria-label={t.ui.navLabel}>
      {SECTION_IDS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className={`side-link${active === id ? ' is-active' : ''}`}
          aria-current={active === id ? 'true' : undefined}
        >
          <span className="side-tick" aria-hidden="true" />
          <span className="side-label">{t.ui.sections[id as keyof typeof t.ui.sections]}</span>
        </a>
      ))}
    </nav>
  )
}

function TopNav({ t, lang, setLang }: { t: Content; lang: Locale; setLang: (l: Locale) => void }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links" aria-label={t.ui.navLabel}>
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>{t.ui.sections.work}</a>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>
            {t.ui.sections.experience}
          </a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t.ui.sections.skills}</a>
        </nav>
        <div className="nav-actions">
          <LangSwitch lang={lang} setLang={setLang} />
          <ThemeToggle />
          <span className="nav-sep" aria-hidden="true" />
          <a className="nav-resume" href={RESUME_URL} download>
            <DownloadIcon />
            {t.ui.cv}
          </a>
          <a className="nav-cta" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            {t.ui.getInTouch}
          </a>
        </div>
      </div>
    </header>
  )
}

function Intro({ t }: { t: Content }) {
  return (
    <section className="intro" id="top">
      <h1>{NAME}</h1>
      <p className="intro-title">{t.intro.title}</p>

      <div className="intro-block">
        <p className="kicker">{t.intro.whoLabel}</p>
        <p className="intro-body">{t.intro.who}</p>
      </div>

      <div className="intro-block">
        <p className="kicker">{t.intro.workLabel}</p>
        <p className="intro-body">{t.intro.work}</p>
      </div>
    </section>
  )
}

function CaseStudy({ t }: { t: Content }) {
  const ref = useReveal<HTMLElement>()
  const c = t.caseStudy
  return (
    <section className="section reveal" ref={ref} id="work">
      <p className="kicker">{c.kicker}</p>

      <h2>{c.heading}</h2>
      <p className="case-period">{c.period}</p>
      <p className="case-summary">{c.summary}</p>

      <dl className="case-meta">
        {c.meta.map((m) => (
          <div key={m.label} className="meta-cell">
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="sub" id="built">{c.builtLabel}</h3>
      <div className="built">
        {c.built.map((b) => (
          <div key={b.title} className="built-item">
            <h4>{b.title}</h4>
            <p>{b.body}</p>
          </div>
        ))}
      </div>

      <h3 className="sub" id="outcomes">{c.outcomesLabel}</h3>
      <ul className="outcomes">
        {c.outcomes.map((o) => (
          <li key={o.slice(0, 24)}>{o}</li>
        ))}
      </ul>

      <p className="case-note">{c.note}</p>
    </section>
  )
}

function Experience({ t }: { t: Content }) {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref} id="experience">
      <h2 className="kicker">{t.experience.label}</h2>
      <div className="xp">
        {t.experience.items.map((e) => (
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

function Skills({ t }: { t: Content }) {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal" ref={ref} id="skills">
      <h2 className="kicker">{t.skills.label}</h2>
      <div className="skills">
        {t.skills.groups.map((g) => (
          <div key={g.name} className="skill-group">
            <p className="skill-name">{g.name}</p>
            <p className="skill-items">{g.items}</p>
          </div>
        ))}
      </div>

      <div className="sub-block">
        <p className="sub-label">{t.skills.langLabel}</p>
        <div className="langs">
          {t.skills.languages.map((l) => (
            <div key={l.name} className="lang">
              <p className="lang-name">{l.name}</p>
              <p className="lang-level">{l.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sub-block" id="approach">
        <p className="sub-label">{t.principles.label}</p>
        <div className="principles">
          {t.principles.items.map((pr) => (
            <div key={pr.title} className="principle">
              <h3>{pr.title}</h3>
              <p>{pr.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }: { t: Content }) {
  const ref = useReveal<HTMLElement>()
  const { copied, copy } = useClipboard()

  return (
    <section className="section reveal" ref={ref} id="contact">
      <h2 className="kicker">{t.availability.label}</h2>
      <p className="avail-body">{t.availability.body}</p>

      <div className="contact-direct">
        <a className="contact-email" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <button type="button" className="copy-btn" onClick={() => copy(CONTACT.email)}>
          {copied ? t.ui.copied : t.ui.copy}
        </button>
      </div>

      <div className="contact-profiles">
        <a href={CONTACT.github} target="_blank" rel="noreferrer">
          <GithubIcon />
          GitHub
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
          <LinkedinIcon />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

function Cats({ t }: { t: Content }) {
  const ref = useReveal<HTMLElement>()
  return (
    <section className="section reveal cats" ref={ref} id="cats">
      <h2 className="kicker">{t.cats.label}</h2>
      <p className="cats-note">{t.cats.note}</p>
      {CAT_PHOTOS.length > 0 && (
        <div className="cat-grid">
          {CAT_PHOTOS.map((p) => (
            <img key={p.src} className="cat-photo" src={p.src} alt={p.alt} loading="lazy" />
          ))}
        </div>
      )}
    </section>
  )
}

export default function App() {
  const { lang, t, setLang } = useLang()

  return (
    <>
      <a className="skip-link" href="#main">{t.ui.skip}</a>
      <TopNav t={t} lang={lang} setLang={setLang} />
      <SideNav t={t} />
      <main id="main">
        <Intro t={t} />
        <CaseStudy t={t} />
        <Experience t={t} />
        <Skills t={t} />
        {SHOW_CONTACT && <Contact t={t} />}
        {SHOW_CATS && <Cats t={t} />}
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {NAME}</span>
          <a
            className="icon-btn"
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={t.ui.source}
            title={t.ui.source}
          >
            <GithubIcon />
          </a>
        </div>
      </footer>
    </>
  )
}
