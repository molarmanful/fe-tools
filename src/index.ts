import { composer } from 'eslint-flat-config-utils'

import js from './configs/js'
import perfectionist from './configs/perfectionist'
import regexp from './configs/regexp'
import stylistic from './configs/stylistic'
import svelte from './configs/svelte'
import ts from './configs/ts'
import unicorn from './configs/unicorn'
import unocss from './configs/unocss'
import { Opts } from './lib/opts'

export const molarmanfulLint = (opts: Opts = {}) =>
  composer(
    js,
    ts(opts),
    stylistic,
    perfectionist,
    unicorn,
    regexp,
    svelte(opts),
    unocss(),
  )
