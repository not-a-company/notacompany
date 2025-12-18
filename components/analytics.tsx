import Script from 'next/script'

export function Analytics() {
  return (
    <>
      {/* Seline Analytics */}
      <Script
        src='https://cdn.seline.com/seline.js'
        data-token='f55cf5ff03d843f'
        strategy='afterInteractive'
      />
      {/* Ahrefs Analytics */}
      <Script
        src='https://analytics.ahrefs.com/analytics.js'
        data-key='uj4QY9KA3EFs2/ZvSNbc9w'
        strategy='afterInteractive'
      />
    </>
  )
}
