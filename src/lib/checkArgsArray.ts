/**
 * @function checkArgsArray
 * @param {array}
 * @param {message}
 * @throws {Error}
 */

export const checkArgsArray = <T>(array: T, message: string): void => {
  if (!Array.isArray(array)) {
    throw new Error(message)
  }
}
