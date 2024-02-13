import {
  sum as originalSum,
  sumAsync as originalSumAsync
} from '../src/index.js'

export function sum(...args) {
  console.log('Sum called: ', ...args)
  return originalSum(...args)
}

export async function sumAsync(...args) {
  console.log('Sum async called: ', ...args)
  return originalSumAsync(...args)
}
