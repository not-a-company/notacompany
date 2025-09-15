import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creations - Our Products & Successful Exits',
  description:
    'Our active creation Steps.org for exercise accountability and past successful exits including Polkastarter (decentralized fundraising), Coinvision (blockchain due diligence), and Codeplace (Ruby education). We practice what we preach by building consumer products.',
  keywords: [
    'Steps.org exercise accountability',
    'Polkastarter acquisition',
    'Coinvision blockchain',
    'Codeplace Ruby education',
    'consumer product creation',
    'startup exits',
    'product development experience',
    'successful acquisitions',
    'technical product building',
    'consumer behavior understanding',
    'GAD mitigation',
    'exercise tracking',
  ],
  openGraph: {
    title: 'Creations - Our Products & Successful Exits',
    description:
      'We practice what we preach by building consumer products. Current: Steps.org for exercise accountability. Past exits: Polkastarter, Coinvision, Codeplace.',
    url: 'https://notacompany.com/creations',
    images: [
      {
        url: '/og-creations.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Creations - Our Products & Successful Exits',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com/creations',
  },
}

export default function CreationsPage() {
  return (
    <div className='min-h-screen bg-white text-black'>
      <SiteHeader currentPage='creations' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12'>
        {/* Page Title */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Creations</h2>
          <p className='text-lg leading-relaxed'>
            We have one concurrent active creation to stretch our muscles and
            practice what we preach.
          </p>
        </section>

        {/* Active Creations */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Active Creations (one active at a time):
          </h3>
          <div className='border-2 border-black p-6 bg-gray-50'>
            <div className='flex justify-between items-start mb-4'>
              <h4 className='font-bold text-2xl'>Steps.org</h4>
              <span className='bg-black text-white px-3 py-1 text-sm'>
                ACTIVE
              </span>
            </div>
            <p className='text-lg mb-4'>
              Exercise Accountability for GAD mitigation.
            </p>
            <div className='space-y-2'>
              <p>
                <strong>Contact:</strong>{' '}
                <a href='mailto:hey@steps.org' className='underline'>
                  hey@steps.org
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Past Creations */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Past Creations:
          </h3>
          <div className='space-y-6'>
            {/* Acquired Companies */}
            <div>
              <h4 className='font-bold text-xl mb-4'>Acquired:</h4>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='border border-black p-4'>
                  <h5 className='font-bold text-lg mb-2'>Polkastarter</h5>
                  <p className='text-sm mb-2'>
                    Decentralized fundraising platform
                  </p>
                  <span className='bg-green-100 text-green-800 px-2 py-1 text-xs'>
                    ACQUIRED
                  </span>
                </div>
                <div className='border border-black p-4'>
                  <h5 className='font-bold text-lg mb-2'>Coinvision</h5>
                  <p className='text-sm mb-2'>
                    Blockchain due-diligence publication
                  </p>
                  <span className='bg-green-100 text-green-800 px-2 py-1 text-xs'>
                    ACQUIRED
                  </span>
                </div>
                <div className='border border-black p-4'>
                  <h5 className='font-bold text-lg mb-2'>Codeplace</h5>
                  <p className='text-sm mb-2'>Ruby education ecosystem</p>
                  <span className='bg-green-100 text-green-800 px-2 py-1 text-xs'>
                    ACQUIRED
                  </span>
                </div>
              </div>
            </div>

            {/* Deceased Companies */}
            <div>
              <h4 className='font-bold text-xl mb-4'>Deceased:</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='border border-black p-4 bg-gray-100'>
                  <h5 className='font-bold text-lg mb-2'>Mahalo</h5>
                  <p className='text-sm mb-2'>
                    P2P Non-Profit Fundraising Infra
                  </p>
                  <span className='bg-gray-300 text-gray-700 px-2 py-1 text-xs'>
                    DECEASED
                  </span>
                </div>
                <div className='border border-black p-4 bg-gray-100'>
                  <h5 className='font-bold text-lg mb-2'>Songvice</h5>
                  <p className='text-sm mb-2'>Music Producer Advisory Market</p>
                  <span className='bg-gray-300 text-gray-700 px-2 py-1 text-xs'>
                    DECEASED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Our Approach
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              We maintain one active creation at a time to ensure focused
              execution and to continuously practice the consumer product
              development we advise our clients on.
            </p>
            <div>
              <h4 className='font-bold mb-2'>Why we create:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Stay current with consumer product development challenges
                </li>
                <li>
                  - Test new technologies and approaches in real-world scenarios
                </li>
                <li>
                  - Maintain our edge in understanding user behavior and market
                  dynamics
                </li>
                <li>- Practice what we preach to our advisory clients</li>
              </ul>
            </div>
            <p>
              Our track record includes both successful exits and valuable
              learning experiences from projects that didn&apos;t make it. Each
              creation informs our advisory work and keeps us grounded in the
              realities of building consumer products.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Interested in Our Creations?
          </h3>
          <p className='text-lg leading-relaxed'>
            Questions about our current or past creations?{' '}
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
