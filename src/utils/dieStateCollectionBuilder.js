import { createDieState } from "./dieStateBuilder"

/**
 * Generates a collection of tenzi objects using the dieStateBuilder function
 * @param {integer} [amount] - Number of tenzies to create
 * @returns {Object} An object which contains <amount> tenzies
 */
export function createDieStateCollection(amount) {
  return Array.from({ length: amount })
              .map(() => createDieState())
              .reduce((acc, obj) => Object.assign(acc, obj), {});
}
