import { getViteConfig } from '@yunyoujun/docs'
import { defineConfig } from 'vite'

import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

const viteConfig = getViteConfig()

export default defineConfig(async () => {
  return {
    ...viteConfig,

    plugins: [
      ...viteConfig.plugins,

      // custom
      MarkdownTransform(),
    ],
  }
})
