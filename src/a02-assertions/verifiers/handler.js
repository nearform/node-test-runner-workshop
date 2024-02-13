import { test } from './test.verify.js'
import { assertCalls } from './assert.verify.js'
import { sum, sumAsync } from './index.verify.js'

async function main() {
  try {
    await import('../test/index.test.js')
  } catch (error) {
    console.error('Error occurred in the test file:', error)
  }
}

main()

// I'm creating this wrapper in order to be able to spy the process.exit
process.on('exit', () => {
  console.log('Validating the test completeness...')
  if (test.mock.calls.length < 2)
    throw new Error(
      'You need to create a test for both the sum and sumAsync functions'
    )

  if (
    typeof assertCalls.find(
      a => a.testName === 'sum' && a.method === 'deepStrictEqual'
    ) === 'undefined'
  )
    throw new Error('You need to call "deepStrictEqual" inside the "sum" test')

  if (
    typeof assertCalls.find(
      a => a.testName === 'sumAsync' && a.method === 'deepStrictEqual'
    ) === 'undefined'
  )
    throw new Error(
      'You need to call "deepStrictEqual" inside the "sumAsync" test'
    )

  if (sum.mock.calls.length < 1)
    throw new Error('You need to call "sum" at least once in your test')

  if (sumAsync.mock.calls.length < 1)
    throw new Error('You need to call "sumAsync" at least once in your test')
})
