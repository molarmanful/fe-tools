import { composer } from 'eslint-flat-config-utils'

import { tsImport } from '../lib/plugins'

const ts = async () => {
  const tsPlugin = await tsImport()

  return tsPlugin
    ? composer(
      tsPlugin.configs.strictTypeChecked,
      {
        files: ['**/*.{ts,mts,cts}'],
        languageOptions: {
          parserOptions: {
            projectService: true,
          },
        },
      },
      {
        files: ['**/*.{js,mjs,cjs}'],
        ...tsPlugin.configs.disableTypeChecked,
      },
    )
    : {}
}

export default ts
