import { molarmanfulLint } from './src'

const cfg = molarmanfulLint({
  ts: {
    envModes: ['node'],
  },
})

export default cfg
