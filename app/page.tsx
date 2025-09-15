import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consumer Economic Theory Research & Engineering Lab',
  description:
    'Notacompany is a consumer economic theory research and engineering lab. By engineers, for researchers. Our 100% engineering team conducts research on consumer behavior, decision-making patterns, and market dynamics while building real consumer products as co-creations.',
  keywords: [
    'consumer economic theory',
    'consumer behavior research',
    'behavioral economics',
    'economic modeling',
    'consumer decision-making',
    'market behavior analysis',
    'by engineers for researchers',
    '100% engineers team',
    'engineering-led research',
    'consumer psychology research',
    'economic research lab',
    'consumer product co-creation',
  ],
  openGraph: {
    title:
      'Consumer Economic Theory Research & Engineering Lab - notacompany.com',
    description:
      'Consumer economic theory research and engineering lab. By engineers, for researchers. We conduct research on consumer behavior and market dynamics while building real consumer products as co-creations.',
    url: 'https://notacompany.com',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com homepage - Consumer Economic Theory Research Lab',
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
            Notacompany is a consumer economic theory research and engineering
            lab.
          </h2>
          <div className='space-y-3'>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              We conduct research on consumer decision-making patterns,
              behavioral economics, and develop practical applications.
            </p>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
              Our methods have consistently amplified user adoption and
              retention for consumer products.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className='mb-8 md:mb-12'>
          <h3 className='text-lg sm:text-xl font-bold mb-4 border-b border-black pb-2'>
            Navigate:
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg'>
            <div>
              <h4 className='font-bold mb-3'>Our Research:</h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='/clients' className='hover:underline'>
                    → Past Service Clients
                  </Link>
                </li>
                <li>
                  <Link href='/co-creations' className='hover:underline'>
                    → Co-Creations
                  </Link>
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
            For research collaboration or inquiries:{' '}
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
