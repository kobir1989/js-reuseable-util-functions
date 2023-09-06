import { sluggifiedString } from '../../src/util-functions/string-manipulation/sluggifiedString'

describe('sluggifiedString function', () => {
  it('should convert a basic string to lowercase and replace spaces with hyphens', () => {
    const input = 'This is a test string'
    const expected = 'this-is-a-test-string'
    const result = sluggifiedString(input)
    expect(result).toBe(expected)
  })

  it('should handle different separators', () => {
    const input = 'Custom separator example'
    const expectedHyphen = 'custom-separator-example'
    const expectedUnderscore = 'custom_separator_example'

    const resultHyphen = sluggifiedString(input, { separator: '-' })
    const resultUnderscore = sluggifiedString(input, { separator: '_' })

    expect(resultHyphen).toBe(expectedHyphen)
    expect(resultUnderscore).toBe(expectedUnderscore)
  })

  it('should handle case options', () => {
    const input = 'Test Case Example'
    const expectedLower = 'test-case-example'
    const expectedUpper = 'TEST-CASE-EXAMPLE'
    const expectedTitle = 'Test-Case-Example'

    const resultLower = sluggifiedString(input, { case: 'lower' })
    const resultUpper = sluggifiedString(input, { case: 'upper' })
    const resultTitle = sluggifiedString(input, { case: 'title' })

    expect(resultLower).toBe(expectedLower)
    expect(resultUpper).toBe(expectedUpper)
    expect(resultTitle).toBe(expectedTitle)
  })

  it('should remove stop words if specified', () => {
    const input = 'This is a sample title'
    const expectedWithoutStopWords = 'sample-title'
    const expectedWithStopWords = 'this-is-a-sample-title'

    const resultWithStopWords = sluggifiedString(input, {
      removeStopWords: true,
      stopWords: ['this', 'is', 'a']
    })
    const resultWithoutStopWords = sluggifiedString(input, {
      removeStopWords: false
    })

    expect(resultWithStopWords).toBe(expectedWithoutStopWords)
    expect(resultWithoutStopWords).toBe(expectedWithStopWords)
  })

  it('should truncate the slug to the specified max length', () => {
    const input = 'This is a very long title that needs to be shortened'
    const expectedShortened = 'this-is-a-very-long-title-that'

    const resultShortened = sluggifiedString(input, {
      maxLength: 30
    })

    expect(resultShortened).toBe(expectedShortened)
  })

  it('should throw an error for an empty input string', () => {
    const emptyInput = ''
    expect(() => sluggifiedString(emptyInput)).toThrow(
      'Input string cannot be empty'
    )
  })
})
