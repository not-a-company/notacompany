import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://notacompany.com'),
  title: {
    default: 'notacompany.com - Consumer Infrastructure Development',
    template: '%s | notacompany.com',
  },
  description:
    'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
  keywords: [
    'consumer infrastructure',
    'health infrastructure',
    'payment infrastructure',
    'financial infrastructure',
    'work infrastructure',
    'lifestyle infrastructure',
    'consumer product development',
    'infrastructure development',
    'engineering team',
    '100% engineers',
    'consumer empathy',
    'infrastructure thinking',
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
    title: 'Consumer Infrastructure Development - notacompany.com',
    description:
      'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'notacompany.com - Consumer Infrastructure Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Infrastructure Development',
    description:
      'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
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
  category: 'Technology',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Favicon and Icons */}
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#000000' />

        <script
          async
          src='https://cdn.seline.com/seline.js'
          data-token='f55cf5ff03d843f'
        />

        <link rel='prefetch' href='/portfolio' />

        {/* Structured Data for Technology Organization */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'notacompany.com',
              url: 'https://notacompany.com',
              logo: 'https://notacompany.com/android-chrome-512x512.png',
              description:
                'Built by 100% engineers, we create the foundational infrastructure that powers your daily life—from health and finance to mobility and work.',
              foundingDate: '2020',
              industry: 'Consumer Infrastructure',
              keywords:
                'consumer infrastructure, health infrastructure, payment infrastructure, financial infrastructure, work infrastructure, lifestyle infrastructure',
              areaServed: 'Worldwide',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hey@notacompany.com',
                contactType: 'Business Inquiries',
              },
              sameAs: ['https://notacompany.com'],
              makesOffer: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Consumer Infrastructure Development',
                  description:
                    'We design, build, and launch infrastructure across multiple consumer verticals including health, payments, investing, work, and lifestyle. Our engineering-first approach with deep consumer empathy creates infrastructure-level solutions for scalable, lasting consumer experiences.',
                },
              },
            }),
          }}
        />
      </head>
      <body className='font-mono antialiased'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
