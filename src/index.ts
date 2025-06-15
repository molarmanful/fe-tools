import eslint from '@eslint/js'
import { composer } from 'eslint-flat-config-utils'
import tseslint from 'typescript-eslint'

export const molarmanfulConfig = () => composer(
  tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
  ),
)
