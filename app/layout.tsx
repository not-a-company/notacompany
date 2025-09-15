import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://notacompany.com'),
  title: {
    default:
      'notacompany.com - Technical Advisory & Interim Talent Acquisition',
    template: '%s | notacompany.com',
  },
  description:
    'Technical advisory and interim talent acquisition for ambitious consumer product companies. Expert optimization of technical teams, infrastructure, and talent placement for 3-12 month engagements.',
  keywords: [
    'technical advisory',
    'interim talent acquisition',
    'consumer product companies',
    'technical team optimization',
    'infrastructure optimization',
    'CTO interim',
    'VP Engineering',
    'technical talent placement',
    'product team advisory',
    'startup technical leadership',
  ],
  authors: [{ name: 'notacompany.com' }],
  creator: 'notacompany.com',
  publisher: 'notacompany.com',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notacompany.com',
    siteName: 'notacompany.com',
    title:
      'Technical Advisory & Interim Talent Acquisition for Consumer Product Companies',
    description:
      'Expert technical advisory and interim talent acquisition services. We optimize technical teams and infrastructure for ambitious consumer product companies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com - Technical Advisory & Interim Talent Acquisition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Advisory & Interim Talent Acquisition',
    description:
      'Expert technical advisory and interim talent acquisition for consumer product companies.',
    images: ['/og-image.png'],
    creator: '@notacompany',
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://notacompany.com',
  },
  category: 'Business Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://vercel.live' />
        <link rel='dns-prefetch' href='https://vercel.live' />
        <link rel='prefetch' href='/services' />
        <link rel='prefetch' href='/clients' />
        <link rel='prefetch' href='/creations' />

        {/* Structured Data for Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'notacompany.com',
              url: 'https://notacompany.com',
              logo: 'https://notacompany.com/logo.png',
              description:
                'Technical advisory and interim talent acquisition for ambitious consumer product companies. Expert optimization of technical teams, infrastructure, and talent placement.',
              serviceType: [
                'Technical Advisory',
                'Interim Talent Acquisition',
                'Technical Consulting',
              ],
              areaServed: 'Worldwide',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hey@notacompany.com',
                contactType: 'Business Inquiries',
              },
              sameAs: ['https://notacompany.com'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technical Advisory Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Product Team & Infrastructure Optimization Advisory',
                      description:
                        'Optimize technical teams and infrastructure for maximum efficiency and scalability',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Interim Technical Talent Acquisition',
                      description:
                        'Place exceptional technical talent for 3-12 month engagements',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className='font-mono antialiased'>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
