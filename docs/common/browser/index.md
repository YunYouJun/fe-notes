# 浏览器相关

## [localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 与 [sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)

sessionStorage 属性允许你访问一个，对应当前源的 session Storage 对象。它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。

sessionStorage 在页面刷新时不会丢失。

## [深入：微任务与 Javascript 运行时环境](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)

## CORS

模拟跨域 CORS

> [cors.html](https://fe-notes.yunyoujun.cn/examples/cors.html)

<<< @/public/examples/cors.html

```bash
Access to fetch at 'https://openapi.baidu.com/oauth/2.0/token' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

CORS 无状态码，Status 为 `CORS error`。
