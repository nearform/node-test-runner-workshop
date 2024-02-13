import * as originalAssert from 'node:assert'

// Since the mock.fn is not working as intended on the proxy
// For now I'm creating an externa array of calls
export const assertCalls = []

const assert = new Proxy(originalAssert, {
  get(target, prop) {
    const originalMethod = target[prop]

    if (typeof originalMethod === 'function') {
      return (...args) => {
        assertCalls.push({
          method: prop,
          arguments: args
        })
        return originalMethod.apply(target, args)
      }
    }

    return originalMethod
  }
})

export default assert
