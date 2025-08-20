import { Opts } from './opts'

export let tsMod:
  | Awaited<(typeof import('typescript-eslint'))['default']>
  | undefined

export const tsImport = async ({ debug }: Opts) => {
  if (tsMod) return
  try {
    const mod = await import('typescript-eslint')
    tsMod = mod.default
  } catch (error) {
    if (debug) console.error('ts module failed to load:', error)
  }
}

export let svelteMod:
  | Awaited<(typeof import('eslint-plugin-svelte'))['default']>
  | undefined

export const svelteImport = async ({ debug }: Opts) => {
  if (svelteMod) return
  try {
    const mod = await import('eslint-plugin-svelte')
    svelteMod = mod.default
  } catch (error) {
    if (debug) console.error('svelte module failed to load:', error)
  }
}

export let unocssMod:
  | Awaited<(typeof import('@unocss/eslint-config/flat'))['default']>
  | undefined

export const unocssImport = async ({ debug }: Opts) => {
  if (unocssMod) return
  try {
    const mod = await import('@unocss/eslint-config/flat')
    unocssMod = mod.default
  } catch (error) {
    if (debug) console.error('unocss module failed to load:', error)
  }
}
