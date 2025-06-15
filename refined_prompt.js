/**
 * Converts a given string to camelCase.
 *
 * The function accepts a string containing alphabetical characters, spaces, hyphens, or underscores,
 * and returns a camelCase formatted string. The first word is in lowercase, and each subsequent word
 * starts with an uppercase letter followed by lowercase letters. Throws an error if the input is not
 * a string or contains invalid characters.
 *
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is undefined, null, not a string, or contains invalid characters.
 *
 * @example
 * toCamelCase("my name"); // Returns "myName"
 * toCamelCase("my-name"); // Returns "myName"
 * toCamelCase("my_name"); // Returns "myName"
 * toCamelCase("13243");   // Throws Error
 */

/**
 * Converts a given string to dot.case.
 *
 * The function accepts a string containing alphabetical characters, spaces, hyphens, or underscores,
 * and returns a dot.case formatted string, where all words are in lowercase and separated by dots.
 * Throws an error if the input is not a string or contains invalid characters.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is undefined, null, not a string, or contains invalid characters.
 *
 * @example
 * toDotCase("my name"); // Returns "my.name"
 * toDotCase("my-name"); // Returns "my.name"
 * toDotCase("my_name"); // Returns "my.name"
 * toDotCase("13243");   // Throws Error
 */
function toCamelCase(input) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be undefined or null.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    // Check for non-alphabetical and non-separator characters
    if (!/^[a-zA-Z\s\-_]+$/.test(input)) {
        throw new Error("Input must only contain alphabetical characters, spaces, hyphens, or underscores.");
    }

    // Split by space, hyphen, or underscore
    const words = input
        .trim()
        .split(/[\s\-_]+/)
        .filter(Boolean);

    if (words.length === 0) return "";

    return (
        words[0].toLowerCase() +
        words
            .slice(1)
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join("")
    );
}

// Example usage:
// console.log(toCamelCase("my name")); // "myName"
// console.log(toCamelCase("my-name")); // "myName"
// console.log(toCamelCase("my_name")); // "myName"
// console.log(toCamelCase("13243")); // Error


function toDotCase(input) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be undefined or null.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    // Check for non-alphabetical and non-separator characters
    if (!/^[a-zA-Z\s\-_]+$/.test(input)) {
        throw new Error("Input must only contain alphabetical characters, spaces, hyphens, or underscores.");
    }

    // Split by space, hyphen, or underscore
    const words = input
        .trim()
        .split(/[\s\-_]+/)
        .filter(Boolean);

    if (words.length === 0) return "";

    return words.map(word => word.toLowerCase()).join(".");
}

// Example usage:
// console.log(toDotCase("my name")); // "my.name"
// console.log(toDotCase("my-name")); // "my.name"
// console.log(toDotCase("my_name")); // "my.name"
// console.log(toDotCase("13243")); // Error

