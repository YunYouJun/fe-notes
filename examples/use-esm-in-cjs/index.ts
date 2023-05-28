async function main() {
  const { default: fetch } = await import('node-fetch')

  fetch('https://www.baidu.com').then((res) => {
    console.log(res)
  })
}

main()
