import { sum as originalSum, product as originalProduct } from '../src/index.js'
import { mock } from 'node:test'

export const sum = mock.fn(originalSum)
export const product = mock.fn(originalProduct)
