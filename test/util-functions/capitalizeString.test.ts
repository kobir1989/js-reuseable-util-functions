import { capitalizeString } from '../../src/util-functions/string-manipulation/capitalizeString'

describe('capitalizeString function', () => {
  it('should capitalize the first letter of each word in a string', () => {
    expect(capitalizeString('test this string')).toBe('Test This String')
    expect(capitalizeString('hello world')).toBe('Hello World')
  })

  it('should handle empty string', () => {
    expect(capitalizeString('')).toBe('')
  })

  it('should handle a single word', () => {
    expect(capitalizeString('word')).toBe('Word')
  })

  it('should handle leading and trailing whitespace', () => {
    expect(capitalizeString('   example  ')).toBe('Example')
  })

  it('should handle strings with special characters', () => {
    expect(capitalizeString('my name is john!')).toBe('My Name Is John!')
  })

  it('should not change an already capitalized string', () => {
    expect(capitalizeString('This Is Capitalized')).toBe('This Is Capitalized')
  })
})
