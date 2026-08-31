import type { Metadata } from 'next'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './roadmap.css'

const ROADMAP_ID = 'dd12ad72-1420-4867-be92-176ff7e4d69c'

export const metadata: Metadata = {
  title: 'Fermah Product and TGE Roadmap',
  description: 'Fermah product roadmap from Q4 2026 through Q2 2027.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
      nosnippet: true,
      noimageindex: true
    }
  },
  referrer: 'no-referrer'
}

const markdownComponents: Components = {
  h2: ({ children, ...props }) => (
    <h2
      id={String(children)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')}
      {...props}
    >
      {children}
    </h2>
  )
}

export default async function RoadmapPage() {
  const source = await readFile(
    join(process.cwd(), 'roadmaps', `${ROADMAP_ID}.md`),
    'utf8'
  )

  return (
    <div className="roadmap-shell" data-pagefind-ignore="all">
      <div className="roadmap-grain" aria-hidden="true" />
      <header className="roadmap-topbar">
        <a className="roadmap-brand" href={`/${ROADMAP_ID}`} aria-label="Fermah roadmap home">
          <span className="roadmap-brand-mark">F</span>
          <span>Fermah</span>
          <span className="roadmap-brand-divider" />
          <span className="roadmap-brand-context">TGE roadmap</span>
        </a>
        <a
          className="roadmap-download roadmap-press"
          href={`/${ROADMAP_ID}/roadmap.md`}
          download="fermah-product-tge-roadmap.md"
        >
          <span aria-hidden="true">↓</span>
          Download .md
        </a>
      </header>

      <main className="roadmap-main">
        <div className="roadmap-engraving" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <nav className="roadmap-jump-nav" aria-label="Roadmap sections">
          <a href="#current-position-q4-2026">Current position</a>
          <a href="#q4-2026-mainnet-foundation">Q4 2026</a>
          <a href="#q1-2027-tge-and-public-activation">Q1 2027</a>
          <a href="#q2-2027-advanced-products-and-scale">Q2 2027</a>
          <a href="#gtm-planning-by-quarter">GTM plan</a>
        </nav>

        <article className="roadmap-article">
          <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {source}
          </Markdown>
        </article>

        <section className="roadmap-cta">
          <p className="roadmap-kicker">Portable by design</p>
          <h2>One source for teams and agents.</h2>
          <p>
            Download the complete roadmap as plain Markdown for planning, analysis, and AI workflows.
          </p>
          <a
            className="roadmap-primary roadmap-press"
            href={`/${ROADMAP_ID}/roadmap.md`}
            download="fermah-product-tge-roadmap.md"
          >
            Download roadmap.md
          </a>
        </section>

        <footer className="roadmap-footer">
          <span>Fermah confidential planning document</span>
          <span>Q4 2026 · Q1 2027 · Q2 2027</span>
        </footer>
      </main>
    </div>
  )
}
