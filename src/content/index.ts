import type { Content, Locale } from './types'
import { en } from './en'
import { pt } from './pt'

export type { Content, Locale }

/** Locale-independent — the same in every language. */
export const CONTACT = {
  email: 'gabriel.mbonato@gmail.com',
  github: 'https://github.com/gabrielmendesb',
  linkedin: 'https://www.linkedin.com/in/g-mendes-bonato/',
}

// Served from public/ — drop the exported PDF there under this exact filename.
export const RESUME_URL = '/Gabriel-Mendes-Bonato-Resume.pdf'
export const REPO_URL = 'https://github.com/gabrielmendesb/gabrielmbona.to'

export const NAME = 'Gabriel Mendes Bonato'

/** Drop images into public/cats/ and list them here — the grid only renders
 *  when there's something in it, so the page stays clean until then. */
export const CAT_PHOTOS: { src: string; alt: string }[] = []

export const CONTENT: Record<Locale, Content> = { en, pt }

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
]
