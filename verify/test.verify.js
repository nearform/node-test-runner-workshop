import { AsyncLocalStorage } from 'async_hooks'
import { test as originalTest, mock } from 'node:test'

const asyncLocalStorage = new AsyncLocalStorage()

export const test = mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['testName', args[0]]]), () => {
    return originalTest(...args)
  })
})

export function getCurrentTestName() {
  const store = asyncLocalStorage.getStore()
  return store ? store.get('testName') : undefined
}
