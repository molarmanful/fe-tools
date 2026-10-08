import { composer } from 'eslint-flat-config-utils'
import unicorn from 'eslint-plugin-unicorn'

const cfg = composer(
  unicorn.configs.recommended,
  {
    rules: {
      'unicorn/better-regex': 'warn',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/name-replacements': 'off',
    },
  },
)

export default cfg
