import js from '@eslint/js'
import { composer } from 'eslint-flat-config-utils'

const cfg = composer(js.configs.recommended)

export default cfg
