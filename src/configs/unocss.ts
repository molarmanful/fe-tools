import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { unocssImport, unocssMod } from '../lib/plugins'

const unocss = async (opts: Opts) => {
  await unocssImport(opts)
  if (!unocssMod) return

  return composer(unocssMod)
}

export default unocss
