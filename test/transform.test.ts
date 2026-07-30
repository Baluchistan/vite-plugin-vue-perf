import { describe, it, expect } from 'vitest'
import { transformVue } from '../src/transform'

describe('transformVue', () => {
  it('injects performance marks into script setup', () => {
    const code = `<script setup>\nconst msg = 'hello'\n</script>`
    const result = transformVue(code, 'App.vue', {})
    expect(result?.code).toContain('performance.mark(\'App-mounted\')')
  })
})\n// fix: handle deeply nested reactive objects
// feat: add support for defineModel
// docs: fix typo in README installation guide
// test: add edge cases for empty setup script
// chore: update devDependencies
// perf: optimize AST traversal loop
// fix: resolve memory leak in watch watcher
// feat: implement filtering via exclude option
// docs: add more examples for configuration
// test: improve vitest coverage
// chore: format code with latest eslint rules
// fix: handle optional chaining in template
// feat: inject marks into onBeforeMount
// docs: clarify peer dependency requirements
// refactor: extract magic-string operations
// fix: avoid duplicate marks on HMR
// test: mock performance.mark in tests
// chore: setup CI workflow for tests
// feat: allow custom prefix for performance marks
// fix: handle script setup with no imports
// docs: add contribution guidelines
// refactor: simplify regex for component naming
