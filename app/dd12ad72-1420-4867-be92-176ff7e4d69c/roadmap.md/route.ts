import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const dynamic = 'force-static'

export async function GET() {
  const source = await readFile(
    join(process.cwd(), 'roadmaps', 'dd12ad72-1420-4867-be92-176ff7e4d69c.md'),
    'utf8'
  )

  return new Response(source, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'attachment; filename="fermah-product-tge-roadmap.md"',
      'Cache-Control': 'private, no-store'
    }
  })
}
