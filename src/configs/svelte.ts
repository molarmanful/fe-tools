import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { mods } from '../lib/plugins'

const svelte = async (opts: Opts) => {
  const {
    parserOptions,
    envModes = [],
  } = opts.svelte ?? {}

  await mods.svelteImport(opts)
  if (!mods.svelte) return

  return composer(
    mods.svelte.configs.recommended,
    mods.svelte.configs.prettier,
    {
      files: ['**/*.svelte', '**/*.svelte.{js,ts}'],
      languageOptions: {
        globals: toGlobals(['browser', ...envModes]),
        parserOptions: {
          ...mods.ts && {
            extraFileExtensions: ['.svelte'],
            parser: mods.ts.parser,
          },
          ...parserOptions,
        },
      },
      rules: {
        'unicorn/no-top-level-assignment-in-function': 'off',
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            internalPattern: [
              '^~/',
              '^@/',
              '^#',
              String.raw`\$lib`,
              String.raw`^\$app/types`,
            ],
          },
        ],
      },
    },
  )
}

export default svelte
