import { animateDieRoll } from '../utils/dieAnimations';
import { randomDieValue } from '../utils/randomizer'
import { createDieStateCollection } from "../utils/dieStateCollectionBuilder"
import { diceInGame } from "../constants"

/**
 * Reducer function to manage the Tenzi game state.
 *
 * @param {Object} state - The current state of the game.
 * @param {Object} action - The action object.
 * @param {string} action.type - The type of action to perform.
 * @param {string} [action.tenziId] - (Optional) The ID of the die to update.
 * @param {Object} [action.tenziRefs] - (Optional) References to animated dice elements.
 * @param {number} [action.diceInGame] - (Optional) Number of dice in the game (used for initialization).
 * @returns {Object} The new game state after applying the action.
 */
export function tenziesReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return createDieStateCollection(diceInGame)

    case "ROLL_DICE":
      return Object.entries(state).reduce((newState, [tenziId, tenzi]) => {
        if (tenzi.isLocked) {
          newState[tenziId] = tenzi
        } else {
          newState[tenziId] = { ...tenzi, value: randomDieValue() }
          animateDieRoll(action.tenziRefs[tenziId].current, newState[tenziId].value)
        }
        return newState
      }, {});

    case "LOCK_DIE":
      return {
        ...state,
        [action.tenziId]: {
          ...state[action.tenziId],
          isLocked: !state[action.tenziId].isLocked, // Toggle lock state
        },
      };

    default:
      return state;
  }
}
