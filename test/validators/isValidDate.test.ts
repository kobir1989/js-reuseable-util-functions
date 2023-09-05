import { isValidDate } from '../../src/validartors/isValidDate'

test('Should be a valid date (Leap Year)', () => {
  expect(isValidDate('2024-02-29')).toBe(true)
})

test('Should not be a valid date (Invalid Month)', () => {
  expect(isValidDate('2023-13-05')).toBe(false)
})

test('Should not be a valid date (Invalid Day)', () => {
  expect(isValidDate('2023-09-31')).toBe(false)
})

test('Should not be a valid date (Invalid Format)', () => {
  expect(isValidDate('09/05/2023')).toBe(false)
})

test('Should not be a valid date (Empty String)', () => {
  expect(isValidDate('')).toBe(false)
})

// test('Should not be a valid date (Null)', () => {
//   expect(isValidDate(null)).toBe(false)
// })

// test('Should not be a valid date (Undefined)', () => {
//   expect(isValidDate(undefined)).toBe(false)
// })
