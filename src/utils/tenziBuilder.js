import { randomAlphaNumeric, randomDieValue } from "./randomizer"

/**
 * Generates a collection of tenzi objects using the tenziBuilder function
 * @param {integer} [amount] - Number of tenzies to create
 * @returns {Object} An object which contains <amount> tenzies
 */
export function createTenziCollection(amount) {
  return Array.from({ length: amount })
              .map(() => tenziBuilder())
              .reduce((acc, obj) => Object.assign(acc, obj), {});
}

/**
 * Generates a tenzi object in a form of <uniqueId>: { value, isLocked }
 * @param {string} [id=randomAlphaNumeric(6)] - A preferred id for the tenzi structure
 * @returns {object} - An object containing the ID as a key, with a nested object containing a random int die value and a boolean lock status
 */
export function tenziBuilder(id = randomAlphaNumeric(6)) {
  return {
    [id]: { value: randomDieValue(), isLocked: false }
  };
}
