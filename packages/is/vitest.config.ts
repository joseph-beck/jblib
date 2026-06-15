import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    exclude: ['src/**/*.gen.ts'],
    include: ['src/**/*.spec.ts'],
  },
})
