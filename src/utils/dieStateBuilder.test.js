import { describe, it, expect, beforeEach, vi } from "vitest"
import { createDieState } from "./dieStateBuilder"

vi.mock("./randomizer", () => ({
  randomAlphaNumeric: vi.fn(() => "random_id"),
  randomDieValue: vi.fn(() => 3)
}))

import { randomAlphaNumeric, randomDieValue } from "./randomizer"

describe("createDieState", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("should create a die state with the given id", () => {
    const randomDieMockValue = 6
    // const randomAlphaNumericSpy = vi.spyOn(global, "randomAlphaNumeric")
    randomDieValue.mockReturnValueOnce(randomDieMockValue)
    const result = createDieState("q1w2e3r4")
    expect(result).toEqual({ q1w2e3r4: { value: randomDieMockValue, isLocked: false } })
    expect(randomAlphaNumeric).not.toHaveBeenCalled()
  })

  it("should create a die state with a random id", () => {
    const randomDieMockValue = 3
    const randomId = "random_id"
    randomAlphaNumeric.mockReturnValueOnce(randomId)
    randomDieValue.mockReturnValueOnce(randomDieMockValue)

    const result = createDieState()
    
    expect(result).toEqual({
      [randomId]: { value: randomDieMockValue, isLocked: false }
    })
    expect(randomAlphaNumeric).toHaveBeenCalled()
  })
})
