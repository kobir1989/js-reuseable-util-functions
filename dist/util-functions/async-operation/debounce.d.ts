/**
 * @function debounce
 * @param {function} func - The function to be debounced.
 * @param {number} delay - Delay time in milliseconds.
 * @returns {function} - A debounced function.
 */
export declare function debounce<T extends () => void>(func: T, delay?: number): () => void;
