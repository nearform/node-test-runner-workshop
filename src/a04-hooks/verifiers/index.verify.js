import {
  connectToDatabase as originalConnectToDatabase,
  closeDatabaseConnection as originalCloseDatabaseConnection,
  createUser as originalCreateUser,
  authenticateUser as originalAuthenticateUser,
  deleteUser as originalDeleteUser
} from '../src/index.js'
import { getHook } from '../../../verify/test.verify.js'
import { mock } from 'node:test'

export const fnCalls = []

export const connectToDatabase = mock.fn((...args) => {
  fnCalls.push({
    name: 'connectToDatabase',
    caller: getHook()
  })
  return originalConnectToDatabase(...args)
})
export const closeDatabaseConnection = mock.fn((...args) => {
  fnCalls.push({
    name: 'closeDatabaseConnection',
    caller: getHook()
  })
  return originalCloseDatabaseConnection(...args)
})
export const createUser = mock.fn((...args) => {
  fnCalls.push({
    name: 'createUser',
    caller: getHook()
  })
  return originalCreateUser(...args)
})
export const authenticateUser = mock.fn((...args) => {
  fnCalls.push({
    name: 'authenticateUser',
    caller: getHook()
  })
  return originalAuthenticateUser(...args)
})
export const deleteUser = mock.fn((...args) => {
  fnCalls.push({
    name: 'deleteUser',
    caller: getHook()
  })
  return originalDeleteUser(...args)
})
