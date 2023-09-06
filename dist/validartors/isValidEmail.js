/***
 * @function isValidEmail
 * @param {email}
 * @return {boolean}
 */
import { checkArgs } from '../lib/checkArgs';
export const isValidEmail = (email) => {
    checkArgs(email, 'string', 'Email Must be string!');
    // Regular expression pattern for email validation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(email.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
};
