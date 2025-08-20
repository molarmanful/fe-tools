import assert from 'node:assert'

import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { unocssImport, unocssMod } from '../lib/plugins'

const unocss = async (opts: Opts) => {
  const {
    enabled = false,
  } = opts.ts ?? {}

  if (!enabled) return {}

  await unocssImport()
  assert.ok(unocssMod)

  return composer(unocssMod)
}

export default unocss
