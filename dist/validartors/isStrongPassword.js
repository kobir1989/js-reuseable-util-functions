/**
 * @function isStrongPassword
 * @param {string} password - The password to check.
 * @param {number} minChars - Minimum number of characters (default is 2).
 * @param {number} minSymbols - Minimum number of symbols (default is 2).
 * @param {number} minNumbers - Minimum number of numbers (default is 2).
 * @return {object}
 */
import { checkArgs } from '../lib/checkArgs';
export const isStrongPassword = (password, minChars = 2, minSymbols = 2, minNumbers = 2) => {
    const error = {
        hasChar: true,
        hasSymble: true,
        hasNumber: true,
        hasUppercase: true
    };
    // throw error if password is not string
    checkArgs(password, 'string', 'Password Must be string!');
    const charRegex = /[A-Za-z]/g; // characters regex
    const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g; // symble regex
    const numberRegex = /[0-9]/g; // number regex
    const charCount = (password.match(charRegex) || []).length;
    const symbolCount = (password.match(symbolRegex) || []).length;
    const numberCount = (password.match(numberRegex) || []).length;
    const hasUppercase = /[A-Z]/.test(password);
    if (charCount < minChars) {
        error.hasChar = false;
    }
    if (symbolCount < minSymbols) {
        error.hasSymble = false;
    }
    if (numberCount < minNumbers) {
        error.hasNumber = false;
    }
    if (!hasUppercase) {
        error.hasUppercase = false;
    }
    return error;
};
