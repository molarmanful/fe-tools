import { composer } from 'eslint-flat-config-utils'
import regexp from 'eslint-plugin-regexp'

const cfg = composer(regexp.configs['flat/recommended'])

export default cfg
