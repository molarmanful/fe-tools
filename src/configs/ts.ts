import assert from 'node:assert'

import { composer } from 'eslint-flat-config-utils'

import { Opts, toGlobals } from '../lib/opts'
import { tsImport, tsMod } from '../lib/plugins'

const ts = async (opts: Opts) => {
  const {
    enabled = true,
    parserOptions,
    envModes = [],
  } = opts.ts ?? {}

  if (!enabled) return {}

  await tsImport()
  assert.ok(tsMod)

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
