import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Enforce consistent line breaks inside array brackets
  'jsonc/array-bracket-newline': ['error', 'consistent'],
  // Enforce consistent spacing inside array brackets
  'jsonc/array-element-newline': ['error', 'consistent'],
  // Enforce no trailing commas
  'jsonc/comma-dangle': ['error', 'never'],
  // Enforce indentation of 2 spaces
  'jsonc/indent': ['error', 2],
  // Enforce consistent spacing between keys and values
  'jsonc/key-spacing': 'error',
  // Enforce no duplicate keys
  'jsonc/no-dupe-keys': 'error',
  // Enforce consistent line breaks inside object curly braces
  'jsonc/object-curly-newline': [
    'error',
    {
      consistent: true,
    },
  ],
  // Enforce newline after each object property
  'jsonc/object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  // Enforce quoting of property names (always quote property names)
  'jsonc/quote-props': ['error', 'always'],
  // This is achieved through perfectionist instead.
  'jsonc/sort-keys': 'off',
  // Enforce valid JSON numbers (disallow leading zeros, octal literals, hexadecimal literals, and binary literals)
  'jsonc/valid-json-number': 'error',
}

export { rules as jsoncRules }
