import { AsyncLocalStorage } from 'async_hooks'
import {
  test as originalTest,
  before as originalBefore,
  beforeEach as originalBeforeEach,
  afterEach as originalAfterEach,
  after as originalAfter,
  mock
} from 'node:test'

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

export const before = mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'before']]), () => {
    return originalBefore(...args)
  })
})

export const beforeEach = mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'beforeEach']]), () => {
    return originalBeforeEach(...args)
  })
})

export const after = mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'after']]), () => {
    return originalAfter(...args)
  })
})

export const afterEach = mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'afterEach']]), () => {
    return originalAfterEach(...args)
  })
})

export function getHook() {
  const store = asyncLocalStorage.getStore()
  return store ? store.get('hook') : undefined
}
