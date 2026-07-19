import { useCallback, useEffect, useRef, useState } from 'react'

/** Copies text and reports success for a moment so the UI can confirm it.
 *  Returns `false` if the clipboard is unavailable (blocked, or an insecure
 *  context) so callers can fall back to something that always works. */
export function useClipboard(holdMs = 2200) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setCopied(false), holdMs)
        return true
      } catch {
        return false
      }
    },
    [holdMs],
  )

  return { copied, copy }
}
