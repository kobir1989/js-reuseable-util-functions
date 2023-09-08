import { capitalizeString } from '../../src/util-functions/string-manipulation/capitalizeString'

describe('capitalizeString function', () => {
  // Test case - 1
  it('should capitalize the first letter of each word in a string', () => {
    expect(capitalizeString('test this string')).toBe('Test This String')
    expect(capitalizeString('hello world')).toBe('Hello World')
  })
  // Test case - 2
  it('should handle empty string', () => {
    expect(capitalizeString('')).toBe('')
  })
  // Test case - 3
  it('should handle a single word', () => {
    expect(capitalizeString('word')).toBe('Word')
  })
  // Test case - 4
  it('should handle leading and trailing whitespace', () => {
    expect(capitalizeString('   example  ')).toBe('Example')
  })
  // Test case - 5
  it('should handle strings with special characters', () => {
    expect(capitalizeString('my name is john!')).toBe('My Name Is John!')
  })
  // Test case - 6
  it('should not change an already capitalized string', () => {
    expect(capitalizeString('This Is Capitalized')).toBe('This Is Capitalized')
  })
})
