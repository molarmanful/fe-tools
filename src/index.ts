import { composer } from 'eslint-flat-config-utils'

import js from './configs/js'
import perfectionist from './configs/perfectionist'
import regexp from './configs/regexp'
import svelte from './configs/svelte'
import ts from './configs/ts'
import unicorn from './configs/unicorn'
import unocss from './configs/unocss'
import { Opts } from './lib/opts'

export const molarmanfulLint = (opts?: Opts) =>
  composer(
    js,
    ts(),
    perfectionist,
    unicorn,
    regexp,
    svelte(opts),
    unocss(),
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
    },
  )
