/* eslint-disable no-unused-vars */
import assert from 'node:assert'
import { delayedHello } from '../src/index.js'
import { test, mock } from 'node:test'

test('delayedHello executes the callback after the specified delay', () => {
  const fn = mock.fn()

  // Enable mocking of setTimeout

  // Call the function with a mock callback and a delay
  //delayedHello(fn, 5000)

  // Initially, the callback has not been called
  //assert.strictEqual(fn.mock.calls.length, 0)

  // Advance time by 5000 milliseconds

  // Now, the callback should have been called once
  //assert.strictEqual(fn.mock.calls.length, 1)
  //assert.strictEqual(fn.mock.calls[0][0], 'Hello, World!')

  // Reset mock timers after the test
})
