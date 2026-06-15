import stylisticPlugin from '@stylistic/eslint-plugin'
import { type Linter } from 'eslint'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import importSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { defaults } from './rules/defaults.js'
import { importRules } from './rules/import.js'
import { importSortRules } from './rules/import-sort.js'
import { javascriptRules } from './rules/javascript.js'
import { perfectionistRules } from './rules/perfectionist.js'
import { stylisticRules } from './rules/stylistic.js'
import { typescriptRules } from './rules/typescript.js'

const rules = {
  ...typescriptRules,
  ...importRules,
  ...importSortRules,
  ...stylisticRules,
  ...javascriptRules,
  ...perfectionistRules,
}

const plugins = {
  '@stylistic': stylisticPlugin,
  '@typescript-eslint': tseslint.plugin,
  import: importPlugin,
  perfectionist: perfectionist,
  'simple-import-sort': importSortPlugin,
}

const config: Linter.Config[] = [
  ...defaults,
  {
    ignores: ['**/build/**', '**/coverage/**', '**/dist/**', '**/dev-dist/**', '**/.vite/**'],
    name: 'jblib/ignore',
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        parser: tseslint.parser,
        project: true,
      },
      sourceType: 'module',
    },
    name: 'jblib/ts',
    plugins,
    rules,
  },
]

export { config as jblibConfig }
