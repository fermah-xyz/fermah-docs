import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'nextra/mdx-components'
import { PageHeading } from './app/_components/page-heading'
import { InlineCode } from './app/_components/inline-code'
import { GlossaryTooltip } from './app/_components/glossary-tooltip'
import { Mermaid } from './app/_components/mermaid'
import { FAQ } from './app/_components/faq'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    h1: PageHeading,
    code: InlineCode,
    // Custom components available in all MDX files
    GlossaryTooltip,
    Mermaid,
    FAQ,
    ...components,
  } as MDXComponents
}
