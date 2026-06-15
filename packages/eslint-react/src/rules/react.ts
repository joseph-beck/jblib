import { type Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Prefer destructuring props/state
  'react/destructuring-assignment': ['warn', 'always'],
  // Warn against missing display name
  'react/display-name': 'warn',
  // Enforce consistent function component style
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  // No boolean values in JSX
  'react/jsx-boolean-value': ['error', 'never'],
  // No unnecessary curly braces in JSX
  'react/jsx-curly-brace-presence': [
    'error',
    {
      children: 'never',
      props: 'never',
    },
  ],
  // Prefer fragments shorthand <>...</>
  'react/jsx-fragments': ['warn', 'syntax'],
  // No new lines in JSX
  'react/jsx-newline': [
    'error',
    {
      prevent: true,
    },
  ],
  // No accidental duplicate props
  'react/jsx-no-duplicate-props': 'error',
  // No useless fragments in JSX
  'react/jsx-no-useless-fragment': 'error',
  // Enforce consistent prop sorting in JSX
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      multiline: 'last',
      reservedFirst: true,
      shorthandFirst: true,
    },
  ],
  // Warn against use of array index as key
  'react/no-array-index-key': 'warn',
  // Enforce that children is not used as a prop
  'react/no-children-prop': 'error',
  // Warn against unstable nested component definitions
  'react/no-unstable-nested-components': [
    'warn',
    {
      allowAsProps: true,
    },
  ],
  // Enforce self-closing tags for components without children
  'react/self-closing-comp': 'error',
}

export { rules as reactRules }
