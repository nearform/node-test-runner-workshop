import { AsyncLocalStorage } from 'async_hooks'
import t from 'node:test'

const asyncLocalStorage = new AsyncLocalStorage()

export const test = t.mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['testName', args[0]]]), () => {
    return t.test(...args)
  })
})
export function getCurrentTestName() {
  const store = asyncLocalStorage.getStore()
  return store?.get('testName')
}

export const before = t.mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'before']]), () => {
    return t.before(...args)
  })
})

export const beforeEach = t.mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'beforeEach']]), () => {
    return t.beforeEach(...args)
  })
})

export const after = t.mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'after']]), () => {
    return t.after(...args)
  })
})

export const afterEach = t.mock.fn((...args) => {
  asyncLocalStorage.run(new Map([['hook', 'afterEach']]), () => {
    return t.afterEach(...args)
  })
})

export function getHook() {
  const store = asyncLocalStorage.getStore()
  return store?.get('hook')
}

export const only = t.mock.fn(t.only)
export const skip = t.mock.fn(t.skip)
export const todo = t.mock.fn(t.todo)
export const describe = t.mock.fn(t.describe)

export const mockCalls = []
export const mock = new Proxy(t.mock, {
  get(target, prop) {
    const originalMethod = target[prop]

    if (typeof originalMethod === 'function') {
      return (...args) => {
        mockCalls.push(prop)
        return originalMethod.apply(target, args)
      }
    }

    if (prop === 'timers') {
      const timers = target[prop]
      return new Proxy(timers, {
        get(timersTarget, timersProp) {
          const originalMethod = timersTarget[timersProp]
          if (typeof originalMethod === 'function') {
            return (...args) => {
              mockCalls.push('timers.' + timersProp)
              return originalMethod.apply(timersTarget, args)
            }
          }
          return originalMethod
        }
      })
    }

    return originalMethod
  }
})
