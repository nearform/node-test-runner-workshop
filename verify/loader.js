import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

export async function resolve(url, context, defaultResolve) {
  // To avoid circular dependencies
  // We suppose that all the verifiers include "verify" in the name
  if (
    typeof context.parentURL !== 'undefined' &&
    context.parentURL.includes('verify')
  ) {
    return defaultResolve(url, context, defaultResolve)
  }

  const modulesToPatch = {
    'node:test': './test.verify.js',
    'node:assert': './assert.verify.js',
    // We're always mocking the src in order to spy the calls
    '../src/index.js': path.join(process.cwd(), 'verifiers', 'index.verify.js')
  }

  if (Object.keys(modulesToPatch).includes(url)) {
    if (process.platform === 'win32') {
      const __dirname = path.dirname(fileURLToPath(import.meta.url))
      console.log('__dirname', __dirname)
      const filePath = path.join(__dirname, modulesToPatch[url])
      console.log('filePath', filePath)
      const fileUrl = pathToFileURL(filePath).href
      console.log('fileUrl', fileUrl)

      return defaultResolve(fileUrl, context, defaultResolve)
    } else {
      return defaultResolve(
        new URL(modulesToPatch[url], import.meta.url).href,
        context,
        defaultResolve
      )
    }
  }

  // For all other modules, use the default loader
  return defaultResolve(url, context, defaultResolve)
}
