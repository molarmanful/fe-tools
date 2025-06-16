export const tsImport = async () => {
  try {
    return await import('typescript-eslint')
  }
  catch {
    return
  }
}

export const svelteImport = async () => {
  try {
    return await import('eslint-plugin-svelte')
  }
  catch {
    return
  }
}
