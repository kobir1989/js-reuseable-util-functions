/**
 * @function capitalizeString
 * @param {string}
 * @return {capitalized string}
 * @throws {Error}
 */
import { checkArgs } from '../../lib/checkArgs';
export const capitalizeString = (string) => {
    checkArgs(string, 'string', 'Argument should be a String!');
    if (string.trim() === '')
        return string;
    const wordsArray = string.trim().split(' ');
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
    }
    return wordsArray.join(' ');
};
