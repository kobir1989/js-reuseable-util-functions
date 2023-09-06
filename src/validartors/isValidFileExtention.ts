/**
 * @function isValidFileExtension
 * @param {string[]} allowedExtensions - An array of allowed file extensions (e.g., ['jpg', 'png']).
 * @param {string} fileName - The name of the file to validate.
 * @return {boolean}
 * @throws {Error} - If invalid arguments are provided.
 */

import { checkArgs } from '../lib/checkArgs'
import { checkArgsArray } from '../lib/checkArgsArray'

export const isValidFileExtension = (
  allowedExtensions: string[],
  fileName: string
): boolean => {
  checkArgs(fileName, 'string', 'The fileName parameter must be a string.')

  checkArgsArray(
    allowedExtensions,
    'The allowedExtensions parameter must be an array.'
  )

  if (!allowedExtensions.length) {
    throw new Error(
      'The allowedExtensions array must contain at least one allowed extension.'
    )
  }

  const fileExtension = fileName.split('.').pop()
  if (!fileExtension) {
    throw new Error(
      `The fileName "${fileName}" does not have a valid file extension.`
    )
  }

  return allowedExtensions.includes(fileExtension.toLowerCase())
}
