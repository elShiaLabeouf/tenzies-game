import { describe, it, expect } from 'vitest';
import { randomAlphaNumeric, randomDieValue } from "./randomizer"

describe("randomAlphaNumeric", () => {
  const desiredLength = 6

  it("should return a String of a given length", () => {
    expect(typeof randomAlphaNumeric(desiredLength)).toBe("string")
    expect(randomAlphaNumeric(desiredLength)).toHaveLength(desiredLength)
    expect(randomAlphaNumeric(10)).toHaveLength(10)
  })

  it("should return a unique value each time", () => {
    expect(randomAlphaNumeric(desiredLength)).not.toBe(randomAlphaNumeric(desiredLength))
    expect(randomAlphaNumeric(desiredLength)).not.toBe(randomAlphaNumeric(desiredLength))
    expect(randomAlphaNumeric(desiredLength)).not.toBe(randomAlphaNumeric(desiredLength))
  })
})

describe("randomDieValue", () => {
  it("should return a Number", () => {
    expect(typeof randomDieValue()).toBe("number")
  })

  it("should return a value in a range of 1 to 6", () => {
    expect(randomDieValue()).toBeGreaterThan(0)
    expect(randomDieValue()).toBeLessThan(7)
  })
})