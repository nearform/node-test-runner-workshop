import assert from 'node:assert'
import { delayedHello } from '../src/index.js'
import { test, mock } from 'node:test'

test('delayedHello executes the callback after the specified delay', () => {
  const fn = mock.fn()

  mock.timers.enable({ apis: ['setTimeout'] })
  delayedHello(fn, 5000)

  // Initially, the callback has not been called
  assert.strictEqual(fn.mock.calls.length, 0)
  // Advance time by 5000 milliseconds
  mock.timers.tick(5000)
  // Now, the callback should have been called once
  assert.strictEqual(fn.mock.calls.length, 1)
  assert.strictEqual(fn.mock.calls[0].arguments[0], 'Hello, World!')

  mock.timers.reset()
})
