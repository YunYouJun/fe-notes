import fs from "fs";
import path from "path";
import { capitalize } from "vue";

function getPages(dir: string) {
  return fs.readdirSync(dir).filter((f) => {
    if (
      fs.statSync(path.join(dir, f)).isDirectory() &&
      fs.existsSync(path.join(dir, f, "index.md"))
    ) {
      return true;
    }

    return false;
  });
}

/**
 * 获取侧边栏
 * @param folder 目录文件名
 * @param title 标题
 */
export function getSidebar(folder: string, title: string) {
  const pages = getPages(`docs/${folder}`);
  const sidebar = [
    {
      text: title,
      link: `/${folder}/`,
      children: [],
    },
  ];
  pages.forEach((page) => {
    sidebar[0].children.push({
      text: capitalize(page),
      link: `/${folder}/${page}/`,
    });
  });
  return sidebar;
}
