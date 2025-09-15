import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://notacompany.com'),
  title: {
    default:
      'notacompany.com - Fractional & Interim Technical Talent Acquisition',
    template: '%s | notacompany.com',
  },
  description:
    'Fractional and interim technical talent acquisition for ambitious consumer product companies. By engineers, for engineers. We focus exclusively on the top 0.01% of global engineering talent for 3-12 month engagements.',
  keywords: [
    'fractional technical talent acquisition',
    'interim technical talent acquisition',
    'consumer product companies',
    'by engineers for engineers',
    '100% engineers team',
    'engineering-led talent acquisition',
    'fractional CTO placement',
    'interim CTO placement',
    'VP Engineering placement',
    'technical talent placement',
    'product designer placement',
    'payment rails engineer placement',
    'startup technical talent',
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
      'Fractional & Interim Technical Talent Acquisition for Consumer Product Companies',
    description:
      'Expert fractional and interim technical talent acquisition services. By engineers, for engineers. We focus exclusively on the top 0.01% of global engineering talent.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com - Fractional & Interim Technical Talent Acquisition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional & Interim Technical Talent Acquisition',
    description:
      'Expert fractional and interim technical talent acquisition for consumer product companies. By engineers, for engineers.',
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
                'Fractional and interim technical talent acquisition for ambitious consumer product companies. By engineers, for engineers. We focus exclusively on the top 0.01% of global engineering talent.',
              serviceType: [
                'Fractional Technical Talent Acquisition',
                'Interim Technical Talent Acquisition',
                'Technical Talent Placement',
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
                name: 'Technical Talent Acquisition Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fractional & Interim Technical Talent Acquisition',
                      description:
                        'We source and place the top 0.01% of global engineering talent for flexible 3-12 month engagements, including fractional CTOs, VPs Engineering, senior engineers, product designers, and payment rails engineers.',
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
