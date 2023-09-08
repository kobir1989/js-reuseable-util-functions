import { checkArgs } from '../lib/checkArgs';
export const isPasswordMatched = (password, confirmPassword, minLength) => {
    // throw Error if password and confirmPassword type is not string.
    checkArgs(password, 'string', 'Password should be strings!');
    checkArgs(confirmPassword, 'string', 'Confirm Password Password should be strings!');
    const error = {
        isTooShort: password.length < minLength || confirmPassword.length < minLength,
        isMatched: password === confirmPassword
    };
    return error;
};
