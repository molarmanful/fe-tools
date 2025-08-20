import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { svelteImport, tsImport } from '../lib/plugins'

const svelte = async (opts: Opts) => {
  const {
    enabled = false,
    parserOptions,
    envModes = [],
  } = opts.svelte ?? {}

  if (!enabled) return {}

  const [tsPlugin, sveltePlugin] = await Promise.all([
    tsImport(false),
    svelteImport(),
  ])

  return composer(
    sveltePlugin.configs.prettier,
    {
      files: ['**/*.svelte', '**/*.svelte.{js,ts}'],
      languageOptions: {
        globals: toGlobals(['browser', ...envModes]),
        parserOptions: {
          ...opts.ts?.enabled ?? true
            ? {
              extraFileExtensions: ['.svelte'],
              parser: tsPlugin.parser,
            }
            : {},
          ...parserOptions,
        },
      },
    },
  )
}

export default svelte
