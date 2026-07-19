import { useEffect, useRef, useState } from 'react'

/** Tracks which section is currently in the reading band and returns its id.
 *
 *  `ids` must be in document order. Sections nest (a parent contains its
 *  children), so several are in the band at once; the LAST one in document
 *  order wins, which is always the most specific — the child when you're
 *  inside one, the parent when you're in the space above them.
 *
 *  The observer callback only reports entries that *changed*, so visibility
 *  is accumulated in a ref and the active id is derived from the full set.
 *  Deriving it from the callback batch alone leaves parents permanently
 *  unselectable. */
export function useScrollSpy(ids: readonly string[], initial: string): string {
  const [active, setActive] = useState(initial)
  const visible = useRef(new Map<string, boolean>())

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.current.set(entry.target.id, entry.isIntersecting)
        }
        // last visible in document order = most specific
        for (let i = ids.length - 1; i >= 0; i--) {
          if (visible.current.get(ids[i])) {
            setActive(ids[i])
            return
          }
        }
        // nothing in the band (between sections) — keep the previous one
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))

    // A short final section can sit below the band even when the page is
    // scrolled all the way down — without this it could never light up.
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) setActive(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return active
}
