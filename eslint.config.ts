import { molarmanfulLint } from './src'

export default molarmanfulLint({
  ts: {
    envModes: ['node'],
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
