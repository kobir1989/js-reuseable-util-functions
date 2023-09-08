/**
 * @function dataFormatter
 * @param {date}
 * @param {options} - object
 * @param {locale}
 * @throws {Error}
 * @return {fomatted date string}
 */

import { checkArgs } from '../../lib/checkArgs'

export const dateFormatter = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  locale: string = 'en-US'
): string => {
  // Check if the input argument is valid
  checkArgs(date, 'string', 'Date must be a String!')
  checkArgs(options, 'object', 'Options must be object with key value pair!')
  checkArgs(locale, 'string', 'Argument must be a string!')
  if (date.trim() === '') return date

  try {
    const formatedDate = new Date(date).toLocaleDateString(
      locale, // will be formatted in Locale lang:
      // toLocaleDateStringOptions
      options
    )
    return formatedDate
  } catch (error: unknown) {
    return 'Invalid Date format'
  }
}

// const options: Intl.DateTimeFormatOptions = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// }

// dateFormatter('2023-09-06T14:30:00', options, 'en-US')
