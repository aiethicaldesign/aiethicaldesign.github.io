This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Adding News Articles

To add or edit news articles, see the [News Content Guide](./content/news/README.md). Simply edit Markdown files directly on GitHub.

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (header, footer, fonts)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and Tailwind config
│   ├── news/
│   │   ├── page.tsx            # News listing page
│   │   └── [slug]/page.tsx     # Individual article page
│   └── resources/
│       └── page.tsx            # Resources page
├── components/                 # React components
│   ├── header.tsx              # Site header/navigation
│   ├── footer.tsx              # Site footer
│   ├── hero.tsx                # Homepage hero section
│   ├── organization-intro.tsx  # Org intro section
│   ├── resource-grid.tsx       # Resource cards grid
│   ├── stakeholder-section.tsx # Stakeholder info
│   └── ui/                     # Shared UI primitives (button, card, etc.)
├── content/                    # Markdown content (edit here!)
│   └── news/
│       ├── README.md           # Guide for adding/editing articles
│       ├── _template.md        # Copy this to create a new article
│       └── *.md                # News articles (one file per article)
├── lib/
│   ├── news.ts                 # Reads & parses markdown news files
│   └── utils.ts                # Shared utility functions
├── public/                     # Static assets served at /
│   ├── images/news/            # News article images
│   └── resources/              # Downloadable resource files (PDFs, etc.)
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment workflow
├── next.config.ts              # Next.js config (static export)
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies and scripts
```
