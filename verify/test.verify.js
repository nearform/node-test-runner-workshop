import { AsyncLocalStorage } from 'async_hooks'
import {
  test as originalTest,
  before as originalBefore,
  beforeEach as originalBeforeEach,
  afterEach as originalAfterEach,
  after as originalAfter,
  mock as originalMock,
  only as originalOnly,
  skip as originalSkip,
  todo as originalTodo
} from 'node:test'

const asyncLocalStorage = new AsyncLocalStorage()

export const test = originalMock.fn((...args) => {
  asyncLocalStorage.run(new Map([['testName', args[0]]]), () => {
    return originalTest(...args)
  })
})
export function getCurrentTestName() {
  const store = asyncLocalStorage.getStore()
  return store ? store.get('testName') : undefined
}

export const before = originalMock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'before']]), () => {
    return originalBefore(...args)
  })
})

export const beforeEach = originalMock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'beforeEach']]), () => {
    return originalBeforeEach(...args)
  })
})

export const after = originalMock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'after']]), () => {
    return originalAfter(...args)
  })
})

export const afterEach = originalMock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'afterEach']]), () => {
    return originalAfterEach(...args)
  })
})

export function getHook() {
  const store = asyncLocalStorage.getStore()
  return store ? store.get('hook') : undefined
}

export const only = originalMock.fn(originalOnly)
export const skip = originalMock.fn(originalSkip)
export const todo = originalMock.fn(originalTodo)

export const mockCalls = []
export const mock = new Proxy(originalMock, {
  get(target, prop) {
    const originalMethod = target[prop]

    if (typeof originalMethod === 'function') {
      return (...args) => {
        mockCalls.push(prop)
        return originalMethod.apply(target, args)
      }
    }

    return originalMethod
  }
})
