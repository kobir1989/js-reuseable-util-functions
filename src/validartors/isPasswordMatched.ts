import { checkArgs } from '../lib/checkArgs'

/**
 * @function isPasswordMatched
 * @param {string} password - The password to compare.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {number} minLength - The minimum length for the password.
 * @return {Error} - An object indicating the errors.
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
  // throw Error if password and confirmPassword type is not string.
  checkArgs(password, 'string', 'Password should be strings!')
  checkArgs(
    confirmPassword,
    'string',
    'Confirm Password Password should be strings!'
  )

  const error: Error = {
    isTooShort:
      password.length < minLength || confirmPassword.length < minLength,
    isMatched: password === confirmPassword
  }

  return error
}
