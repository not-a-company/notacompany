import Link from 'next/link'

interface SiteHeaderProps {
  currentPage?: string
}

export default function SiteHeader({ currentPage = 'home' }: SiteHeaderProps) {
  return (
    <header>
      <h1>
        <Link href='/'>notacompany.com</Link>
      </h1>
      <hr />
      <nav>
        <Link
          href='/'
          style={{ fontWeight: currentPage === 'home' ? 'bold' : 'normal' }}
        >
          Home
        </Link>
        {' | '}
        <Link
          href='/portfolio'
          style={{
            fontWeight: currentPage === 'portfolio' ? 'bold' : 'normal',
          }}
        >
          Portfolio
        </Link>
      </nav>
      <hr />
    </header>
  )
}
