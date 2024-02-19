import assert from 'node:assert'
import { sum, product } from '../src/index.js'
import { only, skip, test, todo } from 'node:test'

skip('testing product', () => {
  assert.strictEqual(product([1, 2, 3]), 6)
})

only('testing sum', () => {
  assert.strictEqual(sum([1, 2, 27]), 30)
})

todo('still work in progress', () => {
  assert.strictEqual(2, 2)
})

test('should run normally', () => {
  assert.strictEqual(sum([1, 2, 3]), 6)
})
