import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients - Trusted by Leading Consumer Product Companies',
  description:
    "Past service clients who have trusted us with their consumer product challenges. We've provided fractional and interim technical talent acquisition services to Acreditar, xMoney, Talent Protocol, Bet Protocol, Lime, Parfois, Coflyt, and Fisacar. By engineers, for engineers.",
  keywords: [
    'client testimonials',
    'consumer product companies',
    'fractional talent acquisition clients',
    'interim talent acquisition clients',
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
    'technical talent placement case studies',
  ],
  openGraph: {
    title: 'Clients - Trusted by Leading Consumer Product Companies',
    description:
      "We've provided expert fractional and interim technical talent acquisition services to leading consumer product companies including Acreditar, xMoney, Talent Protocol, and more. By engineers, for engineers.",
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

        {/* What We Delivered */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            What We Delivered
          </h3>
          <div className='space-y-4 text-lg leading-relaxed'>
            <p>
              Across these engagements, we have provided fractional and interim
              technical talent placement to help these companies scale their consumer products.
            </p>
            <div>
              <h4 className='font-bold mb-2'>Common placements:</h4>
              <ul className='space-y-1 ml-4'>
                <li>
                  - Fractional technical leadership (CTO, VP Engineering roles)
                </li>
                <li>- Interim technical leadership (CTO, VP Engineering roles)</li>
                <li>- Senior Full-Stack Engineers</li>
                <li>- AI Engineers</li>
                <li>- Product Engineers with consumer focus</li>
                <li>- Product Designers</li>
                <li>- Payment Rails Engineers</li>
                <li>- DevOps and Infrastructure Engineers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Client Feedback
          </h3>
          <div className='space-y-6'>
            <blockquote className='border-l-4 border-black pl-4 italic text-lg'>
              &quot;Tiago has a no nonsense and no bullshit attitude. Tiago gets
              stuff done and he is a very strong executer. Tiago also has the
              ability to think in network and he has shown that he can attract
              some of the best people work with him.&quot; Rune Theill
            </blockquote>
            <blockquote className='border-l-4 border-black pl-4 italic text-lg'>
              &quot;Their understanding of consumer products and technical
              execution is unmatched.&quot; Felipe Avila da Costa
            </blockquote>
            <blockquote className='border-l-4 border-black pl-4 italic text-lg'>
              &quot;Tiago and his teams have the rare ability to execute their
              visions fast, and the even more rare capacity to listen and adapt
              based on market feedback.&quot; Roel Bergsma
            </blockquote>
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
