import { composer } from 'eslint-flat-config-utils'

import { Opts } from '../lib/opts'
import { mods } from '../lib/plugins'

const tw = async (opts: Opts) => {
  await mods.twImport(opts)
  if (!mods.tw) return

  return composer({
    plugins: { 'better-tailwindcss': mods.tw },
    rules: {
      ...mods.tw.configs.recommended.rules,
      'better-tailwindcss/no-unknown-classes': ['error', {
        detectComponentClasses: true,
      }],
    },
  })
}

export default tw
