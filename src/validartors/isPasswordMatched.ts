/***
 * @function isPasswordMatched
 * @param {password}
 * @param {confirmPassword}
 * @param {length}
 * @return {string}
 *
 */

export const isPasswordMatched = (
  password: string,
  confirmPassword: string,
  length: number
): boolean => {
  if (!password && !confirmPassword) return false

  if (password?.length < length) return false

  if (confirmPassword?.length < length) return false

  if (password !== confirmPassword) return false

  return true
}
