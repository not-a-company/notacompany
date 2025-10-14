'use client'

import type { Brand, BrandTag } from '@/lib/brands'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

interface PortfolioClientProps {
  brands: Brand[]
  tags: Array<{ tag: BrandTag; count: number }>
}

const tagStyles: Record<BrandTag, string> = {
  creation: 'bg-black text-white font-bold',
  investment: 'bg-white text-black border-2 border-black font-semibold',
  advisory: 'bg-gray-200 text-black font-medium',
  exited: 'bg-gray-400 text-white font-medium',
  deceased: 'bg-gray-600 text-white line-through',
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  exited: 'Exited',
  deceased: 'Deceased',
}

export default function PortfolioClient({
  brands,
  tags,
}: PortfolioClientProps) {
  const searchParams = useSearchParams()
  const [selectedTag, setSelectedTag] = useState<BrandTag | 'all'>('all')

  // Set initial tag from URL params
  useEffect(() => {
    const tagParam = searchParams.get('tag') as BrandTag
    if (
      tagParam &&
      ['creation', 'investment', 'advisory', 'exited', 'deceased'].includes(
        tagParam
      )
    ) {
      setSelectedTag(tagParam)
    }
  }, [searchParams])

  const filteredBrands = useMemo(() => {
    if (selectedTag === 'all') return brands
    return brands.filter(brand => brand.tags.includes(selectedTag))
  }, [brands, selectedTag])

  return (
    <>
      {/* Tag Filters */}
      <section className='mb-8'>
        <div className='flex flex-wrap gap-2 sm:gap-3 mb-4'>
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-4 py-2.5 text-sm sm:text-base font-medium rounded touch-manipulation ${
              selectedTag === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
            }`}
          >
            All ({brands.length})
          </button>
          {tags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2.5 text-sm sm:text-base font-medium rounded touch-manipulation ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              {tagLabels[tag]} ({count})
            </button>
          ))}
        </div>
      </section>

      {/* Brand List */}
      <section className='mb-12'>
        <div className='space-y-4 sm:space-y-6'>
          {filteredBrands.map(brand => (
            <div
              key={brand.slug}
              className='border-2 border-black p-4 sm:p-6 hover:bg-gray-50 active:bg-gray-100 transition-colors'
            >
              {/* Mobile: Stack everything vertically */}
              <div className='flex flex-col gap-4'>
                {/* Header: Title and Year */}
                <div className='flex items-start justify-between gap-4'>
                  <h3 className='font-bold text-xl sm:text-2xl leading-tight'>
                    {brand.name}
                  </h3>
                  <span className='font-semibold text-gray-600 text-lg shrink-0'>
                    {brand.year}
                  </span>
                </div>

                {/* Tagline */}
                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                  {brand.tagline}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {brand.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 text-sm font-medium ${tagStyles[tag]}`}
                    >
                      {tagLabels[tag]}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Full width on mobile */}
                <Link
                  href={`/portfolio/${brand.slug}`}
                  className='inline-flex items-center justify-center px-6 py-3.5 bg-black text-white font-semibold hover:bg-gray-800 active:bg-gray-900 transition-colors rounded-sm text-base touch-manipulation w-full sm:w-auto'
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
