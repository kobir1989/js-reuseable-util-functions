import { retry } from '../../src/util-functions/async-operation/retry'

// Mock async operation that success after a certein number of retries
const successfulOperation = jest.fn(async () => {
  if (successfulOperation.mock.calls.length < 3) {
    throw new Error('Operation failed')
  }
  return 'Operation succeeded'
})

// Mock async operaton that always fails
const failingOperation = jest.fn(async () => {
  throw new Error('Operation failed')
})

describe('retry function', () => {
  beforeEach(() => {
    successfulOperation.mockClear()
    failingOperation.mockClear()
  })

  // Test case 1 - Successful operation after retries
  test('Successful operation after retries', async () => {
    const result = await retry(successfulOperation, 3, 100)
    expect(result).toBe('Operation succeeded')
    expect(successfulOperation).toHaveBeenCalledTimes(3) // Should be called 3 times
  })

  // Test case 2 - pperation that always fails
  test('Operation that always fails', async () => {
    await expect(retry(failingOperation, 3, 100)).rejects.toThrowError(
      'Operation failed'
    )
    expect(failingOperation).toHaveBeenCalledTimes(3) // Should be called 3 times
  })

  // Test case 3 -  max retries exceeded
  test('Maximum retries exceeded', async () => {
    await expect(retry(failingOperation, 2, 100)).rejects.toThrowError(
      'Operation failed after 2 retries'
    )
    expect(failingOperation).toHaveBeenCalledTimes(2) // Should be called 2 times
  })
})
