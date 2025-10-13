import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { getAllBrands } from '../lib/brands'

function generateBrandLLMSContent(brand: any) {
  const websiteSection =
    brand.website && !brand.tags.includes('deceased')
      ? `**Website:** ${brand.website}`
      : '**Status:** No longer active'

  const tagsDescription = brand.tags
    .map((tag: string) => {
      switch (tag) {
        case 'creation':
          return 'Built from the ground up'
        case 'investment':
          return 'Investment partner'
        case 'advisory':
          return 'Strategic advisory role'
        case 'exited':
          return 'Successfully exited'
        case 'deceased':
          return 'No longer operating'
        default:
          return tag
      }
    })
    .join(', ')

  return `# ${brand.name}

**Brand:** ${brand.name}
**Tagline:** ${brand.tagline}
${websiteSection}
**Year of Involvement:** ${brand.year}
**Our Role:** ${tagsDescription}
**Portfolio:** https://notacompany.com/portfolio/${brand.slug}

## About ${brand.name}

${brand.content}

## Our Involvement

notacompany.com's involvement with ${brand.name} includes: ${tagsDescription}.

This partnership represents our commitment to building consumer infrastructure that makes better living effortless across ${brand.tags.includes('creation') ? 'direct product creation' : brand.tags.includes('investment') ? 'strategic investment and growth support' : 'strategic advisory and partnership development'}.

## Brand Details

**Category:** Consumer Infrastructure
**Focus Area:** ${
    brand.name.includes('Steps')
      ? 'Health Infrastructure'
      : brand.name.includes('Superstables') ||
          brand.name.includes('xMoney') ||
          brand.name.includes('Coinvision')
        ? 'Financial Infrastructure'
        : brand.name.includes('Talent') ||
            brand.name.includes('Codeplace') ||
            brand.name.includes('Bet')
          ? 'Professional Infrastructure'
          : brand.name.includes('Lime') ||
              brand.name.includes('CoFlyt') ||
              brand.name.includes('Fisacar')
            ? 'Mobility Infrastructure'
            : brand.name.includes('SoSquared')
              ? 'Marketing Infrastructure'
              : brand.name.includes('Acreditar') ||
                  brand.name.includes('Mahalo')
                ? 'Social Infrastructure'
                : 'Consumer Infrastructure'
  }
**Year:** ${brand.year}
**Status:** ${brand.tags.includes('deceased') ? 'Deceased' : brand.tags.includes('exited') ? 'Successfully Exited' : 'Active'}

## Related Portfolio

Explore our complete portfolio of consumer infrastructure brands at https://notacompany.com/portfolio

## Contact

For questions about ${brand.name} or our consumer infrastructure work:
**Email:** hey@notacompany.com
**Website:** https://notacompany.com
**Portfolio:** https://notacompany.com/portfolio

Building consumer infrastructure that makes better living effortless.`
}

function generateAllBrandLLMS() {
  const brands = getAllBrands()

  // Create public/brands directory if it doesn't exist
  const brandsDir = join(process.cwd(), 'public', 'brands')
  try {
    mkdirSync(brandsDir, { recursive: true })
  } catch {
    // Directory might already exist
  }

  brands.forEach(brand => {
    const content = generateBrandLLMSContent(brand)
    const filename = join(brandsDir, `${brand.slug}.txt`)
    writeFileSync(filename, content, 'utf8')
    console.log(`Generated: ${filename}`)
  })

  console.log(`Generated LLMS.txt files for ${brands.length} brands`)
}

// Run if called directly
if (require.main === module) {
  generateAllBrandLLMS()
}

export { generateAllBrandLLMS }
