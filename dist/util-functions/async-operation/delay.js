let timerId = null;
/**
 * @function delay
 * @param {number} time - Delay time in ms.
 * @param {function} operation - function to be delay.
 */
export const delay = (time, operation) => {
    if (timerId !== null) {
        clearTimeout(timerId); // Clear the existing timer
    }
    timerId = setTimeout(() => {
        operation();
        timerId = null; // Clear the timer
    }, time);
};