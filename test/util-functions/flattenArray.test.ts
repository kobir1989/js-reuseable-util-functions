import { flattenArray } from '../../src/util-functions/array-manipulation/flattenArray'

describe('flattenArray', () => {
  it('should flatten a nested array to the specified depth', () => {
    // Test case 1: Flattening to depth 1
    expect(flattenArray([1, 2, 3, [4, 5, 6]], 1)).toEqual([1, 2, 3, 4, 5, 6])

    // Test case 2: Flattening to depth 2
    expect(flattenArray([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]])

    // Test case 3: Flattening to depth 0 (no flattening)
    expect(flattenArray([1, [2, [3, [4]]]], 0)).toEqual([1, [2, [3, [4]]]])
  })

  it('should handle empty arrays', () => {
    expect(flattenArray([], 2)).toEqual([])
  })

  it('should handle arrays with no nested elements', () => {
    expect(flattenArray([1, 2, 3], 2)).toEqual([1, 2, 3])
  })

  it('should handle arrays with mixed types', () => {
    expect(flattenArray([1, 'two', [3, 'four', [5]]], 2)).toEqual([
      1,
      'two',
      3,
      'four',
      5
    ])
  })

  it('should handle negative depth (no flattening)', () => {
    expect(flattenArray([1, [2, [3, [4]]]], -1)).toEqual([1, [2, [3, [4]]]])
  })

  it('should handle non-array elements', () => {
    expect(flattenArray([1, 'two', { key: 'value' }, [4, 5]], 2)).toEqual([
      1,
      'two',
      { key: 'value' },
      4,
      5
    ])
  })
})
