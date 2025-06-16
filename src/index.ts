import eslint from '@eslint/js'
import { composer } from 'eslint-flat-config-utils'
import tseslint from 'typescript-eslint'

import perfectionist from './configs/perfectionist'
import stylistic from './configs/stylistic'

interface Options {

}

export const molarmanfulConfig = (_: Options) => composer(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  stylistic,
  perfectionist,
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',
      '**/output',
      '**/coverage',
      '**/temp',
      '**/.temp',
      '**/tmp',
      '**/.tmp',
      '**/.history',
      '**/.vitepress/cache',
      '**/.nuxt',
      '**/.next',
      '**/.svelte-kit',
      '**/.vercel',
      '**/.changeset',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/.vite-inspect',
      '**/.yarn',
      '**/vite.config.*.timestamp-*',
      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
      '**/components.d.ts',
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
)
