function combineList2(list: string[][]) {
  if (list.length === 0)
    return []

  let result: string[] = []

  for (const sublist of list) {
    const newResult: string[] = []

    for (const char of sublist) {
      if (result.length === 0) {
        newResult.push(char)
      }
      else {
        for (const item of result)
          newResult.push(item + char)
      }
    }

    result = newResult
  }

  return result
}

console.log(
  combineList2([['a', 'b'], ['n', 'm'], ['0', '1']]),
)
