import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { tsImport } from '../lib/plugins'

const ts = async (opts: Opts) => {
  const {
    enabled = true,
    parserOptions,
    envModes = [],
  } = opts.ts ?? {}

  if (!enabled) return {}

  const tsPlugin = await tsImport()

  return composer(
    tsPlugin.configs.strictTypeChecked,
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
      ...tsPlugin.configs.disableTypeChecked,
    },
  )
}

export default ts
