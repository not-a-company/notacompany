import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consumer Infrastructure That Makes Better Living Effortless',
  description:
    'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
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
      'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
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

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white text-black flex flex-col'>
      <SiteHeader currentPage='home' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 flex-1'>
        {/* Hero Section */}
        <section className='mb-8 md:mb-12'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight text-balance'>
            We build consumer infrastructure that makes better living
            effortless.
          </h2>
          <div className='space-y-6'>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              The rails that power your daily life—from health and finance to
              mobility and work—are built by a team of 100% engineers who
              understand what it takes to create foundational infrastructure
              that millions rely on.
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
