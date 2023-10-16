# React

- [Build your own React](https://pomb.us/build-your-own-react/)
- [面试官：手写实现一个useState - 知乎专栏](https://zhuanlan.zhihu.com/p/499785908)

## React Fiber

- [灵魂拷问——有react fiber，为什么不需要vue fiber呢？](https://juejin.cn/post/7077545184807878692?searchId=2023071810523543DB5663F84AA38BCF25)

## FAQ

### React 的 Hook 为什么只能放在最外层？

- [为什么只能在最顶端层呼叫 Hook？从 useState 实作原理来回答](https://www.explainthis.io/zh-hans/swe/why-call-react-hook-top-level)

保证顺序

> 单个组件中编写多个hook，它们的每次调用顺序是由书写的位置决定的，它的内部实现其实是一个链表式的调用。如果不能保证每次的渲染的位置一致就不能保证它能正常的工作。
