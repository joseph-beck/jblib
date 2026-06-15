import { type Linter } from 'eslint'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'

import { reactRules } from './rules/react.js'
import { reactRefreshRules } from './rules/react-refresh.js'

const rules = {
  ...reactRules,
  ...reactRefreshRules,
}

const plugins = {
  react: react,
  'react-refresh': reactRefresh,
}

const config: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx}'],
    name: 'jblib/tsx',
    plugins,
    rules,
  },
]

export { config as jblibReactConfig }
