import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: siteConfig.strings.descriptions.services,
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader currentPage='services' />

      <main>
        <h2>Services</h2>

        <h3>How AI decides who to recommend.</h3>

        <p>
          When someone asks ChatGPT &quot;best Italian restaurant downtown&quot;
          or tells Perplexity &quot;I need a reliable mechanic near me,&quot;
          the AI doesn&apos;t guess. It synthesizes signals from across the
          web—and reputation data is the strongest signal of all.
        </p>

        <p>
          AI systems treat reviews as truth. A 4.6 rating across 500 Google
          reviews isn&apos;t just social proof to these models—it&apos;s
          evidence. Review volume, recency, sentiment, and consistency across
          platforms (Trustpilot, Google, Facebook, industry directories) all
          feed into whether an AI will cite your business or your
          competitor&apos;s.
        </p>

        <p>
          This is fundamentally different from how Google Search worked. Search
          ranked pages. AI systems rank trust. And trust, to an AI, looks like:
        </p>

        <ul>
          <li>Consistent NAP (name, address, phone) data across the web</li>
          <li>High review velocity with recent, positive sentiment</li>
          <li>Structured data that machines can parse without ambiguity</li>
          <li>Authoritative mentions and citations from trusted sources</li>
          <li>
            Entity recognition—the AI knowing your business <em>is</em> a
            business
          </li>
        </ul>

        <p>
          The businesses showing up in AI answers aren&apos;t necessarily the
          ones with the best SEO. They&apos;re the ones with the cleanest, most
          trustworthy data footprint.
        </p>

        <p>
          This matters now because behavior is shifting fast. AI search usage
          grew over 500% in early 2025. Perplexity processes 780 million queries
          monthly. Google&apos;s AI Overviews now appear above traditional
          results. Your customers are asking AI where to go—and if your
          reputation infrastructure isn&apos;t built for this, you&apos;re not
          in the conversation.
        </p>

        <hr />

        <h3>What I do</h3>

        <p>
          <strong>Generative Engine Optimization for consumer brands.</strong>
        </p>

        <p>
          I help multi-location retail businesses become the answer when
          customers ask AI for recommendations. This means building the complete
          infrastructure that makes your brand citable: reputation systems that
          generate reviews at scale, local search presence across Google
          Business, Apple Maps, and the directories that feed AI knowledge
          graphs, and structured data that machines can parse and trust.
        </p>

        <p>Traditional SEO got you ranked. GEO gets you recommended.</p>

        <hr />

        <h3>Who this is for</h3>

        <p>
          Retail businesses with more than one physical location. Franchises.
          Multi-shop family businesses. Regional chains. Companies where foot
          traffic matters and local reputation compounds.
        </p>

        <p>
          If you have 2 shops or 200, the infrastructure is similar. The scale
          is different.
        </p>

        <hr />

        <h3>Track record</h3>

        <p>
          I&apos;ve helped consumer retail companies build their digital
          presence and reputation systems:
        </p>

        <p>
          <strong>
            <Link href='/portfolio/parfois'>Parfois</Link>
          </strong>{' '}
          — Fashion accessories. 1,100+ stores across 70 countries. 1.4M monthly
          organic visitors. 2M Instagram followers.
        </p>

        <p>
          <strong>
            <Link href='/portfolio/feira-dos-tecidos'>Feira dos Tecidos</Link>
          </strong>{' '}
          — Textile retail. 18 stores. 4.4/5 Trustpilot. 40-year legacy brand.
        </p>

        <p>
          <strong>
            <Link href='/portfolio/fisacar'>Fisacar</Link>
          </strong>{' '}
          — Automotive dealer. 4 locations. 4.6/5 review rating. 10,000+
          customers served.
        </p>

        <p>
          <strong>
            <Link href='/portfolio/epic-travel'>epic.travel</Link>
          </strong>{' '}
          — Boutique luxury travel. 4.8/5 Trustpilot. BBC documentary partner.
          20 years in operation.
        </p>

        <hr />

        <h3>Why me</h3>

        <p>
          I&apos;ve spent 10+ years creating, growing, and advising consumer
          infrastructure companies. Not as an agency. As a founder and operator
          who understands that digital presence is just one piece of building
          something that lasts.
        </p>

        <p>
          This isn&apos;t about gaming algorithms. It&apos;s about building the
          kind of reputation infrastructure that makes your business
          discoverable—today by search engines, tomorrow by whatever replaces
          them.
        </p>

        <hr />

        <h3>Get in touch</h3>

        <p>
          If you run a multi-location retail business and want to understand how
          AI is changing customer discovery, let&apos;s talk. No pitch decks, no
          sales calls—just a conversation about where your business stands and
          what it would take to get ahead.
        </p>

        <p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </main>

      <SiteFooter />
    </>
  )
}
