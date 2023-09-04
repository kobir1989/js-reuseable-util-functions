import { isValidEmail } from './isValidEmail'

test('Returns True if valid email', () => {
  expect(isValidEmail(' Ttest@test.com')).toEqual({ isValid: true })
})

test('Returns false if invalid email', () => {
  expect(isValidEmail('E#est@ss.com')).toEqual({
    isValid: false,
    error: 'Invalid email format'
  })
})
