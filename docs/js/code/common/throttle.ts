/**
 * 节流函数：单位时间内，只有一次触发事件的回调函数执行
 * @param fn
 * @param threshold ms 单位时间
 */
export function throttle(fn: Function, threshold = 200) {
  // 第一次立即执行
  let timer
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
      }, threshold)
    }
  }
}

function print(...args) {
  console.log(...args)
}

const t = throttle(print, 200)

t(1)
t(2)
// 输出: 1
