# 手写 Promise

手写 [Promise.all() | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

::: tip

Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个 Promise 实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。  
Promise 的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。

:::

<<< @/js/code/promise/all.ts

答案是 `[3, 2, 1]`。

> 如果使用 `push` 而非 `results[i] = res;`，则是 `[1, 2, 3]`。
