import { chunkArray } from '../../src/util-functions/array-manipulation/chunkArray'

describe('chunkArray function', () => {
  it('should chunk an array into smaller arrays of the specified size', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7]

    // Chunk the array into size 2
    const result1 = chunkArray(inputArray, 2)
    expect(result1).toEqual([[1, 2], [3, 4], [5, 6], [7]])

    // Chunk the array into size 3
    const result2 = chunkArray(inputArray, 3)
    expect(result2).toEqual([[1, 2, 3], [4, 5, 6], [7]])

    // Chunk the array into size 1 (default)
    const result3 = chunkArray(inputArray)
    expect(result3).toEqual([[1], [2], [3], [4], [5], [6], [7]])
  })

  it('should return the original array if size is greater than or equal to the array length', () => {
    const inputArray = [1, 2, 3, 4, 5]

    // Size is equal to array length
    const result1 = chunkArray(inputArray, 5)
    expect(result1).toEqual([inputArray])

    // Size is greater than array length
    const result2 = chunkArray(inputArray, 10)
    expect(result2).toEqual([inputArray])
  })

  // it('should throw an error if the first argument is not an array', () => {
  //   // Passing a string instead of an array
  //   expect(() => chunkArray('not an array', 2)).toThrowError(
  //     'First Argument Should be an Array'
  //   )
  // })
})
