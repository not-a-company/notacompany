import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://notacompany.com'),
  title: {
    default: 'notacompany.com',
    template: '%s | notacompany.com',
  },
  description: 'Founded by Tiago Martins. Still building stuff for Humans.',
  authors: [{ name: 'Tiago Martins' }],
  creator: 'Tiago Martins',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://notacompany.com',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicons/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicons/favicon.ico' />
        <script
          async
          src='https://cdn.seline.com/seline.js'
          data-token='f55cf5ff03d843f'
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
