import { isValidEmail } from '../../src/validartors/isValidEmail'

describe('isValidEmail validator function', () => {
  it('Returns true if valid email with subdomain', () => {
    expect(isValidEmail('it@sub.example.com')).toBe(true)
  })

  it('Returns true if valid email with uppercase characters', () => {
    expect(isValidEmail('it.User@example.com')).toBe(true)
  })

  it('Returns true if valid email with numbers in local part', () => {
    expect(isValidEmail('user123@example.com')).toBe(true)
  })

  it('Returns false if email is empty', () => {
    expect(isValidEmail('')).toBe(false)
  })

  it('Returns false if email has leading spaces', () => {
    expect(isValidEmail(' it@example.com')).toBe(false)
  })

  it('Returns false if email has trailing spaces', () => {
    expect(isValidEmail('it@example.com ')).toBe(false)
  })

  it('Returns false if email is missing "@" symbol', () => {
    expect(isValidEmail('itexample.com')).toBe(false)
  })

  it('Returns false if email is missing top-level domain', () => {
    expect(isValidEmail('it@example')).toBe(false)
  })

  it('Returns false if email has invalid characters', () => {
    expect(isValidEmail('it@ex@mple.com')).toBe(false)
  })
})
