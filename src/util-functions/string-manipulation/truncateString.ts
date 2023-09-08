/**
 * @function truncatedString
 * @param {string} string - The input string to truncate.
 * @param {number} [start=0] - The starting index for truncation.
 * @param {number} [end=30] - The ending index for truncation.
 * @return {string} - The truncated string.
 * @throws {Error} - Throws an error if the arguments are of incorrect types.
 */

import { checkArgs } from '../../lib/checkArgs'

export const truncatedString = (
  string: string,
  start: number = 0,
  end: number = 30
) => {
  checkArgs(string, 'string', 'Argument should be a String!')
  checkArgs(start, 'number', 'Argument should be a Number!')
  checkArgs(end, 'number', 'Argument should be a Number!')

  const trimedString = string.trim()

  // Return the original string if it's empty or if start >= end
  if (trimedString === '' || start >= end) {
    return trimedString
  }

  if (start >= string?.length) {
    return string
  }

  if (string?.length <= end) {
    return trimedString.slice(start, string?.length)
  }

  return trimedString.slice(start, end) + '...'
}
