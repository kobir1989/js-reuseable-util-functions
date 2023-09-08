/**
 * @function retry
 * @param {function} operation - The async operation to retry.
 * @param {number} maxRetries - The maximum number of retry attempt.
 * @param {number} delayMs - The delay in ms between retry attempt.
 * @throws {Error} - Throws an error if the operation fails after all retries.
 * @return {Promise} - resolve when the operation success or rejects if it fails after all retries.
 */
export const retry = async (operation, maxRetries, delayMs) => {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const result = await operation();
            return result; // If successful, return the result
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            // If an error occurred, logs it and retry after a delay
            console.error(`Attempt ${retries + 1} failed: ${error?.message}`);
            retries++;
            if (retries < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }
        }
    }
    throw new Error(`Operation failed after ${maxRetries} retries`);
};
