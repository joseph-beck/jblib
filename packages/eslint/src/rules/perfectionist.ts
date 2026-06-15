import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Sort objects alphabetically
  'perfectionist/sort-objects': 'error',
}

export { rules as perfectionistRules }
