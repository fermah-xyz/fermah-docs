'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

let initialized = false

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#06c19d',
          primaryTextColor: '#f7f7f8',
          primaryBorderColor: '#5eead4',
          lineColor: '#5eead4',
          secondaryColor: '#0a2540',
          tertiaryColor: '#051624',
          background: '#111827',
          mainBkg: '#0a2540',
          nodeBorder: '#5eead4',
          clusterBkg: '#0a2540',
          titleColor: '#f7f7f8',
          edgeLabelBackground: '#111827',
        },
      })
      initialized = true
    }

    let cancelled = false
    setError('')
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`

    mermaid
      .render(id, chart.trim())
      .then(({ svg: renderedSvg }) => {
        if (!cancelled) setSvg(renderedSvg)
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Mermaid render error:', err)
          setError('Failed to render diagram.')
        }
      })

    return () => {
      cancelled = true
    }
  }, [chart])

  if (error) {
    return (
      <p
        style={{
          color: '#f87171',
          fontSize: '0.85rem',
          margin: '1.5rem 0',
          textAlign: 'center',
        }}
      >
        {error}
      </p>
    )
  }

  return (
    <div
      ref={ref}
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '1.5rem 0',
        overflow: 'auto',
      }}
    />
  )
}
