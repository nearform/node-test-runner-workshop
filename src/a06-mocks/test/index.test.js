import assert from "node:assert";
import { sum } from "../src/index.js";
import { test, mock } from "node:test";

test("spies on a sum", () => {
	// use the mockedSum spy to check
	// how many times its called before
	// and after being used
	// check when its called wich argoument has received, result, and error

	const mockedSum = mock.fn(sum);
});
