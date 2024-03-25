import assert from 'node:assert'
import { test } from 'node:test'
import { heavyComputationMultiply } from '../src/index.js'

test('test some heavy computation multiply functions', async () => {
  await test('2 * 100_000_000', async () => {
    const product = await heavyComputationMultiply(2, 100_000_000)
    assert.deepStrictEqual(product, 200_000_000)
  })

  await test('4 * 100_000_000', async () => {
    const product = await heavyComputationMultiply(4, 100_000_000)
    assert.deepStrictEqual(product, 400_000_000)
  })

  await test('1000 * 100_000_000', async () => {
    const product = await heavyComputationMultiply(1000, 100_000_000)
    assert.deepStrictEqual(product, 100_000_000_000)
  })
})
