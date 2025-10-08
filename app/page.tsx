import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllTags, type BrandTag } from '@/lib/brands'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consumer Infrastructure That Makes Better Living Effortless',
  description:
    'We build consumer infrastructure that makes better living effortless. From health and payments to investing, work, and play — we design and launch the rails that power daily life.',
  keywords: [
    'consumer infrastructure',
    'better living',
    'health infrastructure',
    'payment infrastructure',
    'investing infrastructure',
    'work infrastructure',
    'consumer products',
    'daily life technology',
    'consumer rails',
    'effortless living',
    'consumer engineering',
    'lifestyle infrastructure',
  ],
  openGraph: {
    title:
      'Consumer Infrastructure That Makes Better Living Effortless - notacompany.com',
    description:
      'We build consumer infrastructure that makes better living effortless. From health and payments to investing, work, and play — we design and launch the rails that power daily life.',
    url: 'https://notacompany.com',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com homepage - Consumer Infrastructure',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com',
  },
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  exited: 'Exited',
  deceased: 'Deceased',
}

function ExploreSection() {
  const allTags = getAllTags()
  // Filter out exited and deceased tags for homepage display
  const activeTags = allTags.filter(({ tag }) => tag !== 'exited' && tag !== 'deceased')
  
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-base sm:text-lg'>
      {activeTags.map(({ tag, count }) => (
        <Link
          key={tag}
          href={`/portfolio?tag=${tag}`}
          className='flex flex-col items-center p-4 border border-black hover:bg-gray-50 transition-colors'
        >
          <span className='font-bold text-lg'>{count}</span>
          <span className='text-sm text-gray-600'>{tagLabels[tag]}</span>
        </Link>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white text-black'>
      <SiteHeader currentPage='home' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12'>
        {/* Hero Section */}
        <section className='mb-8 md:mb-12'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight text-balance'>
            We build consumer infrastructure that makes better living
            effortless.
          </h2>
          <div className='space-y-6'>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              From health and payments to investing, work, and play — we design
              and launch the rails that power daily life.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Link
                href='/portfolio'
                className='inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-sm'
              >
                See Our Portfolio
              </Link>
              <a
                href='mailto:hey@notacompany.com'
                className='inline-flex items-center justify-center px-6 py-3 border border-black text-black font-medium hover:bg-gray-50 transition-colors rounded-sm'
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className='mb-8 md:mb-12'>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Explore:
          </h3>
          <ExploreSection />
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Contact:
          </h3>
          <p className='text-base sm:text-lg'>
            For partnerships or inquiries:{' '}
            <a
              href='mailto:hey@notacompany.com'
              className='underline break-all'
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
