/**
 * @function checkArgs
 * @param {input}
 * @param {type}
 * @param {string}
 * @throws {Error}
 */
export const checkArgs = (input, type, message) => {
    if (typeof input !== type) {
        throw new Error(message);
    }
};
