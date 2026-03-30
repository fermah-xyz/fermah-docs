'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'

export function FAQ({
  items,
}: {
  items: { q: string; a: string }[]
}) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            border: '1px solid rgba(94, 234, 212, 0.1)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 500,
              textAlign: 'left',
            }}
          >
            <Icon
              icon="ph:caret-right-duotone"
              width={16}
              style={{
                transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 200ms',
                color: '#5eead4',
                flexShrink: 0,
              }}
            />
            {item.q}
          </button>
          {open === i && (
            <div
              style={{
                padding: '0 1rem 0.75rem 2.25rem',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                opacity: 0.8,
              }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
