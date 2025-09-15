import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Fractional & Interim Technical Talent Acquisition for Consumer Product Companies',
  description:
    "Notacompany provides fractional and interim technical talent acquisition for the world's most ambitious consumer product companies. By engineers, for engineers. Our 100% engineering team focuses exclusively on the top 0.01% of global engineering talent for 3-12 month engagements.",
  keywords: [
    'fractional technical talent acquisition',
    'interim technical talent acquisition',
    'consumer product companies',
    'technical talent placement',
    'by engineers for engineers',
    '100% engineers team',
    'engineering-led talent acquisition',
    'interim CTO services',
    'VP Engineering placement',
    'fractional CTO placement',
    'senior engineer placement',
    'startup technical talent',
  ],
  openGraph: {
    title: 'Fractional & Interim Technical Talent Acquisition - notacompany.com',
    description:
      'Expert fractional and interim technical talent acquisition for ambitious consumer product companies. By engineers, for engineers. We focus exclusively on the top 0.01% of global engineering talent for 3-12 month engagements.',
    url: 'https://notacompany.com',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com homepage - Fractional & Interim Talent Acquisition',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com',
  },
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
            Notacompany provides fractional and interim technical talent
            acquisition for the world&apos;s most ambitious consumer product
            companies.
          </h2>
          <div className='space-y-3'>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              We focus exclusively on the top 0.01% of global engineering talent.
            </p>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              <strong>By engineers, for engineers.</strong> Our team is made up of 100% engineers who know the drill - we understand the real challenges, technical decisions, and day-to-day realities of building consumer products.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className='mb-8 md:mb-12'>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Consumer Experience Focused Service:
          </h3>
          <ul className='space-y-3 text-base sm:text-lg'>
            <li>- Fractional & Interim Technical Talent Acquisition</li>
          </ul>
        </section>

        {/* Quick Links */}
        <section className='mb-8 md:mb-12'>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Navigate:
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg'>
            <div>
              <h4 className='font-bold mb-3'>Our Work:</h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='/services' className='hover:underline'>
                    → Services
                  </Link>
                </li>
                <li>
                  <Link href='/clients' className='hover:underline'>
                    → Past Service Clients
                  </Link>
                </li>
                <li>
                  <Link href='/creations' className='hover:underline'>
                    → Our Co-Creations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-3'>Contact:</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='mailto:hey@notacompany.com'
                    className='hover:underline'
                  >
                    → hey@notacompany.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Contact:
          </h3>
          <p className='text-base sm:text-lg'>
            For inquiries:{' '}
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
