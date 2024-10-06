import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [
          resolve(__dirname, '..'),
        ],
      },
    },
    plugins: [
      // custom
      MarkdownTransform(),

      // plugins
      Components({
        dirs: [
          resolve(__dirname, '.vitepress/theme/components'),
          resolve(__dirname, 'components'),
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3',
      }),

      UnoCSS(),
    ],

    resolve: {
      dedupe: [
        'vue',
        'vue-demi',
        '@vue/runtime-core',
      ],
    },
  }
})
