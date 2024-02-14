import { AsyncLocalStorage } from 'async_hooks'
import t from 'node:test'

const asyncLocalStorage = new AsyncLocalStorage()

export const test = t.mock.fn((...args) => {
  asyncLocalStorage.run({ testName: args[0] }, () => {
    return t.test(...args)
  })
})
export function getCurrentTestName() {
  return asyncLocalStorage.getStore().testName
}

export const before = t.mock.fn((...args) => {
  asyncLocalStorage.run({ hook: 'before' }, () => {
    return t.before(...args)
  })
})

export const beforeEach = t.mock.fn((...args) => {
  asyncLocalStorage.run({ hook: 'beforeEach' }, () => {
    return t.beforeEach(...args)
  })
})

export const after = t.mock.fn((...args) => {
  asyncLocalStorage.run({ hook: 'after' }, () => {
    return t.after(...args)
  })
})

export const afterEach = t.mock.fn((...args) => {
  asyncLocalStorage.run({ hook: 'afterEach' }, () => {
    return t.afterEach(...args)
  })
})

export function getHook() {
  return asyncLocalStorage.getStore().hook
}

export const only = t.mock.fn(t.only)
export const skip = t.mock.fn(t.skip)
export const todo = t.mock.fn(t.todo)

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
