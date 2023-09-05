import { isPasswordMatched } from '../../src/validartors/isPasswordMatched'

test('Both empty passwords should return false', () => {
  expect(isPasswordMatched('', '', 8)).toBe(false)
})

test('Password shorter than the required length should return false', () => {
  expect(isPasswordMatched('123456', '12345678', 8)).toBe(false)
})

test('Confirm Password shorter than the required length should return false', () => {
  expect(isPasswordMatched('1234568', '1234567', 8)).toBe(false)
})

test('Non-matching passwords should return false', () => {
  expect(isPasswordMatched('87654321', '12345678', 8)).toBe(false)
})

test('Matching passwords should return true', () => {
  expect(isPasswordMatched('ab@CDa12p', 'ab@CDa12p', 8)).toBe(true)
})

test('Both empty passwords with length 0 should return true', () => {
  expect(isPasswordMatched('', '', 0)).toBe(false)
})

test('Both empty passwords with length 1 should return false', () => {
  expect(isPasswordMatched('', '', 1)).toBe(false)
})

test('Matching passwords with length 0 should return true', () => {
  expect(isPasswordMatched('a', 'a', 0)).toBe(true)
})

test('Matching passwords with length 1 should return true', () => {
  expect(isPasswordMatched('a', 'a', 1)).toBe(true)
})

test('Non-matching passwords with length 1 should return false', () => {
  expect(isPasswordMatched('a', 'b', 1)).toBe(false)
})
