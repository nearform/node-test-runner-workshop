import {
  sum as originalSum,
  sumAsync as originalSumAsync
} from '../src/index.js'
import { mock } from 'node:test'

export const sum = mock.fn(originalSum)
export const sumAsync = mock.fn(originalSumAsync)
