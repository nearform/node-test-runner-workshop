import { delayedHello } from './index.verify.js'
import handler from '../../../verify/handler.js'
import(`../test/${process.env.USE_SOLUTION ? 'solution' : 'index'}.test.js`)

const expectations = [
  {
    condition: ({ mockCalls }) => !mockCalls.includes('timers.enable'),
    message: 'You need to call "timers.enable" at least once'
  },
  {
    condition: ({ mockCalls }) => !mockCalls.includes('timers.tick'),
    message: 'You need to call "timers.tick" at least once'
  },
  {
    condition: ({ mockCalls }) => !mockCalls.includes('timers.reset'),
    message: 'You need to call "timers.reset" at least once'
  },
  {
    condition: () => delayedHello.mock.calls.length === 0,
    message: 'You need to call "delayedHello" at least once'
  },
  {
    condition: ({ assertCalls }) =>
      typeof assertCalls.find(a => a.method === 'strictEqual') === 'undefined',
    message: 'You need to call "strictEqual" inside the test'
  }
]

handler(expectations)
