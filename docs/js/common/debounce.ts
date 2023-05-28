/**
 * 防抖函数：函数被触发后 n 秒执行回调，n 秒内被触发，则重新计时
 * @param fn 执行的函数
 * @param delay ms 延迟执行时间
 */
export function debounce(fn: Function, delay = 200) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function print(...args) {
  console.log(...args)
}

const d = debounce(print, 200)
d(1)
d(2)
// 输出：2
