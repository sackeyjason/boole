//import { add, multiply } from "./"
const add = require("./").add
const multiply = require("./").multiply

describe("operations", () => {
  test("addition of zeroes", () => {
    expect(add(0, 0)).toBe(0)
  })

  test("addition of one", () => {
    expect(add(1, 0)).toBe(1)
    expect(add(0, 1)).toBe(1)
  })

  test("addition of one", () => {
    expect(add(1, 1)).toBe(0)
  })

  test("triple addition", () => {
    expect(add(1,1,1)).toBe(1)
    expect(add(0,0,0)).toBe(0)
    expect(add(0,0,1)).toBe(1)
  })

  test("multiplication by zero", () => {
    expect(multiply(0, 0)).toEqual(0)
    expect(multiply(0, 1)).toEqual(0)
    expect(multiply(1, 0)).toEqual(0)
  })

  test("multiplication of ones", () => {
    expect(multiply(1, 1)).toEqual(1)
  })
})

