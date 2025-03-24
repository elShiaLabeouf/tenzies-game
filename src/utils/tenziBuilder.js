import { randomAlphaNumeric, randomDieValue } from "./randomizer"

export function tenziCollectionBuilder(amount) {
  return Object.assign({}, ...Array.from({ length: amount }, () => tenziBuilder()));
}

export function tenziBuilder(id = randomAlphaNumeric(6)) {
  return {
    [id]: { value: randomDieValue(), isLocked: false }
  };
}

export default tenziCollectionBuilder
