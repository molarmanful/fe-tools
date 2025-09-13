import type { Linter } from 'eslint'

import globals from 'globals'

export interface Opts {
  debug?: boolean
  ts?: {
    parserOptions?: Linter.ParserOptions
    envModes?: EnvMode[]
  }
  svelte?: {
    parserOptions?: Linter.ParserOptions
    envModes?: EnvMode[]
  }
}

type EnvMode = keyof typeof globals

export const toGlobals = (
  envModes: EnvMode[],
): Partial<(typeof globals)[EnvMode]> =>
  envModes.reduce((acc, mode) => ({ ...acc, ...globals[mode] }), {})
