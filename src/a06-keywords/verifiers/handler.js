import handler from '../../../verify/handler.js'
import(`../test/${process.env.USE_SOLUTION ? 'solution' : 'index'}.test.js`)

const expectations = [
  {
    condition: ({ test }) => test.mock.calls.length < 1,
    message: 'You need to call "test" at least once'
  },
  {
    condition: ({ only }) => only.mock.calls.length < 1,
    message: 'You need to call "only" at least once'
  },
  {
    condition: ({ skip }) => skip.mock.calls.length < 1,
    message: 'You need to call "skip" at least once'
  },
  {
    condition: ({ todo }) => todo.mock.calls.length < 1,
    message: 'You need to call "todo" at least once'
  }
]

handler(expectations)
