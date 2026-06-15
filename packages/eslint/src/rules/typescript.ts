import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Prevent @ts-ignore, allow @ts-expect-error
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': false,
      'ts-ignore': 'allow-with-description',
    },
  ],
  // Prefer type only imports, and separate them from value imports for better readability
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  // No dupe enums
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  // No explicit any, always prefer a more specific type
  '@typescript-eslint/no-explicit-any': 'error',
  // No floating promises, always handle them with await or .then/.catch
  '@typescript-eslint/no-floating-promises': 'error',
  // No for in loops
  '@typescript-eslint/no-for-in-array': 'error',
  // Don't over-define types for simple things like strings
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
    },
  ],
  // Discourage non-null assertions
  '@typescript-eslint/no-non-null-assertion': 'warn',
  // No unused variables, unless prefixed with underscore
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      ignoreUsingDeclarations: false,
      reportUsedIgnorePattern: true,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  // Enforce the use of as const over literal type
  '@typescript-eslint/prefer-as-const': 'error',
  // Prefer for-of loop over the standard for loop
  '@typescript-eslint/prefer-for-of': 'warn',
  // Prefer the use of ?? over ||
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  // Warn about async functions which have no await expression
  '@typescript-eslint/require-await': 'warn',
}

export { rules as typescriptRules }
