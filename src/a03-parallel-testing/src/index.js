import { setTimeout } from 'node:timers/promises'

export async function heavyComputationSum(a, b) {
  await setTimeout(2000)
  return a + b
}

export async function heavyComputationMultiply(a, b) {
  await setTimeout(2000)
  return a * b
}
