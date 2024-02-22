import { fnCalls } from './index.verify.js'
import handler from '../../../verify/handler.js'
import '../test/index.test.js'

const expectations = [
  {
    condition: ({ test }) => test.mock.calls.length < 3,
    message: 'You need to create a test for at least three cases'
  },
  {
    condition: () =>
      typeof fnCalls.find(
        call => call.name === 'connectToDatabase' && call.caller === 'before'
      ) === 'undefined',
    message: 'You need to call "connectToDatabase" inside a "before" hook'
  },
  {
    condition: () =>
      typeof fnCalls.find(
        call => call.name === 'createUser' && call.caller === 'beforeEach'
      ) === 'undefined',
    message: 'You need to call "createUser" inside a "beforeEach" hook'
  },
  {
    condition: () =>
      typeof fnCalls.find(
        call => call.name === 'deleteUser' && call.caller === 'afterEach'
      ) === 'undefined',
    message: 'You need to call "deleteUser" inside a "afterEach" hook'
  },
  {
    condition: () =>
      typeof fnCalls.find(
        call =>
          call.name === 'closeDatabaseConnection' && call.caller === 'after'
      ) === 'undefined',
    message: 'You need to call "closeDatabaseConnection" inside a "after" hook'
  }
]

handler(expectations)
