import type { Metadata } from 'next'
import { Suspense } from 'react'

import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getAllTags } from '@/lib/brands'

import PortfolioClient from './portfolio-client'

export const metadata: Metadata = {
  title: 'Our Portfolio - Consumer Infrastructure Brands',
  description:
    'Explore our portfolio of consumer infrastructure brands across creation, advisory, and investment. From health and financial infrastructure to mobility and lifestyle platforms - see how we build and support brands that make better living effortless.',
  keywords: [
    'consumer infrastructure portfolio',
    'brand portfolio',
    'infrastructure investments',
    'consumer product creation',
    'brand advisory',
    'infrastructure partnerships',
    'Steps.org',
    'Superstables',
    'Talent Protocol',
    'Lime',
    'consumer infrastructure brands',
  ],
  openGraph: {
    title: 'Our Portfolio - Consumer Infrastructure Brands',
    description:
      'Explore our portfolio of consumer infrastructure brands. From health and financial infrastructure to mobility platforms - see how we build brands that make better living effortless.',
    url: 'https://notacompany.com/portfolio',
    images: [
      {
        url: '/og-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Portfolio - Consumer Infrastructure Brands',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com/portfolio',
  },
}

export default function PortfolioPage() {
  const allBrands = getAllBrands()
  const allTags = getAllTags()

  return (
    <div className='min-h-screen bg-white text-black flex flex-col'>
      <SiteHeader currentPage='portfolio' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 flex-1'>
        {/* Page Title */}
        <section className='mb-8 sm:mb-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>
            Our Portfolio
          </h2>
          <p className='text-base sm:text-lg leading-relaxed text-gray-700'>
            Explore our portfolio of consumer infrastructure brands. From health
            and financial infrastructure to mobility and lifestyle platforms —
            see how we build and support brands that make better living
            effortless.
          </p>
        </section>

        {/* Portfolio Client Component */}
        <Suspense fallback={<div>Loading portfolio...</div>}>
          <PortfolioClient brands={allBrands} tags={allTags} />
        </Suspense>

        {/* Contact */}
        <section className='mt-12 sm:mt-16'>
          <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-black pb-2'>
            Interested in Working Together?
          </h3>
          <p className='text-base sm:text-lg leading-relaxed'>
            Ready to build infrastructure that makes better living effortless?{' '}
            <a
              href='mailto:hey@notacompany.com'
              className='underline hover:no-underline break-all'
            >
              hey@notacompany.com
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
