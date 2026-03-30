'use client'

import { useState, useRef, useCallback } from 'react'
import { Icon } from '@iconify/react'

export function InlineCode({ children, className, ...props }: React.ComponentProps<'code'>) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  // Code blocks from Shiki have a className like "language-xxx" — skip those
  const isCodeBlock = className && /language-/.test(className)

  const handleCopy = useCallback(() => {
    const text = ref.current?.textContent || ''
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }, [])

  if (isCodeBlock) {
    return <code className={className} {...props}>{children}</code>
  }

  return (
    <code
      ref={ref}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        ...props.style,
      }}
      onClick={handleCopy}
      {...props}
    >
      {/* Hover overlay */}
      {hovered && (
        <span
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.15)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />
      )}
      <span style={{ position: 'relative' }}>{children}</span>
      {hovered && (
        <span
          style={{
            position: 'relative',
            marginLeft: '0.3em',
            flexShrink: 0,
            color: copied ? '#06c19d' : '#a2b4c1',
            lineHeight: 1,
          }}
        >
          <Icon icon={copied ? 'ph:check-bold' : 'ph:copy-duotone'} width={12} />
        </span>
      )}
    </code>
  )
}
