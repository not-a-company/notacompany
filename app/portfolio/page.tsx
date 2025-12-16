import type { Metadata } from 'next'
import { Suspense } from 'react'

import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getAllTags } from '@/lib/brands'

import PortfolioClient from './portfolio-client'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of consumer infrastructure brands.',
}

export default function PortfolioPage() {
  const allBrands = getAllBrands()
  const allTags = getAllTags()

  return (
    <>
      <SiteHeader currentPage='portfolio' />

      <main>
        <h2>Portfolio</h2>
        <p>
          Consumer infrastructure brands across creation, investment, and advisory.
        </p>

        <hr />

        <Suspense fallback={<p>Loading...</p>}>
          <PortfolioClient brands={allBrands} tags={allTags} />
        </Suspense>

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
