/**
 * @function checkArgsArray
 * @param {array}
 * @param {message}
 * @throws {Error}
 */
export const checkArgsArray = (array, message) => {
    if (!Array.isArray(array)) {
        throw new Error(message);
    }
};
