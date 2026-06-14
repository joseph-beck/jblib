import { jblibConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
]

export default config
