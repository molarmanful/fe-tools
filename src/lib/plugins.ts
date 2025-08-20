let tsMod: Awaited<(typeof import('typescript-eslint'))['default']>
export const tsImport = async (load = true) => {
  if (!tsMod && load) tsMod = (await import('typescript-eslint')).default
  return tsMod
}

let svelteMod: Awaited<(typeof import('eslint-plugin-svelte'))['default']>
export const svelteImport = async (load = true) => {
  if (!svelteMod && load)
    svelteMod = (await import('eslint-plugin-svelte')).default
  return svelteMod
}

let unocssMod: Awaited<(typeof import('@unocss/eslint-config/flat'))['default']>
export const unocssImport = async (load = true) => {
  if (!unocssMod && load)
    unocssMod = (await import('@unocss/eslint-config/flat')).default
  return unocssMod
}
