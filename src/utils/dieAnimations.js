/**
 * Positions dice in a circle formation within the play area
 * @param {HTMLElement} die - The HTML element that corresponds to a <Die /> instance
 * @param {integer} newDieValue - a numeric value from 1 to 6 that corresponds to the side to show
 */
export function animateDieRoll(die, newDieValue) {
  const currentValue = parseInt(die.getAttribute("data-value"))
  if (currentValue !== newDieValue) {
    die.className = die.className.replace(`show-${currentValue}`, `show-${newDieValue}`); // animate transition to the new value
    return
  }

  die.classList.toggle("reshuffle") // animate transition to the same value
}
