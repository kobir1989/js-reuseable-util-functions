# js-validators-and-utils

![npm version](https://img.shields.io/badge/npm-v1.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/travis/ritu1989/js-validators-and-utils)
![Downloads](https://img.shields.io/npm/dt/js-validators-and-utils)
![GitHub stars](https://img.shields.io/github/stars/kobir1989/js-validators-and-utils)
![GitHub forks](https://img.shields.io/github/forks/kobir1989/js-validators-and-utils)
![GitHub issues](https://img.shields.io/github/issues/kobir1989/js-validators-and-utils)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kobir1989/js-validators-and-utils)
![Maintenance](https://img.shields.io/maintenance/yes/2023)

## JavaScript Validator and utils Functions - light weight library

A lightweight library offering essential JavaScript validation and utility functions. Simplify your code with this versatile npm package.

## Installation and Usage

### To integrate this library:

Install the library with `npm install js-validators-and-utils`

### Tree-Shakeable ES Imports

For seamless integration into your project, employ tree-shakeable ES imports:

```javascript
import { isStrongPassword } from 'js-validators-and-utils'
```

## Validator functions

Here is a list of the validators functions currently available and how to use them in your code base.

### 1. isPasswordMatched()

```javascript
// Import the necessary function from the library.
import { isPasswordMatched } from 'js-validators-and-utils'

/**
 * @function isPasswordMatched
 * @param {string} password - The password to compare.
 * @param {string} confirmPassword - The confirmation of the password.
 * @param {number} minLength - The minimum length for the password.
 * @return {Error} - An object indicating the errors.
 */

// Example usage:
const password = 'mySecretPassword123'
const confirmPassword = 'mySecretPassword123'
const minLength = 8

// Call the function with the required arguments.
const error = isPasswordMatched(password, confirmPassword, minLength)

// Check the error object for validation results.
if (error.isTooShort) {
  console.error('Password is too short.') // Handle the error accordingly.
}

if (error.isMatched) {
  console.error('Passwords do not match.') // Handle the error accordingly.
}

// If there are no errors, the passwords are valid and matched.
```

### 2. isStrongPassword()

```javascript
// Import the necessary function from the library.
import { isStrongPassword } from 'js-validators-and-utils'

/**
 * @function isStrongPassword
 * @param {string} password - The password to check.
 * @param {number} minChars - Minimum number of characters (default is 2).
 * @param {number} minSymbols - Minimum number of symbols (default is 2).
 * @param {number} minNumbers - Minimum number of numbers (default is 2).
 * @return {object}
 */

// Example usage:
const password = 'MyStrongPassword123!'
const minChars = 2
const minSymbols = 2
const minNumbers = 2

// Call the function with the required arguments (and optional ones if needed).
const error = isStrongPassword(password, minChars, minSymbols, minNumbers)

// Check the error object for validation results.
if (!error.hasChar) {
  console.error('Password should contain at least 2 characters.') // Handle the error accordingly.
}

if (!error.hasSymble) {
  console.error('Password should contain at least 2 symbols.') // Handle the error accordingly.
}

if (!error.hasNumber) {
  console.error('Password should contain at least 2 numbers.') // Handle the error accordingly.
}

if (!error.hasUppercase) {
  console.error('Password should contain at least one uppercase letter.') // Handle the error accordingly.
}

// If there are no errors, the password is considered strong based on the provided criteria.
```

### 3. isValidDate()

```javascript
// Import the necessary function from the library.
import { isValidDate } from 'js-validators-and-utils'

/**
 * @function isValidDate
 * @param {string} date - The date string to validate (e.g., "2023-09-05").
 * @returns {boolean}
 */

// Example usage:
const dateToValidate = '2023-09-05'

// Call the function with the date string to validate.
const isDateValid = isValidDate(dateToValidate)

// Check the result to determine if the date is valid.
if (isDateValid) {
  console.log('The date is valid.') // Handle the valid date case.
} else {
  console.error('Invalid date format. Please provide a valid date string.') // Handle the invalid date case.
}
```

### 4. isValidEmail()

```javascript
// Import the necessary function from the 'js-validators-and-utils' package.
import { isValidEmail } from 'js-validators-and-utils'

/**
 * @function isValidEmail
 * @param {string} email - The email address to validate.
 * @return {boolean}
 */

// Example usage:
const emailToValidate = 'example@email.com'

// Call the function with the email address to validate.
const isEmailValid = isValidEmail(emailToValidate)

// Check the result to determine if the email address is valid.
if (isEmailValid) {
  console.log('The email address is valid.') // Handle the valid email case.
} else {
  console.error('Invalid email format. Please provide a valid email address.') // Handle the invalid email case.
}
```

### 5. isValidFileExtension()

```javascript
// Import the necessary functions from the library.
import { isValidFileExtension } from 'js-validators-and-utils'

/**
 * @function isValidFileExtension
 * @param {string[]} allowedExtensions - An array of allowed file extensions (e.g., ['jpg', 'png']).
 * @param {string} fileName - The name of the file to validate.
 * @return {boolean}
 * @throws {Error} - If invalid arguments are provided.
 */

// Example usage:
const allowedExtensions = ['jpg', 'png', 'pdf']
const fileName = 'document.pdf'

// Call the function with the allowedExtensions array and fileName.
const isFileExtensionValid = isValidFileExtension(allowedExtensions, fileName)

// Check the result to determine if the file extension is valid.
if (isFileExtensionValid) {
  console.log('The file extension is valid.') // Handle the valid file extension case.
} else {
  // Handle the invalid file extension case.
  console.error(
    'Invalid file extension. Please provide a valid file extensions.'
  )
}
```

### 6. isValidPhoneNumber()

```javascript
// Import the necessary functions and data from the library.
import { isValidPhoneNumber } from 'js-validators-and-utils'

/**
 * @function isValidPhoneNumber
 * @param {string | number} phoneNumber - The phone number to validate.
 * @param {string} locale - The locale to apply phone number validation rules. (e.g., 'bn-BD', 'en-US')
 * @returns {boolean}
 */

// Example usage:
const phoneNumberToValidate = '01740000000' // Replace with the phone number you want to validate.
const locale = 'bn-BD' // Replace with the desired locale.

// Call the function with the phone number and locale.
const isPhoneNumberValid = isValidPhoneNumber(phoneNumberToValidate, locale)

// Check the result to determine if the phone number is valid.
if (isPhoneNumberValid) {
  console.log('The phone number is valid.') // Handle the valid phone number case.
} else {
  // Handle the invalid phone number case.
  console.error(
    'Invalid phone number format. Please provide a valid phone number'
  )
}
```

### 7. isValidUrl()

```javascript
// Import the necessary functions from the library.
import { isValidURL } from 'js-validators-and-utils'

/**
 * @function isValidURL
 * @param {string} url - The URL to validate.
 * @return {boolean}
 */

// Example usage:
const validURL = 'https://www.example.com' // Replace the URL you want to validate.

// Call the function with the URL you want to validate
const isURLValid = isValidURL(validURL)

// Check the result to determine if the URL is valid.
if (isURLValid) {
  console.log('The URL is valid.') // Handle the valid URL case
} else {
  console.log('The URL is not valid.') // This will not be executed for a valid URL
}
```

### 8. isValidUserName()

```javascript
// Import the necessary functions from the library.
import { isValidUserName } from 'js-validators-and-utils'

/**
 * @function isValidUserName
 * @param {string} userName - The username to validate.
 * @param {Array} disallowedWords - An array of disallowed words (e.g., reserved words, offensive content).
 * @return {boolean}
 */

// Example usage:
const validUserName = 'myUsername123' // Replace with a valid username.
const disallowedWords = ['admin', 'root', 'password'] // List of disallowed words.

// Call the function with the valid username and disallowed words list
const isUserNameValid = isValidUserName(validUserName, disallowedWords)

// Check the result to determine if the username is valid.
if (isUserNameValid) {
  console.log('The username is valid.') // Handle the valid username case
} else {
  console.log('The username is not valid.') // This will not be executed for a valid username
}
```

## Util function / Helper functions

Here is a list of the Util functions / Helper functions currently available and how to use them in your code base.

### 1. fetchWrapper() - HTTP Request Helper

```javascript
// Import the necessary functions from the library.
import { fetchWrapper } from 'js-validators-and-utils'

/**
 * @function fetchWrapper
 * @param {string} url - The URL for the fetch request.
 * @param {object} options - Optional fetch options (e.g., method, headers, body).
 * @returns {Promise<unknown>} - A Promise that resolves to the fetched data or rejects with an error.
 */

// Example use case:
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1' // Replace with the API URL you want to fetch.

// Optional: Define fetch options (these are the default options used in this example).
const fetchOptions = {
  method: 'GET', // HTTP method (default is GET)
  headers: {
    'Content-Type': 'application/json' // Request headers
  }
}

try {
  // Call the function with the API URL and optional fetch options.
  const responseData = await fetchWrapper(apiUrl, fetchOptions)

  // Print the fetched data
  console.log('Fetched Data:', responseData)
} catch (error) {
  console.error('Error:', error.message) // Handle any potential errors
}
```

### 2. capitalizeString() - String manipulation

```javascript
// Import the necessary functions from the library.
import { capitalizeString } from 'js-validators-and-utils'

/**
 * @function capitalizeString
 * @param {string}
 * @return {capitalized string}
 * @throws {Error}
 */

// Example use case:
const inputString = 'hello world' // Replace with the string you want to capitalize.

// Call the function with the input string
const capitalizedString = capitalizeString(inputString)

// Print the capitalized string
console.log('Capitalized String:', capitalizedString) // output 'Hello World';
```

### 3. dateFormatter() - String manipulation

```javascript
// Import the necessary functions from the library.
import { dateFormatter } from 'js-validators-and-utils'

/**
 * @function dateFormatter
 * @param {date}
 * @param {options} - object
 * @param {locale}
 * @throws {Error}
 * @return {formatted date string}
 */

// Example use case:
const inputDate = '2023-09-08T12:00:00Z' // Replace with the date string you want to format.

// Optional: Define formatting options and locale (these are the default options used in this example).
const formattingOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

const locale = 'en-US'
// Call the function with the input date and optional formatting options and locale.
const formattedDate = dateFormatter(inputDate, formattingOptions, locale)

// Print the formatted date
console.log('Formatted Date:', formattedDate) // output September 6, 2023
```

### 4. sluggifiedString() - String manipulation

```javascript
// Import the necessary functions from the library.
import { sluggifiedString } from 'js-validators-and-utils'

/**
 * @function sluggifiedString
 * @param {string}
 * @param {options} - options object {}
 * @return {sluggified string}
 * @throws {Error}
 */

// Example output for the given sluggifyOptions and input string
const inputString = 'This is a Sample Title'

const sluggifyOptions = {
  separator: '-', // Separator between words (default is hyphen)
  removeStopWords: true, // Remove common stop words (default is true)
  stopWords: ['is', 'a'], // List of stop words to remove
  case: 'lower', // Case transformation (default is lowercase)
  maxLength: 20 // Maximum length of the slug (default is unlimited)
}

// Call the function with the input string and sluggify options.
const sluggified = sluggifiedString(inputString, sluggifyOptions)

// Output
console.log('Original String:', inputString)
console.log('Sluggified String:', sluggified)

/* Output:
Original String: This is a Sample Title
Sluggified String: this-sample-title
*/
```

### 5. truncatedString() - String manipulation

```javascript
// Import the necessary functions from the library.
import { truncatedString } from 'js-validators-and-utils'

/**
 * @function truncatedString
 * @param {string}
 * @param {start}
 * @param {end}
 * @return {truncated string}
 * @throws {error}
 */

// Example use case:
const inputString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

// Optional: Define start and end positions for truncation (these are the default values used in this example).
const startPosition = 0 // Start position for truncation (default is 0)
const endPosition = 30 // End position for truncation (default is 30)

// Call the function with the input string and optional start and end positions.
const truncated = truncatedString(inputString, startPosition, endPosition)

// Print the truncated string
console.log('Original String:', inputString)
console.log('Truncated String:', truncated) // Expected Output: Lorem ipsum dolor sit amet...
```

### 6. delay() - function is used to delay the execution of the Operation

```javascript
// Import the necessary function from the library.
import { delay } from 'js-validators-and-utils'

/**
 * @function delay
 * @param {number} time - Delay time in ms.
 * @param {function} operation - Function to be delayed.
 */

// Example use case:
const delayTime = 2000 // Delay for 2 seconds (2000 milliseconds).

const delayedOperation = () => {
  console.log('Delayed operation executed after 2 seconds.')
}

// Call the function to delay the operation.
console.log('Delaying operation for 2 seconds...')
delay(delayTime, delayedOperation)
// Delaying operation for 2 seconds...
// Delayed operation executed after 2 seconds.
```

### 7. retry() - function is used to retry the asyncOperation function <br> up to maxRetries times with a delay of delayMs milliseconds between each retry.

```javascript
// Import the necessary function from the library.
import { retry } from 'js-validators-and-utils'

/**
 * @function retry
 * @param {function} operation - The async operation to retry.
 * @param {number} maxRetries - The maximum number of retry attempts.
 * @param {number} delayMs - The delay in ms between retry attempts.
 * @throws {Error} - Throws an error if the operation fails after all retries.
 * @return {Promise} - Resolves when the operation succeeds or rejects if it fails after all retries.
 */

// Example use case:
const maxRetries = 3 // Maximum number of retry attempts.
const delayMs = 1000 // Delay in milliseconds between retry attempts.

const asyncOperation = async () => {
  // Simulate a network request that sometimes fails.
  const shouldFail = Math.random() < 0.5 // 50% chance of failure.
  if (shouldFail) {
    throw new Error('Network request failed.')
  } else {
    return 'Success! Data received.'
  }
}

try {
  // Call the function to retry the async operation with the specified maxRetries and delayMs.
  const result = await retry(asyncOperation, maxRetries, delayMs)

  // Print the result if the operation succeeds.
  console.log('Operation succeeded:', result)
} catch (error) {
  console.error('Error:', error.message) // Handle the error if the operation fails after all retries.
}
```

### 8. chunkArray() - Array manipulation

```javascript
// Import the necessary function from the library.
import { chunkArray } from 'js-validators-and-utils'

/**
 * @function chunkArray
 * @param {array}
 * @param {size}
 * @throws {Error}
 * @return {new Array}
 */

// Example use case:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // Replace with the array you want to create chunk.

const chunkSize = 3 // Define the size of each chunk.

// Call the function to chunk the input array into chunks of the specified size.
const result = chunkArray(inputArray, chunkSize)

// Print the chunked array
console.log('Original Array:', inputArray)
console.log(`Array Chunked into ${chunkSize}-sized Chunks:`, result)
// Output
// Original Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Array Chunked into 3-sized Chunks: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

### 9. flattenArray() - Array manipulation Recursive function

```javascript
// Import the necessary function from the library.
import { flattenArray } from 'js-validators-and-utils'

/**
 * @function flattenArray
 * @param {array}
 * @param {depth}
 * @throws {Error}
 * @return {Flat Array}
 */

// Example use case:
const nestedArray = [1, [2, [3, [4]], 5], 6] // Replace with the nested array you want to flatten.

const flattenDepth = 2 // Define the depth to which you want to flatten the array.

// Call the function to flatten the nested array up to the specified depth.
const result = flattenArray(nestedArray, flattenDepth)

// Print the flattened array
console.log('Nested Array:', nestedArray)
console.log(`Flattened Array (Depth ${flattenDepth}):`, result)
// Output
// Nested Array: [1, [2, [3, [4]], 5], 6]
// Flattened Array (Depth 2): [1, 2, 3, [4], 5, 6]
```

### 10. shuffleArray() - Array manipulation

```javascript
// Import the necessary function from the library.
import { shuffleArray } from 'js-validators-and-utils'

/**
 * @function shuffleArray
 * @param {array}
 * @throws {Error}
 * @return {array}
 */

// Example use case:
const inputArray = [1, 2, 3, 4, 5] // Replace with the array you want to shuffle.

// Call the function to shuffle the input array.
const shuffledArray = shuffleArray(inputArray)

// Print the shuffled array
console.log('Original Array:', inputArray)
console.log('Shuffled Array:', shuffledArray)

// Output
// Original Array: [1, 2, 3, 4, 5]
// Shuffled Array: [3, 2, 5, 1, 4] // The order will be different each time you run it.
```

# How to Contribute to `js-validators-and-utils`

Thank you for considering contributing to `js-validators-and-utils` I welcome your contributions and have outlined the following steps to help you get started.

## Prerequisites

Before you start contributing, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/): - (v18.17.1) To run JavaScript/TypeScript code and manage dependencies using npm.
- [Git](https://git-scm.com/): To clone the repository and create branches for your contributions.

## Fork the Repository

[GitHub repository](https://github.com/kobir1989/js-validators-and-utils)

## Clone the Repository

Open your terminal and run the following command to clone the repository to your local machine.

```bash
git clone git@github.com:kobir1989/js-validators-and-utils.git
```

### Install Dependencies

Navigate to the project directory and install the project dependencies:

```bash
cd js-validators-and-utils
npm install
```

### Create a Branch

```bash
git checkout -b feature/add-new-functionality
```

### Make Changes

Make your desired changes or improvements to the library code. Ensure that your code follows the project's coding style and guidelines.

### Code Formatting and Linting

I have used Prettier and ESLint to maintain code consistency. Before committing your changes, run the following commands to format and lint your code:

```bash
npm run prettier   # Format code with Prettier
npm run lint     # Lint code with ESLint
```

### Test Your Changes

Before submitting a pull request, it's crucial to test your changes thoroughly. Run any provided tests and create new ones if necessary.<br> Make sure that the existing tests pass and that your new code doesn't introduce any regressions.

```bash
#Test command
npm run test
```

### Commit Your Changes

Once your changes are complete and tested, commit your changes with a clear and concise commit message:

```bash
git commit -m "feat: description of your changes"
```

### Push Your Changes

Push your changes to your forked repository on GitHub:

```bash
git push -u origin feature/add-new-functionality
```

### Create a Pull Request

Provide a detailed description of your changes in the pull request.

### Merge Your Pull Request

Once your pull request is approved, it will be merged into the main project. Congratulations, you've successfully contributed to `js-validators-and-utils`!

### Thank You

Thank you for your contribution to `js-validators-and-utils`! Your efforts help improve the library.
