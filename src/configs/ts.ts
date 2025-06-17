import { composer } from 'eslint-flat-config-utils'

import { tsImport } from '../lib/plugins'

const ts = async () => {
  const tsPlugin = await tsImport()

  return tsPlugin
    ? composer(tsPlugin.configs.strictTypeChecked, {
      languageOptions: {
        parserOptions: {
          projectService: true,
        },
      },
    })
    : {}
}

export default ts
