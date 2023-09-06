/**
 * @function isValidURL
 * @param {string} url
 * @return {boolean}
 */
import { checkArgs } from '../lib/checkArgs';
export const isValidURL = (url) => {
    checkArgs(url, 'string', 'URL must be string!');
    if (url === '')
        return false;
    const urlPattern = /^((https?|ftp):\/\/)(www\.)?[a-zA-Z0-9@:%._+~#?&//=^\s-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._+~#?&//=]*)$/;
    if (!urlPattern.test(url))
        return false;
    return true;
};
