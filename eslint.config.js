import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    // Build output. This repo has no .eslintignore, so eslint 8 linted dist/
    // too whenever it happened to exist (CI never builds before linting, so it
    // was only ever a local annoyance). Flat config does not read .gitignore,
    // so the ignore has to be declared here.
    ignores: ['dist/**']
  },
  js.configs.recommended,
  prettierRecommended,
  {
    linterOptions: {
      // Restores the eslint 8 default. The exercise stubs under src/*/test/
      // ship `/* eslint-disable no-unused-vars */` on purpose, so students'
      // half-written code stays green; with eslint's newer default the
      // `eslint --cache --fix` lint-staged hook strips those directives.
      reportUnusedDisableDirectives: 'off'
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    }
  }
]
