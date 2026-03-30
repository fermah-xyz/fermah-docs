import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'Fermah Documentation',
    template: '%s — Fermah Docs'
  },
  description: 'Cheap, fast, and reliable proof generation'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
