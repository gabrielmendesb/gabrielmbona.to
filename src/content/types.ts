export type Locale = 'en' | 'pt'

export type Content = {
  /** <html lang> for this locale */
  htmlLang: string
  meta: { title: string; description: string }
  ui: {
    skip: string
    cv: string
    getInTouch: string
    copy: string
    copied: string
    source: string
    navLabel: string
    sections: {
      top: string
      work: string
      experience: string
      skills: string
      contact: string
    }
  }
  intro: {
    title: string
    whoLabel: string
    who: string
    workLabel: string
    work: string
  }
  caseStudy: {
    kicker: string
    heading: string
    period: string
    summary: string
    meta: { label: string; value: string }[]
    builtLabel: string
    built: { title: string; body: string }[]
    outcomesLabel: string
    outcomes: string[]
    note: string
  }
  experience: {
    label: string
    items: { company: string; role: string; period: string; bullets: string[] }[]
  }
  skills: {
    label: string
    groups: { name: string; items: string }[]
    langLabel: string
    languages: { name: string; level: string }[]
  }
  principles: { label: string; items: { title: string; body: string }[] }
  availability: { label: string; body: string }
  cats: { label: string; note: string }
}
