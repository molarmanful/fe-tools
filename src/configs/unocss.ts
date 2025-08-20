import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { unocssImport } from '../lib/plugins'

const unocss = async (opts: Opts) => {
  const {
    enabled = false,
  } = opts.ts ?? {}

  if (!enabled) return {}

  const unocssPlugin = await unocssImport()

  return composer(unocssPlugin)
}

export default unocss
