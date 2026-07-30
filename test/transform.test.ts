import { describe, it, expect } from 'vitest'
import { transformVue } from '../src/transform'

describe('transformVue', () => {
  it('injects performance marks into script setup', () => {
    const code = `<script setup>\nconst msg = 'hello'\n</script>`
    const result = transformVue(code, 'App.vue', {})
    expect(result?.code).toContain('performance.mark(\'App-mounted\')')
  })
})\n// fix: handle deeply nested reactive objects
