---
title: 米哈游
outline: deep
---

## Questions

> 参考链接：
> [米哈游校招前端一面｜牛客](https://www.nowcoder.com/discuss/353158458235101184?sourceSSR=users)

### 自我介绍

面试官您好，我叫 XXX。

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

### 事件循环是什么？宏任务和微任务是什么？

- [事件循环：微任务和宏任务](https://zh.javascript.info/event-loop)

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

---

> [米哈游前端一面（社招一年）｜牛客](https://www.nowcoder.com/discuss/355772881404522496)

### 说说浏览器缓存，如果命中强缓存返回的状态码是多少

- [http面试必会的：强制缓存和协商缓存](https://juejin.cn/post/6844903838768431118)

浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力。

> 请求标头 根据HTTP 1.1 协议，请求头名称不区分大小写。 例如， `Content-Type` 和 `content-type` 是一样的。

#### 浏览器缓存

- [HTTP Caching | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
- [缓存（二）——浏览器缓存机制：强缓存、协商缓存](https://github.com/amandakelake/blog/issues/41)

通常浏览器缓存策略分为两种：**强缓存**和**协商缓存**

- 强缓存：浏览器不会向服务器发送请求，从本地缓存中读取文件并返回 「Status Code: 200 OK」。
- 协商缓存：向服务器发送请求，服务器根据该请求 Request Header 参数判断是否命中协商缓存，若命中，则返回 304 状态码与新的 Response Header 告知浏览器从缓存中读取资源。

> 基本原理

1. 浏览器在加载资源时，根据请求头的 `Expires` 和 `Cache-Control` 判断是否命中强缓存，是则直接从缓存读取资源，不会发请求到服务器。
2. 如果没有命中强缓存，浏览器一定会发送一个请求到服务器，通过 `Last-Modified` 和 `ETag` 验证资源是否命中协商缓存，如果命中，服务器会将这个请求返回，但是不会返回这个资源的数据，依然是从缓存中读取资源
3. 如果前面两者都没有命中，直接从服务器加载资源

2、相同点
如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；

3、不同点
强缓存不发请求到服务器，协商缓存会发请求到服务器。

- `Cache-Control` —— 请求服务器之前
- `Expires` —— 请求服务器之前
- `If-None-Match` (Etag) —— 请求服务器
- `If-Modified-Since` (Last-Modified) —— 请求服务器

##### Expires

`Expires` 是 HTTP1.0 提出的一个表示资源过期时间的 Header，它描述的是一个绝对时间，由服务器返回。
`Expires` 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。

##### Cache-Control

`Cache-Control` 出现于 HTTP / 1.1，优先级高于 `Expires` ，表示的是相对时间。

- `no-cache` 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证 (协商缓存验证)。
- `no-store` 缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。
- `public` 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有 `max-age` 指令或 `Expires` 消息头；2. 该响应对应的请求方法是 `POST` 。）
- `private` 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。

`max-age=<seconds>`

设置缓存存储的最大周期，超过这个时间缓存被认为过期 (单位秒)。与Expires相反，时间是相对于请求的时间。

##### ETag/If-None-Match

> `Last-Modified` 表示本地文件最后修改日期，浏览器会在 Request Header 中加上 `If-Modified-Since`（上次返回的 Last-Modified 值），询问服务器在该日期后资源是否有更新，有则将新资源发送回来。

`ETag` 响应标头的值是服务器生成的任意值。服务器对于生成值没有任何限制，因此服务器可以根据他们选择的任何方式自由设置值——例如主体内容的哈希或版本号。

```bash
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
ETag: "deadbeef"
Cache-Control: max-age=3600
```

如果该响应是陈旧的，则客户端获取缓存响应的 `ETag` 响应标头的值，并将其放入 `If-None-Match` 请求标头中，以询问服务器资源是否已被修改：

```bash
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "deadbeef"
```

如果服务器为请求的资源确定的 `ETag` 标头的值与请求中的 `If-None-Match` 值相同，则服务器将返回 `304 Not Modified`。

但是，如果服务器确定请求的资源现在应该具有不同的 `ETag` 值，则服务器将其改为 `200 OK` 和资源的最新版本进行响应。

::: tip
备注： 在评估如何使用 `ETag` 和 `Last-Modified` 时，请考虑以下几点：在缓存重新验证期间，如果 `ETag` 和 `Last-Modified` 都存在，则 `ETag` 优先。因此，如果你只考虑缓存，你可能会认为 `Last-Modified` 是不必要的。然而，`Last-Modified` 不仅仅对缓存有用；相反，它是一个标准的 HTTP 标头，内容管理 (CMS) 系统也使用它来显示上次修改时间，由爬虫调整爬取频率，以及用于其他各种目的。所以考虑到整个 HTTP 生态系统，最好同时提供 `ETag` 和 `Last-Modified`。
:::

- `200` 强缓存 `Expires` / `Cache-Control` 失效时，返回新的资源。
- `200 (from cache)` 强缓存 `Expires` / `Cache-Control` 有效时，`Cache-Control` 优先于 `Expires` 时，返回本地缓存的资源。
  - `200 (from disk cache)`
  - `200 (from memory cache)`
- `304 (Not Modified)`: 协商缓存 `Last-modified`/`ETag` 没有过期时，服务端返回状态码 `304`。

---

3、静态资源能判断CDN缓存么？
4、css相关：如果父元素有with，heigh，position为相对定位，子元素为绝对定位（没with，height），此时子元素的with，height为多少，如果子元素有top和left，那子元素的with，height又是多少
5、Flex: 1 代表什么意思
6、JS判断类型的方式，挨个说原理
7、Object.prototype.toString.call()判断 Class A返回的是什么？我能改变他的返回类型么？（涉及到Object.prototype.toString.call的判断原理）
8、说下EnventLoop，微任务全部是异步的么？ async是微任务么，你怎么理解的？ 微任务都是异步的么你怎么理解的
9、React父子组件通信
10、说下发布订阅的实现，如果我要取消我的订阅怎么取消呢？
11、说下什么情况下使用context这种通信方式
12、说下React原理你理解多少，讲讲Diff算法，React调度机制的优先级是怎么样的？
13、Hook你知道多少，useMemo和useCallBack说说呢？
14、如果我在条件语句后面使用useState会有问题么，比如这个条件语句会进行return？
15、Flutter中的final和const的区别是什么，Flutter实现一个有宽高的自适应布局
16、防抖节流说说呢
17、说说内存泄漏有哪几种情况
18、反问
