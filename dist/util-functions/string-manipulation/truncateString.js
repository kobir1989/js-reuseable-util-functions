/**
 * @function truncateString
 * @param {string}
 * @param {start}
 * @param {end}
 * @return {trancated string}
 * @throws {error}
 */
import { checkArgs } from '../../lib/checkArgs';
export const truncatedString = (string, start = 0, end = 30) => {
    checkArgs(string, 'string', 'Argument should be a String!');
    checkArgs(start, 'number', 'Argument should be Number!');
    checkArgs(end, 'number', 'Argument should be a Nuber!');
    const trimedString = string.trim();
    // Return the original string if it's empty or if start >= end
    if (trimedString === '' || start >= end)
        return trimedString;
    const trancatedString = string.trim().slice(start, end) + '...';
    return trancatedString;
};
