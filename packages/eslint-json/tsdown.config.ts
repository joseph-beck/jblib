import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    level: 'error',
    profile: 'esm-only',
  },
  clean: true,
  dts: true,
  entry: ['./src/index.ts'],
  exports: {
    devExports: true,
  },
  fixedExtension: false,
  format: ['esm'],
  minify: false,
  platform: 'node',
  publint: {
    strict: true,
  },
  sourcemap: true,
  unbundle: true,
})
