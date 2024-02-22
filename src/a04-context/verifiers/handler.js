import handler from '../../../verify/handler.js'
import(`../test/${process.env.USE_SOLUTION ? 'solution' : 'index'}.test.js`)

const expectations = [
  {
    condition: ({ test }) => test.mock.calls.length !== 6,
    message: 'You need to all the tests'
  },
  {
    condition: ({ describe }) => describe.mock.calls.length !== 2,
    message:
      'You need to use "describe" to create the test suites for the average and sum function'
  }
]

handler(expectations)
