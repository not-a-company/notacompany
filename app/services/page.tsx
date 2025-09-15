import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Product Team Optimization & Technical Talent Acquisition',
  description:
    'Expert services: Product Team & Infrastructure Optimization Advisory and Interim Technical Talent Acquisition. We optimize technical teams for maximum efficiency and place senior technical talent for 3-12 month engagements.',
  keywords: [
    'product team optimization',
    'infrastructure optimization advisory',
    'technical team structure optimization',
    'development process improvements',
    'interim technical talent acquisition',
    'interim CTO placement',
    'VP Engineering services',
    'senior engineer placement',
    'technical advisory services',
    'consumer product technical consulting',
  ],
  openGraph: {
    title:
      'Services - Product Team Optimization & Technical Talent Acquisition',
    description:
      'Expert advisory services for optimizing technical teams and infrastructure, plus interim technical talent acquisition for consumer product companies.',
    url: 'https://notacompany.com/services',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com Services - Technical Advisory & Talent Acquisition',
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
            Consumer Experience Focused Services for ambitious product
            companies.
          </p>
        </section>

        {/* Service 1: Product Team & Infra Optimisation Advisory */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Product Team & Infra Optimisation Advisory
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              We help consumer product companies optimize their technical teams
              and infrastructure for maximum efficiency and scalability. Our
              advisory focuses on practical improvements that directly impact
              product velocity and user experience.
            </p>
            <div>
              <h4 className='font-bold mb-2'>What we do:</h4>
              <ul className='space-y-1 ml-4'>
                <li>- Technical team structure and workflow optimization</li>
                <li>
                  - Infrastructure architecture review and recommendations
                </li>
                <li>- Development process improvements and automation</li>
                <li>- Technology stack evaluation and modernization</li>
                <li>- Performance optimization and scalability planning</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-2'>Key outcomes:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Reduced deployment times and increased release frequency
                </li>
                <li>- Lower infrastructure costs through optimization</li>
                <li>- Improved team productivity and developer experience</li>
                <li>- Enhanced system reliability and performance</li>
                <li>
                  - Better alignment between technical and business objectives
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service 2: Interim Technical Talent Acquisition */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Interim Technical Talent Acquisition
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              We source and place exceptional technical talent for consumer
              product companies on an interim basis. Our focus is on finding
              professionals who understand consumer behavior and can build
              products that users actually want to use.
            </p>
            <div>
              <h4 className='font-bold mb-2'>What we do:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Source senior technical talent for 3-12 month engagements
                </li>
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
                <li>- Interim CTOs and VP Engineering</li>
                <li>- Senior Full-Stack Engineers</li>
                <li>- AI Engineers</li>
                <li>- Product Engineers with consumer focus</li>
                <li>- DevOps and Infrastructure Engineers</li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-2'>Key problems we solve:</h4>
              <ul className='space-y-1 ml-4'>
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
