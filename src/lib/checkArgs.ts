/**
 * @function checkArgs
 * @param {input}
 * @param {type}
 * @param {string}
 * @throws {Error}
 */

export const checkArgs = <T>(input: T, type: string, message: string): void => {
  if (typeof input !== type) {
    throw new Error(message)
  }
}
