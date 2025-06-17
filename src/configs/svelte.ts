import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { svelteImport, tsImport } from '../lib/plugins'

const svelte = async (opts?: Opts) => {
  const { svelteConfig } = opts ?? {}

  const tsPlugin = await tsImport()
  const sveltePlugin = await svelteImport()

  return sveltePlugin
    ? composer(sveltePlugin.configs.prettier, {
      files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
      languageOptions: {
        parserOptions: {
          ...tsPlugin
            ? {
              extraFileExtensions: ['.svelte'],
              parser: tsPlugin.parser,
            }
            : {},
          svelteConfig,
        },
      },
    })
    : {}
}

export default svelte
