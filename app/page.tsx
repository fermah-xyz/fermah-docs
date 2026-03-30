import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'

type ProductLink = {
  label: string
  href: string
  comingSoon?: boolean
}

type ResourceLink = {
  icon: string
  label: string
  href: string
}

type ProductGroup = {
  name: string
  description: string
  icon: string
  accentColor: string
  statusUrl: string
  links: ProductLink[]
  resources: ResourceLink[]
}

const productGroups: ProductGroup[] = [
  {
    name: 'ZK Proof Market',
    description: 'The universal proof market for cheap, fast, and reliable zero-knowledge proof generation.',
    icon: 'ph:shield-check-duotone',
    accentColor: '#06c19d',
    statusUrl: 'https://status.fermah.xyz/badge?theme=dark',
    links: [
      { label: 'Documentation', href: '/network' },
      { label: 'API Reference', href: '/api', comingSoon: true }
    ],
    resources: [
      { icon: 'ph:compass-duotone', label: 'Proof Explorer', href: 'https://explorer.fermah.xyz/' },
    ]
  },
  {
    name: 'Flashcast Social',
    description: 'Decentralized social protocol powered by zero-knowledge proofs.',
    icon: 'ph:lightning-duotone',
    accentColor: '#a855f7',
    statusUrl: 'https://status.flashcast.social/badge?theme=dark',
    links: [
      { label: 'Documentation', href: '/flashcast', comingSoon: true },
      { label: 'API Reference', href: '/flashcast/api', comingSoon: true }
    ],
    resources: []
  },
  {
    name: 'Marina',
    description: 'Privacy-preserving data infrastructure for the decentralized web.',
    icon: 'ph:anchor-duotone',
    accentColor: '#3b82f6',
    statusUrl: '',
    links: [
      { label: 'Documentation', href: '/marina', comingSoon: true },
      { label: 'API Reference', href: '/marina/api', comingSoon: true }
    ],
    resources: []
  }
]

const socialLinks = [
  { icon: 'ph:github-logo-duotone', href: 'https://github.com/fermah-xyz', label: 'GitHub' },
  { icon: 'ph:x-logo-duotone', href: 'https://x.com/fermaborachain', label: 'X' },
  { icon: 'ph:discord-logo-duotone', href: 'https://discord.gg/zzJDPWppRU', label: 'Discord' },
]

export default function LandingPage() {
  return (
    <div className="hero-gradient min-h-screen text-[#f7f7f8]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Fermah" width={28} height={28} />
            <span className="text-xl font-semibold tracking-tight">Fermah</span>
            <span className="text-sm text-[#a2b4c1]">Docs</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="https://fermah.xyz" className="text-sm text-[#a2b4c1] transition hover:text-white" target="_blank" rel="noopener noreferrer">
              Website
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                className="text-[#a2b4c1] transition hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={link.icon} width={22} />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Fermah Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#a2b4c1]">
            Cheap, fast, and reliable proof generation.
            Choose a product to get started.
          </p>
        </div>

        {/* Product Groups */}
        <div className="grid gap-8 lg:grid-cols-3">
          {productGroups.map((group) => (
            <div
              key={group.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20"
            >
              {/* Product header */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${group.accentColor}15` }}
                >
                  <Icon icon={group.icon} width={24} style={{ color: group.accentColor }} />
                </div>
                <h2 className="text-xl font-semibold">{group.name}</h2>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#a2b4c1]">
                {group.description}
              </p>

              {/* Status badge slot (fixed height for alignment) */}
              <div className="my-4 h-[30px]">
                {group.statusUrl ? (
                  <iframe
                    src={group.statusUrl}
                    width={250}
                    height={30}
                    style={{ border: 0, colorScheme: 'normal' }}
                    title={`${group.name} Status`}
                  />
                ) : (
                  <div className="h-[30px]" />
                )}
              </div>

              {/* Doc / API links (pinned to bottom) */}
              <div className="mt-auto flex flex-col gap-2">
                {group.links.map((link) =>
                  link.comingSoon ? (
                    <span
                      key={link.label}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5 text-sm text-[#a2b4c1]/50"
                    >
                      <Icon icon="ph:book-open-duotone" width={16} />
                      {link.label}
                      <span className="ml-auto rounded-full bg-white/5 px-2 py-0.5 text-xs text-[#a2b4c1]/40">
                        Soon
                      </span>
                    </span>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm transition-all hover:border-[#06c19d]/40 hover:bg-[#06c19d]/5"
                    >
                      <Icon icon="ph:book-open-duotone" width={16} className="text-[#06c19d]" />
                      {link.label}
                      <Icon
                        icon="ph:arrow-right"
                        width={14}
                        className="ml-auto text-[#06c19d] opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  )
                )}
              </div>

              {/* Per-product resource links */}
              {group.resources.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 border-t border-white/5 pt-4">
                  {group.resources.map((res) => (
                    <a
                      key={res.label}
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#a2b4c1]/70 transition hover:text-white"
                    >
                      <Icon icon={res.icon} width={14} />
                      {res.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global quick links (not product-specific) */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-[#a2b4c1]">
          <a href="https://fermah.xyz" className="flex items-center gap-1.5 transition hover:text-white" target="_blank" rel="noopener noreferrer">
            <Icon icon="ph:globe-duotone" width={16} />
            Website
          </a>
          <a href="https://discord.gg/zzJDPWppRU" className="flex items-center gap-1.5 transition hover:text-white" target="_blank" rel="noopener noreferrer">
            <Icon icon="ph:discord-logo-duotone" width={16} />
            Discord
          </a>
          <a href="https://github.com/fermah-xyz" className="flex items-center gap-1.5 transition hover:text-white" target="_blank" rel="noopener noreferrer">
            <Icon icon="ph:github-logo-duotone" width={16} />
            GitHub
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <span className="text-sm text-[#a2b4c1]">
            &copy; {new Date().getFullYear()} Fermah. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                className="text-[#a2b4c1]/60 transition hover:text-[#a2b4c1]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={link.icon} width={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
