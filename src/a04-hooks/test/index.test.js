import assert from "node:assert";
import { test } from "node:test";
import {
	authenticateUser,
	closeDatabaseConnection,
	connectToDatabase,
	createUser,
	deleteUser,
} from "../src/index.js";

// biome-ignore lint: reason
let databaseConnection;
let user;

databaseConnection = await connectToDatabase();

test("Authentication Module Tests", async () => {
	await test("should authenticate a valid user", async () => {
		user = await createUser(databaseConnection, "testuser", "password123");
		const result = await authenticateUser(
			databaseConnection,
			"testuser",
			"password123",
		);
		assert.strictEqual(result, true, "Authentication should succeed");
		await deleteUser(databaseConnection, user);
	});

	await test("should reject invalid password", async () => {
		user = await createUser(databaseConnection, "testuser", "password123");
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
		await deleteUser(databaseConnection, user);
	});

	await test("should reject non-existing user", async () => {
		user = await createUser(databaseConnection, "testuser", "password123");
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
		await deleteUser(databaseConnection, user);
	});
});

await closeDatabaseConnection(databaseConnection);
