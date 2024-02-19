import { average, sum, product } from '../src/index.js'
import { test } from 'node:test'
import assert from 'node:assert'

test('sum', () => {
  assert.deepStrictEqual(sum([1, 2, 3]), 6)
  assert.deepStrictEqual(sum([]), 0)
  assert.throws(
    //@ts-expect-error
    () => sum('abc'),
    { message: 'Input must be an array of numbers' }
  )
})

test('product', () => {
  assert.strictEqual(product([2, 3, 4]), 24)
  assert.strictEqual(product([]), 1)
  assert.throws(
    //@ts-expect-error
    () => product('abc'),
    { message: 'Input must be an array of numbers' }
  )
})

test('average', () => {
  assert.strictEqual(average([1, 2, 3]), 2)
  assert.strictEqual(average([]), 0)
  assert.throws(
    //@ts-expect-error
    () => average(null),
    { message: 'Input must be an array of numbers' }
  )
})
