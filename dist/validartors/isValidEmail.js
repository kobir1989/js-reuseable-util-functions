/***
 * @function isValidEmail takes an email address as input and uses the test() method of the regex pattern to check if the email matches the given pattern.
 * @param {email}
 * @return {boolean}
 */
export const isValidEmail = (email) => {
    // Regular expression pattern for email validation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(email.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
};
