import fs from 'node:fs'
import path from 'node:path'
import { capitalize } from 'vue'
import type { DefaultTheme } from 'vitepress'
import matter from 'gray-matter'

export function getPages(dir: string) {
  return fs.readdirSync(dir).filter((f) => {
    if (
      (
        fs.statSync(path.join(dir, f)).isDirectory()
        && fs.existsSync(path.join(dir, f, 'index.md'))
      ) || fs.statSync(path.join(dir, f)).isFile()
    )
      return true

    return false
  })
}

/**
 * 获取侧边栏
 * @param folder 目录文件名
 */
export function getSidebar(folder: string): DefaultTheme.SidebarItem[] {
  const pages = getPages(`docs/${folder}`)
  const sidebar: DefaultTheme.Sidebar = [
    ...pages.map((page) => {
      let pagePath = `docs/${folder}/${page}/index.md`
      let link = `/${folder}/${page}/`
      if (page.endsWith('.md')) {
        pagePath = `docs/${folder}/${page}`
        link = `/${folder}/${page}`
      }
      const content = fs.readFileSync(pagePath, 'utf-8')
      const { data } = matter(content)

      return {
        text: data.title || capitalize(page),
        link,
      }
    }),
  ]

  return sidebar
}
