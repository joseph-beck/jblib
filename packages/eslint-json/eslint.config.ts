import { jblibConfig } from '@jblib/eslint'
import { jblibJsonConfig } from '@jblib/eslint-json'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibJsonConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
]

export default config
