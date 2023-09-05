/***
 * @function isPasswordMatched
 * @param {password}
 * @param {confirmPassword}
 * @param {minLength}
 * @return {object}
 *
 */
export const isPasswordMatched = (password, confirmPassword, minLength) => {
    const error = {
        isTooShort: false,
        isMatched: false
    };
    if (!password || !confirmPassword) {
        error.isTooShort = true;
    }
    if (password.length < minLength || confirmPassword.length < minLength) {
        error.isTooShort = true;
    }
    if (password !== confirmPassword) {
        error.isMatched = true;
    }
    return error;
};
