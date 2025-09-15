import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients - Trusted by Leading Consumer Product Companies',
  description:
    "Past service clients who have trusted us with their consumer product challenges. We've worked with Acreditar, xMoney, Talent Protocol, Bet Protocol, Lime, Parfois, Coflyt, and Fisacar. By engineers, for engineers.",
  keywords: [
    'client testimonials',
    'consumer product companies',
    'past service clients',
    'consumer economic research clients',
    'behavioral economics clients',
    'by engineers for engineers',
    '100% engineers team',
    'Acreditar',
    'xMoney',
    'Talent Protocol',
    'Bet Protocol',
    'Lime mobility',
    'Parfois fashion',
    'Coflyt aviation',
    'Fisacar automotive',
    'successful client engagements',
    'consumer research applications',
  ],
  openGraph: {
    title: 'Clients - Trusted by Leading Consumer Product Companies',
    description:
      'Past service clients who have trusted us with their consumer product challenges including Acreditar, xMoney, Talent Protocol, and more. By engineers, for engineers.',
    url: 'https://notacompany.com/clients',
    images: [
      {
        url: '/og-clients.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Clients - Trusted by Leading Companies',
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
          <h2 className='text-3xl font-bold mb-4'>Clients</h2>
          <p className='text-lg leading-relaxed'>
            Past service clients who have trusted us with their consumer product
            challenges.
          </p>
        </section>

        {/* Past Service Clients */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Past Service Clients:
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Acreditar</h4>
              <p className='text-sm'>Portugal&apos;s largest non-profit</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>xMoney</h4>
              <p className='text-sm'>Digital payment on & off ramp</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Talent Protocol</h4>
              <p className='text-sm'>Decentralized Data Infrastructure</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Bet Protocol</h4>
              <p className='text-sm'>Decentralized betting ecosystem</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Lime</h4>
              <p className='text-sm'>Mobility and transportation</p>
            </div>
            <div className='border border-black p-4'>
              <h4 className='font-bold text-lg mb-2'>Parfois</h4>
              <p className='text-sm'>Fashion and retail</p>
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
            Ready to join our client roster?{' '}
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
