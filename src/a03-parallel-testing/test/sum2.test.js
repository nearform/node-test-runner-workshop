import assert from 'node:assert'
import { test } from 'node:test'
import { heavyComputationSum } from '../src/index.js'

test('test some heavy computation sum functions', async () => {
  await test('1 + 100_000_000_000', async () => {
    const sum = await heavyComputationSum(1, 100_000_000_000)
    assert.deepStrictEqual(sum, 100_000_000_001)
  })

  await test('2 + 100_000_000_000', async () => {
    const sum = await heavyComputationSum(2, 100_000_000_000)
    assert.deepStrictEqual(sum, 100_000_000_002)
  })

  await test('1000 + 100_000_000_000', async () => {
    const sum = await heavyComputationSum(1000, 100_000_000_000)
    assert.deepStrictEqual(sum, 100_000_001_000)
  })
})
