import { shuffleArray } from '../../src/util-functions/array-manipulation/shuffleArray'

describe('shuffleArray function', () => {
  it('should shuffle an array of numbers', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const shuffledArray = shuffleArray(originalArray)

    // Expect that the shuffled array is not the same as the original array
    expect(shuffledArray).not.toEqual(originalArray)

    // Expect that the shuffled array has the same elements
    expect(shuffledArray).toContain(1)
    expect(shuffledArray).toContain(2)
    expect(shuffledArray).toContain(3)
    expect(shuffledArray).toContain(4)
    expect(shuffledArray).toContain(5)

    // Expect that the shuffled array has the same length as the original array
    expect(shuffledArray.length).toBe(originalArray.length)
  })

  it('should shuffle an array of strings', () => {
    const originalArray = ['apple', 'banana', 'mango', 'graps']
    const shuffledArray = shuffleArray(originalArray)

    // Expect that the shuffled array is not the same as the original array
    expect(shuffledArray).not.toEqual(originalArray)

    // Expect that the shuffled array has the same elements
    expect(shuffledArray).toContain('apple')
    expect(shuffledArray).toContain('banana')
    expect(shuffledArray).toContain('mango')
    expect(shuffledArray).toContain('graps')

    // Expect that the shuffled array has the same length as the original array
    expect(shuffledArray.length).toBe(originalArray.length)
  })

  it('should shuffle an array of objects', () => {
    const originalArray = [
      { id: 1, name: 'Kabir' },
      { id: 2, name: 'Ritu' },
      { id: 3, name: 'Jewel' }
    ]
    const shuffledArray = shuffleArray(originalArray)

    // Expect that the shuffled array is not the same as the original array
    expect(shuffledArray).not.toEqual(originalArray)

    // Expect that the shuffled array contains the same objects
    originalArray.forEach(item => {
      expect(shuffledArray).toContainEqual(item)
    })

    // Expect that the shuffled array has the same length as the original array
    expect(shuffledArray.length).toBe(originalArray.length)
  })

  it('should handle an empty array', () => {
    const originalArray: any = []
    const shuffledArray = shuffleArray(originalArray)

    // Expect that the shuffled array is the same as the original array
    expect(shuffledArray).toEqual(originalArray)
  })
})
