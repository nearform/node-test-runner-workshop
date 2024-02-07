import assert from "node:assert";
import { test } from "node:test";
import { sum, sumAsync } from "../src/index.js";

test("sum", () => {
	assert.deepStrictEqual(sum([1, 2, 3]), 6, "sum of [1, 2, 3] is 6");
	assert.ok(typeof sum([1, 2, 3]) === "number", "typeof sum return is number");
	assert.doesNotThrow(() => sum([]), 0, "empty array is valid");
	assert.deepStrictEqual(sum([]), 0, "sum of empty array is 0");
	assert.throws(
		() => sum("abc"),
		{ message: "Input must be an array of numbers" },
		"throws error for non-array input in sum",
	);
});

test("sumAsync", async () => {
	assert.deepStrictEqual(await sumAsync([1, 2, 3]), 6, "sum of [1, 2, 3] is 6");
	assert.ok(
		typeof (await sumAsync([1, 2, 3])) === "number",
		"typeof sum return is number",
	);
	await assert.doesNotReject(() => sumAsync([]), 0, "empty array is valid");
	assert.deepStrictEqual(await sumAsync([]), 0, "sum of empty array is 0");
	await assert.rejects(
		() => sumAsync("abc"),
		{ message: "Input must be an array of numbers" },
		"throws error for non-array input in sumAsync",
	);
});

// extra assertions not covered by example
assert.match("PLACEHOLDER", /PLACEHOLDER/);
assert.doesNotMatch("foo", /PLACEHOLDER/);
