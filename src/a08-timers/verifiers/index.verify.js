import { delayedHello as originalDlayedHello } from '../src/index.js'
import { mock } from 'node:test'

export const delayedHello = mock.fn(originalDlayedHello)
