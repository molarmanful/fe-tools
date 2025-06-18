import stylistic from '@stylistic/eslint-plugin'
import { composer } from 'eslint-flat-config-utils'

export default composer({
  plugins: { '@stylistic': stylistic },
  rules: {
    '@stylistic/no-extra-parens': 'warn',
  },
})
