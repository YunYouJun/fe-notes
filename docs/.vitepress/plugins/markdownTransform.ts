import type { Plugin } from 'vite'
import matter from 'gray-matter'

export function MarkdownTransform(): Plugin {
  return {
    name: 'fe-notes-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      const frontmatterEnds = code.indexOf('\n---\n')
      const sliceIndex = frontmatterEnds < 0 ? 0 : frontmatterEnds + 5

      const { data } = matter(code.slice(0, sliceIndex))

      if (data.title) {
        const header = `\n# ${data.title}\n\n`
        code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)
      }

      return code
    },
  }
}
