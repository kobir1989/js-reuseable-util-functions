/**
 * @function flattenArray
 * @param {array}
 * @param {depth}
 * @throws {Error}
 * @return {Flat Array}
 */

import { checkArgsArray } from '../../lib/checkArgsArray'

export const flattenArray = <T>(array: T[], depth: number): T[] => {
  // check Argument Type
  checkArgsArray(array, 'First Argument should ba an Array!')
  if (depth <= 0 || array.length === 0) return array
  const resultArray: T[] = []

  const recursiveFn = (arr: T[], currentDepth: number) => {
    for (let i = 0; i < array.length; i++) {
      if (currentDepth > 0 && Array.isArray(arr[i])) {
        const flattened = flattenArray(arr[i] as T[], currentDepth - 1)
        resultArray.push(...flattened)
      } else {
        resultArray.push(arr[i])
      }
    }
  }
  recursiveFn(array, depth)
  return resultArray
}
