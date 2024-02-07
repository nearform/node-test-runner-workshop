import assert from 'node:assert'
import { sum } from '../src/index.js'
import { test, mock, afterEach } from 'node:test'

afterEach(async () => {
  mock.reset()
})

test('spies on a sum', () => {
  const mockedSum = mock.fn(sum)

  assert.deepStrictEqual(mockedSum.mock.calls.length, 0)
  assert.deepStrictEqual(mockedSum([3, 4]), 7)
  assert.deepStrictEqual(mockedSum.mock.calls.length, 1)

  const call = mockedSum.mock.calls[0]
  assert.deepStrictEqual(call.arguments, [[3, 4]])
  assert.deepStrictEqual(call.result, 7)
  assert.deepStrictEqual(call.error, undefined)
})
