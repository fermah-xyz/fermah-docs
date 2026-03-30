'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export function ReadingTime() {
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return
    const text = article.textContent || ''
    const words = text.trim().split(/\s+/).length
    setMinutes(Math.max(1, Math.ceil(words / 200)))
  }, [])

  if (!minutes) return null

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.8rem',
        color: '#a2b4c1',
        marginTop: '0.25rem',
      }}
    >
      <Icon icon="ph:clock-duotone" width={14} />
      {minutes} min read
    </span>
  )
}
