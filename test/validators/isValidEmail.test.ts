import { isValidEmail } from '../../src/validartors/isValidEmail'

test('Returns true if valid email with subdomain', () => {
  expect(isValidEmail('test@sub.example.com')).toBe(true)
})

test('Returns true if valid email with uppercase characters', () => {
  expect(isValidEmail('Test.User@example.com')).toBe(true)
})

test('Returns true if valid email with numbers in local part', () => {
  expect(isValidEmail('user123@example.com')).toBe(true)
})

test('Returns false if email is empty', () => {
  expect(isValidEmail('')).toBe(false)
})

test('Returns false if email has leading spaces', () => {
  expect(isValidEmail(' test@example.com')).toBe(false)
})

test('Returns false if email has trailing spaces', () => {
  expect(isValidEmail('test@example.com ')).toBe(false)
})

test('Returns false if email is missing "@" symbol', () => {
  expect(isValidEmail('testexample.com')).toBe(false)
})

test('Returns false if email is missing top-level domain', () => {
  expect(isValidEmail('test@example')).toBe(false)
})

test('Returns false if email has invalid characters', () => {
  expect(isValidEmail('test@ex@mple.com')).toBe(false)
})
