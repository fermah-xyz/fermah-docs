import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { ProductProvider } from '../_components/product-provider'
import { AiChat } from '../_components/ai-chat'

export default async function DocsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap('/')

  return (
    <ProductProvider>
      <Layout
        pageMap={pageMap}
        docsRepositoryBase="https://github.com/fermah-xyz/fermah-docs/tree/main"
        editLink="Edit this page"
        sidebar={{ defaultMenuCollapseLevel: 2 }}
        navbar={
          <Navbar
            logo={
              <span className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Fermah" width={24} height={24} />
                <span className="text-lg font-semibold">Fermah</span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Docs</span>
              </span>
            }
            projectLink="https://github.com/fermah-xyz"
          />
        }
        footer={
          <Footer>
            <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
              <span>&copy; {new Date().getFullYear()} Fermah. All rights reserved.</span>
              <div className="flex items-center gap-4 text-sm">
                <a href="https://explorer.fermah.xyz/" target="_blank" rel="noopener noreferrer" className="hover:underline">Explorer</a>
                <a href="https://status.fermah.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">Status</a>
                <a href="https://discord.gg/zzJDPWppRU" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a>
                <a href="https://x.com/fermah_xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">X</a>
              </div>
            </div>
          </Footer>
        }
      >
        {children}
      </Layout>
      <AiChat />
    </ProductProvider>
  )
}
