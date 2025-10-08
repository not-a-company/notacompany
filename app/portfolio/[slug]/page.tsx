import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getBrandBySlug, type BrandTag } from '@/lib/brands'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BrandPageProps {
  params: Promise<{
    slug: string
  }>
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

export async function generateStaticParams() {
  const brands = getAllBrands()
  return brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  
  if (!brand) {
    return {
      title: 'Brand Not Found',
    }
  }

  return {
    title: `${brand.name} - ${brand.tagline}`,
    description: `Learn about ${brand.name}: ${brand.tagline}. Part of our consumer infrastructure portfolio focused on building brands that make better living effortless.`,
    keywords: [
      brand.name,
      'consumer infrastructure',
      'brand portfolio',
      ...brand.tags.map(tag => `infrastructure ${tag}`),
      brand.tagline,
    ],
    openGraph: {
      title: `${brand.name} - ${brand.tagline}`,
      description: `Learn about ${brand.name}: ${brand.tagline}. Part of our consumer infrastructure portfolio.`,
      url: `https://notacompany.com/portfolio/${brand.slug}`,
      images: [
        {
          url: `/og-${brand.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${brand.name} - Consumer Infrastructure Brand`,
        },
      ],
    },
    alternates: {
      canonical: `https://notacompany.com/portfolio/${brand.slug}`,
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
    <div className='min-h-screen bg-white text-black'>
      <SiteHeader currentPage='portfolio' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12'>
        {/* Back Link */}
        <section className='mb-6'>
          <Link href='/portfolio' className='text-blue-600 hover:text-blue-800'>
            ← Back to Portfolio
          </Link>
        </section>

        {/* Brand Header */}
        <section className='mb-12'>
          <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6'>
            <div>
              <h1 className='text-4xl font-bold mb-4'>{brand.name}</h1>
              <p className='text-xl text-gray-600 mb-4'>{brand.tagline}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
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
            
            <div className='text-right'>
              <div className='mb-4'>
                <span className='text-sm text-gray-500'>Year of Involvement</span>
                <p className='text-2xl font-bold'>{brand.year}</p>
              </div>
              {brand.website && !isDeceased && (
                <a
                  href={brand.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-sm'
                >
                  Visit Website →
                </a>
              )}
              {isDeceased && (
                <div className='px-6 py-3 bg-gray-100 text-gray-600 font-medium rounded-sm'>
                  No Longer Active
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Brand Content */}
        <section className='mb-12'>
          <div className='prose prose-lg max-w-none'>
            <div className='whitespace-pre-line text-lg leading-relaxed'>
              {brand.content}
            </div>
          </div>
        </section>

        {/* Additional Brand Info */}
        <section className='mb-12'>
          <div className='border-t border-gray-200 pt-8'>
            <h3 className='text-xl font-bold mb-4'>Brand Details</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold mb-2'>Our Involvement</h4>
                <div className='flex flex-wrap gap-2'>
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-sm rounded ${tagColors[tag]}`}
                    >
                      {tagLabels[tag]}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Year of Involvement</h4>
                <p className='text-gray-700'>{brand.year}</p>
              </div>
              {brand.website && !isDeceased && (
                <div>
                  <h4 className='font-semibold mb-2'>Website</h4>
                  <a
                    href={brand.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:text-blue-800'
                  >
                    {brand.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className='text-2xl font-bold mb-4 border-b border-black pb-2'>
            Questions About This Brand?
          </h3>
          <p className='text-lg leading-relaxed'>
            Want to learn more about our work with {brand.name}?{' '}
            <a href='mailto:hey@notacompany.com' className='underline'>
              hey@notacompany.com
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
