import { type Linter } from 'eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'

const defaults: Linter.Config[] = [...nextVitals]

export { defaults }
