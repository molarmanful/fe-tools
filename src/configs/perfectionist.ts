import { composer } from 'eslint-flat-config-utils'
import perfectionist from 'eslint-plugin-perfectionist'

const cfg = composer({
  plugins: { perfectionist },
  rules: {
    'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-imports': ['error', { type: 'natural' }],
    'perfectionist/sort-named-exports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-named-imports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
  },
})

export default cfg
