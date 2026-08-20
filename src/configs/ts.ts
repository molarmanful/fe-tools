import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { mods } from '../lib/plugins'

const ts = async (opts: Opts) => {
  const {
    parserOptions,
    envModes = [],
  } = opts.ts ?? {}

  await mods.tsImport(opts)
  if (!mods.ts) return

  return composer(
    mods.ts.configs.strictTypeChecked,
    {
      languageOptions: {
        globals: toGlobals(envModes),
        parserOptions: {
          projectService: true,
          ...parserOptions,
        },
      },
    },
    {
      files: ['**/*.{js,mjs,cjs}'],
      ...mods.ts.configs.disableTypeChecked,
    },
  )
}

export default ts
