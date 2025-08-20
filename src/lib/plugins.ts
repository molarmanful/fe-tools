export let tsMod:
  | Awaited<(typeof import('typescript-eslint'))['default']>
  | undefined

export const tsImport = async () => {
  if (tsMod) return
  const mod = await import('typescript-eslint')
  tsMod = mod.default
}

export let svelteMod:
  | Awaited<(typeof import('eslint-plugin-svelte'))['default']>
  | undefined

export const svelteImport = async () => {
  if (svelteMod) return
  const mod = await import('eslint-plugin-svelte')
  svelteMod = mod.default
}

export let unocssMod:
  | Awaited<(typeof import('@unocss/eslint-config/flat'))['default']>
  | undefined

export const unocssImport = async () => {
  if (unocssMod) return
  const mod = await import('@unocss/eslint-config/flat')
  unocssMod = mod.default
}
