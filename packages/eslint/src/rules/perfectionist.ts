import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Sort interfaces alphabetically
  'perfectionist/sort-interfaces': 'error',
  // Sort intersection types alphabetically
  'perfectionist/sort-intersection-types': 'error',
  // Sort object types alphabetically
  'perfectionist/sort-object-types': 'error',
  // Sort objects alphabetically
  'perfectionist/sort-objects': 'error',
  // Sort union types alphabetically
  'perfectionist/sort-union-types': 'error',
}

export { rules as perfectionistRules }
