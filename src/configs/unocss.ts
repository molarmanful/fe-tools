import { composer } from 'eslint-flat-config-utils'

import { unocssImport } from '../lib/plugins'

const unocss = async () => {
  const unocssPlugin = await unocssImport()

  return unocssPlugin
    ? composer(unocssPlugin)
    : {}
}

export default unocss
