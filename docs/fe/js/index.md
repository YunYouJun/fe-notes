# JavaScript 相关

一些 JavaScript 示例，虽然这么说，但是能用 TypeScript 写的，必然是用 TypeScript。

具体目录见侧边栏。

## JavaScript 指南

- [new 运算符 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

### [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

现场手写正则表达式的情况应该比较少见（毕竟平时都是用到现查），但是我猜能熟练地手写出来一定也会令面试官刮目相看。

> 2023 年之后就问问无敌的 ChatGPT 吧。

### [内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

垃圾回收：

- 引用计数垃圾收集
- 标记-清除算法

### [Tree shaking](https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking)

Tree shaking 是一个通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) 行为的术语。

它依赖于 ES2015 中的 import 和 export 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用。

在现代 JavaScript 应用程序中，我们使用模块打包(如 [webpack](https://webpack.js.org/) 或 [Rollup](https://github.com/rollup/rollup))将多个 JavaScript 文件打包为单个文件时自动删除未引用的代码。这对于准备预备发布代码的工作非常重要，这样可以使最终文件具有简洁的结构和最小化大小。

### [Polyfill](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill)

Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。

比如说 polyfill 可以让 IE7 使用 Silverlight 插件来模拟 HTML Canvas 元素的功能，或模拟 CSS 实现 rem 单位的支持，或 text-shadow，或其他任何你想要的功能。

### 回流与重绘

- [回流](https://developer.mozilla.org/zh-CN/docs/Glossary/Reflow)：当浏览器必须重新处理和绘制部分或全部页面时，回流就会发生，例如当一个交互式站点更新后。

> [回流与重绘：CSS 性能让 JavaScript 变慢？- 张鑫旭](https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/) > [浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.cn/post/6844903569087266823)

### TypeScript 与 JavaScript 的区别

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

> [TypeScript 官网](https://www.typescriptlang.org/)

---

TypeScript 是一种给 JavaScript 添加特性的语言扩展。增加的功能包括：

- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 名字空间
- 元组
- Await

以下功能是从 ECMA 2015 反向移植而来：

- 类
- 模块
- lambda 函数的箭头语法
- 可选参数以及默认参数

### 语法

- 块级作用域 [let | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
  - `let` 和 `var` 不一样，它不会在全局对象上创建属性
- [instanceof | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) vs [typeof | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

### MDN

- [渲染页面：浏览器的工作原理](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)
