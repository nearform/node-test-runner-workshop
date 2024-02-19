import { test, only, skip, todo } from '../../../verify/test.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  const expectations = [
    {
      condition: test.mock.calls.length < 1,
      message: 'You need to call "test" at least once'
    },
    {
      condition: only.mock.calls.length < 1,
      message: 'You need to call "only" at least once'
    },
    {
      condition: skip.mock.calls.length < 1,
      message: 'You need to call "skip" at least once'
    },
    {
      condition: todo.mock.calls.length < 1,
      message: 'You need to call "todo" at least once'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
