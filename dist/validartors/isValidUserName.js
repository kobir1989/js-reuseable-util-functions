/**
 * @function isValidUserName
 * @param {string} userName - The username to validate.
 * @param {Array}  disallowedWords  - offensive words
 * @return {boolean}
 */
export const isValidUserName = (userName, disallowedWords = ['admin', 'root', 'password']) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Allows letters, numbers, and underscores, 3-20 characters long
    // Test if the username matches the defined regex pattern.
    const isValid = usernameRegex.test(userName);
    if (isValid) {
        // Check for disallowed words (e.g., reserved words, offensive content).
        const lowerCaseUserName = userName;
        if (disallowedWords.includes(lowerCaseUserName.toLowerCase())) {
            return false;
        }
    }
    return isValid;
};
