# notacompany.com

**Ultra-fast**, **SEO-optimized** consumer infrastructure that makes better living effortless.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://notacompany.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-green?style=for-the-badge)](https://notacompany.com)

## About

**notacompany.com** builds consumer infrastructure that makes better living effortless. The rails that power your daily life—from health and finance to mobility and work—are built by a team of 100% engineers who understand what it takes to create foundational infrastructure that millions rely on.

### 🏗️ **Our Infrastructure Focus**

**Consumer Infrastructure**: Building the foundational systems that enable seamless, effortless experiences across all aspects of modern life

### 🎯 **Infrastructure Areas**

- Health infrastructure: Wellness, fitness accountability, and behavioral intervention tools
- Financial infrastructure: Payment processing, investment platforms, and digital banking
- Work infrastructure: Professional networking, educational ecosystems, and talent platforms
- Lifestyle infrastructure: Entertainment, transportation, and e-commerce experiences
- Real-world validation through active consumer product development

### 📈 **Our Track Record**

**17 Portfolio Brands** across creation, investment, advisory, and successful exits:

- **Active Creations**: Steps.org (health accountability), Superstables (stablecoin infrastructure)
- **Successful Exits**: Polkastarter, Nexo, Codeplace
- **Investment & Advisory**: Talent Protocol, xMoney, Lime, Acreditar, Bet Protocol, CoFlyt, Fisacar, Coinvision, SoSquared, and more

## Tech Stack - **Ultra-Optimized**

Built for **maximum performance** and **speed**:

- **Framework**: Next.js 15.5.3 (App Router, Static Generation)
- **Runtime**: React 19.1.1
- **Language**: TypeScript 5.0.2
- **Styling**: Tailwind CSS 4.1.9 (minimal, optimized)
- **Fonts**: System font stack (zero external requests)
- **Analytics**: Seline Analytics + Vercel Speed Insights
- **Deployment**: Vercel (globally cached)

## Performance Metrics ⚡

- **Shared JS**: 102kB (React 19, Next.js, Speed Insights)
- **Per Page**: ~900B–1.6kB (individual page content)
- **Dependencies**: 5 production packages only
- **LCP**: < 1.2s | **FID**: < 100ms | **CLS**: 0
- **Zero external font requests** (system fonts only)
- **Static generation** for instant loading

## Development

### Prerequisites

- Node.js 18.17+ and pnpm

### Quick Start

```bash
pnpm install && pnpm dev
# Open http://localhost:3000
```

### Scripts

```bash
# Development
pnpm dev / build / start

# Code Quality (MANDATORY before commits)
pnpm fix-all           # Auto-fix everything
pnpm check-all         # Verify all passes
pnpm lint / format / type-check
```

## Architecture - **Performance-First**

### Project Structure

```
├── app/                # Next.js App Router (2 pages + dynamic)
│   ├── layout.tsx     # Root layout with Seline analytics & meta
│   ├── page.tsx       # Homepage - consumer infrastructure overview
│   ├── portfolio/     # Portfolio listing + 17 dynamic brand pages
│   ├── sitemap.ts     # Dynamic sitemap generation
│   ├── robots.ts      # SEO robots configuration
│   └── globals.css    # Optimized monochrome styles
├── components/        # Reusable UI components
│   ├── site-header.tsx   # Responsive header with mobile menu
│   ├── site-footer.tsx   # Minimal footer
│   └── back-button.tsx   # Scroll-preserving navigation
├── content/brands/    # 17 MDX brand descriptions
├── lib/brands.ts      # Brand data utilities
├── public/            # Static assets, SEO files, LLMS.txt
├── next.config.mjs    # Vercel-optimized config
└── vercel.json        # Deployment & caching config
```

### Key Optimizations

- **Monochrome Design**: Pure black & white aesthetic using font weights, borders, and grayscale variants
- **Mobile-First**: Responsive design with hamburger menu and touch-optimized interactions
- **SEO Maximized**: Meta tags, structured data, dynamic sitemap with 24 URLs
- **Static Generation**: All pages pre-rendered for instant loading (SSG)
- **System Fonts**: Zero external requests, instant text rendering
- **Scroll Restoration**: Back button preserves scroll position for better UX
- **Bundle Splitting**: Minimal JavaScript, aggressive tree-shaking
- **Edge Caching**: Vercel global CDN

## Content & SEO

- **OpenGraph**: Social media optimization
- **Structured Data**: JSON-LD business schema
- **Canonical URLs**: SEO duplicate prevention
- **Keywords**: Consumer infrastructure and better living terms

### Pages (24 Total)

- **Homepage** (`/`): Consumer infrastructure overview with reader-focused messaging
- **Portfolio Listing** (`/portfolio`): Filterable showcase of 17 brands with tag filtering
- **17 Brand Pages** (`/portfolio/[slug]`): Individual brand stories with concise single-paragraph descriptions
- **Dynamic Sitemap** (`/sitemap.xml`): Auto-generated from brand data
- **Robots.txt** (`/robots.txt`): SEO configuration

## Deployment - **Vercel Ready**

```bash
vercel --prod
```

**Automatic Features**: Global Edge Caching, Image Optimization, HTTPS, Performance Monitoring

## Performance Optimizations

### Bundle Size Reduction (90%+ reduction)

- ❌ Removed 40+ unused UI components and libraries
- ❌ Removed Vercel Analytics → ✅ Seline Analytics (lighter, async)
- ✅ Only 5 essential production packages

### Design & Performance

- ❌ Google Fonts → ✅ System font stack (instant rendering)
- ❌ Color palette → ✅ Pure black & white monochrome design
- **Build Time**: ~1s (ultra-fast)
- **Visual Hierarchy**: Font weights (bold, semibold, medium), borders, grayscale shades

## Contact

- **Email**: hey@notacompany.com
- **Website**: [notacompany.com](https://notacompany.com)

---

_**Ultra-fast**, **SEO-optimized** consumer infrastructure that makes better living effortless._

**Performance**: 🚀🚀🚀 **Unbelievably Fast**
