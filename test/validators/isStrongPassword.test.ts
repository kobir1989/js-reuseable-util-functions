import { isStrongPassword } from '../../src/validartors/isStrongPassword'

test('Should be a valid strong password', () => {
  const result = isStrongPassword('Abc$d@123')
  expect(result.hasChar).toBe(true)
  expect(result.hasSymble).toBe(true)
  expect(result.hasNumber).toBe(true)
  expect(result.hasUppercase).toBe(true)
})

test('Should be a valid strong password with custom requirements', () => {
  const result = isStrongPassword('Abc@1', 3, 1, 1)
  expect(result.hasChar).toBe(true)
  expect(result.hasSymble).toBe(true)
  expect(result.hasNumber).toBe(true)
  expect(result.hasUppercase).toBe(true)
})

test('Should not be a valid strong password - missing uppercase - missing one more symble', () => {
  const result = isStrongPassword('abcd@123')
  expect(result.hasChar).toBe(true)
  expect(result.hasSymble).toBe(false)
  expect(result.hasNumber).toBe(true)
  expect(result.hasUppercase).toBe(false)
})

test('Should not be a valid strong password - too short', () => {
  const result = isStrongPassword('A@1', 3, 1, 1)
  expect(result.hasChar).toBe(false)
  expect(result.hasSymble).toBe(true)
  expect(result.hasNumber).toBe(true)
  expect(result.hasUppercase).toBe(true)
})

test('Should not be a valid strong password - missing symbols', () => {
  const result = isStrongPassword('Abcd123')
  expect(result.hasChar).toBe(true)
  expect(result.hasSymble).toBe(false)
  expect(result.hasNumber).toBe(true)
  expect(result.hasUppercase).toBe(true)
})

test('Should not be a valid strong password - missing password', () => {
  const result = isStrongPassword('')
  expect(result.hasChar).toBe(false)
  expect(result.hasSymble).toBe(false)
  expect(result.hasNumber).toBe(false)
  expect(result.hasUppercase).toBe(false)
})

test('Should not be a valid strong password - missing number', () => {
  const result = isStrongPassword('Password@&')
  expect(result.hasChar).toBe(true)
  expect(result.hasSymble).toBe(true)
  expect(result.hasNumber).toBe(false)
  expect(result.hasUppercase).toBe(true)
})
