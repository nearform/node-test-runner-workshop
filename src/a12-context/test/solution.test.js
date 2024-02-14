import { average, sum } from '../src/index.js'
import { test } from 'node:test'
import assert from 'node:assert'

// Grouping tests for `sum` function
test('sum function tests', async t => {
  await t.test('Sum works correctly with valid input', () => {
    assert.deepStrictEqual(sum([1, 2, 3]), 6)
  })

  await t.test('Sum returns 0 in case of empty array', () => {
    assert.deepStrictEqual(sum([]), 0)
  })

  await t.test('Sum throws in case of bad input', () => {
    assert.throws(() => sum('abc'), {
      message: 'Input must be an array of numbers'
    })
  })
})

// Grouping tests for `average` function
test('average function tests', async t => {
  await t.test('Average works correctly with valid input', () => {
    assert.deepStrictEqual(average([1, 2, 3]), 2)
  })

  await t.test('Average returns 0 in case of empty array', () => {
    assert.deepStrictEqual(average([]), 0)
  })

  await t.test('Average throws in case of bad input', () => {
    assert.throws(() => average('abc'), {
      message: 'Input must be an array of numbers'
    })
  })
})
