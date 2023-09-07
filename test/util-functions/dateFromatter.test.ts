import { dateFormatter } from '../../src/util-functions/string-manipulation/dateFormatter'

describe('dateFormatter', () => {
  it('should format a date with default options and locale', () => {
    const formattedDate = dateFormatter('2023-09-06T14:30:00')
    expect(formattedDate).toEqual('September 6, 2023')
  })

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

  it('should handle invalid date', () => {
    const formattedDate = dateFormatter('invalid-date')
    expect(formattedDate).toEqual('Invalid Date')
  })

  it('should handle empty date', () => {
    const formattedDate = dateFormatter('')
    expect(formattedDate).toEqual('')
  })
})
