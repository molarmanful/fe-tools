import { composer } from 'eslint-flat-config-utils'
import unicorn from 'eslint-plugin-unicorn'

export default composer(unicorn.configs.recommended, {
  rules: {
    'unicorn/better-regex': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
})
