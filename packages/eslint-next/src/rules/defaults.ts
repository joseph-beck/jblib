import { type Linter } from 'eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const defaults: Linter.Config[] = [...nextVitals, ...nextTs]

export { defaults }
