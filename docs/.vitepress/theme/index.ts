// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/css-vars.css'
import './styles/index.scss'

import 'uno.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
