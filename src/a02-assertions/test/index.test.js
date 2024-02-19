import assert from 'node:assert'
import { test } from 'node:test'
import { sum, sumAsync } from '../src/index.js'

// assert.ok
// assert.doesNotThrow
// assert.deepStrictEqual
// assert.throws
// assert.doesNotReject
// assert.rejects
// assert.match
// assert.doesNotMatch

test('sum', () => {
  assert.deepStrictEqual(sum([1, 2, 3]), 6)
  // "typeof sum return is number"
  // "empty array is valid"
  // "sum of empty array is 0"
  // "throws error for non-array input in sum"
})

test('sumAsync', async () => {
  assert.deepStrictEqual(await sumAsync([1, 2, 3]), 6)
  // "typeof sum return is number"
  // "empty array is valid"
  // "sum of empty array is 0"
  // "rejects for non-array input in sumAsync"
})
