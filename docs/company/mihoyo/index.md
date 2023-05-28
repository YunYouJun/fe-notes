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

### 移动端的响应式方案有哪些（说了媒体查询），rem是什么意思？

---

介绍一下盒模型
垂直居中有哪些方法？
BFC有什么用？BFC化有哪一些方法？

JS有哪些类型？
JS中哪些是浅拷贝，那些是深拷贝？（答错了orz）
typeof和instanceof有哪些区别（typeof又说错了一些东西）
原型链是什么？除了原型链继承还有什么样的继承方案？
TS用过哪些特性？
如何合并多个异步请求错误？（回答的是Promise.all）
事件循环是什么？宏任务和微任务是什么？

虚拟DOM有什么样的作用？
Vue的响应式原理
Vue和React Component都有哪些生命周期？
Vue slot父子组件如何传值？
React有哪些hooks，分别有什么作用？

webpack有什么样的作用？还有什么其他的打包工具吗？
webpack有哪些特性（答了babel, loader, plugin等等）
跨域通信有什么样的解决办法？说一下CORS的具体原理
浏览器从输入地址到生成页面是一个什么样的过程？什么时候会使用缓存？
介绍一下OAuth和token
如何实现一个上传图片的功能

介绍一下自己做过的一个项目及其难点
