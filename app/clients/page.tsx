import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work With Us - Consumer Infrastructure Partners',
  description:
    "Partner with us to build consumer infrastructure that makes better living effortless. We've built infrastructure solutions for Acreditar, xMoney, Talent Protocol, Bet Protocol, Lime, Parfois, Coflyt, and Fisacar across health, payments, investing, work, and lifestyle sectors.",
  keywords: [
    'consumer infrastructure partners',
    'infrastructure development',
    'consumer product infrastructure',
    'health infrastructure',
    'payment infrastructure',
    'lifestyle infrastructure',
    'work infrastructure',
    'Acreditar',
    'xMoney',
    'Talent Protocol',
    'Bet Protocol',
    'Lime mobility',
    'Parfois fashion',
    'Coflyt aviation',
    'Fisacar automotive',
    'consumer infrastructure partnerships',
    'better living infrastructure',
  ],
  openGraph: {
    title: 'Work With Us - Consumer Infrastructure Partners',
    description:
      'Partner with us to build consumer infrastructure that makes better living effortless. Infrastructure solutions across health, payments, investing, work, and lifestyle sectors.',
    url: 'https://notacompany.com/clients',
    images: [
      {
        url: '/og-clients.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com - Consumer Infrastructure Partners',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com/clients',
  },
}

export default function ClientsPage() {
  return (
    <div className='min-h-screen bg-white text-black'>
      <SiteHeader currentPage='clients' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12'>
        {/* Page Title */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Work With Us</h2>
          <p className='text-lg leading-relaxed'>
            Partner with us to build consumer infrastructure that makes better
            living effortless. We&apos;ve created infrastructure solutions
            across health, payments, investing, work, and lifestyle sectors.
          </p>
        </section>

        {/* Infrastructure Partners */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Clients:
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Acreditar</h4>
              <p className='text-sm'>Portugal&apos;s largest non-profit</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>xMoney</h4>
              <p className='text-sm'>Stablecoin payments on & off ramp</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Talent Protocol</h4>
              <p className='text-sm'>Decentralized Data Infrastructure</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Lime</h4>
              <p className='text-sm'>Mobility and transportation</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Coflyt</h4>
              <p className='text-sm'>Private Aviation</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Fisacar</h4>
              <p className='text-sm'>Automotive services</p>
            </div>
          </div>
        </section>

        {/* Work With Us */}
        <section>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Work With Us
          </h3>
          <p className='text-lg leading-relaxed'>
            Ready to build infrastructure that makes better living effortless?{' '}
            <a href='mailto:hey@notacompany.com' className='underline'>
              hey@notacompany.com
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
