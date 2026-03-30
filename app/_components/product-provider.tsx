'use client'

import { usePathname } from 'next/navigation'

const productSlugs = ['network', 'sdk', 'api'] as const

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const firstSegment = pathname.split('/')[1]
  const product = productSlugs.includes(firstSegment as any) ? firstSegment : undefined

  return (
    <div data-product={product}>
      {children}
    </div>
  )
}
