/**************************************************************************
 * @function isValidEmail takes an email address as input and uses the test() method of the regex pattern to check if the email matches the given pattern.
 * @param {email}
 * @return {Object} - {isValid: true} - if error return {isValid: false, error: 'Invalid email format}
 ****************************************************************************/

export const isValidEmail = (
  email: string
): { isValid: boolean; error?: string } => {
  // Trim leading and trailing spaces
  email = email.trim()

  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (pattern.test(email.toLowerCase())) {
    return { isValid: true }
  } else {
    return { isValid: false, error: 'Invalid email format' }
  }
}
