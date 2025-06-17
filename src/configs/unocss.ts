import { composer } from 'eslint-flat-config-utils'

import { tsImport } from '../lib/plugins'

const unocss = async () => {
  const unocssPlugin = await tsImport()

  return unocssPlugin
    ? composer(unocssPlugin.configs.recommended)
    : {}
}

export default unocss
