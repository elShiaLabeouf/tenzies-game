import { describe, it, expect, beforeEach } from 'vitest';
import { animateDieRoll } from './dieAnimations';

describe("animateDieRoll", () => {
  let dieEl
  const currentDieValue = 1
  
  beforeEach(() => {
    dieEl = document.createElement("div")
    dieEl.className = `die show-${currentDieValue}`
    dieEl.setAttribute("data-value", currentDieValue)
  })

  it("should assign HTML element to a new class if newDieValue is different from the old value", () => {
    const newDieValue = 3
    animateDieRoll(dieEl, newDieValue)

    expect(dieEl.className).toBe("die show-3")
  })

  it("should toggle .reshuffle css class if the newDieValue is same", () => {
    const newDieValue = currentDieValue
    animateDieRoll(dieEl, newDieValue)

    expect(dieEl.className).toBe(`die show-${newDieValue} reshuffle`)
    animateDieRoll(dieEl, newDieValue)
    expect(dieEl.className).toBe(`die show-${newDieValue}`)
  })
})
