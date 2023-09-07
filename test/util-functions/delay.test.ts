import { delay } from '../../src/util-functions/async-operation/delay'

describe('delay function', () => {
  beforeEach(() => {
    jest.useFakeTimers() // Use fake timers to control setTimeout
  })

  afterEach(() => {
    jest.clearAllTimers() // Clear all timers after each test
  })

  // Test case 1: Delay and eaxecute the operation
  test('Delay and execute the operation', () => {
    const operationMock = jest.fn()
    delay(1000, operationMock)
    jest.runAllTimers() // Fast-frd the timer to execute the operation
    expect(operationMock).toHaveBeenCalledTimes(1)
  })
})
