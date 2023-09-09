/**
 * @function debounce
 * @param {function} func - The function to be debounced.
 * @param {number} delay - Delay time in milliseconds.
 * @returns {function} - A debounced function.
 */
export function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
