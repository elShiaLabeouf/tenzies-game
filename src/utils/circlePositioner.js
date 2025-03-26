import { diceInGame } from '../constants.js'

/**
 * Positions dice in a circle formation within the play area
 * @param {HTMLElement} table - The container element where dice should be positioned
 */
export function positionDice(table) {
  // Get table center position
  const tableCenterX = table.offsetWidth / 2;
  const tableCenterY = table.offsetHeight / 2;

  const dice = table.querySelectorAll('.tenzi-die-container')
  
  const radius = 200;  // Distance from table center
  
  const degreePerUnit = 360.0 / diceInGame
  
  // Create and position 10 dice evenly around the table
  for (let i = 0; i < diceInGame; i++) {
    const angle = (i * degreePerUnit) * (Math.PI / 180);
    
    // Calculate position based on angle and radius
    const x = tableCenterX + radius * Math.cos(angle) - 30;
    const y = tableCenterY + radius * Math.sin(angle) - 30;

    const die = dice[i];
    die.style.left = x + 'px';
    die.style.top = y + 'px';

    const rotation = (angle * 180 / Math.PI) + 90; // Convert to degrees and add 90 to face center
    die.style.transform = `rotate(${rotation}deg)`;
  }
}