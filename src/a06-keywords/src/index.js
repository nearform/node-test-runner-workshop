export function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array of numbers')
  }

  return numbers.reduce((acc, num) => acc + num, 0)
}

export function product() {
  throw Error('Still working on it')
}
