import { describe, it, expect, beforeEach, vi } from "vitest"
import { createDieStateCollection } from "./dieStateCollectionBuilder"
import { createDieState } from "./dieStateBuilder"

vi.mock("./dieStateBuilder", () => ({
  createDieState: vi.fn(),
}))

describe("createDieStateCollection", () => {
  // Reset mocks before each test
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("should create an empty collection when amount is 0", () => {
    const result = createDieStateCollection(0)
    expect(result).toEqual({})
  })

  it("should create a collection with the specified number of dice", () => {
    // Mock consistent random values for predictable testing
    vi.mocked(createDieState).mockReturnValueOnce({ abc123: 123 })
                             .mockReturnValueOnce({ def456: 456 })
                             .mockReturnValueOnce({ ghi789: 789 })

    const result = createDieStateCollection(3)
    
    expect(result).toEqual({
      "abc123": 123,
      "def456": 456,
      "ghi789": 789
    })
  })
})
