import fs from 'node:fs'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { capitalize } from 'vue'
import matter from 'gray-matter'
import { getPages, getSidebar } from '../../scripts/utils'

/**
 * 获取导航侧边栏
 */
function getGuideSidebar(): DefaultTheme.SidebarItem[] {
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

function getJavaScriptSidebar(): DefaultTheme.SidebarItem[] {
  const folder = 'js'
  const title = 'JavaScript 相关'
  const pages = getPages(`docs/${folder}/code/`)

  const items: DefaultTheme.SidebarItem[] = [
    {
      text: '前端编程题',
      link: `/${folder}/code/`,
      items: pages.map((page) => {
        const content = fs.readFileSync(`docs/${folder}/code/${page}/index.md`, 'utf-8')
        const { data } = matter(content)

        return {
          text: data.title || capitalize(page),
          link: `/${folder}/code/${page}/`,
        }
      }).filter(item => item.text !== 'Code'),
    },
  ]

  const sidebar: DefaultTheme.Sidebar = [
    {
      text: title,
      link: `/${folder}/`,
      items,
      collapsed: false,
    },
  ]

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
      { text: '指南', link: '/guide/' },
      { text: '通用', link: '/common/' },
      { text: '公司', link: '/company/' },
      {
        text: '前端',
        items: [
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
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/common/': getSidebar('common', '通用'),
      '/company/': getSidebar('company', '公司'),
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
