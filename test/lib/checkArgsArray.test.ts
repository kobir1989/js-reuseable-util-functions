import { checkArgsArray } from '../../src/lib/checkArgsArray'

test('Should be Throw Error ', () => {
  const obj = { a: 'test1' }
  expect(() => checkArgsArray(obj, 'Expecting Array of String')).toThrowError(
    'Expecting Array of String'
  )
})

test('Should not Throw Error', () => {
  const arr = ['test1', 'test2']
  expect(() => checkArgsArray(arr, '')).not.toThrowError('')
})
