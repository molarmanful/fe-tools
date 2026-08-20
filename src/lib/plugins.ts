import { Opts } from './opts'

class Mods {
  ts?: Awaited<(typeof import('typescript-eslint'))['default']>
  svelte?: Awaited<(typeof import('eslint-plugin-svelte'))['default']>
  tw?: Awaited<(typeof import('eslint-plugin-better-tailwindcss'))['default']>

  async tsImport({ debug }: Opts) {
    if (this.ts) return
    try {
      const mod = await import('typescript-eslint')
      this.ts = mod.default
    } catch (error) {
      if (debug) console.error('ts module failed to load:', error)
    }
  }

  async svelteImport({ debug }: Opts) {
    if (this.svelte) return
    try {
      const mod = await import('eslint-plugin-svelte')
      this.svelte = mod.default
    } catch (error) {
      if (debug) console.error('svelte module failed to load:', error)
    }
  }

  async twImport({ debug }: Opts) {
    if (this.tw) return
    try {
      const mod = await import('eslint-plugin-better-tailwindcss')
      this.tw = mod.default
    } catch (error) {
      if (debug) console.error('tailwind module failed to load:', error)
    }
  }
}

export const mods = new Mods()
