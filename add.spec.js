import { add } from "./add.js";

describe("test for the add function", () => {
	it("return the addition of 5+5 is 10", () => {
		const result = add(5, 5)
		expect(result).toBe(10)
	})
	it("return the addition of 2+2 is 4", () => {
		const result = add(2, 2)
		expect(result).toBe(4)
	})
	it("return the addition of 3+3 is 6", () => {
		const result = add(3, 3)
		expect(result).toBe(6)
	})
})

