'use client'

import type { Brand, BrandTag } from '@/lib/brands'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'

interface PortfolioClientProps {
  brands: Brand[]
  tags: Array<{ tag: BrandTag; count: number }>
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  services: 'Services',
  exited: 'Exited',
  deceased: 'Deceased',
}

export default function PortfolioClient({
  brands,
  tags,
}: PortfolioClientProps) {
  const searchParams = useSearchParams()
  
  // Initialize tag from URL params
  const initialTag = (() => {
    const tagParam = searchParams.get('tag') as BrandTag
    const validTags = ['creation', 'investment', 'advisory', 'services', 'exited', 'deceased']
    return tagParam && validTags.includes(tagParam) ? tagParam : 'all'
  })()
  
  const [selectedTag, setSelectedTag] = useState<BrandTag | 'all'>(initialTag)

  const filteredBrands = useMemo(() => {
    if (selectedTag === 'all') return brands
    return brands.filter(brand => brand.tags.includes(selectedTag))
  }, [brands, selectedTag])

  return (
    <>
      {/* Tag Filters */}
      <p>
        <strong>Filter by:</strong>{' '}
        <button
          onClick={() => setSelectedTag('all')}
          style={{ fontWeight: selectedTag === 'all' ? 'bold' : 'normal' }}
        >
          All ({brands.length})
        </button>
        {tags.map(({ tag, count }) => (
          <span key={tag}>
            {' | '}
            <button
              onClick={() => setSelectedTag(tag)}
              style={{ fontWeight: selectedTag === tag ? 'bold' : 'normal' }}
            >
              {tagLabels[tag]} ({count})
            </button>
          </span>
        ))}
      </p>

      <hr />

      {/* Brand List */}
      <ul>
        {filteredBrands.map(brand => (
          <li key={brand.slug}>
            <strong>
              <Link href={`/portfolio/${brand.slug}`}>{brand.name}</Link>
            </strong>{' '}
            ({brand.year}) — {brand.tagline}
            <br />
            <em>Tags: {brand.tags.map(tag => tagLabels[tag]).join(', ')}</em>
          </li>
        ))}
      </ul>
    </>
  )
}
