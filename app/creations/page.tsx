import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Co-Creations - Our Products & Successful Exits',
  description:
    'Our team is made up of 100% engineers who actively build consumer products alongside talent acquisition. Current co-creation: Steps.org for exercise accountability. Past successful exits: Polkastarter, Coinvision, Codeplace. We practice what we preach.',
  keywords: [
    'Steps.org exercise accountability',
    'Polkastarter acquisition',
    'Coinvision blockchain',
    'Codeplace Ruby education',
    'consumer product co-creation',
    '100% engineers team',
    'engineering-led talent acquisition',
    'startup exits',
    'product development experience',
    'successful acquisitions',
    'technical product building',
    'consumer behavior understanding',
    'GAD mitigation',
    'exercise tracking',
  ],
  openGraph: {
    title: 'Co-Creations - Our Products & Successful Exits',
    description:
      'Our team is made up of 100% engineers who actively build consumer products alongside talent acquisition. Current: Steps.org for exercise accountability. Past exits: Polkastarter, Coinvision, Codeplace.',
    url: 'https://notacompany.com/creations',
    images: [
      {
        url: '/og-creations.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Co-Creations - Our Products & Successful Exits',
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
          <h2 className='text-3xl font-bold mb-4'>Co-Creations</h2>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              <strong>What are co-creations?</strong> Our team is made up of 100% engineers who actively build and ship consumer products alongside our talent acquisition work. We maintain one concurrent active co-creation to stretch our muscles and practice what we preach.
            </p>
            <p>
              This hands-on approach ensures we stay current with the latest technologies, development challenges, and market dynamics that our placed talent will face.
            </p>
          </div>
        </section>

        {/* Active Co-Creations */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Active Co-Creations (one active at a time):
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

        {/* Past Co-Creations */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-6 border-b border-black pb-2'>
            Past Co-Creations:
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
              As a team of 100% engineers, we maintain one active co-creation at a time to ensure focused
              execution and to continuously practice the consumer product
              development challenges our placed talent will face.
            </p>
            <div>
              <h4 className='font-bold mb-2'>Why we co-create:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Stay current with the latest technologies and development challenges
                </li>
                <li>
                  - Test new approaches and tools in real-world consumer product scenarios
                </li>
                <li>
                  - Maintain our edge in understanding user behavior and market
                  dynamics
                </li>
                <li>- Deeply understand the challenges our placed talent will encounter</li>
                <li>- Practice what we preach when sourcing and placing top 0.01% talent</li>
              </ul>
            </div>
            <p>
              Our track record includes both successful exits and valuable
              learning experiences from projects that didn&apos;t make it. Each
              co-creation directly informs our talent acquisition expertise and keeps us grounded in the
              realities of building consumer products at scale.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Interested in Our Co-Creations?
          </h3>
          <p className='text-lg leading-relaxed'>
            Questions about our current or past co-creations?{' '}
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
