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
        <h2>Still building stuff for Humans.</h2>

        <hr />

        <h3>About</h3>
        <p>
          I&apos;m <strong>Tiago Martins</strong>, founder and solo employee of{' '}
          <em>not a company</em>. I&apos;m an engineer who believes technology
          should amplify human potential, not replace human judgment. Over the
          years, I&apos;ve been involved with {brandCount} consumer
          brands—building some from scratch, investing in others, and advising
          many more.
        </p>

        <hr />

        <p>From here you can:</p>
        <ul>
          <li>
            <Link href='/portfolio'>Browse the portfolio</Link>
          </li>
          <li>
            <Link href='/services'>Learn about services</Link>
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
