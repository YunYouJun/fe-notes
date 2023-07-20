function useState(initialValue) {
  const state = [initialValue] // 使用数组存储状态

  function setState(newValue) {
    state[0] = newValue // 更新状态的值
  }

  return [state[0], setState] // 返回状态和更新函数的数组
}

// 使用示例
const [count, setCount] = useState(0)
console.log(count) // 输出: 0

setCount(1)
console.log(count) // 输出: 1
