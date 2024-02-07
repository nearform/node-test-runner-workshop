import assert from "node:assert";
import { sum, product } from "../src/index.js";
import { test } from "node:test";

// the function product is not ready yet will throw
test("testing product", () => {
	assert.strictEqual(product([1, 2, 3]), 6, "product is not ready yet");
});

// we only want to execute ONLY this specific test
test("testing sum", () => {
	assert.strictEqual(sum([1, 2, 27]), 30, "sum([1, 2, 27]) should equal 30");
});

// this test is not meaningful, it still wip
test("still work in progress", () => {
	assert.strictEqual(2, 2, "This testis still a work in progress");
});

// this runs normally
test("should run normally", () => {
	assert.strictEqual(sum([1, 2, 3]), 6, "sum([1, 2, 3]) should run normally");
});
