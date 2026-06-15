import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Exports must be sorted
  'simple-import-sort/exports': 'error',
  // Imports must be sorted
  'simple-import-sort/imports': 'error',
}

export { rules as importSortRules }
