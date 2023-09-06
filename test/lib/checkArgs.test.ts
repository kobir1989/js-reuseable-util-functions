import { checkArgs } from '../../src/lib/checkArgs'

test('Should throw an error if types do not match', () => {
  expect(() =>
    checkArgs('test string', 'number', 'Type should be String!')
  ).toThrowError()
})

test('Should not throw an error if types match', () => {
  expect(() => checkArgs(1234, 'number', 'Type should be number')).not.toThrow()
})

test('Should not throw an error if types match', () => {
  expect(() =>
    checkArgs('test String', 'string', 'Type should be string')
  ).not.toThrow()
})
