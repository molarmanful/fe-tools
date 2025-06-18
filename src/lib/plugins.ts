export const tsImport = async () => {
  try {
    const res = await import('typescript-eslint')
    return res.default
  } catch {
    return
  }
}

export const svelteImport = async () => {
  try {
    const res = await import('eslint-plugin-svelte')
    return res.default
  } catch {
    return
  }
}

export const unocssImport = async () => {
  try {
    const res = await import('@unocss/eslint-config/flat')
    return res.default
  } catch {
    return
  }
}
