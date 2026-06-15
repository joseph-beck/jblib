import { type Linter } from 'eslint'
import jsonc from 'eslint-plugin-jsonc'
import perfectionist from 'eslint-plugin-perfectionist'

import { jsoncRules } from './rules/jsonc.js'
import { perfectionistRules } from './rules/perfectionist.js'

const rules = {
  ...jsoncRules,
  ...perfectionistRules,
}

const plugins = {
  jsonc: jsonc,
  perfectionist: perfectionist,
}

const config: Linter.Config[] = [
  {
    ignores: ['**/build/**', '**/coverage/**', '**/dist/**', '**/dev-dist/**', '**/.vite/**'],
    name: 'jblib/ignore',
  },
  {
    files: ['*.json', '**/*.json'],
    language: 'jsonc/x',
    name: 'jblib/json',
    plugins,
    rules,
  },
]

export { config as jblibJsonConfig }
