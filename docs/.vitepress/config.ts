import fs from 'node:fs'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { capitalize } from 'vue'
import matter from 'gray-matter'
import { getPages, getSidebar } from '../../scripts/utils'

const companyItems: DefaultTheme.NavItemWithChildren['items'] = [
  {
    text: '字节跳动',
    link: '/company/bytedance/',
  },
  {
    text: '米哈游',
    link: '/company/mihoyo/',
  },
  {
    text: '腾讯',
    link: '/company/tencent/',
  },
]

const commonItems: DefaultTheme.NavItemWithChildren['items'] = getSidebar('common') as DefaultTheme.NavItemWithChildren['items']

function getCommonSidebar() {
  return commonItems
}

function getCompanySidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '公司',
      collapsed: false,
      link: '/company/',
      items: companyItems,
    },
  ]
}

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
  const folder = 'fe/js'
  const pages = getPages(`docs/${folder}/code/`)

  const items: DefaultTheme.SidebarItem[] = [
    {
      text: '常见问题',
      link: `/${folder}/`,
    },
    {
      text: '前端编程题',
      link: `/${folder}/code/`,
      items: [
        ...pages.filter(p => !p.endsWith('.md')).map((page) => {
          const content = fs.readFileSync(`docs/${folder}/code/${page}/index.md`, 'utf-8')
          const { data } = matter(content)

          return {
            text: data.title || capitalize(page),
            link: `/${folder}/code/${page}/`,
          }
        }).filter(item => item.text !== 'Code'),
      ],
    },
  ]

  return items
}

export function getFeSidebar() {
  const sidebar: DefaultTheme.Sidebar = [
    {
      text: 'HTML',
      link: '/fe/html/',
      collapsed: false,
      items: [
        {
          text: 'DOM',
          link: '/fe/html/dom/',
        },
      ],
    },
    {
      text: 'CSS',
      link: '/fe/css/',
      collapsed: false,
      items: [
        {
          text: '练习题',
          link: '/fe/css/practice',
        },
        {
          text: '参考',
          link: '/fe/css/ref',
        },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: getJavaScriptSidebar(),
    },
    {
      text: 'TypeScript',
      // collapsed: false,
      link: '/fe/ts/',
    },
    {
      text: '框架',
      collapsed: false,
      items: [
        {
          text: 'React',
          link: '/fe/frameworks/react/',
        },
        {
          text: 'Vue',
          link: '/fe/frameworks/vue/',
        },
      ],
    },
    {
      text: '其他',
      collapsed: false,
      items: [
        {
          text: '性能优化',
          link: '/fe/other/performance',
        },
      ],
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
      {
        text: '通用',
        items: commonItems,
      },
      {
        text: '公司',
        items: companyItems,
      },
      {
        text: '前端',
        items: [
          {
            text: 'Html',
            link: '/fe/html/',
          },
          {
            text: 'CSS',
            link: '/fe/css/',
          },
          {
            text: 'JavaScript',
            link: '/fe/js/',
          },
          {
            text: 'TypeScript',
            link: '/fe/ts/',
          },
          {
            text: '框架',
            items: [
              {
                text: 'React',
                link: '/fe/frameworks/react/',
              },
              {
                text: 'Vue',
                link: '/fe/frameworks/vue/',
              },
            ],
          },
          {
            text: '其他',
            items: [
              {
                text: '性能优化',
                link: '/fe/other/performance/',
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/common/': getCommonSidebar(),
      '/company/': getCompanySidebar(),
      '/fe/': getFeSidebar(),
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['meta', { name: 'author', content: 'YunYouJun' }],
  ],
})
