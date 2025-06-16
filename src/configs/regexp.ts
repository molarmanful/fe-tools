import { composer } from 'eslint-flat-config-utils'
import regexp from 'eslint-plugin-regexp'

export default composer(regexp.configs['flat/recommended'])
