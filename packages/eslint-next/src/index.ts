import { type Linter } from 'eslint'
import { globalIgnores } from 'eslint/config'

import { defaults } from './rules/defaults.js'

const config: Linter.Config[] = [...defaults, globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])]

export { config as jblibNextConfig }
