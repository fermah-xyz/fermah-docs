import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { ProductProvider } from '../_components/product-provider'

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
        docsRepositoryBase="https://github.com/fermah/fermah-docs/tree/main"
        editLink="Edit this page"
        sidebar={{ defaultMenuCollapseLevel: 2 }}
        navbar={
          <Navbar
            logo={
              <span className="flex items-center gap-2 text-lg font-bold">
                Fermah <span className="text-sm font-normal text-neutral-500">Docs</span>
              </span>
            }
            projectLink="https://github.com/fermah"
          />
        }
        footer={
          <Footer>
            <span>&copy; {new Date().getFullYear()} Fermah. All rights reserved.</span>
          </Footer>
        }
      >
        {children}
      </Layout>
    </ProductProvider>
  )
}
