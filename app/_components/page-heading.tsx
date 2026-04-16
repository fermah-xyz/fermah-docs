'use client'

import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import { ReadingTime } from './reading-time'

const pathIconMap: Record<string, string> = {
  '/network': 'ph:shield-check-duotone',
  '/network/introduction/why-fermah': 'ph:question-duotone',
  '/network/introduction/supported-proof-systems': 'ph:stack-duotone',
  '/network/introduction/key-terms-and-concepts': 'ph:book-open-duotone',
  '/network/introduction/on-zero-knowledge-proofs': 'ph:lock-duotone',
  '/network/network/components': 'ph:puzzle-piece-duotone',
  '/network/mainnet': 'ph:list-bullets-duotone',
  '/network/mainnet/installation': 'ph:download-duotone',
  '/network/mainnet/provers': 'ph:gear-duotone',
  '/network/mainnet/configuration': 'ph:sliders-duotone',
  '/network/mainnet/machine-secret': 'ph:key-duotone',
  '/network/mainnet/adding-a-new-machine': 'ph:plus-circle-duotone',
  '/network/mainnet/registration': 'ph:clipboard-text-duotone',
  '/network/mainnet/telemetry': 'ph:chart-line-duotone',
  '/network/mainnet/telemetry/custom-export': 'ph:export-duotone',
  '/network/mainnet/starting-a-node': 'ph:play-duotone',
  '/network/mainnet/multi-gpu-setup': 'ph:desktop-tower-duotone',
  '/network/resources/gpg': 'ph:fingerprint-duotone',
  '/network/resources/support': 'ph:headset-duotone',
}

export function PageHeading({
  children,
  className,
  id,
  ...props
}: React.ComponentProps<'h1'>) {
  const pathname = usePathname()
  const icon = pathIconMap[pathname]

  return (
    <div>
      <h1
        id={id}
        className={`x:mt-2 x:text-4xl x:font-bold x:tracking-tight x:text-slate-900 x:dark:text-slate-100 ${className || ''}`}
        {...props}
      >
        {icon && (
          <Icon
            icon={icon}
            width={36}
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '0.5rem',
              marginTop: '-0.15em',
              color: 'hsl(164deg 95% 39%)',
            }}
          />
        )}
        {children}
      </h1>
      <ReadingTime />
    </div>
  )
}
