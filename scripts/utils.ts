import fs from 'node:fs'
import path from 'node:path'
import { capitalize } from 'vue'
import type { DefaultTheme } from 'vitepress'

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
export function getSidebar(folder: string, title: string): DefaultTheme.Sidebar {
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
