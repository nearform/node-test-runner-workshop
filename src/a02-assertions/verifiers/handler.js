import { test } from '../../../verify/test.verify.js'
import { assertCalls } from '../../../verify/assert.verify.js'
import { sum, sumAsync } from './index.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  const expectations = [
    {
      condition: test.mock.calls.length < 2,
      message:
        'You need to create a test for both the sum and sumAsync functions'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sum' && a.method === 'deepStrictEqual'
        ) === 'undefined',
      message: 'You need to call "deepStrictEqual" inside the "sum" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sum' && a.method === 'ok'
        ) === 'undefined',
      message: 'You need to call "ok" inside the "sum" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sum' && a.method === 'doesNotThrow'
        ) === 'undefined',
      message: 'You need to call "doesNotThrow" inside the "sum" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sum' && a.method === 'throws'
        ) === 'undefined',
      message: 'You need to call "throws" inside the "sum" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sumAsync' && a.method === 'deepStrictEqual'
        ) === 'undefined',
      message: 'You need to call "deepStrictEqual" inside the "sumAsync" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sumAsync' && a.method === 'ok'
        ) === 'undefined',
      message: 'You need to call "ok" inside the "sumAsync" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sumAsync' && a.method === 'doesNotReject'
        ) === 'undefined',
      message: 'You need to call "doesNotReject" inside the "sumAsync" test'
    },
    {
      condition:
        typeof assertCalls.find(
          a => a.testName === 'sumAsync' && a.method === 'rejects'
        ) === 'undefined',
      message: 'You need to call "rejects" inside the "sumAsync" test'
    },
    {
      condition: sum.mock.calls.length < 1,
      message: 'You need to call "sum" at least once in your test'
    },
    {
      condition: sumAsync.mock.calls.length < 1,
      message: 'You need to call "sumAsync" at least once in your test'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
