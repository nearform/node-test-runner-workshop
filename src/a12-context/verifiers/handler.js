import { test } from '../../../verify/test.verify.js'
import { assertCalls } from '../../../verify/assert.verify.js'
import { sum, sumAsync } from './index.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  console.log(test.mock.calls.length)

  const expectations = [
    {
      condition: test.mock.calls.length < 8,
      message:
        'You need to create a test for both the sum and sumAsync functions'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
