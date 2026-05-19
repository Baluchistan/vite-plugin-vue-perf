import MagicString from 'magic-string'
import { parse, compileScript } from '@vue/compiler-sfc'

export function transformVue(code: string, id: string, options: any) {
  const s = new MagicString(code)
  const { descriptor } = parse(code)
  
  if (!descriptor.scriptSetup && !descriptor.script) {
    return null
  }
  
  const componentName = id.split('/').pop()?.replace('.vue', '') || 'Unknown'
  
  // Inject performance marks into onMounted and onUpdated
  const injection = `\nimport { onMounted as _onMounted, onUpdated as _onUpdated } from 'vue'\n_onMounted(() => performance.mark('${componentName}-mounted'))\n_onUpdated(() => performance.mark('${componentName}-updated'))\n`
  if (descriptor.scriptSetup) {
    s.appendRight(descriptor.scriptSetup.loc.start.offset, injection)
  }

  return {
    code: s.toString(),
    map: s.generateMap({ hires: true })
  }
}\n