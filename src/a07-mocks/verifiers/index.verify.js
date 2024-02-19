import { sum as originalSum } from '../src/index.js'
import { mock } from 'node:test'

export const sum = mock.fn(originalSum)
