/***
 * @function isPasswordMatched
 * @param {password}
 * @param {confirmPassword}
 * @param {minLength}
 * @return {object}
 *
 */
interface Error {
    isTooShort: boolean;
    isMatched: boolean;
}
export declare const isPasswordMatched: (password: string, confirmPassword: string, minLength: number) => Error;
export {};
