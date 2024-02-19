import reporter from '../test/reporter/index.reporter.js'
import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('reporter function', () => {
  it('should yield 🍾 for test pass events', async () => {
    const events = (async function* () {
      yield* [{ type: 'test:pass' }, { type: 'test:pass' }]
    })()
    const expected = ['🍾', '🍾']
    const actual = []

    for await (const result of reporter(events)) {
      actual.push(result)
    }

    assert.deepStrictEqual(actual, expected)
  })

  it('should yield 🐛 for test fail events', async () => {
    const events = (async function* () {
      yield* [{ type: 'test:fail' }, { type: 'test:fail' }]
    })()
    const expected = ['🐛', '🐛']
    const actual = []

    for await (const result of reporter(events)) {
      actual.push(result)
    }

    assert.deepStrictEqual(actual, expected)
  })

  it('should correctly handle a mix of pass and fail events', async () => {
    const events = (async function* () {
      yield* [
        { type: 'test:pass' },
        { type: 'test:fail' },
        { type: 'test:pass' }
      ]
    })()
    const expected = ['🍾', '🐛', '🍾']
    const actual = []

    for await (const result of reporter(events)) {
      actual.push(result)
    }

    assert.deepStrictEqual(actual, expected)
  })

  it('should ignore unknown event types', async () => {
    const events = (async function* () {
      yield* [{ type: 'unknown' }, { type: 'test:pass' }, { type: 'test:fail' }]
    })()
    const expected = ['🍾', '🐛']
    const actual = []

    for await (const result of reporter(events)) {
      actual.push(result)
    }

    assert.deepStrictEqual(actual, expected)
  })
})
