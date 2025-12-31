import BackButton from '@/components/back-button'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getBrandBySlug, type BrandTag } from '@/lib/brands'
import { siteConfig } from '@/lib/site-config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BrandPageProps {
  params: Promise<{
    slug: string
  }>
}

const tagLabels: Record<BrandTag, string> = {
  creation: 'Creation',
  investment: 'Investment',
  advisory: 'Advisory',
  exited: 'Exited',
  deceased: 'Deceased',
}

export async function generateStaticParams() {
  const brands = getAllBrands()
  return brands.map(brand => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: brand.name,
    description: siteConfig.strings.descriptions.brand(
      brand.name,
      brand.tagline
    ),
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) {
    notFound()
  }

  const isDeceased = brand.tags.includes('deceased')

  return (
    <>
      <SiteHeader currentPage='portfolio' />

      <main>
        <BackButton />

        <h2>{brand.name}</h2>
        <p>
          <em>{brand.tagline}</em>
        </p>

        <hr />

        <p>{brand.content}</p>

        <hr />

        <h3>Details</h3>
        <ul>
          <li>
            <strong>Year:</strong> {brand.year}
          </li>
          <li>
            <strong>Involvement:</strong>{' '}
            {brand.tags.map(tag => tagLabels[tag]).join(', ')}
          </li>
          {brand.website && !isDeceased && (
            <li>
              <strong>Website:</strong>{' '}
              <a href={brand.website} target='_blank' rel='noopener noreferrer'>
                {brand.website}
              </a>
            </li>
          )}
          {isDeceased && (
            <li>
              <strong>Status:</strong> No Longer Active
            </li>
          )}
        </ul>

        <hr />

        <h3>Contact:</h3>
        <p>
          <a href='mailto:hey@notacompany.com'>hey@notacompany.com</a>
        </p>
      </main>

      <SiteFooter />
    </>
  )
}
