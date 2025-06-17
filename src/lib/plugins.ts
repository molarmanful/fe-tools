export const tsImport = async () => {
  try {
    return await import('typescript-eslint')
  } catch {
    return
  }
}

export const svelteImport = async () => {
  try {
    return await import('eslint-plugin-svelte')
  } catch {
    return
  }
}

export const svelteParserImport = async () => {
  try {
    return await import('svelte-eslint-parser')
  } catch {
    return
  }
}

export const unocssImport = async () => {
  try {
    return await import('@unocss/eslint-config/flat')
  } catch {
    return
  }
}
