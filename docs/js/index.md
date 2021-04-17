# JavaScript 相关

一些 JavaScript 示例，虽然这么说，但是能用 TypeScript 写的，必然是用 TypeScript。

具体目录见侧边栏。

## JavaScript 指南

### [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

现场手写正则表达式的情况应该比较少见（毕竟平时都是用到现查），但是我猜能熟练地手写出来一定也会令面试官刮目相看。

### [内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

垃圾回收：

- 引用计数垃圾收集
- 标记-清除算法

### [Tree shaking](https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking)

Tree shaking 是一个通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) 行为的术语。

它依赖于 ES2015 中的 import 和 export 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

在现代 JavaScript 应用程序中，我们使用模块打包(如 [webpack](https://webpack.js.org/) 或 [Rollup](https://github.com/rollup/rollup))将多个 JavaScript 文件打包为单个文件时自动删除未引用的代码。这对于准备预备发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。
