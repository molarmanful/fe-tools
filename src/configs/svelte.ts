import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { svelteImport, svelteParserImport, tsImport } from '../lib/plugins'

const svelte = async (opts?: Opts) => {
  const { svelteConfig } = opts ?? {}

  const tsPlugin = await tsImport()
  const sveltePlugin = await svelteImport()
  const svelteParser = await svelteParserImport()

  return sveltePlugin && svelteParser
    ? composer(sveltePlugin.configs.prettier, {
      files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
      languageOptions: {
        parser: svelteParser,
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
