export class U {
  queue: Promise<any> = Promise.resolve()

  console(msg: string) {
    this.queue = this.queue.then(() => {
      console.log(msg)
    })
    return this
  }

  setTimeout(duration: number) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, duration)
      })
    })
    return this
  }
}
