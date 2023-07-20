# Hybrid 混合开发

## JS Bridge 原理

- [JSBridge 原理](https://juejin.cn/post/6844903585268891662)
- [深入浅出JSBridge：从原理到使用](https://juejin.cn/post/6936814903021797389)

### JavaScript 调用 Native

- 拦截 URL Scheme (Schema 和 Scheme 意思接近，这里使用 Scheme [Defining a custom URL scheme for your app | Apple](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app))
- 注入 Native API（Android 4.2 之前有兼容性问题）

> 在 4.2 之前，Android 注入 JavaScript 对象的接口是 addJavascriptInterface，但是这个接口有漏洞，可以被不法分子利用，危害用户的安全，因此在 4.2 中引入新的接口 @JavascriptInterface（上面代码中使用的）来替代这个接口，解决安全问题。所以 Android 注入对对象的方式是 有兼容性问题的。（4.2 之前很多方案都采用拦截 prompt 的方式来实现。）

> Scheme 是指计划、方案或编程语言，而 Schema 是指结构化的模式、图表、数据库定义或数据交换规范。它们是两个不同的概念，在不同的领域有不同的用途和含义。
