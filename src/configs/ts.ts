import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { tsImport, tsMod } from '../lib/plugins'

const ts = async (opts: Opts) => {
  const {
    parserOptions,
    envModes = [],
  } = opts.ts ?? {}

  await tsImport(opts)
  if (!tsMod) return

  return composer(
    tsMod.configs.strictTypeChecked,
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
      ...tsMod.configs.disableTypeChecked,
    },
  )
}

export default ts
