import handler from '../../../verify/handler.js'
import(`../test/${process.env.USE_SOLUTION ? 'solution' : 'index'}.test.js`)

const expectations = [
  {
    condition: ({ mockCalls }) => !mockCalls.includes('fn'),
    message: 'You need to call "mock.fn" at least once'
  }
]

handler(expectations)
