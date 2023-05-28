import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { getPages, getSidebar } from '../../scripts/utils'

/**
 * 获取导航侧边栏
 */
function getGuideSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '指南',
      items: [
        { text: '关于', link: '/guide/' },
        { text: '开始', link: '/guide/start' },
        { text: '参考', link: '/guide/ref' },
      ],
    },
  ]
}

function getJavaScriptSidebar(): DefaultTheme.Sidebar {
  const folder = 'js'
  const title = 'JavaScript 相关'
  const pages = getPages(`docs/${folder}`)
  console.log(pages)
  const sidebar: DefaultTheme.Sidebar = [
    {
      text: title,
      link: `/${folder}/`,
      items: [],
    },
  ]
  pages.forEach((page) => {
    sidebar[0].items.push({
      text: capitalize(page),
      link: `/${folder}/${page}/`,
    })
  })
  return sidebar
}

export default defineConfig({
  title: '前端笔记',
  description: '前端八股文面试笔记',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YunYouJun/fe-notes' },
    ],

    // repo: "YunYouJun/fe-notes",
    // docsBranch: "main",
    // docsDir: "docs",

    // editLinks: true,
    // editLinkText: "帮助咱们改善文档！",
    // lastUpdated: "上次更新",

    nav: [
      { text: '通用', link: '/common/' },
      {
        text: 'Html',
        link: '/html/',
      },
      {
        text: 'JavaScript',
        link: '/js/',
      },
      {
        text: 'CSS',
        link: '/css/',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/common/': getSidebar('common', '通用'),
      '/html/': getSidebar('html', 'Html 相关'),
      '/js/': getJavaScriptSidebar(),
      '/css/': getSidebar('css', 'CSS 相关'),
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { name: 'author', content: 'YunYouJun' }],
  ],
})
