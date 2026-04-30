'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'

export function AiChat() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ask AI"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #06c19d, #0d9488)',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(6, 193, 157, 0.3)',
          zIndex: 9998,
          transition: 'transform 200ms, box-shadow 200ms',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(6, 193, 157, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(6, 193, 157, 0.3)'
        }}
      >
        <Icon icon={open ? 'ph:x-bold' : 'ph:chat-circle-dots-duotone'} width={24} />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '5rem',
            right: '1.5rem',
            width: '360px',
            maxHeight: '500px',
            borderRadius: '1rem',
            background: 'rgb(17 24 39)',
            border: '1px solid rgba(94, 234, 212, 0.15)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid rgba(94, 234, 212, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Icon icon="ph:robot-duotone" width={20} style={{ color: '#5eead4' }} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f7f7f8' }}>
              Ask about Fermah
            </span>
          </div>

          {/* Content */}
          <div
            style={{
              padding: '1.5rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              textAlign: 'center',
            }}
          >
            <Icon icon="ph:sparkle-duotone" width={32} style={{ color: '#5eead4' }} />
            <p style={{ fontSize: '0.85rem', color: '#a2b4c1', lineHeight: 1.5 }}>
              Get instant answers about Fermah Froben, node setup, and architecture.
            </p>
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(135deg, #06c19d, #0d9488)',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
            >
              <Icon icon="ph:chat-circle-dots-duotone" width={16} />
              Open in Claude
            </a>
            <p style={{ fontSize: '0.75rem', color: '#a2b4c1', opacity: 0.6 }}>
              Powered by Claude AI
            </p>
          </div>
        </div>
      )}
    </>
  )
}
