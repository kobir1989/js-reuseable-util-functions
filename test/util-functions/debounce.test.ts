import { debounce } from '../../src/util-functions/async-operation/debounce'

describe('debounce function', () => {
  // Define a mock function to use in tests
  let mockFunction: jest.Mock<void, []>

  beforeEach(() => {
    // Reset the mock function before each test
    mockFunction = jest.fn()
    jest.useFakeTimers() // Use Jest's fake timers
  })

  afterEach(() => {
    jest.useRealTimers() // Restore real timers after each test
  })

  it('should debounce function calls', () => {
    const debouncedFunc = debounce(mockFunction, 300)

    // Call debounced function multiple times quickly
    debouncedFunc()
    debouncedFunc()
    debouncedFunc()

    // No calls should be made yet
    expect(mockFunction).not.toHaveBeenCalled()

    // Advance timers by the debounce delay
    jest.advanceTimersByTime(300)

    // Only one call to the mocked function should be made, after the debounce delay
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should debounce function calls with custom delay', () => {
    const debouncedFunc = debounce(mockFunction, 500)

    // Call debounced function multiple times quickly
    debouncedFunc()
    debouncedFunc()

    // No calls should be made yet
    expect(mockFunction).not.toHaveBeenCalled()

    // Advance timers by the custom debounce delay
    jest.advanceTimersByTime(500)

    // Only one call to the mocked function should be made, after the debounce delay
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should set the "this" context correctly', () => {
    const context = { key: 'value' }
    const debouncedFunc = debounce(function (this: any) {
      // Check if "this" context is set correctly
      expect(this).toBe(context)
    }, 300)

    // Call debounced function with a specific context
    debouncedFunc.call(context)
  })
})
