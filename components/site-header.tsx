'use client'

import Link from 'next/link'
import { useCallback, useMemo, useState } from 'react'

interface SiteHeaderProps {
  currentPage?: string
}

const navigationLinks = [
  { href: '/', label: 'Home', page: 'home' },
  { href: '/portfolio', label: 'Portfolio', page: 'portfolio' },
] as const

export default function SiteHeader({ currentPage = 'home' }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  const isActive = useMemo(
    () => (page: string) => currentPage === page,
    [currentPage]
  )

  return (
    <header className='border-b-2 border-black bg-white sticky top-0 z-50'>
      <div className='max-w-4xl mx-auto px-4 md:px-6'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo */}
          <Link
            href='/'
            className='text-lg sm:text-xl font-bold hover:underline'
          >
            notacompany.com
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-6 text-sm sm:text-base'>
            {navigationLinks.map(({ href, label, page }) => (
              <Link
                key={href}
                href={href}
                className={`hover:underline transition-all ${
                  isActive(page) ? 'font-bold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden flex flex-col gap-1 p-2'
            aria-label='Toggle navigation menu'
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <nav className='flex flex-col gap-4 pt-4 border-t border-black'>
            {navigationLinks.map(({ href, label, page }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`hover:underline transition-all py-2 text-base ${
                  isActive(page) ? 'font-bold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
