# notacompany.com

**Still building stuff for Humans.**

## About

I'm **Tiago Martins**, founder and solo employee of *not a company*. I'm an engineer who believes technology should amplify human potential, not replace human judgment. Over the years, I've been involved with 16 consumer infrastructure brands—building some from scratch, investing in others, and advising many more.

This isn't a venture studio or an agency. It's just me, building and supporting things that help people live better (hopefully).

## Design

Inspired by the [world's first website](https://info.cern.ch/). Times New Roman, blue links, horizontal rules. No fancy styling—just content.

## Portfolio (16 brands)

- **Active Creations**: Steps.org, Superstables
- **Successful Exits**: Polkastarter, Nexo, Codeplace
- **Investment & Advisory**: Talent Protocol, xMoney, Acreditar, Bet Protocol, CoFlyt, Fisacar, Coinvision, SoSquared
- **No Longer Active**: Mahalo, impactMarket, Songvice

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Generation)
- **Language**: TypeScript
- **Styling**: Minimal CSS (Times New Roman, classic HTML aesthetic)
- **Analytics**: Seline + Vercel Speed Insights
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Minimal classic styling
│   ├── portfolio/          # Portfolio listing + 16 brand pages
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots config
├── components/
│   ├── site-header.tsx     # Simple header with nav
│   ├── site-footer.tsx     # Footer with credits
│   └── back-button.tsx     # Navigation
├── content/brands/         # 16 MDX brand files
├── lib/brands.ts           # Brand data utilities
└── public/
    ├── favicons/           # Favicon assets
    ├── brands/             # LLM-readable brand files
    └── llms.txt            # LLM context file
```

## Development

```bash
pnpm install
pnpm dev
# Open http://localhost:3000
```

## Links

- **Website**: [notacompany.com](https://notacompany.com)
- **Source**: [github.com/not-a-company/notacompany](https://github.com/not-a-company/notacompany)
- **LinkedIn**: [linkedin.com/company/not-a-company-com](https://www.linkedin.com/company/not-a-company-com)
- **Contact**: hey@notacompany.com
- **Author**: [github.com/tiagom87](https://github.com/tiagom87)
