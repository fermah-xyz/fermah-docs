<p align="center">
  <img src="public/images/fermah-logo.avif" alt="Fermah" width="200" />
</p>

<h1 align="center">Fermah Documentation</h1>

<p align="center">
  The official documentation site for Fermah — cheap, fast, and reliable proof generation.
</p>

<p align="center">
  <a href="https://github.com/fermah-xyz/fermah-docs/actions/workflows/deploy-prod.yml"><img src="https://github.com/fermah-xyz/fermah-docs/actions/workflows/deploy-prod.yml/badge.svg" alt="Deploy to Production" /></a>
  <a href="https://github.com/fermah-xyz/fermah-docs/actions/workflows/deploy-dev.yml"><img src="https://github.com/fermah-xyz/fermah-docs/actions/workflows/deploy-dev.yml/badge.svg" alt="Deploy to Dev" /></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/Nextra-4-blue" alt="Nextra 4" />
  <img src="https://img.shields.io/badge/bun-latest-f472b6?logo=bun" alt="Bun" />
  <img src="https://img.shields.io/badge/Cloudflare%20Pages-deployed-orange?logo=cloudflare" alt="Cloudflare Pages" />
</p>

---

## Overview

This is a multi-product documentation site built with [Nextra 4](https://nextra.site) (Next.js + MDX). It supports multiple product documentation sets, each with its own navigation, content, and accent color.

### Products

| Product | Status | Path |
|---------|--------|------|
| **ZK Proof Market** | Live | `/network/` |
| **Flashcast Social** | Coming soon | `/flashcast/` |
| **Marina** | Coming soon | `/marina/` |

### Features

- Multi-product architecture with per-product accent colors
- Full-text search via [Pagefind](https://pagefind.app)
- Dark mode support
- Static export for Cloudflare Pages deployment
- Responsive design (desktop + mobile)
- MDX with custom components (Callout, Tabs, code highlighting via Shiki)
- Iconify duotone icons throughout

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (latest)
- Node.js 18+ (for compatibility)

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with Turbopack hot reload.

### Build

```bash
bun run build
```

Outputs static HTML to `out/` and runs Pagefind indexing.

### Preview

```bash
bun run preview
```

Serves the static build locally for testing.

---

## Project Structure

```
fermah-docs/
├── app/
│   ├── layout.tsx              # Root HTML layout
│   ├── page.tsx                # Landing page (product hub)
│   ├── global.css              # Tailwind + Fermah brand tokens
│   ├── _components/            # Shared React components
│   └── [...mdxPath]/           # Catch-all docs route
│       ├── layout.tsx          # Nextra theme layout
│       └── page.tsx            # MDX page renderer
├── content/
│   └── network/                # ZK Proof Market docs
│       ├── _meta.ts            # Sidebar configuration
│       ├── index.mdx           # Product overview
│       ├── introduction/       # Intro section
│       ├── network/            # Architecture
│       ├── testnet/            # Testnet guides
│       ├── mainnet/            # Mainnet guides
│       └── resources/          # Support & GPG
├── public/                     # Static assets (logo, favicon, images)
├── .github/workflows/          # CI/CD pipelines
├── next.config.mjs             # Nextra + static export config
└── package.json
```

---

## Adding a New Product

1. **Create content** — Add a new directory under `content/{product-slug}/` with `_meta.ts` and MDX files
2. **Add accent color** — Add a `[data-product="{slug}"]` rule in `app/global.css`
3. **Update landing page** — Add the product to the `productGroups` array in `app/page.tsx`
4. **Register slug** — Add the slug to `productSlugs` in `app/_components/product-provider.tsx`

---

## Deployment

### Environments

| Branch | Environment | Cloudflare Project |
|--------|------------|-------------------|
| `main` | Production | `fermah-docs` |
| `dev` | Staging | `fermah-docs-dev` |

### GitHub Secrets Required

| Secret | Description |
|--------|------------|
| `CLOUDFLARE_API_TOKEN` | API token with Cloudflare Pages edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

### Manual Deploy

```bash
# Deploy to dev
bun run deploy:dev

# Deploy to production
bun run deploy:prod
```

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) + [Nextra 4](https://nextra.site)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Icons**: [Iconify](https://iconify.design) (Phosphor duotone set)
- **Search**: [Pagefind](https://pagefind.app)
- **Build**: [Bun](https://bun.sh) + [Turbopack](https://turbo.build)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **CI/CD**: GitHub Actions

---

## Links

- [Documentation](https://docs.fermah.xyz)
- [Website](https://fermah.xyz)
- [Proof Explorer](https://explorer.fermah.xyz)
- [System Status](https://status.fermah.xyz)
- [Discord](https://discord.gg/zzJDPWppRU)
- [X (Twitter)](https://x.com/fermaborachain)
- [GitHub](https://github.com/fermah-xyz)
