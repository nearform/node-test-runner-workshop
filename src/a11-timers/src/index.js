export function delayedHello(callback, delay) {
  setTimeout(() => {
    callback('Hello, World!')
  }, delay)
}
