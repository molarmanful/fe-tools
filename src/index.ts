import eslint from '@eslint/js'
import { composer } from 'eslint-flat-config-utils'
import tseslint from 'typescript-eslint'
import stylistic from './configs/stylistic'

interface Options {

}

export const molarmanfulConfig = (_: Options) => composer(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  stylistic,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
)
