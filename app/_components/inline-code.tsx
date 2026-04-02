'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Icon } from '@iconify/react'

export function InlineCode({ children, className, ...props }: React.ComponentProps<'code'>) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  // Synchronous check for Shiki code blocks (covers SSR + first render)
  const hasLanguageClass = className && /language-/.test(className)
  // Fallback for code blocks without a language class
  const [isInsidePre, setIsInsidePre] = useState(false)

  useEffect(() => {
    if (!hasLanguageClass && ref.current?.closest('pre')) {
      setIsInsidePre(true)
    }
  }, [hasLanguageClass])

  const handleCopy = useCallback(() => {
    const text = ref.current?.textContent || ''
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }, [])

  if (hasLanguageClass || isInsidePre) {
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
        cursor: 'pointer',
        ...props.style,
      }}
      onClick={handleCopy}
      {...props}
    >
      {children}
      {hovered && (
        <span
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '0.3em',
            background: 'rgba(0, 0, 0, 0.15)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
            color: copied ? '#06c19d' : '#a2b4c1',
          }}
        >
          <Icon icon={copied ? 'ph:check-bold' : 'ph:copy-duotone'} width={12} />
        </span>
      )}
    </code>
  )
}
