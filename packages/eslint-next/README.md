# jblib eslint next

defaults for eslint next configs. it is recommended to use this alongside [@jblib/eslint](../eslint/) and [@jblib/eslint-react](../eslint-react/).

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibNextConfig } from '@jblib/eslint-next'
import { jblibReactConfig } from '@jblib/eslint-react'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibReactConfig,
  ...jblibNextConfig,
  // Add your own customisations here.
]

export default config
```
