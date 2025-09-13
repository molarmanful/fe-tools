import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { twImport, twMod } from '../lib/plugins'

const tw = async (opts: Opts) => {
  await twImport(opts)
  if (!twMod) return

  return composer({
    plugins: { 'better-tailwindcss': twMod },
    rules: twMod.configs.recommended.rules,
  })
}

export default tw
