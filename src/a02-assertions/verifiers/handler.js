import { sum, sumAsync } from './index.verify.js'
import handler from '../../../verify/handler.js'
import(`../test/${process.env.USE_SOLUTION ? 'solution' : 'index'}.test.js`)

const expectations = [
  {
    condition: ({ test }) => test.mock.calls.length < 2,
    message: 'You need to create a test for both the sum and sumAsync functions'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sum' && a.method === 'deepStrictEqual'
      ) === 'undefined',
    message: 'You need to call "deepStrictEqual" inside the "sum" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sum' && a.method === 'ok'
      ) === 'undefined',
    message: 'You need to call "ok" inside the "sum" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sum' && a.method === 'doesNotThrow'
      ) === 'undefined',
    message: 'You need to call "doesNotThrow" inside the "sum" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sum' && a.method === 'throws'
      ) === 'undefined',
    message: 'You need to call "throws" inside the "sum" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sumAsync' && a.method === 'deepStrictEqual'
      ) === 'undefined',
    message: 'You need to call "deepStrictEqual" inside the "sumAsync" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sumAsync' && a.method === 'ok'
      ) === 'undefined',
    message: 'You need to call "ok" inside the "sumAsync" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sumAsync' && a.method === 'doesNotReject'
      ) === 'undefined',
    message: 'You need to call "doesNotReject" inside the "sumAsync" test'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(
        a => a.testName === 'sumAsync' && a.method === 'rejects'
      ) === 'undefined',
    message: 'You need to call "rejects" inside the "sumAsync" test'
  },
  {
    condition: () => sum.mock.calls.length < 1,
    message: 'You need to call "sum" at least once in your test'
  },
  {
    condition: () => sumAsync.mock.calls.length < 1,
    message: 'You need to call "sumAsync" at least once in your test'
  }
]

handler(expectations)
