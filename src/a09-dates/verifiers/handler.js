import { getCurrentFormattedDate } from './index.verify.js'
import { mockCalls } from '../../../verify/test.verify.js'
import { assertCalls } from '../../../verify/assert.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  const expectations = [
    {
      condition: !mockCalls.includes('timers.enable'),
      message: 'You need to call "timers.enable" at least once'
    },
    {
      condition: !mockCalls.includes('timers.setTime'),
      message: 'You need to call "timers.setTime" at least once'
    },
    {
      condition: getCurrentFormattedDate.mock.calls.length === 0,
      message: 'You need to call "getCurrentFormattedDate" at least once'
    },
    {
      condition:
        typeof assertCalls.find(a => a.method === 'strictEqual') ===
        'undefined',
      message: 'You need to call "strictEqual" inside the test'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
