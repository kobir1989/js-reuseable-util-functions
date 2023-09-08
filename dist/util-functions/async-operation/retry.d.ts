/**
 * @function retry
 * @param {function} operation - The async operation to retry.
 * @param {number} maxRetries - The maximum number of retry attempt.
 * @param {number} delayMs - The delay in ms between retry attempt.
 * @throws {Error} - Throws an error if the operation fails after all retries.
 * @return {Promise} - resolve when the operation success or rejects if it fails after all retries.
 */
export declare const retry: (operation: () => Promise<unknown>, maxRetries: number, delayMs: number) => Promise<unknown>;
