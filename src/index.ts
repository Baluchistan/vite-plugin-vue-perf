import type { Plugin } from 'vite'
import { transformVue } from './transform'

export interface Options {
  include?: string | RegExp | (string | RegExp)[]
  exclude?: string | RegExp | (string | RegExp)[]
}

export default function vuePerfPlugin(options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-vue-perf',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.vue')) return null
      // Ignore node_modules
      if (id.includes('node_modules')) return null

      return transformVue(code, id, options)
    }
  }
}\n