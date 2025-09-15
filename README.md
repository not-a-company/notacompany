# notacompany.com

**Ultra-fast**, **SEO-optimized** technical advisory and interim talent acquisition website for ambitious consumer product companies.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://notacompany.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-green?style=for-the-badge)](https://notacompany.com)

## About

**notacompany.com** provides technical advisory and interim talent acquisition services for ambitious consumer product companies. We optimize technical teams and infrastructure while placing exceptional technical talent for 3-12 month engagements.

### 🏢 **Our Services**

1. **Product Team & Infrastructure Optimization Advisory**: Optimize technical teams and infrastructure for maximum efficiency and scalability
2. **Interim Technical Talent Acquisition**: Senior technical professionals for 3-12 month engagements with consumer product focus

### 🎯 **Our Specialties**

- Product Team & Infrastructure Optimization
- Interim CTOs and VP Engineering
- Senior Full-Stack Engineers
- AI Engineers
- Product Engineers with consumer focus
- DevOps and Infrastructure Engineers

### 📈 **Our Track Record**

**Active Creation**: Steps.org (exercise accountability)
**Successful Exits**: Polkastarter, Coinvision, Codeplace
**Trusted Clients**: Acreditar, xMoney, Talent Protocol, Bet Protocol, Lime, Parfois, Coflyt, Fisacar

## Tech Stack - **Ultra-Optimized**

This website is built for **maximum performance** and **speed**:

- **Framework**: Next.js 15.5.3 (App Router, Static Generation)
- **Runtime**: React 19.1.1
- **Language**: TypeScript 5.0.2
- **Styling**: Tailwind CSS 4.1.9 (minimal, optimized)
- **Fonts**: System font stack (zero external requests)
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel (globally cached)

## Performance Metrics ⚡

### **Bundle Size** (After Aggressive Optimization)

- **Shared JS**: 102kB (includes React 19, Next.js, Analytics)
- **Per Page**: ~900B (individual page content)
- **Total Dependencies**: 6 production packages (vs 67+ before)

### **Load Times** (Expected)

- **First Contentful Paint**: < 0.8s
- **Largest Contentful Paint**: < 1.2s
- **Cumulative Layout Shift**: 0 (no external fonts)
- **Performance Score**: 95-100

### **Network Requests**

- **Zero external font requests** (system fonts only)
- **Zero unused UI library overhead** (removed 40+ packages)
- **Static generation** for instant loading

## Development

### Prerequisites

- Node.js 18.17+
- pnpm (recommended package manager)

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### Available Scripts

```bash
# Development
pnpm dev                # Start development server
pnpm build             # Build for production
pnpm start             # Start production server

# Code Quality (MANDATORY before commits)
pnpm lint              # Run ESLint
pnpm lint:strict       # ESLint with zero warnings
pnpm lint:fix          # Fix auto-fixable issues
pnpm format            # Format with Prettier
pnpm format:check      # Check formatting
pnpm type-check        # TypeScript validation
pnpm check-all         # Full project health check
pnpm fix-all           # Fix formatting + linting issues
```

### **⚠️ Before Committing**

Always run the comprehensive checks:

```bash
pnpm run fix-all       # Auto-fix everything possible
pnpm run check-all     # Verify everything passes
```

## Architecture - **Performance-First**

### Project Structure

```
├── app/                # Next.js App Router (4 pages only)
│   ├── layout.tsx     # Root layout with analytics & meta
│   ├── page.tsx       # Homepage with services overview
│   ├── services/      # Technical advisory & talent services
│   ├── clients/       # Client testimonials & case studies
│   ├── creations/     # Our products & successful exits
│   └── globals.css    # Minimal optimized styles (79 lines)
├── components/        # Reusable UI components (optimized)
│   ├── site-header.tsx # Responsive header with hamburger menu
│   └── site-footer.tsx # Minimal footer
├── public/            # Static assets + SEO files
│   ├── robots.txt     # Search engine directives
│   ├── sitemap.xml    # SEO sitemap
│   └── *.png          # Optimized images
├── next.config.mjs    # Vercel-optimized configuration
└── vercel.json        # Deployment & caching configuration
```

### Key Optimizations

- **Mobile-First Design**: Responsive hamburger menu, touch-friendly UI
- **SEO Maximized**: Comprehensive meta tags, structured data, sitemap
- **Security Headers**: HSTS, X-Frame-Options, CSP-ready
- **Caching Strategy**: 1-year static asset cache, optimized headers
- **Bundle Splitting**: Minimal JavaScript, aggressive tree-shaking
- **System Fonts**: Zero external font requests, instant text rendering

### **Performance Features**

- **Static Generation**: All pages pre-rendered (○ symbols)
- **Image Optimization**: AVIF/WebP formats, responsive sizing
- **Code Splitting**: Automatic by Next.js, optimized chunks
- **Tree Shaking**: Removed all unused dependencies
- **Compression**: Gzip/Brotli enabled
- **Edge Caching**: Vercel global CDN

## Content & SEO

### **Comprehensive Meta Tags**

- **OpenGraph**: Social media optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD business schema
- **Canonical URLs**: SEO duplicate prevention
- **Keywords**: Targeted technical advisory terms

### **Pages & Content**

- **Homepage**: Technical advisory + talent acquisition overview
- **Services**: Detailed service descriptions with outcomes
- **Clients**: Testimonials and client showcase
- **Creations**: Our products and successful exits

## Deployment - **Vercel Ready**

### **Vercel Optimizations**

```bash
# Deploy to Vercel
vercel --prod
```

**Automatic Features**:

- ✅ Global Edge Caching
- ✅ Image Optimization at Edge
- ✅ Automatic HTTPS
- ✅ Performance Monitoring
- ✅ Analytics Integration

### **Environment Configuration**

- **Framework**: Auto-detected (Next.js)
- **Build Command**: `pnpm run build`
- **Install Command**: `pnpm install`
- **Runtime**: Node.js 20.x

## Performance Optimizations Applied

### **Bundle Size Reduction** (90%+ reduction)

- ❌ Removed 40+ unused Radix UI components
- ❌ Removed theme provider and dark mode support
- ❌ Removed utility libraries (clsx, tailwind-merge)
- ❌ Removed chart and form libraries
- ✅ Only 6 essential production dependencies

### **Font Optimization** (100% performance gain)

- ❌ Google Fonts (external requests, render blocking)
- ✅ System font stack (instant rendering, zero requests)

### **CSS Optimization** (65% reduction)

- **Before**: 224+ lines with unused styles
- **After**: 79 lines of essential, optimized CSS

### **Build Performance**

- **Build Time**: ~1.3s (ultra-fast)
- **Bundle Analysis**: Optimized chunks, minimal overlap
- **Tree Shaking**: Aggressive unused code elimination

## Contact

- **Email**: hey@notacompany.com
- **Website**: [notacompany.com](https://notacompany.com)

---

_**Ultra-fast**, **SEO-optimized** technical advisory and interim talent acquisition for ambitious consumer product companies._

**Performance**: 🚀🚀🚀 **Unbelievably Fast**
