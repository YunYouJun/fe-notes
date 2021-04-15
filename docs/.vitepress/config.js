/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "前端笔记",
  description: "前端八股文面试笔记",
  themeConfig: {
    repo: "YunYouJun/fe-notes",
    docsBranch: "main",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "帮助咱们改善文档！",
    lastUpdated: "上次更新",

    nav: [
      {
        text: "Html",
        link: "/html/",
      },
      {
        text: "JavaScript",
        link: "/js/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/js": getJsSidebar(),
    },
  },

  head: [
    ["link", { rel: "icon", href: "/logo.png", type: "image/png" }],
    ["meta", { name: "author", content: "YunYouJun" }],
  ],
};

/**
 * 获取导航侧边栏
 */
function getGuideSidebar() {
  return [
    {
      text: "指南",
      children: [
        { text: "关于", link: "/guide/" },
        { text: "开始", link: "/guide/start" },
        { text: "参考", link: "/guide/ref" },
      ],
    },
  ];
}

function getJsSidebar() {
  return [
    {
      text: "JavaScript",
      children: [
        { text: "Event", link: "/js/event/" },
        { text: "Promise", link: "/js/promise/" },
      ],
    },
  ];
}
