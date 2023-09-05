/**
 * @function isStrongPassword
 * @param {string} password - The password to check.
 * @param {number} minChars - Minimum number of characters (default is 2).
 * @param {number} minSymbols - Minimum number of symbols (default is 2).
 * @param {number} minNumbers - Minimum number of numbers (default is 2).
 * @return {object}
 */

interface Error {
  hasChar: boolean
  hasSymble: boolean
  hasNumber: boolean
  hasUppercase: boolean
}
export const isStrongPassword = (
  password: string,
  minChars: number = 2,
  minSymbols: number = 2,
  minNumbers: number = 2
): Error => {
  const error: Error = {
    hasChar: true,
    hasSymble: true,
    hasNumber: true,
    hasUppercase: true
  }

  if (!password || password === '') {
    return {
      hasChar: false,
      hasSymble: false,
      hasNumber: false,
      hasUppercase: false
    }
  }

  const charRegex = /[A-Za-z]/g
  const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g
  const numberRegex = /[0-9]/g

  const charCount = (password.match(charRegex) || []).length
  const symbolCount = (password.match(symbolRegex) || []).length
  const numberCount = (password.match(numberRegex) || []).length
  const hasUppercase = /[A-Z]/.test(password)

  if (charCount < minChars) {
    error.hasChar = false
  }

  if (symbolCount < minSymbols) {
    error.hasSymble = false
  }

  if (numberCount < minNumbers) {
    error.hasNumber = false
  }

  if (!hasUppercase) {
    error.hasUppercase = false
  }

  return error
}
