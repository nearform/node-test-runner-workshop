import { mockCalls } from '../../../verify/test.verify.js'

await import('../test/index.test.js')

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completion...')

  const expectations = [
    {
      condition: !mockCalls.includes('fn'),
      message: 'You need to call "mock.fn" at least once'
    }
  ]

  for (const expectation of expectations) {
    if (expectation.condition) throw new Error(expectation.message)
  }
})
