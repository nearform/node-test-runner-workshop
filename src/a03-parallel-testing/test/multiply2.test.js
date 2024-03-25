import assert from 'node:assert'
import { test } from 'node:test'
import { heavyComputationMultiply } from '../src/index.js'

test('test some heavy computation multiply functions', async () => {
  await test('2 * 100_000_000', async () => {
    const multiply = await heavyComputationMultiply(2, 100_000_000)
    assert.deepStrictEqual(multiply, 200_000_000)
  })

  await test('4 * 100_000_000', async () => {
    const multiply = await heavyComputationMultiply(4, 100_000_000)
    assert.deepStrictEqual(multiply, 400_000_000)
  })

  await test('1000 * 100_000_000', async () => {
    const multiply = await heavyComputationMultiply(1000, 100_000_000)
    assert.deepStrictEqual(multiply, 100_000_000_000)
  })
})
