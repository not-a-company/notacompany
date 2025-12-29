import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

// Brand tag types
export type BrandTag =
  | 'creation'
  | 'investment'
  | 'advisory'
  | 'services'
  | 'exited'
  | 'deceased'

// Brand metadata interface
export interface BrandMeta {
  name: string
  website?: string // Optional because deceased brands may not have active websites
  tagline: string
  logo: string // Path to logo image
  year: number
  tags: BrandTag[]
  slug: string
}

// Complete brand interface (includes content)
export interface Brand extends BrandMeta {
  content: string // MDX content as string
}

// Utility function to generate slug from name
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Get the content directory path
export function getContentDir(): string {
  return join(process.cwd(), 'content', 'brands')
}

// Get all brand files
export function getBrandFiles(): string[] {
  try {
    const contentDir = getContentDir()
    return readdirSync(contentDir).filter(file => file.endsWith('.mdx'))
  } catch {
    return []
  }
}

// Parse a brand MDX file
export function parseBrandFile(filename: string): Brand {
  const contentDir = getContentDir()
  const fullPath = join(contentDir, filename)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const meta = data as BrandMeta

  return {
    ...meta,
    content,
  }
}

// Get all brands
export function getAllBrands(): Brand[] {
  const files = getBrandFiles()
  const brands = files
    .map(filename => parseBrandFile(filename))
    .sort((a, b) => b.year - a.year) // Sort by year descending (newest first)

  return brands
}

// Get a specific brand by slug
export function getBrandBySlug(slug: string): Brand | null {
  try {
    const filename = `${slug}.mdx`
    return parseBrandFile(filename)
  } catch {
    return null
  }
}

// Get brands by tag
export function getBrandsByTag(tag: BrandTag): Brand[] {
  const allBrands = getAllBrands()
  return allBrands.filter(brand => brand.tags.includes(tag))
}

// Get tag counts for explore section
export function getTagCounts(): Record<BrandTag, number> {
  const allBrands = getAllBrands()
  const counts: Record<BrandTag, number> = {
    creation: 0,
    investment: 0,
    advisory: 0,
    services: 0,
    exited: 0,
    deceased: 0,
  }

  allBrands.forEach(brand => {
    brand.tags.forEach(tag => {
      counts[tag]++
    })
  })

  return counts
}

// Get all unique tags with counts
export function getAllTags(): Array<{ tag: BrandTag; count: number }> {
  const counts = getTagCounts()
  return Object.entries(counts).map(([tag, count]) => ({
    tag: tag as BrandTag,
    count,
  }))
}

// Validate brand metadata
export function validateBrandMeta(meta: Partial<BrandMeta>): meta is BrandMeta {
  return !!(
    meta.name &&
    meta.tagline &&
    meta.logo &&
    meta.year &&
    meta.tags &&
    meta.slug &&
    Array.isArray(meta.tags) &&
    meta.tags.length > 0
  )
}
