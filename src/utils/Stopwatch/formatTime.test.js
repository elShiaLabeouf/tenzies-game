import { describe, it, expect } from "vitest"
import { timeToDisplay } from "./formatTime"

describe("timeToDisplay", () => {
  it("should format zero milliseconds correctly", () => {
    expect(timeToDisplay(0)).toBe("00:00")
  })

  it("should format seconds correctly", () => {
    expect(timeToDisplay(15000)).toBe("00:15")
  })

  it("should format minutes correctly", () => {
    expect(timeToDisplay(125000)).toBe("02:05")
  })

  it("should format hours correctly", () => {
    expect(timeToDisplay(3665000)).toBe("01:01:05")
  })

  it("should handle large hour values", () => {
    expect(timeToDisplay(12345678)).toBe("03:25:45")
  })

  it("should pad single-digit values with leading zeros", () => {
    expect(timeToDisplay(65000)).toBe("01:05")
    expect(timeToDisplay(5000)).toBe("00:05")
  })

  it("should handle very large time values", () => {
    expect(timeToDisplay(123456789)).toBe("34:17:36")
  })
})