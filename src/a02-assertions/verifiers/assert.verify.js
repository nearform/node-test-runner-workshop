import * as originalAssert from 'node:assert'
import { getCurrentTestName } from './test.verify.js'

export const assertCalls = []

const assert = new Proxy(originalAssert, {
  get(target, prop) {
    const originalMethod = target[prop]

    if (typeof originalMethod === 'function') {
      return (...args) => {
        assertCalls.push({
          method: prop,
          arguments: args,
          testName: getCurrentTestName()
        })
        return originalMethod.apply(target, args)
      }
    }

    return originalMethod
  }
})

export default assert
