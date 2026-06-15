# jblib eslint

defaults for eslint configs for linting of json files with jsonc.

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibJsonConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibJsonConfig,
  // Add your own customisations here.
]

export default config
```

## monorepos

when being used in a monorepo I often encountered issues with conflicting `tsconfigRootDir`, to fix this issue please see below.

```ts
import { jblibConfig } from '@jblib/eslint'
import { jblibJsonConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [
  ...jblibConfig,
  ...jblibJsonConfig,
  // Specify the root of your current project.
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
  // Add your own customisations here.
]

export default config
```
