import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Enforce consistent use of curly braces in control statements
  curly: ['error', 'all'],
  // Enforce === and !==
  eqeqeq: ['error', 'always'],
  // Enforce no variable declarations in case clauses
  'no-case-declarations': 'error',
  // Warn against console statements
  'no-console': 'warn',
  // Enforce no duplicates
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  // Never use eval
  'no-eval': 'error',
  // Never use implied eval
  'no-implied-eval': 'error',
  // Warn against variable declarations from shadowing variables declared in the outer scope
  'no-shadow': 'warn',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  // Gives control to tseslint for unused variables, as it can ignore variables prefixed with underscore
  'no-unused-vars': 'off',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  // Enforce use of let and const
  'no-var': 'error',
  'no-with': 'error',
  // Enforce new line when there is at least one property in an object
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        consistent: true,
        minProperties: 1,
        multiline: true,
      },
    },
  ],
  //
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  // Enforce padding lines between statements
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: 'expression',
    },
    {
      blankLine: 'always',
      next: 'expression',
      prev: '*',
    },
    {
      blankLine: 'any',
      next: 'expression',
      prev: 'expression',
    },
  ],
  // Enforce the use of const for variables that are never reassigned after declared
  'prefer-const': 'error',
}

export { rules as javascriptRules }
