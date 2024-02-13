import { test as originalTest, mock } from 'node:test'
export const test = mock.fn(originalTest)
