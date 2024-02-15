import { test, describe } from '../../../verify/test.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  const expectations = [
    {
      condition: test.mock.calls.length !== 6,
      message: 'You need to all the tests'
    },
    {
      condition: describe.mock.calls.length !== 2,
      message:
        'You need to use "describe" to create the test suites for the average and sum function'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
