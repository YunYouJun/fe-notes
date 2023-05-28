import fs from 'node:fs'
import path from 'node:path'
import { capitalize } from 'vue'
import type { DefaultTheme } from 'vitepress'
import matter from 'gray-matter'

export function getPages(dir: string) {
  return fs.readdirSync(dir).filter((f) => {
    if (
      fs.statSync(path.join(dir, f)).isDirectory()
      && fs.existsSync(path.join(dir, f, 'index.md'))
    )
      return true

    return false
  })
}

/**
 * 获取侧边栏
 * @param folder 目录文件名
 * @param title 标题
 */
export function getSidebar(folder: string, title: string): DefaultTheme.SidebarItem[] {
  const pages = getPages(`docs/${folder}`)
  const sidebar: DefaultTheme.Sidebar = [
    {
      text: title,
      link: `/${folder}/`,
      items: pages.map((page) => {
        const content = fs.readFileSync(`docs/${folder}/${page}/index.md`, 'utf-8')
        const { data } = matter(content)

        return {
          text: data.title || capitalize(page),
          link: `/${folder}/${page}/`,
        }
      }),
    },
  ]

  return sidebar
}
