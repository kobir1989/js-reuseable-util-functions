import { isValidFileExtension } from '../../src/validartors/isValidFileExtention'

test('should return true for a valid file extension', () => {
  const allowedExtensions = ['jpg', 'png', 'gif']
  const fileName = 'myimage.jpg'
  expect(isValidFileExtension(allowedExtensions, fileName)).toBe(true)
})

test('should return false for an invalid file extension', () => {
  const allowedExtensions = ['jpg', 'png', 'gif']
  const fileName = 'document.pdf'
  expect(isValidFileExtension(allowedExtensions, fileName)).toBe(false)
})

test('should be case-insenstestive for file extensions', () => {
  const allowedExtensions = ['jpg', 'png', 'gif']
  const fileName = 'myimage.PNG' // Note the uppercase extension
  expect(isValidFileExtension(allowedExtensions, fileName)).toBe(true)
})

test('should throw an error for an empty fileName', () => {
  const allowedExtensions = ['jpg', 'png', 'gif']
  const fileName = ''
  expect(isValidFileExtension(allowedExtensions, fileName)).toThrow(
    'The fileName parameter cannot be empty.'
  )
})

test('should throw an error if allowedExtensions is an empty array', () => {
  const allowedExtensions = []
  const fileName = 'myimage.jpg'
  expect(isValidFileExtension(allowedExtensions, fileName)).toThrow(
    'The allowedExtensions array must contain at least one allowed extension.'
  )
})

test('should throw an error if fileName lacks a valid file extension', () => {
  const allowedExtensions = ['jpg', 'png', 'gif']
  const fileName = 'myfile' // Missing the file extension
  expect(isValidFileExtension(allowedExtensions, fileName)).toThrow(
    'The fileName "myfile" does not have a valid file extension.'
  )
})
