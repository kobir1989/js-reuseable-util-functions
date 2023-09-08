/**
 * @function sluggifiedString
 * @param {string}
 * @param {options} - options object {}
 * @return {sluggified string}
 * @throws {Error}
 */

import { checkArgs } from '../../lib/checkArgs'

// options interface
interface SluggifyOptions {
  separator?: string
  removeStopWords?: boolean
  stopWords?: string[]
  case?: 'lower' | 'upper' | 'title'
  maxLength?: number
}

// Placeholder for removing stop words
const removeStopWords = (input: string, stopWords: string[]) => {
  // Implement logic to remove stop words from the input string
  const words = input.split(' ')
  const filteredWords = words.filter(
    word => !stopWords.includes(word.toLowerCase())
  )
  return filteredWords.join(' ')
}

// Placeholder for converting a string to title case
const titleCase = (input: string) => {
  return input
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const sluggifiedString = (
  string: string,
  options: SluggifyOptions = {}
): string => {
  // Check if the input argument is valid
  checkArgs(string, 'string', 'Argument should be a string')
  checkArgs(options, 'object', 'Argument should be Object')

  // Handle empty input string
  if (string.trim() === '') {
    throw new Error('Input string cannot be empty')
  }

  // Customize separator (default to hyphen)
  const separator = options.separator || '-'

  // Remove stop words
  if (options.removeStopWords) {
    string = removeStopWords(string, options.stopWords || [])
  }

  // Customize case (default to lowercase)
  switch (options.case) {
    case 'upper':
      string = string.toUpperCase()
      break
    case 'title':
      string = titleCase(string)
      break
    default:
      string = string.toLowerCase()
  }

  // Implement the logic to create the slug from the input string
  let slug = string.replace(/\s+/g, separator) // Replace spaces with the custom separator

  // shorten the slug if needed (based on options)
  if (options.maxLength && slug.length > options.maxLength) {
    slug = slug.substring(0, options.maxLength)
  }

  return slug
}
