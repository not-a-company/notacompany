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
    tagline: 'Financial products for humans.',
    mission: 'Building financial tools that make money management effortless.',

    // Meta descriptions (120-160 chars)
    descriptions: {
      get home() {
        return `Tiago Martins is the founder of not a company. Building financial products that amplify human potential and make money management effortless.`
      },
      get portfolio() {
        const count = getBrandCount()
        return `Portfolio of ${count} financial products and fintech ventures across creation, investment, and advisory. Technology that helps people manage money better.`
      },
      brand: (name: string, tagline: string) =>
        `${name}: ${tagline} A financial product from the not a company portfolio.`,
    },

    // About content for LLMs.txt and pages
    about: `I'm Tiago Martins, founder of not a company. I build financial products that put humans first—tools that simplify money decisions rather than obscure them. Over the years, I've created fintech products from scratch, invested in others, and advised many more.`,
  },
} as const

export type SiteConfig = typeof siteConfig
