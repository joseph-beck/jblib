import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Consistent type specifier style, prefer inline type specifiers for better readability
  // import { type Foo } from './foo' is more readable than import type { Foo } from './foo'
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  // Enforces that imports must come before all other statements
  'import/first': 'error',
  // Enforce newline after imports
  'import/newline-after-import': 'error',
  // Enforce no absolute paths
  'import/no-absolute-path': 'error',
  // Enforce no commonjs imports
  'import/no-commonjs': 'error',
  // Enforce no duplicate imports
  'import/no-duplicates': 'error',
  // Enforce no relative packages
  'import/no-relative-packages': 'error',
  // Enforce no relative parent imports
  'import/no-relative-parent-imports': 'error',
  // Enforce no self imports
  'import/no-self-import': 'error',
  // Enforce no useless path segments and no useless index files
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
    },
  ],
}

export { rules as importRules }
