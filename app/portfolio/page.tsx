import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getAllTags, type BrandTag } from '@/lib/brands'
import { siteConfig } from '@/lib/site-config'

import PortfolioClient from './portfolio-client'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: siteConfig.strings.descriptions.portfolio,
  alternates: {
    canonical: '/portfolio',
  },
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  exited: 'Exited',
  deceased: 'Deceased',
}

export default function PortfolioPage() {
  const allBrands = getAllBrands()
  const allTags = getAllTags()

  // Server-rendered brand list for SEO (crawlers can see these links)
  const BrandList = () => (
    <ul>
      {allBrands.map(brand => (
        <li key={brand.slug}>
          <strong>
            <Link href={`/portfolio/${brand.slug}`}>{brand.name}</Link>
          </strong>{' '}
          ({brand.year}) — {brand.tagline}
          <br />
          <em>Tags: {brand.tags.map(tag => tagLabels[tag]).join(', ')}</em>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <SiteHeader currentPage='portfolio' />

      <main>
        <h2>Portfolio</h2>
        <p>
          Consumer infrastructure brands across creation, investment, and
          advisory.
        </p>

        <hr />

        <Suspense fallback={<BrandList />}>
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
