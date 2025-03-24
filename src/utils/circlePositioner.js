import { diceInGame } from '../constants.js'

export function positionDice(room) {
  // Get room center position
  const tableCenterX = room.offsetWidth / 2;
  const tableCenterY = room.offsetHeight / 2;

  const dice = room.querySelectorAll('.tenzi-die-container')
  
  const radius = 200;  // Distance from table center
  
  const degreePerUnit = 360.0 / diceInGame

  // Create and position 10 dice evenly around the table
  for (let i = 0; i < diceInGame; i++) {
    const angle = (i * degreePerUnit) * (Math.PI / 180);
    
    // Calculate position based on angle and radius
    const x = tableCenterX + radius * Math.cos(angle) - 30; // -30 to center chair
    const y = tableCenterY + radius * Math.sin(angle) - 30; // -30 to center chair
    
    // Create chair
    const die = dice[i];
    die.style.left = x + 'px';
    die.style.top = y + 'px';
    
    // Rotate chair to face table
    const rotation = (angle * 180 / Math.PI) + 90; // Convert to degrees and add 90 to face center
    die.style.transform = `rotate(${rotation}deg)`;
    
    // Add chair to room
    room.appendChild(die);
  }
}