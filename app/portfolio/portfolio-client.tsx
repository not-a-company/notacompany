'use client'

import type { Brand, BrandTag } from '@/lib/brands'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

interface PortfolioClientProps {
  brands: Brand[]
  tags: Array<{ tag: BrandTag; count: number }>
}

const tagColors: Record<BrandTag, string> = {
  creation: 'bg-blue-100 text-blue-800',
  investment: 'bg-green-100 text-green-800',
  advisory: 'bg-purple-100 text-purple-800',
  exited: 'bg-gray-100 text-gray-800',
  deceased: 'bg-red-100 text-red-800',
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  exited: 'Exited',
  deceased: 'Deceased',
}

export default function PortfolioClient({ brands, tags }: PortfolioClientProps) {
  const searchParams = useSearchParams()
  const [selectedTag, setSelectedTag] = useState<BrandTag | 'all'>('all')
  
  // Set initial tag from URL params
  useEffect(() => {
    const tagParam = searchParams.get('tag') as BrandTag
    if (tagParam && ['creation', 'investment', 'advisory', 'exited', 'deceased'].includes(tagParam)) {
      setSelectedTag(tagParam)
    }
  }, [searchParams])
  
  const filteredBrands = useMemo(() => {
    if (selectedTag === 'all') return brands
    return brands.filter((brand) => brand.tags.includes(selectedTag))
  }, [brands, selectedTag])

  return (
    <>
      {/* Tag Filters */}
      <section className='mb-8'>
        <div className='flex flex-wrap gap-2 mb-4'>
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-3 py-1 text-sm rounded ${
              selectedTag === 'all'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({brands.length})
          </button>
          {tags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm rounded ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tagLabels[tag]} ({count})
            </button>
          ))}
        </div>
      </section>

      {/* Brand List */}
      <section className='mb-12'>
        <div className='space-y-6'>
          {filteredBrands.map((brand) => (
            <div
              key={brand.slug}
              className='border border-black p-6 hover:bg-gray-50 transition-colors'
            >
              <div className='flex justify-between items-start gap-6'>
                <div className='flex-1'>
                  <div className='flex items-start justify-between mb-2'>
                    <h3 className='font-bold text-xl'>{brand.name}</h3>
                    <span className='font-medium text-gray-600'>{brand.year}</span>
                  </div>
                  <p className='text-gray-600 mb-4 text-lg'>{brand.tagline}</p>
                  <div className='flex flex-wrap gap-2'>
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded ${tagColors[tag]}`}
                      >
                        {tagLabels[tag]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex-shrink-0'>
                  <Link
                    href={`/portfolio/${brand.slug}`}
                    className='inline-flex items-center px-4 py-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-sm text-sm'
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
