import { isPasswordMatched } from '../../src/validartors/isPasswordMatched'

describe('isPasswordMatched function', () => {
  it('should return no errors when passwords match and meet the minimum length requirement', () => {
    const result = isPasswordMatched('password123', 'password123', 8)
    expect(result.isTooShort).toBe(false)
    expect(result.isMatched).toBe(false)
  })

  it('should return "isMatched" error when passwords do not match', () => {
    const result = isPasswordMatched('password123', 'password456', 8)
    expect(result.isTooShort).toBe(false)
    expect(result.isMatched).toBe(true)
  })

  it('should return "isTooShort" error when either password is too short', () => {
    const result = isPasswordMatched('pass', 'pass', 8)
    expect(result.isTooShort).toBe(true)
    expect(result.isMatched).toBe(false)
  })

  it('should return "isTooShort" error when both passwords are too short', () => {
    const result = isPasswordMatched('pass', 'pass', 8)
    expect(result.isTooShort).toBe(true)
    expect(result.isMatched).toBe(false)
  })
})
