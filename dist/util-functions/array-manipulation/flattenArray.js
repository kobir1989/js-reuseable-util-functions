/**
 * @function flattenArray
 * @param {array}
 * @param {depth}
 * @throws {Error}
 * @return {Flat Array}
 */
import { checkArgsArray } from '../../lib/checkArgsArray';
export const flattenArray = (array, depth) => {
    // check Argument Type
    checkArgsArray(array, 'First Argument should ba an Array!');
    if (depth <= 0 || array.length === 0)
        return array;
    const resultArray = [];
    const recursiveFn = (arr, currentDepth) => {
        for (let i = 0; i < array.length; i++) {
            if (currentDepth > 0 && Array.isArray(arr[i])) {
                const flattened = flattenArray(arr[i], currentDepth - 1);
                resultArray.push(...flattened);
            }
            else {
                resultArray.push(arr[i]);
            }
        }
    };
    recursiveFn(array, depth);
    return resultArray;
};
