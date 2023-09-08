/**
 * @function isValidUserName
 * @param {string} userName - The username to validate.
 * @param {Array}  disallowedWords  - offensive words
 * @return {boolean}
 */

import { checkArgs } from '../lib/checkArgs'
import { checkArgsArray } from '../lib/checkArgsArray'

export const isValidUserName = (
  userName: string,
  disallowedWords: string[] = ['admin', 'root', 'password']
): boolean => {
  checkArgs(userName, 'string', 'User Name must be string!')

  checkArgsArray(
    disallowedWords,
    'Disallowed Words must be an Array of String!'
  )

  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/ // Allows letters, numbers, and underscores, 3-20 characters long

  // Test if the username matches the defined regex pattern.
  const isValid = usernameRegex.test(userName)
  if (isValid) {
    // Check for disallowed words (e.g., reserved words, offensive content).
    const lowerCaseUserName = userName.toLowerCase()
    if (disallowedWords.includes(lowerCaseUserName)) {
      return false
    }
  }
  return isValid
}
