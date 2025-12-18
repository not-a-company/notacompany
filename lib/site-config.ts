import { getAllBrands } from './brands'

// Get dynamic brand count
function getBrandCount(): number {
  try {
    return getAllBrands().length
  } catch {
    return 16 // Fallback for build-time
  }
}

export const siteConfig = {
  // Core URLs
  url: 'https://www.notacompany.com',
  locale: 'en',

  // Identity
  name: 'not a company',
  domain: 'notacompany.com',
  founder: 'Tiago Martins',
  email: 'hey@notacompany.com',
  github: 'https://github.com/not-a-company/notacompany',

  // Dynamic content
  get brandCount() {
    return getBrandCount()
  },

  // Content strings (i18n-ready)
  strings: {
    tagline: 'Still building stuff for Humans.',
    mission:
      'Building consumer infrastructure that makes better living effortless.',

    // Meta descriptions (120-160 chars)
    descriptions: {
      get home() {
        return `Tiago Martins is the founder of not a company. Building consumer infrastructure brands that amplify human potential and make better living effortless.`
      },
      get portfolio() {
        const count = getBrandCount()
        return `Portfolio of ${count} consumer infrastructure brands across creation, investment, and advisory. From fintech to education—technology that helps people live better.`
      },
      brand: (name: string, tagline: string) =>
        `${name}: ${tagline} A consumer infrastructure brand from the not a company portfolio.`,
    },

    // About content for LLMs.txt and pages
    about: `I'm Tiago Martins, founder and solo employee of not a company. I'm an engineer who believes technology should amplify human potential, not replace human judgment. Over the years, I've been involved with consumer infrastructure brands—building some from scratch, investing in others, and advising many more.

This isn't a venture studio or an agency. It's just me, building and supporting things that help people live better (hopefully).`,
  },
} as const

export type SiteConfig = typeof siteConfig
