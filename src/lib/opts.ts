import type { Linter } from 'eslint'

import globals from 'globals'

export type Opts = Partial<Record<Key, Partial<Opt>>>

type Key = 'ts' | 'svelte'

interface Opt {
  parserOptions: Linter.ParserOptions
  envModes: EnvMode[]
}

type EnvMode = keyof typeof globals

export const toGlobals = (
  envModes: EnvMode[],
): Partial<(typeof globals)[EnvMode]> =>
  envModes.reduce((acc, mode) => ({ ...acc, ...globals[mode] }), {})
