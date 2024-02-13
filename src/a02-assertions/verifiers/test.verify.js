import { test as originalTest } from 'node:test'
export const test = (...args) => {
  console.log('Running new test...')
  console.log(...args)

  return originalTest(...args)
}
