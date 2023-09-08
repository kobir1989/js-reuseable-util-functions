/**
 * @function chunkArray
 * @param {array}
 * @param {size}
 * @throws {Error}
 * @return {new Array}
 */
import { checkArgsArray } from '../../lib/checkArgsArray';
export const chunkArray = (array, size = 1) => {
    // check Argument Type
    checkArgsArray(array, 'First Argument Should be an Array!');
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
