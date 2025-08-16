# TypeScript

## Ref

- [type-challenges](https://github.com/type-challenges/type-challenges): TypeScript 类型挑战（体操）

## infer

- [infer](https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D)
  - [tuple 转 union](https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%B8%80%E4%BA%9B%E7%94%A8%E4%BE%8B)

## FAQ

### ⚠️ 为什么 enum 无法被 Tree Shaking？

在 TypeScript 中，`enum` 的 Tree Shaking 问题主要源于其编译后的代码结构（立即执行函数 IIFE）会被构建工具视为副作用代码，导致无法被优化移除。

Webpack: https://stackoverflow.com/questions/68720866/why-does-webpack-5-include-my-unused-typescript-enum-exports-even-when-tree-sha

- Vite 使用 ESBuild 转译 TS，enum 会被添加 /*#__PURE__*/ 注释，以被 Rollup Tree Shaking。
