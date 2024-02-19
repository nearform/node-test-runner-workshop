import assert from 'node:assert'
import { test } from 'node:test'
import { sum, sumAsync } from '../src/index.js'

test('sum', () => {
  assert.deepStrictEqual(sum([1, 2, 3]), 6)
  assert.ok(typeof sum([1, 2, 3]) === 'number')
  assert.doesNotThrow(() => sum([]), 0)
  assert.deepStrictEqual(sum([]), 0)
  assert.throws(() => sum('abc'), {
    message: 'Input must be an array of numbers'
  })
})

test('sumAsync', async () => {
  assert.deepStrictEqual(await sumAsync([1, 2, 3]), 6)
  assert.ok(typeof (await sumAsync([1, 2, 3])) === 'number')
  await assert.doesNotReject(() => sumAsync([]), 0)
  assert.deepStrictEqual(await sumAsync([]), 0)
  await assert.rejects(() => sumAsync('abc'), {
    message: 'Input must be an array of numbers'
  })
})

// extra assertions not covered by example
assert.match('PLACEHOLDER', /PLACEHOLDER/)
assert.doesNotMatch('foo', /PLACEHOLDER/)
