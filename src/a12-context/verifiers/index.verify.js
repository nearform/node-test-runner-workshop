import { sum as originalSum, average as originalAverage } from '../src/index.js'
import { mock } from 'node:test'

export const sum = mock.fn(originalSum)
export const average = mock.fn(originalAverage)
