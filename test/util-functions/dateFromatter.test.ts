import { dateFormatter } from '../../src/util-functions/string-manipulation/dateFormatter'

describe('dateFormatter', () => {
  // Test case - 1
  it('should format a date with default options and locale', () => {
    const formattedDate = dateFormatter('2023-09-06T14:30:00')
    expect(formattedDate).toEqual('September 6, 2023')
  })
  // Test case - 2
  it('should format a date with custom options and locale', () => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }
    const formattedDate = dateFormatter('2023-09-06T14:30:00', options, 'bn-BD')
    expect(formattedDate).toEqual('বুধবার, ৬ সেপ্টেম্বর, ২০২৩')
  })
  // Test case - 3
  it('should handle invalid date', () => {
    const formattedDate = dateFormatter('invalid-date')
    expect(formattedDate).toEqual('Invalid Date')
  })
  // Test case - 4
  it('should handle empty date', () => {
    const formattedDate = dateFormatter('')
    expect(formattedDate).toEqual('')
  })
})
