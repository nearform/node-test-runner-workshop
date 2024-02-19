import assert from 'node:assert'
import { test, before, beforeEach, afterEach, after } from 'node:test'
import {
  connectToDatabase,
  closeDatabaseConnection,
  createUser,
  authenticateUser,
  deleteUser
} from '../src/index.js'

let databaseConnection
let user

before(async () => {
  databaseConnection = await connectToDatabase()
})

after(async () => {
  await closeDatabaseConnection(databaseConnection)
})

beforeEach(async () => {
  user = await createUser(databaseConnection, 'testuser', 'password123')
})

afterEach(async () => {
  await deleteUser(databaseConnection, user)
})

test('should authenticate a valid user', async () => {
  const result = await authenticateUser(
    databaseConnection,
    'testuser',
    'password123'
  )
  assert.strictEqual(result, true)
})

test('should reject invalid password', async () => {
  const result = await authenticateUser(
    databaseConnection,
    'testuser',
    'wrongpassword'
  )
  assert.strictEqual(result, false)
})

test('should reject non-existing user', async () => {
  const result = await authenticateUser(
    databaseConnection,
    'nonexistentuser',
    'password123'
  )
  assert.strictEqual(result, false)
})
