import { randomAlphaNumeric, randomDieValue } from "./randomizer"

/**
 * Generates a tenzi object in a form of <uniqueId>: { value, isLocked }
 * @param {string} [id=randomAlphaNumeric(6)] - A preferred id for the tenzi structure
 * @returns {object} - An object containing the ID as a key, with a nested object containing a random int die value and a boolean lock status
 */
export function createDieState(id = randomAlphaNumeric(6)) {
  return {
    [id]: { value: randomDieValue(), isLocked: false }
  };
}
