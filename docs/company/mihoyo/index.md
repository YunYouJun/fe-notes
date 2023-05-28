---
title: 米哈游
outline: deep
---

## Questions

> 参考 [米哈游校招前端一面](https://www.nowcoder.com/discuss/353158458235101184?sourceSSR=users)

### 用过哪些 LESS/SCSS 特性?

- 变量
- 嵌套（Nesting）+ `&` 连接父级选择器/命名
- 混合 (Mixins)（撰写 Element Plus 公共样式）
- 函数 @function（撰写 Element Plus 公共函数，生成固定命名空间及 BFC 格式的变量名等）
  - 默认提供的通用函数（如颜色函数等）
- 运算
- 导入（譬如 SCSS 官方推荐使用 `@use` 替代 `@import` 实现模块功能和避免重复引入等问题）

#### SCSS

我在个人项目中和 Element Plus 中大量使用 SCSS 及其相关特性。

- 在 [packages/theme-chalk | Element Plus](https://github.com/element-plus/element-plus/tree/dev/packages/theme-chalk) 中使用 SCSS 负责维护并修复组件样式，并使用 SCSS 变量与 CSS 变量重构变量系统实现了暗黑主题切换的功能。
- 在 [element-theme-ink](https://github.com/YunYouJun/element-theme-ink) 项目中使用 SCSS 重写过几乎所有的 Element UI SCSS 样式。

#### LESS

在工作中我们统一使用 LESS。
我使用其开发过蚂蚁森林五周年（千万UV）、蚂蚁庄园及其相关活动（五周年），对使用 LESS 进行适配兼容也有一定经验。

譬如利用 LESS 变量计算比例，适配 iPhone X 刘海屏等。

---

此外，我还习惯使用 TailwindCSS/UnoCSS 来快速添加原子化 CSS。
