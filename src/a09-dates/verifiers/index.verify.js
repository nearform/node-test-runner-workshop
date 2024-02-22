import { getCurrentFormattedDate as originalGetCurrentFormattedDate } from '../src/index.js'
import { mock } from 'node:test'

export const getCurrentFormattedDate = mock.fn(originalGetCurrentFormattedDate)
