import { test } from './test.verify.js'
import { assertCalls } from './assert.verify.js'

export default function handler(expectations) {
  process.on('exit', () => {
    for (const expectation of expectations) {
      if (
        expectation.condition({
          test,
          assertCalls
        })
      )
        throw new Error(expectation.message)
    }
  })
}
