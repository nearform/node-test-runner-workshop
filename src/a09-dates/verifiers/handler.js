import { getCurrentFormattedDate } from './index.verify.js'
import handler from '../../../verify/handler.js'
import '../test/index.test.js'

const expectations = [
  {
    condition: ({ mockCalls }) => !mockCalls.includes('timers.enable'),
    message: 'You need to call "timers.enable" at least once'
  },
  {
    condition: ({ mockCalls }) => !mockCalls.includes('timers.setTime'),
    message: 'You need to call "timers.setTime" at least once'
  },
  {
    condition: () => getCurrentFormattedDate.mock.calls.length === 0,
    message: 'You need to call "getCurrentFormattedDate" at least once'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(a => a.method === 'strictEqual') === 'undefined',
    message: 'You need to call "strictEqual" inside the test'
  }
]

handler(expectations)
