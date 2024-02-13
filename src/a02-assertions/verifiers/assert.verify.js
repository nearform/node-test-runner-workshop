import * as originalAssert from 'node:assert'
import { mock } from 'node:test'

const assert = new Proxy(originalAssert, {
  get(target, prop) {
    const originalMethod = target[prop]

    if (typeof originalMethod === 'function') {
      return mock.fn((...args) => {
        console.log(
          `Calling assert.${String(prop)} with arguments in the test`,
          args
        )
        return originalMethod.apply(target, args)
      })
    }

    return originalMethod
  }
})

export default assert
