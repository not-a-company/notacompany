import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Fractional & Interim Technical Talent Acquisition',
  description:
    'Expert fractional and interim technical talent acquisition for consumer product companies. We focus exclusively on the top 0.01% of global engineering talent for flexible engagements from 3-12 months, including fractional CTOs, VPs Engineering, senior engineers, product designers, and payment rails engineers.',
  keywords: [
    'fractional technical talent acquisition',
    'interim technical talent acquisition',
    'fractional CTO placement',
    'interim CTO placement',
    'VP Engineering services',
    'senior engineer placement',
    'product designer placement',
    'payment rails engineer placement',
    'technical talent placement',
    'consumer product technical talent',
    'startup technical hiring',
    'fractional technical leadership',
  ],
  openGraph: {
    title:
      'Services - Fractional & Interim Technical Talent Acquisition',
    description:
      'Expert fractional and interim technical talent acquisition for consumer product companies. We focus exclusively on the top 0.01% of global engineering talent for flexible 3-12 month engagements.',
    url: 'https://notacompany.com/services',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Services - Fractional & Interim Talent Acquisition',
      },
    ],
  },
  alternates: {
    canonical: 'https://notacompany.com/services',
  },
}

export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-white text-black'>
      <SiteHeader currentPage='services' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12'>
        {/* Page Title */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Services</h2>
          <p className='text-lg leading-relaxed'>
            Fractional & Interim Technical Talent Acquisition for ambitious consumer product companies.
          </p>
          <p className='text-base text-gray-700 leading-relaxed mt-2'>
            We focus exclusively on the top 0.01% of global engineering talent.
          </p>
        </section>

        {/* Main Service: Fractional & Interim Technical Talent Acquisition */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Fractional & Interim Technical Talent Acquisition
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              We source and place exceptional technical talent for consumer
              product companies on both fractional and interim bases. We focus exclusively on the top 0.01% of global engineering talent - professionals who understand consumer behavior and can build
              products that users actually want to use.
            </p>
            <div>
              <h4 className='font-bold mb-2'>What we do:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Source senior technical talent for flexible engagements (3-12 months)
                </li>
                <li>- Fractional leadership roles (20-40 hours per week)</li>
                <li>- Full-time interim positions for critical projects</li>
                <li>- Focus on consumer-facing product experience</li>
                <li>
                  - Rapid deployment (typically 2-4 weeks from brief to start)
                </li>
                <li>- Ongoing performance management and support</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-2'>Typical roles:</h4>
              <ul className='space-y-1 ml-4'>
                <li>- Fractional CTOs and VP Engineering</li>
                <li>- Interim CTOs and VP Engineering</li>
                <li>- Senior Full-Stack Engineers</li>
                <li>- AI Engineers</li>
                <li>- Product Engineers with consumer focus</li>
                <li>- Product Designers</li>
                <li>- Payment Rails Engineers</li>
                <li>- DevOps and Infrastructure Engineers</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-2'>Key problems we solve:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Leadership gaps: Fractional or interim technical leadership during transitions
                </li>
                <li>
                  - Efficiency optimization: Streamline development processes
                  and eliminate bottlenecks
                </li>
                <li>
                  - Resource optimization: Maximize team productivity and
                  technology investments
                </li>
                <li>
                  - Hit by bus problems: Reduce key person dependencies and
                  knowledge silos
                </li>
                <li>
                  - Security vulnerabilities: Identify and remediate technical
                  and operational risks
                </li>
                <li>
                  - Culture shifts: Navigate technical team transitions and
                  scaling challenges
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Why Choose Notacompany
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              We practice what we preach. Our team has built, scaled, and exited
              consumer product companies. We understand the unique challenges of
              building products that millions of people use every day.
            </p>
            <ul className='space-y-2 ml-4'>
              <li>
                - Deep consumer product experience across multiple verticals
              </li>
              <li>
                - Proven track record with successful exits and acquisitions
              </li>
              <li>- Network of exceptional technical talent</li>
              <li>- Focus on practical, actionable advice</li>
              <li>- No fluff, just results</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Get Started
          </h3>
          <p className='text-lg leading-relaxed'>
            Ready to discuss your project?{' '}
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
