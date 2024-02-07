import assert from "node:assert";
import { test, before, beforeEach, afterEach, after } from "node:test";
import {
	connectToDatabase,
	closeDatabaseConnection,
	createUser,
	authenticateUser,
	deleteUser,
} from "../src/index.js";

let databaseConnection;
let user;

before(async () => {
	databaseConnection = await connectToDatabase();
});

after(async () => {
	await closeDatabaseConnection(databaseConnection);
});

beforeEach(async () => {
	user = await createUser(databaseConnection, "testuser", "password123");
});

afterEach(async () => {
	await deleteUser(databaseConnection, user);
});

test("Authentication Module Tests", async () => {
	await test("should authenticate a valid user", async () => {
		const result = await authenticateUser(
			databaseConnection,
			"testuser",
			"password123",
		);
		assert.strictEqual(result, true, "Authentication should succeed");
	});

	await test("should reject invalid password", async () => {
		const result = await authenticateUser(
			databaseConnection,
			"testuser",
			"wrongpassword",
		);
		assert.strictEqual(
			result,
			false,
			"Authentication should fail with incorrect password",
		);
	});

	await test("should reject non-existing user", async () => {
		const result = await authenticateUser(
			databaseConnection,
			"nonexistentuser",
			"password123",
		);
		assert.strictEqual(
			result,
			false,
			"Authentication should fail with non-existing user",
		);
	});
});
