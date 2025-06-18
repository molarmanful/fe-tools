import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { svelteImport, tsImport } from '../lib/plugins'

const svelte = async (opts: Opts) => {
  const {
    parserOptions,
    envModes = [],
  } = opts.svelte ?? {}

  const [tsPlugin, sveltePlugin] = await Promise.all([
    tsImport(),
    svelteImport(),
  ])

  return sveltePlugin
    ? composer(
      sveltePlugin.configs.prettier,
      {
        files: ['**/*.svelte', '**/*.svelte.{js,ts}'],
        languageOptions: {
          globals: toGlobals(['browser', ...envModes]),
          parserOptions: {
            ...tsPlugin
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
    : {}
}

export default svelte
