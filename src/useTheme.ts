import { useCallback, useState } from 'react'

type Theme = 'light' | 'dark'

function current(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/** Theme is applied to <html data-theme> by an inline script in index.html
 *  before first paint; this hook only flips it and remembers the choice. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(current)

  const toggle = useCallback(() => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // private mode / storage disabled — the toggle still works for this session
    }
    setTheme(next)
  }, [])

  return [theme, toggle]
}
