# notacompany.com

**Still building stuff for Humans.**

## About

I'm **Tiago Martins**, founder and solo employee of _not a company_. I'm an engineer who believes technology should amplify human potential, not replace human judgment. Over the years, I've been involved with consumer infrastructure brands—building some from scratch, investing in others, and advising many more.

This isn't a venture studio or an agency. It's just me, building and supporting things that help people live better (hopefully).

## Design

Inspired by the [world's first website](https://info.cern.ch/). Times New Roman, blue links, horizontal rules. No fancy styling—just content.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Minimal CSS (Times New Roman, classic HTML aesthetic)
- **Analytics**: Seline + Vercel Speed Insights
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Minimal classic styling
│   ├── portfolio/          # Portfolio listing + brand pages
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt config
├── components/
│   ├── site-header.tsx     # Simple header with nav
│   ├── site-footer.tsx     # Footer with credits
│   └── back-button.tsx     # Navigation
├── content/brands/         # MDX brand files
├── lib/
│   ├── brands.ts           # Brand data utilities
│   └── site-config.ts      # Centralized site config (i18n-ready)
├── scripts/
│   └── generate-llms-txt.ts # LLMs.txt generation script
└── public/
    ├── favicons/           # Favicon assets
    ├── brands/             # LLM-readable brand files (generated)
    └── llms.txt            # LLM context file (generated)
```

## Development

```bash
pnpm install
pnpm dev              # Start dev server at http://localhost:3000
pnpm run fix-all      # Auto-fix formatting and linting
pnpm run check-all    # Verify formatting, linting, and types
pnpm run build        # Generates llms.txt files + builds for production
```

## Site Configuration

All site information is centralized in `lib/site-config.ts`:

- **URL**: `https://www.notacompany.com`
- **Meta descriptions**: SEO-optimized (120-160 chars)
- **i18n-ready**: English only for now, structured for future localization
- **Dynamic brand count**: Computed from content files

The config is consumed by meta tags, sitemap, robots.txt, and LLMs.txt generation.

## Links

- **Website**: [www.notacompany.com](https://www.notacompany.com)
- **Source**: [github.com/not-a-company/notacompany](https://github.com/not-a-company/notacompany)
- **LinkedIn**: [linkedin.com/company/not-a-company-com](https://www.linkedin.com/company/not-a-company-com)
- **Contact**: hey@notacompany.com
- **Author**: [github.com/tiagom87](https://github.com/tiagom87)
