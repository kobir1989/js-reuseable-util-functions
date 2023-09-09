/**
 * @function debounce
 * @param {function} func - The function to be debounced.
 * @param {number} delay - Delay time in milliseconds.
 * @returns {function} - A debounced function.
 */
export function debounce<T extends () => void>(
  func: T,
  delay: number = 300
): () => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
