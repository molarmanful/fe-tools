import stylistic from '@stylistic/eslint-plugin'
import { composer } from 'eslint-flat-config-utils'

export default composer(stylistic.configs.recommended, {
  rules: {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],
    '@stylistic/curly-newline': ['error', 'always'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline'],
    '@stylistic/no-extra-parens': ['error', 'all'],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: '*', prev: 'import' },
      { blankLine: 'any', next: 'import', prev: 'import' },
    ],
  },
})
