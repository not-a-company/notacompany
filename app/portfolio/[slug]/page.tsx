import BackButton from '@/components/back-button'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { getAllBrands, getBrandBySlug, type BrandTag } from '@/lib/brands'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BrandPageProps {
  params: Promise<{
    slug: string
  }>
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
    <div className='min-h-screen bg-white text-black flex flex-col'>
      <SiteHeader currentPage='portfolio' />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12 flex-1'>
        {/* Back Button */}
        <BackButton />

        {/* Brand Header */}
        <section className='mb-8 sm:mb-12'>
          <div className='flex flex-col gap-6 mb-6'>
            {/* Title and Tagline */}
            <div>
              <h1 className='text-3xl sm:text-4xl font-bold mb-3 sm:mb-4'>
                {brand.name}
              </h1>
              <p className='text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed'>
                {brand.tagline}
              </p>
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
            </div>

            {/* Year and CTA - Stack on mobile, side-by-side on larger screens */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2'>
              <div>
                <span className='text-sm text-gray-600 font-medium'>
                  Year of Involvement
                </span>
                <p className='text-2xl font-bold'>{brand.year}</p>
              </div>
              {brand.website && !isDeceased && (
                <a
                  href={brand.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center px-6 py-3.5 bg-black text-white font-semibold hover:bg-gray-800 active:bg-gray-900 transition-colors rounded-sm touch-manipulation w-full sm:w-auto'
                >
                  Visit Website
                </a>
              )}
              {isDeceased && (
                <div className='px-6 py-3 bg-gray-100 text-gray-600 font-medium rounded-sm text-center'>
                  No Longer Active
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Brand Content */}
        <section className='mb-8 sm:mb-12'>
          <div className='prose prose-lg max-w-none'>
            <div className='whitespace-pre-line text-base sm:text-lg leading-relaxed text-gray-800'>
              {brand.content}
            </div>
          </div>
        </section>

        {/* Additional Brand Info */}
        <section className='mb-8 sm:mb-12'>
          <div className='border-t-2 border-gray-200 pt-6 sm:pt-8'>
            <h3 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>
              Brand Details
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold mb-2 text-base'>
                  Our Involvement
                </h4>
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
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-base'>
                  Year of Involvement
                </h4>
                <p className='text-gray-700 text-lg'>{brand.year}</p>
              </div>
              {brand.website && !isDeceased && (
                <div>
                  <h4 className='font-semibold mb-2 text-base'>Website</h4>
                  <a
                    href={brand.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:no-underline break-all text-base'
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
          <h3 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-black pb-2'>
            Questions About This Brand?
          </h3>
          <p className='text-base sm:text-lg leading-relaxed'>
            Want to learn more about our work with {brand.name}?{' '}
            <a
              href='mailto:hey@notacompany.com'
              className='underline hover:no-underline break-all'
            >
              hey@notacompany.com
            </a>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
