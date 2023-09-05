/**
 * @function isStrongPassword
 * @param {string} password - The password to check.
 * @param {number} minChars - Minimum number of characters (default is 2).
 * @param {number} minSymbols - Minimum number of symbols (default is 2).
 * @param {number} minNumbers - Minimum number of numbers (default is 2).
 * @return {object}
 */
interface Error {
    hasChar: boolean;
    hasSymble: boolean;
    hasNumber: boolean;
    hasUppercase: boolean;
}
export declare const isStrongPassword: (password: string, minChars?: number, minSymbols?: number, minNumbers?: number) => Error;
export {};
