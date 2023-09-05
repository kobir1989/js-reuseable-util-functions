/**
 * @function isValidDate
 * @param {string} date - The date string to validate (e.g., "2023-09-05").
 * @returns {boolean}
 */
export const isValidDate = (date) => {
    if (date === '')
        return false;
    const parsedDate = new Date(date);
    // Check if the parsed date is a valid date and not NaN
    // Also, check if the parsed date string matches the input date string
    return (!isNaN(parsedDate.getTime()) &&
        parsedDate.toISOString().slice(0, 10) === date);
};
