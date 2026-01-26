import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands } from '@/lib/brands'
import { siteConfig } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: siteConfig.strings.tagline,
  description: siteConfig.strings.descriptions.home,
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const brandCount = getAllBrands().length

  return (
    <>
      <SiteHeader currentPage='home' />

      <main>
        <h2>Financial products for humans.</h2>

        <hr />

        <h3>About</h3>
        <p>
          I&apos;m <strong>Tiago Martins</strong>, founder of{' '}
          <em>not a company</em>. I build financial products that put humans
          first—tools that simplify money decisions rather than obscure them.
          Over the years, I&apos;ve created {brandCount} fintech products from
          scratch, invested in others, and advised many more.
        </p>

        <hr />

        <p>From here you can:</p>
        <ul>
          <li>
            <Link href='/portfolio'>Browse the portfolio</Link>
          </li>
          <li>
            <a href='mailto:hey@notacompany.com'>Get in touch</a>
          </li>
        </ul>

        <hr />

        <h3>Contact:</h3>
        <p>
          <a href='mailto:hey@notacompany.com'>hey@notacompany.com</a>
        </p>
      </main>

      <SiteFooter />
    </>
  )
}
