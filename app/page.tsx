import Link from 'next/link'

const products = [
  {
    name: 'Network',
    slug: 'network',
    description: 'Run prover nodes, request proofs, and participate in the Fermah network.',
    icon: '🌐',
    accentClass: 'hover:border-blue-500/50 hover:bg-blue-500/5'
  },
  {
    name: 'SDK',
    slug: 'sdk',
    description: 'Integrate proof generation into your application.',
    icon: '🔧',
    accentClass: 'hover:border-purple-500/50 hover:bg-purple-500/5'
  },
  {
    name: 'API Reference',
    slug: 'api',
    description: 'Complete API reference for Fermah services.',
    icon: '📡',
    accentClass: 'hover:border-teal-500/50 hover:bg-teal-500/5'
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">Fermah</span>
            <span className="text-sm text-neutral-500">Docs</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <a href="https://fermah.xyz" className="hover:text-neutral-900 dark:hover:text-neutral-100">
              Website
            </a>
            <a href="https://github.com/fermah" className="hover:text-neutral-900 dark:hover:text-neutral-100">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
            Fermah Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Cheap, fast, and reliable proof generation.
            Choose a product to get started.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/${product.slug}`}
              className={`group rounded-xl border border-neutral-200 p-6 transition-all dark:border-neutral-800 ${product.accentClass}`}
            >
              <div className="mb-3 text-3xl">{product.icon}</div>
              <h2 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {product.name}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Fermah. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
