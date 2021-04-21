# 安全相关

## 对称加密，非对称加密

`对称加密`：指的就是加、解密使用的同是一串密钥，所以被称做对称加密。对称加密只有一个密钥作为私钥。

常见的对称加密算法：DES，AES 等。

`非对称加密`：指的是加、解密使用不同的密钥，一把作为公开的公钥，另一把作为私钥。公钥加密的信息，只有私钥才能解密。反之，私钥加密的信息，只有公钥才能解密。

最常用的非对称加密算法：RSA

> [对称加密、非对称加密、RSA(总结)](https://juejin.cn/post/6844903584073515016)

## 网络攻击的方式

> [浅谈常用的几种 web 攻击方式](https://zhuanlan.zhihu.com/p/44302803)

- Distributed Denial of Service （DDoS， 分布式拒绝服务）
- 跨站点请求伪造（CSRF，Cross-Site Request Forgeries）
- SQL Injection （SQL 注入）
- XSS 攻击（Cross-Site scripting）
- Http Heads 攻击
- Cookie 攻击
- 重定向攻击
- 上传文件攻击

## 鉴权方式

### JSON Web Token

> [JSON Web Token 入门教程](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
