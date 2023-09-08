import { isValidPhoneNumber } from '../../src/validartors/isValidPhoneNumber'

// it case for phone number in Bangladesh
describe('isValidPhoneNumber validator function', () => {
  it('Should be Valid Phone number in Bangladesh', () => {
    expect(isValidPhoneNumber('01746668064', 'bn-BD')).toBe(true)
  })

  it('Should not be Valid Phone number in Bangladesh', () => {
    expect(isValidPhoneNumber('81746668064', 'bn-BD')).toBe(false)
  })

  it('Should not be Valid Phone number in Bangladesh', () => {
    expect(isValidPhoneNumber('8174666806', 'bn-BD')).toBe(false)
  })

  // it case for phone number in USA
  it('Should be Valid Phone number in United States', () => {
    expect(isValidPhoneNumber('123-457-8900', 'us-US')).toBe(true)
  })

  it('Should not be Valid Phone number in United States', () => {
    expect(isValidPhoneNumber('12345', 'us-US')).toBe(false)
  })

  it('Should be Valid Phone number in India', () => {
    expect(isValidPhoneNumber('9876543210', 'en-IN')).toBe(true)
  })

  it('Should not be Valid Phone number in India', () => {
    expect(isValidPhoneNumber('123', 'en-IN')).toBe(false)
  })

  // it case for phone number in Australia
  it('Should be Valid Phone number in Australia', () => {
    expect(isValidPhoneNumber('0412345678', 'en-AU')).toBe(true)
  })

  it('Should not be Valid Phone number in Australia', () => {
    expect(isValidPhoneNumber('12345', 'en-AU')).toBe(false)
  })

  // it case for phone number in Canada
  it('Should be Valid Phone number in Canada', () => {
    expect(isValidPhoneNumber('4161234567', 'en-CA')).toBe(true)
  })

  it('Should not be Valid Phone number in Canada', () => {
    expect(isValidPhoneNumber('123456789', 'en-CA')).toBe(false)
  })

  // it case for phone number in Germany
  it('Should be Valid Phone number in Germany', () => {
    expect(isValidPhoneNumber('015123456789', 'de-DE')).toBe(true)
  })

  it('Should not be Valid Phone number in Germany', () => {
    expect(isValidPhoneNumber('12345', 'de-DE')).toBe(false)
  })

  // it case for phone number in Japan
  it('Should be Valid Phone number in Japan', () => {
    expect(isValidPhoneNumber('08012345678', 'ja-JP')).toBe(true)
  })

  it('Should not be Valid Phone number in Japan', () => {
    expect(isValidPhoneNumber('12345', 'ja-JP')).toBe(false)
  })
})
