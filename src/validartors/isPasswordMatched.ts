/***
 * @function isPasswordMatched
 * @param {password}
 * @param {confirmPassword}
 * @param {minLength}
 * @return {object}
 *
 */

interface Error {
  isTooShort: boolean
  isMatched: boolean
}

export const isPasswordMatched = (
  password: string,
  confirmPassword: string,
  minLength: number
): Error => {
  const error: Error = {
    isTooShort: false,
    isMatched: false
  }

  if (!password || !confirmPassword) {
    error.isTooShort = true
  }

  if (password.length < minLength || confirmPassword.length < minLength) {
    error.isTooShort = true
  }

  if (password !== confirmPassword) {
    error.isMatched = true
  }

  return error
}
