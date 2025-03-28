import { describe, it, expect, beforeEach } from 'vitest';
import { positionDice } from './circlePositioner.js';
import { diceInGame } from '../constants.js';

// Mock the DOM
function createMockTable() {
  const table = document.createElement('div');
  table.style.width = '600px';
  table.style.height = '400px';

  Object.defineProperty(table, 'offsetWidth', { get: () => 600 });
  Object.defineProperty(table, 'offsetHeight', { get: () => 400 });

  for (let i = 0; i < diceInGame; i++) {
    const die = document.createElement('div');
    die.classList.add('tenzi-die-container');
    die.style.position = 'absolute';
    table.appendChild(die);
  }

  return table;
}


describe('positionDice', () => {
  let table;

  beforeEach(() => {
    table = createMockTable();
    document.body.appendChild(table);
  });

  it('should correctly position all dice in a circular formation', () => {
    positionDice(table);
    
    const dice = table.querySelectorAll('.tenzi-die-container');
    expect(dice.length).toBe(diceInGame);

    const tableCenterX = table.offsetWidth / 2;
    const tableCenterY = table.offsetHeight / 2;
    const radius = 200;
    const degreePerUnit = 360.0 / diceInGame;
    
    dice.forEach((die, i) => {
      const angle = (i * degreePerUnit) * (Math.PI / 180);
      const expectedX = tableCenterX + radius * Math.cos(angle) - 30;
      const expectedY = tableCenterY + radius * Math.sin(angle) - 30;
      
      expect(parseFloat(die.style.left)).toBeCloseTo(expectedX, 1);
      expect(parseFloat(die.style.top)).toBeCloseTo(expectedY, 1);
    });
  });
});
