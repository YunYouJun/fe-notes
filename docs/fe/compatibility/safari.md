# Safari 兼容

## Clipboard API

> [Javascript Clipboard API write() does not work in Safari | Stack Overflow](https://stackoverflow.com/questions/66312944/javascript-clipboard-api-write-does-not-work-in-safari)

在 Safari 中，`Clipboard` API 无法在 `await` 之后立即调用。

```bash
报错：`NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.`
```

**解决方案：**

> 通过 `setTimeout` 绕过 Safari 的限制

```ts
const link = await getLink()

setTimeout(() => {
  copy(link).then(() => {
    console.log('copied')
  })
}, 0)
```
