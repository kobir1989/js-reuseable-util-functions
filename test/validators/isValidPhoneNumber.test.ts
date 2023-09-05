import { isValidPhoneNumber } from '../../src/validartors/isValidPhoneNumber'

// Test case for phone number in Bangladesh
test('Should be Valid Phone number in Bangladesh', () => {
  expect(isValidPhoneNumber('01746668064', 'bn-BD')).toBe(true)
})

test('Should not be Valid Phone number in Bangladesh', () => {
  expect(isValidPhoneNumber('81746668064', 'bn-BD')).toBe(false)
})

test('Should not be Valid Phone number in Bangladesh', () => {
  expect(isValidPhoneNumber('8174666806', 'bn-BD')).toBe(false)
})

// Test case for phone number in USA
test('Should be Valid Phone number in United States', () => {
  expect(isValidPhoneNumber('123-457-8900', 'us-US')).toBe(true)
})

test('Should not be Valid Phone number in United States', () => {
  expect(isValidPhoneNumber('12345', 'us-US')).toBe(false)
})

test('Should be Valid Phone number in India', () => {
  expect(isValidPhoneNumber('9876543210', 'en-IN')).toBe(true)
})

test('Should not be Valid Phone number in India', () => {
  expect(isValidPhoneNumber('123', 'en-IN')).toBe(false)
})

// Test case for phone number in Australia
test('Should be Valid Phone number in Australia', () => {
  expect(isValidPhoneNumber('0412345678', 'en-AU')).toBe(true)
})

test('Should not be Valid Phone number in Australia', () => {
  expect(isValidPhoneNumber('12345', 'en-AU')).toBe(false)
})

// Test case for phone number in Canada
test('Should be Valid Phone number in Canada', () => {
  expect(isValidPhoneNumber('4161234567', 'en-CA')).toBe(true)
})

test('Should not be Valid Phone number in Canada', () => {
  expect(isValidPhoneNumber('123456789', 'en-CA')).toBe(false)
})

// Test case for phone number in Germany
test('Should be Valid Phone number in Germany', () => {
  expect(isValidPhoneNumber('015123456789', 'de-DE')).toBe(true)
})

test('Should not be Valid Phone number in Germany', () => {
  expect(isValidPhoneNumber('12345', 'de-DE')).toBe(false)
})

// Test case for phone number in Japan
test('Should be Valid Phone number in Japan', () => {
  expect(isValidPhoneNumber('08012345678', 'ja-JP')).toBe(true)
})

test('Should not be Valid Phone number in Japan', () => {
  expect(isValidPhoneNumber('12345', 'ja-JP')).toBe(false)
})
