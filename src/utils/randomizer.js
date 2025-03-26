/**
 * Generates a random alphanumeric string of specified length
 * @param {number} length - The length of the string to generate
 * @returns {string} Random alphanumeric string
 */
export function randomAlphaNumeric(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a random die value between 1 and 6
 * @returns {number} Random integer between 1 and 6
 */
export function randomDieValue() {
  return Math.floor((Math.random() * 6) + 1)
}