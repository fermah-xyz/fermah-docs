'use client'

import { useState, useRef, useEffect } from 'react'

const glossary: Record<string, string> = {
  'Prover Node': 'A machine that generates zero-knowledge proofs for Proof Requests assigned to it. Prover Nodes are operated by EigenLayer Operators.',
  'Seeker': 'An entity that submits proof requests to the Fermah network and receives the generated proofs.',
  'Matchmaker': 'The Fermah orchestrator that receives proof requests from Seekers and assigns them to capable Prover Nodes.',
  'EigenLayer': 'A restaking protocol on Ethereum that enables validators to secure additional services. Fermah uses EigenLayer for Operator security.',
  'zkVM': 'A zero-knowledge Virtual Machine that can prove the correct execution of arbitrary programs.',
  'zkEVM': 'A zero-knowledge Ethereum Virtual Machine that proves EVM execution correctness.',
  'Groth16': 'A widely-used zero-knowledge proof system known for small proof sizes and fast verification.',
  'ECDSA': 'Elliptic Curve Digital Signature Algorithm — used for key management and signing in Fermah.',
  'TOML': 'A configuration file format used by Fermah for prover node configuration.',
  'CUDA': 'NVIDIA\'s parallel computing platform, required for GPU-accelerated proof generation.',
  'GPG': 'GNU Privacy Guard — used to verify the authenticity of Fermah release scripts.',
  'fpn': 'Fermah Prover Node — the CLI binary for running a prover node.',
  'SP1': 'A zkVM by Succinct Labs, one of the proof systems supported by Fermah.',
  'RISC Zero': 'A zkVM based on the RISC-V architecture, supported by Fermah.',
  'Valida': 'A zkVM by Lita, supported by Fermah.',
  'Stwo': 'A proof system by Starkware, supported by Fermah.',
  'Jolt': 'A zkVM by a16z, supported by Fermah.',
}

export function GlossaryTooltip({
  term,
  children,
}: {
  term?: string
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const ref = useRef<HTMLSpanElement>(null)

  const key = term || (typeof children === 'string' ? children : '')
  const definition = glossary[key]

  useEffect(() => {
    if (show && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      })
    }
  }, [show])

  if (!definition) return <>{children}</>

  return (
    <span
      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        borderBottom: '1px dashed #5eead4',
        cursor: 'help',
        position: 'relative',
      }}
    >
      {children}
      {show && (
        <span
          style={{
            position: 'fixed',
            top: ref.current ? ref.current.getBoundingClientRect().bottom + 4 : 0,
            left: ref.current ? Math.min(ref.current.getBoundingClientRect().left, window.innerWidth - 320) : 0,
            width: '300px',
            padding: '0.75rem',
            fontSize: '0.8rem',
            lineHeight: '1.4',
            background: 'rgb(17 24 39)',
            border: '1px solid rgba(94, 234, 212, 0.2)',
            borderRadius: '0.5rem',
            color: '#e2e8f0',
            zIndex: 10000,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
          }}
        >
          <span style={{ fontWeight: 600, color: '#5eead4', display: 'block', marginBottom: '0.25rem' }}>
            {key}
          </span>
          {definition}
        </span>
      )}
    </span>
  )
}

// Export the glossary data for use in other components
export { glossary }
