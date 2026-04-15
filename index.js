
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */

const helloWorld = "hello world";

function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords(helloWorld));

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */

const users = [];

function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

console.log(filterActiveUsers(users));

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */

const userAction = "";
const userName = "";

function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

console.log(logAction(userAction, userName));

module.exports = { capitalizeWords, filterActiveUsers, logAction };
