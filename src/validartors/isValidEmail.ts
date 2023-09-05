/***
 * @function isValidEmail
 * @param {email}
 * @return {boolean}
 */

export const isValidEmail = (email: string): boolean => {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (pattern.test(email.toLowerCase())) {
    return true
  } else {
    return false
  }
}
