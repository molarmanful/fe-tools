import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { svelteImport, svelteMod, tsMod } from '../lib/plugins'

const svelte = async (opts: Opts) => {
  const {
    parserOptions,
    envModes = [],
  } = opts.svelte ?? {}

  await svelteImport(opts)
  if (!svelteMod) return

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
      rules: {
        // TODO: remove after https://github.com/sveltejs/svelte-eslint-parser/issues/657
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            internalPattern: [
              String.raw`^\$lib`,
              String.raw`^\$app/types`,
            ],
          },
        ],
      },
    },
  )
}

export default svelte
