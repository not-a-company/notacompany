/* eslint-disable no-console */
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { getAllBrands, type Brand, type BrandTag } from '../lib/brands'
import { siteConfig } from '../lib/site-config'

const tagDescriptions: Record<BrandTag, string> = {
  creation: 'Built from the ground up',
  investment: 'Investment partner',
  advisory: 'Strategic advisory role',
  exited: 'Successfully exited',
  deceased: 'No longer operating',
}

function getTagsDescription(tags: BrandTag[]): string {
  return tags.map(tag => tagDescriptions[tag]).join(', ')
}

function getFocusArea(brand: Brand): string {
  const name = brand.name
  if (name.includes('Steps')) return 'Health'
  if (
    name.includes('Superstables') ||
    name.includes('xMoney') ||
    name.includes('Coinvision')
  )
    return 'Financial'
  if (
    name.includes('Talent') ||
    name.includes('Codeplace') ||
    name.includes('Bet')
  )
    return 'Professional'
  if (name.includes('CoFlyt') || name.includes('Fisacar')) return 'Mobility'
  if (name.includes('SoSquared')) return 'Marketing'
  if (name.includes('Acreditar') || name.includes('Mahalo')) return 'Social'
  if (name.includes('Parfois') || name.includes('Feira')) return 'Retail'
  if (name.includes('epic.travel')) return 'Travel'
  return 'Consumer'
}

function getStatus(brand: Brand): string {
  if (brand.tags.includes('deceased')) return 'Deceased'
  if (brand.tags.includes('exited')) return 'Successfully Exited'
  return 'Active'
}

function generateBrandLLMSContent(brand: Brand): string {
  const websiteSection =
    brand.website && !brand.tags.includes('deceased')
      ? `**Website:** ${brand.website}`
      : '**Status:** No longer active'

  const tagsDescription = getTagsDescription(brand.tags)
  const focusArea = getFocusArea(brand)
  const status = getStatus(brand)

  return `# ${brand.name}

**Brand:** ${brand.name}
**Tagline:** ${brand.tagline}
${websiteSection}
**Year of Involvement:** ${brand.year}
**Our Role:** ${tagsDescription}
**Portfolio:** ${siteConfig.url}/portfolio/${brand.slug}

## About ${brand.name}

${brand.content}

## Our Involvement

${siteConfig.domain}'s involvement with ${brand.name} includes: ${tagsDescription}.

This partnership represents our commitment to ${siteConfig.strings.mission.toLowerCase()}

## Brand Details

**Category:** Consumer
**Focus Area:** ${focusArea}
**Year:** ${brand.year}
**Status:** ${status}

## Related Portfolio

Explore our complete portfolio of consumer brands at ${siteConfig.url}/portfolio

## Contact

For questions about ${brand.name} or our consumer work:
**Email:** ${siteConfig.email}
**Website:** ${siteConfig.url}
**Portfolio:** ${siteConfig.url}/portfolio

${siteConfig.strings.mission}`
}

function generateMainLLMSContent(brands: Brand[]): string {
  const activeCreations = brands.filter(
    b =>
      b.tags.includes('creation') &&
      !b.tags.includes('exited') &&
      !b.tags.includes('deceased')
  )
  const advisoryInvestment = brands.filter(
    b =>
      (b.tags.includes('advisory') || b.tags.includes('investment')) &&
      !b.tags.includes('exited') &&
      !b.tags.includes('deceased')
  )
  const exited = brands.filter(
    b => b.tags.includes('exited') && !b.tags.includes('deceased')
  )
  const deceased = brands.filter(b => b.tags.includes('deceased'))

  const formatBrand = (b: Brand) => `- **${b.name}** (${b.year}) - ${b.tagline}`

  return `# ${siteConfig.domain}

**Website:** ${siteConfig.url}  
**Portfolio:** ${siteConfig.url}/portfolio  
**Contact:** ${siteConfig.email}  
**Source:** ${siteConfig.github}

## About

${siteConfig.strings.tagline}

${siteConfig.strings.about}

## Portfolio (${brands.length} brands)

### Active Creations
${activeCreations.map(formatBrand).join('\n')}

### Advisory & Investment
${advisoryInvestment.map(formatBrand).join('\n')}

### Successful Exits
${exited.map(formatBrand).join('\n')}

### No Longer Active
${deceased.map(formatBrand).join('\n')}

## Contact

${siteConfig.email}`
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

  // Generate individual brand files
  brands.forEach(brand => {
    const content = generateBrandLLMSContent(brand)
    const filename = join(brandsDir, `${brand.slug}.txt`)
    writeFileSync(filename, content, 'utf8')
    console.log(`Generated: ${filename}`)
  })

  // Generate main llms.txt
  const mainContent = generateMainLLMSContent(brands)
  const mainFilename = join(process.cwd(), 'public', 'llms.txt')
  writeFileSync(mainFilename, mainContent, 'utf8')
  console.log(`Generated: ${mainFilename}`)

  console.log(
    `\nGenerated LLMS.txt files for ${brands.length} brands + main llms.txt`
  )
}

// Run if called directly
if (require.main === module) {
  generateAllBrandLLMS()
}

export { generateAllBrandLLMS }
