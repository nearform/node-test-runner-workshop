import assert from 'node:assert'
import { getCurrentFormattedDate } from '../src/index.js'
import { test, mock } from 'node:test'

test('getCurrentFormattedDate returns the correct format', () => {
  // Mock Date to a specific timestamp
  mock.timers.enable({
    apis: ['Date'],
    now: new Date('2024-02-19T00:00:00Z').getTime()
  })

  // Test the function with the mocked date
  assert.strictEqual(getCurrentFormattedDate(), '2024-02-19')

  // Advance time to another specific date
  mock.timers.setTime(new Date('2025-12-25T00:00:00Z').getTime())

  // Test the function again with the new mocked date
  assert.strictEqual(getCurrentFormattedDate(), '2025-12-25')
})
