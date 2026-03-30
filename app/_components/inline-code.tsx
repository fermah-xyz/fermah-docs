'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'

export function InlineCode({ children, className, ...props }: React.ComponentProps<'code'>) {
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLElement>(null)

  // Code blocks from Shiki have a className like "language-xxx" — skip those
  const isCodeBlock = className && /language-/.test(className)

  if (isCodeBlock) {
    return <code className={className} {...props}>{children}</code>
  }

  const handleCopy = () => {
    const text = ref.current?.textContent || ''
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <code
      ref={ref}
      className={`group/code ${className || ''}`}
      style={{ position: 'relative', ...props.style }}
      {...props}
    >
      {children}
      <button
        onClick={handleCopy}
        aria-label="Copy"
        className="opacity-0 group-hover/code:opacity-100"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-18px',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '1px',
          color: copied ? '#06c19d' : '#a2b4c1',
          transition: 'opacity 150ms',
          lineHeight: 1,
        }}
      >
        <Icon icon={copied ? 'ph:check-bold' : 'ph:copy-duotone'} width={12} />
      </button>
    </code>
  )
}
