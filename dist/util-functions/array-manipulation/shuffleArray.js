/**
 * @function shuffleArray
 * @param {array}
 * @throws {Error}
 * @return {array}
 */
import { checkArgsArray } from '../../lib/checkArgsArray';
export const shuffleArray = (arr) => {
    // check argument type
    checkArgsArray(arr, 'Argument should be an Array!');
    const result = [...arr];
    for (let i = 0; i < result.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};
