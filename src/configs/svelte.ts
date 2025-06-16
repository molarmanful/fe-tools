import { composer } from 'eslint-flat-config-utils'

import { svelteImport } from '../lib/plugins'

const svelte = async () => {
  const sveltePlugin = await svelteImport()
  return sveltePlugin
    ? composer(sveltePlugin.configs.recommended)
    : {}
}

export default svelte
