/**
 * Converts a given string to kebab-case.
 *
 * The function performs the following steps:
 * 1. Validates the input to ensure it is a non-null, non-undefined string containing only alphabetical characters and spaces.
 *    Throws an error with a descriptive message if the input is invalid.
 * 2. Trims leading and trailing spaces from the input string.
 * 3. Replaces hyphens, dots, and dashes with hyphens.
 * 4. Inserts a hyphen before each capitalized word (except the first word).
 * 5. Converts the entire string to lowercase.
 * 6. Replaces spaces and multiple consecutive hyphens with a single hyphen.
 *
 * @param {string} str - The input string to convert to kebab-case.
 * @returns {string} The kebab-case version of the input string.
 * @throws {TypeError} If the input is not a string or is null/undefined.
 * @throws {Error} If the input contains non-alphabetical characters (excluding spaces, hyphens, dots, or dashes).
 *
 * @example
 * toKebabCase('HelloWorld') // 'hello-world'
 * toKebabCase('  Hello World  ') // 'hello-world'
 * toKebabCase('hello.world') // 'hello-world'
 * toKebabCase('hello-World') // 'hello-world'
 */
function toKebabCase(str) {
    if (str === null || str === undefined) {
        throw new TypeError('Input cannot be null or undefined.');
    }
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim leading and trailing spaces
    let trimmed = str.trim();

    // Validate for non-alphabetical characters (allow spaces, hyphens, dots, dashes)
    if (/[^a-zA-Z\s\-\.–—]/.test(trimmed)) {
        throw new Error('Input contains invalid characters. Only alphabetical characters, spaces, hyphens, dots, and dashes are allowed.');
    }

    // Replace dots, dashes (en dash, em dash) with hyphens
    trimmed = trimmed.replace(/[\.–—]/g, '-');

    // Insert hyphen before capital letters (except at the start)
    trimmed = trimmed.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Replace spaces and multiple hyphens with a single hyphen
    trimmed = trimmed.replace(/[\s\-]+/g, '-');

    // Convert to lowercase
    return trimmed.toLowerCase();
}

module.exports = { toKebabCase };