import { useCallback, useEffect, useState } from 'react'
import { CONTENT, type Content, type Locale } from './content'

const KEY = 'lang'

function detect(): Locale {
  try {
    const stored = localStorage.getItem(KEY)
    if (stored === 'en' || stored === 'pt') return stored
  } catch {
    // storage unavailable — fall through to the browser's preference
  }
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('pt')) return 'pt'
  return 'en'
}

/** Current locale, its content, and a setter. Keeps <html lang> and the
 *  document title in sync so search engines and screen readers agree with
 *  what's actually on screen. */
export function useLang(): { lang: Locale; t: Content; setLang: (l: Locale) => void } {
  const [lang, setLangState] = useState<Locale>(detect)
  const t = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [t])

  const setLang = useCallback((next: Locale) => {
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // choice just won't persist across visits
    }
    setLangState(next)
  }, [])

  return { lang, t, setLang }
}
