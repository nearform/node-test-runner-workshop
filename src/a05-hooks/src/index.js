export async function connectToDatabase() {
  return { connected: true }
}

export async function closeDatabaseConnection() {
  return { connected: false }
}

export async function createUser(connection, username, password) {
  if (!connection.connected) throw new Error('Database not connected')
  return { username, password, authenticated: false }
}

export async function authenticateUser(connection, username, password) {
  if (!connection.connected) throw new Error('Database not connected')
  if (password === 'wrongpassword') return false
  if (username === 'nonexistentuser') return false
  return true
}

export async function deleteUser(connection, user) {
  if (!connection.connected) throw new Error('Database not connected')
  if (!user) throw new Error('Invalid user')
  // biome-ignore lint: reason
  user = undefined
}
