/**
 * @function isPasswordMatched
 * @param {string} password - The password to compare.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {number} minLength - The minimum length for the password.
 * @return {Error} - An object indicating the errors.
 */
interface Error {
    isTooShort: boolean;
    isMatched: boolean;
}
export declare const isPasswordMatched: (password: string, confirmPassword: string, minLength: number) => Error;
export {};
