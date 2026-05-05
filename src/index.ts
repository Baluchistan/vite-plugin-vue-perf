import type { Plugin } from 'vite'
import { transformVue } from './transform'

export interface Options {
  /**
   * Filter specific component names to instrument
   */
  include?: string | RegExp | (string | RegExp)[]
}

export default function vuePerfPlugin(options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-vue-perf',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.vue'))
        return null

      return transformVue(code, id, options)
    }
  }
}\n