import assert from 'node:assert'

import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { svelteImport, svelteMod, tsMod } from '../lib/plugins'

const svelte = async (opts: Opts) => {
  const {
    enabled = false,
    parserOptions,
    envModes = [],
  } = opts.svelte ?? {}

  if (!enabled) return {}

  await svelteImport()
  assert.ok(svelteMod)

  return composer(
    svelteMod.configs.prettier,
    {
      files: ['**/*.svelte', '**/*.svelte.{js,ts}'],
      languageOptions: {
        globals: toGlobals(['browser', ...envModes]),
        parserOptions: {
          ...tsMod
            ? {
              extraFileExtensions: ['.svelte'],
              parser: tsMod.parser,
            }
            : {},
          ...parserOptions,
        },
      },
    },
  )
}

export default svelte
