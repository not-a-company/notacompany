# notacompany.com

Interim technical talent acquisition for ambitious consumer product companies.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://notacompany.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

## About

**notacompany.com** provides interim technical talent acquisition services for ambitious consumer product companies. We place exceptional technical talent for 3-12 month engagements, focusing on consumer-facing product experience.

### 🏢 **What We Offer**

- **Interim Technical Talent Acquisition**: Senior technical professionals for 3-12 month engagements
- **Consumer Product Focus**: Specialists who understand consumer behavior and product development
- **Rapid Deployment**: 2-4 weeks from brief to start
- **Proven Track Record**: Experience with successful exits and acquisitions

### 🎯 **Our Specialties**

- Interim CTOs and VP Engineering
- Senior Full-Stack Engineers
- AI Engineers
- Product Engineers with consumer focus
- DevOps and Infrastructure Engineers

## Tech Stack

This website is built with modern web technologies:

- **Framework**: Next.js 15.5.3 (App Router)
- **Runtime**: React 19.1.1
- **Language**: TypeScript 5.0.2
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI + shadcn/ui
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

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

# Code Quality
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

## Architecture

### Project Structure

```
├── app/                # Next.js App Router
│   ├── layout.tsx     # Root layout with analytics
│   ├── page.tsx       # Homepage with services overview
│   ├── services/      # Service detail page
│   ├── clients/       # Past clients showcase
│   ├── creations/     # Our own creations
│   ├── opportunities/ # Job opportunities
│   └── globals.css    # Global styles
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── theme-provider.tsx
├── lib/              # Utilities
├── public/           # Static assets
└── styles/           # Additional styles
```

### Key Features

- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Performance**: Next.js image optimization, Vercel Speed Insights
- **Analytics**: User behavior tracking with Vercel Analytics
- **Accessibility**: ARIA compliance, semantic HTML
- **Mobile-First**: Responsive design for all devices
- **Modern UI**: Clean design with Tailwind CSS + Radix UI

## Deployment

### Vercel (Recommended)

1. Push changes to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No database or external API keys required - this is a static marketing site.

## Contributing

### Code Style

- **Linting**: ESLint with TypeScript, React, and Next.js rules
- **Formatting**: Prettier with consistent style
- **Type Checking**: Strict TypeScript validation

### Development Workflow

1. Create feature branch
2. Make changes
3. Run `pnpm run fix-all`
4. Run `pnpm run check-all`
5. Commit and push
6. Create pull request

## Contact

- **Email**: hey@notacompany.com
- **Website**: [notacompany.com](https://notacompany.com)

---

_Interim technical talent acquisition for ambitious consumer product companies._
