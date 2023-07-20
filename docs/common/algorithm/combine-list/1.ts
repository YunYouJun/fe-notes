function combineList(list: string[][]) {
  const result: string[] = []

  function dfs(index: number, current: string) {
    if (index === list.length) {
      result.push(current)
      return
    }

    for (const char of list[index])
      dfs(index + 1, current + char)
  }

  dfs(0, '')

  return result
}

console.log(
  combineList([['a', 'b'], ['n', 'm'], ['0', '1']]),
)
