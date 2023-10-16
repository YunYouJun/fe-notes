const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3)
  }, 300)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 200)
})

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})

/**
 * 实现 Promise.all()
 * @param promises
 */
function promiseAll(promises: Promise<any>[]) {
  const results = []

  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError('参数应当是一个数组'))

    let resolvedCounter = 0
    for (let i = 0; i < promises.length; i++) {
      const p = promises[i]
      Promise.resolve(p).then(
        (res) => {
          resolvedCounter++
          results[i] = res // [3, 2, 1]
          // results.push(res); // [1, 2, 3]

          if (resolvedCounter === promises.length)
            return resolve(results)
        },
        (reason) => {
          return reject(reason)
        },
      )
    }
  })
}

async function test() {
  const promiseArr = [promise1, promise2, promise3]
  const ans = await promiseAll(promiseArr)
  console.log(ans)
}

test()
